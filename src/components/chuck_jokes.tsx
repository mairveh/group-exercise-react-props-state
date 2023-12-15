import Joke from "../joke";
import ChuckJoke from "./chuck_joke"

interface ChuckJokesProps {
  chuckJokes: Array<Joke>;
}

const ChuckJokes: React.FC<ChuckJokesProps> = ({chuckJokes}) => { 
        return <> {chuckJokes.map(cJoke => <ChuckJoke chuckJoke={cJoke} />)}</>
}

export default ChuckJokes;