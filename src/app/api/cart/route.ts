import { NextRequest, NextResponse } from "next/server";

export function POST (NextRequest: any){
    return NextResponse.json({ message: "Hello, World!" });
}