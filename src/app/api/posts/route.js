// src/app/api/posts/route.js

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/libs/db';
import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
    try {
        const posts = await prisma.post.findMany({
            include: {
                author: {
                    select: {
                        username: true,
                    },
                },
            },
        });
        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function POST(req) {
    try {
        const session = await getServerSession(authOptions);
        if (!session || !session.user) {
            console.error('Sesión de usuario no encontrada.');
            return NextResponse.json({ error: 'User session not found' }, { status: 401 });
        }

        const userId = session.user.id;
        console.log("User ID:", userId);

        const formData = await req.formData();
        const title = formData.get("title");
        const description = formData.get("description");
        const imageFile = formData.get("image");

        console.log("Datos del formulario:", { title, description, imageFile });

        if (!title || !description) {
            console.error('Título y descripción requeridos.');
            return NextResponse.json({ error: 'Title and description are required.' }, { status: 400 });
        }

        let imageUrl = null;

        if (imageFile) {
            try {
                const buffer = Buffer.from(await imageFile.arrayBuffer());
                console.log("Subiendo imagen a Cloudinary...");
        
                const uploadResponse = await new Promise((resolve, reject) => {
                    const timeout = setTimeout(() => reject(new Error('Request Timeout')), 30000); // Tiempo límite de 30s
        
                    const stream = cloudinary.uploader.upload_stream(
                        {
                            folder: 'mascotas',
                            quality: 'auto',
                            fetch_format: 'auto'
                        },
                        (error, result) => {
                            clearTimeout(timeout); // Limpiar el tiempo de espera si se completa la carga
                            if (error) {
                                console.error('Error en la subida a Cloudinary:', error);
                                reject(error);
                            } else {
                                resolve(result);
                            }
                        }
                    );
                    stream.end(buffer);
                });
        
                imageUrl = uploadResponse.secure_url;
                console.log("URL de la imagen subida:", imageUrl);
            } catch (error) {
                console.error('Error al subir imagen a Cloudinary:', error);
                return NextResponse.json({ error: `Error al subir imagen a Cloudinary: ${error.message || error}` }, { status: 500 });
            }
        }

        const newPost = await prisma.post.create({
            data: {
                title,
                description,
                imageUrl: imageUrl || null,
                author: {
                    connect: { id: userId },
                },
            },
            include: {
                author: {
                    select: {
                        username: true,
                    },
                },
            },
        });

        console.log("Publicación creada:", newPost);
        return NextResponse.json(newPost);
    } catch (error) {
        console.error('Error al crear la publicación:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
