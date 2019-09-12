(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Sound = require("./Sound");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MidiKeyboard =
/*#__PURE__*/
function () {
  function MidiKeyboard(target, styles) {
    _classCallCheck(this, MidiKeyboard);

    this.target = target; // INIT My Sound Lib

    this.sound = new _Sound.SoundAPI(styles);
    this.sound.getFilesSounds(); // INIT PAD

    this.initGrid();
    this.initEvent();
  }

  _createClass(MidiKeyboard, [{
    key: "changeStyle",
    value: function changeStyle() {
      this.sound.getFilesSounds();
    }
  }, {
    key: "initGrid",
    value: function initGrid() {
      var dimCase = Math.floor(26 / 5.099);
      var dimCaseOnGrid = this.target.clientWidth / dimCase;
      var x = 0,
          y = 0,
          count = 0;

      for (var i = 0; i < dimCase; i++) {
        x = 0;

        for (var j = 0; j < dimCase; j++) {
          // GENERATE A CASE PROPS
          var span = document.createElement("span");
          span.classList.add("case");
          span.id = count++; // DIM

          span.style.width = "".concat(dimCaseOnGrid, "px");
          span.style.height = "".concat(dimCaseOnGrid, "px");
          span.style.left = "".concat(x, "px");
          span.style.top = "".concat(y, "px"); // Random Color

          span.dataset.bg = "rgba(".concat(Math.floor(Math.random() * 256), ", ").concat(Math.floor(Math.random() * 256), ", ").concat(Math.floor(Math.random() * 256), ", 0.8)");
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

      var id = e.keyCode - 65;

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
          span.style.backgroundColor = span.dataset.bg;

          _this.sound.play(span.id);
        }
      });
      document.addEventListener("keyup", function (e) {
        var span = _this.keyUnionSpan(e);

        if (span) {
          span.classList.remove("clicked");
          span.style.backgroundColor = "transparent";

          _this.sound.stop(span.id);
        }
      });
    }
  }]);

  return MidiKeyboard;
}();

