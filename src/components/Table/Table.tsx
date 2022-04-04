import React from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer, Heading } from '@chakra-ui/react'
import interviewRequests from '../../data/interviewRequests.json'
import TableRow from './TableRow';
import { ICandidate } from "./types";

interface TableProps {
    data: ICandidate[];
    showArchived: boolean;
}

const TableComponent = ({ data, showArchived }: TableProps) => {

    // a better approach would be to get this from the data object props
    // Object.keys(data[0]).map(key => ...
    const columnHeaders = [
        'Candidate',
        'Role',
        'Last Communication',
        'Salary',
        'Status',
        'Sent By',
        ' ',
    ];

    return (
          <TableContainer w="90vw">
            <Heading alignSelf="flex-end" justifySelf="flex-end" as="h1" size="xs">{interviewRequests.length} Interview Requests</Heading>
                <Table variant="simple">
                    <Thead>
                        <Tr bg={"gray.200"} justifyContent="space-evenly">
                            {columnHeaders.map((header) => (
                                <Th key={header} mx={4}>
                                    {header}
                                </Th>
                            ))}
                        </Tr>
                     </Thead>
            <Tbody>
              {data.map((row, index) => {
                return (
                  <TableRow
                    showArchived={showArchived}
                    candidate={row.candidate}
                    image={row.image}
                    role={row.role}
                    salary={row.salary}
                    last_comms={row.last_comms}
                    status={row.status}
                    sent_by={row.sent_by}
                    archived={row.archived}
                    key={index}
                  />
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
    )
}

export default TableComponent;