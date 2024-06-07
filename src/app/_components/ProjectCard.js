import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Text,
  Link,
  Box,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { TechnologyTag } from "./TechnologyTag";

const ProjectCard = ({ project }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="elevated"
      p={[0, 4]}
      m={4}
      boxShadow="lg"
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          fit="cover"
          maxW={{ base: "100%", sm: "200px" }}
          h={{ base: "auto", sm: "150px" }}
          src={project.imgUrl}
          alt={project.title}
          fallbackSrc="https://placehold.co/200"
          borderRadius="md"
          m={["5px", "15px"]}
        />
      </Box>
      <Stack flex="1">
        <CardBody>
          <Link href={project.link} isExternal>
            <Text
              fontWeight="bold"
              textTransform="uppercase"
              letterSpacing="wider"
              fontSize="md"
            >
              {project.name} <ExternalLinkIcon mx="2px" />
            </Text>
          </Link>
          <Text py="2" color="gray.600" fontSize="sm">
            {project.description}
          </Text>
        </CardBody>
        <CardFooter flexWrap="wrap">
          {project.technologies.map((tech, i) => (
            <TechnologyTag tag={tech} key={i} />
          ))}
        </CardFooter>
      </Stack>
    </Card>
  );
};

export const Projects = ({ projects }) => {
  return (
    <Box display="flex" flexDirection="column" overflowY="auto" p={[0, 4]}>
      {projects.map((project, i) => (
        <ProjectCard project={project} key={i} />
      ))}
    </Box>
  );
};
