import { Stack, Text } from "@mantine/core";
import React from "react";
import { AnswerCircleColorType } from "../utils/const/types";
import AnswerCircle from "./AnswerCircle.component";

export interface IQuestionCircleComponent {
  size?: number;
  order: number;
  point: number;
  desc?: String;
  focusedChoice?: number | null;
  chooseNewChoice?: (a: number, b: number) => void;
  color?: AnswerCircleColorType ;
  disabled?: boolean;
}

const QuestionCircleComponent: React.FC<IQuestionCircleComponent> = ({
  order,
  desc,
  point,
  chooseNewChoice,
  focusedChoice=0,
  color="step2",
  disabled= false
}) => {
  return (
    <Stack className="bg-white gap-1 h-full">
      <Text className="text-center font-semibold text-secondary-text-500">
        {desc}
      </Text>
      <AnswerCircle
        // size={
        //   size == 1 || size == 5
        //     ? "lg"
        //     : size == "2" || size == "4"
        //     ? "md"
        //     : "sm"
        // }
        color={color}
        focus={focusedChoice == order}
        onClick={() => {
          chooseNewChoice!(order, point);
        }}
        disabled={disabled}
      />
    </Stack>
  );
};
export default QuestionCircleComponent;
