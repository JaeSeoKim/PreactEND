import { h } from "pretand-react"
import { createRoot } from "pretand-react/client"

const root = createRoot(document.getElementById("root")!)

root.render(
  <div style={{ fontSize: "3rem" }}>
    <b style={{ color: "red" }}>hello</b> world!
  </div>,
)
