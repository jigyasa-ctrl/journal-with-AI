require("dotenv/config")
const Groq = require('groq-sdk')

async function generate(userMessage ){
    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });
    const SYSTEM_PROMPT = [
        "You are a professional therapist with 10 years of experience.",
        "Show empathy towards the user’s thoughts and feelings.",
        "Provide a mature, concise analysis of what the user shares.",
        "If negativity or sadness is expressed, offer hope and positive perspective.",
        "Keep your response under 200 words",
        `Current date & time: ${new Date().toUTCString()}`
    ].join(' ');
    let messages = [{
        role: "system",
        content: SYSTEM_PROMPT
    }]

    messages.push({
        role: "user",
        content: userMessage
    })

    while(true){
        const response = await groq.chat.completions.create({
            model:  "llama-3.3-70b-versatile",
            messages: messages

        })
        return response.choices[0].message.content
    }
}

module.exports = generate