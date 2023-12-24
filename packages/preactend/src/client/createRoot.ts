import {
  PREACTEND_ELEMENT_TYPE,
  PREACTEND_FRAGMENT_TYPE,
} from "../PreactENDSymbols"
import {
  PreactENDElement,
  PreactENDElementConstructor,
  PreactENDNode,
} from "../types"

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
  readonly #element: Element | DocumentFragment
  // @ts-ignore
  readonly #options: createRootOptions
  #root: Node[] | null = null

  constructor(
    element: Element | DocumentFragment,
    options?: createRootOptions,
  ) {
    this.#element = element
    this.#options = options ?? {}
  }

  render(node: PreactENDNode): void {
    if (this.#root) {
      this.unmount()
    }
    this.#root = this._render(node, this.#element)
  }
  unmount(): void {
    if (this.#root) {
      for (const node of this.#root) {
        this.#element.removeChild(node)
      }
      this.#root = null
    }
  }

  private _render(
    node: PreactENDNode,
    target: Element | DocumentFragment,
  ): Node[] {
    if (isElementOrIterableNode(node)) {
      if (isIterable(node)) {
        return this._renderIterable(node, target)
      }
      if (isVailedElement(node)) {
        return this._renderElement(node, target)
      }
      throw new Error(
        `invaild PreactENDElement..!: node.$$typeof: ${String(node.$$typeof)}`,
      )
    }
    if (isRenderableNode(node)) {
      const $text = document.createTextNode(node.toString())
      target.append($text)
      return [$text]
    }
    return []
  }

  private _renderIterable(
    node: Iterable<PreactENDNode>,
    target: Element | DocumentFragment,
  ): Node[] {
    const $fragment = document.createDocumentFragment()
    for (const child of node) {
      this._render(child, $fragment)
    }
    const children = [...$fragment.children]
    target.appendChild($fragment)
    return children
  }

  private _renderElement(
    node: PreactENDElement,
    target: Element | DocumentFragment,
  ): Node[] {
    switch (true) {
      case isFragment(node):
        return this._render(node.props.children, target)
      case isFunctionComponent(node):
        return this._render(node.type(node.props), target)
      case isIntrinsicElements(node):
        return this._renderIntrinsicElements(node, target)
      default:
        throw new Error(
          `invaild PreactENDElement: node.type: ${String(node.type)}`,
        )
    }
  }

  private _renderIntrinsicElements(
    node: PreactENDElement<any, string>,
    target: Element | DocumentFragment,
  ): Node[] {
    const $dom = document.createElement(node.type)
    const { style, children, ...props } = node.props

    for (const propName in props) {
      // @ts-ignore
      $dom[propName] = node.props[propName]
    }

    if (style) {
      for (const styleName in style) {
        // @ts-ignore
        $dom.style[styleName] = style[styleName]
      }
    }
    this._render(children, $dom)
    target.appendChild($dom)
    return [$dom]
  }
}

function isElementOrIterableNode(
  node: PreactENDNode,
): node is PreactENDElement | Iterable<PreactENDElement> {
  return typeof node === "object" && node !== null
}

function isIterable(
  node: PreactENDElement | Iterable<PreactENDNode>,
): node is Iterable<PreactENDNode> {
  return Symbol.iterator in node
}

function isVailedElement(node: PreactENDElement) {
  return node.$$typeof === PREACTEND_ELEMENT_TYPE
}

function isFragment(
  node: PreactENDElement,
): node is PreactENDElement<any, typeof PREACTEND_FRAGMENT_TYPE> {
  return node.type === PREACTEND_FRAGMENT_TYPE
}

function isFunctionComponent(
  node: PreactENDElement,
): node is PreactENDElement<any, PreactENDElementConstructor<any>> {
  return typeof node.type === "function"
}

function isIntrinsicElements(
  node: PreactENDElement,
): node is PreactENDElement<any, string> {
  return typeof node.type === "string"
}

function isRenderableNode(
  node:
    | Exclude<PreactENDNode, PreactENDElement | Iterable<PreactENDElement>>
    | string,
): node is string | number {
  if (node === undefined || node === null || typeof node === "boolean") {
    return false
  }
  return true
}
