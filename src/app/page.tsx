"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  const newChat = () => {
    window.location.reload();
  };
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto">
      <span className="font-bold text-4xl text-white">AI Bot chat</span>
      {messages.map((m) => (
        <div
          key={m.id}
          className={`whitespace-pre-wrap ${
            m.role === "user" ? "bg-indigo-400" : "bg-neutral-50"
          } rounded-lg p-2 mb-2 text-justify`}
        >
          <span className="font-bold">
            {m.role === "user" ? "User👱: " : "AI 🤖: "}
          </span>
          {m.content}
        </div>
      ))}

      <form
        onSubmit={handleSubmit}
        className="flex fixed bottom-0 w-full max-w-md p-2 mb-8  rounded"
      >
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-l-lg"
          onClick={newChat}
        >
          +
        </button>
        <input
          className="flex-grow p-2 border border-gray-300 focus:outline-none"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-r-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}
