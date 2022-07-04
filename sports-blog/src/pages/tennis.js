import React from 'react';
import Authentication from '../Authentication.css';
import image from "../images/bgwhite.jpg";


const Tennis = () => {
  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
          backgroundImage: `url('https://library.sportingnews.com/styles/facebook_1200x630/s3/2021-08/tennis-racket-ball-getty-ftr-083020_1v4c9vmdpu88e1he0jsled3q49.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

        }}
      > <h1 style={{
        color: 'white',
        fontSize: '250px',
      }}>
          Tennis</h1>
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
        <h2 className='sports'>Tennis legend Roger Federer was spotted at Wimbledon on Sunday and is expected to make an appearance at Centre Court.
          Roger Federer made his return to Wimbledon as he was spotted around the All England Lawn Tennis and Croquet Club on Sunday. The tennis great's last competitive match was at the Wimbledon last year, when he lost in straight sets to Hubert Hurkacz in the quarterfinals. It was also the first time in 19 years at Wimbledon, he lost in straight sets and also the second time he lost a set 6-0 in the 21st century. The organisers have already confirmed that celebrations would take place ahead of play on the main court on Sunday as it is the Centre Court's 100-year anniversary and also the first-ever Middle Sunday with play as part of the new tournament schedule. It is also being reported that the Swiss player could also be involved in the celebrations. The tournament's official Twitter handle shared some photos of Federer, who was clad in a black suit.
          Federer is expected to make his competitive return in London this year with the Laver Cup taking place from September 23 to 25. He is also expected to participate at his home tournament, the Swiss Indoors Basel.
          Meanwhile, Federer's longtime rival Rafael Nadal has been in dominating form in the tournament. The Spaniard swept aside Lorenzo Songo in his third round fixture, winning 6-1 6-2 6-4 on Saturday.

          After the win, Nadal said, "My best match here without a doubt during these championships, I was able to raise my level, super happy for that".

          "I went through some tough injuries in my career but in some way I feel very lucky that I am still able to play at my age. I never thought that would happen 10 years ago so I feel lucky,” he further added. Nadal will face Botic van de Zandschulp in his upcoming Round of 16 match on Monday.
        </h2>
      </div>
    </div>
  );
};

export default Tennis;