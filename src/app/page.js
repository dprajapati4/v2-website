"use client";

import { Box, Heading, IconButton } from "@chakra-ui/react";
import { socials } from "./_lib/data";
import { SocialLink } from "./_components/SocialLink";

export default function Home() {
  return (
    <Box minH={"100vh"} display={"flex"} flexDir={"column"}>
      <Box display="flex" justifyContent="center" alignItems="center" gap="1">
        {socials.map((social) => (
          <SocialLink social={social} key={social.name} />
        ))}
      </Box>

      <Heading as="h1" size="2xl">
        This is my name
      </Heading>
      <Heading as={"h2"}>This is a description of me</Heading>
      <Box>
        <Box>This holds the work and is fixed</Box>
        <Box>This holds the projects and is scrollable</Box>
        <Box>This holds skills maybe</Box>
      </Box>
    </Box>
  );
}
