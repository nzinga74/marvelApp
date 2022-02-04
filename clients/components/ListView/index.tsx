import type { NextPage } from "next";
import { List, Item, Header, Body, Title, Date } from "./styles";
import { useRouter } from "next/router";
import { PropsListView } from "./types";
const ListView: NextPage<PropsListView> = ({ data }) => {
  const router = useRouter();
  return (
    <List>
      {data.map((comic) => (
        <Item onClick={() => router.push(`/comicDetails/${comic.id}`)}>
          <Header>
            <img src={comic.image} />
          </Header>
          <Body>
            <Title>{comic.name}</Title>
            <Date>2001/10/01</Date>
          </Body>
        </Item>
      ))}
    </List>
  );
};
export default ListView;
