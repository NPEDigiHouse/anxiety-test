import { Button, Grid, Group, MediaQuery, Stack, Text } from "@mantine/core";
import React, { useContext, useState } from "react";
import {
  FileCheckIcon,
  NormalAnxietyIcon,
  NotAnxietyIcon,
  PDFIcon,
  RestartIcon,
  ResultAnxietyIcon
} from "../../assets/icons/Fluent";
import PDFModal from "../../components/PDFModal";
import VerticalDivider from "../../components/VerticalDivider.component";
import { AppContext } from "../../context/app-context.context";
import AnxietyTestResult, {
  styles
} from "../../letters/AnxietyTestResult.letter";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";

export interface IPersonalityTestResult {
  scene: "pertanyaan" | "hasil";
  setScene: React.Dispatch<React.SetStateAction<"pertanyaan" | "hasil">>;
  scrollTo: any;
  scrollIntoView: any;
}

const PersonalityTestResult: React.FC<IPersonalityTestResult> = ({
  setScene,
  scrollIntoView
}) => {
  const {
    result,
    resultPercentage,
    setResult,
    setResultPercentage,
    currentTesterName,
    currentTesterAge,
    currentTesterClass,
    currentTesterGender
  } = useContext(AppContext);

  const [isResultModalOpened, setIsResultModalOpened] = useState(false);

  return (
    <Stack className="mt-16 sm:mt-24 md:mt-28">
      <PDFModal opened={isResultModalOpened} setOpened={setIsResultModalOpened}>
        <PDFViewer style={styles.viewer}>
          <AnxietyTestResult
            name={currentTesterName || ""}
            age={currentTesterAge || 0}
            classes={currentTesterClass || ""}
            gender={currentTesterGender || ""}
            percentage={resultPercentage}
            result={result}
          />
        </PDFViewer>
      </PDFModal>
      <Stack className="gap-0 self-center w-[90%]">
        <Text className="self-center font-poppins-semibold text-[26px] sm:text-[30px] md:text-[38px] text-primary-text-500 text-center">
          Nama: {currentTesterName}
        </Text>
        <Text className="self-center font-poppins-semibold text-[26px] sm:text-[30px] md:text-[38px] text-primary-text-500 text-center">
          Hasil Asesmen: Kecemasan
          <span
            className={`w-[90%] font-poppins-bold  ${
              result === "Rendah"
                ? "text-primaryGreen"
                : result === "Sedang"
                ? "text-primaryBlue"
                : "text-primaryDarkBlue"
            }`}
          >
            {" "}
            Tingkat {result}
          </span>
        </Text>
      </Stack>
      <Group className="justify-center w-[90%] self-center gap-2 md:gap-10 mt-0 md:mt-10">
        <div className="flex self-center w-[200px] md:w-[320px] overflow-hidden">
          {result === "Rendah" ? (
            <NotAnxietyIcon size={300} />
          ) : result === "Sedang" ? (
            <NormalAnxietyIcon size={300} className="self-center ml-2" />
          ) : (
            <ResultAnxietyIcon size={300} className="self-center ml-2" />
          )}
        </div>
        <Stack className="relative">
          <FileCheckIcon
            size={96}
            color={"#deddf1"}
            className="absolute -z-10 right-0 -bottom-6 md:-top-4"
          />
          <Stack className="gap-0 md:gap-0">
            <Text className="font-poppins-bold text-[18px] md:text-[30px] text-primary-text-500">
              Tingkat Kecemasan {result}
            </Text>
            <Text className="text-lg sm:text-[18px] md:text-[20px] text-secondary-text-500 -mt-1">
              Dengan Presentase Kecemasan {resultPercentage?.toFixed(1)} %
            </Text>
          </Stack>
          <div className="">
            <VerticalDivider h="sm" />
          </div>
          <Stack className="gap-0 -mt-4 sm:mt-0">
            <Text
              className={`md:w-[700px] text-primary-text-500 tracking-1 text-justify text-lg sm:text-[18px]`}
            >
              {result === "Rendah" ? (
                <>
                  Siswa memiliki persepsi positif terhadap diri dan lingkungan
                  yang mendukungnya untuk dapat melakukan interaksi sosial
                  dengan baik
                </>
              ) : result === "Sedang" ? (
                <>
                  Siswa cukup memiliki persepsi negatif terhadap diri dan
                  lingkungan yang mengakibatkan siswa melakukan penghindaran
                  sosial
                </>
              ) : (
                <>
                  Siswa memiliki persepsi negatif terhadap diri dan
                  lingkungannya yang mengakibatkan siswa melakukan penghindaran
                  sosial
                </>
              )}
            </Text>
          </Stack>
        </Stack>
      </Group>
      <Grid className="mt-8 sm:mt-14 md:mt-16 self-center w-[80%]">
        <Grid.Col sm={12} md={6}>
          <Button
            className="bg-primaryGreen hover:bg-primaryGreen rounded-full !h-12 sm:!h-14 text-lg sm:text-xl font-normal !w-full"
            rightIcon={
              <RestartIcon size={26} className="mt-[2px]" color={"#FFFFFF"} />
            }
            onClick={() => {
              setScene("pertanyaan");
              // scrollTo({ y: 600 });

              scrollIntoView({
                alignment: "center"
              });

              setResult(null);
              setResultPercentage(null);
            }}
          >
            Ulang Asesmen
          </Button>
        </Grid.Col>
        <Grid.Col sm={12} md={6}>
          <MediaQuery largerThan="md" styles={{ display: "none" }}>
            <PDFDownloadLink
              document={
                <AnxietyTestResult
                  name={currentTesterName || ""}
                  age={currentTesterAge || 0}
                  classes={currentTesterClass || ""}
                  gender={currentTesterGender || ""}
                  percentage={resultPercentage}
                  result={result}
                />
              }
              fileName="hasil-asesmen-kecemasan.pdf"
            >
              <Button
                className="bg-primaryDarkBlue hover:bg-primaryDarkBlue rounded-full !h-12 sm:!h-14 text-lg sm:text-xl font-normal !w-full"
                rightIcon={
                  <PDFIcon size={26} className="mt-[2px]" color={"#FFFFFF"} />
                }
                // onClick={() => {
                //   setIsResultModalOpened(true);
                // }}
              >
                Tampilkan Dokumen Hasil
              </Button>
            </PDFDownloadLink>
          </MediaQuery>

          <MediaQuery smallerThan="md" styles={{ display: "none" }}>
            <Button
              className="bg-primaryDarkBlue hover:bg-primaryDarkBlue rounded-full !h-12 sm:!h-14 text-lg sm:text-xl font-normal !w-full"
              rightIcon={
                <PDFIcon size={26} className="mt-[2px]" color={"#FFFFFF"} />
              }
              onClick={() => {
                setIsResultModalOpened(true);
              }}
            >
              Tampilkan Dokumen Hasil
            </Button>
          </MediaQuery>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};
export default PersonalityTestResult;
