r.d(n, {
    Z: function () {
        return g;
    }
});
var i = r(653041);
var a = r(951953);
var s = r(970173);
var o = r(520712);
var l = r(268111);
var u = r(941497);
var c = r(32026);
var d = r(480839);
var f = r(744285);
var _ = r(492257);
var h = r(873817);
function p(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
function m(e, n) {
    let r = -1 / 0;
    e.getFloatFrequencyData(n);
    for (let e = 4; e < n.length; e++) n[e] > r && n[e] < 0 && (r = n[e]);
    return r;
}
class g {
    stop() {
        this.source.disconnect(), clearInterval(this.interval), (this.speakingCounter = 0);
    }
    get speaking() {
        return this.speakingCounter > 0 || this.silentFrames < this.silenceThreshold;
    }
    update() {
        (this.currentVolume = m(this.analyser, this.fftBins)), this.speakingHistory[this.speakingHistoryIndex] && this.speakingCounter--;
        let e = this.currentVolume > this.threshold;
        (this.speakingHistory[this.speakingHistoryIndex] = e), e && this.speakingCounter++, ++this.speakingHistoryIndex === this.speakingHistory.length && (this.speakingHistoryIndex = 0), this.speakingCounter > 0 ? (this.silentFrames = 0) : this.silentFrames++;
    }
    constructor(e, n, r, i = 0.1, a = 10) {
        p(this, 'threshold', void 0), p(this, 'currentVolume', 0), p(this, 'analyser', void 0), p(this, 'interval', void 0), p(this, 'fftBins', void 0), p(this, 'source', void 0), p(this, 'speakingHistory', void 0), p(this, 'speakingHistoryIndex', 0), p(this, 'speakingCounter', 0), p(this, 'silenceThreshold', void 0), p(this, 'silentFrames', void 0), p(this, 'onProcess', null);
        let s = e.createAnalyser();
        (s.fftSize = 512), (s.smoothingTimeConstant = i);
        let o = e.createMediaStreamSource(n);
        o.connect(s);
        let l = [];
        for (let e = 0; e < a; e++) l.push(!1);
        let u = window.setInterval(() => {
            var e, n;
            this.update(), null === (e = (n = this).onProcess) || void 0 === e || e.call(n, this.speaking, this.currentVolume);
        }, 20);
        (this.threshold = r), (this.analyser = s), (this.interval = u), (this.fftBins = new Float32Array(s.fftSize)), (this.source = o), (this.speakingHistory = l), (this.silenceThreshold = this.speakingHistory.length), (this.silentFrames = this.silenceThreshold);
    }
}
