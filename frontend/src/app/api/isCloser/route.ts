import { NextResponse } from "next/server";

function sleep(ms:number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// @ts-ignore
export async function POST(req, res) {
    await sleep(15000);
    const data = await req.json()
    const { userLon, userLat, placeLon, placeLat } = data;
    const angle = ((userLon - placeLon) ** 2 + (userLat - placeLat) ** 2) ** (1 / 2);
    const distance = angle * 222;
    const isCloser = distance < 1;
    return NextResponse.json({ isCloser })
}