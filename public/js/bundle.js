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
  function MidiKeyboard(target) {
    _classCallCheck(this, MidiKeyboard);

    this.target = target; // INIT My Sound Lib

    this.sound = new _Sound.SoundAPI();
    this.sound.getFilesSounds(); // INIT PAD

    this.initGrid();
    this.initEvent();
  }

  _createClass(MidiKeyboard, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZC5qcyJdLCJuYW1lcyI6WyJNaWRpS2V5Ym9hcmQiLCJ0YXJnZXQiLCJzb3VuZCIsIlNvdW5kQVBJIiwiZ2V0RmlsZXNTb3VuZHMiLCJpbml0R3JpZCIsImluaXRFdmVudCIsImRpbUNhc2UiLCJNYXRoIiwiZmxvb3IiLCJkaW1DYXNlT25HcmlkIiwiY2xpZW50V2lkdGgiLCJ4IiwieSIsImNvdW50IiwiaSIsImoiLCJzcGFuIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaWQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsImRhdGFzZXQiLCJiZyIsInJhbmRvbSIsImFwcGVuZENoaWxkIiwiZSIsInNwYW5zIiwiY2hpbGROb2RlcyIsImtleUNvZGUiLCJsZW5ndGgiLCJwYXJzZUludCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlVbmlvblNwYW4iLCJiYWNrZ3JvdW5kQ29sb3IiLCJwbGF5IiwicmVtb3ZlIiwic3RvcCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7QUFFQTs7Ozs7Ozs7SUFFTUEsWTs7O0FBQ0osd0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkLENBRGtCLENBR2xCOztBQUNBLFNBQUtDLEtBQUwsR0FBYSxJQUFJQyxlQUFKLEVBQWI7QUFDQSxTQUFLRCxLQUFMLENBQVdFLGNBQVgsR0FMa0IsQ0FPbEI7O0FBQ0EsU0FBS0MsUUFBTDtBQUNBLFNBQUtDLFNBQUw7QUFDRDs7OzsrQkFFVTtBQUNULFVBQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBSyxLQUFoQixDQUFoQjtBQUNBLFVBQU1DLGFBQWEsR0FBRyxLQUFLVCxNQUFMLENBQVlVLFdBQVosR0FBMEJKLE9BQWhEO0FBRUEsVUFBSUssQ0FBQyxHQUFHLENBQVI7QUFBQSxVQUNFQyxDQUFDLEdBQUcsQ0FETjtBQUFBLFVBRUVDLEtBQUssR0FBRyxDQUZW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VUFBQU4sQ0FBQyxFQUFJO0FBQ3RDLFlBQU1mLElBQUksR0FBRyxLQUFJLENBQUNzQixZQUFMLENBQWtCUCxDQUFsQixDQUFiOztBQUNBLFlBQUlmLElBQUosRUFBVTtBQUNSQSxVQUFBQSxJQUFJLENBQUNHLFNBQUwsQ0FBZXNCLE1BQWYsQ0FBc0IsU0FBdEI7QUFDQXpCLFVBQUFBLElBQUksQ0FBQ00sS0FBTCxDQUFXaUIsZUFBWCxHQUE2QixhQUE3Qjs7QUFDQSxVQUFBLEtBQUksQ0FBQ3RDLEtBQUwsQ0FBV3lDLElBQVgsQ0FBZ0IxQixJQUFJLENBQUNLLEVBQXJCO0FBQ0Q7QUFDRixPQVBEO0FBUUQ7Ozs7OztlQUdZdEIsWSIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTb3VuZEFQSSB9IGZyb20gXCIuL1NvdW5kXCI7XG5cbmNsYXNzIE1pZGlLZXlib2FyZCB7XG4gIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuXG4gICAgLy8gSU5JVCBNeSBTb3VuZCBMaWJcbiAgICB0aGlzLnNvdW5kID0gbmV3IFNvdW5kQVBJKCk7XG4gICAgdGhpcy5zb3VuZC5nZXRGaWxlc1NvdW5kcygpO1xuXG4gICAgLy8gSU5JVCBQQURcbiAgICB0aGlzLmluaXRHcmlkKCk7XG4gICAgdGhpcy5pbml0RXZlbnQoKTtcbiAgfVxuXG4gIGluaXRHcmlkKCkge1xuICAgIGNvbnN0IGRpbUNhc2UgPSBNYXRoLmZsb29yKDI2IC8gNS4wOTkpO1xuICAgIGNvbnN0IGRpbUNhc2VPbkdyaWQgPSB0aGlzLnRhcmdldC5jbGllbnRXaWR0aCAvIGRpbUNhc2U7XG5cbiAgICBsZXQgeCA9IDAsXG4gICAgICB5ID0gMCxcbiAgICAgIGNvdW50ID0gMDtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGltQ2FzZTsgaSsrKSB7XG4gICAgICB4ID0gMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGltQ2FzZTsgaisrKSB7XG4gICAgICAgIC8vIEdFTkVSQVRFIEEgQ0FTRSBQUk9QU1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImNhc2VcIik7XG4gICAgICAgIHNwYW4uaWQgPSBjb3VudCsrO1xuXG4gICAgICAgIC8vIERJTVxuICAgICAgICBzcGFuLnN0eWxlLndpZHRoID0gYCR7ZGltQ2FzZU9uR3JpZH1weGA7XG4gICAgICAgIHNwYW4uc3R5bGUuaGVpZ2h0ID0gYCR7ZGltQ2FzZU9uR3JpZH1weGA7XG5cbiAgICAgICAgc3Bhbi5zdHlsZS5sZWZ0ID0gYCR7eH1weGA7XG4gICAgICAgIHNwYW4uc3R5bGUudG9wID0gYCR7eX1weGA7XG5cbiAgICAgICAgLy8gUmFuZG9tIENvbG9yXG4gICAgICAgIHNwYW4uZGF0YXNldC5iZyA9IGByZ2JhKCR7TWF0aC5mbG9vcihcbiAgICAgICAgICBNYXRoLnJhbmRvbSgpICogMjU2XG4gICAgICAgICl9LCAke01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDI1Nil9LCAke01hdGguZmxvb3IoXG4gICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NlxuICAgICAgICApfSwgMC44KWA7XG5cbiAgICAgICAgdGhpcy50YXJnZXQuYXBwZW5kQ2hpbGQoc3Bhbik7XG5cbiAgICAgICAgeCArPSBkaW1DYXNlT25HcmlkO1xuICAgICAgfVxuICAgICAgeSArPSBkaW1DYXNlT25HcmlkO1xuICAgIH1cbiAgfVxuXG4gIGtleVVuaW9uU3BhbihlKSB7XG4gICAgY29uc3Qgc3BhbnMgPSB0aGlzLnRhcmdldC5jaGlsZE5vZGVzO1xuXG4gICAgLy8gPiA2NSA8IDkwXG4gICAgY29uc3QgaWQgPSBlLmtleUNvZGUgLSA2NTtcbiAgICBpZiAoZS5rZXlDb2RlID49IDY1ICYmIGUua2V5Q29kZSA8PSA4OSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGFucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzcGFuID0gc3BhbnNbaV07XG4gICAgICAgIGlmIChwYXJzZUludChzcGFuLmlkKSA9PT0gaWQpIHtcbiAgICAgICAgICByZXR1cm4gc3BhbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaW5pdEV2ZW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgY29uc3Qgc3BhbiA9IHRoaXMua2V5VW5pb25TcGFuKGUpO1xuICAgICAgaWYgKHNwYW4pIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzcGFuLmRhdGFzZXQuYmc7XG4gICAgICAgIHRoaXMuc291bmQucGxheShzcGFuLmlkKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBlID0+IHtcbiAgICAgIGNvbnN0IHNwYW4gPSB0aGlzLmtleVVuaW9uU3BhbihlKTtcbiAgICAgIGlmIChzcGFuKSB7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICAgIHNwYW4uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICB0aGlzLnNvdW5kLnN0b3Aoc3Bhbi5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTWlkaUtleWJvYXJkO1xuIl19
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
  function SoundAPI() {
    _classCallCheck(this, SoundAPI);

    this.context = new (window.AudioContext || window.webkitAudioContext)();
    this.listenSounds = {};
    this.buffer = null; // SOUNDS FILES

    this.sounds = [];
    this.dest = "sounds/";
    this.style = {
      name: "guitar",
      ext: "mp3"
    };
  }

  _createClass(SoundAPI, [{
    key: "getFilesSounds",
    value: function getFilesSounds() {
      // GENERATE PATHS
      this.sounds = [];

      for (var i = 1; i < 26; i++) {
        var str = this.dest + this.style.name + "/";
        str += i + "." + this.style.ext;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdW5kLmpzIl0sIm5hbWVzIjpbIlNvdW5kIiwiY29udGV4dCIsImJ1ZmZlciIsImdhaW5Ob2RlIiwiY3JlYXRlR2FpbiIsInNvdXJjZSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImdhaW4iLCJzZXRWYWx1ZUF0VGltZSIsImN1cnJlbnRUaW1lIiwic2V0dXAiLCJzdGFydCIsImN0IiwiZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSIsInN0b3AiLCJCdWZmZXIiLCJ1cmxzIiwidXJsIiwiaW5kZXgiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwidGhpc0J1ZmZlciIsIm9ubG9hZCIsImRlY29kZUF1ZGlvRGF0YSIsInJlc3BvbnNlIiwic2VuZCIsImZvckVhY2giLCJsb2FkU291bmQiLCJTb3VuZEFQSSIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImxpc3RlblNvdW5kcyIsInNvdW5kcyIsImRlc3QiLCJzdHlsZSIsIm5hbWUiLCJleHQiLCJpIiwic3RyIiwicHVzaCIsImdldEJ1ZmZlciIsImlkIiwiZ2V0U291bmQiLCJwbGF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7QUFDSixpQkFBWUMsT0FBWixFQUFxQkMsTUFBckIsRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7NEJBRU87QUFDTixXQUFLQyxRQUFMLEdBQWdCLEtBQUtGLE9BQUwsQ0FBYUcsVUFBYixFQUFoQjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxLQUFLSixPQUFMLENBQWFLLGtCQUFiLEVBQWQ7QUFDQSxXQUFLRCxNQUFMLENBQVlILE1BQVosR0FBcUIsS0FBS0EsTUFBMUI7QUFDQSxXQUFLRyxNQUFMLENBQVlFLE9BQVosQ0FBb0IsS0FBS0os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WixDQUFpQkQsR0FBakI7QUFDRCxPQVBjLENBU2Y7OztBQUNBLFdBQUt6QyxNQUFMLEdBQWMsSUFBSWUsTUFBSixDQUFXLEtBQUtoQixPQUFoQixFQUF5QixLQUFLb0MsTUFBOUIsQ0FBZDtBQUNBLFdBQUtuQyxNQUFMLENBQVkyQyxTQUFaO0FBQ0Q7Ozt5QkFFSUMsRSxFQUFJO0FBQ1AsVUFBSSxDQUFDLEtBQUtWLFlBQUwsQ0FBa0JVLEVBQWxCLENBQUwsRUFBNEI7QUFDMUIsYUFBS1YsWUFBTCxDQUFrQlUsRUFBbEIsSUFBd0IsSUFBSTlDLEtBQUosQ0FBVSxLQUFLQyxPQUFmLEVBQXdCLEtBQUtDLE1BQUwsQ0FBWTZDLFFBQVosQ0FBcUJELEVBQXJCLENBQXhCLENBQXhCO0FBQ0EsYUFBS1YsWUFBTCxDQUFrQlUsRUFBbEIsRUFBc0JFLElBQXRCO0FBQ0Q7QUFDRjs7O3lCQUVJRixFLEVBQUk7QUFDUCxVQUFJLEtBQUtWLFlBQUwsQ0FBa0JVLEVBQWxCLENBQUosRUFBMkI7QUFDekIsYUFBS1YsWUFBTCxDQUFrQlUsRUFBbEIsRUFBc0I5QixJQUF0QjtBQUNBLGVBQU8sS0FBS29CLFlBQUwsQ0FBa0JVLEVBQWxCLENBQVA7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNsYXNzIFNvdW5kIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgYnVmZmVyKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgfVxuXG4gIHNldHVwKCkge1xuICAgIHRoaXMuZ2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgIHRoaXMuc291cmNlLmJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5nYWluTm9kZSk7XG4gICAgdGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKDAuOCwgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lKTtcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc291cmNlLnN0YXJ0KHRoaXMuY29udGV4dC5jdXJyZW50VGltZSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHZhciBjdCA9IHRoaXMuY29udGV4dC5jdXJyZW50VGltZSArIDAuNTtcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMSwgY3QpO1xuICAgIHRoaXMuc291cmNlLnN0b3AoY3QpO1xuICB9XG59XG5cbmNsYXNzIEJ1ZmZlciB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHVybHMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudXJscyA9IHVybHM7XG4gICAgdGhpcy5idWZmZXIgPSBbXTtcbiAgfVxuXG4gIGxvYWRTb3VuZCh1cmwsIGluZGV4KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJnZXRcIiwgdXJsLCB0cnVlKTtcbiAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICBsZXQgdGhpc0J1ZmZlciA9IHRoaXM7XG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFNhZmFyaSBkb2Vzbid0IHN1cHBvcnQgcHJvbWlzZSBiYXNlZCBzeW50YXhcbiAgICAgIHRoaXNCdWZmZXIuY29udGV4dC5kZWNvZGVBdWRpb0RhdGEocmVxdWVzdC5yZXNwb25zZSwgZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICAgIHRoaXNCdWZmZXIuYnVmZmVyW2luZGV4XSA9IGJ1ZmZlcjtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmVxdWVzdC5zZW5kKCk7XG4gIH1cblxuICBnZXRCdWZmZXIoKSB7XG4gICAgdGhpcy51cmxzLmZvckVhY2goKHVybCwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMubG9hZFNvdW5kKHVybCwgaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0U291bmQoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5idWZmZXJbaW5kZXhdO1xuICB9XG59XG5cbmNsYXNzIFNvdW5kQVBJIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gbmV3ICh3aW5kb3cuQXVkaW9Db250ZXh0IHx8IHdpbmRvdy53ZWJraXRBdWRpb0NvbnRleHQpKCk7XG4gICAgdGhpcy5saXN0ZW5Tb3VuZHMgPSB7fTtcbiAgICB0aGlzLmJ1ZmZlciA9IG51bGw7XG4gICAgLy8gU09VTkRTIEZJTEVTXG4gICAgdGhpcy5zb3VuZHMgPSBbXTtcbiAgICB0aGlzLmRlc3QgPSBcInNvdW5kcy9cIjtcbiAgICB0aGlzLnN0eWxlID0ge1xuICAgICAgbmFtZTogXCJndWl0YXJcIixcbiAgICAgIGV4dDogXCJtcDNcIlxuICAgIH07XG4gIH1cblxuICBnZXRGaWxlc1NvdW5kcygpIHtcbiAgICAvLyBHRU5FUkFURSBQQVRIU1xuICAgIHRoaXMuc291bmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyNjsgaSsrKSB7XG4gICAgICBsZXQgc3RyID0gdGhpcy5kZXN0ICsgdGhpcy5zdHlsZS5uYW1lICsgXCIvXCI7XG4gICAgICBzdHIgKz0gaSArIFwiLlwiICsgdGhpcy5zdHlsZS5leHQ7XG4gICAgICB0aGlzLnNvdW5kcy5wdXNoKHN0cik7XG4gICAgfVxuXG4gICAgLy8gTkVXIEJVRkZFUiB3aXRoIHNvdW5kc1xuICAgIHRoaXMuYnVmZmVyID0gbmV3IEJ1ZmZlcih0aGlzLmNvbnRleHQsIHRoaXMuc291bmRzKTtcbiAgICB0aGlzLmJ1ZmZlci5nZXRCdWZmZXIoKTtcbiAgfVxuXG4gIHBsYXkoaWQpIHtcbiAgICBpZiAoIXRoaXMubGlzdGVuU291bmRzW2lkXSkge1xuICAgICAgdGhpcy5saXN0ZW5Tb3VuZHNbaWRdID0gbmV3IFNvdW5kKHRoaXMuY29udGV4dCwgdGhpcy5idWZmZXIuZ2V0U291bmQoaWQpKTtcbiAgICAgIHRoaXMubGlzdGVuU291bmRzW2lkXS5wbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgc3RvcChpZCkge1xuICAgIGlmICh0aGlzLmxpc3RlblNvdW5kc1tpZF0pIHtcbiAgICAgIHRoaXMubGlzdGVuU291bmRzW2lkXS5zdG9wKCk7XG4gICAgICBkZWxldGUgdGhpcy5saXN0ZW5Tb3VuZHNbaWRdO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgeyBTb3VuZCwgQnVmZmVyLCBTb3VuZEFQSSB9O1xuIl19
},{}],3:[function(require,module,exports){
"use strict";

var _Pad = _interopRequireDefault(require("./Pad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  guitar: {
    ext: "mp3"
  }
};
var pad = new _Pad.default(document.getElementById("pad"));
console.log(pad);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOTJiMGUyZGEuanMiXSwibmFtZXMiOlsic3R5bGVzIiwiZ3VpdGFyIiwiZXh0IiwicGFkIiwiUGFkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7O0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLEVBQUFBLE1BQU0sRUFBRTtBQUFFQyxJQUFBQSxHQUFHLEVBQUU7QUFBUDtBQURLLENBQWY7QUFJQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUMsWUFBSixDQUFRQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBUixDQUFaO0FBRUFDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZTCxHQUFaIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYWQgZnJvbSBcIi4vUGFkXCI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZ3VpdGFyOiB7IGV4dDogXCJtcDNcIiB9XG59O1xuXG5jb25zdCBwYWQgPSBuZXcgUGFkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFkXCIpKTtcblxuY29uc29sZS5sb2cocGFkKTtcbiJdfQ==
},{"./Pad":1}]},{},[3])