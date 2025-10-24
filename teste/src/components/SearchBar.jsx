import React from 'react';

export default function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Buscar por nome..."
      className="w-full p-2 border rounded mb-4"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}