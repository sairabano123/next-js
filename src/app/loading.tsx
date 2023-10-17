import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUtensils } from '@fortawesome/free-solid-svg-icons';

export default function Loading() {
  return (
    <div className="flex justify-center mt-60">
      <div className="text-center">
      <FontAwesomeIcon icon={faUtensils} bounce style={{color: "#e6cb1e",}} className="text-5xl"  />
        <p className="text-gray-600 mt-4">Loading...</p>
      </div>
    </div>
  );
}
