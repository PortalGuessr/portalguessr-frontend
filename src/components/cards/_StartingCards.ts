import easyCap from "../../assets/easy-image-cap.webp";
import mediumCap from "../../assets/medium-image-cap.webp";
import hardCap from "../../assets/hard-image-cap.webp";
import veryHardCap from "../../assets/very+hard-image-cap.webp";
import randomCap from "../../assets/random-image-cap.webp";

export const DIFFICULTY_CARDS = [
  {
    handleGameStartParams: ["Easy", 120, 10],
    imgSrc: easyCap,
    imgHash: "LDCP-K-;00x]4TDOsmxu0}.8~CDi",
    bgColor: "success",
    titleEmoji: "🔰",
    textColor: "light",
    difficultyDisplay: "Easy",
  },
  {
    handleGameStartParams: ["Medium", 240, 10],
    imgSrc: mediumCap,
    imgHash: "LPE+oz71|^E}NaaejZo0NGR*SgSg",
    bgColor: "warning",
    titleEmoji: "⌛",
    textColor: "dark",
    difficultyDisplay: "Medium",
  },
  {
    handleGameStartParams: ["Hard", 360, 10],
    imgSrc: hardCap,
    imgHash: "L07224tR~qx^MdofbxRP01-;~qx]",
    bgColor: "danger",
    titleEmoji: "💪",
    textColor: "light",
    difficultyDisplay: "Hard",
  },
  {
    handleGameStartParams: ["Very Hard", 480, 10],
    imgSrc: veryHardCap,
    imgHash: "LGHMlt4T?^8^%gxuDitR4T%hayoz",
    bgColor: "secondary",
    titleEmoji: "🔥",
    textColor: "dark",
    difficultyDisplay: "Very Hard",
  },
  {
    handleGameStartParams: [null, 300, 10],
    imgSrc: randomCap,
    imgHash: "LB9RCBR5LgoyHXtlDOWBEfV@^kWB",
    bgColor: "primary",
    titleEmoji: "🤔",
    textColor: "light",
    difficultyDisplay: "Random",
  },
];
