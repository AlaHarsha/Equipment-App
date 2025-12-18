import { useEffect, useState } from "react";
import EquipmentForm from "./components/EquipmentForm";
import EquipmentTable from "./components/EquipmentTable";
import  "./App.css";
import {
  getAllEquipment,
  addEquipment,
  updateEquipment,
  deleteEquipment,
} from "./services/equipmentService";

function App() {
  const [equipment, setEquipment] = useState([]);
  const [editItem, setEditItem] = useState(null);

  const loadEquipment = async () => {
    const res = await getAllEquipment();
    setEquipment(res.data);
  };

  useEffect(() => {
    loadEquipment();
  }, []);

  const handleSave = async (data) => {
    if (editItem) {
      await updateEquipment(editItem.id, data);
      setEditItem(null);
    } else {
      await addEquipment(data);
    }
    loadEquipment();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this equipment?")) {
      await deleteEquipment(id);
      loadEquipment();
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 className="main-tittle">Equipment Management</h1>
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
