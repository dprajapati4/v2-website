"use client";

import { Box, Heading, } from "@chakra-ui/react";

export default function Home() {
  return (
  <Box>
    <Box>
      This is for socials is fixed
    </Box>

    <Heading as="h1" size="2xl">This is my name</Heading>
    <Heading as={'h2'}>This is a description of me</Heading>
    <Box>
      <Box>
        This holds the work and is fixed
      </Box>
      <Box>This holds the projects and is scrollable</Box>
      <Box>This holds skills maybe</Box>
    </Box>
  </Box>
  )
}
