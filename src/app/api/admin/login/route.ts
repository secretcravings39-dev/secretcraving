import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "privateroom-admin-secret-2026";
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@privateroom.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "Admin@123";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    const normalizedEmail = String(email ?? "").trim().toLowerCase();
    const normalizedAdminEmail = ADMIN_EMAIL.trim().toLowerCase();
    const normalizedPassword = String(password ?? "").trim();
    const normalizedAdminPassword = ADMIN_PASSWORD.trim();

    if (normalizedEmail !== normalizedAdminEmail || normalizedPassword !== normalizedAdminPassword) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }
    const token = jwt.sign({ email: normalizedAdminEmail, role: "admin" }, JWT_SECRET, { expiresIn: "7d" });
    return NextResponse.json({ token, admin: { email: normalizedAdminEmail, name: "Admin" } });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
