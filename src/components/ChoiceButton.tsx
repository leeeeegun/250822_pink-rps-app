import { Choice } from "../types/game";

type Props = {
  choice: Choice;
  onClick: (choice: Choice) => void;
};

export default function ChoiceButton({ choice, onClick }: Props) {
  return (
    <button
      onClick={() => onClick(choice)}
      className="px-4 py-2 bg-white rounded-xl shadow hover:bg-pink-100 transition"
    >
      {choice}
    </button>
  );
}