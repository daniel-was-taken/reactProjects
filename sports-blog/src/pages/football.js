import React from 'react';
import Authentication from '../Authentication.css';
import image from "../images/bgwhite.jpg";


const Football = () => {
  return (
    <div style={{backgroundImage: `url(${image})`}}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
          backgroundImage: `url('https://images.ctfassets.net/p0ykbbcw3bn6/1QjUiW1vWsZo2pZO80L7SM/0e0c8c2a1219272995b86baf926d8225/AP_19132619960752.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

        }}
      > <h1 style={{
        color: 'white',
        fontSize: '250px',
      }}>
          Football</h1>
      </div>
      <div style={{
        backgroundImage: `url('https://wallpapercave.com/wp/wp7054738.jpg')`,
        backgroundBlendMode: 'luminosity',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
        textAlign: 'center',
        marginLeft: '300px',
        marginRight: '300px',
        marginTop: '50px',
        borderStyle: 'solid',
        borderRadius: '20px', 
        borderWidth: '1px',
        padding: '20px',
      }}>
        <h2 className='sports'>Manchester City have been crowned 2020-21 Premier League champions, our third title success in the last four years.
        It is Guardiola’s 10th major honour since taking charge at City in 2016, and it comes a week after we booked our place in the UEFA Champions League 
        final at the end of the month with a 4-1 aggregate victory over Paris Saint-Germain. In a season like no other, one which has been significantly affected by the
        Coronavirus pandemic, City have shown remarkable consistency in turbulent times, overcoming a gruelling fixture schedule by heavily rotating the squad to ensure every 
        player has played a part in this success. The resilience and togetherness of the players, as well as the ingenuity shown by Pep Guardiola and his backroom team, 
        have seen us overcome every challenge we have faced and emerge as clear title winners. And this success have been delivered without having our beloved supporters with 
        us in the stadium. Our commitment and desire to deliver success for our fans watching at home will make the reunion at the Etihad Stadium a special occasion for 
        everyone when it finally happens. Since defeat to Tottenham at the end of November, we have won 22 and drawn two of our 27 league matches, a run of form that lifted 
        us from 11th in the table to champions of England with three matches remaining. Our win at Palace last weekend was our 11th straight away win in the Premier League, 
        equalling the record set by Chelsea in 2008 and City in 2017. With our Carabao Cup success already assured, City have now won 10 of the last 15 available English trophies.
        It’s been a remarkable effort to secure our seventh league title – but there could yet be another thrilling chapter to write this season, with our place in this 
        season’s Champions League final assured.
        </h2>
      </div>
    </div>
  );
};

export default Football;