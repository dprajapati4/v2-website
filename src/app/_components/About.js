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
              I&apos;m a full-stack developer in NYC with a neuroscience degree
              and a belief that the best software feels invisible. After
              studying human behavior in labs, I wanted to shape it through
              code—so I joined Fullstack Academy&apos;s Grace Hopper Program and
              landed at Bounty, a VC-backed creator platform.
            </Text>
            <Text>
              At Bounty, I shipped features across React and Node.js that helped
              brands and creators automate campaigns on TikTok and Instagram,
              processing thousands of collaborations. My neuroscience background
              drives how I code: I obsess over cognitive load, friction points,
              and making complex workflows feel effortless.
            </Text>
            <Text>
              When I&apos;m not coding, I&apos;m optimizing my Stardew Valley
              farm or exploring NYC with my dog.
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
