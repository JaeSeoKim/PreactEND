import type { PretandReactNode } from "./createElement"

export interface Root {
  render(children: PretandReactNode): void
  unmount(): void
}

export type CreateRootOptions = unknown
export function createRoot(
  domNode: Element | DocumentFragment,
  // TODO: 옵션이 필요한 경우 추가하기..!
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options?: CreateRootOptions,
): Root {
  const render = (
    node: PretandReactNode,
    parent: Element | DocumentFragment,
  ) => {
    if (typeof node === "string") {
      return parent.append(node)
    }
    if (typeof node.type === "string") {
      const $dom = document.createElement(node.type)
      const { children, ...props } = node.props
      for (const key in props) {
        if (key === "style") {
          const style = props[key]
          for (const styleKey in style) {
            // @ts-ignore
            $dom.style[styleKey] = style[styleKey]
          }
        } else {
          // @ts-ignore
          $dom[key] = props[key]
        }
      }
      parent.appendChild($dom)
      if (children) {
        if (Array.isArray(children)) {
          children.map((child) => render(child, $dom))
        } else {
          render(children, $dom)
        }
      }
    }
  }
  const Root: Root = {
    render: (children) => {
      render(children, domNode)
    },
    unmount: () => {},
  }
  return Root
}
