import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Form, Modal, Nav } from './components'

function App() {
  const [open, setOpen] = useState(false)
  return (
    <main>
      <Nav />
      <Form setSuccess={setOpen} />
      <AnimatePresence>
        {open && <Modal key="modal" setOpen={setOpen} />}
      </AnimatePresence>
    </main>
  )
}

export default App
