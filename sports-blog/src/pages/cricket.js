import React from 'react';
import Authentication from '../Authentication.css';
import image from "../images/bgwhite.jpg";


const Cricket = () => {
  return (
    <div style={{backgroundImage: `url(${image})`}}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
          backgroundImage: `url('https://images.daznservices.com/di/library/sportal_com_au/54/50/cricket-australia_1glrml2jiglxrzg6tgl4iz94q.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

        }}
      > <h1 style={{
        color: 'white',
        fontSize: '250px',
      }}>
          Cricket</h1>
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

      }}><h2 className='sports'>Australia completed their come-from-behind takeover of the T20 World Cup by beating New Zealand to yet another title, thanks to Mitchell Marsh and David Warner's batting heroics. But even before the celebrations had died down, news broke that Test captain Tim Paine was stepping down from captaincy after a 2018 investigation came to light. In the UK, Azeem Rafiq's harrowing testimony on the racism he faced shook up cricket, and the fallout continues. AB de Villiers picked the same week to announce his retirement from all forms of cricket, breaking several RCB hearts in the process. In a week where everything that could happen happened, here's your catch-up of all the action.
      Navigation ToggleESPNcricinfo
      FEATURE
      In Case You Missed it: Australia win the T20 World Cup, Paine steps down, de Villiers steps away
      The best content from the week gone by
      
      ESPNCRICINFO STAFF
      20-Nov-2021
      
      Marsh attacks: Mitchell Marsh's 77 from 50 balls sealed Australia's first T20 World Cup win  Getty Images
      Australia completed their come-from-behind takeover of the T20 World Cup by beating New Zealand to yet another title, thanks to Mitchell Marsh and David Warner's batting heroics. But even before the celebrations had died down, news broke that Test captain Tim Paine was stepping down from captaincy after a 2018 investigation came to light. In the UK, Azeem Rafiq's harrowing testimony on the racism he faced shook up cricket, and the fallout continues. AB de Villiers picked the same week to announce his retirement from all forms of cricket, breaking several RCB hearts in the process. In a week where everything that could happen happened, here's your catch-up of all the action.
      
      
      Marsh, Warner muscle Australia to T20 World Cup glory
      Australia won their first ever T20 World Cup trophy, despite Kane Williamson's valiant 85 for New Zealand. The game belonged to Mitch Marsh, who, Matt Roller says, has finally proven his doubters wrong, and David Warner, in whom Osman Samiuddin sees echoes of the bullish Australia of old. Josh Hazlewood was Australia's key bowler, and Jarrod Kimber explores how the fast bowler's talent, more than planning, made him a T20 superstar.
      
      'That flame no longer burns so brightly' - AB de Villiers retires from all cricket
      In a surprise announcement, the former South Africa and RCB batter said he's decided after a lot of contemplation to "hang up my boots and spend quality time with my family".
      
      Tim Paine quits as Australia captain after sending explicit messages to female co-worker
      Just weeks before the Ashes are set to begin, the Australia captain stepped down after news emerged that he was investigated in 2018 for explicit texts sent to a coworker, which have now gone public. The board accepted Paine's resignation and said that the process of identifying and appointing a new Test captain will be accelerated.
        </h2>
      </div>
    </div>
  );
};

export default Cricket;