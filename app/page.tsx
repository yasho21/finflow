"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { TransactionSchema, transactionToAdd } from "@/transactionschema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransactions } from "@/data/useTransactions";
import { useDeleteTransactions } from "@/data/useDeleteTransactions";
import { Transaction } from "@/types";
import { useAddTransactions } from "@/data/useAddTransactions";
import { UpdateTransactionInput,useUpdateTransactions } from "@/data/useUpdateTransactions";

export default function Home() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<transactionToAdd>({
    resolver: zodResolver(TransactionSchema),
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [isPosting, setisPosting] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [editing, setEditing] = useState<Transaction | null>(null);

  const {
    data: transactions,
    isPending: loading,
    isError: loadingError,
    error: ferror,
  } = useTransactions();

  const deleteTransactions = useDeleteTransactions();

  const editTransactions = useUpdateTransactions();

  const addTransactions = useAddTransactions();

  const onEdit = () => {
    setIsModal((prev) => !prev);
    reset();
  };

  const onSubmit = async (data: transactionToAdd) => {
    if(editing){
      editTransactions.mutate({...data,id:editing.id});
    }
    else{
      addTransactions.mutate(data);
    }
    
  };
  if (loading) return <p>Loading…</p>;
  if (loadingError) return <p>{"Failed"}</p>;
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
            <button
              onClick={() => {
                setIsModal(true);
                reset();
                setEditing(null);
              }}
            >
              Add Transaction
            </button>
            <span className="text-sm text-gray-500">Welcome back</span>
            <div className="w-8 h-8 rounded-full bg-indigo-500 flex items-center justify-center text-white text-sm font-medium">
              Y
            </div>
          </div>
        </header>
        {/* Content */}

        <main className="flex-1 overflow-y-auto p-8">
          <div className="space-y-2">
            {transactions.map((tx) => (
              <div
                key={tx.id}
                className="bg-white p-4 rounded-lg border border-gray-200 flex justify-between"
              >
                <span className="text-gray-900">{tx.description}</span>
                <span
                  className={
                    tx.type === "income" ? "text-green-600" : "text-gray-600"
                  }
                >
                  {tx.type === "income" ? "+" : "-"}${tx.amount}
                </span>
                <button
                  className="text-gray-400 hover:text-red-500 text-sm"
                  onClick={() => {
                    setEditing(tx);
                    reset(tx);
                    setIsModal(true);
                  }}
                >
                  Edit
                </button>
                <button
                  className="text-gray-400 hover:text-red-500 text-sm"
                  onClick={() => deleteTransactions.mutate(tx.id)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          {isModal && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="description"
                {...register("description")}
                style={{ border: "1px solid black" }}
              ></input>
              {errors.description && <p>{errors.description.message}</p>}
              <input
                type="number"
                placeholder="amount"
                {...register("amount",{valueAsNumber:true})}
                style={{ border: "1px solid black" }}
              ></input>
              {errors.amount && <p>{errors.amount.message}</p>}
              <input
                type="text"
                placeholder="type"
                {...register("type")}
                style={{ border: "1px solid black" }}
              ></input>
              {errors.type && <p>{errors.type.message}</p>}
              <input
                type="text"
                placeholder="category"
                {...register("category")}
                style={{ border: "1px solid black" }}
              ></input>
              {errors.category && <p>{errors.category.message}</p>}
              <input
                type="text"
                placeholder="date"
                {...register("date")}
                style={{ border: "1px solid black" }}
              ></input>
              {errors.date && <p>{errors.date.message}</p>}
              {/* <input type="text" placeholder="id" {...register("description")} style={{border:"1px solid black"}}></input> */}
              {!isPosting && (
                <button type="submit" style={{ border: "1px solid black" }}>
                  Submit
                </button>
              )}
            </form>
          )}
        </main>
      </div>
    </div>
  );
}

function NavItem({
  label,
  active = false,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <a
      href="#"
      className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "bg-indigo-50 text-indigo-700"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {label}
    </a>
  );
}
