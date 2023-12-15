import Joke from "../joke";

interface ChuckJokesProps {
  chuckJokes: Array<Joke>;
}

const ChuckJokes: React.FC<ChuckJokesProps> = ({chuckJokes}) => { 
        return <> {chuckJokes.map(cJoke => <p key={cJoke.id}>{cJoke.joke}</p>)}</>
}

export default ChuckJokes;