export type TransactionType = 'income' | 'expense'

export type Category =
  | 'Salary'
  | 'Food'
  | 'Transport'
  | 'Shopping'
  | 'Bills'
  | 'Entertainment'
  | 'Health'
  | 'Other'

export type Transaction = {
  id: string
  description: string
  amount: number
  type: TransactionType
  category: Category
  date: string // ISO format: "2026-08-05"
}

export type Account = {
  id: string
  name: string
  balance: number
}