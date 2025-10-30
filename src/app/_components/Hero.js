"use client";
import {
  Box,
  Container,
  Heading,
  Link,
  Icon,
  HStack,
  Badge,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaFileAlt } from "react-icons/fa";

const Hero = () => {
  const badgeBg = useColorModeValue("gray.100", "gray.700");
  const badgeColor = useColorModeValue("gray.700", "gray.300");
  const subTextColor = useColorModeValue("gray.600", "gray.400");

  return (
    <Box as="section" pt={32} pb={20} px={6}>
      <Container maxW="6xl">
        <Box maxW="3xl">
          <Badge
            display="inline-flex"
            alignItems="center"
            gap={2}
            px={3}
            py={1}
            bg={badgeBg}
            color={badgeColor}
            borderRadius="full"
            fontSize="sm"
            mb={6}
          >
            <Icon as={FaMapMarkerAlt} boxSize={3} />
            <Text as="span">New York City, NY</Text>
          </Badge>
          <Heading
            as="h2"
            size={{ base: "2xl", md: "3xl" }}
            mb={6}
            lineHeight="shorter"
          >
            Software Engineer
          </Heading>
          <Text fontSize="xl" color={subTextColor} mb={8} lineHeight="tall">
            Full-stack developer eager to build products that matter.
            Neuroscience background, startup experience, always learning.
          </Text>
          <HStack spacing={4} flexWrap="wrap">
            <Button
              as={Link}
              href="/resume.pdf"
              leftIcon={<FaFileAlt />}
              colorScheme="gray"
              bg={useColorModeValue("gray.900", "white")}
              color={useColorModeValue("white", "gray.900")}
              _hover={{
                bg: useColorModeValue("gray.800", "gray.100"),
                textDecoration: "none",
              }}
              size="lg"
              isExternal
            >
              View Resume
            </Button>
            <Button
              as={Link}
              href="#projects"
              variant="outline"
              colorScheme="gray"
              size="lg"
              _hover={{ textDecoration: "none" }}
            >
              View Projects
            </Button>
          </HStack>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero;
