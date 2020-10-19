import React, { useEffect, useMemo, useState, useContext } from "react";
import styled, { css, keyframes } from "styled-components";
import { getDate } from "./utils";

type ClockContextType = { date?: string };
const ClockContext = React.createContext<ClockContextType>({});
function useClock() {
  return useContext(ClockContext);
}
function ClockProvider({ children }: any) {
  const [date, setDate] = useState<string>(getDate());
  const [state, setState] = useState({
    date,
  });

  console.log("clockProvider", state);

  useEffect(() => {
    let intervalId = setInterval(() => {
      setState({ date: getDate() });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <ClockContext.Provider value={state}>{children}</ClockContext.Provider>
  );
}

const Center = styled.div({
  textAlign: "center",
});
export function Effect() {
  const [title, setTitle] = useState("red yellow blue kindergarten");
  const [animals, setAnimals] = useState(0);
  const state = useClock();

  console.log("state", state);
  const pupilsGroup100 = useMemo(() => {
    return animals < 5000 ? "小于5k" : "大于5k";
  }, [animals]);
  useEffect(() => {
    setAnimals((count) => {
      return ++count;
    });
  }, []);

  useEffect(() => {}, [animals]);
  return (
    <Center>
      {title} pupils {animals}
      <div>group {pupilsGroup100}</div>
      <div>time is {state.date}</div>
    </Center>
  );
}

function App() {
  return (
    <>
      <ClockProvider>
        <Effect />
      </ClockProvider>
    </>
  );
}

export default App;
