import { Icon, Link } from "@chakra-ui/react";

export const SocialLink = ({ social }) => {
  const { name, icon, url } = social;

  return (
    <Link href={url} isExternal p={0}>
      <Icon
        as={icon}
        aria-label={name}
        w={3}
        h={3}
        _hover={{ color: "teal.500" }}
      />
    </Link>
  );
};
