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

export const Tdata = ({ children }) => {
  return (
    <Td
      display={{ base: "block", md: "table-cell" }}
      fontWeight={"bold"}
      textTransform={"uppercase"}
      letterSpacing={"wider"}
      fontSize={{ base: "sm", md: "md" }}
    >
      {children}
    </Td>
  );
};

export const ExperienceTable = ({ experiences }) => {
  return (
    <Box>
      <TableContainer whiteSpace="normal">
        <Table variant="unstyled" size={["sm", "md"]}>
          <Tbody>
            {experiences.map((experience, i) => (
              <React.Fragment key={i}>
                <Tr>
                  <Tdata>{experience.date}</Tdata>
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
                    width={"25%"}
                  ></Td>
                  <Td
                    w={{ base: "100%", md: "48%" }}
                    color="gray.600"
                    fontSize={"sm"}
                    colSpan={{ base: 2, md: 1 }}
                  >
                    {experience.description}
                  </Td>
                </Tr>
              </React.Fragment>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>View Full Resume</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};
