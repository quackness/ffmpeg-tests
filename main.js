const ffmpeg = require('fluent-ffmpeg');//functions to perform conversions
const ffmpeg_static = require('ffmpeg-static');//static install of ffmpeg
const ffprobe_static = require('ffprobe-static');//same for probe, they compliment each other

//tell fluent-ffmpeg that we have static installs of ffmpeg and probe
// console.log(ffmpeg_static);
// console.log(ffprobe_static)

ffmpeg.setFfmpegPath(ffmpeg_static);
ffmpeg.setFfprobePath(ffprobe_static.path); //

//load target video files
const targetVideoFile = __dirname + '/sample-10s.mp4';
console.log(targetVideoFile);

//ask ffmpeg to convert video file to diffrent format https://fluent-ffmpeg.github.io/index.html
ffmpeg(targetVideoFile)
  .toFormat('webm')
  // https://www.tabnine.com/code/javascript/modules/fluent-ffmpeg
  .on('end', () => { console.log("File conversion done") })
  .on("progress", timemark =>
    console.log(timemark)
  )
  .saveToFile(__dirname + '/sample-10s.webm');


