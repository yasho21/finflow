import { mockTransactions } from './src/data/mockTransactions'

export default function Home() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-60 bg-white border-r border-gray-200 flex flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200">
          <span className="text-xl font-bold text-gray-900">FinFlow</span>
        </div>
        <nav className="flex-1 px-3 py-4 space-y-1">
          <NavItem label="Dashboard" active />
          <NavItem label="Transactions" />
          <NavItem label="Analytics" />
          <NavItem label="Insights" />
          <NavItem label="Settings" />
        </nav>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8">
          <h1 className="text-lg font-semibold text-gray-900">Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">Welcome back</span>
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-medium">
              Y
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-8">
          <div className="text-gray-400 text-sm">
            <div className="space-y-2">
            {mockTransactions.map(tx => (
    <div key={tx.id} className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between">
      <span className="text-gray-900">{tx.description}</span>
      <span className={tx.type === 'income' ? 'text-green-600' : 'text-gray-600'}>
        {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
      </span>
    </div>
  ))}
</div>
          </div>
        </main>
      </div>
    </div>
  )
}

function NavItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <a href="#"
      className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "bg-indigo-50 text-indigo-700"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {label}
    </a>
  )
}