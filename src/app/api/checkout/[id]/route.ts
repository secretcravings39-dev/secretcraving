import { NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    if (!ObjectId.isValid(id)) {
      return NextResponse.json({ error: "Invalid order ID." }, { status: 400 });
    }

    const db = await getDb();
    const order = await db.collection("orders").findOne(
      { _id: new ObjectId(id) },
      {
        projection: {
          contact: 1,
          deliveryAddress: 1,
          orderItems: 1,
          subtotal: 1,
          shipping: 1,
          total: 1,
          paymentMethod: 1,
          status: 1,
          createdAt: 1,
          updatedAt: 1,
        },
      }
    );

    if (!order) {
      return NextResponse.json({ error: "Order not found." }, { status: 404 });
    }

    return NextResponse.json(order);
  } catch (err) {
    console.error("Fetch order (public) error:", err);
    return NextResponse.json(
      { error: "Failed to fetch order." },
      { status: 500 }
    );
  }
}
