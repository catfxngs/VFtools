const levels = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10];
const clears = [
  { rate: 1.1, name: "PUC" },
  { rate: 1.05, name: "UC" },
  { rate: 1.02, name: "HARD" },
  { rate: 1.0, name: "NORMAL" },
];

const getGradeCoeff = (score: number): number => {
  if (score >= 990) {
    return 1.05;
  } else if (score >= 980) {
    return 1.02;
  } else if (score >= 970) {
    return 1.0;
  } else if (score >= 950) {
    return 0.97;
  } else if (score >= 930) {
    return 0.94;
  }

  return 0.91;
};

export const getRequirements = (input: number) => {
  const reqs = levels.map(() => [0, 0, 0, 0]);
  const min = input / 50;

  levels.forEach((level, levelIdx) => {
    clears.forEach((clear, clearIdx) => {
      let score = clear.name === "PUC" ? 1000 : 900;

      while (score < 1001) {
        const gradeCoeff = getGradeCoeff(score);
        const vf = level * (score / 10000) * gradeCoeff * clear.rate * 2 * 0.1;

        if (vf >= min) {
          reqs[levelIdx][clearIdx] = score;

          break;
        }

        score++;
      }
    });
  });

  return reqs;
};
