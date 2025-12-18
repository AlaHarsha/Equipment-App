import { useEffect, useState } from "react";

const emptyForm = {
  name: "",
  type: "",
  status: "",
  lastCleaned: "",
};

export default function EquipmentForm({ onSave, editItem }) {
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  useEffect(() => {
    if (editItem) setForm(editItem);
  }, [editItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.type || !form.status || !form.lastCleaned) {
      setError("All fields are required");
      return;
    }
    onSave(form);
    setForm(emptyForm);
    setError("");
  };

  return (
    <div className="inserting">
    <form onSubmit={handleSubmit} className="form-vertical">
      <h3>{editItem ? "Edit Equipment" : "Add Equipment"}</h3>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        placeholder="Equipment Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <select
        value={form.type}
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="">Select Type</option>
        <option>Machine</option>
        <option>Vessel</option>
        <option>Tank</option>
        <option>Mixer</option>
      </select>

      <select
        value={form.status}
        onChange={(e) => setForm({ ...form, status: e.target.value })}
      >
        <option value="">Select Status</option>
        <option>Active</option>
        <option>Inactive</option>
        <option>Under Maintenance</option>
      </select>

      <input
        type="date"
        value={form.lastCleaned}
        onChange={(e) =>
          setForm({ ...form, lastCleaned: e.target.value })
        }
      />

      <button className="sub-btn" type="submit">Save</button>
    </form>
    <hr></hr>
    </div>
  );
}
