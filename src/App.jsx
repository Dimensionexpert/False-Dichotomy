import { useEffect, useState } from "react";
import { stages } from "./stages";

function App() {
  const [stage, setStage] = useState(0);
  const [line, setLine] = useState(0);
  const [visible, setVisible] = useState(true);
  const [sunResetting, setSunResetting] = useState(false);

  function advance() {
    setVisible(false);
    setTimeout(() => {
      const currentStage = stages[stage];
      if (stage >= stages.length - 1) {
        setSunResetting(true);
        setTimeout(() => {
          setSunResetting(false);
          setStage(0);
          setLine(0);
          setVisible(true);
        }, 500);
      } else {
        setStage((s) => s + 1);
        setLine(0);
        setVisible(true);
      }
      setVisible(true);
    }, 300);
  }

  function retreat() {
    setVisible(false);
    setTimeout(() => {
      if (line > 0) {
        setLine((l) => l - 1);
      } else {
        if (stage === 0) {
          setSunResetting(true);
          setTimeout(() => {
            setSunResetting(false);
            setStage(6);
            setLine(stages[6].lines.length - 1);
          }, 500);
        } else {
          setStage((s) => s - 1);
          setLine(stages[stage - 1].lines.length - 1);
        }
      }
      setVisible(true);
    }, 300);
  }

  useEffect(() => {
    if (!stages[stage]) return;
    document.body.style.background = stages[stage].background;
    document.body.style.color = stages[stage].textColor;
    document.body.style.transition = "background 1.2s ease, color 1.2s ease";
  }, [stage]);

  const currentLine = stages[stage]?.lines[line] ?? {
    text: "",
    voice: "direction",
  };

  return (
    <>
      <div
        className={`stage-text voice-${currentLine.voice}`}
        style={{ opacity: visible ? 1 : 0 }}
      >
        <p>{currentLine.text}</p>
      </div>
      <div
        className={`sun stage-${stage} ${sunResetting ? "resetting" : ""}`}
      />
      <div className="btn">
        <button onClick={retreat}>←</button>
        <button onClick={advance}>→</button>
      </div>
    </>
  );
}

export default App;
