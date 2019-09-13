"use strict";

import { SoundAPI } from "./Sound";

class MidiKeyboard {
  constructor(target, styles) {
    this.target = target;

    // INIT My Sound Lib
    this.sound = new SoundAPI(styles);
    this.sound.getFilesSounds();

    // INIT PAD
    this.initGrid();
    this.initEvent();
  }

  changeStyle() {
    this.sound.getFilesSounds();
  }

  initGrid() {
    const dimCase = Math.floor(26 / 5.099);
    const dimCaseOnGrid = this.target.clientWidth / dimCase;

    let x = 0,
      y = 0,
      count = 0;

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
        span.dataset.bg = `rgba(${Math.floor(
          Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
          Math.random() * 256
        )}, 0.8)`;

        this.target.appendChild(span);

        // ADD EVENT LISTENER
        span.addEventListener("click", e => (this.handlerCase(e), false));

        x += dimCaseOnGrid;
      }
      y += dimCaseOnGrid;
    }
  }

  keyUnionSpan(e) {
    const spans = this.target.childNodes;

    // > 65 < 90
    const id = e.keyCode - 65;
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
    document.addEventListener(
      "keydown",
      e => (this.keyDown(this.keyUnionSpan(e)), false)
    );
    document.addEventListener(
      "keyup",
      e => (this.keyUp(this.keyUnionSpan(e)), false)
    );
  }

  keyDown(span) {
    if (span) {
      span.classList.add("clicked");
      span.style.backgroundColor = span.dataset.bg;
      this.sound.play(span.id);
    }
  }

  keyUp(span) {
    if (span && !span.classList.contains("lock")) {
      span.classList.remove("clicked");
      span.style.backgroundColor = "transparent";
      this.sound.stop(span.id);
    }
  }

  handlerCase(e) {
    const span = e.target;
    if (span.classList.contains("clicked")) {
      span.classList.toggle("lock");
      this.keyUp(span);
    }
  }
}

export default MidiKeyboard;
