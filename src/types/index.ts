export type TransactionType = 'income' | 'expense'

export enum TransactionTypeENUM {
 income= 'income' ,
 expense= 'expense'
}

export enum Category {
   Salary='Salary',
   Food='Food',
   Transport='Transport',
   Shopping='Shopping',
   Bills='Bills',
  Entertainment= 'Entertainment',
   Health='Health',
   Other='Other'
}

export type Transaction = {
  id: string
  description: string
  amount: number
  type: TransactionTypeENUM
  category: Category
  date: string // ISO format: "2026-08-05"
}

export type Account = {
  id: string
  name: string
  balance: number
}