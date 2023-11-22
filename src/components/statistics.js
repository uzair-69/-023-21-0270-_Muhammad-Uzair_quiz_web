import React from 'react';
import { Button } from 'react-bootstrap';

const Statistics = () => {
  return (
    <div className="pt-5 container d-flex justify-content-between align-items-between">
      <Button style={{ backgroundColor: '#d3d3d3', color: 'black'  }}>5000 users</Button>
      <Button style={{ backgroundColor: '#d3d3d3', color: 'black' }}>10 Trsuted Clients</Button>
      <Button style={{ backgroundColor: '#d3d3d3', color: 'black' }}>10k+ Downloads</Button>
    </div>
  );
};

export default Statistics;