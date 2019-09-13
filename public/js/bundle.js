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
      var _this = this;

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
          this.target.appendChild(span); // ADD EVENT LISTENER

          span.addEventListener("click", function (e) {
            return _this.handlerCase(e), false;
          });
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
      var _this2 = this;

      document.addEventListener("keydown", function (e) {
        return _this2.keyDown(_this2.keyUnionSpan(e)), false;
      });
      document.addEventListener("keyup", function (e) {
        return _this2.keyUp(_this2.keyUnionSpan(e)), false;
      });
    }
  }, {
    key: "keyDown",
    value: function keyDown(span) {
      if (span) {
        span.classList.add("clicked");
        span.style.backgroundColor = span.dataset.bg;
        this.sound.play(span.id);
      }
    }
  }, {
    key: "keyUp",
    value: function keyUp(span) {
      if (span && !span.classList.contains("lock")) {
        span.classList.remove("clicked");
        span.style.backgroundColor = "transparent";
        this.sound.stop(span.id);
      }
    }
  }, {
    key: "handlerCase",
    value: function handlerCase(e) {
      var span = e.target;

      if (span.classList.contains("clicked")) {
        span.classList.toggle("lock");
        this.keyUp(span);
      }
    }
  }]);

  return MidiKeyboard;
}();

