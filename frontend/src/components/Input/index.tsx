import styled from 'styled-components';
import COLOR from '../../constants/color';
import { Search } from '../../asset';
import { Link } from 'react-router-dom';

export const StyledInputContainer = styled.section`
  position: relative;
  width: 90%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 1rem 1rem;
  margin: 0 auto;
  border-radius: 8px;
  border: none;
  background-color: ${COLOR.LIGHT_010};
  font-family: 'Pretendard-Medium';
  margin-bottom: 2rem;
`;

export const StyledSearch = styled.div`
  position: absolute;
  top: 20%;
  right: 16px;
`;

export type InputPros = {
  color?: string;
  disabled?: boolean;
  margin?: string;
  multiline?: boolean;
  placeholder: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};

const Input = ({
  color,
  disabled = false,
  multiline = false,
  placeholder = '',
  onChange,
}: InputPros) => {
  return (
    <StyledInputContainer>
      <Link to={{ pathname: `/search?` }}>
        <StyledInput
          color={color}
          disabled={disabled}
          multiple={multiline}
          placeholder={placeholder}
          onChange={onChange}
        />

        <StyledSearch>
          <Search />
        </StyledSearch>
      </Link>
    </StyledInputContainer>
  );
}; // ${inputRef?.current?.value}

export default Input;