var _default = MidiKeyboard;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZC5qcyJdLCJuYW1lcyI6WyJNaWRpS2V5Ym9hcmQiLCJ0YXJnZXQiLCJzdHlsZXMiLCJzb3VuZCIsIlNvdW5kQVBJIiwiZ2V0RmlsZXNTb3VuZHMiLCJpbml0R3JpZCIsImluaXRFdmVudCIsImRpbUNhc2UiLCJNYXRoIiwiZmxvb3IiLCJkaW1DYXNlT25HcmlkIiwiY2xpZW50V2lkdGgiLCJ4IiwieSIsImNvdW50IiwiaSIsImoiLCJzcGFuIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaWQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsImRhdGFzZXQiLCJiZyIsInJhbmRvbSIsImFwcGVuZENoaWxkIiwiZSIsInNwYW5zIiwiY2hpbGROb2RlcyIsImtleUNvZGUiLCJsZW5ndGgiLCJwYXJzZUludCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlVbmlvblNwYW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwbGF5IiwicmVtb3ZlIiwic3RvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFTUEsWTs7O0FBQ0osd0JBQVlDLE1BQVosRUFBb0JDLE1BQXBCLEVBQTRCO0FBQUE7O0FBQzFCLFNBQUtELE1BQUwsR0FBY0EsTUFBZCxDQUQwQixDQUcxQjs7QUFDQSxTQUFLRSxLQUFMLEdBQWEsSUFBSUMsZUFBSixDQUFhRixNQUFiLENBQWI7QUFDQSxTQUFLQyxLQUFMLENBQVdFLGNBQVgsR0FMMEIsQ0FPMUI7O0FBQ0EsU0FBS0MsUUFBTDtBQUNBLFNBQUtDLFNBQUw7QUFDRDs7OztrQ0FFYTtBQUNaLFdBQUtKLEtBQUwsQ0FBV0UsY0FBWDtBQUNEOzs7K0JBRVU7QUFDVCxVQUFNRyxPQUFPLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUssS0FBaEIsQ0FBaEI7QUFDQSxVQUFNQyxhQUFhLEdBQUcsS0FBS1YsTUFBTCxDQUFZVyxXQUFaLEdBQTBCSixPQUFoRDtBQUVB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QUNLLEVBQXJCO0FBQ0Q7QUFDRixPQVBEO0FBU0FKLE1BQUFBLFFBQVEsQ0FBQ29CLGdCQUFULENBQTBCLE9BQTFCLEVBQW1DLFVBQUFOLENBQUMsRUFBSTtBQUN0QyxZQUFNZixJQUFJLEdBQUcsS0FBSSxDQUFDc0IsWUFBTCxDQUFrQlAsQ0FBbEIsQ0FBYjs7QUFDQSxZQUFJZixJQUFKLEVBQVU7QUFDUkEsVUFBQUEsSUFBSSxDQUFDRyxTQUFMLENBQWVzQixNQUFmLENBQXNCLFNBQXRCO0FBQ0F6QixVQUFBQSxJQUFJLENBQUNNLEtBQUwsQ0FBV2lCLGVBQVgsR0FBNkIsYUFBN0I7O0FBQ0EsVUFBQSxLQUFJLENBQUN0QyxLQUFMLENBQVd5QyxJQUFYLENBQWdCMUIsSUFBSSxDQUFDSyxFQUFyQjtBQUNEO0FBQ0YsT0FQRDtBQVFEOzs7Ozs7ZUFHWXZCLFkiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgU291bmRBUEkgfSBmcm9tIFwiLi9Tb3VuZFwiO1xuXG5jbGFzcyBNaWRpS2V5Ym9hcmQge1xuICBjb25zdHJ1Y3Rvcih0YXJnZXQsIHN0eWxlcykge1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuXG4gICAgLy8gSU5JVCBNeSBTb3VuZCBMaWJcbiAgICB0aGlzLnNvdW5kID0gbmV3IFNvdW5kQVBJKHN0eWxlcyk7XG4gICAgdGhpcy5zb3VuZC5nZXRGaWxlc1NvdW5kcygpO1xuXG4gICAgLy8gSU5JVCBQQURcbiAgICB0aGlzLmluaXRHcmlkKCk7XG4gICAgdGhpcy5pbml0RXZlbnQoKTtcbiAgfVxuXG4gIGNoYW5nZVN0eWxlKCkge1xuICAgIHRoaXMuc291bmQuZ2V0RmlsZXNTb3VuZHMoKTtcbiAgfVxuXG4gIGluaXRHcmlkKCkge1xuICAgIGNvbnN0IGRpbUNhc2UgPSBNYXRoLmZsb29yKDI2IC8gNS4wOTkpO1xuICAgIGNvbnN0IGRpbUNhc2VPbkdyaWQgPSB0aGlzLnRhcmdldC5jbGllbnRXaWR0aCAvIGRpbUNhc2U7XG5cbiAgICBsZXQgeCA9IDAsXG4gICAgICB5ID0gMCxcbiAgICAgIGNvdW50ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGltQ2FzZTsgaSsrKSB7XG4gICAgICB4ID0gMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGltQ2FzZTsgaisrKSB7XG4gICAgICAgIC8vIEdFTkVSQVRFIEEgQ0FTRSBQUk9QU1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImNhc2VcIik7XG4gICAgICAgIHNwYW4uaWQgPSBjb3VudCsrO1xuXG4gICAgICAgIC8vIERJTVxuICAgICAgICBzcGFuLnN0eWxlLndpZHRoID0gYCR7ZGltQ2FzZU9uR3JpZH1weGA7XG4gICAgICAgIHNwYW4uc3R5bGUuaGVpZ2h0ID0gYCR7ZGltQ2FzZU9uR3JpZH1weGA7XG5cbiAgICAgICAgc3Bhbi5zdHlsZS5sZWZ0ID0gYCR7eH1weGA7XG4gICAgICAgIHNwYW4uc3R5bGUudG9wID0gYCR7eX1weGA7XG5cbiAgICAgICAgLy8gUmFuZG9tIENvbG9yXG4gICAgICAgIHNwYW4uZGF0YXNldC5iZyA9IGByZ2JhKCR7TWF0aC5mbG9vcihcbiAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjU2XG4gICAgICAgICl9LCAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nil9LCAke01hdGguZmxvb3IoXG4gICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NlxuICAgICAgICApfSwgMC44KWA7XG5cbiAgICAgICAgdGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICAgICAgeCArPSBkaW1DYXNlT25HcmlkO1xuICAgICAgfVxuICAgICAgeSArPSBkaW1DYXNlT25HcmlkO1xuICAgIH1cbiAgfVxuXG4gIGtleVVuaW9uU3BhbihlKSB7XG4gICAgY29uc3Qgc3BhbnMgPSB0aGlzLnRhcmdldC5jaGlsZE5vZGVzO1xuXG4gICAgLy8gPiA2NSA8IDkwXG4gICAgY29uc3QgaWQgPSBlLmtleUNvZGUgLSA2NTtcbiAgICBpZiAoZS5rZXlDb2RlID49IDY1ICYmIGUua2V5Q29kZSA8PSA4OSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGFucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzcGFuID0gc3BhbnNbaV07XG4gICAgICAgIGlmIChwYXJzZUludChzcGFuLmlkKSA9PT0gaWQpIHtcbiAgICAgICAgICByZXR1cm4gc3BhbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaW5pdEV2ZW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgY29uc3Qgc3BhbiA9IHRoaXMua2V5VW5pb25TcGFuKGUpO1xuICAgICAgaWYgKHNwYW4pIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzcGFuLmRhdGFzZXQuYmc7XG4gICAgICAgIHRoaXMuc291bmQucGxheShzcGFuLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbiAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLmtleVVuaW9uU3BhbihlKTtcbiAgICAgIGlmIChzcGFuKSB7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICB0aGlzLnNvdW5kLnN0b3Aoc3Bhbi5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWlkaUtleWJvYXJkO1xuIl19
},{"./Sound":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SoundAPI = exports.Buffer = exports.Sound = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sound =
/*#__PURE__*/
function () {
  function Sound(context, buffer) {
    _classCallCheck(this, Sound);

    this.context = context;
    this.buffer = buffer;
  }

  _createClass(Sound, [{
    key: "setup",
    value: function setup() {
      this.gainNode = this.context.createGain();
      this.source = this.context.createBufferSource();
      this.source.buffer = this.buffer;
      this.source.connect(this.gainNode);
      this.gainNode.connect(this.context.destination);
      this.gainNode.gain.setValueAtTime(0.8, this.context.currentTime);
    }
  }, {
    key: "play",
    value: function play() {
      this.setup();
      this.source.start(this.context.currentTime);
    }
  }, {
    key: "stop",
    value: function stop() {
      var ct = this.context.currentTime + 0.5;
      this.gainNode.gain.exponentialRampToValueAtTime(0.001, ct);
      this.source.stop(ct);
    }
  }]);

  return Sound;
}();

exports.Sound = Sound;

var Buffer =
/*#__PURE__*/
function () {
  function Buffer(context, urls) {
    _classCallCheck(this, Buffer);

    this.context = context;
    this.urls = urls;
    this.buffer = [];
  }

  _createClass(Buffer, [{
    key: "loadSound",
    value: function loadSound(url, index) {
      var request = new XMLHttpRequest();
      request.open("get", url, true);
      request.responseType = "arraybuffer";
      var thisBuffer = this;

      request.onload = function () {
        // Safari doesn't support promise based syntax
        thisBuffer.context.decodeAudioData(request.response, function (buffer) {
          thisBuffer.buffer[index] = buffer;
        });
      };

      request.send();
    }
  }, {
    key: "getBuffer",
    value: function getBuffer() {
      var _this = this;

      this.urls.forEach(function (url, index) {
        _this.loadSound(url, index);
      });
    }
  }, {
    key: "getSound",
    value: function getSound(index) {
      return this.buffer[index];
    }
  }]);

  return Buffer;
}();

exports.Buffer = Buffer;

var SoundAPI =
/*#__PURE__*/
function () {
  function SoundAPI(styles) {
    _classCallCheck(this, SoundAPI);

    this.styles = styles;
    this.context = new (window.AudioContext || window.webkitAudioContext)();
    this.listenSounds = {};
    this.buffer = null; // SOUNDS FILES

    this.sounds = [];
    this.dest = "sounds/";
  }

  _createClass(SoundAPI, [{
    key: "getFilesSounds",
    value: function getFilesSounds() {
      // GENERATE PATHS
      this.sounds = [];
      var style = localStorage.getItem("style");

      for (var i = 1; i < 26; i++) {
        var str = this.dest + style + "/";
        str += i + "." + this.styles.local[style].ext;
        this.sounds.push(str);
      } // NEW BUFFER with sounds


      this.buffer = new Buffer(this.context, this.sounds);
      this.buffer.getBuffer();
    }
  }, {
    key: "play",
    value: function play(id) {
      if (!this.listenSounds[id]) {
        this.listenSounds[id] = new Sound(this.context, this.buffer.getSound(id));
        this.listenSounds[id].play();
      }
    }
  }, {
    key: "stop",
    value: function stop(id) {
      if (this.listenSounds[id]) {
        this.listenSounds[id].stop();
        delete this.listenSounds[id];
      }
    }
  }]);

  return SoundAPI;
}();

exports.SoundAPI = SoundAPI;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdW5kLmpzIl0sIm5hbWVzIjpbIlNvdW5kIiwiY29udGV4dCIsImJ1ZmZlciIsImdhaW5Ob2RlIiwiY3JlYXRlR2FpbiIsInNvdXJjZSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImdhaW4iLCJzZXRWYWx1ZUF0VGltZSIsImN1cnJlbnRUaW1lIiwic2V0dXAiLCJzdGFydCIsImN0IiwiZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSIsInN0b3AiLCJCdWZmZXIiLCJ1cmxzIiwidXJsIiwiaW5kZXgiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwidGhpc0J1ZmZlciIsIm9ubG9hZCIsImRlY29kZUF1ZGlvRGF0YSIsInJlc3BvbnNlIiwic2VuZCIsImZvckVhY2giLCJsb2FkU291bmQiLCJTb3VuZEFQSSIsInN0eWxlcyIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImxpc3RlblNvdW5kcyIsInNvdW5kcyIsImRlc3QiLCJzdHlsZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJpIiwic3RyIiwibG9jYWwiLCJleHQiLCJwdXNoIiwiZ2V0QnVmZmVyIiwiaWQiLCJnZXRTb3VuZCIsInBsYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7O0lBRU1BLEs7OztBQUNKLGlCQUFZQyxPQUFaLEVBQXFCQyxNQUFyQixFQUE2QjtBQUFBOztBQUMzQixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxNQUFMLEdBQWNBLE1BQWQ7QUFDRDs7Ozs0QkFFTztBQUNOLFdBQUtDLFFBQUwsR0FBZ0IsS0FBS0YsT0FBTCxDQUFhRyxVQUFiLEVBQWhCO0FBQ0EsV0FBS0MsTUFBTCxHQUFjLEtBQUtKLE9BQUwsQ0FBYUssa0JBQWIsRUFBZDtBQUNBLFdBQUtELE1BQUwsQ0FBWUgsTUFBWixHQUFxQixLQUFLQSxNQUExQjtBQUNB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QVlZLEtBQVosQ0FBa0JMLEtBQWxCLEVBQXlCTSxHQUExQztBQUNBLGFBQUtSLE1BQUwsQ0FBWVMsSUFBWixDQUFpQkgsR0FBakI7QUFDRCxPQVZjLENBWWY7OztBQUNBLFdBQUsxQyxNQUFMLEdBQWMsSUFBSWUsTUFBSixDQUFXLEtBQUtoQixPQUFoQixFQUF5QixLQUFLcUMsTUFBOUIsQ0FBZDtBQUNBLFdBQUtwQyxNQUFMLENBQVk4QyxTQUFaO0FBQ0Q7Ozt5QkFFSUMsRSxFQUFJO0FBQ1AsVUFBSSxDQUFDLEtBQUtaLFlBQUwsQ0FBa0JZLEVBQWxCLENBQUwsRUFBNEI7QUFDMUIsYUFBS1osWUFBTCxDQUFrQlksRUFBbEIsSUFBd0IsSUFBSWpELEtBQUosQ0FBVSxLQUFLQyxPQUFmLEVBQXdCLEtBQUtDLE1BQUwsQ0FBWWdELFFBQVosQ0FBcUJELEVBQXJCLENBQXhCLENBQXhCO0FBQ0EsYUFBS1osWUFBTCxDQUFrQlksRUFBbEIsRUFBc0JFLElBQXRCO0FBQ0Q7QUFDRjs7O3lCQUVJRixFLEVBQUk7QUFDUCxVQUFJLEtBQUtaLFlBQUwsQ0FBa0JZLEVBQWxCLENBQUosRUFBMkI7QUFDekIsYUFBS1osWUFBTCxDQUFrQlksRUFBbEIsRUFBc0JqQyxJQUF0QjtBQUNBLGVBQU8sS0FBS3FCLFlBQUwsQ0FBa0JZLEVBQWxCLENBQVA7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNsYXNzIFNvdW5kIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgYnVmZmVyKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgfVxuXG4gIHNldHVwKCkge1xuICAgIHRoaXMuZ2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgIHRoaXMuc291cmNlLmJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5nYWluTm9kZSk7XG4gICAgdGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKDAuOCwgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lKTtcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc291cmNlLnN0YXJ0KHRoaXMuY29udGV4dC5jdXJyZW50VGltZSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHZhciBjdCA9IHRoaXMuY29udGV4dC5jdXJyZW50VGltZSArIDAuNTtcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMSwgY3QpO1xuICAgIHRoaXMuc291cmNlLnN0b3AoY3QpO1xuICB9XG59XG5cbmNsYXNzIEJ1ZmZlciB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHVybHMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudXJscyA9IHVybHM7XG4gICAgdGhpcy5idWZmZXIgPSBbXTtcbiAgfVxuXG4gIGxvYWRTb3VuZCh1cmwsIGluZGV4KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJnZXRcIiwgdXJsLCB0cnVlKTtcbiAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICBsZXQgdGhpc0J1ZmZlciA9IHRoaXM7XG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFNhZmFyaSBkb2Vzbid0IHN1cHBvcnQgcHJvbWlzZSBiYXNlZCBzeW50YXhcbiAgICAgIHRoaXNCdWZmZXIuY29udGV4dC5kZWNvZGVBdWRpb0RhdGEocmVxdWVzdC5yZXNwb25zZSwgZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICAgIHRoaXNCdWZmZXIuYnVmZmVyW2luZGV4XSA9IGJ1ZmZlcjtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmVxdWVzdC5zZW5kKCk7XG4gIH1cblxuICBnZXRCdWZmZXIoKSB7XG4gICAgdGhpcy51cmxzLmZvckVhY2goKHVybCwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMubG9hZFNvdW5kKHVybCwgaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0U291bmQoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5idWZmZXJbaW5kZXhdO1xuICB9XG59XG5cbmNsYXNzIFNvdW5kQVBJIHtcbiAgY29uc3RydWN0b3Ioc3R5bGVzKSB7XG4gICAgdGhpcy5zdHlsZXMgPSBzdHlsZXM7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcbiAgICB0aGlzLmxpc3RlblNvdW5kcyA9IHt9O1xuICAgIHRoaXMuYnVmZmVyID0gbnVsbDtcbiAgICAvLyBTT1VORFMgRklMRVNcbiAgICB0aGlzLnNvdW5kcyA9IFtdO1xuICAgIHRoaXMuZGVzdCA9IFwic291bmRzL1wiO1xuICB9XG5cbiAgZ2V0RmlsZXNTb3VuZHMoKSB7XG4gICAgLy8gR0VORVJBVEUgUEFUSFNcbiAgICB0aGlzLnNvdW5kcyA9IFtdO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0eWxlXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyNjsgaSsrKSB7XG4gICAgICBsZXQgc3RyID0gdGhpcy5kZXN0ICsgc3R5bGUgKyBcIi9cIjtcbiAgICAgIHN0ciArPSBpICsgXCIuXCIgKyB0aGlzLnN0eWxlcy5sb2NhbFtzdHlsZV0uZXh0O1xuICAgICAgdGhpcy5zb3VuZHMucHVzaChzdHIpO1xuICAgIH1cblxuICAgIC8vIE5FVyBCVUZGRVIgd2l0aCBzb3VuZHNcbiAgICB0aGlzLmJ1ZmZlciA9IG5ldyBCdWZmZXIodGhpcy5jb250ZXh0LCB0aGlzLnNvdW5kcyk7XG4gICAgdGhpcy5idWZmZXIuZ2V0QnVmZmVyKCk7XG4gIH1cblxuICBwbGF5KGlkKSB7XG4gICAgaWYgKCF0aGlzLmxpc3RlblNvdW5kc1tpZF0pIHtcbiAgICAgIHRoaXMubGlzdGVuU291bmRzW2lkXSA9IG5ldyBTb3VuZCh0aGlzLmNvbnRleHQsIHRoaXMuYnVmZmVyLmdldFNvdW5kKGlkKSk7XG4gICAgICB0aGlzLmxpc3RlblNvdW5kc1tpZF0ucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0b3AoaWQpIHtcbiAgICBpZiAodGhpcy5saXN0ZW5Tb3VuZHNbaWRdKSB7XG4gICAgICB0aGlzLmxpc3RlblNvdW5kc1tpZF0uc3RvcCgpO1xuICAgICAgZGVsZXRlIHRoaXMubGlzdGVuU291bmRzW2lkXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgU291bmQsIEJ1ZmZlciwgU291bmRBUEkgfTtcbiJdfQ==
},{}],3:[function(require,module,exports){
"use strict";

var _Pad = _interopRequireDefault(require("./Pad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Styles Config
var styles = {
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
    piano: {
      name: "Piano",
      ext: "mp3",
      icon: "flaticon-piano"
    },
    dj: {
      name: "DJ Mix",
      ext: "wav",
      icon: "flaticon-boy"
    }
  },
  network: {}
};
/**
 * Settings Btn
 */
//  CREATE LIST WITH ALL STYLES

var listSettings = document.getElementById("panel");

for (var style in styles.local) {
  if (styles.local.hasOwnProperty(style)) {
    var element = styles.local[style]; // LocalStorage First

    if (!localStorage.getItem("style")) localStorage.setItem("style", style);
    var li = document.createElement("li");
    li.id = style;
    var icon = document.createElement("i");
    icon.classList.add(element.icon);
    li.appendChild(icon);
    li.appendChild(document.createTextNode(element.name));
    listSettings.appendChild(li);
  }
} // CREATE PAD


var pad = new _Pad.default(document.getElementById("pad"), styles);
console.log(pad); // MANAGE CLICK

var handlerSettings = function handlerSettings(e) {
  console.log(e.target.id); // localStorage edit

  localStorage.setItem("style", e.target.id);
  pad.changeStyle();
};

Array.from(document.querySelectorAll("#panel li")).map(function (li) {
  li.addEventListener("click", function (e) {
    return handlerSettings(e), false;
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNmMwZDE5OTEuanMiXSwibmFtZXMiOlsic3R5bGVzIiwibG9jYWwiLCJndWl0YXJFbGVjdHJvIiwibmFtZSIsImV4dCIsImljb24iLCJndWl0YXJBY291c3RpYyIsInBpYW5vIiwiZGoiLCJuZXR3b3JrIiwibGlzdFNldHRpbmdzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiaGFzT3duUHJvcGVydHkiLCJlbGVtZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJwYWQiLCJQYWQiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlclNldHRpbmdzIiwiZSIsInRhcmdldCIsImNoYW5nZVN0eWxlIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7O0FBRUE7QUFDQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLGFBQWEsRUFBRTtBQUNiQyxNQUFBQSxJQUFJLEVBQUUsZUFETztBQUViQyxNQUFBQSxHQUFHLEVBQUUsS0FGUTtBQUdiQyxNQUFBQSxJQUFJLEVBQUU7QUFITyxLQURWO0FBTUxDLElBQUFBLGNBQWMsRUFBRTtBQUNkSCxNQUFBQSxJQUFJLEVBQUUsaUJBRFE7QUFFZEMsTUFBQUEsR0FBRyxFQUFFLEtBRlM7QUFHZEMsTUFBQUEsSUFBSSxFQUFFO0FBSFEsS0FOWDtBQVdMRSxJQUFBQSxLQUFLLEVBQUU7QUFBRUosTUFBQUEsSUFBSSxFQUFFLE9BQVI7QUFBaUJDLE1BQUFBLEdBQUcsRUFBRSxLQUF0QjtBQUE2QkMsTUFBQUEsSUFBSSxFQUFFO0FBQW5DLEtBWEY7QUFZTEcsSUFBQUEsRUFBRSxFQUFFO0FBQUVMLE1BQUFBLElBQUksRUFBRSxRQUFSO0FBQWtCQyxNQUFBQSxHQUFHLEVBQUUsS0FBdkI7QUFBOEJDLE1BQUFBLElBQUksRUFBRTtBQUFwQztBQVpDLEdBRE07QUFlYkksRUFBQUEsT0FBTyxFQUFFO0FBZkksQ0FBZjtBQWtCQTs7O0FBR0E7O0FBQ0EsSUFBTUMsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBckI7O0FBQ0EsS0FBSyxJQUFNQyxLQUFYLElBQW9CYixNQUFNLENBQUNDLEtBQTNCLEVBQWtDO0FBQ2hDLE1BQUlELE1BQU0sQ0FBQ0MsS0FBUCxDQUFhYSxjQUFiLENBQTRCRCxLQUE1QixDQUFKLEVBQXdDO0FBQ3RDLFFBQU1FLE9BQU8sR0FBR2YsTUFBTSxDQUFDQyxLQUFQLENBQWFZLEtBQWIsQ0FBaEIsQ0FEc0MsQ0FHdEM7O0FBQ0EsUUFBSSxDQUFDRyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBTCxFQUFvQ0QsWUFBWSxDQUFDRSxPQUFiLENBQXFCLE9BQXJCLEVBQThCTCxLQUE5QjtBQUVwQyxRQUFNTSxFQUFFLEdBQUdSLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixJQUF2QixDQUFYO0FBQ0FELElBQUFBLEVBQUUsQ0FBQ0UsRUFBSCxHQUFRUixLQUFSO0FBQ0EsUUFBTVIsSUFBSSxHQUFHTSxRQUFRLENBQUNTLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBYjtBQUNBZixJQUFBQSxJQUFJLENBQUNpQixTQUFMLENBQWVDLEdBQWYsQ0FBbUJSLE9BQU8sQ0FBQ1YsSUFBM0I7QUFDQWMsSUFBQUEsRUFBRSxDQUFDSyxXQUFILENBQWVuQixJQUFmO0FBQ0FjLElBQUFBLEVBQUUsQ0FBQ0ssV0FBSCxDQUFlYixRQUFRLENBQUNjLGNBQVQsQ0FBd0JWLE9BQU8sQ0FBQ1osSUFBaEMsQ0FBZjtBQUVBTyxJQUFBQSxZQUFZLENBQUNjLFdBQWIsQ0FBeUJMLEVBQXpCO0FBQ0Q7QUFDRixDLENBRUQ7OztBQUNBLElBQU1PLEdBQUcsR0FBRyxJQUFJQyxZQUFKLENBQVFoQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUixFQUF3Q1osTUFBeEMsQ0FBWjtBQUNBNEIsT0FBTyxDQUFDQyxHQUFSLENBQVlILEdBQVosRSxDQUVBOztBQUNBLElBQU1JLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQUMsQ0FBQyxFQUFJO0FBQzNCSCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUUsQ0FBQyxDQUFDQyxNQUFGLENBQVNYLEVBQXJCLEVBRDJCLENBRTNCOztBQUNBTCxFQUFBQSxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJhLENBQUMsQ0FBQ0MsTUFBRixDQUFTWCxFQUF2QztBQUNBSyxFQUFBQSxHQUFHLENBQUNPLFdBQUo7QUFDRCxDQUxEOztBQU9BQyxLQUFLLENBQUNDLElBQU4sQ0FBV3hCLFFBQVEsQ0FBQ3lCLGdCQUFULENBQTBCLFdBQTFCLENBQVgsRUFBbURDLEdBQW5ELENBQXVELFVBQUFsQixFQUFFLEVBQUk7QUFDM0RBLEVBQUFBLEVBQUUsQ0FBQ21CLGdCQUFILENBQW9CLE9BQXBCLEVBQTZCLFVBQUFQLENBQUM7QUFBQSxXQUFLRCxlQUFlLENBQUNDLENBQUQsQ0FBZixFQUFvQixLQUF6QjtBQUFBLEdBQTlCO0FBQ0QsQ0FGRCIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFkIGZyb20gXCIuL1BhZFwiO1xuXG4vLyBTdHlsZXMgQ29uZmlnXG5jb25zdCBzdHlsZXMgPSB7XG4gIGxvY2FsOiB7XG4gICAgZ3VpdGFyRWxlY3Rybzoge1xuICAgICAgbmFtZTogXCJHdWl0YXIgRWxlY3RvXCIsXG4gICAgICBleHQ6IFwibXAzXCIsXG4gICAgICBpY29uOiBcImZsYXRpY29uLWNsYXNzaWMtZ3VpdGFyXCJcbiAgICB9LFxuICAgIGd1aXRhckFjb3VzdGljOiB7XG4gICAgICBuYW1lOiBcIkd1aXRhciBBY291c3RpY1wiLFxuICAgICAgZXh0OiBcIndhdlwiLFxuICAgICAgaWNvbjogXCJmbGF0aWNvbi1lbGVjdHJpYy1ndWl0YXJcIlxuICAgIH0sXG4gICAgcGlhbm86IHsgbmFtZTogXCJQaWFub1wiLCBleHQ6IFwibXAzXCIsIGljb246IFwiZmxhdGljb24tcGlhbm9cIiB9LFxuICAgIGRqOiB7IG5hbWU6IFwiREogTWl4XCIsIGV4dDogXCJ3YXZcIiwgaWNvbjogXCJmbGF0aWNvbi1ib3lcIiB9XG4gIH0sXG4gIG5ldHdvcms6IHt9XG59O1xuXG4vKipcbiAqIFNldHRpbmdzIEJ0blxuICovXG4vLyAgQ1JFQVRFIExJU1QgV0lUSCBBTEwgU1RZTEVTXG5jb25zdCBsaXN0U2V0dGluZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhbmVsXCIpO1xuZm9yIChjb25zdCBzdHlsZSBpbiBzdHlsZXMubG9jYWwpIHtcbiAgaWYgKHN0eWxlcy5sb2NhbC5oYXNPd25Qcm9wZXJ0eShzdHlsZSkpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gc3R5bGVzLmxvY2FsW3N0eWxlXTtcblxuICAgIC8vIExvY2FsU3RvcmFnZSBGaXJzdFxuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzdHlsZVwiKSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdHlsZVwiLCBzdHlsZSk7XG5cbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS5pZCA9IHN0eWxlO1xuICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgICBpY29uLmNsYXNzTGlzdC5hZGQoZWxlbWVudC5pY29uKTtcbiAgICBsaS5hcHBlbmRDaGlsZChpY29uKTtcbiAgICBsaS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShlbGVtZW50Lm5hbWUpKTtcblxuICAgIGxpc3RTZXR0aW5ncy5hcHBlbmRDaGlsZChsaSk7XG4gIH1cbn1cblxuLy8gQ1JFQVRFIFBBRFxuY29uc3QgcGFkID0gbmV3IFBhZChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhZFwiKSwgc3R5bGVzKTtcbmNvbnNvbGUubG9nKHBhZCk7XG5cbi8vIE1BTkFHRSBDTElDS1xuY29uc3QgaGFuZGxlclNldHRpbmdzID0gZSA9PiB7XG4gIGNvbnNvbGUubG9nKGUudGFyZ2V0LmlkKTtcbiAgLy8gbG9jYWxTdG9yYWdlIGVkaXRcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzdHlsZVwiLCBlLnRhcmdldC5pZCk7XG4gIHBhZC5jaGFuZ2VTdHlsZSgpO1xufTtcblxuQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiI3BhbmVsIGxpXCIpKS5tYXAobGkgPT4ge1xuICBsaS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiAoaGFuZGxlclNldHRpbmdzKGUpLCBmYWxzZSkpO1xufSk7XG4iXX0=
},{"./Pad":1}]},{},[3])