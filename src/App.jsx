import { useEffect, useState } from "react";

function App() {
  const [stage, setStage] = useState(0);
  const [visible, setVisible] = useState(true);
  const [sunResetting, setSunResetting] = useState(false);

  function advance() {
    setVisible(false);
    if (stage === 6) {
      setSunResetting(true);
      setTimeout(() => {
        setSunResetting(false);
        setStage(0);
        setVisible(true);
      }, 500);
    } else {
      setTimeout(() => {
        setStage((s) => s + 1);
        setVisible(true);
      }, 300);
    }
  }

  function retreat() {
    setVisible(false);
    if (stage === 0) {
      setSunResetting(true);
      setTimeout(() => {
        setSunResetting(false);
        setStage(6);
        setVisible(true);
      }, 500);
    } else {
      setTimeout(() => {
        setStage((s) => s - 1);
        setVisible(true);
      }, 300);
    }
  }
  const backgrounds = [
    "#fdf6e3", // stage 0 — bright warm morning, almost white
    "#e8d5b0", // stage 1 — golden hour fading
    "#c4a882", // stage 2 — afternoon, warmth leaving
    "#7a6a5a", // stage 3 — zawaal, harsh flat grey
    "#3a3545", // stage 4 — dusk, blue creeping in
    "#1a1525", // stage 5 — near night
    "#050508", // stage 6 — full dark, only the screen
  ];

  const textColors = [
    "#1a1208",
    "#2a1f10",
    "#3a2a18",
    "#ffffff",
    "#ffffff",
    "#ffffff",
    "#ffffff",
  ];

  const stages = [
    {
      text: `Ting. Ting.\nThe phone vibrates against the table.\nA message.`,
      voice: "cypher",
    },
    {
      text: `I glance at the screen.\n"Bro I got the job!"\nI stare at the text a few seconds longer than necessary.`,
      voice: "cypher",
    },
    {
      text: `Good for him. Really. I mean that.\nAnother one made it.\nAnd me?\nStill here.`,
      voice: "cypher",
    },
    {
      text: `Unemployed. Uncertain. Stuck in the same room,\nthe same chair, the same thoughts.`,
      voice: "cypher",
    },
    {
      text: `Another day. Another attempt.\nAnother quiet chance to fail again.`,
      voice: "cypher",
    },
    {
      text: `At least I'm still standing.\nStanding proudly on a magnificent pile of my own failures.`,
      voice: "cypher",
    },
    {
      text: `I'm not even sure anymore if it's something to climb out of…\nor something I'm slowly getting buried under.`,
      voice: "cypher",
    },
  ];

  useEffect(() => {
    document.body.style.background = backgrounds[stage];
    document.body.style.color = textColors[stage];
    document.body.style.transition = "background 1.2s ease, color 1.2s ease";
  }, [stage]);

  return (
    <>
      <div className="story">
        <p>Stage: {stage}</p>
      </div>
      <div className="stage-text" style={{ opacity: visible ? 1 : 0 }}>
        {stages[stage].text.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <div
        className={`sun stage-${stage} ${sunResetting ? "resetting" : ""} text-$(textColors) `}
      >
        {" "}
      </div>
      <div className="btn">
        <button className="material-symbols-outlined" onClick={retreat}>
          arrow_back_ios
        </button>
        <button className="material-symbols-outlined" onClick={advance}>
          arrow_forward_ios
        </button>
      </div>
    </>
  );
}

export default App;
