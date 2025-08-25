// app/chat/page.tsx
"use client";
import Bubble from "@/components/chat/bubble";
import Select from "@/components/form/Select";
import Script from "next/script";
import { v4 as uuid } from "uuid";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
export type Role = "user" | "assistant" | "developer";

type ChatMessage = {
  id: string;
  role: Role;
  content: string;
};


export default function Page() {
  let language = ''
  let board = ''
  if (typeof window !== 'undefined' && window.localStorage) {
    language = window.localStorage.getItem("language") ?? 'English';
    board = window.localStorage.getItem("board") ?? 'CBSE';
  }

  const [answerType, setAnswerType] = useState("Short Answer");
  const [activeClass, setActiveClass] = useState("5th");
  const [activeSubject, setActiveSubject] = useState("math");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: uuid(),
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

  useEffect(() => {
    // Reset messages when language changes

    const develoeprRole: ChatMessage = {
      id: uuid(),
      role: "developer",
      content: `Talk like an educator in ${language}. \nUse ${answerType} style answers. \nYou are helping a student from class ${activeClass} in subject ${activeSubject} of ${board} board. \nMake learning fun!`,
    }
    setMessages((prev) => {
      const isRoleExists = prev.some(m => m.role === 'developer');
      let newMsg = prev
      if (isRoleExists) {
        newMsg = prev.filter(m => m.role !== 'developer');
      }
      return [develoeprRole, ...newMsg,]
    });
    setInput("");
  }, [language, answerType, activeClass, activeSubject, board]);

  const canSend = useMemo(
    () => input.trim().length > 0 && !loading,
    [input, loading]
  );

  async function onSend() {



    if (!canSend) return;

    const userMsg: ChatMessage = {
      id: uuid(),
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
    { value: "8th", label: "Class 8" },
    { value: "9th", label: "Class 9" },
    { value: "10th", label: "Class 10" },
    { value: "11th", label: "Class 11" },
    { value: "12th", label: "Class 12" },
    { value: "Graduate", label: "Graduate" },
    { value: "Post Graduate", label: "Post Graduate" },
    { value: "General Competition", label: "General Competition" },
  ];
  const subjects = [
    { value: "Math", label: "Math" },
    { value: "Science", label: "Science" },
    { value: "Computer", label: "Computer" },
    { value: "English", label: "English" },
    { value: "Hindi", label: "Hindi" },
    { value: "Social Science", label: "Social Science" },
    { value: "Reasoning", label: "Reasoning" },
    { value: "Sanskrit", label: "Sanskrit" },
    { value: "Current Affairs", label: "Current Affairs" },
    { value: "Aptitude Test", label: "Aptitude Test" },
  ];

  const answerTypes = [
    { value: "Short Answer", label: "Short Answer" },
    { value: "Long Answer with examples", label: "Long Answer with examples" },
    { value: "Summary Only", label: "Summary Only" },
  ];


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
    
        <h1 className="text-5xl font-bold tracking-tight mb-6">
         <Link href={'/'}> doubt<span className="text-indigo-600">Zero</span></Link>
        </h1> 
    
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-6 flex flex-col space-y-4">
        <div className="flex-1 overflow-y-auto h-80  p-3 space-y-2">
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
            onKeyDown={(e) => e.key === "Enter" && onSend()}
          />
          <button
            onClick={onSend}
            className="px-5 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
