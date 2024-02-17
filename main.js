const ffmpeg = require('fluent-ffmpeg');//functions to perform conversions
const ffmpeg_static = require('ffmpeg-static');//static install of ffmpeg
const ffprobe_static = require('ffprobe-static');//same for probe, they compliment each other

//load target video files
const targetVideoFile = __dirname + '/sample-10s.mp4';
console.log(targetVideoFile);

//ask ffmpeg to convert video file to diffrent format


