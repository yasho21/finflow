import { TransactionSchemaEdit } from "@/transactionschema";
import { Transaction } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";

export type TransactionEdt = z.infer<typeof TransactionSchemaEdit>;
export type UpdateTransactionInput = TransactionEdt & { id: string };
type UpdateTransactionOutput = { data: Transaction };

async function onUpdate({
  id,
  ...data
}: UpdateTransactionInput): Promise<Transaction> {
  console.log(id);
  const res = await fetch("/api/transaction/" + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error("Failed to update");
  }
  let json: UpdateTransactionOutput = await res.json();
  return json.data;
}

export function useUpdateTransactions() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: onUpdate,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Transactions"] }),
  });
}
