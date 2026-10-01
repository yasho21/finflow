// data/useTransactions.ts
import { useQuery } from "@tanstack/react-query";
import type { Transaction } from "@/types";
import { PrismaClient } from '@src/prisma';

type TransactionResponse={data:Transaction[]};
const prisma = new PrismaClient();
async function fetchQuery():Promise<Transaction[]>  {
let res=await fetch("/api/transaction");
if(!res.ok){
  throw new Error("Failed to fetch");
}
let json:TransactionResponse=await res.json();
return json.data;
}


export function useTransactions(){
  return useQuery({
    queryKey:["Transactions"],
    queryFn:fetchQuery
  })
}