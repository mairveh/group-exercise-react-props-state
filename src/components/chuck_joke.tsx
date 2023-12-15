import Joke from "../joke";

interface ChuckJokeProps {
  chuckJoke: Joke;
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ chuckJoke }) => (
  <p key={chuckJoke.id}>{chuckJoke.joke}</p>
);

export default ChuckJoke;