export default function EquipmentTable({ equipment, onEdit, onDelete }) {
  return (
  <div>
    <h1 style={{ color: "green", textAlign: "center" }}>
     Equipment_Table
    </h1>
    <table cellPadding="10">
      <thead className="table-head">
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Last Cleaned</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {equipment.length === 0 ? (
          <tr>
            <td colSpan="5" align="center">No Data</td>
          </tr>
        ) : (
          equipment.map((e) => (
            <tr key={e.id}>
              <td>{e.name}</td>
              <td>{e.type}</td>
              <td>{e.status}</td>
              <td>{e.lastCleaned}</td>
              <td className="buttons">
                <button className="edit-btn" onClick={() => onEdit(e)}>Edit</button>
                <button className="delete-btn" onClick={() => onDelete(e.id)}>Delete</button>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
    </div>
  );
}
