import React from 'react';
import Authentication from '../Authentication.css';
import image from "../images/bgwhite.jpg";


const Basketball = () => {
  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
          backgroundImage: `url('https://edited.com/wp-content/uploads/2019/10/NBA-HEADER.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

        }}
      > <h1 style={{
        color: 'white',
        fontSize: '250px',
      }}>
          Basketball</h1>
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
        <h2 className='sports'>The Golden State Warriors have featured heavily in NBA rumors over the last 24 hours.

          They parted with several key bench players in free agency, but added some new intriguing prospects to compensate.
          Meanwhile, rumors surrounding Zach LaVine's potential departure from the Chicago Bulls could be put to bed soon. Recent reports have suggested he has re-signed with the franchise on a max contract.

          Several teams are willing to add Kevin Durant to their ranks, and the Memphis Grizzlies have emerged as potential suitors.

          Here are some of the latest NBA rumors as of July 2, 2022.
          Defending champions Golden State Warriors have parted with several free agents over the past few days.

          Gary Payton II, Otto Porter Jr., Juan Toscano-Anderson and Damion Lee have all joined new teams. The Warriors' squad depth has consequently taken a hit and they are now in the market for impact players.

          As per The Athletic's Shams Charania, the Warriors have acquired former Bucks guard Donte DiVincenzo to compensate for their loss in depth. The Dubs have tied him down to a two-year, $9.3 million contract, with a player option in the final year.
          DiVincenzo will be a solid backup player to Steph Curry, Klay Thompson and Jordan Poole. His ability on defense will come in handy for the Warriors, especially after Payton's departure.
          Kevin Durant is arguably the biggest superstar to hit the trade market in recent times.

          The former MVP has demanded a trade this offseason and several teams are willing to unload assets to land him. Durant, 34, is still playing at a high level and will make the team he joins instant contenders.
        </h2>
      </div>
    </div>
  );
};

export default Basketball;