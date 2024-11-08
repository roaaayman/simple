// AddGroup.js
import React, { useState } from 'react';
import { db, ref, push } from './firebaseConfig'; // Import Firebase functions
import { Link } from 'react-router-dom'; // Import Link for routing
import './AddGroup.css'; 
const AddGroup = () => {
  const [groupName, setGroupName] = useState('');
  const [groupType, setGroupType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (groupName && groupType) {
      const groupRef = ref(db, 'groups');

      //to add a new group to the database
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
    <body>
    <center>
    <div>
      <h2>Add a Social Media Group</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
        <br/>
        <input
          type="text"
          placeholder="Group Type"
          value={groupType}
          onChange={(e) => setGroupType(e.target.value)}
        />
        <br/>
        <button type="submit">Submit</button>
      </form>

      {/* Link to navigate to the page that displays all groups */}
      <Link to="/display-groups">
        <button>Show All Groups</button>
      </Link>
    </div>
    </center>
    </body>
  );
};

export default AddGroup;
