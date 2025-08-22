import { useState } from "react";
import { choices, Choice } from "../types/game";
import PlayerDisplay from "../components/PlayerDisplay";
import ChoiceButton from "../components/ChoiceButton";
import ScoreBoard from "../components/ScoreBoard";

export default function GamePage() {
  const [round, setRound] = useState(1);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userChoice, setUserChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<string>("");

  const play = (choice: Choice) => {
    const random = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(random);

    if (choice === random) {
      setResult("무승부");
      return;
    }

    let win = false;
    if (
      (choice === "✌️" && random === "🖐️") ||
      (choice === "✊" && random === "✌️") ||
      (choice === "🖐️" && random === "✊")
    ) {
      win = true;
    }

    if (win) {
      setUserScore(userScore + 1);
      setResult("승리 🎉");
    } else {
      setComputerScore(computerScore + 1);
      setResult("패배 😢");
    }

    setRound(round + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-pink-200 text-center">
      <h1 className="text-4xl font-bold mb-4">가위바위보</h1>

      <ScoreBoard round={round} userScore={userScore} computerScore={computerScore} />

      <div className="flex justify-between w-2/3 mb-6">
        <PlayerDisplay name="나" choice={userChoice} score={userScore} animateLeft />
        <h2 className="text-3xl">VS</h2>
        <PlayerDisplay name="상대방" choice={computerChoice} score={computerScore} />
      </div>

      <div className="flex gap-4">
        {choices.map((c) => (
          <ChoiceButton key={c} choice={c} onClick={play} />
        ))}
      </div>

      <p className="mt-4 text-xl">{result}</p>
    </div>
  );
}
