import { z } from "zod";
import { Category, TransactionTypeENUM } from "@/types";

export const TransactionSchema = z.object({
  description: z.string().trim().min(1, "Description is required"),
  amount: z.number().positive("Amount must be greater than 0"),
  type: z.enum(TransactionTypeENUM),
  category: z.enum(Category),
  date: z.iso.date("Use YYYY-MM-DD"),
});

export const TransactionSchemaEdit = TransactionSchema.partial();

export type transactionToAdd = z.infer<typeof TransactionSchema>;