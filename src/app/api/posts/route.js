import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET(){
    const posts = await db.post.findMany()
    console.log(posts)

    return NextResponse. json("obteniendo tareas")
} 

export async function POST(request) {
    const {title, description} = await request.json()

    const newPost = await db.post.create({
        data: {
            title,
            description
        }
    })

    return NextResponse. json(newPost)
}