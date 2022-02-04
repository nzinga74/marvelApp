import type { NextPage } from "next";
import { useEffect, useState } from "react";
import UserListView from "../../clients/components/UserListView";
import FloatButton from "../../clients/components/FloatButton";
import api from "../../services/api";
import { comicPath, caracterPath } from "../../clients/pathUrl";
import { IMAGES } from "../../clients/Constants";
import { toast } from "react-toastify";
const Caracter: NextPage = () => {
  const [characters, setCharacter] = useState([]);
  const getCharacterData = async () => {
    try {
      const response = await api.get(caracterPath);
      const { code, data } = response.data;
      if (code === 200) {
        toast.success("Dados Carregados com sucesso");
        const characterList = data?.results.map((comic: any) => ({
          id: comic.id,
          name: comic.name,
          image: `${comic?.thumbnail?.path}/${IMAGES.large}.${comic?.thumbnail?.extension}`,
        }));
        setCharacter(characterList);
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCharacterData();
  }, []);
  return (
    <>
      <UserListView data={characters} />
      <FloatButton />
    </>
  );
};
export default Caracter;
