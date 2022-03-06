import styled from "@emotion/styled";

//Question : font 만 따로 빼서 Button + font / Input + font로 쓸 수 있게 하는 방법

export const Button = styled.button`
  font-family: Courier New;
  background-color: white;
  color: black;
  border: 2px solid #e7e7e7;
  margin-left: 20px;
  height: 30px;

  &:hover {
    background-color: blanchedalmond;
  }

`

export const Input = styled.input`
  font-family: Courier New;
  float: left;
  height: 25px;
  width: 300px;

`


export const Checkbox = styled.input`
  margin-right: 20px;

`


export const List = styled.li`
  list-style-type: upper-roman;
  margin-left: 20px;
  font-family: Courier New;
`