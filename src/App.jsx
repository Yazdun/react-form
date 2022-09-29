import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Form, Modal, Nav } from './components'

function App() {
  const [modal, setModal] = useState(false)
  const [data, setData] = useState(null)
  return (
    <main>
      <Nav />
      <Form setModal={setModal} setData={setData} />
      <AnimatePresence>
        {modal && <Modal key="modal" setOpen={setModal} data={data} />}
      </AnimatePresence>
    </main>
  )
}

export default App
