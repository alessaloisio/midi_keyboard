"use strict";

import Pad from "./Pad";

// Styles Config
const styles = {
  local: {
    guitarElectro: {
      name: "Guitar Electo",
      ext: "mp3",
      icon: "flaticon-classic-guitar"
    },
    guitarAcoustic: {
      name: "Guitar Acoustic",
      ext: "wav",
      icon: "flaticon-electric-guitar"
    },
    piano: { name: "Piano", ext: "mp3", icon: "flaticon-piano" },
    dj: { name: "DJ Mix", ext: "wav", icon: "flaticon-boy" }
  },
  network: {}
};

/**
 * Settings Btn
 */
//  CREATE LIST WITH ALL STYLES
const listSettings = document.getElementById("panel");
for (const style in styles.local) {
  if (styles.local.hasOwnProperty(style)) {
    const element = styles.local[style];

    // LocalStorage First
    if (!localStorage.getItem("style")) localStorage.setItem("style", style);

    const li = document.createElement("li");
    li.id = style;
    const icon = document.createElement("i");
    icon.classList.add(element.icon);
    li.appendChild(icon);
    li.appendChild(document.createTextNode(element.name));

    listSettings.appendChild(li);
  }
}

// CREATE PAD
const pad = new Pad(document.getElementById("pad"), styles);
// console.log(pad);

// MANAGE CLICK
const handlerSettings = e => {
  // console.log(e.target.id);
  // localStorage edit
  localStorage.setItem("style", e.target.id);
  pad.changeStyle();
};

Array.from(document.querySelectorAll("#panel li")).map(li => {
  li.addEventListener("click", e => (handlerSettings(e), false));
});