var _default = MidiKeyboard;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZC5qcyJdLCJuYW1lcyI6WyJNaWRpS2V5Ym9hcmQiLCJ0YXJnZXQiLCJzdHlsZXMiLCJzb3VuZCIsIlNvdW5kQVBJIiwiZ2V0RmlsZXNTb3VuZHMiLCJpbml0R3JpZCIsImluaXRFdmVudCIsImRpbUNhc2UiLCJNYXRoIiwiZmxvb3IiLCJkaW1DYXNlT25HcmlkIiwiY2xpZW50V2lkdGgiLCJ4IiwieSIsImNvdW50IiwiaSIsImoiLCJzcGFuIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaWQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsImRhdGFzZXQiLCJiZyIsInJhbmRvbSIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJoYW5kbGVyQ2FzZSIsInNwYW5zIiwiY2hpbGROb2RlcyIsImtleUNvZGUiLCJsZW5ndGgiLCJwYXJzZUludCIsImtleURvd24iLCJrZXlVbmlvblNwYW4iLCJrZXlVcCIsImJhY2tncm91bmRDb2xvciIsInBsYXkiLCJjb250YWlucyIsInJlbW92ZSIsInN0b3AiLCJ0b2dnbGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBRUE7Ozs7Ozs7O0lBRU1BLFk7OztBQUNKLHdCQUFZQyxNQUFaLEVBQW9CQyxNQUFwQixFQUE0QjtBQUFBOztBQUMxQixTQUFLRCxNQUFMLEdBQWNBLE1BQWQsQ0FEMEIsQ0FHMUI7O0FBQ0EsU0FBS0UsS0FBTCxHQUFhLElBQUlDLGVBQUosQ0FBYUYsTUFBYixDQUFiO0FBQ0EsU0FBS0MsS0FBTCxDQUFXRSxjQUFYLEdBTDBCLENBTzFCOztBQUNBLFNBQUtDLFFBQUw7QUFDQSxTQUFLQyxTQUFMO0FBQ0Q7Ozs7a0NBRWE7QUFDWixXQUFLSixLQUFMLENBQVdFLGNBQVg7QUFDRDs7OytCQUVVO0FBQUE7O0FBQ1QsVUFBTUcsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLLEtBQWhCLENBQWhCO0FB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XCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNvdW5kQVBJIH0gZnJvbSBcIi4vU291bmRcIjtcblxuY2xhc3MgTWlkaUtleWJvYXJkIHtcbiAgY29uc3RydWN0b3IodGFyZ2V0LCBzdHlsZXMpIHtcbiAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcblxuICAgIC8vIElOSVQgTXkgU291bmQgTGliXG4gICAgdGhpcy5zb3VuZCA9IG5ldyBTb3VuZEFQSShzdHlsZXMpO1xuICAgIHRoaXMuc291bmQuZ2V0RmlsZXNTb3VuZHMoKTtcblxuICAgIC8vIElOSVQgUEFEXG4gICAgdGhpcy5pbml0R3JpZCgpO1xuICAgIHRoaXMuaW5pdEV2ZW50KCk7XG4gIH1cblxuICBjaGFuZ2VTdHlsZSgpIHtcbiAgICB0aGlzLnNvdW5kLmdldEZpbGVzU291bmRzKCk7XG4gIH1cblxuICBpbml0R3JpZCgpIHtcbiAgICBjb25zdCBkaW1DYXNlID0gTWF0aC5mbG9vcigyNiAvIDUuMDk5KTtcbiAgICBjb25zdCBkaW1DYXNlT25HcmlkID0gdGhpcy50YXJnZXQuY2xpZW50V2lkdGggLyBkaW1DYXNlO1xuXG4gICAgbGV0IHggPSAwLFxuICAgICAgeSA9IDAsXG4gICAgICBjb3VudCA9IDA7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpbUNhc2U7IGkrKykge1xuICAgICAgeCA9IDA7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGRpbUNhc2U7IGorKykge1xuICAgICAgICAvLyBHRU5FUkFURSBBIENBU0UgUFJPUFNcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJjYXNlXCIpO1xuICAgICAgICBzcGFuLmlkID0gY291bnQrKztcblxuICAgICAgICAvLyBESU1cbiAgICAgICAgc3Bhbi5zdHlsZS53aWR0aCA9IGAke2RpbUNhc2VPbkdyaWR9cHhgO1xuICAgICAgICBzcGFuLnN0eWxlLmhlaWdodCA9IGAke2RpbUNhc2VPbkdyaWR9cHhgO1xuXG4gICAgICAgIHNwYW4uc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuICAgICAgICBzcGFuLnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuXG4gICAgICAgIC8vIFJhbmRvbSBDb2xvclxuICAgICAgICBzcGFuLmRhdGFzZXQuYmcgPSBgcmdiYSgke01hdGguZmxvb3IoXG4gICAgICAgICAgTWF0aC5yYW5kb20oKSAqIDI1NlxuICAgICAgICApfSwgJHtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNTYpfSwgJHtNYXRoLmZsb29yKFxuICAgICAgICAgIE1hdGgucmFuZG9tKCkgKiAyNTZcbiAgICAgICAgKX0sIDAuOClgO1xuXG4gICAgICAgIHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICAgIC8vIEFERCBFVkVOVCBMSVNURU5FUlxuICAgICAgICBzcGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+ICh0aGlzLmhhbmRsZXJDYXNlKGUpLCBmYWxzZSkpO1xuXG4gICAgICAgIHggKz0gZGltQ2FzZU9uR3JpZDtcbiAgICAgIH1cbiAgICAgIHkgKz0gZGltQ2FzZU9uR3JpZDtcbiAgICB9XG4gIH1cblxuICBrZXlVbmlvblNwYW4oZSkge1xuICAgIGNvbnN0IHNwYW5zID0gdGhpcy50YXJnZXQuY2hpbGROb2RlcztcblxuICAgIC8vID4gNjUgPCA5MFxuICAgIGNvbnN0IGlkID0gZS5rZXlDb2RlIC0gNjU7XG4gICAgaWYgKGUua2V5Q29kZSA+PSA2NSAmJiBlLmtleUNvZGUgPD0gODkpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3BhbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHNwYW5zW2ldO1xuICAgICAgICBpZiAocGFyc2VJbnQoc3Bhbi5pZCkgPT09IGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHNwYW47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGluaXRFdmVudCgpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJrZXlkb3duXCIsXG4gICAgICBlID0+ICh0aGlzLmtleURvd24odGhpcy5rZXlVbmlvblNwYW4oZSkpLCBmYWxzZSlcbiAgICApO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcImtleXVwXCIsXG4gICAgICBlID0+ICh0aGlzLmtleVVwKHRoaXMua2V5VW5pb25TcGFuKGUpKSwgZmFsc2UpXG4gICAgKTtcbiAgfVxuXG4gIGtleURvd24oc3Bhbikge1xuICAgIGlmIChzcGFuKSB7XG4gICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBzcGFuLmRhdGFzZXQuYmc7XG4gICAgICB0aGlzLnNvdW5kLnBsYXkoc3Bhbi5pZCk7XG4gICAgfVxuICB9XG5cbiAga2V5VXAoc3Bhbikge1xuICAgIGlmIChzcGFuICYmICFzcGFuLmNsYXNzTGlzdC5jb250YWlucyhcImxvY2tcIikpIHtcbiAgICAgIHNwYW4uY2xhc3NMaXN0LnJlbW92ZShcImNsaWNrZWRcIik7XG4gICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwidHJhbnNwYXJlbnRcIjtcbiAgICAgIHRoaXMuc291bmQuc3RvcChzcGFuLmlkKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVyQ2FzZShlKSB7XG4gICAgY29uc3Qgc3BhbiA9IGUudGFyZ2V0O1xuICAgIGlmIChzcGFuLmNsYXNzTGlzdC5jb250YWlucyhcImNsaWNrZWRcIikpIHtcbiAgICAgIHNwYW4uY2xhc3NMaXN0LnRvZ2dsZShcImxvY2tcIik7XG4gICAgICB0aGlzLmtleVVwKHNwYW4pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNaWRpS2V5Ym9hcmQ7XG4iXX0=
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
      this.source.loop = true;
      this.source.connect(this.gainNode);
      this.gainNode.connect(this.context.destination); // this.gainNode.gain.setValueAtTime(0.8, this.context.currentTime);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdW5kLmpzIl0sIm5hbWVzIjpbIlNvdW5kIiwiY29udGV4dCIsImJ1ZmZlciIsImdhaW5Ob2RlIiwiY3JlYXRlR2FpbiIsInNvdXJjZSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsImxvb3AiLCJjb25uZWN0IiwiZGVzdGluYXRpb24iLCJzZXR1cCIsInN0YXJ0IiwiY3VycmVudFRpbWUiLCJjdCIsImdhaW4iLCJleHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lIiwic3RvcCIsIkJ1ZmZlciIsInVybHMiLCJ1cmwiLCJpbmRleCIsInJlcXVlc3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJyZXNwb25zZVR5cGUiLCJ0aGlzQnVmZmVyIiwib25sb2FkIiwiZGVjb2RlQXVkaW9EYXRhIiwicmVzcG9uc2UiLCJzZW5kIiwiZm9yRWFjaCIsImxvYWRTb3VuZCIsIlNvdW5kQVBJIiwic3R5bGVzIiwid2luZG93IiwiQXVkaW9Db250ZXh0Iiwid2Via2l0QXVkaW9Db250ZXh0IiwibGlzdGVuU291bmRzIiwic291bmRzIiwiZGVzdCIsInN0eWxlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImkiLCJzdHIiLCJsb2NhbCIsImV4dCIsInB1c2giLCJnZXRCdWZmZXIiLCJpZCIsImdldFNvdW5kIiwicGxheSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7SUFFTUEsSzs7O0FBQ0osaUJBQVlDLE9BQVosRUFBcUJDLE1BQXJCLEVBQTZCO0FBQUE7O0FBQzNCLFNBQUtELE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OzRCQUVPO0FBQ04sV0FBS0MsUUFBTCxHQUFnQixLQUFLRixPQUFMLENBQWFHLFVBQWIsRUFBaEI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsS0FBS0osT0FBTCxDQUFhSyxrQkFBYixFQUFkO0FBQ0EsV0FBS0QsTUFBTCxDQUFZSCxNQUFaLEdBQXFCLEtBQUtBLE1BQTFCO0FBQ0EsV0FBS0csTUFB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QUtSLE1BQUwsQ0FBWVMsSUFBWixDQUFpQkgsR0FBakI7QUFDRCxPQVZjLENBWWY7OztBQUNBLFdBQUsxQyxNQUFMLEdBQWMsSUFBSWUsTUFBSixDQUFXLEtBQUtoQixPQUFoQixFQUF5QixLQUFLcUMsTUFBOUIsQ0FBZDtBQUNBLFdBQUtwQyxNQUFMLENBQVk4QyxTQUFaO0FBQ0Q7Ozt5QkFFSUMsRSxFQUFJO0FBQ1AsVUFBSSxDQUFDLEtBQUtaLFlBQUwsQ0FBa0JZLEVBQWxCLENBQUwsRUFBNEI7QUFDMUIsYUFBS1osWUFBTCxDQUFrQlksRUFBbEIsSUFBd0IsSUFBSWpELEtBQUosQ0FBVSxLQUFLQyxPQUFmLEVBQXdCLEtBQUtDLE1BQUwsQ0FBWWdELFFBQVosQ0FBcUJELEVBQXJCLENBQXhCLENBQXhCO0FBQ0EsYUFBS1osWUFBTCxDQUFrQlksRUFBbEIsRUFBc0JFLElBQXRCO0FBQ0Q7QUFDRjs7O3lCQUVJRixFLEVBQUk7QUFDUCxVQUFJLEtBQUtaLFlBQUwsQ0FBa0JZLEVBQWxCLENBQUosRUFBMkI7QUFDekIsYUFBS1osWUFBTCxDQUFrQlksRUFBbEIsRUFBc0JqQyxJQUF0QjtBQUNBLGVBQU8sS0FBS3FCLFlBQUwsQ0FBa0JZLEVBQWxCLENBQVA7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNsYXNzIFNvdW5kIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgYnVmZmVyKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgfVxuXG4gIHNldHVwKCkge1xuICAgIHRoaXMuZ2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgIHRoaXMuc291cmNlLmJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgIHRoaXMuc291cmNlLmxvb3AgPSB0cnVlO1xuICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5nYWluTm9kZSk7XG4gICAgdGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbik7XG4gICAgLy8gdGhpcy5nYWluTm9kZS5nYWluLnNldFZhbHVlQXRUaW1lKDAuOCwgdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lKTtcbiAgfVxuXG4gIHBsYXkoKSB7XG4gICAgdGhpcy5zZXR1cCgpO1xuICAgIHRoaXMuc291cmNlLnN0YXJ0KHRoaXMuY29udGV4dC5jdXJyZW50VGltZSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHZhciBjdCA9IHRoaXMuY29udGV4dC5jdXJyZW50VGltZSArIDAuNTtcbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4uZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSgwLjAwMSwgY3QpO1xuICAgIHRoaXMuc291cmNlLnN0b3AoY3QpO1xuICB9XG59XG5cbmNsYXNzIEJ1ZmZlciB7XG4gIGNvbnN0cnVjdG9yKGNvbnRleHQsIHVybHMpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMudXJscyA9IHVybHM7XG4gICAgdGhpcy5idWZmZXIgPSBbXTtcbiAgfVxuXG4gIGxvYWRTb3VuZCh1cmwsIGluZGV4KSB7XG4gICAgbGV0IHJlcXVlc3QgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICByZXF1ZXN0Lm9wZW4oXCJnZXRcIiwgdXJsLCB0cnVlKTtcbiAgICByZXF1ZXN0LnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICBsZXQgdGhpc0J1ZmZlciA9IHRoaXM7XG4gICAgcmVxdWVzdC5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbiAgICAgIC8vIFNhZmFyaSBkb2Vzbid0IHN1cHBvcnQgcHJvbWlzZSBiYXNlZCBzeW50YXhcbiAgICAgIHRoaXNCdWZmZXIuY29udGV4dC5kZWNvZGVBdWRpb0RhdGEocmVxdWVzdC5yZXNwb25zZSwgZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICAgIHRoaXNCdWZmZXIuYnVmZmVyW2luZGV4XSA9IGJ1ZmZlcjtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgcmVxdWVzdC5zZW5kKCk7XG4gIH1cblxuICBnZXRCdWZmZXIoKSB7XG4gICAgdGhpcy51cmxzLmZvckVhY2goKHVybCwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMubG9hZFNvdW5kKHVybCwgaW5kZXgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0U291bmQoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpcy5idWZmZXJbaW5kZXhdO1xuICB9XG59XG5cbmNsYXNzIFNvdW5kQVBJIHtcbiAgY29uc3RydWN0b3Ioc3R5bGVzKSB7XG4gICAgdGhpcy5zdHlsZXMgPSBzdHlsZXM7XG5cbiAgICB0aGlzLmNvbnRleHQgPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcbiAgICB0aGlzLmxpc3RlblNvdW5kcyA9IHt9O1xuICAgIHRoaXMuYnVmZmVyID0gbnVsbDtcbiAgICAvLyBTT1VORFMgRklMRVNcbiAgICB0aGlzLnNvdW5kcyA9IFtdO1xuICAgIHRoaXMuZGVzdCA9IFwic291bmRzL1wiO1xuICB9XG5cbiAgZ2V0RmlsZXNTb3VuZHMoKSB7XG4gICAgLy8gR0VORVJBVEUgUEFUSFNcbiAgICB0aGlzLnNvdW5kcyA9IFtdO1xuXG4gICAgY29uc3Qgc3R5bGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0eWxlXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCAyNjsgaSsrKSB7XG4gICAgICBsZXQgc3RyID0gdGhpcy5kZXN0ICsgc3R5bGUgKyBcIi9cIjtcbiAgICAgIHN0ciArPSBpICsgXCIuXCIgKyB0aGlzLnN0eWxlcy5sb2NhbFtzdHlsZV0uZXh0O1xuICAgICAgdGhpcy5zb3VuZHMucHVzaChzdHIpO1xuICAgIH1cblxuICAgIC8vIE5FVyBCVUZGRVIgd2l0aCBzb3VuZHNcbiAgICB0aGlzLmJ1ZmZlciA9IG5ldyBCdWZmZXIodGhpcy5jb250ZXh0LCB0aGlzLnNvdW5kcyk7XG4gICAgdGhpcy5idWZmZXIuZ2V0QnVmZmVyKCk7XG4gIH1cblxuICBwbGF5KGlkKSB7XG4gICAgaWYgKCF0aGlzLmxpc3RlblNvdW5kc1tpZF0pIHtcbiAgICAgIHRoaXMubGlzdGVuU291bmRzW2lkXSA9IG5ldyBTb3VuZCh0aGlzLmNvbnRleHQsIHRoaXMuYnVmZmVyLmdldFNvdW5kKGlkKSk7XG4gICAgICB0aGlzLmxpc3RlblNvdW5kc1tpZF0ucGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIHN0b3AoaWQpIHtcbiAgICBpZiAodGhpcy5saXN0ZW5Tb3VuZHNbaWRdKSB7XG4gICAgICB0aGlzLmxpc3RlblNvdW5kc1tpZF0uc3RvcCgpO1xuICAgICAgZGVsZXRlIHRoaXMubGlzdGVuU291bmRzW2lkXTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IHsgU291bmQsIEJ1ZmZlciwgU291bmRBUEkgfTtcbiJdfQ==
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


