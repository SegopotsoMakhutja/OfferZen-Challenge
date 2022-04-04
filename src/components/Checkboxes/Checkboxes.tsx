import React, { ChangeEvent } from 'react';
import { Checkbox, HStack } from '@chakra-ui/react';

interface ToggleProps {
  handleClick: (checked: boolean) => void;
  isChecked: boolean;
}

const Checkboxes = (props: ToggleProps) => {

  const onCheckboxClick = (e: ChangeEvent<HTMLInputElement>) => {
    props.handleClick(e.target.checked);
  }

  return (
    <HStack>
      <label htmlFor='archive'>Show archived</label>
      <Checkbox
        id="archive"
        name="archive"
        size="lg"
        isChecked={props.isChecked}
        onChange={onCheckboxClick}
        colorScheme="blue"
      />
    </HStack>
  );
};

export default Checkboxes;
