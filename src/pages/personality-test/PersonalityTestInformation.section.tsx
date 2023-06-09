import { Group, MediaQuery, Stack, Text } from "@mantine/core";
import React from "react";
import AnswerCircle from "../../components/AnswerCircle.component";
import DotDivider from "../../components/DotDivider.component";

export interface IPersonalityTestInformation {}

const PersonalityTestInformation: React.FC<
  IPersonalityTestInformation
> = ({}) => {
  return (
    <Stack className="self-center rounded-full w-[80%] justify-center mt-10 sm:mt-32">
      <Text className="text-center self-center font-poppins text-xl text-primary-text-500">
        Keterangan Pilihan Jawaban
      </Text>
      <MediaQuery smallerThan="sm" styles={{display:"none"}}>
        <Group className="self-center bg-secondary-400 justify-center gap-8 rounded-full py-2 px-10">
          <Group className="flex-nowrap gap-2">
            <AnswerCircle clickable={false} color="primaryGreen" />
            <Text className="text-[15px] sm:text-lg text-primary-text-500 font-semibold">
              Sangat Setuju
            </Text>
          </Group>
          <DotDivider type="dark" />
          <Group className="flex-nowrap gap-2">
            <AnswerCircle clickable={false} color="step2" />
            <Text className="text-[15px] sm:text-lg text-primary-text-500 font-semibold">
              Setuju
            </Text>
          </Group>
          <DotDivider type="dark" />
          <Group className="flex-nowrap gap-2">
            <AnswerCircle clickable={false} color="step3" />
            <Text className="text-[15px] sm:text-lg text-primary-text-500 font-semibold">
              Kurang Setuju
            </Text>
          </Group>
          <DotDivider type="dark" />
          <Group className="flex-nowrap gap-2">
            <AnswerCircle clickable={false} color="primaryDarkBlue" />
            <Text className="text-[15px] sm:text-lg text-primary-text-500 font-semibold">
              Tidak Setuju
            </Text>
          </Group>
        </Group>
      </MediaQuery>
      <MediaQuery largerThan="sm" styles={{display:"none"}}>
        <Stack className="self-center bg-secondary-400 justify-center gap-8 rounded-xl py-4 mt-4 px-8">
          <Group className="flex-nowrap gap-6">
            <AnswerCircle clickable={false} color="primaryGreen" />
            <Text className="text-[15px] sm:text-lg text-primary-text-500 font-semibold">
              Sangat Setuju
            </Text>
          </Group>
          <Group className="flex-nowrap gap-6">
            <AnswerCircle clickable={false} color="step2" />
            <Text className="text-[15px] sm:text-lg text-primary-text-500 font-semibold">
              Setuju
            </Text>
          </Group>
          <Group className="flex-nowrap gap-6">
            <AnswerCircle clickable={false} color="step3" />
            <Text className="text-[15px] sm:text-lg text-primary-text-500 font-semibold">
              Kurang Setuju
            </Text>
          </Group>
          <Group className="flex-nowrap gap-6">
            <AnswerCircle clickable={false} color="primaryDarkBlue" />
            <Text className="text-[15px] sm:text-lg text-primary-text-500 font-semibold">
              Tidak Setuju
            </Text>
          </Group>
        </Stack>
      </MediaQuery>
    </Stack>
  );
};
export default PersonalityTestInformation;
