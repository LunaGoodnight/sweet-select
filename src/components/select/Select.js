import React from 'react';
import PropTypes from 'prop-types';
import { SelectWrapper, TopInput, InputBlock, DropDown, ListItem, NoOptions, ShowText, WrapTriangle, Triangle, CloseButton } from './selectStyle';

export function Select({
  searchInput = '',
  setSearchInput,
  placeholder = '',
  handleClearValue,
  isDropdownOpen,
  setIsDropdownOpen,
  wrapper,
  list = [],
  inputRef,
  selectedItem,
  inputLike = false,
  nameKey,
  handleClickItem,
}) {
  const regex = new RegExp(searchInput, 'i');
  return (
    <SelectWrapper ref={wrapper}>
      <InputBlock onClick={() => setIsDropdownOpen((prev) => !prev)}>
        {searchInput === '' && selectedItem && <ShowText>{selectedItem[nameKey] ?? ''}</ShowText>}
        <TopInput
          ref={inputRef}
          type="text"
          inputLike={inputLike}
          placeholder={selectedItem?.[nameKey] ? '' : placeholder}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        {(searchInput !== '' || selectedItem) && (
          <CloseButton type="button" onClick={(e) => handleClearValue(e)}>
            x
          </CloseButton>
        )}

        <WrapTriangle>
          <Triangle isDropdownOpen={isDropdownOpen} />
        </WrapTriangle>
      </InputBlock>
      {(isDropdownOpen || searchInput.length > 0) && (
        <DropDown>
          {list.map((item, index) => {
            const { [nameKey]: name } = item;
            if (searchInput === '') {
              return (
                <ListItem key={`name_${index}`} onClick={(e) => handleClickItem(e, item)}>
                  {name}
                </ListItem>
              );
            }
            if (typeof name === 'string' && regex.test(name)) {
              return (
                <ListItem key={`name_${index}`} onClick={(e) => handleClickItem(e, item)}>
                  {item[nameKey]}
                </ListItem>
              );
            }
            return null;
          })}

          {!list.some(({ [nameKey]: name }) => typeof name === 'string' && regex.test(name)) && <NoOptions>No options</NoOptions>}
        </DropDown>
      )}
    </SelectWrapper>
  );
}

Select.defaultProps = {
  searchInput: '',
};
Select.propTypes = {
  searchInput: PropTypes.string,
};
export default {};
