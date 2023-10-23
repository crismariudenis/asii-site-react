import connectMongoDB from "@/libs/mongodb";
import Card from "@/models/card";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { name, inIasi, technologies, packets, helpingMethod, contactPeriod } =
    await request.json();
  await connectMongoDB();
  await Card.create({
    name,
    inIasi,
    technologies,
    packets,
    helpingMethod,
    contactPeriod,
  });
  return NextResponse.json({ message: "Card Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const card = await Card.find();
  return NextResponse.json({ card });
}
