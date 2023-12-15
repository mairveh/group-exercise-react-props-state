import Joke from "../joke";

interface ChuckJokesProps {
  chuckJokes: Array<Joke>;
}

const ChuckJoke: React.FC<ChuckJokesProps> = ({chuckJokes}) => { 
        return <> {chuckJokes.map(cJoke => <p key={cJoke.id}>{cJoke.joke}</p>)}</>
}

export default ChuckJoke;