import React, { useState } from 'react';
import { SearchBar, Header, ToggleColumns } from '../components';
import { ICandidate } from '../components/Table/types';
import interviewRequests from '../data/interviewRequests.json';
import { Flex } from '@chakra-ui/react';

const Home = () => {
  const [ searchKey, setSearchKey ] = useState('');
  const [ isChecked, setIsChecked ] = useState(false);

  const onSearch = (key: string) => {
    setSearchKey(key);
  }

  const onCheckboxClick = (checked: boolean) => {
    setIsChecked(checked);
  }

  const getFilteredData = (data: ICandidate[], key: string) => {
    return data.filter((row: ICandidate) => {
      return Object.values(row).some(s => ('' + s).toLowerCase().includes(key));
    });
  };

  let tableData = getFilteredData(interviewRequests, searchKey);

  return (
    <Flex
      w="100vw"
      mx="auto"
      pb={8}
      flexDir="column"
      align="center"
      justify="center"
    >
        <Header />
        <Flex flex={1} w="90vw" flexDir="row" alignItems="center" justifyContent="space-between">
            <SearchBar searchValue={searchKey} handleSearch={onSearch} />
            <ToggleColumns handleClick={onCheckboxClick} isChecked={isChecked}/>
        </Flex>
    </Flex>
  );
};

export default Home;