"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { CORESKILLS } from "../_lib/data";

const About = () => {
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const labelColor = useColorModeValue("gray.500", "gray.500");
  const tagBg = useColorModeValue("gray.100", "gray.700");
  const tagColor = useColorModeValue("gray.700", "gray.300");

  return (
    <Box as="section" py={20} px={6} bg={sectionBg}>
      <Container maxW="6xl">
        <Text
          fontSize="sm"
          fontWeight="semibold"
          color={labelColor}
          textTransform="uppercase"
          letterSpacing="wider"
          mb={4}
        >
          About Me
        </Text>
        <Flex direction={{ base: "column", md: "row" }} gap={12}>
          <VStack align="stretch" spacing={4} color={textColor} flex={1}>
            <Text>
              I&aposm a NYC-based developer with a passion for science,
              technology, and making a positive impact on the world. I graduated
              with a Bachelor&#39;s in Neuroscience, which fueled my curiosity
              about the human mind and behavior.
            </Text>
            <Text>
              After discovering my love for building software, I graduated from
              the Grace Hopper Program at Full Stack Academy and joined Bounty,
              a VC-funded startup where I helped brands and creators collaborate
              to automate UGC and manage creator marketing on TikTok &
              Instagram.
            </Text>
            <Text>
              When I&aposm not coding, I enjoy playing Stardew Valley and going
              on long walks with my dog.
            </Text>
          </VStack>
          <Box
            bg={cardBg}
            borderRadius="xl"
            p={8}
            border="1px"
            borderColor={borderColor}
            flex={1}
          >
            <Heading size="md" mb={4}>
              Core Technologies
            </Heading>
            <Flex flexWrap="wrap" gap={2}>
              {CORESKILLS.map((tech) => (
                <Badge
                  key={tech}
                  px={3}
                  py={1}
                  bg={tagBg}
                  color={tagColor}
                  borderRadius="full"
                  fontSize="sm"
                >
                  {tech}
                </Badge>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default About;
