import {
  Box,
  Flex,
  Container,
  Heading,
  Button,
  Text,
  Link,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import { useState } from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { PROJECTS, FUNSTUFF } from "../_lib/data";

const ProjectCardImage = ({ src, alt }) => {
  const bg = useColorModeValue("gray.100", "gray.800");

  return (
    <Box
      position="relative"
      width="100%"
      height="220px"
      bg={bg}
      borderBottom="1px solid"
      borderColor={useColorModeValue("gray.200", "gray.700")}
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
      p={4}
    >
      <Image
        src={src}
        alt={alt}
        width={400}
        height={220}
        style={{
          objectFit: "contain",
          objectPosition: "center",
          maxWidth: "100%",
          maxHeight: "100%",
        }}
      />
    </Box>
  );
};

const ProjectCard = ({ project }) => {
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const hoverBorderColor = useColorModeValue("gray.300", "gray.600");
  const textColor = useColorModeValue("gray.600", "gray.400");
  const tagBg = useColorModeValue("gray.100", "gray.700");
  const tagColor = useColorModeValue("gray.600", "gray.300");
  const imageBg = useColorModeValue("gray.100", "gray.900");

  return (
    <Link
      href={project.link}
      isExternal
      _hover={{ textDecoration: "none" }}
      role="group"
      h="full"
    >
      <Flex
        direction="column"
        bg={cardBg}
        borderRadius="xl"
        overflow="hidden"
        border="1px"
        borderColor={borderColor}
        _hover={{
          borderColor: hoverBorderColor,
          shadow: "lg",
        }}
        transition="all 0.2s"
        h="full"
      >
        <ProjectCardImage src={project.imgUrl} alt={project.name} />
        <Flex direction="column" p={6} flex="1">
          <Flex alignItems="center" gap={2} mb={2}>
            <Heading size="md">{project.name}</Heading>
            <ExternalLinkIcon
              boxSize={4}
              opacity={0}
              _groupHover={{ opacity: 1 }}
              transition="opacity 0.2s"
            />
          </Flex>
          <Text
            color={textColor}
            fontSize="sm"
            mb={4}
            lineHeight="tall"
            flex="1"
          >
            {project.description}
          </Text>
          <Flex flexWrap="wrap" gap={2}>
            {project.technologies.map((tech, j) => (
              <Badge
                key={j}
                px={2}
                py={1}
                bg={tagBg}
                color={tagColor}
                borderRadius="md"
                fontSize="xs"
              >
                {tech}
              </Badge>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};
const Projects = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const sectionBg = useColorModeValue("gray.50", "gray.900");
  const labelColor = useColorModeValue("gray.500", "gray.500");
  const borderColor = useColorModeValue("gray.200", "gray.700");
  const activeColor = useColorModeValue("gray.900", "white");
  const inactiveColor = useColorModeValue("gray.500", "gray.500");
  const inactiveHoverColor = useColorModeValue("gray.700", "gray.300");
  const activeBorder = useColorModeValue("gray.900", "white");

  return (
    <Box as="section" id="projects" py={20} px={6} bg={sectionBg}>
      <Container maxW="6xl">
        <Text
          fontSize="sm"
          fontWeight="semibold"
          color={labelColor}
          textTransform="uppercase"
          letterSpacing="wider"
          mb={8}
        >
          Projects
        </Text>

        <Flex gap={4} mb={8} borderBottom="1px" borderColor={borderColor}>
          <Button
            onClick={() => setActiveTab("featured")}
            variant="ghost"
            pb={3}
            px={1}
            fontWeight="medium"
            color={activeTab === "featured" ? activeColor : inactiveColor}
            _hover={{
              color:
                activeTab === "featured" ? activeColor : inactiveHoverColor,
              bg: "transparent",
            }}
            borderRadius={0}
            position="relative"
            transition="color 0.2s"
          >
            Featured
            {activeTab === "featured" && (
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                h="2px"
                bg={activeBorder}
              />
            )}
          </Button>
          <Button
            onClick={() => setActiveTab("fun")}
            variant="ghost"
            pb={3}
            px={1}
            fontWeight="medium"
            color={activeTab === "fun" ? activeColor : inactiveColor}
            _hover={{
              color: activeTab === "fun" ? activeColor : inactiveHoverColor,
              bg: "transparent",
            }}
            borderRadius={0}
            position="relative"
            transition="color 0.2s"
          >
            For Fun
            {activeTab === "fun" && (
              <Box
                position="absolute"
                bottom={0}
                left={0}
                right={0}
                h="2px"
                bg={activeBorder}
              />
            )}
          </Button>
        </Flex>

        <Box
          display="grid"
          gridTemplateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          {(activeTab === "featured" ? PROJECTS : FUNSTUFF).map(
            (project, i) => (
              <ProjectCard key={i} project={project} />
            )
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Projects;
