import { Role } from "@/app/ask-doubts/page";
function Bubble({
  role,
  content,
}: {
  readonly role: Role;
  readonly content: string;
}) {
  const isUser = role === "user";
  return (
    <div className={`mb-3 flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm shadow ${
          isUser ? "p-2 rounded-xl  bg-indigo-100 text-indigo-800 ml-auto" : "p-2 rounded-xl  bg-gray-200 text-gray-800 mr-auto"
        }`}
      >
        {(content) || <span className="opacity-60">Please wait, we are finding best solutions for you …</span>}
      </div>
    </div>
  );
}
export default Bubble;
