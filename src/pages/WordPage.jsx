import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export function WordPage() {
  return (
    <>
      <main>
        <CKEditor
          editor={ClassicEditor}
          config={{
            toolbar: [
              'heading', '|',
              'bold', 'italic', 'link', '|',
              'undo', 'redo',
            ],
          }}
          style={{ width: '800px', height: '400px' }}
        />
      </main>
    </>
  )
}
