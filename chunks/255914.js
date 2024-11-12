n.d(t, {
    Mq: function () {
        return s;
    },
    Su: function () {
        return i;
    },
    gr: function () {
        return a;
    },
    lG: function () {
        return b;
    },
    m7: function () {
        return y;
    },
    nt: function () {
        return A;
    },
    u7: function () {
        return r;
    },
    z4: function () {
        return T;
    }
}),
    n(47120),
    n(653041);
var r,
    i,
    a,
    s,
    o,
    l,
    u,
    c,
    d = n(379649),
    f = n(909766),
    _ = n(179654);
function p(e, t, n) {
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
let h = [0, 500000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000],
    m = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    g = [720, 480, 360],
    E = ['framesCodec', 'framesNetwork', 'packets', 'packetsLost', 'framesDropped', 'framesCodecError', 'bytes', 'nackCount', 'pliCount', 'qpSum', 'freezeCount', 'pauseCount', 'totalFreezesDuration', 'totalPausesDuration', 'totalFramesDuration', 'keyframes', 'passthroughCount', 'cryptorSuccessCount', 'cryptorFailureCount', 'cryptorDuration', 'cryptorAttempts', 'qualityDecodeErrors', 'qualityDecoderReboots', 'qualityScoreErrors', 'qualityFrameDrops', 'qualitySizeMismatches'];
((o = r || (r = {})).H264 = 'H264'), (o.H265 = 'H265'), (o.VP8 = 'VP8'), (o.VP9 = 'VP9'), (o.AV1 = 'AV1'), (o.UNKNOWN = 'UNKNOWN'), ((l = i || (i = {})).NVIDIA_CUDA = 'nvidia_cuda'), (l.NVIDIA_DIRECT_3D = 'nvidia_direct_3d'), (l.OPENH264 = 'openh264'), (l.VIDEOTOOLBOX = 'videotoolbox'), (l.AMD_DIRECT_3D = 'amd_direct_3d'), (l.INTEL = 'intel'), (l.INTEL_DIRECT_3D = 'intel_direct_3d'), (l.VP8_LIBVPX = 'vp8_libvpx'), (l.UNCATEGORIZED = 'uncategorized'), (l.UNKNOWN = 'unknown'), ((u = a || (a = {})).VIDEOTOOLBOX = 'videotoolbox'), (u.VP8_LIBVPX = 'vp8_libvpx'), (u.ELECTRON = 'electron'), (u.FFMPEG = 'ffmpeg'), (u.DAV1D = 'dav1d'), (u.UNCATEGORIZED = 'uncategorized'), (u.UNKNOWN = 'unknown');
let v = Object.freeze({
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
function b(e) {
    if (null == e) return 'unknown';
    for (let t of Object.keys(v)) if (e.includes(t)) return v[t];
    return 'uncategorized';
}
((c = s || (s = {}))[(c.None = 0)] = 'None'), (c[(c.ClientSideDisableVideo = 1)] = 'ClientSideDisableVideo'), (c[(c.SenderStopped = 2)] = 'SenderStopped');
function S(e) {
    if (null == e) return 'UNKNOWN';
    if ('H264' === (e = e.toUpperCase())) return 'H264';
    if ('H265' === e) return 'H265';
    if ('VP8' === e) return 'VP8';
    else if ('VP9' === e) return 'VP9';
    else if ('AV1' === e || 'AV1X' === e) return 'AV1';
    else return 'UNKNOWN';
}
class T {
    static parseInboundStats(e, t) {
        var n, r, i, a, s, o, l, u;
        let c = new T();
        return null == e
            ? c
            : ((c.bytes = e.bytesReceived),
              (c.framesCodec = e.framesDecoded),
              (c.framesCodecError = null !== (n = e.framesDecodeErrors) && void 0 !== n ? n : null),
              (c.framesNetwork = e.framesReceived),
              (c.packets = e.packetsReceived),
              (c.packetsLost = e.packetsLost),
              (c.framesDropped = e.framesDropped),
              (c.resolution = null != e.resolution ? e.resolution.height : 0),
              (c.minorResolution = null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0),
              (c.majorResolution = null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0),
              (c.timestamp = t),
              (c.nackCount = e.nackCount),
              (c.pliCount = e.pliCount),
              (c.decoder = (function (e) {
                  if (null == e) return 'unknown';
                  for (let t of Object.keys(I)) if (e.includes(t)) return I[t];
                  return 'uncategorized';
              })(e.decoderImplementationName)),
              (c.codecType = S(e.codec.name)),
              (c.qpSum = 0),
              (c.freezeCount = e.freezeCount),
              (c.pauseCount = e.pauseCount),
              (c.totalFreezesDuration = e.totalFreezesDuration),
              (c.totalPausesDuration = e.totalPausesDuration),
              (c.totalFramesDuration = e.totalFramesDuration),
              (c.keyframes = null !== (r = e.keyFramesDecoded) && void 0 !== r ? r : null),
              (c.passthroughCount = null !== (i = e.passthroughCount) && void 0 !== i ? i : 0),
              (c.cryptorSuccessCount = null !== (a = e.decryptSuccessCount) && void 0 !== a ? a : 0),
              (c.cryptorFailureCount = null !== (s = e.decryptFailureCount) && void 0 !== s ? s : 0),
              (c.cryptorDuration = null !== (o = e.decryptDuration) && void 0 !== o ? o : 0),
              (c.cryptorAttempts = null !== (l = e.decryptAttempts) && void 0 !== l ? l : 0),
              (c.localWant = null !== (u = e.sinkWantLocalAsInt) && void 0 !== u ? u : 0),
              c);
    }
    static parseOutboundStats(e, t) {
        var n, r, i, a, s, o, l, u, c, d, f, _, p, h, m, g, E, v, I, y, A, N, C, R;
        let O = new T();
        return null == e
            ? O
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
                  encoder: b(e.encoderImplementationName),
                  decoder: null,
                  codecType: S(e.codec.name),
                  nackCount: e.nackCount,
                  pliCount: e.pliCount,
                  qpSum: e.qpSum,
                  freezeCount: null !== (i = e.freezeCount) && void 0 !== i ? i : 0,
                  pauseCount: 0,
                  totalFreezesDuration: null !== (a = e.totalFreezesDuration) && void 0 !== a ? a : 0,
                  totalPausesDuration: 0,
                  totalFramesDuration: null !== (s = e.totalFramesDuration) && void 0 !== s ? s : 0,
                  outboundSinkWant: null !== (o = e.sinkWantAsInt) && void 0 !== o ? o : null,
                  vmafScore: null !== (l = e.encoderQualityVmaf) && void 0 !== l ? l : null,
                  qualityDecodeErrors: null !== (u = e.qualityDecodeErrors) && void 0 !== u ? u : 0,
                  qualityDecoderReboots: null !== (c = e.qualityDecoderReboots) && void 0 !== c ? c : 0,
                  qualityScoreErrors: null !== (d = e.qualityScoreErrors) && void 0 !== d ? d : 0,
                  qualityFrameDrops: null !== (f = e.qualityFrameDrops) && void 0 !== f ? f : 0,
                  qualitySizeMismatches: null !== (_ = e.qualitySizeMismatches) && void 0 !== _ ? _ : 0,
                  psnrDb: null !== (p = e.encoderQualityPsnr) && void 0 !== p ? p : null,
                  keyframes: null !== (h = e.keyFramesEncoded) && void 0 !== h ? h : null,
                  framesDroppedRateLimiter: null !== (m = e.framesDroppedRateLimiter) && void 0 !== m ? m : null,
                  framesDroppedEncoderQueue: null !== (g = e.framesDroppedEncoderQueue) && void 0 !== g ? g : null,
                  framesDroppedCongestionWindow: null !== (E = e.framesDroppedCongestionWindow) && void 0 !== E ? E : null,
                  framesDroppedEncoder: null !== (v = e.framesDroppedEncoder) && void 0 !== v ? v : null,
                  passthroughCount: null !== (I = e.passthroughCount) && void 0 !== I ? I : 0,
                  cryptorSuccessCount: null !== (y = e.encryptSuccessCount) && void 0 !== y ? y : 0,
                  cryptorFailureCount: null !== (A = e.encryptFailureCount) && void 0 !== A ? A : 0,
                  cryptorDuration: null !== (N = e.encryptDuration) && void 0 !== N ? N : 0,
                  cryptorAttempts: null !== (C = e.encryptAttempts) && void 0 !== C ? C : 0,
                  cryptorMaxAttempts: null !== (R = e.encryptMaxAttempts) && void 0 !== R ? R : 0,
                  localWant: 0
              };
    }
    constructor() {
        p(this, 'bytes', 0), p(this, 'framesCodec', 0), p(this, 'framesCodecError', null), p(this, 'framesNetwork', 0), p(this, 'resolution', 0), p(this, 'minorResolution', 0), p(this, 'majorResolution', 0), p(this, 'timestamp', 0), p(this, 'packets', 0), p(this, 'packetsLost', 0), p(this, 'framesDropped', 0), p(this, 'nackCount', 0), p(this, 'pliCount', 0), p(this, 'encoder', null), p(this, 'decoder', null), p(this, 'codecType', null), p(this, 'qpSum', 0), p(this, 'freezeCount', 0), p(this, 'pauseCount', 0), p(this, 'totalFreezesDuration', 0), p(this, 'totalPausesDuration', 0), p(this, 'totalFramesDuration', 0), p(this, 'vmafScore', null), p(this, 'psnrDb', null), p(this, 'outboundSinkWant', null), p(this, 'keyframes', null), p(this, 'framesDroppedRateLimiter', null), p(this, 'framesDroppedEncoderQueue', null), p(this, 'framesDroppedCongestionWindow', null), p(this, 'framesDroppedEncoder', null), p(this, 'passthroughCount', 0), p(this, 'cryptorSuccessCount', 0), p(this, 'cryptorFailureCount', 0), p(this, 'cryptorDuration', 0), p(this, 'cryptorAttempts', 0), p(this, 'cryptorMaxAttempts', 0), p(this, 'qualityDecodeErrors', 0), p(this, 'qualityDecoderReboots', 0), p(this, 'qualityScoreErrors', 0), p(this, 'qualityFrameDrops', 0), p(this, 'qualitySizeMismatches', 0), p(this, 'localWant', 0);
    }
}
class y {
    get isVideoStopped() {
        return 0 !== this.videoStoppedReason;
    }
    get videoStoppedDuration() {
        return this.videoStoppedWatch.elapsed();
    }
    collectAggregationStats(e, t) {
        for (let r of E) {
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
        let { bytes: r, framesCodec: i, timestamp: a, resolution: s, minorResolution: o, majorResolution: l, encoder: u, decoder: c, codecType: d, localWant: f } = t,
            { timestamp: _ } = n,
            p = (a - _) / 1000;
        if (((this.intervalTotal += p), (this.resolutionTotal += s * p), (this.minorResolutionTotal += o * p), (this.majorResolutionTotal += l * p), (this.cryptorMaxAttempts = Math.max(this.cryptorMaxAttempts, t.cryptorMaxAttempts)), null != u && null != d && 'encoderBuckets' in this && ((this.encoderBuckets[u] += p), (this.codecBuckets[d] += p), null != t.codecType && 'UNKNOWN' !== t.codecType && (this.encoderCodec = t.codecType), null != e.vmafScore && e.vmafScore >= 0 && ((this.vmafScoreNum += 1), (this.vmafScoreSum += e.vmafScore), this.vmafHistogram.addSample(e.vmafScore)), null != e.psnrDb && e.psnrDb >= 0 && ((this.psnrDbNum += 1), (this.psnrDbSum += e.psnrDb), this.psnrHistogram.addSample(e.psnrDb)), null != e.outboundSinkWant && 0 !== e.outboundSinkWant && ((this.outboundSinkWantNum += 1), (this.outboundSinkWantSum += e.outboundSinkWant))), null != c && null != d && 'decoderBuckets' in this && ((this.decoderBuckets[c] += p), (this.codecBuckets[d] += p), null != t.codecType && 'UNKNOWN' !== t.codecType && (this.decoderCodec = t.codecType)), this.statsWindow.length < 6)) return;
        let { bytes: E, framesCodec: v, timestamp: I } = this.statsWindow[this.statsWindow.length - 3];
        g.forEach((e) => {
            s <= e && (this.resolutionBuckets[e] += p);
        });
        let b = (a - I) / 1000,
            S = ((r - E) * 8) / b,
            T = (i - v) / b;
        h.forEach((e) => {
            S <= e && (this.bitrateBuckets[e] += p);
        }),
            m.forEach((e) => {
                T <= e && (this.fpsBuckets[e] += p);
            }),
            this.resolutionHistogram.addSample(s),
            this.bitrateHistogram.addSample(S),
            this.fpsHistogram.addSample(T),
            this.localWantHistogram.addSample(f),
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
        p(this, 'decoderBuckets', {
            vp8_libvpx: 0,
            dav1d: 0,
            ffmpeg: 0,
            electron: 0,
            videotoolbox: 0,
            uncategorized: 0,
            unknown: 0
        }),
            p(this, 'codecBuckets', {
                H264: 0,
                H265: 0,
                VP8: 0,
                VP9: 0,
                AV1: 0,
                UNKNOWN: 0
            }),
            p(this, 'statsWindow', []),
            p(this, 'fpsHistogram', new f.b()),
            p(this, 'bitrateHistogram', new f.b()),
            p(this, 'inboundBitrateEstimateHistogram', new f.b()),
            p(this, 'resolutionHistogram', new f.b()),
            p(this, 'localWantHistogram', new f.b()),
            p(this, 'systemResources', new _.Z()),
            p(this, 'decoderCodec', 'UNKNOWN'),
            p(this, 'startTime', void 0),
            p(this, 'timeToFirstFrame', void 0),
            p(this, 'aggregatedProperties', {
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
            p(this, 'aggregationDuration', 0),
            p(this, 'bitrateBuckets', {}),
            p(this, 'fpsBuckets', {}),
            p(this, 'resolutionBuckets', {}),
            p(this, 'resolutionTotal', 0),
            p(this, 'minorResolutionTotal', 0),
            p(this, 'majorResolutionTotal', 0),
            p(this, 'intervalTotal', 0),
            p(this, 'cryptorMaxAttempts', 0),
            p(this, 'videoStoppedWatch', void 0),
            p(this, 'videoStoppedReason', 0),
            (this.startTime = e.now()),
            (this.videoStoppedWatch = new d.G9(e)),
            h.forEach((e) => {
                this.bitrateBuckets[e] = 0;
            }),
            m.forEach((e) => {
                this.fpsBuckets[e] = 0;
            }),
            g.forEach((e) => {
                this.resolutionBuckets[e] = 0;
            });
    }
}
class A extends y {
    appendTargetRates(e, t, n, r) {
        if (this.statsWindow.length < 2) return;
        (e = null != e ? e : 0), (t = null != t ? t : 0), (n = null != n ? n : 0), (r = null != r ? r : 0);
        let i = (this.statsWindow[this.statsWindow.length - 1].timestamp - this.statsWindow[this.statsWindow.length - 2].timestamp) / 1000;
        (this.targetFrames = this.targetFrames + e * i), (this.targetBytesNetwork = this.targetBytesNetwork + (t / 8) * i), (this.targetBytesMax = this.targetBytesMax + (n / 8) * i), (this.outboundBytesAvailable = this.outboundBytesAvailable + (r / 8) * i), this.targetBitrateHistogram.addSample(t), this.outboundBandwidthSurplus.addSample(r - t);
    }
    constructor(...e) {
        super(...e),
            p(this, 'encoderBuckets', {
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
            p(this, 'encoderCodec', 'UNKNOWN'),
            p(this, 'targetFrames', 0),
            p(this, 'targetBytesMax', 0),
            p(this, 'targetBytesNetwork', 0),
            p(this, 'targetBitrateHistogram', new f.b()),
            p(this, 'outboundBytesAvailable', 0),
            p(this, 'outboundBandwidthSurplus', new f.b()),
            p(this, 'averageEncodeTime', 0),
            p(this, 'vmafScoreSum', 0),
            p(this, 'vmafScoreNum', 0),
            p(this, 'vmafHistogram', new f.b()),
            p(this, 'psnrDbSum', 0),
            p(this, 'psnrDbNum', 0),
            p(this, 'psnrHistogram', new f.b()),
            p(this, 'qualityDecodeErrors', 0),
            p(this, 'qualityDecoderReboots', 0),
            p(this, 'qualityScoreErrors', 0),
            p(this, 'qualityFrameDrops', 0),
            p(this, 'qualitySizeMismatches', 0),
            p(this, 'outboundSinkWantSum', 0),
            p(this, 'outboundSinkWantNum', 0),
            p(this, 'framesDroppedRateLimiter', null),
            p(this, 'framesDroppedEncoderQueue', null),
            p(this, 'framesDroppedCongestionWindow', null),
            p(this, 'framesDroppedEncoder', null);
    }
}
