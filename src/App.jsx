import { useEffect, useState } from "react";

function App() {
  const [stage, setStage] = useState(0);
  const [visible, setVisible] = useState(true);

  function advance() {
    setVisible(false);
    setTimeout(() => {
      setStage((s) => Math.min(6, s + 1));
      setVisible(true);
    }, 300);
  }

  function retreat() {
    setVisible(false);
    setTimeout(() => {
      setStage((s) => Math.max(0, s - 1));
      setVisible(true);
    }, 300);
  }

  const backgrounds = [
    "#0d0a06", // dawn - warm dark
    "#0d0b07",
    "#0c0c0a",
    "#0a0a0d", // zawaal - cool dark
    "#09090e",
    "#08080f",
    "#070710", // dusk - cold dark
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
      <div className={`sun stage-${stage}`}> </div>
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
