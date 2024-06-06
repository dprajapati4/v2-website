import { Tag } from "@chakra-ui/react";

export const TechnologyTag = ({ tag }) => {
  return (
    <Tag
      borderRadius="full"
      variant="outline"
      m={1}
      fontSize={"xs"}
      _hover={{ color: "teal.500" }}
    >
      {tag}
    </Tag>
  );
};
