(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
    this.preset = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNvdW5kLmpzIl0sIm5hbWVzIjpbIlNvdW5kIiwiY29udGV4dCIsImJ1ZmZlciIsImdhaW5Ob2RlIiwiY3JlYXRlR2FpbiIsInNvdXJjZSIsImNyZWF0ZUJ1ZmZlclNvdXJjZSIsImNvbm5lY3QiLCJkZXN0aW5hdGlvbiIsImdhaW4iLCJzZXRWYWx1ZUF0VGltZSIsImN1cnJlbnRUaW1lIiwic2V0dXAiLCJzdGFydCIsImN0IiwiZXhwb25lbnRpYWxSYW1wVG9WYWx1ZUF0VGltZSIsInN0b3AiLCJCdWZmZXIiLCJ1cmxzIiwidXJsIiwiaW5kZXgiLCJyZXF1ZXN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwicmVzcG9uc2VUeXBlIiwidGhpc0J1ZmZlciIsIm9ubG9hZCIsImRlY29kZUF1ZGlvRGF0YSIsInJlc3BvbnNlIiwic2VuZCIsImZvckVhY2giLCJsb2FkU291bmQiLCJTb3VuZEFQSSIsIndpbmRvdyIsIkF1ZGlvQ29udGV4dCIsIndlYmtpdEF1ZGlvQ29udGV4dCIsInByZXNldCIsImxpc3RlblNvdW5kcyIsInNvdW5kcyIsImRlc3QiLCJzdHlsZSIsIm5hbWUiLCJleHQiLCJpIiwic3RyIiwicHVzaCIsImdldEJ1ZmZlciIsImlkIiwiZ2V0U291bmQiLCJwbGF5Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztJQUVNQSxLOzs7QUFDSixpQkFBWUMsT0FBWixFQUFxQkMsTUFBckIsRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7Ozs7NEJBRU87QUFDTixXQUFLQyxRQUFMLEdBQWdCLEtBQUtGLE9BQUwsQ0FBYUcsVUFBYixFQUFoQjtBQUNBLFdBQUtDLE1BQUwsR0FBYyxLQUFLSixPQUFMLENBQWFLLGtCQUFiLEVBQWQ7QUFDQSxXQUFLRCxNQUFMLENBQVlILE1BQVosR0FBcUIsS0FBS0EsTUFBMUI7QUFDQSxXQUFLRyxNQUFMLENBQVlFLE9BQVosQ0FBb0IsS0FBS0osUUFBekI7QUFDQSxXQUFLQSxRQUFMLENBQWNJLE9BQWQsQ0FBc0IsS0FBS04sT0FBTCxDQUFhTyxXQUFuQztBQUVBLFdBQUtMLFFBQUwsQ0FBY00sSUFBZCxDQUFtQkMsY0FBbkIsQ0FBa0MsR0FBbEMsRUFBdUMsS0FBS1QsT0FBTCxDQUFhVSxXQUFwRDtBQUNEOzs7MkJBRU07QUFDTCxXQUFLQyxLQUFMO0FBQ0EsV0FBS1AsTUFBTCxDQUFZUSxLQUFaLENBQWtCLEtBQUtaLE9BQUwsQ0FBYVUsV0FBL0I7QUFDRDs7OzJCQUVNO0FBQ0wsVUFBSUcsRUFBRSxHQUFHLEtBQUtiLE9BQUwsQ0FBYVUsV0FBYixHQUEyQixHQUFwQztBQUNBLFdBQUtSLFFBQUwsQ0FBY00sSUFBZCxDQUFtQk0sNEJBQW5CLENBQWdELEtBQWhELEVBQXVERCxFQUF2RDtBQUNBLFdBQUtULE1BQUwsQ0FBWVcsSUFBWixDQUFpQkYsRUFBakI7QUFDRDs7Ozs7Ozs7SUFHR0csTTs7O0FBQ0osa0JBQVloQixPQUFaLEVBQXFCaUIsSUFBckIsRUFBMkI7QUFBQTs7QUFDekIsU0FBS2pCLE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtpQixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLaEIsTUFBTCxHQUFjLEVBQWQ7QUFDRDs7Ozs4QkFFU2lCLEcsRUFBS0MsSyxFQUFPO0FBQ3BCLFVBQUlDLE9BQU8sR0FBRyxJQUFJQyxjQUFKLEVBQWQ7QUFDQUQsTUFBQUEsT0FBTyxDQUFDRSxJQUFSLENBQWEsS0FBYixFQUFvQkosR0FBcEIsRUFBeUIsSUFBekI7QUFDQUUsTUFBQUEsT0FBTyxDQUFDRyxZQUFSLEdBQXVCLGFBQXZCO0FBQ0EsVUFBSUMsVUFBVSxHQUFHLElBQWpCOztBQUNBSixNQUFBQSxPQUFPLENBQUNLLE1BQVIsR0FBaUIsWUFBVztBQUMxQjtBQUNBRCxRQUFBQSxVQUFVLENBQUN4QixPQUFYLENBQW1CMEIsZUFBbkIsQ0FBbUNOLE9BQU8sQ0FBQ08sUUFBM0MsRUFBcUQsVUFBUzFCLE1BQVQsRUFBaUI7QUFDcEV1QixVQUFBQSxVQUFVLENBQUN2QixNQUFYLENBQWtCa0IsS0FBbEIsSUFBMkJsQixNQUEzQjtBQUNELFNBRkQ7QUFHRCxPQUxEOztBQU1BbUIsTUFBQUEsT0FBTyxDQUFDUSxJQUFSO0FBQ0Q7OztnQ0FFVztBQUFBOztBQUNWLFdBQUtYLElBQUwsQ0FBVVksT0FBVixDQUFrQixVQUFDWCxHQUFELEVBQU1DLEtBQU4sRUFBZ0I7QUFDaEMsUUFBQSxLQUFJLENBQUNXLFNBQUwsQ0FBZVosR0FBZixFQUFvQkMsS0FBcEI7QUFDRCxPQUZEO0FBR0Q7Ozs2QkFFUUEsSyxFQUFPO0FBQ2QsYUFBTyxLQUFLbEIsTUFBTCxDQUFZa0IsS0FBWixDQUFQO0FBQ0Q7Ozs7Ozs7O0lBR0dZLFE7OztBQUNKLHNCQUFjO0FBQUE7O0FBQ1osU0FBSy9CLE9BQUwsR0FBZSxLQUFLZ0MsTUFBTSxDQUFDQyxZQUFQLElBQXVCRCxNQUFNLENBQUNFLGtCQUFuQyxHQUFmO0FBQ0EsU0FBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLEVBQXBCO0FBQ0EsU0FBS25DLE1BQUwsR0FBYyxJQUFkLENBSlksQ0FLWjs7QUFDQSxTQUFLb0MsTUFBTCxHQUFjLEVBQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVksU0FBWjtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxJQUFJLEVBQUUsUUFESztBQUVYQyxNQUFBQSxHQUFHLEVBQUU7QUFGTSxLQUFiO0FBSUQ7Ozs7cUNBRWdCO0FBQ2Y7QUFDQSxXQUFLSixNQUFMLEdBQWMsRUFBZDs7QUFDQSxXQUFLLElBQUlLLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDM0IsWUFBSUMsR0FBRyxHQUFHLEtBQUtMLElBQUwsR0FBWSxLQUFLQyxLQUFMLENBQVdDLElBQXZCLEdBQThCLEdBQXhDO0FBQ0FHLFFBQUFBLEdBQUcsSUFBSUQsQ0FBQyxHQUFHLEdBQUosR0FBVSxLQUFLSCxLQUFMLENBQVdFLEdBQTVCO0FBQ0EsYUFBS0osTUFBTCxDQUFZTyxJQUFaLENBQWlCRCxHQUFqQjtBQUNELE9BUGMsQ0FTZjs7O0FBQ0EsV0FBSzFDLE1BQUwsR0FBYyxJQUFJZSxNQUFKLENBQVcsS0FBS2hCLE9BQWhCLEVBQXlCLEtBQUtxQyxNQUE5QixDQUFkO0FBQ0EsV0FBS3BDLE1BQUwsQ0FBWTRDLFNBQVo7QUFDRDs7O3lCQUVJQyxFLEVBQUk7QUFDUCxVQUFJLENBQUMsS0FBS1YsWUFBTCxDQUFrQlUsRUFBbEIsQ0FBTCxFQUE0QjtBQUMxQixhQUFLVixZQUFMLENBQWtCVSxFQUFsQixJQUF3QixJQUFJL0MsS0FBSixDQUFVLEtBQUtDLE9BQWYsRUFBd0IsS0FBS0MsTUFBTCxDQUFZOEMsUUFBWixDQUFxQkQsRUFBckIsQ0FBeEIsQ0FBeEI7QUFDQSxhQUFLVixZQUFMLENBQWtCVSxFQUFsQixFQUFzQkUsSUFBdEI7QUFDRDtBQUNGOzs7eUJBRUlGLEUsRUFBSTtBQUNQLFVBQUksS0FBS1YsWUFBTCxDQUFrQlUsRUFBbEIsQ0FBSixFQUEyQjtBQUN6QixhQUFLVixZQUFMLENBQWtCVSxFQUFsQixFQUFzQi9CLElBQXRCO0FBQ0EsZUFBTyxLQUFLcUIsWUFBTCxDQUFrQlUsRUFBbEIsQ0FBUDtBQUNEO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgU291bmQge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCBidWZmZXIpIHtcbiAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xuICB9XG5cbiAgc2V0dXAoKSB7XG4gICAgdGhpcy5nYWluTm9kZSA9IHRoaXMuY29udGV4dC5jcmVhdGVHYWluKCk7XG4gICAgdGhpcy5zb3VyY2UgPSB0aGlzLmNvbnRleHQuY3JlYXRlQnVmZmVyU291cmNlKCk7XG4gICAgdGhpcy5zb3VyY2UuYnVmZmVyID0gdGhpcy5idWZmZXI7XG4gICAgdGhpcy5zb3VyY2UuY29ubmVjdCh0aGlzLmdhaW5Ob2RlKTtcbiAgICB0aGlzLmdhaW5Ob2RlLmNvbm5lY3QodGhpcy5jb250ZXh0LmRlc3RpbmF0aW9uKTtcblxuICAgIHRoaXMuZ2Fpbk5vZGUuZ2Fpbi5zZXRWYWx1ZUF0VGltZSgwLjgsIHRoaXMuY29udGV4dC5jdXJyZW50VGltZSk7XG4gIH1cblxuICBwbGF5KCkge1xuICAgIHRoaXMuc2V0dXAoKTtcbiAgICB0aGlzLnNvdXJjZS5zdGFydCh0aGlzLmNvbnRleHQuY3VycmVudFRpbWUpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB2YXIgY3QgPSB0aGlzLmNvbnRleHQuY3VycmVudFRpbWUgKyAwLjU7XG4gICAgdGhpcy5nYWluTm9kZS5nYWluLmV4cG9uZW50aWFsUmFtcFRvVmFsdWVBdFRpbWUoMC4wMDEsIGN0KTtcbiAgICB0aGlzLnNvdXJjZS5zdG9wKGN0KTtcbiAgfVxufVxuXG5jbGFzcyBCdWZmZXIge1xuICBjb25zdHJ1Y3Rvcihjb250ZXh0LCB1cmxzKSB7XG4gICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB0aGlzLnVybHMgPSB1cmxzO1xuICAgIHRoaXMuYnVmZmVyID0gW107XG4gIH1cblxuICBsb2FkU291bmQodXJsLCBpbmRleCkge1xuICAgIGxldCByZXF1ZXN0ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgcmVxdWVzdC5vcGVuKFwiZ2V0XCIsIHVybCwgdHJ1ZSk7XG4gICAgcmVxdWVzdC5yZXNwb25zZVR5cGUgPSBcImFycmF5YnVmZmVyXCI7XG4gICAgbGV0IHRoaXNCdWZmZXIgPSB0aGlzO1xuICAgIHJlcXVlc3Qub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAvLyBTYWZhcmkgZG9lc24ndCBzdXBwb3J0IHByb21pc2UgYmFzZWQgc3ludGF4XG4gICAgICB0aGlzQnVmZmVyLmNvbnRleHQuZGVjb2RlQXVkaW9EYXRhKHJlcXVlc3QucmVzcG9uc2UsIGZ1bmN0aW9uKGJ1ZmZlcikge1xuICAgICAgICB0aGlzQnVmZmVyLmJ1ZmZlcltpbmRleF0gPSBidWZmZXI7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHJlcXVlc3Quc2VuZCgpO1xuICB9XG5cbiAgZ2V0QnVmZmVyKCkge1xuICAgIHRoaXMudXJscy5mb3JFYWNoKCh1cmwsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmxvYWRTb3VuZCh1cmwsIGluZGV4KTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFNvdW5kKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuYnVmZmVyW2luZGV4XTtcbiAgfVxufVxuXG5jbGFzcyBTb3VuZEFQSSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY29udGV4dCA9IG5ldyAod2luZG93LkF1ZGlvQ29udGV4dCB8fCB3aW5kb3cud2Via2l0QXVkaW9Db250ZXh0KSgpO1xuICAgIHRoaXMucHJlc2V0ID0gMDtcbiAgICB0aGlzLmxpc3RlblNvdW5kcyA9IHt9O1xuICAgIHRoaXMuYnVmZmVyID0gbnVsbDtcbiAgICAvLyBTT1VORFMgRklMRVNcbiAgICB0aGlzLnNvdW5kcyA9IFtdO1xuICAgIHRoaXMuZGVzdCA9IFwic291bmRzL1wiO1xuICAgIHRoaXMuc3R5bGUgPSB7XG4gICAgICBuYW1lOiBcImd1aXRhclwiLFxuICAgICAgZXh0OiBcIm1wM1wiXG4gICAgfTtcbiAgfVxuXG4gIGdldEZpbGVzU291bmRzKCkge1xuICAgIC8vIEdFTkVSQVRFIFBBVEhTXG4gICAgdGhpcy5zb3VuZHMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IDI2OyBpKyspIHtcbiAgICAgIGxldCBzdHIgPSB0aGlzLmRlc3QgKyB0aGlzLnN0eWxlLm5hbWUgKyBcIi9cIjtcbiAgICAgIHN0ciArPSBpICsgXCIuXCIgKyB0aGlzLnN0eWxlLmV4dDtcbiAgICAgIHRoaXMuc291bmRzLnB1c2goc3RyKTtcbiAgICB9XG5cbiAgICAvLyBORVcgQlVGRkVSIHdpdGggc291bmRzXG4gICAgdGhpcy5idWZmZXIgPSBuZXcgQnVmZmVyKHRoaXMuY29udGV4dCwgdGhpcy5zb3VuZHMpO1xuICAgIHRoaXMuYnVmZmVyLmdldEJ1ZmZlcigpO1xuICB9XG5cbiAgcGxheShpZCkge1xuICAgIGlmICghdGhpcy5saXN0ZW5Tb3VuZHNbaWRdKSB7XG4gICAgICB0aGlzLmxpc3RlblNvdW5kc1tpZF0gPSBuZXcgU291bmQodGhpcy5jb250ZXh0LCB0aGlzLmJ1ZmZlci5nZXRTb3VuZChpZCkpO1xuICAgICAgdGhpcy5saXN0ZW5Tb3VuZHNbaWRdLnBsYXkoKTtcbiAgICB9XG4gIH1cblxuICBzdG9wKGlkKSB7XG4gICAgaWYgKHRoaXMubGlzdGVuU291bmRzW2lkXSkge1xuICAgICAgdGhpcy5saXN0ZW5Tb3VuZHNbaWRdLnN0b3AoKTtcbiAgICAgIGRlbGV0ZSB0aGlzLmxpc3RlblNvdW5kc1tpZF07XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB7IFNvdW5kLCBCdWZmZXIsIFNvdW5kQVBJIH07XG4iXX0=
},{}],2:[function(require,module,exports){
"use strict";

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
          span.id = count++; // GENERATE SOUND
          // const sound = document.createElement("span");
          // sound.classList.add("sound");
          // span.appendChild(sound);
          // DIM

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

var pad = document.getElementById("pad");
var mk = new MidiKeyboard(pad);
console.log(mk);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMzIyNWU4ZTguanMiXSwibmFtZXMiOlsiTWlkaUtleWJvYXJkIiwidGFyZ2V0Iiwic291bmQiLCJTb3VuZEFQSSIsImdldEZpbGVzU291bmRzIiwiaW5pdEdyaWQiLCJpbml0RXZlbnQiLCJkaW1DYXNlIiwiTWF0aCIsImZsb29yIiwiZGltQ2FzZU9uR3JpZCIsImNsaWVudFdpZHRoIiwieCIsInkiLCJjb3VudCIsImkiLCJqIiwic3BhbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImlkIiwic3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsImxlZnQiLCJ0b3AiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyYW5kb20iLCJ0b1N0cmluZyIsImFwcGVuZENoaWxkIiwiZSIsInNwYW5zIiwiY2hpbGROb2RlcyIsImtleUNvZGUiLCJsZW5ndGgiLCJwYXJzZUludCIsImFkZEV2ZW50TGlzdGVuZXIiLCJrZXlVbmlvblNwYW4iLCJwbGF5IiwicmVtb3ZlIiwic3RvcCIsInBhZCIsImdldEVsZW1lbnRCeUlkIiwibWsiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7SUFFTUEsWTs7O0FBQ0osd0JBQVlDLE1BQVosRUFBb0I7QUFBQTs7QUFDbEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFkLENBRGtCLENBR2xCOztBQUNBLFNBQUtDLEtBQUwsR0FBYSxJQUFJQyxlQUFKLEVBQWI7QUFDQSxTQUFLRCxLQUFMLENBQVdFLGNBQVgsR0FMa0IsQ0FPbEI7O0FBQ0EsU0FBS0MsUUFBTDtBQUNBLFNBQUtDLFNBQUw7QUFDRDs7OzsrQkFFVTtBQUNULFVBQU1DLE9BQU8sR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBSyxLQUFoQixDQUFoQjtBQUNBLFVBQU1DLGFBQWEsR0FBRyxLQUFLVCxNQUFMLENBQVlVLFdBQVosR0FBMEJKLE9BQWhEO0FBRUEsVUFBSUssQ0FBQyxHQUFHLENBQVI7QUFBQSxV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QSxJQUFJLENBQUNHLFNBQUwsQ0FBZXFCLE1BQWYsQ0FBc0IsU0FBdEI7O0FBQ0EsVUFBQSxLQUFJLENBQUN2QyxLQUFMLENBQVd3QyxJQUFYLENBQWdCekIsSUFBSSxDQUFDSyxFQUFyQjtBQUNEO0FBQ0YsT0FORDtBQU9EOzs7Ozs7QUFHSCxJQUFNcUIsR0FBRyxHQUFHekIsUUFBUSxDQUFDMEIsY0FBVCxDQUF3QixLQUF4QixDQUFaO0FBQ0EsSUFBTUMsRUFBRSxHQUFHLElBQUk3QyxZQUFKLENBQWlCMkMsR0FBakIsQ0FBWDtBQUNBRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsRUFBWiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBTb3VuZEFQSSB9IGZyb20gXCIuL1NvdW5kXCI7XG5cbmNsYXNzIE1pZGlLZXlib2FyZCB7XG4gIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuXG4gICAgLy8gSU5JVCBNeSBTb3VuZCBMaWJcbiAgICB0aGlzLnNvdW5kID0gbmV3IFNvdW5kQVBJKCk7XG4gICAgdGhpcy5zb3VuZC5nZXRGaWxlc1NvdW5kcygpO1xuXG4gICAgLy8gSU5JVCBQQURcbiAgICB0aGlzLmluaXRHcmlkKCk7XG4gICAgdGhpcy5pbml0RXZlbnQoKTtcbiAgfVxuXG4gIGluaXRHcmlkKCkge1xuICAgIGNvbnN0IGRpbUNhc2UgPSBNYXRoLmZsb29yKDI2IC8gNS4wOTkpO1xuICAgIGNvbnN0IGRpbUNhc2VPbkdyaWQgPSB0aGlzLnRhcmdldC5jbGllbnRXaWR0aCAvIGRpbUNhc2U7XG5cbiAgICBsZXQgeCA9IDAsXG4gICAgICB5ID0gMCxcbiAgICAgIGNvdW50ID0gMTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGltQ2FzZTsgaSsrKSB7XG4gICAgICB4ID0gMDtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZGltQ2FzZTsgaisrKSB7XG4gICAgICAgIC8vIEdFTkVSQVRFIEEgQ0FTRSBQUk9QU1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChcImNhc2VcIik7XG4gICAgICAgIHNwYW4uaWQgPSBjb3VudCsrO1xuXG4gICAgICAgIC8vIEdFTkVSQVRFIFNPVU5EXG4gICAgICAgIC8vIGNvbnN0IHNvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIC8vIHNvdW5kLmNsYXNzTGlzdC5hZGQoXCJzb3VuZFwiKTtcblxuICAgICAgICAvLyBzcGFuLmFwcGVuZENoaWxkKHNvdW5kKTtcblxuICAgICAgICAvLyBESU1cbiAgICAgICAgc3Bhbi5zdHlsZS53aWR0aCA9IGAke2RpbUNhc2VPbkdyaWR9cHhgO1xuICAgICAgICBzcGFuLnN0eWxlLmhlaWdodCA9IGAke2RpbUNhc2VPbkdyaWR9cHhgO1xuXG4gICAgICAgIHNwYW4uc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuICAgICAgICBzcGFuLnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuXG4gICAgICAgIC8vIFJhbmRvbSBDb2xvclxuICAgICAgICBzcGFuLnN0eWxlLmJhY2tncm91bmRDb2xvciA9XG4gICAgICAgICAgXCIjXCIgKyAoKE1hdGgucmFuZG9tKCkgKiAweGZmZmZmZikgPDwgMCkudG9TdHJpbmcoMTYpO1xuXG4gICAgICAgIHRoaXMudGFyZ2V0LmFwcGVuZENoaWxkKHNwYW4pO1xuXG4gICAgICAgIHggKz0gZGltQ2FzZU9uR3JpZDtcbiAgICAgIH1cbiAgICAgIHkgKz0gZGltQ2FzZU9uR3JpZDtcbiAgICB9XG4gIH1cblxuICBrZXlVbmlvblNwYW4oZSkge1xuICAgIGNvbnN0IHNwYW5zID0gdGhpcy50YXJnZXQuY2hpbGROb2RlcztcblxuICAgIC8vID4gNjUgPCA5MFxuICAgIGNvbnN0IGlkID0gZS5rZXlDb2RlIC0gNjUgKyAxO1xuICAgIGlmIChlLmtleUNvZGUgPj0gNjUgJiYgZS5rZXlDb2RlIDw9IDg5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwYW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBzcGFuc1tpXTtcbiAgICAgICAgaWYgKHBhcnNlSW50KHNwYW4uaWQpID09PSBpZCkge1xuICAgICAgICAgIHJldHVybiBzcGFuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpbml0RXZlbnQoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB7XG4gICAgICBjb25zdCBzcGFuID0gdGhpcy5rZXlVbmlvblNwYW4oZSk7XG4gICAgICBpZiAoc3Bhbikge1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoXCJjbGlja2VkXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnBsYXkoc3Bhbi5pZCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZSA9PiB7XG4gICAgICBjb25zdCBzcGFuID0gdGhpcy5rZXlVbmlvblNwYW4oZSk7XG4gICAgICBpZiAoc3Bhbikge1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5yZW1vdmUoXCJjbGlja2VkXCIpO1xuICAgICAgICB0aGlzLnNvdW5kLnN0b3Aoc3Bhbi5pZCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgcGFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwYWRcIik7XG5jb25zdCBtayA9IG5ldyBNaWRpS2V5Ym9hcmQocGFkKTtcbmNvbnNvbGUubG9nKG1rKTtcbiJdfQ==
},{"./Sound":1}]},{},[2])