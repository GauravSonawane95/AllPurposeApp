import { Component } from '@angular/core';
import { GoogleGenerativeAI} from '@google/generative-ai';
@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css']
})
export class AiComponent {
  API_KEY: any = "AIzaSyCjB7ylHTSf9Mioik8VqAj0JHFoboZWF_M";
  genAI = new GoogleGenerativeAI(this.API_KEY);
  prompt: any = '';
  
  main = {
    sender: [{ text: "Here, You can see your prompt" }],
    geminireply: [{ text: "Hello, How can I assist you." }]
  };
  
  async run() {
    // The Gemini 1.5 models are versatile and work with multi-turn conversations (like chat)
    const model = this.genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  
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
  
    const msg = this.prompt;
  
    const result = await chat.sendMessage(msg);
    const response = await result.response;
    const text = await response.text();
  
    this.main.sender.push({ text: this.prompt });
    this.main.geminireply.push({ text: text });
  
    this.prompt = ''; // Clear the prompt
  }
}
