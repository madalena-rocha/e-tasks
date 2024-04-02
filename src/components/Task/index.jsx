import { useState } from "react";

import { Circle, CheckCircle, PushPinSimple, PushPinSimpleSlash } from "@phosphor-icons/react";

import { Container, Details, PushPin } from './styles';
import { useTheme } from "styled-components";

export function Task({ data, ...rest }) {
  const { COLORS } = useTheme();

  const [isDone, setIsDone] = useState(false);
  const [isPriority, setIsPriority] = useState(false);

  const toggleTaskDone = () => {
    setIsDone(!isDone);
  };

  const toggleTaskPriority = (event) => {
    event.stopPropagation();
    setIsPriority(!isPriority);
  };

  return (
    <Container type="button" $done={isDone} onClick={toggleTaskDone} {...rest}>
      {isDone ? <CheckCircle /> : <Circle />}

      <Details>
        <span>{data.title}</span>
        <small>{data.project}</small>
      </Details>

      <PushPin priority={isPriority} onClick={toggleTaskPriority}>
        {
          isPriority
            ? <PushPinSimpleSlash color={COLORS.RED_200} />
            : <PushPinSimple color={COLORS.GRAY_400} />
        }
      </PushPin>
    </Container>
  )
}