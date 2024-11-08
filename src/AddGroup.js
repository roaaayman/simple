// AddGroup.js
import React, { useState } from 'react';
import { db, ref, push } from './firebaseConfig'; // Import Firebase functions
import { Link } from 'react-router-dom'; // Import Link for routing

const AddGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [groupType, setGroupType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (groupName && groupType) {
      // Get reference to 'groups' node in Firebase Realtime Database
      const groupRef = ref(db, 'groups');

      // Use push() to add a new group to the database
      push(groupRef, {
        name: groupName,
        type: groupType
      })
        .then(() => {
          console.log("Group data saved successfully!");
          setGroupName('');
          setGroupType('');
        })
        .catch((error) => {
          console.error("Error saving group data: ", error);
        });
    } else {
      alert("Please fill in both fields!");
    }
  };

  return (
    <div>
      <h2>Add a Social Media Group</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Group Type"
          value={groupType}
          onChange={(e) => setGroupType(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      {/* Link to navigate to the page that displays all groups */}
      <Link to="/display-groups">
        <button>Show All Groups</button>
      </Link>
    </div>
  );
};

export default AddGroup;
