import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import {
  StyledFilter,
  StyledLabelFilter,
  StyledFilterInput,
} from './StyledFilter';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <StyledFilter>
      <StyledLabelFilter>
        <StyledFilterInput
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="Search for contact"
        />
      </StyledLabelFilter>
    </StyledFilter>
  );
};

export default Filter;
