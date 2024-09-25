n.d(t, {
    Mq: function () {
        return o;
    },
    Su: function () {
        return i;
    },
    gr: function () {
        return a;
    },
    lG: function () {
        return T;
    },
    m7: function () {
        return v;
    },
    nt: function () {
        return N;
    },
    u7: function () {
        return r;
    },
    z4: function () {
        return A;
    }
});
var r,
    i,
    a,
    o,
    s = n(47120);
var l = n(653041);
var u = n(379649),
    c = n(909766),
    d = n(179654);
function _(e, t, n) {
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
let E = [0, 500000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000],
    f = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    h = [720, 480, 360],
    p = ['framesCodec', 'framesNetwork', 'packets', 'packetsLost', 'framesDropped', 'framesCodecError', 'bytes', 'nackCount', 'pliCount', 'qpSum', 'freezeCount', 'pauseCount', 'totalFreezesDuration', 'totalPausesDuration', 'totalFramesDuration', 'keyframes', 'passthroughCount', 'cryptorSuccessCount', 'cryptorFailureCount', 'cryptorDuration', 'cryptorAttempts', 'qualityDecodeErrors', 'qualityDecoderReboots', 'qualityScoreErrors', 'qualityFrameDrops', 'qualitySizeMismatches'];
!(function (e) {
    (e.H264 = 'H264'), (e.H265 = 'H265'), (e.VP8 = 'VP8'), (e.VP9 = 'VP9'), (e.AV1 = 'AV1'), (e.UNKNOWN = 'UNKNOWN');
})(r || (r = {})),
    !(function (e) {
        (e.NVIDIA_CUDA = 'nvidia_cuda'), (e.NVIDIA_DIRECT_3D = 'nvidia_direct_3d'), (e.OPENH264 = 'openh264'), (e.VIDEOTOOLBOX = 'videotoolbox'), (e.AMD_DIRECT_3D = 'amd_direct_3d'), (e.INTEL = 'intel'), (e.INTEL_DIRECT_3D = 'intel_direct_3d'), (e.VP8_LIBVPX = 'vp8_libvpx'), (e.UNCATEGORIZED = 'uncategorized'), (e.UNKNOWN = 'unknown');
    })(i || (i = {})),
    !(function (e) {
        (e.VIDEOTOOLBOX = 'videotoolbox'), (e.VP8_LIBVPX = 'vp8_libvpx'), (e.ELECTRON = 'electron'), (e.FFMPEG = 'ffmpeg'), (e.DAV1D = 'dav1d'), (e.UNCATEGORIZED = 'uncategorized'), (e.UNKNOWN = 'unknown');
    })(a || (a = {}));
let m = Object.freeze({
        'nvidia: cuda': 'nvidia_cuda',
        'nvidia: direct3d': 'nvidia_direct_3d',
        'amd: direct3d': 'amd_direct_3d',
        'intel: direct3d': 'intel_direct_3d',
        intel: 'intel',
        VideoToolbox: 'videotoolbox',
        OpenH264: 'openh264',
        libvpx: 'vp8_libvpx'
    }),
    I = Object.freeze({
        VideoToolbox: 'videotoolbox',
        libvpx: 'vp8_libvpx',
        electron: 'electron',
        ffmpeg: 'ffmpeg',
        dav1d: 'dav1d'
    });
function T(e) {
    if (null == e) return 'unknown';
    for (let t of Object.keys(m)) if (e.includes(t)) return m[t];
    return 'uncategorized';
}
function g(e) {
    if (null == e) return 'unknown';
    for (let t of Object.keys(I)) if (e.includes(t)) return I[t];
    return 'uncategorized';
}
function S(e) {
    if (null == e) return 'UNKNOWN';
    if ('H264' === (e = e.toUpperCase())) return 'H264';
    if ('H265' === e) return 'H265';
    if ('VP8' === e) return 'VP8';
    else if ('VP9' === e) return 'VP9';
    else if ('AV1' === e || 'AV1X' === e) return 'AV1';
    else return 'UNKNOWN';
}
!(function (e) {
    (e[(e.None = 0)] = 'None'), (e[(e.ClientSideDisableVideo = 1)] = 'ClientSideDisableVideo'), (e[(e.SenderStopped = 2)] = 'SenderStopped');
})(o || (o = {}));
class A {
    static parseInboundStats(e, t) {
        var n, r, i, a, o, s, l;
        let u = new A();
        return null == e ? u : ((u.bytes = e.bytesReceived), (u.framesCodec = e.framesDecoded), (u.framesCodecError = null !== (n = e.framesDecodeErrors) && void 0 !== n ? n : null), (u.framesNetwork = e.framesReceived), (u.packets = e.packetsReceived), (u.packetsLost = e.packetsLost), (u.framesDropped = e.framesDropped), (u.resolution = null != e.resolution ? e.resolution.height : 0), (u.minorResolution = null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0), (u.majorResolution = null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0), (u.timestamp = t), (u.nackCount = e.nackCount), (u.pliCount = e.pliCount), (u.decoder = g(e.decoderImplementationName)), (u.codecType = S(e.codec.name)), (u.qpSum = 0), (u.freezeCount = e.freezeCount), (u.pauseCount = e.pauseCount), (u.totalFreezesDuration = e.totalFreezesDuration), (u.totalPausesDuration = e.totalPausesDuration), (u.totalFramesDuration = e.totalFramesDuration), (u.keyframes = null !== (r = e.keyFramesDecoded) && void 0 !== r ? r : null), (u.passthroughCount = null !== (i = e.passthroughCount) && void 0 !== i ? i : 0), (u.cryptorSuccessCount = null !== (a = e.decryptSuccessCount) && void 0 !== a ? a : 0), (u.cryptorFailureCount = null !== (o = e.decryptFailureCount) && void 0 !== o ? o : 0), (u.cryptorDuration = null !== (s = e.decryptDuration) && void 0 !== s ? s : 0), (u.cryptorAttempts = null !== (l = e.decryptAttempts) && void 0 !== l ? l : 0), u);
    }
    static parseOutboundStats(e, t) {
        var n, r, i, a, o, s, l, u, c, d, _, E, f, h, p, m, I, g, v, N, O;
        let R = new A();
        return null == e
            ? R
            : {
                  bytes: e.bytesSent,
                  framesCodec: e.framesEncoded,
                  framesCodecError: null,
                  framesNetwork: null !== (n = e.framesSent) && void 0 !== n ? n : 0,
                  packets: e.packetsSent,
                  packetsLost: null !== (r = e.packetsLost) && void 0 !== r ? r : 0,
                  framesDropped: 0,
                  resolution: null != e.resolution ? e.resolution.height : 0,
                  minorResolution: null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0,
                  majorResolution: null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0,
                  timestamp: t,
                  encoder: T(e.encoderImplementationName),
                  decoder: null,
                  codecType: S(e.codec.name),
                  nackCount: e.nackCount,
                  pliCount: e.pliCount,
                  qpSum: e.qpSum,
                  freezeCount: 0,
                  pauseCount: 0,
                  totalFreezesDuration: 0,
                  totalPausesDuration: 0,
                  totalFramesDuration: 0,
                  outboundSinkWant: null !== (i = e.sinkWantAsInt) && void 0 !== i ? i : null,
                  vmafScore: null !== (a = e.encoderQualityVmaf) && void 0 !== a ? a : null,
                  qualityDecodeErrors: null !== (o = e.qualityDecodeErrors) && void 0 !== o ? o : 0,
                  qualityDecoderReboots: null !== (s = e.qualityDecoderReboots) && void 0 !== s ? s : 0,
                  qualityScoreErrors: null !== (l = e.qualityScoreErrors) && void 0 !== l ? l : 0,
                  qualityFrameDrops: null !== (u = e.qualityFrameDrops) && void 0 !== u ? u : 0,
                  qualitySizeMismatches: null !== (c = e.qualitySizeMismatches) && void 0 !== c ? c : 0,
                  psnrDb: null !== (d = e.encoderQualityPsnr) && void 0 !== d ? d : null,
                  keyframes: null !== (_ = e.keyFramesEncoded) && void 0 !== _ ? _ : null,
                  framesDroppedRateLimiter: null !== (E = e.framesDroppedRateLimiter) && void 0 !== E ? E : null,
                  framesDroppedEncoderQueue: null !== (f = e.framesDroppedEncoderQueue) && void 0 !== f ? f : null,
                  framesDroppedCongestionWindow: null !== (h = e.framesDroppedCongestionWindow) && void 0 !== h ? h : null,
                  framesDroppedEncoder: null !== (p = e.framesDroppedEncoder) && void 0 !== p ? p : null,
                  passthroughCount: null !== (m = e.passthroughCount) && void 0 !== m ? m : 0,
                  cryptorSuccessCount: null !== (I = e.encryptSuccessCount) && void 0 !== I ? I : 0,
                  cryptorFailureCount: null !== (g = e.encryptFailureCount) && void 0 !== g ? g : 0,
                  cryptorDuration: null !== (v = e.encryptDuration) && void 0 !== v ? v : 0,
                  cryptorAttempts: null !== (N = e.encryptAttempts) && void 0 !== N ? N : 0,
                  cryptorMaxAttempts: null !== (O = e.encryptMaxAttempts) && void 0 !== O ? O : 0
              };
    }
    constructor() {
        _(this, 'bytes', 0), _(this, 'framesCodec', 0), _(this, 'framesCodecError', null), _(this, 'framesNetwork', 0), _(this, 'resolution', 0), _(this, 'minorResolution', 0), _(this, 'majorResolution', 0), _(this, 'timestamp', 0), _(this, 'packets', 0), _(this, 'packetsLost', 0), _(this, 'framesDropped', 0), _(this, 'nackCount', 0), _(this, 'pliCount', 0), _(this, 'encoder', null), _(this, 'decoder', null), _(this, 'codecType', null), _(this, 'qpSum', 0), _(this, 'freezeCount', 0), _(this, 'pauseCount', 0), _(this, 'totalFreezesDuration', 0), _(this, 'totalPausesDuration', 0), _(this, 'totalFramesDuration', 0), _(this, 'vmafScore', null), _(this, 'psnrDb', null), _(this, 'outboundSinkWant', null), _(this, 'keyframes', null), _(this, 'framesDroppedRateLimiter', null), _(this, 'framesDroppedEncoderQueue', null), _(this, 'framesDroppedCongestionWindow', null), _(this, 'framesDroppedEncoder', null), _(this, 'passthroughCount', 0), _(this, 'cryptorSuccessCount', 0), _(this, 'cryptorFailureCount', 0), _(this, 'cryptorDuration', 0), _(this, 'cryptorAttempts', 0), _(this, 'cryptorMaxAttempts', 0), _(this, 'qualityDecodeErrors', 0), _(this, 'qualityDecoderReboots', 0), _(this, 'qualityScoreErrors', 0), _(this, 'qualityFrameDrops', 0), _(this, 'qualitySizeMismatches', 0);
    }
}
class v {
    get isVideoStopped() {
        return 0 !== this.videoStoppedReason;
    }
    get videoStoppedDuration() {
        return this.videoStoppedWatch.elapsed();
    }
    collectAggregationStats(e, t) {
        for (let r of p) {
            var n;
            let i = e[r];
            if (null === i) continue;
            let a = null !== (n = t[r]) && void 0 !== n ? n : 0;
            a > i ? (this.aggregatedProperties[r] += i) : (this.aggregatedProperties[r] += i - a);
        }
        this.aggregationDuration += e.timestamp - t.timestamp;
    }
    setVideoStopped(e, t) {
        if (e) {
            (this.videoStoppedReason |= t), this.videoStoppedWatch.start();
            return;
        }
        (this.videoStoppedReason &= ~t), 0 === this.videoStoppedReason && (this.statsWindow.splice(0), this.videoStoppedWatch.stop());
    }
    appendAndIncrementStats(e) {
        if (this.isVideoStopped) return;
        if ((this.statsWindow.push(e), this.statsWindow.length < 2)) return;
        let t = this.statsWindow[this.statsWindow.length - 1],
            n = this.statsWindow[this.statsWindow.length - 2];
        this.collectAggregationStats(t, n);
        let { bytes: r, framesCodec: i, timestamp: a, resolution: o, minorResolution: s, majorResolution: l, encoder: u, decoder: c, codecType: d } = t,
            { timestamp: _ } = n,
            p = (a - _) / 1000;
        if (((this.intervalTotal += p), (this.resolutionTotal += o * p), (this.minorResolutionTotal += s * p), (this.majorResolutionTotal += l * p), (this.cryptorMaxAttempts = Math.max(this.cryptorMaxAttempts, t.cryptorMaxAttempts)), null != u && null != d && 'encoderBuckets' in this)) {
            let n = this;
            (n.encoderBuckets[u] += p), (n.codecBuckets[d] += p), null != t.codecType && 'UNKNOWN' !== t.codecType && (n.encoderCodec = t.codecType), null != e.vmafScore && e.vmafScore >= 0 && ((n.vmafScoreNum += 1), (n.vmafScoreSum += e.vmafScore), n.vmafHistogram.addSample(e.vmafScore)), null != e.psnrDb && e.psnrDb >= 0 && ((n.psnrDbNum += 1), (n.psnrDbSum += e.psnrDb), n.psnrHistogram.addSample(e.psnrDb)), null != e.outboundSinkWant && 0 !== e.outboundSinkWant && ((n.outboundSinkWantNum += 1), (n.outboundSinkWantSum += e.outboundSinkWant));
        }
        if (null != c && null != d && 'decoderBuckets' in this) {
            let e = this;
            (e.decoderBuckets[c] += p), (e.codecBuckets[d] += p), null != t.codecType && 'UNKNOWN' !== t.codecType && (e.decoderCodec = t.codecType);
        }
        if (this.statsWindow.length < 6) return;
        let { bytes: m, framesCodec: I, timestamp: T } = this.statsWindow[this.statsWindow.length - 3];
        h.forEach((e) => {
            o <= e && (this.resolutionBuckets[e] += p);
        });
        let g = (a - T) / 1000,
            S = ((r - m) * 8) / g,
            A = (i - I) / g;
        E.forEach((e) => {
            S <= e && (this.bitrateBuckets[e] += p);
        }),
            f.forEach((e) => {
                A <= e && (this.fpsBuckets[e] += p);
            }),
            this.resolutionHistogram.addSample(o),
            this.bitrateHistogram.addSample(S),
            this.fpsHistogram.addSample(A),
            this.statsWindow.shift();
    }
    addSystemResources() {
        this.systemResources.takeSample();
    }
    appendTransportStats(e) {
        null != e.inboundBitrateEstimate && this.inboundBitrateEstimateHistogram.addSample(e.inboundBitrateEstimate);
    }
    getCodecsUsed() {
        let e = new Set();
        for (let [t, n] of Object.entries(this.codecBuckets)) n > 0 && e.add(t);
        return e;
    }
    constructor(e) {
        _(this, 'decoderBuckets', {
            vp8_libvpx: 0,
            dav1d: 0,
            ffmpeg: 0,
            electron: 0,
            videotoolbox: 0,
            uncategorized: 0,
            unknown: 0
        }),
            _(this, 'codecBuckets', {
                H264: 0,
                H265: 0,
                VP8: 0,
                VP9: 0,
                AV1: 0,
                UNKNOWN: 0
            }),
            _(this, 'statsWindow', []),
            _(this, 'fpsHistogram', new c.b()),
            _(this, 'bitrateHistogram', new c.b()),
            _(this, 'inboundBitrateEstimateHistogram', new c.b()),
            _(this, 'resolutionHistogram', new c.b()),
            _(this, 'systemResources', new d.Z()),
            _(this, 'decoderCodec', 'UNKNOWN'),
            _(this, 'startTime', void 0),
            _(this, 'timeToFirstFrame', void 0),
            _(this, 'aggregatedProperties', {
                framesCodec: 0,
                framesNetwork: 0,
                packets: 0,
                packetsLost: 0,
                framesDropped: 0,
                framesCodecError: 0,
                bytes: 0,
                nackCount: 0,
                pliCount: 0,
                qpSum: 0,
                freezeCount: 0,
                pauseCount: 0,
                totalFreezesDuration: 0,
                totalPausesDuration: 0,
                totalFramesDuration: 0,
                keyframes: 0,
                passthroughCount: 0,
                cryptorSuccessCount: 0,
                cryptorFailureCount: 0,
                cryptorDuration: 0,
                cryptorAttempts: 0,
                qualityDecodeErrors: 0,
                qualityDecoderReboots: 0,
                qualityScoreErrors: 0,
                qualityFrameDrops: 0,
                qualitySizeMismatches: 0
            }),
            _(this, 'aggregationDuration', 0),
            _(this, 'bitrateBuckets', {}),
            _(this, 'fpsBuckets', {}),
            _(this, 'resolutionBuckets', {}),
            _(this, 'resolutionTotal', 0),
            _(this, 'minorResolutionTotal', 0),
            _(this, 'majorResolutionTotal', 0),
            _(this, 'intervalTotal', 0),
            _(this, 'cryptorMaxAttempts', 0),
            _(this, 'videoStoppedWatch', void 0),
            _(this, 'videoStoppedReason', 0),
            (this.startTime = e.now()),
            (this.videoStoppedWatch = new u.G9(e)),
            E.forEach((e) => {
                this.bitrateBuckets[e] = 0;
            }),
            f.forEach((e) => {
                this.fpsBuckets[e] = 0;
            }),
            h.forEach((e) => {
                this.resolutionBuckets[e] = 0;
            });
    }
}
class N extends v {
    appendTargetRates(e, t, n, r) {
        if (this.statsWindow.length < 2) return;
        (e = null != e ? e : 0), (t = null != t ? t : 0), (n = null != n ? n : 0), (r = null != r ? r : 0);
        let i = (this.statsWindow[this.statsWindow.length - 1].timestamp - this.statsWindow[this.statsWindow.length - 2].timestamp) / 1000;
        (this.targetFrames = this.targetFrames + e * i), (this.targetBytesNetwork = this.targetBytesNetwork + (t / 8) * i), (this.targetBytesMax = this.targetBytesMax + (n / 8) * i), (this.outboundBytesAvailable = this.outboundBytesAvailable + (r / 8) * i), this.targetBitrateHistogram.addSample(t), this.outboundBandwidthSurplus.addSample(r - t);
    }
    constructor(...e) {
        super(...e),
            _(this, 'encoderBuckets', {
                nvidia_cuda: 0,
                nvidia_direct_3d: 0,
                openh264: 0,
                videotoolbox: 0,
                amd_direct_3d: 0,
                intel: 0,
                intel_direct_3d: 0,
                vp8_libvpx: 0,
                uncategorized: 0,
                unknown: 0
            }),
            _(this, 'encoderCodec', 'UNKNOWN'),
            _(this, 'targetFrames', 0),
            _(this, 'targetBytesMax', 0),
            _(this, 'targetBytesNetwork', 0),
            _(this, 'targetBitrateHistogram', new c.b()),
            _(this, 'outboundBytesAvailable', 0),
            _(this, 'outboundBandwidthSurplus', new c.b()),
            _(this, 'averageEncodeTime', 0),
            _(this, 'vmafScoreSum', 0),
            _(this, 'vmafScoreNum', 0),
            _(this, 'vmafHistogram', new c.b()),
            _(this, 'psnrDbSum', 0),
            _(this, 'psnrDbNum', 0),
            _(this, 'psnrHistogram', new c.b()),
            _(this, 'qualityDecodeErrors', 0),
            _(this, 'qualityDecoderReboots', 0),
            _(this, 'qualityScoreErrors', 0),
            _(this, 'qualityFrameDrops', 0),
            _(this, 'qualitySizeMismatches', 0),
            _(this, 'outboundSinkWantSum', 0),
            _(this, 'outboundSinkWantNum', 0),
            _(this, 'framesDroppedRateLimiter', null),
            _(this, 'framesDroppedEncoderQueue', null),
            _(this, 'framesDroppedCongestionWindow', null),
            _(this, 'framesDroppedEncoder', null);
    }
}
