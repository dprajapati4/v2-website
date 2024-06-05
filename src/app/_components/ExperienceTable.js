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
      fontWeight={"bold"}
      textTransform={"uppercase"}
      fontSize={"xs"}
      letterSpacing={"wider"}
    >
      {children}
    </Td>
  );
};

export const ExperienceTable = ({ experiences }) => {
  return (
    <TableContainer>
      <Table variant="unstyled" size={"md"}>
        <Tbody>
          {experiences.map((experience, i) => (
            <React.Fragment key={i}>
              <Tr>
                <Tdata>{experience.date}</Tdata>
                <Tdata>
                  {experience.title} -{" "}
                  <Box as="span" color="teal.500">
                    <Link href={experience.link} isExternal >
                    {experience.employer}
                    </Link>
                  </Box>
                </Tdata>
              </Tr>
              <Tr>
                <Td></Td>
                <Td color="gray.600" whiteSpace="normal" wordBreak="break-word">
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
  );
};
