"use client";

import { Box, Heading } from "@chakra-ui/react";
import { socials, experiences, projects } from "./_lib/data";
import { SocialLink } from "./_components/SocialLink";
import { ExperienceTable } from "./_components/ExperienceTable";
import { ProjectsCard } from "./_components/ProjectCard";
export default function Home() {
  return (
    <Box minH={"100vh"} display={"flex"} flexDir={"column"} m={3} p={4}>
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
        <Heading as="h2" size="md" mt="1">
          Full Stack Software Engineer
        </Heading>
        <Heading as={"h3"} size="sm" fontWeight="400" mt="3">
          Passionate about building efficient, accessible and user-friendly
          software.
        </Heading>
      </Box>

      <Box display={"flex"} flexWrap={"wrap"} justifyContent="space-between"  >
        <Box
          w={{ base: "100%", md: "48%", }} // 100% width on small screens, 48% on medium and above
          mb={{ base: 4, md: 0 }} // Margin bottom on small screens for spacing
        >
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

        <Box
          w={{ base: "100%", md: "48%" }} // 100% width on small screens, 48% on medium and above
        >
          <Heading
            as={"h2"}
            size="sm"
            mt="3"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            letterSpacing={"wider"}
          >
            Projects
          </Heading>
          <Box overflowY="auto" >
            {projects.map((project, i) => (
              <ProjectsCard project={project} key={i} />
            ))}
          </Box>
        </Box>
      </Box>
      <Box>This holds skills maybe</Box>
    </Box>
  );
}
