import { NextResponse, NextRequest } from "next/server";
import { success, z } from "zod";
import { TransactionSchemaEdit } from "@/transactionschema";

import { mockTransactions } from "@/data/mockTransactions";
import { fa } from "zod/locales";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  console.log(id);
  const deleted = mockTransactions.findIndex((tx) => tx.id === id);
  if (deleted != -1) {
    mockTransactions.splice(deleted, 1);
    return NextResponse.json({ status: 204 });
  } else {
    return NextResponse.json(
      { data: "item not found to be deleted" },
      { status: 404 },
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const body = await request.json();
  const result = TransactionSchemaEdit.safeParse(body);
  if (result.success) {
    const index = mockTransactions.findIndex((tx) => tx.id === id);
    if (index != -1) {
      mockTransactions[index] = {...mockTransactions[index], ...result.data, id};
      return NextResponse.json({ data: mockTransactions[index] }, { status: 200 });
    } else {
      return NextResponse.json({ data: "Item not found" }, { status: 404 });
    }
  } else {
    return NextResponse.json({ success:false,message:result.error.issues }, { status: 400 });
  }
}
