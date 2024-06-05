"use client";

import { Box, Heading } from "@chakra-ui/react";
import { socials, experiences } from "./_lib/data";
import { SocialLink } from "./_components/SocialLink";
import { ExperienceTable } from "./_components/ExperienceTable";

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
      <Box>
        <Heading as="h1" size="2xl">
          Deep Prajapati
        </Heading>
        <Heading as="h2" size="lg" mt="1">
          Full Stack Software Engineer
        </Heading>
        <Heading as={"h3"} size="sm" fontWeight="400" mt="3">
          Passionate about building efficient, accessible and user-friendly
          software.
        </Heading>
      </Box>
      <Box display={"flex"} justifyContent="space-between" w={'50%'}>
        <Box>
          <Heading
            as={"h2"}
            size="sm"
            mt="3"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            letterSpacing={"wider"}
          >
            Experience
          </Heading>
          <ExperienceTable experiences={experiences} />
        </Box>
        <Box>This holds the projects and is scrollable</Box>
      </Box>
      <Box>This holds skills maybe</Box>
    </Box>
  );
}
