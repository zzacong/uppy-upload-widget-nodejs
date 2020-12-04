import Uppy from '@uppy/core'
import Dashboard from '@uppy/dashboard'
import Webcam from '@uppy/webcam'
import XHRUpload from '@uppy/xhr-upload'

const uppy = new Uppy()
  .use(Dashboard, {
    inline: true,
    target: '#drag-drop-area',
  })
  .use(XHRUpload, {
    endpoint: 'http://localhost:3000/image',
    fieldName: 'photo',
    formData: true,
  })
  .use(Webcam, { target: Dashboard })

uppy.on('complete', res => {
  console.log(res.successful)
})
