"use client";
import {
  Box,
  Container,
  HStack,
  Text,
  VStack,
  Badge,
  Link,
  Icon,
  useColorModeValue
} from "@chakra-ui/react";
import { SOCIALS } from "../_lib/data";

const Footer = () => {
  const borderColor = useColorModeValue("gray.200", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const iconColor = useColorModeValue("gray.600", "gray.400");
  const iconHoverColor = useColorModeValue("gray.900", "white");
  const copyrightColor = useColorModeValue("gray.500", "gray.600");

  return (
    <Box as="footer" py={12} px={6} borderTop="1px" borderColor={borderColor}>
      <Container maxW="6xl">
        <VStack spacing={4}>
          <Text color={textColor}>Let&apos;s build something together</Text>
          <HStack spacing={6}>
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
          </HStack>
          <Text fontSize="sm" color={copyrightColor} mt={8}>
            © 2025 Deep Prajapati. Built with React.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer