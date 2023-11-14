declare namespace JSX {
  type IntrinsicElements = {
    [elemName in keyof HTMLElementTagNameMap]: Partial<
      Omit<Omit<HTMLElementTagNameMap[elemName], "style">, "children"> & {
        style?: Partial<CSSStyleDeclaration>
        children?: PreactENDNode | PreactENDNode[]
      }
    >
  }
}

declare type JSXElement<P> = PreactENDElementConstructor<P>
