import type { NextPage } from "next";
import { useEffect, useState, useRef } from "react";
import ListView from "../clients/components/ListView";
import FloatButton from "../clients/components/FloatButton";
import api from "../services/api";
import { comicPath } from "../clients/pathUrl";
import { IMAGES } from "../clients/Constants";
import Loading from "../clients/components/Loading";
const Home: NextPage = () => {
  const [comicList, setComicList] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const formatData = (data: any) => {
    const comics = data?.results.map((comic: any) => ({
      id: comic.id,
      name: comic.title,
      image: `${comic?.thumbnail?.path}/${IMAGES.large}.${comic?.thumbnail?.extension}`,
    }));
    return comics;
  };
  const getComicsData = async () => {
    setLoading(true);
    try {
      const response = await api.get(comicPath);
      const { code, data } = response.data;
      if (code === 200) {
        setComicList(formatData(data));
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    getComicsData();
  }, []);
  return (
    <>
      <ListView data={comicList} />
      <FloatButton />
      {loading && <Loading />}
    </>
  );
};

export default Home;
