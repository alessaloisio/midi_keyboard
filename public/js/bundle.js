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
          count = 1;

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

          _this.sound.play(span.id);
        }
      });
      document.addEventListener("keyup", function (e) {
        var span = _this.keyUnionSpan(e);

        if (span) {
          span.classList.remove("clicked");

          _this.sound.stop(span.id);
        }
      });
    }
  }]);

  return MidiKeyboard;
}();

var _default = MidiKeyboard;
exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlBhZC5qcyJdLCJuYW1lcyI6WyJNaWRpS2V5Ym9hcmQiLCJ0YXJnZXQiLCJzb3VuZCIsIlNvdW5kQVBJIiwiZ2V0RmlsZXNTb3VuZHMiLCJpbml0R3JpZCIsImluaXRFdmVudCIsImRpbUNhc2UiLCJNYXRoIiwiZmxvb3IiLCJkaW1DYXNlT25HcmlkIiwiY2xpZW50V2lkdGgiLCJ4IiwieSIsImNvdW50IiwiaSIsImoiLCJzcGFuIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaWQiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwibGVmdCIsInRvcCIsImJhY2tncm91bmRDb2xvciIsInJhbmRvbSIsInRvU3RyaW5nIiwiYXBwZW5kQ2hpbGQiLCJlIiwic3BhbnMiLCJjaGlsZE5vZGVzIiwia2V5Q29kZSIsImxlbmd0aCIsInBhcnNlSW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImtleVVuaW9uU3BhbiIsInBsYXkiLCJyZW1vdmUiLCJzdG9wIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOzs7Ozs7OztJQUVNQSxZOzs7QUFDSix3QkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQsQ0FEa0IsQ0FHbEI7O0FBQ0EsU0FBS0MsS0FBTCxHQUFhLElBQUlDLGVBQUosRUFBYjtBQUNBLFNBQUtELEtBQUwsQ0FBV0UsY0FBWCxHQUxrQixDQU9sQjs7QUFDQSxTQUFLQyxRQUFMO0FBQ0EsU0FBS0MsU0FBTDtBQUNEOzs7OytCQUVVO0FBQ1QsVUFBTUMsT0FBTyxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLLEtBQWhCLENBQWhCO0FBQ0EsVUFBTUMsYUFBYSxHQUFHLEtBQUtULE1BQUwsQ0FBWVUsV0FBWixHQUEwQkosT0FBaEQ7QUFFQSxVQUFJSyxDQUFDLEdBQUcsQ0FBUjtBQUFBLFVBQ0VDLENBQUMsR0FBRyxDQUROO0FBQUEsVUFFRUMsS0FBSyxHQUFHLENBRlY7O0FB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QUFXd0MsSUFBWCxDQUFnQnpCLElBQUksQ0FBQ0ssRUFBckI7QUFDRDtBQUNGLE9BTkQ7QUFPRDs7Ozs7O2VBR1l0QixZIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFNvdW5kQVBJIH0gZnJvbSBcIi4vU291bmRcIjtcblxuY2xhc3MgTWlkaUtleWJvYXJkIHtcbiAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG5cbiAgICAvLyBJTklUIE15IFNvdW5kIExpYlxuICAgIHRoaXMuc291bmQgPSBuZXcgU291bmRBUEkoKTtcbiAgICB0aGlzLnNvdW5kLmdldEZpbGVzU291bmRzKCk7XG5cbiAgICAvLyBJTklUIFBBRFxuICAgIHRoaXMuaW5pdEdyaWQoKTtcbiAgICB0aGlzLmluaXRFdmVudCgpO1xuICB9XG5cbiAgaW5pdEdyaWQoKSB7XG4gICAgY29uc3QgZGltQ2FzZSA9IE1hdGguZmxvb3IoMjYgLyA1LjA5OSk7XG4gICAgY29uc3QgZGltQ2FzZU9uR3JpZCA9IHRoaXMudGFyZ2V0LmNsaWVudFdpZHRoIC8gZGltQ2FzZTtcblxuICAgIGxldCB4ID0gMCxcbiAgICAgIHkgPSAwLFxuICAgICAgY291bnQgPSAxO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaW1DYXNlOyBpKyspIHtcbiAgICAgIHggPSAwO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBkaW1DYXNlOyBqKyspIHtcbiAgICAgICAgLy8gR0VORVJBVEUgQSBDQVNFIFBST1BTXG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiY2FzZVwiKTtcbiAgICAgICAgc3Bhbi5pZCA9IGNvdW50Kys7XG5cbiAgICAgICAgLy8gRElNXG4gICAgICAgIHNwYW4uc3R5bGUud2lkdGggPSBgJHtkaW1DYXNlT25HcmlkfXB4YDtcbiAgICAgICAgc3Bhbi5zdHlsZS5oZWlnaHQgPSBgJHtkaW1DYXNlT25HcmlkfXB4YDtcblxuICAgICAgICBzcGFuLnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgICAgICAgc3Bhbi5zdHlsZS50b3AgPSBgJHt5fXB4YDtcblxuICAgICAgICAvLyBSYW5kb20gQ29sb3JcbiAgICAgICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPVxuICAgICAgICAgIFwiI1wiICsgKChNYXRoLnJhbmRvbSgpICogMHhmZmZmZmYpIDw8IDApLnRvU3RyaW5nKDE2KTtcblxuICAgICAgICB0aGlzLnRhcmdldC5hcHBlbmRDaGlsZChzcGFuKTtcblxuICAgICAgICB4ICs9IGRpbUNhc2VPbkdyaWQ7XG4gICAgICB9XG4gICAgICB5ICs9IGRpbUNhc2VPbkdyaWQ7XG4gICAgfVxuICB9XG5cbiAga2V5VW5pb25TcGFuKGUpIHtcbiAgICBjb25zdCBzcGFucyA9IHRoaXMudGFyZ2V0LmNoaWxkTm9kZXM7XG5cbiAgICAvLyA+IDY1IDwgOTBcbiAgICBjb25zdCBpZCA9IGUua2V5Q29kZSAtIDY1ICsgMTtcbiAgICBpZiAoZS5rZXlDb2RlID49IDY1ICYmIGUua2V5Q29kZSA8PSA4OSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzcGFucy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBzcGFuID0gc3BhbnNbaV07XG4gICAgICAgIGlmIChwYXJzZUludChzcGFuLmlkKSA9PT0gaWQpIHtcbiAgICAgICAgICByZXR1cm4gc3BhbjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgaW5pdEV2ZW50KCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4ge1xuICAgICAgY29uc3Qgc3BhbiA9IHRoaXMua2V5VW5pb25TcGFuKGUpO1xuICAgICAgaWYgKHNwYW4pIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5wbGF5KHNwYW4uaWQpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGUgPT4ge1xuICAgICAgY29uc3Qgc3BhbiA9IHRoaXMua2V5VW5pb25TcGFuKGUpO1xuICAgICAgaWYgKHNwYW4pIHtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QucmVtb3ZlKFwiY2xpY2tlZFwiKTtcbiAgICAgICAgdGhpcy5zb3VuZC5zdG9wKHNwYW4uaWQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1pZGlLZXlib2FyZDtcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdW5kLmpzIl0sIm5hbWVzIjpbIlNvdW5kIiwiY29udGV4dCIsImJ1ZmZlciIsImdhaW5Ob2RlIiwiY3JlYXRlR2FpbiIsInNvdXJjZSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImdhaW4iLCJzZXRWYWx1ZUF0VGltZSIsImN1cnJlbnRUaW1lIiwic2V0dXAiLCJzdGFydCIsImN0IiwiZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSIsInN0b3AiLCJCdWZmZXIiLCJ1cmxzIiwidXJsIiwiaW5kZXgiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwidGhpc0J1ZmZlciIsIm9ubG9hZCIsImRlY29kZUF1ZGlvRGF0YSIsInJlc3BvbnNlIiwic2VuZCIsImZvckVhY2giLCJsb2FkU291bmQiLCJTb3VuZEFQSSIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsImxpc3RlblNvdW5kcyIsInNvdW5kcyIsImRlc3QiLCJzdHlsZSIsIm5hbWUiLCJleHQiLCJpIiwic3RyIiwicHVzaCIsImdldEJ1ZmZlciIsImlkIiwiZ2V0U291bmQiLCJwbGF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7QUFDSixpQkFBWUMsT0FBWixFQUFxQkMsTUFBckIsRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7NEJBRU87QUFDTixXQUFLQyxRQUFMLEdBQWdCLEtBQUtGLE9BQUwsQ0FBYUcsVUFBYixFQUFoQjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxLQUFLSixPQUFMLENBQWFLLGtCQUFiLEVBQWQ7QUFDQSxXQUFLRCxNQUFMLENBQVlILE1BQVosR0FBcUIsS0FBS0EsTUFBMUI7QUFDQSxXQUFLRyxNQUFMLENBQVlFLE9BQVosQ0FBb0IsS0FBS0os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WixDQUFpQkQsR0FBakI7QUFDRCxPQVBjLENBU2Y7OztBQUNBLFdBQUt6QyxNQUFMLEdBQWMsSUFBSWUsTUFBSixDQUFXLEtBQUtoQixPQUFoQixFQUF5QixLQUFLb0MsTUFBOUIsQ0FBZDtBQUNBLFdBQUtuQyxNQUFMLENBQVkyQyxTQUFaO0FBQ0Q7Ozt5QkFFSUMsRSxFQUFJO0FBQ1AsVUFBSSxDQUFDLEtBQUtWLFlBQUwsQ0FBa0JVLEVBQWxCLENBQUwsRUFBNEI7QUFDMUIsYUFBS1YsWUFBTCxDQUFrQlUsRUFBbEIsSUFBd0IsSUFBSTlDLEtBQUosQ0FBVSxLQUFLQyxPQUFmLEVBQXdCLEtBQUtDLE1BQUwsQ0FBWTZDLFFBQVosQ0FBcUJELEVBQXJCLENBQXhCLENBQXhCO0FBQ0EsYUFBS1YsWUFBTCxDQUFrQlUsRUFBbEIsRUFBc0JFLElBQXRCO0FBQ0Q7QUFDRjs7O3lCQUVJRixFLEVBQUk7QUFDUCxVQUFJLEtBQUtWLFlBQUwsQ0FBa0JVLEVBQWxCLENBQUosRUFBMkI7QUFDekIsYUFBS1YsWUFBTCxDQUFrQlUsRUFBbEIsRUFBc0I5QixJQUF0QjtBQUNBLGVBQU8sS0FBS29CLFlBQUwsQ0FBa0JVLEVBQWxCLENBQVA7QUFDRDtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmNsYXNzIFNvdW5kIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgYnVmZmVyKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgfVxuXG4gIHNldHVwKCkge1xuICAgIHRoaXMuZ2Fpbk5vZGUgPSB0aGlzLmNvbnRleHQuY3JlYXRlR2FpbigpO1xuICAgIHRoaXMuc291cmNlID0gdGhpcy5jb250ZXh0LmNyZWF0ZUJ1ZmZlclNvdXJjZSgpO1xuICAgIHRoaXMuc291cmNlLmJ1ZmZlciA9IHRoaXMuYnVmZmVyO1xuICAgIHRoaXMuc291cmNlLmNvbm5lY3QodGhpcy5nYWluTm9kZSk7XG4gICAgdGhpcy5nYWluTm9kZS5jb25uZWN0KHRoaXMuY29udGV4dC5kZXN0aW5hdGlvbik7XG5cbiAgICB0aGlzLmdhaW5Ob2RlLmdhaW4uc2V0VmFsdWVBdFRpbWUoMC44LCB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUpO1xuICB9XG5cbiAgcGxheSgpIHtcbiAgICB0aGlzLnNldHVwKCk7XG4gICAgdGhpcy5zb3VyY2Uuc3RhcnQodGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdmFyIGN0ID0gdGhpcy5jb250ZXh0LmN1cnJlbnRUaW1lICsgMC41O1xuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi5leHBvbmVudGlhbFJhbXBUb1ZhbHVlQXRUaW1lKDAuMDAxLCBjdCk7XG4gICAgdGhpcy5zb3VyY2Uuc3RvcChjdCk7XG4gIH1cbn1cblxuY2xhc3MgQnVmZmVyIHtcbiAgY29uc3RydWN0b3IoY29udGV4dCwgdXJscykge1xuICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgdGhpcy51cmxzID0gdXJscztcbiAgICB0aGlzLmJ1ZmZlciA9IFtdO1xuICB9XG5cbiAgbG9hZFNvdW5kKHVybCwgaW5kZXgpIHtcbiAgICBsZXQgcmVxdWVzdCA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHJlcXVlc3Qub3BlbihcImdldFwiLCB1cmwsIHRydWUpO1xuICAgIHJlcXVlc3QucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiO1xuICAgIGxldCB0aGlzQnVmZmVyID0gdGhpcztcbiAgICByZXF1ZXN0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgLy8gU2FmYXJpIGRvZXNuJ3Qgc3VwcG9ydCBwcm9taXNlIGJhc2VkIHN5bnRheFxuICAgICAgdGhpc0J1ZmZlci5jb250ZXh0LmRlY29kZUF1ZGlvRGF0YShyZXF1ZXN0LnJlc3BvbnNlLCBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgICAgdGhpc0J1ZmZlci5idWZmZXJbaW5kZXhdID0gYnVmZmVyO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICByZXF1ZXN0LnNlbmQoKTtcbiAgfVxuXG4gIGdldEJ1ZmZlcigpIHtcbiAgICB0aGlzLnVybHMuZm9yRWFjaCgodXJsLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5sb2FkU291bmQodXJsLCBpbmRleCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRTb3VuZChpbmRleCkge1xuICAgIHJldHVybiB0aGlzLmJ1ZmZlcltpbmRleF07XG4gIH1cbn1cblxuY2xhc3MgU291bmRBUEkge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBuZXcgKHdpbmRvdy5BdWRpb0NvbnRleHQgfHwgd2luZG93LndlYmtpdEF1ZGlvQ29udGV4dCkoKTtcbiAgICB0aGlzLmxpc3RlblNvdW5kcyA9IHt9O1xuICAgIHRoaXMuYnVmZmVyID0gbnVsbDtcbiAgICAvLyBTT1VORFMgRklMRVNcbiAgICB0aGlzLnNvdW5kcyA9IFtdO1xuICAgIHRoaXMuZGVzdCA9IFwic291bmRzL1wiO1xuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICBuYW1lOiBcImd1aXRhclwiLFxuICAgICAgZXh0OiBcIm1wM1wiXG4gICAgfTtcbiAgfVxuXG4gIGdldEZpbGVzU291bmRzKCkge1xuICAgIC8vIEdFTkVSQVRFIFBBVEhTXG4gICAgdGhpcy5zb3VuZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDI2OyBpKyspIHtcbiAgICAgIGxldCBzdHIgPSB0aGlzLmRlc3QgKyB0aGlzLnN0eWxlLm5hbWUgKyBcIi9cIjtcbiAgICAgIHN0ciArPSBpICsgXCIuXCIgKyB0aGlzLnN0eWxlLmV4dDtcbiAgICAgIHRoaXMuc291bmRzLnB1c2goc3RyKTtcbiAgICB9XG5cbiAgICAvLyBORVcgQlVGRkVSIHdpdGggc291bmRzXG4gICAgdGhpcy5idWZmZXIgPSBuZXcgQnVmZmVyKHRoaXMuY29udGV4dCwgdGhpcy5zb3VuZHMpO1xuICAgIHRoaXMuYnVmZmVyLmdldEJ1ZmZlcigpO1xuICB9XG5cbiAgcGxheShpZCkge1xuICAgIGlmICghdGhpcy5saXN0ZW5Tb3VuZHNbaWRdKSB7XG4gICAgICB0aGlzLmxpc3RlblNvdW5kc1tpZF0gPSBuZXcgU291bmQodGhpcy5jb250ZXh0LCB0aGlzLmJ1ZmZlci5nZXRTb3VuZChpZCkpO1xuICAgICAgdGhpcy5saXN0ZW5Tb3VuZHNbaWRdLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBzdG9wKGlkKSB7XG4gICAgaWYgKHRoaXMubGlzdGVuU291bmRzW2lkXSkge1xuICAgICAgdGhpcy5saXN0ZW5Tb3VuZHNbaWRdLnN0b3AoKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlblNvdW5kc1tpZF07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IFNvdW5kLCBCdWZmZXIsIFNvdW5kQVBJIH07XG4iXX0=
},{}],3:[function(require,module,exports){
"use strict";

var _Pad = _interopRequireDefault(require("./Pad"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pad = new _Pad.default(document.getElementById("pad"));
console.log(pad);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfZTNkYTg4MmEuanMiXSwibmFtZXMiOlsicGFkIiwiUGFkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7O0FBRUEsSUFBTUEsR0FBRyxHQUFHLElBQUlDLFlBQUosQ0FBUUMsUUFBUSxDQUFDQyxjQUFULENBQXdCLEtBQXhCLENBQVIsQ0FBWjtBQUNBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsR0FBWiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgUGFkIGZyb20gXCIuL1BhZFwiO1xuXG5jb25zdCBwYWQgPSBuZXcgUGFkKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFkXCIpKTtcbmNvbnNvbGUubG9nKHBhZCk7XG4iXX0=
},{"./Pad":1}]},{},[3])