import { connectToDB } from "@utils/database";
import Prompt from "@models/prompts";


export const GET = async (request, { params }) => { 

    try {
          await connectToDB();

        const prompt = await Prompt.findById(params.id ).populate('creator');

        if (!prompt) return new Response("Prompt not found", { status: 400 })

        return new Response(JSON.stringify(prompt, { status: 200 }));

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 })

    }
}


export const PATCH = async (request, {params}) => {

    try{
        const { prompt, tag } = await request.json();

        await connectToDB();     

        const existingPrompt = await Prompt.findById(params.id).populate('creator');

          if(!existingPrompt) return new Response('prompt not found', 404);

          existingPrompt.prompt =  prompt;
          existingPrompt.tag = tag;

          await existingPrompt.save();
          return new Response("The prompt has been updated successfull", {status: 200})


    }catch(error){
        return new Response("Internal server error", {status:500})
    }

}

export const DELETE = async (request, {params}) => {

    try{

        await connectToDB();
        await Prompt.findByIdAndDelete(params.id);
        return new Response('The prompt has been deleted', {status:200})
    }catch(error){

        return new Response('vvv '+params.id, {status:500})

    }

}