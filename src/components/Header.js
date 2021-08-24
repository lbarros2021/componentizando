import styled from "styled-components";

const ListItem = styled.li`
  color: red;

  &:hover {
    color: white;
  }
`;

const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  color: red;
  font-size: 30px;
  background-color: black;
`;

function Header() {
  return (
    <List>
      <ListItem>inicio</ListItem>
      <ListItem>sobre</ListItem>
      <ListItem>galeria</ListItem>
    </List>
  );
}

export default Header;
