"use strict";

import { SoundAPI } from "./Sound";

class MidiKeyboard {
  constructor(target) {
    this.target = target;

    // INIT My Sound Lib
    this.sound = new SoundAPI();
    this.sound.getFilesSounds();

    // INIT PAD
    this.initGrid();
    this.initEvent();
  }

  initGrid() {
    const dimCase = Math.floor(26 / 5.099);
    const dimCaseOnGrid = this.target.clientWidth / dimCase;

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
        this.sound.play(span.id);
      }
    });

    document.addEventListener("keyup", e => {
      const span = this.keyUnionSpan(e);
      if (span) {
        span.classList.remove("clicked");
        this.sound.stop(span.id);
      }
    });
  }
}

export default MidiKeyboard;
