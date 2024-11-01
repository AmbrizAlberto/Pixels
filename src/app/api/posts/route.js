// src/app/api/posts/route.js

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/libs/db';
import { NextResponse } from 'next/server';
import cloudinary from 'cloudinary';



// Inicializa Cloudinary
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
        console.log('Fetched posts:', posts);
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
            return NextResponse.json({ error: 'User session not found' }, { status: 401 });
        }

        const userId = session.user.id;

        // Obtener el cuerpo de la solicitud como FormData
        const formData = await req.formData();
        const title = formData.get("title");
        const description = formData.get("description");
        const imageFile = formData.get("image");

        if (!title || !description) {
            return NextResponse.json({ error: 'Title and description are required.' }, { status: 400 });
        }

        let imageUrl = null;
        if (imageFile) {
            // Subir la imagen a Cloudinary
            const uploadResponse = await cloudinary.v2.uploader.upload(imageFile.path);
            imageUrl = uploadResponse.secure_url; // URL de la imagen cargada
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

        return NextResponse.json(newPost);
    } catch (error) {
        console.error('Error creating post:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
