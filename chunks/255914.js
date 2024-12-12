r.d(n, {
    Mq: function () {
        return o;
    },
    Su: function () {
        return a;
    },
    gr: function () {
        return s;
    },
    lG: function () {
        return I;
    },
    m7: function () {
        return S;
    },
    nt: function () {
        return A;
    },
    u7: function () {
        return i;
    },
    z4: function () {
        return y;
    }
});
var i,
    a,
    s,
    o,
    l = r(47120);
var u = r(653041);
var c = r(379649),
    d = r(909766),
    f = r(179654);
function _(e, n, r) {
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
let h = [0, 500000, 1000000, 1500000, 2000000, 3000000, 4000000, 5000000, 6000000, 7000000, 8000000],
    p = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    m = [720, 480, 360],
    g = ['framesCodec', 'framesNetwork', 'packets', 'packetsLost', 'framesDropped', 'framesCodecError', 'bytes', 'nackCount', 'pliCount', 'qpSum', 'freezeCount', 'pauseCount', 'totalFreezesDuration', 'totalPausesDuration', 'totalFramesDuration', 'keyframes', 'passthroughCount', 'cryptorSuccessCount', 'cryptorFailureCount', 'cryptorDuration', 'cryptorAttempts', 'cryptorMissingKeyCount', 'cryptorInvalidNonceCount', 'qualityDecodeErrors', 'qualityDecoderReboots', 'qualityScoreErrors', 'qualityFrameDrops', 'qualitySizeMismatches'];
!(function (e) {
    (e.H264 = 'H264'), (e.H265 = 'H265'), (e.VP8 = 'VP8'), (e.VP9 = 'VP9'), (e.AV1 = 'AV1'), (e.UNKNOWN = 'UNKNOWN');
})(i || (i = {})),
    !(function (e) {
        (e.NVIDIA_CUDA = 'nvidia_cuda'), (e.NVIDIA_DIRECT_3D = 'nvidia_direct_3d'), (e.OPENH264 = 'openh264'), (e.VIDEOTOOLBOX = 'videotoolbox'), (e.AMD_DIRECT_3D = 'amd_direct_3d'), (e.INTEL = 'intel'), (e.INTEL_DIRECT_3D = 'intel_direct_3d'), (e.VP8_LIBVPX = 'vp8_libvpx'), (e.UNCATEGORIZED = 'uncategorized'), (e.UNKNOWN = 'unknown');
    })(a || (a = {})),
    !(function (e) {
        (e.VIDEOTOOLBOX = 'videotoolbox'), (e.VP8_LIBVPX = 'vp8_libvpx'), (e.ELECTRON = 'electron'), (e.FFMPEG = 'ffmpeg'), (e.DAV1D = 'dav1d'), (e.UNCATEGORIZED = 'uncategorized'), (e.UNKNOWN = 'unknown');
    })(s || (s = {}));
let E = Object.freeze({
        'nvidia: cuda': 'nvidia_cuda',
        'nvidia: direct3d': 'nvidia_direct_3d',
        'amd: direct3d': 'amd_direct_3d',
        'intel: direct3d': 'intel_direct_3d',
        intel: 'intel',
        VideoToolbox: 'videotoolbox',
        OpenH264: 'openh264',
        libvpx: 'vp8_libvpx'
    }),
    v = Object.freeze({
        VideoToolbox: 'videotoolbox',
        libvpx: 'vp8_libvpx',
        electron: 'electron',
        ffmpeg: 'ffmpeg',
        dav1d: 'dav1d'
    });
function I(e) {
    if (null == e) return 'unknown';
    for (let n of Object.keys(E)) if (e.includes(n)) return E[n];
    return 'uncategorized';
}
function T(e) {
    if (null == e) return 'unknown';
    for (let n of Object.keys(v)) if (e.includes(n)) return v[n];
    return 'uncategorized';
}
function b(e) {
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
class y {
    static parseInboundStats(e, n) {
        var r, i, a, s, o, l, u, c, d, f;
        let _ = new y();
        return null == e ? _ : ((_.bytes = e.bytesReceived), (_.framesCodec = e.framesDecoded), (_.framesCodecError = null !== (r = e.framesDecodeErrors) && void 0 !== r ? r : null), (_.framesNetwork = e.framesReceived), (_.packets = e.packetsReceived), (_.packetsLost = e.packetsLost), (_.framesDropped = e.framesDropped), (_.resolution = null != e.resolution ? e.resolution.height : 0), (_.minorResolution = null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0), (_.majorResolution = null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0), (_.timestamp = n), (_.nackCount = e.nackCount), (_.pliCount = e.pliCount), (_.decoder = T(e.decoderImplementationName)), (_.codecType = b(e.codec.name)), (_.qpSum = 0), (_.freezeCount = e.freezeCount), (_.pauseCount = e.pauseCount), (_.totalFreezesDuration = e.totalFreezesDuration), (_.totalPausesDuration = e.totalPausesDuration), (_.totalFramesDuration = e.totalFramesDuration), (_.keyframes = null !== (i = e.keyFramesDecoded) && void 0 !== i ? i : null), (_.passthroughCount = null !== (a = e.passthroughCount) && void 0 !== a ? a : 0), (_.cryptorSuccessCount = null !== (s = e.decryptSuccessCount) && void 0 !== s ? s : 0), (_.cryptorFailureCount = null !== (o = e.decryptFailureCount) && void 0 !== o ? o : 0), (_.cryptorDuration = null !== (l = e.decryptDuration) && void 0 !== l ? l : 0), (_.cryptorAttempts = null !== (u = e.decryptAttempts) && void 0 !== u ? u : 0), (_.cryptorMissingKeyCount = null !== (c = e.decryptMissingKeyCount) && void 0 !== c ? c : 0), (_.cryptorInvalidNonceCount = null !== (d = e.decryptInvalidNonceCount) && void 0 !== d ? d : 0), (_.localWant = null !== (f = e.sinkWantLocalAsInt) && void 0 !== f ? f : 0), _);
    }
    static parseOutboundStats(e, n) {
        var r, i, a, s, o, l, u, c, d, f, _, h, p, m, g, E, v, T, S, A, N, C, R, O, D;
        let L = new y();
        return null == e
            ? L
            : {
                  bytes: e.bytesSent,
                  framesCodec: e.framesEncoded,
                  framesCodecError: null,
                  framesNetwork: null !== (r = e.framesSent) && void 0 !== r ? r : 0,
                  packets: e.packetsSent,
                  packetsLost: null !== (i = e.packetsLost) && void 0 !== i ? i : 0,
                  framesDropped: 0,
                  resolution: null != e.resolution ? e.resolution.height : 0,
                  minorResolution: null != e.resolution ? Math.min(e.resolution.height, e.resolution.width) : 0,
                  majorResolution: null != e.resolution ? Math.max(e.resolution.height, e.resolution.width) : 0,
                  timestamp: n,
                  encoder: I(e.encoderImplementationName),
                  decoder: null,
                  codecType: b(e.codec.name),
                  nackCount: e.nackCount,
                  pliCount: e.pliCount,
                  qpSum: e.qpSum,
                  freezeCount: null !== (a = e.freezeCount) && void 0 !== a ? a : 0,
                  pauseCount: 0,
                  totalFreezesDuration: null !== (s = e.totalFreezesDuration) && void 0 !== s ? s : 0,
                  totalPausesDuration: 0,
                  totalFramesDuration: null !== (o = e.totalFramesDuration) && void 0 !== o ? o : 0,
                  outboundSinkWant: null !== (l = e.sinkWantAsInt) && void 0 !== l ? l : null,
                  vmafScore: null !== (u = e.encoderQualityVmaf) && void 0 !== u ? u : null,
                  qualityDecodeErrors: null !== (c = e.qualityDecodeErrors) && void 0 !== c ? c : 0,
                  qualityDecoderReboots: null !== (d = e.qualityDecoderReboots) && void 0 !== d ? d : 0,
                  qualityScoreErrors: null !== (f = e.qualityScoreErrors) && void 0 !== f ? f : 0,
                  qualityFrameDrops: null !== (_ = e.qualityFrameDrops) && void 0 !== _ ? _ : 0,
                  qualitySizeMismatches: null !== (h = e.qualitySizeMismatches) && void 0 !== h ? h : 0,
                  psnrDb: null !== (p = e.encoderQualityPsnr) && void 0 !== p ? p : null,
                  keyframes: null !== (m = e.keyFramesEncoded) && void 0 !== m ? m : null,
                  framesDroppedRateLimiter: null !== (g = e.framesDroppedRateLimiter) && void 0 !== g ? g : null,
                  framesDroppedEncoderQueue: null !== (E = e.framesDroppedEncoderQueue) && void 0 !== E ? E : null,
                  framesDroppedCongestionWindow: null !== (v = e.framesDroppedCongestionWindow) && void 0 !== v ? v : null,
                  framesDroppedEncoder: null !== (T = e.framesDroppedEncoder) && void 0 !== T ? T : null,
                  passthroughCount: null !== (S = e.passthroughCount) && void 0 !== S ? S : 0,
                  cryptorSuccessCount: null !== (A = e.encryptSuccessCount) && void 0 !== A ? A : 0,
                  cryptorFailureCount: null !== (N = e.encryptFailureCount) && void 0 !== N ? N : 0,
                  cryptorDuration: null !== (C = e.encryptDuration) && void 0 !== C ? C : 0,
                  cryptorAttempts: null !== (R = e.encryptAttempts) && void 0 !== R ? R : 0,
                  cryptorMaxAttempts: null !== (O = e.encryptMaxAttempts) && void 0 !== O ? O : 0,
                  cryptorMissingKeyCount: null !== (D = e.encryptMissingKeyCount) && void 0 !== D ? D : 0,
                  cryptorInvalidNonceCount: 0,
                  localWant: 0
              };
    }
    constructor() {
        _(this, 'bytes', 0), _(this, 'framesCodec', 0), _(this, 'framesCodecError', null), _(this, 'framesNetwork', 0), _(this, 'resolution', 0), _(this, 'minorResolution', 0), _(this, 'majorResolution', 0), _(this, 'timestamp', 0), _(this, 'packets', 0), _(this, 'packetsLost', 0), _(this, 'framesDropped', 0), _(this, 'nackCount', 0), _(this, 'pliCount', 0), _(this, 'encoder', null), _(this, 'decoder', null), _(this, 'codecType', null), _(this, 'qpSum', 0), _(this, 'freezeCount', 0), _(this, 'pauseCount', 0), _(this, 'totalFreezesDuration', 0), _(this, 'totalPausesDuration', 0), _(this, 'totalFramesDuration', 0), _(this, 'vmafScore', null), _(this, 'psnrDb', null), _(this, 'outboundSinkWant', null), _(this, 'keyframes', null), _(this, 'framesDroppedRateLimiter', null), _(this, 'framesDroppedEncoderQueue', null), _(this, 'framesDroppedCongestionWindow', null), _(this, 'framesDroppedEncoder', null), _(this, 'passthroughCount', 0), _(this, 'cryptorSuccessCount', 0), _(this, 'cryptorFailureCount', 0), _(this, 'cryptorDuration', 0), _(this, 'cryptorAttempts', 0), _(this, 'cryptorMaxAttempts', 0), _(this, 'cryptorMissingKeyCount', 0), _(this, 'cryptorInvalidNonceCount', 0), _(this, 'qualityDecodeErrors', 0), _(this, 'qualityDecoderReboots', 0), _(this, 'qualityScoreErrors', 0), _(this, 'qualityFrameDrops', 0), _(this, 'qualitySizeMismatches', 0), _(this, 'localWant', 0);
    }
}
class S {
    get isVideoStopped() {
        return 0 !== this.videoStoppedReason;
    }
    get videoStoppedDuration() {
        return this.videoStoppedWatch.elapsed();
    }
    collectAggregationStats(e, n) {
        for (let i of g) {
            var r;
            let a = e[i];
            if (null === a) continue;
            let s = null !== (r = n[i]) && void 0 !== r ? r : 0;
            s > a ? (this.aggregatedProperties[i] += a) : (this.aggregatedProperties[i] += a - s);
        }
        this.aggregationDuration += e.timestamp - n.timestamp;
    }
    setVideoStopped(e, n) {
        if (e) {
            (this.videoStoppedReason |= n), this.videoStoppedWatch.start();
            return;
        }
        (this.videoStoppedReason &= ~n), 0 === this.videoStoppedReason && (this.statsWindow.splice(0), this.videoStoppedWatch.stop());
    }
    appendAndIncrementStats(e) {
        if (this.isVideoStopped) return;
        if ((this.statsWindow.push(e), this.statsWindow.length < 2)) return;
        let n = this.statsWindow[this.statsWindow.length - 1],
            r = this.statsWindow[this.statsWindow.length - 2];
        this.collectAggregationStats(n, r);
        let { bytes: i, framesCodec: a, timestamp: s, resolution: o, minorResolution: l, majorResolution: u, encoder: c, decoder: d, codecType: f, localWant: _ } = n,
            { timestamp: g } = r,
            E = (s - g) / 1000;
        if (((this.intervalTotal += E), (this.resolutionTotal += o * E), (this.minorResolutionTotal += l * E), (this.majorResolutionTotal += u * E), (this.cryptorMaxAttempts = Math.max(this.cryptorMaxAttempts, n.cryptorMaxAttempts)), null != c && null != f && 'encoderBuckets' in this)) {
            let r = this;
            (r.encoderBuckets[c] += E), (r.codecBuckets[f] += E), null != n.codecType && 'UNKNOWN' !== n.codecType && (r.encoderCodec = n.codecType), null != e.vmafScore && e.vmafScore >= 0 && ((r.vmafScoreNum += 1), (r.vmafScoreSum += e.vmafScore), r.vmafHistogram.addSample(e.vmafScore)), null != e.psnrDb && e.psnrDb >= 0 && ((r.psnrDbNum += 1), (r.psnrDbSum += e.psnrDb), r.psnrHistogram.addSample(e.psnrDb)), null != e.outboundSinkWant && 0 !== e.outboundSinkWant && ((r.outboundSinkWantNum += 1), (r.outboundSinkWantSum += e.outboundSinkWant));
        }
        if (null != d && null != f && 'decoderBuckets' in this) {
            let e = this;
            (e.decoderBuckets[d] += E), (e.codecBuckets[f] += E), null != n.codecType && 'UNKNOWN' !== n.codecType && (e.decoderCodec = n.codecType);
        }
        if (this.statsWindow.length < 6) return;
        let { bytes: v, framesCodec: I, timestamp: T } = this.statsWindow[this.statsWindow.length - 3];
        m.forEach((e) => {
            o <= e && (this.resolutionBuckets[e] += E);
        });
        let b = (s - T) / 1000,
            y = ((i - v) * 8) / b,
            S = (a - I) / b;
        h.forEach((e) => {
            y <= e && (this.bitrateBuckets[e] += E);
        }),
            p.forEach((e) => {
                S <= e && (this.fpsBuckets[e] += E);
            }),
            this.resolutionHistogram.addSample(o),
            this.bitrateHistogram.addSample(y),
            this.fpsHistogram.addSample(S),
            this.localWantHistogram.addSample(_),
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
        for (let [n, r] of Object.entries(this.codecBuckets)) r > 0 && e.add(n);
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
            _(this, 'fpsHistogram', new d.b()),
            _(this, 'bitrateHistogram', new d.b()),
            _(this, 'inboundBitrateEstimateHistogram', new d.b()),
            _(this, 'resolutionHistogram', new d.b()),
            _(this, 'localWantHistogram', new d.b()),
            _(this, 'systemResources', new f.Z()),
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
                cryptorMissingKeyCount: 0,
                cryptorInvalidNonceCount: 0,
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
            (this.videoStoppedWatch = new c.G9(e)),
            h.forEach((e) => {
                this.bitrateBuckets[e] = 0;
            }),
            p.forEach((e) => {
                this.fpsBuckets[e] = 0;
            }),
            m.forEach((e) => {
                this.resolutionBuckets[e] = 0;
            });
    }
}
class A extends S {
    appendTargetRates(e, n, r, i) {
        if (this.statsWindow.length < 2) return;
        (e = null != e ? e : 0), (n = null != n ? n : 0), (r = null != r ? r : 0), (i = null != i ? i : 0);
        let a = (this.statsWindow[this.statsWindow.length - 1].timestamp - this.statsWindow[this.statsWindow.length - 2].timestamp) / 1000;
        (this.targetFrames = this.targetFrames + e * a), (this.targetBytesNetwork = this.targetBytesNetwork + (n / 8) * a), (this.targetBytesMax = this.targetBytesMax + (r / 8) * a), (this.outboundBytesAvailable = this.outboundBytesAvailable + (i / 8) * a), this.targetBitrateHistogram.addSample(n), this.outboundBandwidthSurplus.addSample(i - n);
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
            _(this, 'targetBitrateHistogram', new d.b()),
            _(this, 'outboundBytesAvailable', 0),
            _(this, 'outboundBandwidthSurplus', new d.b()),
            _(this, 'averageEncodeTime', 0),
            _(this, 'vmafScoreSum', 0),
            _(this, 'vmafScoreNum', 0),
            _(this, 'vmafHistogram', new d.b()),
            _(this, 'psnrDbSum', 0),
            _(this, 'psnrDbNum', 0),
            _(this, 'psnrHistogram', new d.b()),
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
