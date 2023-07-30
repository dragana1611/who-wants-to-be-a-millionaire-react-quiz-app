// import React, { useState } from "react";
// import Sound from "react-sound";

// const SoundComponent = ({sound}) => {
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handlePlay = () => {
//     setIsPlaying(true);
//   };

//   const handlePause = () => {
//     setIsPlaying(false);
//   };

//   return (
//     <div>
//       <button onClick={handlePlay}>Play</button>
//       <button onClick={handlePause}>Pause</button>

//       <Sound
//         url={"../assets/audio/" + {sound} + ".mp3"}
//         playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.PAUSED}
//       />
//     </div>
//   );
// };

// export default SoundComponent;
