import { useMutation, useQueryClient } from "@tanstack/react-query";

async function onDelete(id: string): Promise<void> {
  console.log(id);
  const res=await fetch("/api/transaction/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
  if(!res.ok){
    throw new Error(`Delete Failed:${res.status}`)
  }
}

export function useDeleteTransactions() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: onDelete,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Transactions"] });
    },
  });

  // return mutate;
}
