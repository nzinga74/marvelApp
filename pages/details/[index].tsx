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
import { requestParams, caracterEspecificPath } from "../../clients/pathUrl";
import api from "../../services/api";
import { IMAGES } from "../../clients/Constants";
import { useEffect, useState } from "react";
import Loading from "../../clients/components/Loading";
const Details: NextPage = () => {
  const router = useRouter();
  const { index } = router.query;
  const [caracter, setCaracter] = useState<any>([]);
  const [loading, setLoading] = useState(false);
  console.log(index);
  const getComicEspecificData = async () => {
    setLoading(true);
    try {
      const response = await api.get(
        `${caracterEspecificPath}/${index}${requestParams}`
      );
      if (response.status === 200) {
        const { data } = response.data;
        setCaracter(data.results);
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
              src={`${caracter[0]?.thumbnail?.path}/${IMAGES.large}.${caracter[0]?.thumbnail?.extension}`}
            />
          </LeftSide>
          <RightSide>
            <Title>{caracter[0]?.name}</Title>
            <Description>{caracter[0]?.description}</Description>
            <Series>
              {caracter[0]?.series.items.map((serie: any) => (
                <SerieItem>
                  <FontAwesomeIcon icon={faStar} color="#f04a4a" />
                  <SerieContext>{serie.name}</SerieContext>
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
export default Details;
