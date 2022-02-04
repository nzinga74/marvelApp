import type { NextPage } from "next";
import {
  DetailSection,
  Section,
  LeftSide,
  RightSide,
  Title,
  Description,
  Series,
  SerieItem,
  SerieContext,
} from "./styles";
import FloatButton from "../../clients/components/FloatButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { requestParams, comicEspecificPath } from "../../clients/pathUrl";
import api from "../../services/api";
import { IMAGES } from "../../clients/Constants";
import { useEffect, useState } from "react";
import Loading from "../../clients/components/Loading";
const ComicDetails: NextPage = () => {
  const router = useRouter();
  const { index } = router.query;
  const [comic, setComic] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  console.log(index);
  const getComicEspecificData = async () => {
    setLoading(true);
    try {
      const response = await api.get(
        `${comicEspecificPath}/${index}${requestParams}`
      );
      if (response.status === 200) {
        const { data } = response.data;
        setComic(data.results);
      }
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  useEffect(() => {
    getComicEspecificData();
  }, []);

  if (loading === true) return <Loading />;
  return (
    <>
      <DetailSection>
        <Section>
          <LeftSide>
            <img
              src={`${comic[0]?.thumbnail?.path}/${IMAGES.large}.${comic[0]?.thumbnail?.extension}`}
            />
          </LeftSide>
          <RightSide>
            <Title>{comic[0]?.title}</Title>
            <Description>{comic[0]?.description}</Description>
            <Series>
              {comic[0]?.stories?.items?.map((serie: any) => (
                <SerieItem>
                  <FontAwesomeIcon icon={faStar} color="#f04a4a" />
                  <SerieContext>{serie?.name}</SerieContext>
                </SerieItem>
              ))}
            </Series>
          </RightSide>
        </Section>
      </DetailSection>

      <FloatButton />
    </>
  );
};
export default ComicDetails;
