"use client";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools}from "@tanstack/react-query-devtools";
import { useState } from "react";



export function Providers({children}:{children:React.ReactNode}){
    const [queryclient]=useState(()=>new QueryClient());
    return(
        <QueryClientProvider client={queryclient}>
            {children}
            <ReactQueryDevtools/>
        </QueryClientProvider>
    )
}