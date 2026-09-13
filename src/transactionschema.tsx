import {z} from "zod";
import { Category,TransactionType } from "@/types";


export const TransactionSchema=z.object({
   description:z.string(),
   amount:z.string(),
   type:z.enum(["income", "expense"]),
   category:z.enum(["Shopping"]),
   date:z.string(),
   id:z.string().optional()
})

export const TransactionSchemaEdit=z.object({
   description:z.string().optional(),
   amount:z.number().optional(),
   type:z.enum(["income", "expense"]).optional(),
   category:z.enum(["Shopping"]).optional(),
   date:z.string().optional(),
   id:z.string().optional()
})

export type transactionToAdd=z.infer<typeof TransactionSchema>



