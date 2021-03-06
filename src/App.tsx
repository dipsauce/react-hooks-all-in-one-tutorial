import React, {
    useEffect,
    useMemo,
    useState,
    useContext,
    useReducer,
} from 'react'
import { Center } from './components'
import { ClockContextType } from './types'
import { getDate } from './utils'

const ClockContext = React.createContext<ClockContextType>({})
function useClock() {
    return useContext(ClockContext)
}
function ClockProvider({ children }: any) {
    const [date, setDate] = useState<string>(getDate())
    const [state, setState] = useState({
        date,
    })

    useEffect(() => {
        let intervalId = setInterval(() => {
            setState({ date: getDate() })
        }, 1000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <ClockContext.Provider value={state}>{children}</ClockContext.Provider>
    )
}

enum FarmAction {
    DoubleArea,
}

export function Effect() {
    const [title, setTitle] = useState('red yellow blue kindergarten')
    const [animals, setAnimals] = useState(0)
    const state = useClock()

    const pupilsGroup100 = useMemo(() => {
        return animals < 5000 ? '小于5k' : '大于5k'
    }, [animals])
    useEffect(() => {
        setAnimals((count) => {
            return ++count
        })
    }, [])

    useEffect(() => {}, [animals])
    return (
        <Center>
            {title} pupils {animals}
            <div>group {pupilsGroup100}</div>
            <div>time is {state.date}</div>
            <button onClick={() => {}}>double getArea</button>
        </Center>
    )
}

function App() {
    return (
        <>
            <ClockProvider>
                <Effect />
            </ClockProvider>
        </>
    )
}

export default App
