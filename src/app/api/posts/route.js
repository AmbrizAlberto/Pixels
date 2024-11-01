// src/app/api/posts/route.js

import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import prisma from '@/libs/db';
import { NextResponse } from 'next/server';

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
        console.log('Fetched posts:', posts);  // Añadir log para verificar las publicaciones
        return NextResponse.json(posts);
    } catch (error) {
        console.error('Error fetching posts:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}


export async function POST(request) {
    try {
        const { title, description } = await request.json();
        const session = await getServerSession(authOptions);

        if (!session || !session.user) {
            throw new Error('User session not found');
        }

        const userId = session.user.id;

        console.log('Session:', session);  // Añadir este log para verificar la sesión completa
        console.log('User ID:', userId);  // Añadir este log para verificar el userId

        if (!userId) {
            throw new Error('User ID not found in session');
        }

        const newPost = await prisma.post.create({
            data: {
                title,
                description,
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
