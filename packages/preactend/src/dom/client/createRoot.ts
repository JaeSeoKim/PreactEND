import {
  PREACTEND_ELEMENT_TYPE,
  PREACTEND_FRAGMENT_TYPE,
} from "../../PreactENDSymbols"
import { PreactENDElementConstructor, PreactENDNode } from "../../types"

type Root = {
  render(node: PreactENDNode): void
  unmount(): void
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type createRootOptions = {}
export function createRoot(
  element: Element | DocumentFragment,
  options?: createRootOptions,
): Root {
  return new RootContainer(element, options)
}

class RootContainer {
  private readonly element: Element | DocumentFragment
  // @ts-ignore
  private readonly options: createRootOptions
  private root: Node[] | null = null

  constructor(
    element: Element | DocumentFragment,
    options?: createRootOptions,
  ) {
    this.element = element
    this.options = options ?? {}
  }

  render(node: PreactENDNode): void {
    if (this.root) {
      this.unmount()
    }
    this.root = this.interanlRender(node, this.element)
  }
  unmount(): void {
    if (this.root) {
      for (const node of this.root) {
        this.element.removeChild(node)
      }
      this.root = null
    }
  }

  private interanlRender(
    node: PreactENDNode,
    target: Element | DocumentFragment,
  ): Node[] {
    if (typeof node === "object" && node !== null) {
      if (Symbol.iterator in node) {
        const $fragment = document.createDocumentFragment()
        for (const child of node) {
          this.interanlRender(child, $fragment)
        }
        const children = [...$fragment.children]
        target.appendChild($fragment)
        return children
      } else if (node.$$typeof === PREACTEND_ELEMENT_TYPE) {
        if (node.type === PREACTEND_FRAGMENT_TYPE) {
          return this.interanlRender(node.props.children, target)
        }
        if (typeof node.type === "function") {
          const component = node.type as PreactENDElementConstructor<any>
          return this.interanlRender(component(node.props), target)
        }
        if (typeof node.type === "string") {
          const $dom = document.createElement(node.type)
          const { style, children, ...props } = node.props
          for (const propName in props) {
            // @ts-ignore
            $dom[propName] = node.props[propName]
          }
          for (const styleName in style) {
            // @ts-ignore
            $dom.style[styleName] = style[styleName]
          }
          this.interanlRender(children, $dom)
          target.appendChild($dom)
          return [$dom]
        }
        throw new Error(`invaild PreactENDElement..!: node.type: ${node.type}`)
      } else {
        throw new Error(
          `invaild PreactENDElement..!: node.$$typeof: ${node.$$typeof}`,
        )
      }
    } else if (node && typeof node !== "boolean") {
      const $fragment = document.createDocumentFragment()
      $fragment.append(node.toString())
      const children = [...$fragment.children]
      target.append($fragment)
      return children
    }
    return []
  }
}
