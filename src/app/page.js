"use client";

import {
  Box,
  Heading,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import { socials, experiences, projects, funStuff } from "./_lib/data";
import { SocialLink } from "./_components/SocialLink";
import { ExperienceTable } from "./_components/ExperienceTable";
import { Projects } from "./_components/ProjectCard";

const MainHeading = ({ children }) => (
  <Heading as="h1" size="2xl" mt="3">
    {children}
  </Heading>
);

const SubHeading = ({ children, ...props }) => (
  <Heading as="h2" size="md" mt="1" {...props}>
    {children}
  </Heading>
);

const SectionHeading = ({ children }) => (
  <Heading
    as="h2"
    size="sm"
    mt="3"
    fontWeight="bold"
    textTransform="uppercase"
    letterSpacing="wider"
  >
    {children}
  </Heading>
);

export default function Home() {
  return (
    <Box minH="100vh" display="flex" flexDir="column" p={4} bgColor="#f5f5f5">
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="flex-end"
        alignItems="center"
        gap="2"
        m={3}
      >
        {socials.map((social) => (
          <SocialLink social={social} key={social.name} />
        ))}
      </Box>

      <Box as="header" textAlign="center">
        <MainHeading>Deep Prajapati</MainHeading>
        <SubHeading>Full Stack Software Engineer</SubHeading>
        <Heading as="h3" size="sm" fontWeight="400" mt="3">
          Passionate about building efficient, accessible, and user-friendly
          software.
        </Heading>
      </Box>

      <Box
        as="main"
        display="flex"
        flexWrap="wrap"
        justifyContent="space-between"
        mt={6}
      >
        <Box w={{ base: "100%", lg: "48%" }} mb={{ base: 4, lg: 0 }}>
          <SectionHeading>About me</SectionHeading>
          <Text color="gray.600" fontSize="sm" p={5}>
            I’m a NYC-based developer with a passion for science, technology,
            and making a positive impact on the world. I graduated with a
            Bachelor’s in Neuroscience, which fueled my curiosity about the
            human mind and behavior. I realized I enjoyed working and building
            software. So after graduating from the Grace Hopper Program at Full
            Stack Academy, I went on to work at a small start-up, Bounty, where
            I worked to help brands and creators work together to automate UGC
            and manage creator marketing on TikTok & Instagram. When I’m not
            coding, I enjoy playing Stardew Valley and going on long walks with
            my dog.
          </Text>
          <SectionHeading>Experience</SectionHeading>
          <ExperienceTable experiences={experiences} />
        </Box>

        <Box w={{ base: "100%", lg: "48%" }}>
          <SectionHeading>Projects</SectionHeading>
          <Tabs variant="line" colorScheme="teal">
            <TabList>
              <Tab
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="wider"
                fontSize="sm"
              >
                Featured
              </Tab>
              <Tab
                fontWeight="bold"
                textTransform="uppercase"
                letterSpacing="wider"
                fontSize="sm"
              >
                For Fun
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Projects projects={projects} />
              </TabPanel>
              <TabPanel>
                <Projects projects={funStuff} />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
}
