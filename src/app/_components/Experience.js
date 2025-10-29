"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
  Badge,
  Link,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { EXPERIENCES } from "@/app/_lib/data";
import { FaBuilding, FaCalendar } from "react-icons/fa";

export const ExperienceItem = ({ experience }) => {
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const dotBg = useColorModeValue("gray.900", "white");
  const linkColor = useColorModeValue("gray.600", "gray.400");
  const linkHoverColor = useColorModeValue("gray.900", "white");
  const textColor = useColorModeValue("gray.700", "gray.300");
  const dateColor = useColorModeValue("gray.500", "gray.500");
  const tagBg = useColorModeValue("gray.100", "gray.800");
  const tagColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box position="relative" pl={8} borderLeft="2px" borderColor={borderColor}>
      <Box
        position="absolute"
        left="-9px"
        top={0}
        w={4}
        h={4}
        borderRadius="full"
        bg={dotBg}
      />
      <Flex direction={{ base: "column", md: "row" }} gap={4} mb={3}>
        <Box flex={1}>
          <Heading size="md" mb={1}>
            {experience.title}
          </Heading>
          <Link
            href={experience.link}
            isExternal
            display="inline-flex"
            alignItems="center"
            gap={1}
            color={linkColor}
            _hover={{ color: linkHoverColor }}
            transition="color 0.2s"
          >
            <Icon as={FaBuilding} boxSize={4} />
            <Text>{experience.employer}</Text>
            <ExternalLinkIcon boxSize={3} />
          </Link>
        </Box>
        <Flex alignItems="center" gap={2} color={dateColor} fontSize="sm">
          <Icon as={FaCalendar} boxSize={3} />
          <Text>{experience.date}</Text>
        </Flex>
      </Flex>
      <Text color={textColor} mb={4} lineHeight="tall">
        {experience.description}
      </Text>
      {experience.technologies && (
        <Flex flexWrap="wrap" gap={2}>
          {experience.technologies.map((tech, j) => (
            <Badge
              key={j}
              px={2.5}
              py={1}
              bg={tagBg}
              color={tagColor}
              borderRadius="md"
              fontSize="xs"
              fontWeight="medium"
            >
              {tech}
            </Badge>
          ))}
        </Flex>
      )}
    </Box>
  );
};

const Experience = () => {
  const labelColor = useColorModeValue("gray.500", "gray.500");

  return (
    <Box as="section" py={20} px={6}>
      <Container maxW="6xl">
        <Text
          fontSize="sm"
          fontWeight="semibold"
          color={labelColor}
          textTransform="uppercase"
          letterSpacing="wider"
          mb={8}
        >
          Experience
        </Text>
        <VStack spacing={12} align="stretch">
          {EXPERIENCES.map((experience, i) => (
            <ExperienceItem key={i} experience={experience} />
          ))}
        </VStack>
      </Container>
    </Box>
  );
};

export default Experience;
