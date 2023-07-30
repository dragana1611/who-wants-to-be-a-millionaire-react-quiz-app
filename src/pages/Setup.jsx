import React, { useState } from "react";
import ExitButton from "../components/buttons/ExitButton";
// import SoundComponent from "../components/SoundComponent";

const Setup = () => {
  const [themeVol, setThemeVol] = useState(1);
  const [gameVol, setGameVol] = useState(1);

  // const onChangeThemeVol = (event) => {
  //   setThemeVol(event.target.value);

  //   document.querySelector("#mainTheme").volume = themeVol;
  // };

  // const onChangeGameSoundsVol = (event) => {
  //   setGameVol(event.target.value);
  //   document.querySelector("#gameSounds").volume = gameVol;
  //   document.querySelector("#gameSounds").play();
  // };

  return (
    <section>
      <div className="optionsContainer">
        <h1 className="optionsHeading">Options</h1>
        <p className="soundHeading">Music</p>
        <input
          type="range"
          // value={themeVol}
          max="0.4"
          min="0"
          step="any"
          // onChange={onChangeThemeVol}
        />
        <p className="">Game sounds</p>
        <input
          type="range"
          // value={gameVol.gameSoundsVol}
          max="0.4"
          min="0"
          step="any"
          // onChange={onChangeGameSoundsVol}
        />
        {/* <SoundComponent sound={'level-1'}/> */}
      </div>

      <ExitButton />
    </section>
  );
};

export default Setup;
/**
 * return <div className = 'optionsContainer'>
        <h1 className='optionsHeading'>Options</h1>
          <p className='soundHeading'>Music</p>
          <input type="range" value={state.mainThemeVol} max="0.4" min="0" step="any" onChange={this.onChangeThemeVol}/>
          <p className='soundHeading'>Game sounds</p>
          <input type="range" value={this.state.gameSoundsVol} max="0.4" min="0" step="any" onChange={this.onChangeGameSoundsVol}/>
      </div> 
      
      import React from 'react';
import Audio from './Audio';

const App = () => {
  return (
    <div>
      <h1>Audio Control</h1>
      <Audio src="path/to/audio.mp3" />
    </div>
  );
};

export default App;

      
      */
