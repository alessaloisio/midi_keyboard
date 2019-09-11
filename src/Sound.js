"use strict";

class Sound {
  constructor() {}

  static setup() {
    let audioContext = new (window.AudioContext || window.webkitAudioContext)();

    let masterGainNode = null;

    let volumeControl = 1; // slider ?
    let wavePicker = "custom"; // choose (custom/square/sine..)
    let customWaveform = null;

    let sineTerms = null;
    let cosineTerms = null;

    let oscList = {};

    sineTerms = new Float32Array([0, 0, 1, 0, 1]);
    cosineTerms = new Float32Array(sineTerms.length);
    customWaveform = audioContext.createPeriodicWave(cosineTerms, sineTerms);

    masterGainNode = audioContext.createGain();
    masterGainNode.connect(audioContext.destination);
    masterGainNode.gain.value = volumeControl;

    return {
      audioContext: audioContext,
      masterGainNode: masterGainNode,
      customWaveform: customWaveform,
      type: wavePicker,
      oscList: oscList
    };
  }

  static notePressed(e, obj) {
    let dataset = e.dataset;
    if (!dataset["pressed"]) {
      obj.oscList[dataset["frequency"]] = Sound.playTone(
        dataset["frequency"],
        obj
      );
      console.log(obj.oscList);
      dataset["pressed"] = "yes";
    }
  }

  static noteReleased(e, obj) {
    let dataset = e.dataset;
    if (dataset && dataset["pressed"]) {
      obj.oscList[dataset["frequency"]].stop();
      delete obj.oscList[dataset["frequency"]];
      delete dataset["pressed"];
    }
  }

  static playTone(freq, obj) {
    let osc = obj.audioContext.createOscillator();
    osc.connect(obj.masterGainNode);

    let type = obj.type;

    if (type == "custom") {
      osc.setPeriodicWave(obj.customWaveform);
    } else {
      osc.type = type;
    }

    osc.frequency.value = freq;
    osc.start();

    return osc;
  }

  static createNoteTable() {
    let noteFreq = [];
    let octave = 0;
    let frequence = 50;

    for (let i = 1; i < 26; i++) {
      if (i % 7 === 0) {
        frequence += 100;
        octave++;
      }
      noteFreq.push([octave, frequence]);
      frequence += 10;
    }

    return noteFreq;
  }

  static setData(target, note) {
    target.dataset.octave = note[0];
    target.dataset.frequency = note[1];
  }
}

export default Sound;
