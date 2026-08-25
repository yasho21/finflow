import { Transaction } from '@/types'

export const mockTransactions: Transaction[] = [
  { id: '1', description: 'Monthly Salary', amount: 5200, type: 'income', category: 'Salary', date: '2026-08-01' },
  { id: '2', description: 'Whole Foods', amount: 142.5, type: 'expense', category: 'Food', date: '2026-08-02' },
  { id: '3', description: 'Uber rides', amount: 38.2, type: 'expense', category: 'Transport', date: '2026-08-03' },
  { id: '4', description: 'Amazon order', amount: 89.99, type: 'expense', category: 'Shopping', date: '2026-08-03' },
  { id: '5', description: 'Electric bill', amount: 120, type: 'expense', category: 'Bills', date: '2026-08-04' },
  { id: '6', description: 'Netflix', amount: 15.49, type: 'expense', category: 'Entertainment', date: '2026-08-04' },
  { id: '7', description: 'Freelance project', amount: 800, type: 'income', category: 'Salary', date: '2026-08-05' },
  { id: '8', description: 'Pharmacy', amount: 34.75, type: 'expense', category: 'Health', date: '2026-08-05' },
  { id: '9', description: 'Gas station', amount: 52.3, type: 'expense', category: 'Transport', date: '2026-08-06' },
  { id: '10', description: 'Restaurant dinner', amount: 78.4, type: 'expense', category: 'Food', date: '2026-08-07' },
]