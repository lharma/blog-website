import { supabase } from "@/lib/supabase/supabaseClient";
import { NextResponse } from "next/server";
export default async function getAllPost(){
    try{
        
        const {data,error} = await supabase.from('post').select('*')
        if(error) return NextResponse.json({error:error.message},{status:401})
        return NextResponse.json(data)
    } catch (err) {
        console.error(err)
        return NextResponse.json({ error: err?.message || "Internal Server Error" }, { status: 500 })
    }
}