import React from "react";
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
      overflow="scroll"
      variant="elevated"
      // maxW="full"
      p={2}
    >
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Image
          fit="cover"
          maxW={"250px"}
          // maxW={{ base: "400px", sm: "350px" }}
          // maxH={{ base: "100%", sm: "150px" }}
          src={project.imgUrl}
          alt={project.title}
          fallbackSrc="https://placehold.co/250"
          borderRadius={"2%"}
          m={["5px", "15px"]}
        />
      </Box>
      <Stack>
        <CardBody>
          <Link href="https://chakra-ui.com" isExternal>
            <Text
              fontWeight={"bold"}
              textTransform={"uppercase"}
              letterSpacing={"wider"}
              fontSize={"sm"}
            >
              {project.name} <ExternalLinkIcon mx="2px" />{" "}
            </Text>{" "}
          </Link>

          <Text py="2" color="gray.600" fontSize={"sm"}>
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
    <Box overflowY="auto">
      {projects.map((project, i) => (
        <ProjectCard project={project} key={i} />
      ))}
    </Box>
  );
};
