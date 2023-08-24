import {
  Box,
  Divider as ChakraDivider,
  Flex,
  Heading,
  Text,
  chakra,
} from "@chakra-ui/react"

import ButtonLink from "@/components/ButtonLink"
import DocLink from "@/components/DocLink"
import Emoji from "@/components/Emoji"
import EnergyConsumptionChart from "@/components/EnergyConsumptionChart"
import ExpandableCard from "@/components/ExpandableCard"
import FeedbackCard from "@/components/FeedbackCard"
import InfoBanner from "@/components/InfoBanner"
import Link from "@/components/Link"
import MarkdownTable from "@/components/MarkdownTable"
import MarkdownImage from "@/components/MarkdownImage"
import NetworkUpgradeSummary from "@/components/History/NetworkUpgradeSummary"
import YouTube from "@/components/YouTube"

import type { ChildOnlyProp } from "@/lib/types"

const Pre = (props: ChildOnlyProp) => (
  <Text
    as="pre"
    maxW="full"
    overflowX="scroll"
    bgColor="preBackground"
    borderRadius="base"
    p={4}
    border="1px solid"
    borderColor="preBorder"
    whiteSpace="pre-wrap"
    {...props}
  />
)

const HR = () => (
  <ChakraDivider
    mt={8}
    mb={4}
    display="inline-block"
    position="inherit"
    bg="border"
  />
)

const Divider = () => <Box my={16} w="10%" h={1} bgColor="homeDivider" />

const Header1 = (props: ChildOnlyProp) => (
  <Heading
    as="h1"
    fontSize={{ base: "2.5rem", md: "5xl" }}
    lineHeight={1.4}
    fontWeight="bold"
    _before={{
      content: `""`,
      display: "block",
      h: "140px",
      mt: "-140px",
      visibility: "hidden",
    }}
    sx={{
      a: {
        display: "none",
      },
    }}
    {...props}
  />
)

const Header2 = (props: ChildOnlyProp) => (
  <Heading
    fontSize={{ base: "2xl", md: "2rem" }}
    lineHeight={1.4}
    fontWeight="bold"
    sx={{ position: "inherit !important" }}
    _before={{
      content: `""`,
      display: "block",
      h: "120px",
      mt: "-120px",
      visibility: "hidden",
    }}
    {...props}
  />
)

const Header3 = (props: ChildOnlyProp) => (
  <Heading
    as="h3"
    fontSize={{ base: "xl", md: "2xl" }}
    lineHeight={1.4}
    sx={{ position: "inherit !important" }}
    _before={{
      content: `""`,
      display: "block",
      h: "120px",
      mt: "-120px",
      visibility: "hidden",
    }}
    {...props}
  />
)

const Header4 = (props: ChildOnlyProp) => (
  <Heading
    as="h4"
    fontSize={{ base: "md", md: "xl" }}
    lineHeight={1.4}
    fontWeight="semibold"
    sx={{ position: "unset !important" }}
    _before={{
      content: `""`,
      display: "block",
      h: "120px",
      mt: "-120px",
      visibility: "hidden",
    }}
    {...props}
  />
)

const Paragraph = (props: ChildOnlyProp) => (
  <Text fontSize="md" mt={8} mb={4} color="text300" {...props} />
)

const ListItem = (props: ChildOnlyProp) => (
  <chakra.li color="text300" {...props} />
)

// Static layout components
export const staticComponents = {
  a: Link,
  h1: Header1,
  h2: Header2,
  h3: Header3,
  h4: Header4,
  hr: HR,
  img: MarkdownImage,
  li: ListItem,
  p: Paragraph,
  pre: Pre,
  table: MarkdownTable,
  ButtonLink,
  Divider,
  DocLink,
  Emoji,
  EnergyConsumptionChart,
  ExpandableCard,
  InfoBanner,
  Link,
  NetworkUpgradeSummary,
  YouTube,
}

export const StaticLayout = ({ children }) => (
  <Box w="full">
    <Flex
      justifyContent="space-between"
      w="full"
      // mx="auto"
      ml={2}
      mb={16}
      p={8}
      pt={{ base: 8, lg: 16 }}
      // TODO: set isRightToLeft
      // dir={isRightToLeft ? "rtl" : "ltr"}
    >
      <Box
        as="article"
        maxW="container.md"
        w="full"
        sx={{
          ".featured": {
            pl: 4,
            ml: -4,
            borderLeft: "1px dotted",
            borderLeftColor: "primary.base",
          },

          ".citation": {
            p: {
              color: "text200",
            },
          },
        }}
      >
        {children}

        <FeedbackCard />
      </Box>
    </Flex>
  </Box>
)
