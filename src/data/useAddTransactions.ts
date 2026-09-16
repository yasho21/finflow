import { transactionToAdd } from "@/transactionschema";
import { Transaction } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

type AddTransactionOutput = { data: Transaction };
type ZodIssue = { path: (string | number)[]; message: string };
type AddTransactionError = { success: false; message: ZodIssue[] };

async function addTransaction(body: transactionToAdd): Promise<Transaction> {
  const res = await fetch("/api/transaction", {
    method: "POST",
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const err: AddTransactionError = await res.json();
    throw new Error(err.message.map((i) => i.message).join(", "));
  }
  const json: AddTransactionOutput = await res.json();
  return json.data;
}

export function useAddTransactions() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addTransaction,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["Transactions"] }),
  });
}
