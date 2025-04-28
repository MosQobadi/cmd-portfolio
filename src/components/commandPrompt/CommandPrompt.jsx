import React, { useState, useEffect, useRef } from "react";
import styles from "./CommandPrompt.module.css";

const commandsList = {
  help: [
    "- about: Show detailed profile",
    "- skills: List technical skills",
    "- contact: Show contact information",
    "- whoami: Shows me :)",
    "- clear: Clear the terminal",
    "- exit: Close terminal (just kidding)",
  ],
  about:
    "I'm a passionate Frontend Developer with focus on React and modern web technologies.",
  skills:
    "React, JavaScript, TypeScript, MUI, Redux, CSS, HTML, Node.js, MongoDB",
  contact: "Email: youremail@example.com | LinkedIn: yourlinkedin",
  whoami: "Just a friendly coding enthusiast. :)",
  exit: "Haha, nice try! There's no escape 🚀.",
};
const CommandPrompt = () => {
  const [cmd, setCmd] = useState("");
  const [history, setHistory] = useState([]);
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      processCommand(cmd.trim().toLowerCase());
      setCmd("");
    }
  };

  const processCommand = (command) => {
    if (command === "clear") {
      setHistory([]);
      return;
    }

    const output = commandsList[command]
      ? commandsList[command]
      : `Error: '${command}' is not a recognized command.`;

    setHistory((prev) => [...prev, { command, output }]);
  };

  return (
    <div className={styles.cmd}>
      <div className={styles.output} ref={outputRef}>
        {history.map((item, index) => (
          <div key={index}>
            <div className={styles.commandLine}>$ {item.command}</div>
            <div className={styles.commandOutput}>
              {Array.isArray(item.output)
                ? item.output.map((line, idx) => <div key={idx}>{line}</div>)
                : item.output}
            </div>
          </div>
        ))}
      </div>

      <label htmlFor="command">Type 'help' for available commands</label>
      <input
        id="command"
        ref={inputRef}
        className={styles.cmdInput}
        type="text"
        value={cmd}
        onChange={(e) => setCmd(e.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
    </div>
  );
};

export default CommandPrompt;
