n.d(t, {
    DM: function () {
        return s;
    },
    SF: function () {
        return u;
    },
    iY: function () {
        return c;
    }
});
var r = n(411104);
var i = n(966146),
    a = n(65154);
function o(e, t, n) {
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
let s = Object.freeze({
    [a.Uc.AUTO]: {},
    [a.Uc.FULL]: {
        encode: {
            width: 1280,
            height: 720
        }
    }
});
class l {
    constructor(e) {
        if ((o(this, 'capture', void 0), o(this, 'encode', void 0), o(this, 'bitrateMin', void 0), o(this, 'bitrateMax', void 0), o(this, 'bitrateTarget', void 0), o(this, 'localWant', void 0), null == e.capture && null == e.encode)) throw Error('Invalid arguments.');
        (this.capture = null == e.capture ? void 0 : new u(e.capture)), (this.encode = null == e.encode ? void 0 : new u(e.encode)), (this.bitrateMin = e.bitrateMin), (this.bitrateMax = e.bitrateMax), (this.bitrateTarget = e.bitrateTarget), (this.localWant = e.localWant);
    }
}
class u {
    static equals(e, t) {
        return (null == e && null == t) || (null != e && null != t && e.width === t.width && e.height === t.height && e.framerate === t.framerate);
    }
    static extend(e, t) {
        var n, r, i, a, o;
        if (null == e) return t;
        if (null == t) return e;
        let s = null !== (r = null !== (n = null == t ? void 0 : t.width) && void 0 !== n ? n : null == e ? void 0 : e.width) && void 0 !== r ? r : 0,
            l = null !== (a = null !== (i = null == t ? void 0 : t.height) && void 0 !== i ? i : null == e ? void 0 : e.height) && void 0 !== a ? a : 0;
        return {
            width: s,
            height: l,
            framerate: null !== (o = null == t ? void 0 : t.framerate) && void 0 !== o ? o : null == e ? void 0 : e.framerate,
            pixelCount: s * l
        };
    }
    constructor(e) {
        o(this, 'width', void 0), o(this, 'height', void 0), o(this, 'framerate', void 0), o(this, 'pixelCount', void 0), (this.width = e.width), (this.height = e.height), (this.framerate = e.framerate), (this.pixelCount = e.width * e.height);
    }
}
class c {
    getQuality(e) {
        let t = this.connection.getLocalWant(e),
            n = this.isStreamContext ? this.getGoliveQuality(t) : this.getVideoQuality(t);
        if (null != this.qualityOverwrite) {
            var r, i, a;
            return new l({
                encode: u.extend(n.encode, this.qualityOverwrite.encode),
                capture: u.extend(n.capture, this.qualityOverwrite.capture),
                bitrateMin: null !== (r = this.qualityOverwrite.bitrateMin) && void 0 !== r ? r : n.bitrateMin,
                bitrateMax: null !== (i = this.qualityOverwrite.bitrateMax) && void 0 !== i ? i : n.bitrateMax,
                bitrateTarget: null !== (a = this.qualityOverwrite.bitrateTarget) && void 0 !== a ? a : n.bitrateTarget,
                localWant: n.localWant
            });
        }
        return n;
    }
    applyQualityConstraints(e, t) {
        let n = this.getQuality(t);
        return (
            null != n.capture && ((e.encodingVideoWidth = n.capture.width), (e.encodingVideoHeight = n.capture.height), (e.encodingVideoFrameRate = n.capture.framerate), (e.captureVideoFrameRate = n.capture.framerate)),
            null != n.encode && ((e.remoteSinkWantsMaxFramerate = n.encode.framerate), (e.remoteSinkWantsPixelCount = n.encode.pixelCount)),
            null != n.bitrateTarget ? (e.encodingVideoBitRate = n.bitrateTarget) : (e.encodingVideoBitRate = n.bitrateMax),
            (e.encodingVideoMinBitRate = n.bitrateMin),
            (e.encodingVideoMaxBitRate = n.bitrateMax),
            null != e.encodingVideoBitRate && null != e.encodingVideoMaxBitRate && (e.encodingVideoBitRate = Math.min(e.encodingVideoBitRate, e.encodingVideoMaxBitRate)),
            {
                quality: n,
                constraints: e
            }
        );
    }
    setQualityOverwrite(e) {
        this.qualityOverwrite = e;
    }
    setGoliveQuality(e) {
        var t, n, r;
        this.goliveMaxQuality = new l({
            capture: u.extend(this.goliveMaxQuality.capture, e.capture),
            encode: u.extend(this.goliveMaxQuality.encode, e.encode),
            bitrateMin: null !== (t = e.bitrateMin) && void 0 !== t ? t : this.goliveMaxQuality.bitrateMin,
            bitrateMax: null !== (n = e.bitrateMax) && void 0 !== n ? n : this.goliveMaxQuality.bitrateMax,
            bitrateTarget: null !== (r = e.bitrateTarget) && void 0 !== r ? r : this.goliveMaxQuality.bitrateTarget,
            localWant: this.goliveMaxQuality.localWant
        });
    }
    configGoliveSimulcast(e) {
        e.has(a.V8.GOLIVE_SIMULCAST_480P_500K)
            ? ((this.goliveSimulcastEnabled = !0),
              (this.goliveSimulcastLQBitrate = a.pk),
              (this.goliveSimulcastLQRes = {
                  width: 854,
                  height: 480
              }))
            : e.has(a.V8.GOLIVE_SIMULCAST_480P_750K)
              ? ((this.goliveSimulcastEnabled = !0),
                (this.goliveSimulcastLQBitrate = 750000),
                (this.goliveSimulcastLQRes = {
                    width: 854,
                    height: 480
                }))
              : e.has(a.V8.GOLIVE_SIMULCAST_480P_1000K) &&
                ((this.goliveSimulcastEnabled = !0),
                (this.goliveSimulcastLQBitrate = 1000000),
                (this.goliveSimulcastLQRes = {
                    width: 854,
                    height: 480
                }));
    }
    getVideoQuality(e) {
        let t = this.ladder.getResolution(e),
            n = this.options.videoBitrate.min * t.budgetPortion,
            r = this.options.videoBitrate.max * t.budgetPortion,
            i = this.isMuted ? t.mutedFramerate : t.framerate;
        return new l({
            encode: {
                ...t,
                framerate: i
            },
            capture: {
                width: this.options.videoCapture.width,
                height: this.options.videoCapture.height,
                framerate: this.options.videoCapture.framerate
            },
            bitrateMin: n,
            bitrateMax: Math.max(r, this.options.videoBitrateFloor),
            localWant: e
        });
    }
    getGoliveQuality(e) {
        return this.goliveSimulcastEnabled && e < 100 ? this.getGoliveLQQuality() : this.goliveMaxQuality;
    }
    getDefaultGoliveQuality() {
        return new l({
            capture: {
                width: 1280,
                height: 720,
                framerate: a.Gs
            },
            encode: {
                width: 1280,
                height: 720,
                framerate: a.Gs,
                pixelCount: 921600
            },
            bitrateMin: this.options.desktopBitrate.min,
            bitrateMax: this.options.desktopBitrate.max,
            bitrateTarget: this.options.desktopBitrate.target
        });
    }
    getGoliveLQQuality() {
        var e, t, n, r;
        let i = this.goliveSimulcastLQRes.width,
            o = this.goliveSimulcastLQRes.height,
            s = Math.min(a.Gs, null !== (n = null === (e = this.goliveMaxQuality.encode) || void 0 === e ? void 0 : e.framerate) && void 0 !== n ? n : a.Gs);
        return new l({
            capture: {
                width: i,
                height: o,
                framerate: Math.min(a.Gs, null !== (r = null === (t = this.goliveMaxQuality.capture) || void 0 === t ? void 0 : t.framerate) && void 0 !== r ? r : a.Gs)
            },
            encode: {
                width: i,
                height: o,
                framerate: s,
                pixelCount: i * o
            },
            bitrateMin: 150000,
            bitrateMax: this.goliveSimulcastLQBitrate,
            bitrateTarget: this.goliveSimulcastLQBitrate
        });
    }
    constructor(e, t, n = a.kS) {
        o(this, 'contextType', void 0),
            o(this, 'connection', void 0),
            o(this, 'options', void 0),
            o(this, 'isMuted', void 0),
            o(this, 'qualityOverwrite', void 0),
            o(this, 'goliveMaxQuality', void 0),
            o(this, 'goliveSimulcastEnabled', void 0),
            o(this, 'goliveSimulcastLQBitrate', void 0),
            o(this, 'goliveSimulcastLQRes', void 0),
            o(this, 'isStreamContext', void 0),
            o(this, 'ladder', void 0),
            (this.contextType = e),
            (this.connection = t),
            (this.options = n),
            (this.isMuted = !1),
            (this.isStreamContext = this.contextType === a.Yn.STREAM),
            (this.ladder = new i.x(n)),
            (this.goliveMaxQuality = this.getDefaultGoliveQuality()),
            (this.goliveSimulcastEnabled = !1),
            (this.goliveSimulcastLQBitrate = a.pk),
            (this.goliveSimulcastLQRes = {
                width: 854,
                height: 480
            });
    }
}
