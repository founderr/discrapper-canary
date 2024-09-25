n.d(t, {
    Z: function () {
        return p;
    }
});
var r = n(653041);
var i = n(951953);
var a = n(970173);
var o = n(520712);
var s = n(268111);
var l = n(941497);
var u = n(32026);
var c = n(480839);
var d = n(744285);
var _ = n(492257);
var E = n(873817);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function h(e, t) {
    let n = -1 / 0;
    e.getFloatFrequencyData(t);
    for (let e = 4; e < t.length; e++) t[e] > n && t[e] < 0 && (n = t[e]);
    return n;
}
class p {
    stop() {
        this.source.disconnect(), clearInterval(this.interval), (this.speakingCounter = 0);
    }
    get speaking() {
        return this.speakingCounter > 0 || this.silentFrames < this.silenceThreshold;
    }
    update() {
        (this.currentVolume = h(this.analyser, this.fftBins)), this.speakingHistory[this.speakingHistoryIndex] && this.speakingCounter--;
        let e = this.currentVolume > this.threshold;
        (this.speakingHistory[this.speakingHistoryIndex] = e), e && this.speakingCounter++, ++this.speakingHistoryIndex === this.speakingHistory.length && (this.speakingHistoryIndex = 0), this.speakingCounter > 0 ? (this.silentFrames = 0) : this.silentFrames++;
    }
    constructor(e, t, n, r = 0.1, i = 10) {
        f(this, 'threshold', void 0), f(this, 'currentVolume', 0), f(this, 'analyser', void 0), f(this, 'interval', void 0), f(this, 'fftBins', void 0), f(this, 'source', void 0), f(this, 'speakingHistory', void 0), f(this, 'speakingHistoryIndex', 0), f(this, 'speakingCounter', 0), f(this, 'silenceThreshold', void 0), f(this, 'silentFrames', void 0), f(this, 'onProcess', null);
        let a = e.createAnalyser();
        (a.fftSize = 512), (a.smoothingTimeConstant = r);
        let o = e.createMediaStreamSource(t);
        o.connect(a);
        let s = [];
        for (let e = 0; e < i; e++) s.push(!1);
        let l = window.setInterval(() => {
            var e, t;
            this.update(), null === (e = (t = this).onProcess) || void 0 === e || e.call(t, this.speaking, this.currentVolume);
        }, 20);
        (this.threshold = n), (this.analyser = a), (this.interval = l), (this.fftBins = new Float32Array(a.fftSize)), (this.source = o), (this.speakingHistory = s), (this.silenceThreshold = this.speakingHistory.length), (this.silentFrames = this.silenceThreshold);
    }
}
