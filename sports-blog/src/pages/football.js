import React from 'react';
import Authentication from '../Authentication.css';

const Football = () => {
  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '80vh',
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
        textAlign: 'center',
        marginLeft: '300px',
        marginRight: '300px',
        marginTop: '50px',
      }}>
        <h2 className='sports'>If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough, the next logical step is
          to find a random paragraph. We created the Random Paragraph Generator with you in mind. The process is quite simple. Choose the number of random paragraphs you'd like to see and
          click the button. Your chosen number of paragraphs will instantly appear.While it may not be obvious to everyone, there are a number of reasons creating random paragraphs can be
          useful. A few examples of how some people use this generator are listed in the following paragraphs. Creative Writing Generating random paragraphs can be an excellent way for
          writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the
          writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second
          option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No
          matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing. Tackle Writers' Block A random paragraph
          can also be an excellent way for a writer to tackle writers' block. Writing block can often happen due to being stuck with a current project that the writer is trying to complete.
          By inserting a completely random paragraph from which to begin, it can take down some of the issues that may have been causing the writers' block in the first place. Beginning
          Writing Routine Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite
          it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are a
          lready flowing from their fingers. Writing Challenge Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence
          from that into a new paragraph to create a short story. Unlike the random sentence generator, the sentences from the random paragraph will have some connection to one another
          so it will be a bit different. You also won't know exactly how many sentences will appear in the random paragraph. Programmers It's not only writers who can benefit from this
          free online tool. If you're a programmer who's working on a project where blocks of text are needed, this tool can be a great way to get that. It's a good way to test your
          programming and that the tool being created is working well. Above are a few examples of how the random paragraph generator can be beneficial. The best way to see if this
          random paragraph picker will be useful for your intended purposes is to give it a try. Generate a number of paragraphs to see if they are beneficial to your current project.If you
          do find this paragraph tool useful, please do us a favor and let us know how you're using it. It's greatly beneficial for us to know the different ways this tool is being used
          so we can improve it with updates. This is especially true since there are times when the generators we create get used in completely unanticipated ways from when we initially
          created them. If you have the time, please send us a quick note on what you'd like to see changed or added to make it better in the future.
        </h2>
      </div>
    </div>
  );
};

export default Football;