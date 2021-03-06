import styled from "@emotion/styled";

type ToolsHeaderProps = {
    complete: string
}

//Question : font 만 따로 빼서 Button + font / Input + font로 쓸 수 있게 하는 방법

const Button = styled.button`
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

const Input = styled.input`
  font-family: Courier New;
  float: left;
  height: 25px;
  width: 300px;

`

const Checkbox = styled.input`
  margin-right: 20px;
`

const List = styled.li`
  list-style-type: upper-roman;
  font-family: Courier New;
`

const Container = styled.div`
  font-color: #f3f8f8;
  display: flex;
  justify-content: center;
  text-align: center;
`

const Frame = styled.div`
  color: white;
  border: 20px solid rgba(255, 140, 0, 0.24);
  height: 900px;
  padding-bottom: 20px;
  background-color: darkslategray;
`

const Label = styled.label<ToolsHeaderProps>`
  text-decoration: ${(props: ToolsHeaderProps) => props.complete};
}
`

export {Button, Input, Container, Checkbox, List, Frame, Label}
