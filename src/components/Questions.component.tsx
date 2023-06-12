import { Group, Stack, Text } from "@mantine/core";
import React, { useEffect, useState } from "react";
import usePrevious from "../hooks/usePrevious";
import { AnswerCircleColorType } from "../utils/const/types";
import QuestionCircleComponent, {
  IQuestionCircleComponent
} from "./QuestionCircle.component";

export interface IQuestion {
  progressCount: number;
  idx: number;
  setProgressCount: React.Dispatch<React.SetStateAction<number>>;
  questions: string;
  isPositive?: boolean;
  answerPointList: IQuestionCircleComponent[];
  updateScore: any;
  disabled?: boolean;
  getError?: () => void;
}

const answerChoiceColour: Array<AnswerCircleColorType> = [
  "primaryGreen",
  "step2",
  "step3",
  "primaryDarkBlue"
];

const Question: React.FC<IQuestion> = ({
  progressCount,
  idx,
  setProgressCount,
  questions,
  answerPointList,
  updateScore,
  disabled = false,
  getError = () => {}
}) => {
  const [focusedChoice, setFocusedChoice] = useState<number | null>(null);
  const prevFocusedChoice = usePrevious(focusedChoice);
  const [currPoint, setCurrPoint] = useState(0);

  // if (isPositive) {
  //   console.log(`- ${questions}`);
  // }

  function chooseNewChoice(order: number, point: number) {
    if (focusedChoice == order) {
      setFocusedChoice(null);
      setCurrPoint(0);
      setProgressCount(progressCount - 1);
    } else {
      setFocusedChoice(order);
      setCurrPoint(point);
      setProgressCount(progressCount + 1);
    }
  }

  useEffect(() => {
    if (
      typeof prevFocusedChoice == "number" &&
      typeof focusedChoice == "number"
    ) {
      setProgressCount(progressCount - 1);
    }

    updateScore(idx, currPoint);
  }, [focusedChoice]);

  return (
    <Stack
      className={`w-[90%] md:w-[80%] self-center`}
      onClick={disabled ? getError : () => {}}
    >
      {/* ${!isPositive? "bg-error-500/[0.2]" : "bg-primaryGreen/[0.2]"} */}
      <Text
        className={`text-center text-[18px] sm:text-xl tracking-4 ${
          disabled ? "text-secondary-text-500" : "text-primary-text-500"
        }`}
      >
        {idx+1}. {questions}
      </Text>
      <div className="self-center">
        <Group className="gap-6 self-center flex-nowrap relative">
          <Text
            className={`self-end mb-1 hidden sm:block text-xl font-poppins  absolute -left-40 ${
              disabled ? "text-secondary-text-500" : "text-primaryGreen"
            }`}
          >
            Sangat Setuju
          </Text>
          <Group className="gap-10 sm:gap-8 flex-nowrap">
            {answerPointList?.map(
              (point: IQuestionCircleComponent, e: number) => {
                return (
                  <QuestionCircleComponent
                    size={e + 1}
                    key={point.order + questions}
                    order={point.order}
                    desc={point.desc}
                    point={point.point}
                    focusedChoice={focusedChoice}
                    chooseNewChoice={chooseNewChoice}
                    color={answerChoiceColour[e]}
                    disabled={disabled}
                  />
                );
              }
            )}
          </Group>
          <Text
            className={`self-end mb-1 hidden sm:block text-xl font-poppins  absolute -right-36 ${
              disabled ? "text-secondary-text-500" : "text-primaryDarkBlue"
            }`}
          >
            Tidak Setuju
          </Text>
        </Group>
      </div>
    </Stack>
  );
};
export default Question;
