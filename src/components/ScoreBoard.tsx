type Props = {
  round: number;
  userScore: number;
  computerScore: number;
};

export default function ScoreBoard({ round, userScore, computerScore }: Props) {
  return (
    <div className="mb-4">
      <p className="text-lg">라운드 {round}</p>
      <p className="text-xl font-bold">
        나 {userScore} : {computerScore} 상대방
      </p>
    </div>
  );
}