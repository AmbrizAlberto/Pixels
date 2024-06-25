import { NextResponse } from "next/server";
import db from "@/libs/db";

export async function GET(){
    const posts = await db.post.findMany()
    console.log(posts)

    return NextResponse. json("obteniendo tareas")
} 

export function POST() {
    return NextResponse. json("creando tareas")
}