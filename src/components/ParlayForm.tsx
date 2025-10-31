import { useEffect, useState } from "react";
import type { Leg } from "../types/parlays";
import { v4 as uuidv4 } from "uuid";
import { saveLegs, loadLegs } from "../lib/storage";

export default function ParlayForm() {
  const [legs, setLegs] = useState<Leg[]>([]);
  const [formData, setFormData] = useState({
    playerName: "",
    statType: "Passing Yards",
    line: "",
    comparator: "over",
  });
  const [message, setMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addLeg = () => {
    if (!formData.playerName || !formData.line) return;

    const newLeg: Leg = {
      id: uuidv4(),
      playerName: formData.playerName,
      team: "N/A",
      statType: formData.statType as Leg["statType"],
      line: parseFloat(formData.line),
      comparator: formData.comparator as Leg["comparator"],
    };

    setLegs([...legs, newLeg]);
    setFormData({
      playerName: "",
      statType: "Passing Yards",
      line: "",
      comparator: "over",
    });
    saveLegs;
    // setMessage("Leg Added");
    // setTimeout(() => setMessage(null), 2000);
  };

  useEffect(() => {
    const saved = loadLegs();
    if (saved.length > 0) setLegs(saved);
  }, []);

  useEffect(() => {
    saveLegs(legs);
  }, [legs]);

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2>Add Parlay Leg</h2>

      <input
        name="playerName"
        placeholder="Player Name"
        value={formData.playerName}
        onChange={handleChange}
      />

      <select name="statType" value={formData.statType} onChange={handleChange}>
        <option value="Passing Yards">Passing Yards</option>
        <option value="Passing Touchdowns">Passing TDs</option>
        <option value="Rushing Yards">Rushing Yards</option>
        <option value="Receiving Yards">Receiving Yards</option>
      </select>

      <input
        name="line"
        placeholder="Line (e.g. 250.5)"
        value={formData.line}
        onChange={handleChange}
      />

      <select
        name="comparator"
        value={formData.comparator}
        onChange={handleChange}
      >
        <option value="over">Over</option>
        <option value="under">Under</option>
      </select>

      <button onClick={addLeg} style={{ marginLeft: "10px" }}>
        Add Leg
      </button>
      {message && <p style={{ color: "green" }}>{message}</p>}

      <hr />

      <h3>Current Legs</h3>
      <ul>
        {legs.map((leg) => (
          <li key={leg.id}>
            {leg.playerName} — {leg.statType} {leg.comparator} {leg.line}
          </li>
        ))}
      </ul>
    </div>
  );
}
