import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Button,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export const ProjectsCard = ({ project }) => {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        // src={project.link}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt={project.title}
      />

      <Stack>
        <CardBody>
          <Link href="https://chakra-ui.com" isExternal>
            <Text size="md">
              {project.name} <ExternalLinkIcon mx="2px" />{" "}
            </Text>{" "}
          </Link>

          <Text py="2">{project.description}</Text>
        </CardBody>

        <CardFooter>Put techs here</CardFooter>
      </Stack>
    </Card>
  );
};
