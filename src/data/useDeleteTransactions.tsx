import { useMutation, useQueryClient } from "@tanstack/react-query";

async function onDelete(id: string): Promise<void> {
  console.log(id);
  await fetch("/api/transaction/" + id, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });
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
