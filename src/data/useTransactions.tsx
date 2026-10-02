// data/useTransactions.ts
import { useQuery } from "@tanstack/react-query";
import type { Transaction } from "@/types";

type TransactionResponse = { data: Transaction[] };

async function fetchQuery(): Promise<Transaction[]> {
  const res = await fetch("/api/transaction");
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const json: TransactionResponse = await res.json();
  return json.data;
}

export function useTransactions() {
  return useQuery({
    queryKey: ["Transactions"],
    queryFn: fetchQuery,
  });
}
