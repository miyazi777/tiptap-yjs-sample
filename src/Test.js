import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Collaboration from '@tiptap/extension-collaboration'
import { WebsocketProvider } from 'y-websocket';
import * as Y from 'yjs';

export const Test = () => {
  const ydoc = new Y.Doc();
  new WebsocketProvider('ws://127.0.0.1:1234', 'test-doc', ydoc); // 接続先がかわったら、こちらを変更して下さい
  const editor = useEditor({
    editable: true,
    content: '<p>Hello World!</p>',
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1,2,3]
        }
      }),
      Collaboration.configure({
        document: ydoc,
      }),
    ],
  })

  return <EditorContent editor={editor} />
}