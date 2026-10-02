import {z} from "zod";
import { Category,TransactionType,TransactionTypeENUM } from "@/types";


export const TransactionSchema=z.object({
   description:z.string().trim().min(1),
   amount:z.number().positive(),
   type:z.enum(TransactionTypeENUM),
   category:z.enum(Category),
   date:z.string(),
   id:z.iso.date()
})

export const TransactionSchemaEdit=z.object({
  description:z.string().trim().min(1),
   amount:z.number().positive(),
   type:z.enum(TransactionTypeENUM).optional(),
   category:z.enum(Category).optional(),
   date:z.string().optional(),
    id:z.iso.date()
})

export type transactionToAdd=z.infer<typeof TransactionSchema>



