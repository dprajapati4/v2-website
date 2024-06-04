"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
// TODO: Add fonts
// import {} from "@fontsource-variable/dm-san"

// const fonts = extendTheme({
//   fonts: {
//     heading: `'Dm Sans', sans-serif`,
//     body: `'Dm Sans', sans-serif`,
//   },
// })
// const theme = extendTheme({ fonts });

export function Providers({ children }) {
  return <ChakraProvider>{children}</ChakraProvider>;
//   return <ChakraProvider theme={theme}>{children}</ChakraProvider>;

}
