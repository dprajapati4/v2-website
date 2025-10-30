"use client";
import {
  Box,
  Container,
  Flex,
  Heading,
  Link,
  Icon,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { SOCIALS } from "../_lib/data";

const Navigation = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("whiteAlpha.800", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const iconColor = useColorModeValue("gray.600", "gray.400");
  const iconHoverColor = useColorModeValue("gray.900", "white");

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg={bg}
      backdropFilter="blur(10px)"
      borderBottom="1px"
      borderColor={borderColor}
      zIndex={50}
      transition="all 0.2s"
    >
      <Container maxW="6xl" py={4}>
        <Flex justify="space-between" align="center">
          <Heading size="lg" fontWeight="semibold">
            Deep Prajapati
          </Heading>
          <HStack spacing={4}>
            {SOCIALS.map((social) => (
              <Link
                key={social.name}
                href={social.url}
                isExternal
                color={iconColor}
                _hover={{ color: iconHoverColor }}
                transition="color 0.2s"
                aria-label={social.name}
              >
                <Icon as={social.icon} boxSize={5} />
              </Link>
            ))}
            <IconButton
              icon={colorMode === "light" ? <FaMoon /> : <FaSun />}
              onClick={toggleColorMode}
              aria-label="Toggle theme"
              variant="ghost"
              colorScheme={colorMode === "light" ? "gray" : "yellow"}
            />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation
