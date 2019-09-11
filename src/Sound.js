"use strict";

class Sound {
  constructor(context, buffer) {
    this.context = context;
    this.buffer = buffer;
  }

  setup() {
    this.gainNode = this.context.createGain();
    this.source = this.context.createBufferSource();
    this.source.buffer = this.buffer;
    this.source.connect(this.gainNode);
    this.gainNode.connect(this.context.destination);

    this.gainNode.gain.setValueAtTime(0.8, this.context.currentTime);
  }

  play() {
    this.setup();
    this.source.start(this.context.currentTime);
  }

  stop() {
    var ct = this.context.currentTime + 0.5;
    this.gainNode.gain.exponentialRampToValueAtTime(0.001, ct);
    this.source.stop(ct);
  }
}

class Buffer {
  constructor(context, urls) {
    this.context = context;
    this.urls = urls;
    this.buffer = [];
  }

  loadSound(url, index) {
    let request = new XMLHttpRequest();
    request.open("get", url, true);
    request.responseType = "arraybuffer";
    let thisBuffer = this;
    request.onload = function() {
      // Safari doesn't support promise based syntax
      thisBuffer.context.decodeAudioData(request.response, function(buffer) {
        thisBuffer.buffer[index] = buffer;
      });
    };
    request.send();
  }

  getBuffer() {
    this.urls.forEach((url, index) => {
      this.loadSound(url, index);
    });
  }

  getSound(index) {
    return this.buffer[index];
  }
}

class SoundAPI {
  constructor() {
    this.context = new (window.AudioContext || window.webkitAudioContext)();
    this.listenSounds = {};
    this.buffer = null;
    // SOUNDS FILES
    this.sounds = [];
    this.dest = "sounds/";
    this.style = {
      name: "guitar",
      ext: "mp3"
    };
  }

  getFilesSounds() {
    // GENERATE PATHS
    this.sounds = [];
    for (let i = 1; i < 26; i++) {
      let str = this.dest + this.style.name + "/";
      str += i + "." + this.style.ext;
      this.sounds.push(str);
    }

    // NEW BUFFER with sounds
    this.buffer = new Buffer(this.context, this.sounds);
    this.buffer.getBuffer();
  }

  play(id) {
    if (!this.listenSounds[id]) {
      this.listenSounds[id] = new Sound(this.context, this.buffer.getSound(id));
      this.listenSounds[id].play();
    }
  }

  stop(id) {
    if (this.listenSounds[id]) {
      this.listenSounds[id].stop();
      delete this.listenSounds[id];
    }
  }
}

export { Sound, Buffer, SoundAPI };
