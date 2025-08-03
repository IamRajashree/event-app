import styled from 'styled-components';

const Button = styled.button`
  /* Windows 98 button styling */
  background: #c0c0c0;
  border: 2px solid;
  border-color: #ffffff #808080 #808080 #ffffff;
  padding: 2px 12px;
  font-family: 'MS Sans Serif', sans-serif;
  font-size: 11px;
  cursor: pointer;
  
  &:active {
    border-color: #808080 #ffffff #ffffff #808080;
  }
`;

export default function Wbutton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}