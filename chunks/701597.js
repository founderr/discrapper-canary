r.d(n, {
    DM: function () {
        return l;
    },
    SF: function () {
        return c;
    },
    iY: function () {
        return d;
    }
});
var i = r(411104);
var a = r(966146),
    s = r(65154);
function o(e, n, r) {
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
let l = Object.freeze({
    [s.Uc.AUTO]: {},
    [s.Uc.FULL]: {
        encode: {
            width: 1280,
            height: 720
        }
    }
});
class u {
    constructor(e) {
        if ((o(this, 'capture', void 0), o(this, 'encode', void 0), o(this, 'bitrateMin', void 0), o(this, 'bitrateMax', void 0), o(this, 'bitrateTarget', void 0), o(this, 'localWant', void 0), null == e.capture && null == e.encode)) throw Error('Invalid arguments.');
        (this.capture = null == e.capture ? void 0 : new c(e.capture)), (this.encode = null == e.encode ? void 0 : new c(e.encode)), (this.bitrateMin = e.bitrateMin), (this.bitrateMax = e.bitrateMax), (this.bitrateTarget = e.bitrateTarget), (this.localWant = e.localWant);
    }
}
class c {
    static equals(e, n) {
        return (null == e && null == n) || (null != e && null != n && e.width === n.width && e.height === n.height && e.framerate === n.framerate);
    }
    static extend(e, n) {
        var r, i, a, s, o;
        if (null == e) return n;
        if (null == n) return e;
        let l = null !== (i = null !== (r = null == n ? void 0 : n.width) && void 0 !== r ? r : null == e ? void 0 : e.width) && void 0 !== i ? i : 0,
            u = null !== (s = null !== (a = null == n ? void 0 : n.height) && void 0 !== a ? a : null == e ? void 0 : e.height) && void 0 !== s ? s : 0;
        return {
            width: l,
            height: u,
            framerate: null !== (o = null == n ? void 0 : n.framerate) && void 0 !== o ? o : null == e ? void 0 : e.framerate,
            pixelCount: l * u
        };
    }
    constructor(e) {
        o(this, 'width', void 0), o(this, 'height', void 0), o(this, 'framerate', void 0), o(this, 'pixelCount', void 0), (this.width = e.width), (this.height = e.height), (this.framerate = e.framerate), (this.pixelCount = e.width * e.height);
    }
}
class d {
    getQuality(e) {
        let n = this.connection.getLocalWant(e),
            r = this.isStreamContext ? this.getGoliveQuality(n) : this.getVideoQuality(n);
        if (null != this.qualityOverwrite) {
            var i, a, s;
            return new u({
                encode: c.extend(r.encode, this.qualityOverwrite.encode),
                capture: c.extend(r.capture, this.qualityOverwrite.capture),
                bitrateMin: null !== (i = this.qualityOverwrite.bitrateMin) && void 0 !== i ? i : r.bitrateMin,
                bitrateMax: null !== (a = this.qualityOverwrite.bitrateMax) && void 0 !== a ? a : r.bitrateMax,
                bitrateTarget: null !== (s = this.qualityOverwrite.bitrateTarget) && void 0 !== s ? s : r.bitrateTarget,
                localWant: r.localWant
            });
        }
        return r;
    }
    applyQualityConstraints(e, n) {
        let r = this.getQuality(n);
        return (
            null != r.capture && ((e.encodingVideoWidth = r.capture.width), (e.encodingVideoHeight = r.capture.height), (e.encodingVideoFrameRate = r.capture.framerate), (e.captureVideoFrameRate = r.capture.framerate)),
            null != r.encode && ((e.remoteSinkWantsMaxFramerate = r.encode.framerate), (e.remoteSinkWantsPixelCount = r.encode.pixelCount)),
            null != r.bitrateTarget ? (e.encodingVideoBitRate = r.bitrateTarget) : (e.encodingVideoBitRate = r.bitrateMax),
            (e.encodingVideoMinBitRate = r.bitrateMin),
            (e.encodingVideoMaxBitRate = r.bitrateMax),
            null != e.encodingVideoBitRate && null != e.encodingVideoMaxBitRate && (e.encodingVideoBitRate = Math.min(e.encodingVideoBitRate, e.encodingVideoMaxBitRate)),
            {
                quality: r,
                constraints: e
            }
        );
    }
    setQualityOverwrite(e) {
        this.qualityOverwrite = e;
    }
    setGoliveQuality(e) {
        var n, r, i;
        this.goliveMaxQuality = new u({
            capture: c.extend(this.goliveMaxQuality.capture, e.capture),
            encode: c.extend(this.goliveMaxQuality.encode, e.encode),
            bitrateMin: null !== (n = e.bitrateMin) && void 0 !== n ? n : this.goliveMaxQuality.bitrateMin,
            bitrateMax: null !== (r = e.bitrateMax) && void 0 !== r ? r : this.goliveMaxQuality.bitrateMax,
            bitrateTarget: null !== (i = e.bitrateTarget) && void 0 !== i ? i : this.goliveMaxQuality.bitrateTarget,
            localWant: this.goliveMaxQuality.localWant
        });
    }
    configGoLiveSimulcast(e, n) {
        (this.goliveSimulcastEnabled = e), (this.goliveSimulcastLQBitrateMax = n), (this.goliveSimulcastLQBitrateTarget = n);
    }
    setGoLiveSimulcastLQTargetBitrate(e) {
        this.goliveSimulcastLQBitrateTarget = e;
    }
    shouldEnableGoliveSimulcastForHqQuality(e) {
        return !!this.goliveSimulcastEnabled && ((0 === e.width && 0 === e.height) || e.width * e.height > s.ef * s.ru);
    }
    getVideoQuality(e) {
        let n = this.ladder.getResolution(e),
            r = this.options.videoBitrate.min * n.budgetPortion,
            i = this.options.videoBitrate.max * n.budgetPortion,
            a = this.isMuted ? n.mutedFramerate : n.framerate;
        return new u({
            encode: {
                ...n,
                framerate: a
            },
            capture: {
                width: this.options.videoCapture.width,
                height: this.options.videoCapture.height,
                framerate: this.options.videoCapture.framerate
            },
            bitrateMin: r,
            bitrateMax: Math.max(i, this.options.videoBitrateFloor),
            localWant: e
        });
    }
    getGoliveQuality(e) {
        return this.goliveSimulcastEnabled && e < 100 ? this.getGoliveLQQuality() : this.goliveMaxQuality;
    }
    getDefaultGoliveQuality() {
        return new u({
            capture: {
                width: 1280,
                height: 720,
                framerate: s.Gs
            },
            encode: {
                width: 1280,
                height: 720,
                framerate: s.Gs,
                pixelCount: 921600
            },
            bitrateMin: this.options.desktopBitrate.min,
            bitrateMax: this.options.desktopBitrate.max,
            bitrateTarget: this.options.desktopBitrate.target
        });
    }
    getGoliveLQQuality() {
        var e, n, r, i, a, o, l, c, d, f, _, h;
        let p = Math.min(s.ef, null !== (l = null === (e = this.goliveMaxQuality.encode) || void 0 === e ? void 0 : e.width) && void 0 !== l ? l : s.ef),
            m = Math.min(s.ru, null !== (c = null === (n = this.goliveMaxQuality.encode) || void 0 === n ? void 0 : n.height) && void 0 !== c ? c : s.ru),
            g = Math.min(s.R$, null !== (d = null === (r = this.goliveMaxQuality.encode) || void 0 === r ? void 0 : r.framerate) && void 0 !== d ? d : s.R$),
            E = Math.min(s.ef, null !== (f = null === (i = this.goliveMaxQuality.capture) || void 0 === i ? void 0 : i.width) && void 0 !== f ? f : s.ef),
            v = Math.min(s.ru, null !== (_ = null === (a = this.goliveMaxQuality.capture) || void 0 === a ? void 0 : a.height) && void 0 !== _ ? _ : s.ru);
        return new u({
            capture: {
                width: E,
                height: v,
                framerate: Math.min(s.R$, null !== (h = null === (o = this.goliveMaxQuality.capture) || void 0 === o ? void 0 : o.framerate) && void 0 !== h ? h : s.R$)
            },
            encode: {
                width: p,
                height: m,
                framerate: g,
                pixelCount: p * m
            },
            bitrateMin: s.UC,
            bitrateMax: this.goliveSimulcastLQBitrateMax,
            bitrateTarget: this.goliveSimulcastLQBitrateTarget
        });
    }
    constructor(e, n, r = s.kS) {
        o(this, 'contextType', void 0), o(this, 'connection', void 0), o(this, 'options', void 0), o(this, 'isMuted', void 0), o(this, 'qualityOverwrite', void 0), o(this, 'goliveMaxQuality', void 0), o(this, 'goliveSimulcastEnabled', void 0), o(this, 'goliveSimulcastLQBitrateMax', void 0), o(this, 'goliveSimulcastLQBitrateTarget', void 0), o(this, 'isStreamContext', void 0), o(this, 'ladder', void 0), (this.contextType = e), (this.connection = n), (this.options = r), (this.isMuted = !1), (this.isStreamContext = this.contextType === s.Yn.STREAM), (this.ladder = new a.x(r)), (this.goliveMaxQuality = this.getDefaultGoliveQuality()), (this.goliveSimulcastEnabled = !1), (this.goliveSimulcastLQBitrateMax = s.pk), (this.goliveSimulcastLQBitrateTarget = s.pk);
    }
}
