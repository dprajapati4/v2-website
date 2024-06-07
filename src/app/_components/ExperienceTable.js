import React from "react";
import {
  Box,
  Table,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
} from "@chakra-ui/react";
import { TechnologyTag } from "./TechnologyTag";

const Tdata = ({ children, ...props }) => {
  return (
    <Td
      display={{ base: "block", md: "table-cell" }}
      fontWeight="bold"
      textTransform="uppercase"
      letterSpacing="wider"
      fontSize="sm"
      {...props}
    >
      {children}
    </Td>
  );
};

export const ExperienceTable = ({ experiences }) => {
  return (
    <Box>
      <TableContainer whiteSpace="normal">
        <Table variant="unstyled" size="md">
          <Tbody>
            {experiences.map((experience, i) => (
              <React.Fragment key={i}>
                <Tr>
                  <Tdata width={{ base: "100%", md: "25%" }}>
                    {experience.date}
                  </Tdata>
                  <Tdata>
                    {experience.title} -{" "}
                    <Box as="span" color="teal.500">
                      <Link href={experience.link} isExternal>
                        {experience.employer}
                      </Link>
                    </Box>
                  </Tdata>
                </Tr>
                <Tr display={{ base: "block", md: "table-row" }}>
                  <Td
                    display={{ base: "none", md: "table-cell" }}
                    width="25%"
                  ></Td>
                  <Td
                    colSpan={{ base: 2, md: 1 }}
                    color="gray.600"
                    fontSize="sm"
                  >
                    {experience.description}
                  </Td>
                </Tr>
                {experience.technologies && (
                  <Tr>
                    <Td
                      display={{ base: "none", md: "table-cell" }}
                      width="25%"
                    ></Td>
                    <Td colSpan={{ base: 2, md: 1 }}>
                      {experience.technologies.map((tech, i) => (
                        <TechnologyTag tag={tech} key={i} />
                      ))}
                    </Td>
                  </Tr>
                )}
              </React.Fragment>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th colSpan={2} textAlign="left">
                <Link href="/resume" isExternal>
                  View Full Resume
                </Link>
              </Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
