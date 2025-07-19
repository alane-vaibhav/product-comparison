// Allow any type globally
declare module "*" {
  const content: any;
  export default content;
}

// Or more specifically for styled-components theme
declare module "@mui/material/styles" {
  interface Theme {
    [key: string]: any;
  }
}

// Or disable the no-explicit-any rule globally
declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type AnyType = any;
}
