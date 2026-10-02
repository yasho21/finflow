import { NextResponse, NextRequest } from "next/server";
import { TransactionSchemaEdit } from "@/transactionschema";
import { mockTransactions } from "@/data/mockTransactions";
import { readJson } from "@/lib/readJson";

type RouteContext = { params: Promise<{ id: string }> };

export async function PUT(request: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  const body = await readJson(request);
  if (body === null) {
    return NextResponse.json(
      { success: false, message: "Request body must be valid JSON" },
      { status: 400 },
    );
  }

  const result = TransactionSchemaEdit.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { success: false, message: result.error.issues },
      { status: 400 },
    );
  }

  const index = mockTransactions.findIndex((tx) => tx.id === id);
  if (index === -1) {
    return NextResponse.json(
      { success: false, message: "Transaction not found" },
      { status: 404 },
    );
  }

  // The id from the URL always wins.
  mockTransactions[index] = { ...mockTransactions[index], ...result.data, id };
  return NextResponse.json({ data: mockTransactions[index] }, { status: 200 });
}

export async function DELETE(_request: NextRequest, { params }: RouteContext) {
  const { id } = await params;

  const index = mockTransactions.findIndex((tx) => tx.id === id);
  if (index === -1) {
    return NextResponse.json(
      { success: false, message: "Transaction not found" },
      { status: 404 },
    );
  }

  mockTransactions.splice(index, 1);
  return new NextResponse(null, { status: 204 }); // 204 = success, no body
}