import React from "react";
import {
  Avatar,
  Badge,
  Button,
  Flex,
  Td,
  Text,
  Tr,
  useColorModeValue,
  Circle
} from "@chakra-ui/react";
import { ICandidate } from "./types";

interface TableRowProps extends ICandidate {
  showArchived: boolean;
}

function TableRow(props: TableRowProps) {
  const { candidate, image, role, salary, last_comms, status, sent_by, archived, showArchived } = props;
  const textColor = useColorModeValue("gray.500", "white");
  const titleColor = useColorModeValue("gray.700", "white");
  const borderColor = useColorModeValue("gray.200", "gray.600");

  const getStatusBadge = (status: any) => {
    switch(status){
      case('Pending'): return 'orange';
      case('Extending offer'): return 'green';
      case('Declined'): return 'red';
      case('Interviewing'): return 'blue';
      case('Technical assessment'): return 'purple';
      default: return 'gray';
    }
  }

  return (
    <Tr>
      <Td
        minWidth={{ sm: "250px" }}
        pl="0px"
        borderColor={borderColor}
      >
        <Flex align="center" py=".8rem" minWidth="100%" flexWrap="nowrap">
          <Avatar src={image}  mx={2}/>
          <Flex direction="column">
            <Text
              fontSize="md"
              color={titleColor}
              fontWeight="bold"
              minWidth="100%"
            >
              {candidate}
            </Text>
            <Text fontSize="sm" color="gray.400" fontWeight="normal">
              {role}
            </Text>
          </Flex>
        </Flex>
      </Td>

      <Td borderColor={borderColor}>
        <Flex direction="row">
           <Text fontSize="md" color={textColor} fontWeight={"normal"}>
            {role}
          </Text>
        </Flex>
      </Td>
      <Td borderColor={borderColor}>
        <Flex direction="row" align="center">
          {last_comms.unread ? (
                <Circle size='10px' bg='green' mr={2}/>
            ) : null}
          <Text fontSize="md" color={textColor} fontWeight={last_comms.unread ? "bold" : "normal"}>
            {last_comms.description}
          </Text>
        </Flex>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            {last_comms.date_time}
          </Text>
      </Td>
      <Td borderColor={borderColor}>
        <Text fontSize="md" color={textColor} fontWeight="bold" pb=".5rem">
          R{salary}
        </Text>
      </Td>
      <Td borderColor={borderColor}>
        <Badge
          colorScheme={getStatusBadge(status)}
          fontSize="16px"
          p="3px 10px"
          borderRadius="8px"
        >
          {status}
        </Badge>
      </Td>
      <Td borderColor={borderColor}>
        <Text fontSize="md" color={textColor} fontWeight={"normal"}>
            {sent_by}
        </Text>
      </Td>
      {/* this show on checkbox condition */}
      {showArchived ? (
        <Td borderColor={borderColor}>
          <Button p="0px" bg="transparent" variant="no-effects">
            <Text
              fontSize="md"
              color="blue.400"
              fontWeight="bold"
              cursor="pointer"
            >
              {archived ? 'Archive' : 'Unarchive'}
            </Text>
          </Button>
        </Td>
      ) : null}
    </Tr>
  );
}

export default TableRow;