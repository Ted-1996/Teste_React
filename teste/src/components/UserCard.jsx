import React from 'react';

export default function UserCard({ user, onClick }) {
  return (
    <li
      className="p-4 border rounded cursor-pointer hover:bg-gray-100"
      onClick={() => onClick(user)}
    >
      <p><strong>Nome:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Cidade:</strong> {user.address.city}</p>
    </li>
  );
}