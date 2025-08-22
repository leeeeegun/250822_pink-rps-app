import { motion } from "framer-motion";
import { Choice } from "../types/game";

type Props = {
    name: string;
    choice: Choice | null;
    score: number;
    animateLeft?: boolean; // 나인지 컴퓨터인지에 따라 애니메이션 방향 다르게 설정
};

export default function PlayerDisplay({ name, choice, score, animateLeft }: Props) {
  return (
    <div className="flex flex-col items-center">
      <p className="text-xl">{name}</p>
      <motion.div
        animate={{ rotate: animateLeft ? [0, -20, 20, 0] : [0, 20, -20, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="text-6xl"
      >
        {choice ?? "❔"}
      </motion.div>
      <p className="mt-2">점수: {score}</p>
    </div>
  );
}