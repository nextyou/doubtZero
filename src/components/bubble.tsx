type Role = "user" | "assistant";

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
          isUser ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
        }`}
      >
        {(content) || <span className="opacity-60">Please wait, we are finding best solutions for you …</span>}
      </div>
    </div>
  );
}
export default Bubble;
