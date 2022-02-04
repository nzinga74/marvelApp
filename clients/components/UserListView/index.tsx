import type { NextPage } from "next";
import { useRouter } from "next/router";
import { List, Item, Header, Body, Title, Date, HeaderImage } from "./styles";
import { PropsUserListView } from "./types";
const UserListView: NextPage<PropsUserListView> = ({ data }) => {
  const router = useRouter();
  return (
    <List>
      {data.map((caracter) => (
        <Item onClick={() => router.push(`/details/${caracter.id}`)}>
          <Header>
            <HeaderImage>
              <img src={caracter?.image} />
            </HeaderImage>
          </Header>
          <Body>
            <Title>{caracter?.name}</Title>
            <Date>2001/10/01</Date>
          </Body>
        </Item>
      ))}
    </List>
  );
};
export default UserListView;
