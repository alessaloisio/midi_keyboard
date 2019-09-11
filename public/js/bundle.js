(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sound =
/*#__PURE__*/
function () {
  function Sound() {
    _classCallCheck(this, Sound);
  }

  _createClass(Sound, null, [{
    key: "setup",
    value: function setup() {
      var audioContext = new (window.AudioContext || window.webkitAudioContext)();
      var masterGainNode = null;
      var volumeControl = 1; // slider ?

      var wavePicker = "custom"; // choose (custom/square/sine..)

      var customWaveform = null;
      var sineTerms = null;
      var cosineTerms = null;
      var oscList = {};
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
  }, {
    key: "notePressed",
    value: function notePressed(e, obj) {
      var dataset = e.dataset;

      if (!dataset["pressed"]) {
        obj.oscList[dataset["frequency"]] = Sound.playTone(dataset["frequency"], obj);
        console.log(obj.oscList);
        dataset["pressed"] = "yes";
      }
    }
  }, {
    key: "noteReleased",
    value: function noteReleased(e, obj) {
      var dataset = e.dataset;

      if (dataset && dataset["pressed"]) {
        obj.oscList[dataset["frequency"]].stop();
        delete obj.oscList[dataset["frequency"]];
        delete dataset["pressed"];
      }
    }
  }, {
    key: "playTone",
    value: function playTone(freq, obj) {
      var osc = obj.audioContext.createOscillator();
      osc.connect(obj.masterGainNode);
      var type = obj.type;

      if (type == "custom") {
        osc.setPeriodicWave(obj.customWaveform);
      } else {
        osc.type = type;
      }

      osc.frequency.value = freq;
      osc.start();
      return osc;
    }
  }, {
    key: "createNoteTable",
    value: function createNoteTable() {
      var noteFreq = [];
      var octave = 0;
      var frequence = 50;

      for (var i = 1; i < 26; i++) {
        if (i % 7 === 0) {
          frequence += 100;
          octave++;
        }

        noteFreq.push([octave, frequence]);
        frequence += 10;
      }

      return noteFreq;
    }
  }, {
    key: "setData",
    value: function setData(target, note) {
      target.dataset.octave = note[0];
      target.dataset.frequency = note[1];
    }
  }]);

  return Sound;
}();

var _default = Sound;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdW5kLmpzIl0sIm5hbWVzIjpbIlNvdW5kIiwiYXVkaW9Db250ZXh0Iiwid2luZG93IiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwibWFzdGVyR2Fpbk5vZGUiLCJ2b2x1bWVDb250cm9sIiwid2F2ZVBpY2tlciIsImN1c3RvbVdhdmVmb3JtIiwic2luZVRlcm1zIiwiY29zaW5lVGVybXMiLCJvc2NMaXN0IiwiRmxvYXQzMkFycmF5IiwibGVuZ3RoIiwiY3JlYXRlUGVyaW9kaWNXYXZlIiwiY3JlYXRlR2FpbiIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImdhaW4iLCJ2YWx1ZSIsInR5cGUiLCJlIiwib2JqIiwiZGF0YXNldCIsInBsYXlUb25lIiwiY29uc29sZSIsImxvZyIsInN0b3AiLCJmcmVxIiwib3NjIiwiY3JlYXRlT3NjaWxsYXRvciIsInNldFBlcmlvZGljV2F2ZSIsImZyZXF1ZW5jeSIsInN0YXJ0Iiwibm90ZUZyZXEiLCJvY3RhdmUiLCJmcmVxdWVuY2UiLCJpIiwicHVzaCIsInRhcmdldCIsIm5vdGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLG1CQUFjO0FBQUE7QUFBRTs7Ozs0QkFFRDtBQUNiLFVBQUlDLFlBQVksR0FBRyxLQUFLQyxNQUFNLENBQUNDLFlBQVAsSUFBdUJELE1BQU0sQ0FBQ0Usa0JBQW5DLEdBQW5CO0FBRUEsVUFBSUMsY0FBYyxHQUFHLElBQXJCO0FBRUEsVUFBSUMsYUFBYSxHQUFHLENBQXBCLENBTGEsQ0FLVTs7QUFDdkIsVUFBSUMsVUFBVSxHQUFHLFFBQWpCLENBTmEsQ0FNYzs7QUFDM0IsVUFBSUMsY0FBYyxHQUFHLElBQXJCO0FBRUEsVUFBSUMsU0FBUyxHQUFHLElBQWhCO0FBQ0EsVUFBSUMsV0FBVyxHQUFHLElBQWxCO0FBRUEsVUFBSUMsT0FBTyxHQUFHLEVBQWQ7QUFFQUYsTUFBQUEsU0FBUyxHQUFHLElBQUlHLFlBQUosQ0FBaUIsQ0FBQyxD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QU07QUFDUDs7QUFDREQsUUFBQUEsUUFBUSxDQUFDSSxJQUFULENBQWMsQ0FBQ0gsTUFBRCxFQUFTQyxTQUFULENBQWQ7QUFDQUEsUUFBQUEsU0FBUyxJQUFJLEVBQWI7QUFDRDs7QUFFRCxhQUFPRixRQUFQO0FBQ0Q7Ozs0QkFFY0ssTSxFQUFRQyxJLEVBQU07QUFDM0JELE1BQUFBLE1BQU0sQ0FBQ2hCLE9BQVAsQ0FBZVksTUFBZixHQUF3QkssSUFBSSxDQUFDLENBQUQsQ0FBNUI7QUFDQUQsTUFBQUEsTUFBTSxDQUFDaEIsT0FBUCxDQUFlUyxTQUFmLEdBQTJCUSxJQUFJLENBQUMsQ0FBRCxDQUEvQjtBQUNEOzs7Ozs7ZUFHWXhDLEsiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgU291bmQge1xuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc3RhdGljIHNldHVwKCkge1xuICAgIGxldCBhdWRpb0NvbnRleHQgPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcblxuICAgIGxldCBtYXN0ZXJHYWluTm9kZSA9IG51bGw7XG5cbiAgICBsZXQgdm9sdW1lQ29udHJvbCA9IDE7IC8vIHNsaWRlciA/XG4gICAgbGV0IHdhdmVQaWNrZXIgPSBcImN1c3RvbVwiOyAvLyBjaG9vc2UgKGN1c3RvbS9zcXVhcmUvc2luZS4uKVxuICAgIGxldCBjdXN0b21XYXZlZm9ybSA9IG51bGw7XG5cbiAgICBsZXQgc2luZVRlcm1zID0gbnVsbDtcbiAgICBsZXQgY29zaW5lVGVybXMgPSBudWxsO1xuXG4gICAgbGV0IG9zY0xpc3QgPSB7fTtcblxuICAgIHNpbmVUZXJtcyA9IG5ldyBGbG9hdDMyQXJyYXkoWzAsIDAsIDEsIDAsIDFdKTtcbiAgICBjb3NpbmVUZXJtcyA9IG5ldyBGbG9hdDMyQXJyYXkoc2luZVRlcm1zLmxlbmd0aCk7XG4gICAgY3VzdG9tV2F2ZWZvcm0gPSBhdWRpb0NvbnRleHQuY3JlYXRlUGVyaW9kaWNXYXZlKGNvc2luZVRlcm1zLCBzaW5lVGVybXMpO1xuXG4gICAgbWFzdGVyR2Fpbk5vZGUgPSBhdWRpb0NvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIG1hc3RlckdhaW5Ob2RlLmNvbm5lY3QoYXVkaW9Db250ZXh0LmRlc3RpbmF0aW9uKTtcbiAgICBtYXN0ZXJHYWluTm9kZS5nYWluLnZhbHVlID0gdm9sdW1lQ29udHJvbDtcblxuICAgIHJldHVybiB7XG4gICAgICBhdWRpb0NvbnRleHQ6IGF1ZGlvQ29udGV4dCxcbiAgICAgIG1hc3RlckdhaW5Ob2RlOiBtYXN0ZXJHYWluTm9kZSxcbiAgICAgIGN1c3RvbVdhdmVmb3JtOiBjdXN0b21XYXZlZm9ybSxcbiAgICAgIHR5cGU6IHdhdmVQaWNrZXIsXG4gICAgICBvc2NMaXN0OiBvc2NMaXN0XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBub3RlUHJlc3NlZChlLCBvYmopIHtcbiAgICBsZXQgZGF0YXNldCA9IGUuZGF0YXNldDtcbiAgICBpZiAoIWRhdGFzZXRbXCJwcmVzc2VkXCJdKSB7XG4gICAgICBvYmoub3NjTGlzdFtkYXRhc2V0W1wiZnJlcXVlbmN5XCJdXSA9IFNvdW5kLnBsYXlUb25lKFxuICAgICAgICBkYXRhc2V0W1wiZnJlcXVlbmN5XCJdLFxuICAgICAgICBvYmpcbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhvYmoub3NjTGlzdCk7XG4gICAgICBkYXRhc2V0W1wicHJlc3NlZFwiXSA9IFwieWVzXCI7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIG5vdGVSZWxlYXNlZChlLCBvYmopIHtcbiAgICBsZXQgZGF0YXNldCA9IGUuZGF0YXNldDtcbiAgICBpZiAoZGF0YXNldCAmJiBkYXRhc2V0W1wicHJlc3NlZFwiXSkge1xuICAgICAgb2JqLm9zY0xpc3RbZGF0YXNldFtcImZyZXF1ZW5jeVwiXV0uc3RvcCgpO1xuICAgICAgZGVsZXRlIG9iai5vc2NMaXN0W2RhdGFzZXRbXCJmcmVxdWVuY3lcIl1dO1xuICAgICAgZGVsZXRlIGRhdGFzZXRbXCJwcmVzc2VkXCJdO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBwbGF5VG9uZShmcmVxLCBvYmopIHtcbiAgICBsZXQgb3NjID0gb2JqLmF1ZGlvQ29udGV4dC5jcmVhdGVPc2NpbGxhdG9yKCk7XG4gICAgb3NjLmNvbm5lY3Qob2JqLm1hc3RlckdhaW5Ob2RlKTtcblxuICAgIGxldCB0eXBlID0gb2JqLnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PSBcImN1c3RvbVwiKSB7XG4gICAgICBvc2Muc2V0UGVyaW9kaWNXYXZlKG9iai5jdXN0b21XYXZlZm9ybSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9zYy50eXBlID0gdHlwZTtcbiAgICB9XG5cbiAgICBvc2MuZnJlcXVlbmN5LnZhbHVlID0gZnJlcTtcbiAgICBvc2Muc3RhcnQoKTtcblxuICAgIHJldHVybiBvc2M7XG4gIH1cblxuICBzdGF0aWMgY3JlYXRlTm90ZVRhYmxlKCkge1xuICAgIGxldCBub3RlRnJlcSA9IFtdO1xuICAgIGxldCBvY3RhdmUgPSAwO1xuICAgIGxldCBmcmVxdWVuY2UgPSA1MDtcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgMjY7IGkrKykge1xuICAgICAgaWYgKGkgJSA3ID09PSAwKSB7XG4gICAgICAgIGZyZXF1ZW5jZSArPSAxMDA7XG4gICAgICAgIG9jdGF2ZSsrO1xuICAgICAgfVxuICAgICAgbm90ZUZyZXEucHVzaChbb2N0YXZlLCBmcmVxdWVuY2VdKTtcbiAgICAgIGZyZXF1ZW5jZSArPSAxMDtcbiAgICB9XG5cbiAgICByZXR1cm4gbm90ZUZyZXE7XG4gIH1cblxuICBzdGF0aWMgc2V0RGF0YSh0YXJnZXQsIG5vdGUpIHtcbiAgICB0YXJnZXQuZGF0YXNldC5vY3RhdmUgPSBub3RlWzBdO1xuICAgIHRhcmdldC5kYXRhc2V0LmZyZXF1ZW5jeSA9IG5vdGVbMV07XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU291bmQ7XG4iXX0=
},{}],2:[function(require,module,exports){
"use strict";

var _Sound = _interopRequireDefault(require("./Sound"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MidiKeyboard =
/*#__PURE__*/
function () {
  function MidiKeyboard(target) {
    _classCallCheck(this, MidiKeyboard);

    this.target = target;
    this.sound = _Sound.default.setup();
    this.initGrid();
    this.initEvent();
  }

  _createClass(MidiKeyboard, [{
    key: "initGrid",
    value: function initGrid() {
      var dimCase = Math.floor(26 / 5.099);
      var dimCaseOnGrid = this.target.clientWidth / dimCase;

      var noteTable = _Sound.default.createNoteTable();

      var x = 0,
          y = 0,
          count = 1;

      for (var i = 0; i < dimCase; i++) {
        x = 0;

        for (var j = 0; j < dimCase; j++) {
          // GENERATE A CASE PROPS
          var span = document.createElement("span");
          span.classList.add("case");
          span.id = count++; // GENERATE SOUND

          var sound = document.createElement("span");
          sound.classList.add("sound");

          _Sound.default.setData(sound, noteTable[count - 2]);

          span.appendChild(sound); // DIM

          span.style.width = "".concat(dimCaseOnGrid, "px");
          span.style.height = "".concat(dimCaseOnGrid, "px");
          span.style.left = "".concat(x, "px");
          span.style.top = "".concat(y, "px"); // Random Color

          span.style.backgroundColor = "#" + (Math.random() * 0xffffff << 0).toString(16);
          this.target.appendChild(span);
          x += dimCaseOnGrid;
        }

        y += dimCaseOnGrid;
      }
    }
  }, {
    key: "keyUnionSpan",
    value: function keyUnionSpan(e) {
      var spans = this.target.childNodes; // > 65 < 90

      var id = e.keyCode - 65 + 1;

      if (e.keyCode >= 65 && e.keyCode <= 89) {
        for (var i = 0; i < spans.length; i++) {
          var span = spans[i];

          if (parseInt(span.id) === id) {
            return span;
          }
        }
      }

      return null;
    }
  }, {
    key: "initEvent",
    value: function initEvent() {
      var _this = this;

      document.addEventListener("keydown", function (e) {
        var span = _this.keyUnionSpan(e);

        if (span) {
          span.classList.add("clicked");

          _Sound.default.notePressed(span.firstChild, _this.sound);
        }
      });
      document.addEventListener("keyup", function (e) {
        var span = _this.keyUnionSpan(e);

        if (span) {
          span.classList.remove("clicked");

          _Sound.default.noteReleased(span.firstChild, _this.sound);
        }
      });
    }
  }]);

  return MidiKeyboard;
}();

var pad = document.getElementById("pad");
var mk = new MidiKeyboard(pad);
console.log(mk);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTE0OTQyYzQuanMiXSwibmFtZXMiOlsiTWlkaUtleWJvYXJkIiwidGFyZ2V0Iiwic291bmQiLCJTb3VuZCIsInNldHVwIiwiaW5pdEdyaWQiLCJpbml0RXZlbnQiLCJkaW1DYXNlIiwiTWF0aCIsImZsb29yIiwiZGltQ2FzZU9uR3JpZCIsImNsaWVudFdpZHRoIiwibm90ZVRhYmxlIiwiY3JlYXRlTm90ZVRhYmxlIiwieCIsInkiLCJjb3VudCIsImkiLCJqIiwic3BhbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlkIiwic2V0RGF0YSIsImFwcGVuZENoaWxkIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImUiLCJzcGFucyIsImNoaWxkTm9kZXMiLCJrZXlDb2RlIiwibGVuZ3RoIiwicGFyc2VJbnQiLCJhZGRFdmVudExpc3RlbmVyIiwia2V5VW5pb25TcGFuIiwibm90ZVByZXNzZWQiLCJmaXJzdENoaWxkIiwicmVtb3ZlIiwibm90ZVJlbGVhc2VkIiwicGFkIiwiZ2V0RWxlbWVudEJ5SWQiLCJtayIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7O0lBRU1BLFk7OztBQUNKLHdCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUVBLFNBQUtDLEtBQUwsR0FBYUMsZUFBTUMsS0FBTixFQUFiO0FBQ0EsU0FBS0MsUUFBTDtBQUNBLFNBQUtDLFNBQUw7QUFDRDs7OzsrQkFFVTtBQUNULFVBQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBSyxLQUFoQixDQUFoQjtBQUNBLFVBQU1DLGFBQWEsR0FBRyxLQUFLVCxNQUFMLENBQVlVLFdBQVosR0FBMEJKLE9BQWhEOztBQUNBLFVBQU1LLFNBQVMsR0FBR1QsZUFB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LElBQUksQ0FBQ0csU0FBTCxDQUFlQyxHQUFmLENBQW1CLFNBQW5COztBQUNBcEIseUJBQU13QyxXQUFOLENBQWtCeEIsSUFBSSxDQUFDeUIsVUFBdkIsRUFBbUMsS0FBSSxDQUFDMUMsS0FBeEM7QUFDRDtBQUNGLE9BTkQ7QUFRQWtCLE1BQUFBLFFBQVEsQ0FBQ3FCLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUFOLENBQUMsRUFBSTtBQUN0QyxZQUFNaEIsSUFBSSxHQUFHLEtBQUksQ0FBQ3VCLFlBQUwsQ0FBa0JQLENBQWxCLENBQWI7O0FBQ0EsWUFBSWhCLElBQUosRUFBVTtBQUNSQSxVQUFBQSxJQUFJLENBQUNHLFNBQUwsQ0FBZXVCLE1BQWYsQ0FBc0IsU0FBdEI7O0FBQ0ExQyx5QkFBTTJDLFlBQU4sQ0FBbUIzQixJQUFJLENBQUN5QixVQUF4QixFQUFvQyxLQUFJLENBQUMxQyxLQUF6QztBQUNEO0FBQ0YsT0FORDtBQU9EOzs7Ozs7QUFHSCxJQUFNNkMsR0FBRyxHQUFHM0IsUUFBUSxDQUFDNEIsY0FBVCxDQUF3QixLQUF4QixDQUFaO0FBQ0EsSUFBTUMsRUFBRSxHQUFHLElBQUlqRCxZQUFKLENBQWlCK0MsR0FBakIsQ0FBWDtBQUNBRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsRUFBWiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgU291bmQgZnJvbSBcIi4vU291bmRcIjtcblxuY2xhc3MgTWlkaUtleWJvYXJkIHtcbiAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG5cbiAgICB0aGlzLnNvdW5kID0gU291bmQuc2V0dXAoKTtcbiAgICB0aGlzLmluaXRHcmlkKCk7XG4gICAgdGhpcy5pbml0RXZlbnQoKTtcbiAgfVxuXG4gIGluaXRHcmlkKCkge1xuICAgIGNvbnN0IGRpbUNhc2UgPSBNYXRoLmZsb29yKDI2IC8gNS4wOTkpO1xuICAgIGNvbnN0IGRpbUNhc2VPbkdyaWQgPSB0aGlzLnRhcmdldC5jbGllbnRXaWR0aCAvIGRpbUNhc2U7XG4gICAgY29uc3Qgbm90ZVRhYmxlID0gU291bmQuY3JlYXRlTm90ZVRhYmxlKCk7XG5cbiAgICBsZXQgeCA9IDAsXG4gICAgICB5ID0gMCxcbiAgICAgIGNvdW50ID0gMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGltQ2FzZTsgaSsrKSB7XG4gICAgICB4ID0gMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGltQ2FzZTsgaisrKSB7XG4gICAgICAgIC8vIEdFTkVSQVRFIEEgQ0FTRSBQUk9QU1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImNhc2VcIik7XG4gICAgICAgIHNwYW4uaWQgPSBjb3VudCsrO1xuXG4gICAgICAgIC8vIEdFTkVSQVRFIFNPVU5EXG4gICAgICAgIGNvbnN0IHNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNvdW5kLmNsYXNzTGlzdC5hZGQoXCJzb3VuZFwiKTtcblxuICAgICAgICBTb3VuZC5zZXREYXRhKHNvdW5kLCBub3RlVGFibGVbY291bnQgLSAyXSk7XG5cbiAgICAgICAgc3Bhbi5hcHBlbmRDaGlsZChzb3VuZCk7XG5cbiAgICAgICAgLy8gRElNXG4gICAgICAgIHNwYW4uc3R5bGUud2lkdGggPSBgJHtkaW1DYXNlT25HcmlkfXB4YDtcbiAgICAgICAgc3Bhbi5zdHlsZS5oZWlnaHQgPSBgJHtkaW1DYXNlT25HcmlkfXB4YDtcblxuICAgICAgICBzcGFuLnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgICAgICAgc3Bhbi5zdHlsZS50b3AgPSBgJHt5fXB4YDtcblxuICAgICAgICAvLyBSYW5kb20gQ29sb3JcbiAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICAgIFwiI1wiICsgKChNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYpIDw8IDApLnRvU3RyaW5nKDE2KTtcblxuICAgICAgICB0aGlzLnRhcmdldC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgICAgICB4ICs9IGRpbUNhc2VPbkdyaWQ7XG4gICAgICB9XG4gICAgICB5ICs9IGRpbUNhc2VPbkdyaWQ7XG4gICAgfVxuICB9XG5cbiAga2V5VW5pb25TcGFuKGUpIHtcbiAgICBjb25zdCBzcGFucyA9IHRoaXMudGFyZ2V0LmNoaWxkTm9kZXM7XG5cbiAgICAvLyA+IDY1IDwgOTBcbiAgICBjb25zdCBpZCA9IGUua2V5Q29kZSAtIDY1ICsgMTtcbiAgICBpZiAoZS5rZXlDb2RlID49IDY1ICYmIGUua2V5Q29kZSA8PSA4OSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGFucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzcGFuID0gc3BhbnNbaV07XG4gICAgICAgIGlmIChwYXJzZUludChzcGFuLmlkKSA9PT0gaWQpIHtcbiAgICAgICAgICByZXR1cm4gc3BhbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaW5pdEV2ZW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgY29uc3Qgc3BhbiA9IHRoaXMua2V5VW5pb25TcGFuKGUpO1xuICAgICAgaWYgKHNwYW4pIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgU291bmQubm90ZVByZXNzZWQoc3Bhbi5maXJzdENoaWxkLCB0aGlzLnNvdW5kKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbiAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLmtleVVuaW9uU3BhbihlKTtcbiAgICAgIGlmIChzcGFuKSB7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIFNvdW5kLm5vdGVSZWxlYXNlZChzcGFuLmZpcnN0Q2hpbGQsIHRoaXMuc291bmQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IHBhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFkXCIpO1xuY29uc3QgbWsgPSBuZXcgTWlkaUtleWJvYXJkKHBhZCk7XG5jb25zb2xlLmxvZyhtayk7XG4iXX0=
},{"./Sound":1}]},{},[2])