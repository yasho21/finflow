import {z} from "zod";
import { Category,TransactionType,TransactionTypeENUM } from "@/types";


export const TransactionSchema=z.object({
   description:z.string(),
   amount:z.number(),
   type:z.enum(TransactionTypeENUM),
   category:z.enum(Category),
   date:z.string(),
   id:z.string().optional()
})

export const TransactionSchemaEdit=z.object({
   description:z.string().optional(),
   amount:z.number().optional(),
   type:z.enum(TransactionTypeENUM).optional(),
   category:z.enum(Category).optional(),
   date:z.string().optional(),
   id:z.string().optional()
})

export type transactionToAdd=z.infer<typeof TransactionSchema>



