import { Injectable } from '@angular/core';
import { GoogleGenerativeAI} from '@google/generative-ai';
@Injectable({
  providedIn: 'root'
})
export class GoogleGenerativeAiService { API_KEY: any = "AIzaSyCjB7ylHTSf9Mioik8VqAj0JHFoboZWF_M";
  genAI = new GoogleGenerativeAI(this.API_KEY);
 async run(){
   // The Gemini 1.5 models are versatile and work with multi-turn conversations (like chat)
   const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
 
   const chat = model.startChat({
     history: [
       {
         role: "user",
         parts: [{ text: "Hello, I have 2 dogs in my house." }],
       },
       {
         role: "model",
         parts: [{ text: "Great to meet you. What would you like to know?" }],
       },
     ],
     generationConfig: {
       maxOutputTokens: 100,
     },
   });
 
   const msg = "How many paws are in my house?";
 
   const result = await chat.sendMessage(msg);
   const response = await result.response;
   const text = response.text();
   console.log(text);
 }
 
}
