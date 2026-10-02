import { NextResponse, NextRequest } from "next/server";
import { TransactionSchema } from "@/transactionschema";
import { mockTransactions } from "@/data/mockTransactions";
import { readJson } from "@/lib/readJson";

export async function GET() {
  return NextResponse.json({ data: mockTransactions });
}

export async function POST(request: NextRequest) {
  const body = await readJson(request);
  if (body === null) {
    return NextResponse.json(
      { success: false, message: "Request body must be valid JSON" },
      { status: 400 },
    );
  }

  const result = TransactionSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { success: false, message: result.error.issues },
      { status: 400 },
    );
  }

  // Server-controlled fields go last so the client can never override them.
  const newTransaction = { ...result.data, id: crypto.randomUUID() };
  mockTransactions.push(newTransaction);

  return NextResponse.json({ data: newTransaction }, { status: 201 });
}