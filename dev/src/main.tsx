import { Fragment } from "preactend"
import { createRoot } from "preactend/dom/client"

const root = createRoot(document.getElementById("root")!)

export const TestComponent = () => (
  <Fragment key="this-is-fragment!">
    <div style={{ fontSize: "3rem" }}>
      <>
        <b style={{ color: "red" }} >hello</b> <span>world!</span>
      </>
    </div>
    <div>Hello PreactEND!</div>
    <button onclick={(event) => {
      console.log(event.target)
      alert("Hello!")
    }}>Say hello!</button>
  </Fragment>
)
root.render(<TestComponent />)

// @ts-ignore
window.__root = root