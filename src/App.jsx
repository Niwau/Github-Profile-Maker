import { Grid } from "./components/Grid"
import { Markdown } from "./components/Markdown"
import { Preview } from "./components/Preview"
import { Properties } from "./components/Properties"
import { markdownContext } from "./context/markdownContext"
import { useState } from "react"
import { Options } from "./components/Options"
import { ImageIcon } from "./components/ImageIcon"
import { FontIcon } from "./components/FontIcon"
import { LinkIcon } from "./components/LinkIcon"
import { EllipsisIcon } from "./components/EllipsisIcon"
import { editContext } from "./context/editContext"
import { Edit } from "./components/Edit"

function App() {

  const [markdown, setMarkdown] = useState("");
  const [options, setOptions] = useState("none");

  return (
    <div className="App">
      <Grid>
        <editContext.Provider value={[options, setOptions]}>
          <markdownContext.Provider value={[markdown, setMarkdown]} >
            <Markdown/>
            <Preview/>
            <Properties>
              <Options>
                <ImageIcon/>
                <FontIcon/>
                <LinkIcon/>
                <EllipsisIcon/>
              </Options>
              <Edit/>
            </Properties>
          </markdownContext.Provider>
        </editContext.Provider>
      </Grid>
    </div>
  )
}

export default App
