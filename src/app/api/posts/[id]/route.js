// src/app/posts/[id]/route.js

import { NextResponse } from "next/server";
import prisma from "../../../../libs/db";

export async function GET(request, { params }) {
    const post = await prisma.post.findUnique({
        where: {
            id: Number(params.id),
        },
    });
    return NextResponse.json(post);
}

export async function PUT(request, { params }) {
    try {
        const postId = Number(params.id);
        if (isNaN(postId)) {
            return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
        }

        const body = await request.json();
        const updatedPost = await prisma.post.update({
            where: {
                id: postId,
            },
            data: body,
        });

        return NextResponse.json(updatedPost);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const postId = Number(params.id);
        if (isNaN(postId)) {
            return NextResponse.json({ error: "Invalid post ID" }, { status: 400 });
        }

        await prisma.post.delete({
            where: {
                id: postId,
            },
        });

        return NextResponse.json({ message: `Post ${postId} deleted successfully` });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
