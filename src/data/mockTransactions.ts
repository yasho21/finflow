import { Transaction,TransactionTypeENUM,Category} from '@/types'

export const mockTransactions: Transaction[] = [
  { id: '1', description: 'Monthly Salary', amount: 5200, type: TransactionTypeENUM.income, category: Category.Salary, date: '2026-08-01' },
  { id: '2', description: 'Whole Foods', amount: 142.5, type: TransactionTypeENUM.expense, category: Category.Food, date: '2026-08-02' },
  { id: '3', description: 'Uber rides', amount: 38.2, type: TransactionTypeENUM.expense, category: Category.Transport, date: '2026-08-03' },
  { id: '4', description: 'Amazon order', amount: 89.99, type: TransactionTypeENUM.expense, category: Category.Shopping, date: '2026-08-03' },
  { id: '5', description: 'Electric bill', amount: 120, type: TransactionTypeENUM.expense, category: Category.Bills, date: '2026-08-04' },
  { id: '6', description: 'Netflix', amount: 15.49, type: TransactionTypeENUM.expense, category: Category.Entertainment, date: '2026-08-04' },
  { id: '7', description: 'Freelance project', amount: 800, type: TransactionTypeENUM.income, category: Category.Salary, date: '2026-08-05' },
  { id: '8', description: 'Pharmacy', amount: 34.75, type: TransactionTypeENUM.expense, category: Category.Health, date: '2026-08-05' },
  { id: '9', description: 'Gas station', amount: 52.3, type: TransactionTypeENUM.expense, category: Category.Transport, date: '2026-08-06' },
  { id: '10', description: 'Restaurant dinner', amount: 78.4, type: TransactionTypeENUM.expense, category: Category.Food, date: '2026-08-07' },
]


