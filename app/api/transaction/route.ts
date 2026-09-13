
import { NextResponse,NextRequest} from "next/server";
import {TransactionSchema} from "../../../src/transactionschema";

import { mockTransactions } from "@/data/mockTransactions";


export async function GET(){
    console.log(mockTransactions.length)
    return NextResponse.json({"data":mockTransactions});
}

export async function POST(request:NextRequest){
const body=await request.json();
const result=TransactionSchema.safeParse(body);
if(!result.success){
    return NextResponse.json({success:false,message:result.error.issues},{status:400})
}

    let idg=crypto.randomUUID();
    const newTransaction={id:idg,...result.data}
    mockTransactions.push(newTransaction);
    return NextResponse.json({data:newTransaction},{status:201})
}



