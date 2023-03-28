/* eslint-disable react/button-has-type */
import React from "react";
import { Editor } from "@tiptap/core";

interface EditorMenuBarProps {
  editor: Editor | null;
}

export const EditorMenuBar: React.FC<EditorMenuBarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 w-full p-2 bg-white shadow-md">
      <button
        className="mx-1"
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        Bold
      </button>
      <button
        className="mx-1"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        Italic
      </button>
      <button
        className="mx-1"
        onClick={() =>
          editor.chain().focus().insertContent('<img src="https://source.unsplash.com/random/800x400" />').run()
        }
      >
        Insert Image
      </button>
      <button
        className="mx-1"
        onClick={() => editor.chain().focus().toggleCode().run()}
      >
        Code
      </button>
    </div>
  );
};
