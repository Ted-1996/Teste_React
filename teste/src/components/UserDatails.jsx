import React from 'react';

export default function UserDetails({ user }) {
  if (!user) return null;

  return (
    <div className="mt-6 p-4 border rounded bg-gray-50">
      <h2 className="text-xl font-semibold mb-2">Detalhes de {user.name}</h2>
      <p><strong>Telefone:</strong> {user.phone}</p>
      <p><strong>Site:</strong> {user.website}</p>
      <p><strong>Empresa:</strong> {user.company.name}</p>
      <p>
        <strong>Endereço:</strong>{' '}
        {`${user.address.street}, ${user.address.suite}, ${user.address.city}`}
      </p>
    </div>
  );
}