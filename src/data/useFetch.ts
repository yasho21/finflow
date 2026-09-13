import { Transaction } from "@/types";
import { useState,useEffect } from "react";
import { boolean } from "zod";

export function useFetch<T>(url:string){
    const [loading,setloading]=useState(true);
    const [ferror,setFError]=useState(false);
    const [data ,setData]=useState<T|null>(null);
    useEffect(() => {
        const fetchTransactions = async () => {
          await fetch(url)
            .then((res) => {
              if (!res.ok) throw new Error("Failed to fetch");
    
            //   setloading(true);
              return res.json();
            })
            .then((json) => {
              setData(json.data);
            })
            .catch((error) => {
              setFError(error);
            })
            .finally(() => {
              setloading(false);
              console.log("success");
            });
        };
        fetchTransactions();
      }, [url]);
return {data,loading,ferror};
}







