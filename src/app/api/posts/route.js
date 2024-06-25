// src/app/posts/route.js

import { NextResponse } from "next/server";
import prisma from "@/libs/db";

export async function GET() {
    try {
        const posts = await prisma.post.findMany();
        console.log(posts); // Solo para propósitos de debugging, puedes eliminarlo en producción

        return NextResponse.json(posts);
    } catch (error) {
        console.error("Error fetching posts:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function POST(request) {
    try {
        const { title, description } = await request.json();

        const newPost = await prisma.post.create({
            data: {
                title,
                description
            }
        });

        return NextResponse.json(newPost);
    } catch (error) {
        console.error("Error creating post:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
