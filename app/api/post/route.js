import { supabase } from "@/lib/supabase/supabaseClient";
import { NextResponse } from "next/server";

export default async function getPost (){
    try{

        const {data:{user},error} =  await supabase.auth.getUser()
        const user_id  =  user?.id
    
        const {data:postData,error:PostError} = await supabase.from('post')
        .select('*')
        .eq('user_id',user_id)
        if(!postData){
            throw new Error ('error',PostError)
        }
        return NextResponse.json(postData)
    }
    
    catch (error){
        console.error('erro',error)
        return NextResponse.json({error:PostError,details:PostError.message},
            {status:500}
        )

    }
}
