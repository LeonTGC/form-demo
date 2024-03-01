import { useState } from "react"
import Form from "./Components/Form"
import Display from "./Components/Display"
import './App.css'

const App = () => {
  const [entries, setEntries] = useState([])

  return (
    <div id='page'>
      <h1>React Form</h1>
      <div>
        <Form entries={entries} setEntries={setEntries} />
      </div>
      <div id='displayArea'>
        {/* map entries */}
        {entries.length == 0 ? <h3>entries will be displayed here</h3>
          :
          <div id="displayEntries">
            {entries.map((entry, index) => {
              return <Display entry={entry} />
            })
            }
          </div>
        }
      </div>
    </div>
  )
}

export default App