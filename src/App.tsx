import React, { useEffect, useMemo, useState, useContext } from "react";
import styled, { css, keyframes } from "styled-components";
import { getDate } from "./utils";

type ClockContextType = { date: string };
const ClockContext = React.createContext<ClockContextType>({
  date: getDate(),
});
function ClockProvider({ children }: any) {
  const [state, setState] = useState<ClockContextType>({
    date: getDate(),
  });
  useEffect(() => {
    let intervalId = setInterval(() => {
      setState({ ...state, date: getDate() });
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  return (
    <ClockContext.Provider value={state}>{children}</ClockContext.Provider>
  );
}
function useClock() {
  return useContext(ClockContext);
}

const Center = styled.div({
  textAlign: "center",
});
export function Effect() {
  const [title, setTitle] = useState("red yellow blue kindergarten");
  const [animals, setAnimals] = useState(0);
  const state = useClock();

  const pupilsGroup100 = useMemo(() => {
    // console.log(animals);
    return animals < 5000 ? "小于5k" : "大于5k";
  }, [animals]);
  useEffect(() => {
    setAnimals((count) => {
      return ++count;
    });
  }, []);

  useEffect(() => {}, [animals]);
  return (
    <ClockProvider>
      <Center>
        {title} pupils {animals}
        <div>group {pupilsGroup100}</div>
        <div>time is {state.date}</div>
      </Center>
    </ClockProvider>
  );
}

function App() {
  return (
    <>
      <Effect />
    </>
  );
}

export default App;
