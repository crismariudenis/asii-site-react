import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import { hash } from "bcryptjs";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newName: name, newPasswords: password } = await request.json();
  const hashPass = await hash(password, 10);

  await connectMongoDB();
  await User.findByIdAndUpdate(id, { name, hashPass: password });

  return NextResponse.json(
    { message: "User update" },
    {
      status: 200,
    }
  );
}
export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const user = await User.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });
}
