import React from "react";
import { useNavigate } from "react-router-dom";

const Tournament = ({ tournament, deleteTournament }) => {
  const navigate = useNavigate();
  const editTournament = (e, id) => {
    e.preventDefault();
    navigate(`/edit/${id}`);
  };

  return (
    <tr key={tournament.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{tournament.id}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{tournament.name}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{tournament.description}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editTournament(e, tournament.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Edit
        </a>
        <a
          onClick={(e, id) => deleteTournament(e, tournament.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          Delete
        </a>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <a
          onClick={(e, id) => editTournament(e, tournament.id)}
          className="text-indigo-600 hover:text-indigo-800 px-4 hover:cursor-pointer">
          Upvote
        </a>
        <a
          onClick={(e, id) => deleteTournament(e, tournament.id)}
          className="text-indigo-600 hover:text-indigo-800 hover:cursor-pointer">
          Downvote
        </a>
      </td>
    </tr>
  );
};

export default Tournament;
