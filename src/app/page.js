"use client";

import { Box, Heading } from "@chakra-ui/react";
import { socials } from "./_lib/data";
import { SocialLink } from "./_components/SocialLink";

export default function Home() {
  return (
    <Box minH={"100vh"} display={"flex"} flexDir={"column"}>
      <Box
        display="flex"
        flexWrap={"wrap"}
        justifyContent="right"
        alignItems="center"
        gap="1"
        m={3}
      >
        {socials.map((social) => (
          <SocialLink social={social} key={social.name} />
        ))}
      </Box>

      <Heading as="h1" size="2xl">
        Deep Prajapati
      </Heading>
      <Heading as="h2" size="lg" mt="1">
        Full Stack Software Engineer
      </Heading>
      <Heading as={"h3"} size="sm" fontWeight="400" mt="3">
        Passionate about building efficient,accessible and user-friendly
        software.
      </Heading>
      <Box>
        <Box>This holds the work and is fixed</Box>
        <Box>This holds the projects and is scrollable</Box>
        <Box>This holds skills maybe</Box>
      </Box>
    </Box>
  );
}
