import styled, { css } from "styled-components";

export default styled.a` 
  font-size: 1.2rem;
  transition: ease .25s all;
  text-decoration: none;
  color: black;
  ${props => props.secondary && css `
  background-color: #7e3b8e;
  border-radius: 8px;
  padding: 8px;
  color: #fff;
  `}
  &:hover{
    font-size: 1.5rem;
    opacity: .6;
  }

` 