var pad = new _Pad.default(document.getElementById("pad"), styles); // console.log(pad);
// MANAGE CLICK

var handlerSettings = function handlerSettings(e) {
  // console.log(e.target.id);
  // localStorage edit
  localStorage.setItem("style", e.target.id);
  pad.changeStyle();
};

Array.from(document.querySelectorAll("#panel li")).map(function (li) {
  li.addEventListener("click", function (e) {
    return handlerSettings(e), false;
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNjliMjA0YzEuanMiXSwibmFtZXMiOlsic3R5bGVzIiwibG9jYWwiLCJndWl0YXJFbGVjdHJvIiwibmFtZSIsImV4dCIsImljb24iLCJndWl0YXJBY291c3RpYyIsInBpYW5vIiwiZGoiLCJuZXR3b3JrIiwibGlzdFNldHRpbmdzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiaGFzT3duUHJvcGVydHkiLCJlbGVtZW50IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJwYWQiLCJQYWQiLCJoYW5kbGVyU2V0dGluZ3MiLCJlIiwidGFyZ2V0IiwiY2hhbmdlU3R5bGUiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFwIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7Ozs7QUFFQTtBQUNBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsYUFBYSxFQUFFO0FBQ2JDLE1BQUFBLElBQUksRUFBRSxlQURPO0FBRWJDLE1BQUFBLEdBQUcsRUFBRSxLQUZRO0FBR2JDLE1BQUFBLElBQUksRUFBRTtBQUhPLEtBRFY7QUFNTEMsSUFBQUEsY0FBYyxFQUFFO0FBQ2RILE1BQUFBLElBQUksRUFBRSxpQkFEUTtBQUVkQyxNQUFBQSxHQUFHLEVBQUUsS0FGUztBQUdkQyxNQUFBQSxJQUFJLEVBQUU7QUFIUSxLQU5YO0FBV0xFLElBQUFBLEtBQUssRUFBRTtBQUFFSixNQUFBQSxJQUFJLEVBQUUsT0FBUjtBQUFpQkMsTUFBQUEsR0FBRyxFQUFFLEtBQXRCO0FBQTZCQyxNQUFBQSxJQUFJLEVBQUU7QUFBbkMsS0FYRjtBQVlMRyxJQUFBQSxFQUFFLEVBQUU7QUFBRUwsTUFBQUEsSUFBSSxFQUFFLFFBQVI7QUFBa0JDLE1BQUFBLEdBQUcsRUFBRSxLQUF2QjtBQUE4QkMsTUFBQUEsSUFBSSxFQUFFO0FBQXBDO0FBWkMsR0FETTtBQWViSSxFQUFBQSxPQUFPLEVBQUU7QUFmSSxDQUFmO0FBa0JBOzs7QUFHQTs7QUFDQSxJQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFyQjs7QUFDQSxLQUFLLElBQU1DLEtBQVgsSUFBb0JiLE1BQU0sQ0FBQ0MsS0FBM0IsRUFBa0M7QUFDaEMsTUFBSUQsTUFBTSxDQUFDQyxLQUFQLENBQWFhLGNBQWIsQ0FBNEJELEtBQTVCLENBQUosRUFBd0M7QUFDdEMsUUFBTUUsT0FBTyxHQUFHZixNQUFNLENBQUNDLEtBQVAsQ0FBYVksS0FBYixDQUFoQixDQURzQyxDQUd0Qzs7QUFDQSxRQUFJLENBQUNHLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFMLEVBQW9DRCxZQUFZLENBQUNFLE9BQWIsQ0FBcUIsT0FBckIsRUFBOEJMLEtBQTlCO0FBRXBDLFFBQU1NLEVBQUUsR0FBR1IsUUFBUSxDQUFDUyxhQUFULENBQXVCLElBQXZCLENBQVg7QUFDQUQsSUFBQUEsRUFBRSxDQUFDRSxFQUFILEdBQVFSLEtBQVI7QUFDQSxRQUFNUixJQUFJLEdBQUdNLFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixHQUF2QixDQUFiO0FBQ0FmLElBQUFBLElBQUksQ0FBQ2lCLFNBQUwsQ0FBZUMsR0FBZixDQUFtQlIsT0FBTyxDQUFDVixJQUEzQjtBQUNBYyxJQUFBQSxFQUFFLENBQUNLLFdBQUgsQ0FBZW5CLElBQWY7QUFDQWMsSUFBQUEsRUFBRSxDQUFDSyxXQUFILENBQWViLFFBQVEsQ0FBQ2MsY0FBVCxDQUF3QlYsT0FBTyxDQUFDWixJQUFoQyxDQUFmO0FBRUFPLElBQUFBLFlBQVksQ0FBQ2MsV0FBYixDQUF5QkwsRUFBekI7QUFDRDtBQUNGLEMsQ0FFRDs7O0FBQ0EsSUFBTU8sR0FBRyxHQUFHLElBQUlDLFlBQUosQ0FBUWhCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixDQUFSLEVBQXdDWixNQUF4QyxDQUFaLEMsQ0FDQTtBQUVBOztBQUNBLElBQU00QixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLENBQUFDLENBQUMsRUFBSTtBQUMzQjtBQUNBO0FBQ0FiLEVBQUFBLFlBQVksQ0FBQ0UsT0FBYixDQUFxQixPQUFyQixFQUE4QlcsQ0FBQyxDQUFDQyxNQUFGLENBQVNULEVBQXZDO0FBQ0FLLEVBQUFBLEdBQUcsQ0FBQ0ssV0FBSjtBQUNELENBTEQ7O0FBT0FDLEtBQUssQ0FBQ0MsSUFBTixDQUFXdEIsUUFBUSxDQUFDdUIsZ0JBQVQsQ0FBMEIsV0FBMUIsQ0FBWCxFQUFtREMsR0FBbkQsQ0FBdUQsVUFBQWhCLEVBQUUsRUFBSTtBQUMzREEsRUFBQUEsRUFBRSxDQUFDaUIsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBQVAsQ0FBQztBQUFBLFdBQUtELGVBQWUsQ0FBQ0MsQ0FBRCxDQUFmLEVBQW9CLEtBQXpCO0FBQUEsR0FBOUI7QUFDRCxDQUZEIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBQYWQgZnJvbSBcIi4vUGFkXCI7XG5cbi8vIFN0eWxlcyBDb25maWdcbmNvbnN0IHN0eWxlcyA9IHtcbiAgbG9jYWw6IHtcbiAgICBndWl0YXJFbGVjdHJvOiB7XG4gICAgICBuYW1lOiBcIkd1aXRhciBFbGVjdG9cIixcbiAgICAgIGV4dDogXCJtcDNcIixcbiAgICAgIGljb246IFwiZmxhdGljb24tY2xhc3NpYy1ndWl0YXJcIlxuICAgIH0sXG4gICAgZ3VpdGFyQWNvdXN0aWM6IHtcbiAgICAgIG5hbWU6IFwiR3VpdGFyIEFjb3VzdGljXCIsXG4gICAgICBleHQ6IFwid2F2XCIsXG4gICAgICBpY29uOiBcImZsYXRpY29uLWVsZWN0cmljLWd1aXRhclwiXG4gICAgfSxcbiAgICBwaWFubzogeyBuYW1lOiBcIlBpYW5vXCIsIGV4dDogXCJtcDNcIiwgaWNvbjogXCJmbGF0aWNvbi1waWFub1wiIH0sXG4gICAgZGo6IHsgbmFtZTogXCJESiBNaXhcIiwgZXh0OiBcIndhdlwiLCBpY29uOiBcImZsYXRpY29uLWJveVwiIH1cbiAgfSxcbiAgbmV0d29yazoge31cbn07XG5cbi8qKlxuICogU2V0dGluZ3MgQnRuXG4gKi9cbi8vICBDUkVBVEUgTElTVCBXSVRIIEFMTCBTVFlMRVNcbmNvbnN0IGxpc3RTZXR0aW5ncyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFuZWxcIik7XG5mb3IgKGNvbnN0IHN0eWxlIGluIHN0eWxlcy5sb2NhbCkge1xuICBpZiAoc3R5bGVzLmxvY2FsLmhhc093blByb3BlcnR5KHN0eWxlKSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBzdHlsZXMubG9jYWxbc3R5bGVdO1xuXG4gICAgLy8gTG9jYWxTdG9yYWdlIEZpcnN0XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInN0eWxlXCIpKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0eWxlXCIsIHN0eWxlKTtcblxuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpLmlkID0gc3R5bGU7XG4gICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGljb24uY2xhc3NMaXN0LmFkZChlbGVtZW50Lmljb24pO1xuICAgIGxpLmFwcGVuZENoaWxkKGljb24pO1xuICAgIGxpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGVsZW1lbnQubmFtZSkpO1xuXG4gICAgbGlzdFNldHRpbmdzLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxufVxuXG4vLyBDUkVBVEUgUEFEXG5jb25zdCBwYWQgPSBuZXcgUGFkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFkXCIpLCBzdHlsZXMpO1xuLy8gY29uc29sZS5sb2cocGFkKTtcblxuLy8gTUFOQUdFIENMSUNLXG5jb25zdCBoYW5kbGVyU2V0dGluZ3MgPSBlID0+IHtcbiAgLy8gY29uc29sZS5sb2coZS50YXJnZXQuaWQpO1xuICAvLyBsb2NhbFN0b3JhZ2UgZWRpdFxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInN0eWxlXCIsIGUudGFyZ2V0LmlkKTtcbiAgcGFkLmNoYW5nZVN0eWxlKCk7XG59O1xuXG5BcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIjcGFuZWwgbGlcIikpLm1hcChsaSA9PiB7XG4gIGxpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IChoYW5kbGVyU2V0dGluZ3MoZSksIGZhbHNlKSk7XG59KTtcbiJdfQ==
},{"./Pad":1}]},{},[3])