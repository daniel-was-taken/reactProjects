import React from 'react';
import Authentication from '../Authentication.css';
import image from "../images/bgwhite.jpg";


const F1 = () => {
  return (
    <div style={{ backgroundImage: `url(${image})` }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '70vh',
          backgroundImage: `url('https://phantom-marca.unidadeditorial.es/bb8aaf5db1f9a10e92599835c110ceb2/crop/0x0/2046x1151/resize/1320/f/jpg/assets/multimedia/imagenes/2022/05/08/16520453470261.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",

        }}
      > <h1 style={{
        color: 'white',
        fontSize: '250px',
      }}>
          F1</h1>
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

      }}><h2 className='sports'>Formula One championship leader Max Verstappen has unfinished business to take care of at this weekend's Azerbaijan Grand Prix while also looking to reassert himself as Red Bull's lead driver.
        The Dutchman was heading for victory at the Baku street track last year when a tyre exploded and pitched him into the barrier on the high speed run along the city's Caspian Sea waterfront.

        Mexican team mate Sergio Perez took the win instead and returns triumphant and as a potential title contender after his victory two weeks ago in Monaco.

        Verstappen will be determined to stop him becoming the first driver to win twice in Baku.

        "I'm looking forward to returning to Baku, we have some unfinished business there after last year," said the 24-year-old who has a nine point lead over Ferrari rival Charles Leclerc with Perez a further six behind.

        "Last year was unlucky, simple as that," he said.

        "It was a very painful one, but that happens. That's racing... it's different cars, different tyres (this time) and we go again."
        Perez, who was also on the podium in Baku twice while racing for Force India, is in the form of his life and with a new two-year contract with Red Bull freshly signed.

        The 6km long Baku street track, a mix of flat-out blasts and tight corners lined by unforgiving barriers, is famed for unpredictable races and has produced five different winners in five years on the calendar.

        Leclerc is familiar with the track's pitfalls, having crashed while on course for pole position in 2019.

        The Monegasque and Ferrari, chasing a first title since 2008, will want the weekend to go perfectly after potential wins slipped through their fingers in Monaco and Spain.

        Seven times world champion Lewis Hamilton will also be keen to make amends after failing to capitalise on Verstappen's retirement last year when he went from second to 15th in Baku, having accidentally triggered a 'brake magic' function on his steering wheel.

        His Mercedes team are the most successful in Baku, with three wins. A fourth looks a distant prospect unless the track throws up another surprise.

        "Baku often produces some fun and crazy track action, and the layout generates good racing opportunities," said Mercedes team boss Toto Wolff.

        "So, let's see if it lives up to its reputation this weekend."

        The possibility of podium appearance by a midfield team is always there. Apart from Perez's Force India exploits, Sebastian Vettel was second last year for Aston Martin with Pierre Gasly third for AlphaTauri.

        Lance Stroll's first top-three result came in Baku with Williams in 2017
        </h2>
      </div>
    </div>
  );
};

export default F1;