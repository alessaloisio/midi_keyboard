"use strict";

import Sound from "./Sound";

class MidiKeyboard {
  constructor(target) {
    this.target = target;

    this.sound = Sound.setup();
    this.initGrid();
    this.initEvent();
  }

  initGrid() {
    const dimCase = Math.floor(26 / 5.099);
    const dimCaseOnGrid = this.target.clientWidth / dimCase;
    const noteTable = Sound.createNoteTable();

    let x = 0,
      y = 0,
      count = 1;

    for (let i = 0; i < dimCase; i++) {
      x = 0;
      for (let j = 0; j < dimCase; j++) {
        // GENERATE A CASE PROPS
        const span = document.createElement("span");
        span.classList.add("case");
        span.id = count++;

        // GENERATE SOUND
        const sound = document.createElement("span");
        sound.classList.add("sound");

        Sound.setData(sound, noteTable[count - 2]);

        span.appendChild(sound);

        // DIM
        span.style.width = `${dimCaseOnGrid}px`;
        span.style.height = `${dimCaseOnGrid}px`;

        span.style.left = `${x}px`;
        span.style.top = `${y}px`;

        // Random Color
        span.style.backgroundColor =
          "#" + ((Math.random() * 0xffffff) << 0).toString(16);

        this.target.appendChild(span);

        x += dimCaseOnGrid;
      }
      y += dimCaseOnGrid;
    }
  }

  keyUnionSpan(e) {
    const spans = this.target.childNodes;

    // > 65 < 90
    const id = e.keyCode - 65 + 1;
    if (e.keyCode >= 65 && e.keyCode <= 89) {
      for (let i = 0; i < spans.length; i++) {
        const span = spans[i];
        if (parseInt(span.id) === id) {
          return span;
        }
      }
    }

    return null;
  }

  initEvent() {
    document.addEventListener("keydown", e => {
      const span = this.keyUnionSpan(e);
      if (span) {
        span.classList.add("clicked");
        Sound.notePressed(span.firstChild, this.sound);
      }
    });

    document.addEventListener("keyup", e => {
      const span = this.keyUnionSpan(e);
      if (span) {
        span.classList.remove("clicked");
        Sound.noteReleased(span.firstChild, this.sound);
      }
    });
  }
}

const pad = document.getElementById("pad");
const mk = new MidiKeyboard(pad);
console.log(mk);