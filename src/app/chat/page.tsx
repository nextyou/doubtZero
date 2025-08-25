// app/chat/page.tsx
"use client";

import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMessage = { role: "assistant", content: data.reply };
    setMessages((prev) => [...prev, botMessage]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">DoubtZero Chatbot</h1>
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-6 flex flex-col space-y-4">
        <div className="flex-1 overflow-y-auto h-80 border rounded-lg p-3 space-y-2 bg-gray-50">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`p-2 rounded-xl max-w-[80%] ${
                m.role === "user"
                  ? "bg-indigo-100 text-indigo-800 ml-auto"
                  : "bg-gray-200 text-gray-800 mr-auto"
              }`}
            >
              {m.content}
            </div>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            placeholder="Type your doubt..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
