"use client";

import Bubble from "@/components/bubble";
 import Select from "@/components/form/Select";
import Script from "next/script";

import { useEffect, useMemo, useRef, useState } from "react";
type Role = "user" | "assistant";

type ChatMessage = {
  id: string;
  role: Role;
  content: string;
};
 

export default function Page() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: crypto.randomUUID(),
      role: "assistant",
      content: "Hi! I’m your AI tutor. Ask me anything about your course.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
   const containerRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    containerRef.current?.scrollTo({
      top: containerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages.length]);

  const canSend = useMemo(
    () => input.trim().length > 0 && !loading,
    [input, loading]
  );

  async function onSend() {
   
   

    if (!canSend) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: input.trim(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // placeholder assistant message we will stream into
    const assistId = crypto.randomUUID();
    setMessages((prev) => [
      ...prev,
      { id: assistId, role: "assistant", content: "" },
    ]);

    try { 
type PuterAI = {
  chat: (
    messages: { role: Role; content: string }[]
  ) => Promise<{ message: { content: string } }>;
};

type PuterWindow = Window & { puter: { ai: PuterAI } };

const puter = ((window as unknown) as PuterWindow).puter;
       
       const res = await puter.ai
          .chat(messages
            .concat(userMsg)
            .map((m) => ({ role: m.role, content: m.content })))

          if (!res) {
        throw new Error("Request failed: No response from AI service.");
      } 
        setMessages((prev) =>
          prev.map((m) => (m.id === assistId ? { ...m, content: res.message.content } : m))
        );
     
    } catch (err: unknown) {
      const errorText =
        " " +
        (err instanceof Error
          ? err.message
          : "Something went wrong");
      setMessages((prev) =>
        prev.map((m) => (m.id === assistId ? { ...m, content: errorText } : m))
      );
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  }
const classes = [
    { value: "5th", label: "Class 5" },
    { value: "6th", label: "Class 6" },
    { value: "7th", label: "Class 7" },
  ];
  const subjects = [
    { value: "math", label: "Math" },
    { value: "science", label: "Science" },
    { value: "computer", label: "Computer" },
  ];
   const handleSelectChange = (value: string) => {
    console.log("Selected value:", value);
  };
  return (
    <div>
      <Script src="https://js.puter.com/v2/" strategy="afterInteractive" />
       <div className="flex flex-col gap-2 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Ask Doubts -  <span className="text-sm text-gray-600">Eliminating doubts, 24/7.</span>
          </h3>
        </div>

        <div className="flex items-center gap-3">
           <div> 
            <Select
            options={classes}
            placeholder="Select class"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          /> 
        </div>
         <div> 
            <Select
            options={subjects}
            placeholder="Select subject"
            onChange={handleSelectChange}
            className="dark:bg-dark-900"
          /> 
        </div>
         
        </div>
      </div>
      <div
        ref={containerRef}
        className="h-[60vh] w-full overflow-y-auto rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
      >
        {messages.map((m) => (
          <Bubble key={m.id} role={m.role} content={m.content} />
        ))}
      </div>

      <div className="mt-4 flex items-center gap-2">
        <input
          className="flex-1 rounded-2xl border border-gray-300 bg-white px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask me anything…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          disabled={loading}
        />
        <button
          onClick={onSend}
          disabled={!canSend}
          className="rounded-2xl px-4 py-3 font-medium text-white shadow-sm transition enabled:bg-blue-600 enabled:hover:bg-blue-700 disabled:bg-gray-300"
        >
          {loading ? "Thinking…" : "Send"}
        </button>
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Your content is only used at runtime to answer your question; no data is
        stored on the server in this demo.
      </p>
    </div>
  );
}
