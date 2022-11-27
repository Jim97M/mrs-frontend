import React from "react";
import { useNavigate } from "react-router-dom";

const Club = ({ club, deleteClub }) => {
  const navigate = useNavigate();
  const editClub = (e, id) => {
    e.preventDefault();
    navigate(`/edit/${id}`);
  };

  return (
    <tr key={club.id}>
       <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{club.id}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{club.name}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{club.category}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{club.type}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editClub(e, club.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Edit
        </a>
        <a
          onClick={(e, id) => deleteClub(e, club.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Club;
