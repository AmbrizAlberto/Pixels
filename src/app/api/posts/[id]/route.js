import { NextResponse } from "next/server";

export function GET(request, {params}){
    return NextResponse.json('obteniendo post '+ params.id)
}

export function PUT(request, {params}){
    return NextResponse.json('actualizando post '+ params.id)
}

export function DELETE(request, {params}){
    return NextResponse.json('eliminando post '+ params.id)
}