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
      // whiteSpace="normal"
      // wordBreak="break-word"
      // overflowWrap="break-word"
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
                <Tr
                //  display={{ base: "block", md: "table-row" }}
                >
                  <Tdata
                  // width="40%"
                  >
                    {experience.date}
                  </Tdata>
                  <Tdata
                  // width="60%"
                  >
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
                    // display={{ base: "block", md: "table-cell" }}
                    color="gray.600"
                    // whiteSpace="normal"
                    // wordBreak="break-word"
                    // overflowWrap="break-word"
                    // fontSize={{ base: "sm", md: "md" }} // Responsive font size
                    // fontSize={{ base: "xs", md: "sm" }} // Resp
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
