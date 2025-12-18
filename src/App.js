import { useEffect, useState } from "react";
import EquipmentForm from "./components/EquipmentForm";
import EquipmentTable from "./components/EquipmentTable";
import "./App.css";
import {
  getAllEquipment,
  addEquipment,
  updateEquipment,
  deleteEquipment,
} from "./services/equipmentService";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [editItem, setEditItem] = useState(null);

  // ✅ FIX ADDED HERE
  const loadEquipment = async () => {
    try {
      const res = await getAllEquipment();
      setEquipment(res.data);
    } catch (error) {
      console.error("Backend not available");
      setEquipment([]); // prevents blank screen on GitHub Pages
    }
  };

  useEffect(() => {
    loadEquipment();
  }, []);

  const handleSave = async (data) => {
    try {
      if (editItem) {
        await updateEquipment(editItem.id, data);
        setEditItem(null);
      } else {
        await addEquipment(data);
      }
      loadEquipment();
    } catch (error) {
      alert("Backend not available");
    }
  };

  const handleDelete = async (id) => {
    try {
      if (window.confirm("Delete this equipment?")) {
        await deleteEquipment(id);
        loadEquipment();
      }
    } catch (error) {
      alert("Backend not available");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      {/* small typo fix */}
      <h1 className="main-title">Equipment Management</h1>

      <EquipmentForm onSave={handleSave} editItem={editItem} />
      <EquipmentTable
        equipment={equipment}
        onEdit={setEditItem}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
