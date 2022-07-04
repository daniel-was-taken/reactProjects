import React from 'react';
import Authentication from '../Authentication.css';

const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh',
        backgroundImage: `url('https://th.bing.com/th/id/R.79b77d6dada84023eed6b6b3cc083512?rik=S0Xwun%2bzt%2bJh%2bw&riu=http%3a%2f%2fwww.medicinehatcubs.com%2fwp-content%2fuploads%2f2020%2f06%2fTop-Sports-in-the-World.jpg&ehk=sNt%2bdxShVQlZG7n44j0ORMFq2f6G6Sn3LLFfUfBkD7I%3d&risl=&pid=ImgRaw&r=0')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className='indexTitle'
        style={{
          fontSize: '85px',
          fontStyle: 'italic',
        }}>
        The best Sports blog in the world.</h1>


    </div>
  );
};

export default Home;
