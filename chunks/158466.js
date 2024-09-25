n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(724458);
var i = n(653041);
var a = n(878604);
function o(e) {
    return e / 32768;
}
function s(e) {
    var t, n, r, i, a, o, s, l, u, c, d, _, E, f, h, p, m, I, T, g, S;
    let A = (null !== (c = null == e ? void 0 : e.headerBytes) && void 0 !== c ? c : 0) + (null !== (d = null == e ? void 0 : e.payloadBytes) && void 0 !== d ? d : 0) + (null !== (_ = null == e ? void 0 : e.paddingBytes) && void 0 !== _ ? _ : 0);
    return (null !== (E = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.headerBytes) && void 0 !== E ? E : 0) + (null !== (f = null == e ? void 0 : null === (n = e.fec) || void 0 === n ? void 0 : n.payloadBytes) && void 0 !== f ? f : 0) + (null !== (h = null == e ? void 0 : null === (r = e.fec) || void 0 === r ? void 0 : r.paddingBytes) && void 0 !== h ? h : 0) + (null !== (p = null == e ? void 0 : null === (i = e.retransmitted) || void 0 === i ? void 0 : i.headerBytes) && void 0 !== p ? p : 0) + (null !== (m = null == e ? void 0 : null === (a = e.retransmitted) || void 0 === a ? void 0 : a.payloadBytes) && void 0 !== m ? m : 0) + (null !== (I = null == e ? void 0 : null === (o = e.retransmitted) || void 0 === o ? void 0 : o.paddingBytes) && void 0 !== I ? I : 0) + (null !== (T = null == e ? void 0 : null === (s = e.transmitted) || void 0 === s ? void 0 : s.headerBytes) && void 0 !== T ? T : 0) + (null !== (g = null == e ? void 0 : null === (l = e.transmitted) || void 0 === l ? void 0 : l.payloadBytes) && void 0 !== g ? g : 0) + (null !== (S = null == e ? void 0 : null === (u = e.transmitted) || void 0 === u ? void 0 : u.paddingBytes) && void 0 !== S ? S : 0) + A;
}
function l(e) {
    var t, n, r, i, a, o, s;
    let l = null !== (i = null == e ? void 0 : e.packets) && void 0 !== i ? i : 0;
    return (null !== (a = null == e ? void 0 : null === (t = e.fec) || void 0 === t ? void 0 : t.packets) && void 0 !== a ? a : 0) + (null !== (o = null == e ? void 0 : null === (n = e.retransmitted) || void 0 === n ? void 0 : n.packets) && void 0 !== o ? o : 0) + (null !== (s = null == e ? void 0 : null === (r = e.transmitted) || void 0 === r ? void 0 : r.packets) && void 0 !== s ? s : 0) + l;
}
function u(e) {
    return null != e
        ? {
              last: Math.round(1000 * e.last),
              mean: Math.round(1000 * e.mean),
              p75: Math.round(1000 * e.p75),
              p95: Math.round(1000 * e.p95),
              p99: Math.round(1000 * e.p99),
              max: Math.round(1000 * e.max)
          }
        : null;
}
function c(e) {
    let t = {};
    for (let n in e) t[n] = u(e[n]);
    return t;
}
function d(e, t) {
    var n, r, i, o, u, c, d, _, E, f, h, p, m, I, T, g, S, A, v, N, O, R, C, y;
    let b = e.substreams.find((e) => !e.isRTX && !e.isFlexFEC);
    if (null == b) return;
    let L = e.substreams.reduce((e, t) => e + s(t.rtpStats), 0),
        D = e.substreams.reduce((e, t) => e + l(t.rtpStats), 0);
    return {
        type: 'video',
        ssrc: b.ssrc,
        sinkWant: (0, a.f)(t, b.ssrc, !0),
        sinkWantAsInt: (0, a.F)(t, b.ssrc),
        codec: {
            id: e.codecPayloadType,
            name: e.codecName
        },
        keyFrameInterval: e.keyFrameInterval,
        bytesSent: L,
        packetsSent: D,
        packetsLost: null !== (m = null === (n = b.rtcpStats) || void 0 === n ? void 0 : n.packetsLost) && void 0 !== m ? m : 0,
        fractionLost: null !== (I = null === (r = b.rtcpStats) || void 0 === r ? void 0 : r.fractionLost) && void 0 !== I ? I : 0,
        bitrate: e.mediaBitrate,
        bitrateTarget: e.targetMediaBitrate,
        encoderImplementationName: e.encoderImplementationName,
        encodeUsage: e.encodeUsage,
        averageEncodeTime: e.avgEncodeTime,
        resolution: {
            height: b.height,
            width: b.width
        },
        framesSent: b.frameCounts.keyFrames + b.frameCounts.deltaFrames,
        keyFramesEncoded: b.frameCounts.keyFrames,
        framesEncoded: e.framesEncoded,
        frameRateInput: e.inputFrameRate,
        frameRateEncode: e.encodeFrameRate,
        firCount: null !== (T = null === (i = b.rtcpStats) || void 0 === i ? void 0 : i.firPackets) && void 0 !== T ? T : 0,
        nackCount: null !== (g = null === (o = b.rtcpStats) || void 0 === o ? void 0 : o.nackPackets) && void 0 !== g ? g : 0,
        pliCount: null !== (S = null === (u = b.rtcpStats) || void 0 === u ? void 0 : u.pliPackets) && void 0 !== S ? S : 0,
        qpSum: e.qpSum,
        bandwidthLimitedResolution: e.bwLimitedResolution,
        framesDroppedRateLimiter: e.framesDroppedRateLimiter,
        framesDroppedEncoderQueue: e.framesDroppedEncoderQueue,
        framesDroppedCongestionWindow: e.framesDroppedCongestionWindow,
        framesDroppedEncoder: e.framesDroppedEncoder,
        cpuLimitedResolution: e.cpuLimitedResolution,
        encoderQualityVmaf: null !== (A = null === (c = b.encoderQualityStats) || void 0 === c ? void 0 : c.imageQualityVmaf_v061) && void 0 !== A ? A : void 0,
        encoderQualityPsnr: null !== (v = null === (d = b.encoderQualityStats) || void 0 === d ? void 0 : d.imageQualityWebrtcPsnrDb) && void 0 !== v ? v : void 0,
        qualityDecodeErrors: null !== (N = null === (_ = b.encoderQualityStats) || void 0 === _ ? void 0 : _.decodeErrors) && void 0 !== N ? N : void 0,
        qualityDecoderReboots: null !== (O = null === (E = b.encoderQualityStats) || void 0 === E ? void 0 : E.decoderReboots) && void 0 !== O ? O : void 0,
        qualityScoreErrors: null !== (R = null === (f = b.encoderQualityStats) || void 0 === f ? void 0 : f.scoreErrors) && void 0 !== R ? R : void 0,
        qualityFrameDrops: null !== (C = null === (h = b.encoderQualityStats) || void 0 === h ? void 0 : h.frameDrops) && void 0 !== C ? C : void 0,
        qualitySizeMismatches: null !== (y = null === (p = b.encoderQualityStats) || void 0 === p ? void 0 : p.sizeMismatches) && void 0 !== y ? y : void 0,
        filter: e.filter,
        passthroughCount: e.passthroughCount,
        encryptSuccessCount: e.encryptSuccessCount,
        encryptFailureCount: e.encryptFailureCount,
        encryptDuration: e.encryptDuration,
        encryptAttempts: e.encryptAttempts,
        encryptMaxAttempts: e.encryptMaxAttempts,
        hqSimulcastStreamEncoded: e.hqSimulcastStreamEncoded,
        lqSimulcastStreamEncoded: e.lqSimulcastStreamEncoded,
        bandwidthLimitedFrameRate: e.bwLimitedFrameRate
    };
}
function _(e, t, n, r) {
    var i, o;
    let u = s(e.rtpStats),
        d = l(e.rtpStats);
    return {
        type: 'video',
        ssrc: e.ssrc,
        sinkWant: (0, a.f)(t, e.ssrc, !0),
        sinkWantAsInt: (0, a.F)(t, e.ssrc),
        sinkWantLocal: (0, a.f)(n, e.ssrc, !0),
        codec: {
            id: e.codecPayloadType,
            name: e.codecName
        },
        bytesReceived: u,
        packetsReceived: d,
        packetsLost: null !== (i = e.rtpStats.packetsLost) && void 0 !== i ? i : e.rtcpStats.packetsLost,
        fractionLost: e.rtcpStats.fractionLost,
        bitrate: e.totalBitrate,
        jitterBuffer: e.jitterBuffer,
        currentDelay: e.currentDelay,
        targetDelay: e.targetDelay,
        minPlayoutDelay: e.minPlayoutDelay,
        renderDelay: e.renderDelay,
        averageDecodeTime: e.decode,
        resolution: {
            height: e.height,
            width: e.width
        },
        decoderImplementationName: e.decoderImplementationName,
        framesDecoded: e.framesDecoded,
        framesDropped: e.framesDropped,
        framesDecodeErrors: e.framesDecodeErrors,
        framesReceived: e.frameCounts.keyFrames + e.frameCounts.deltaFrames,
        networkFramesDropped: null !== (o = e.networkFramesDropped) && void 0 !== o ? o : 0,
        keyFramesDecoded: e.frameCounts.keyFrames,
        frameRateDecode: e.decodeFrameRate,
        frameRateNetwork: e.networkFrameRate,
        frameRateRender: e.renderFrameRate,
        firCount: e.rtcpStats.firPackets,
        nackCount: e.rtcpStats.nackPackets,
        pliCount: e.rtcpStats.pliPackets,
        qpSum: e.qpSum,
        freezeCount: e.freezeCount,
        pauseCount: e.pauseCount,
        totalFreezesDuration: e.totalFreezesDuration,
        totalPausesDuration: e.totalPausesDuration,
        totalFramesDuration: e.totalFramesDuration,
        sumOfSquaredFramesDurations: e.sumOfSquaredFramesDurations,
        passthroughCount: e.passthroughCount,
        decryptSuccessCount: e.decryptSuccessCount,
        decryptFailureCount: e.decryptFailureCount,
        decryptDuration: e.decryptDuration,
        decryptAttempts: e.decryptAttempts,
        ...(null != r
            ? c({
                  videoJitterBuffer: r.videoJitterBuffer,
                  videoJitterDelay: r.videoJitterDelay,
                  videoJitterTarget: r.videoJitterTarget
              })
            : {})
    };
}
function E(e, t, n, r) {
    var i, l, u, E, f;
    let h = null,
        p = null,
        m = 'string' == typeof t ? JSON.parse(t) : t,
        I = [];
    if (null != m.outbound) {
        let { audio: e, video: t, videos: r } = m.outbound;
        if (
            (null != e &&
                ((p = (null != p ? p : 0) + e.bytesSent),
                I.push({
                    type: 'audio',
                    ssrc: e.ssrc,
                    sinkWant: (0, a.f)(n, e.ssrc, !1),
                    sinkWantAsInt: (0, a.F)(n, e.ssrc),
                    codec: {
                        id: e.codecPayloadType,
                        name: e.codecName
                    },
                    bytesSent: e.bytesSent,
                    packetsSent: e.packetsSent,
                    packetsLost: Math.max(0, e.packetsLost),
                    fractionLost: 100 * e.fractionLost,
                    audioLevel: o(e.audioLevel),
                    audioDetected: e.speaking,
                    framesCaptured: e.framesCaptured,
                    framesRendered: e.framesRendered,
                    noiseCancellerFrames: e.noiseCancellerFrames,
                    noiseCancellerProcessTime: e.noiseCancellerProcessTime,
                    voiceActivityDetectorProcessTime: e.voiceActivityDetectorProcessTime,
                    passthroughCount: e.passthroughCount,
                    encryptSuccessCount: e.encryptSuccessCount,
                    encryptFailureCount: e.encryptFailureCount,
                    encryptDuration: e.encryptDuration,
                    encryptAttempts: e.encryptAttempts,
                    encryptMaxAttempts: e.encryptMaxAttempts
                })),
            null != r)
        )
            r.forEach((e) => {
                let t = d(e, n);
                null != t && ((p = (null != p ? p : 0) + t.bytesSent), I.push(t));
            });
        else if (null != t) {
            let e = d(t, n);
            null != e && ((p = (null != p ? p : 0) + e.bytesSent), I.push(e));
        }
    }
    let T = {};
    null != m.inbound &&
        m.inbound.forEach((e) => {
            let { id: t, audio: i, video: l, videos: u, playout: d } = e;
            if (
                ((T[t] = []),
                null != i &&
                    ((h = (null != h ? h : 0) + i.bytesReceived),
                    T[t].push({
                        type: 'audio',
                        ssrc: i.ssrc,
                        sinkWant: (0, a.f)(n, i.ssrc, !1),
                        sinkWantAsInt: (0, a.F)(n, i.ssrc),
                        codec: {
                            id: i.codecPayloadType,
                            name: i.codecName
                        },
                        bytesReceived: i.bytesReceived,
                        packetsReceived: i.packetsReceived,
                        packetsLost: i.packetsLost,
                        fractionLost: 100 * i.fractionLost,
                        fecPacketsReceived: i.fecPacketsReceived,
                        fecPacketsDiscarded: i.fecPacketsDiscarded,
                        audioLevel: o(i.audioLevel),
                        audioDetected: i.speaking,
                        jitter: i.jitter,
                        jitterBuffer: i.jitterBuffer,
                        jitterBufferPreferred: i.jitterBufferPreferred,
                        decodingCNG: i.decodingCNG,
                        decodingMutedOutput: i.decodingMutedOutput,
                        decodingNormal: i.decodingNormal,
                        decodingPLC: i.decodingPLC,
                        decodingPLCCNG: i.decodingPLCCNG,
                        nackCount: i.nackCount,
                        accelerateRate: 100 * i.accelerateRate,
                        expandRate: 100 * i.expandRate,
                        preemptiveExpandRate: 100 * i.preemptiveExpandRate,
                        speechExpandRate: 100 * i.speechExpandRate,
                        secondaryDecodedRate: 100 * i.secondaryDecodedRate,
                        opSilence: i.opSilence,
                        opNormal: i.opNormal,
                        opMerge: i.opMerge,
                        opExpand: i.opExpand,
                        opAccelerate: i.opAccelerate,
                        opPreemptiveExpand: i.opPreemptiveExpand,
                        opCNG: i.opCNG,
                        delayEstimate: i.delayEstimate,
                        passthroughCount: i.passthroughCount,
                        decryptSuccessCount: i.decryptSuccessCount,
                        decryptFailureCount: i.decryptFailureCount,
                        decryptDuration: i.decryptDuration,
                        decryptAttempts: i.decryptAttempts,
                        ...(null != d
                            ? c({
                                  audioJitterBuffer: d.audioJitterBuffer,
                                  audioJitterDelay: d.audioJitterDelay,
                                  audioJitterTarget: d.audioJitterTarget,
                                  audioPlayoutUnderruns: d.audioPlayoutUnderruns,
                                  relativeReceptionDelay: d.relativeReceptionDelay,
                                  relativePlayoutDelay: d.relativePlayoutDelay
                              })
                            : {})
                    })),
                null != u)
            )
                u.forEach((e) => {
                    let i = _(e, n, r, d);
                    if (null != i) {
                        let n = s(e.rtpStats);
                        (h = (null != h ? h : 0) + n), T[t].push(i);
                    }
                });
            else if (null != l) {
                let e = _(l, n, r, d);
                if (null != e) {
                    let n = s(l.rtpStats);
                    (h = (null != h ? h : 0) + n), T[t].push(e);
                }
            }
        });
    let { transport: g, clips: S } = m,
        A = {};
    null != g && ((A.availableOutgoingBitrate = g.sendBandwidth), (A.ping = g.rtt), (A.decryptionFailures = g.decryptionFailures), null != g.routingFailures && (A.routingFailures = g.routingFailures), (A.localAddress = g.localAddress), (A.pacerDelay = g.pacerDelay), null != g.receiverReports && (A.receiverReports = g.receiverReports), (A.receiverBitrateEstimate = g.receiverBitrateEstimate), (A.outboundBitrateEstimate = g.outboundBitrateEstimate), (A.inboundBitrateEstimate = null !== (i = g.inboundBitrateEstimate) && void 0 !== i ? i : 0), (A.packetsReceived = g.packetsReceived), (A.packetsSent = g.packetsSent), null != g.secureFramesProtocolVersion && (A.secureFramesProtocolVersion = g.secureFramesProtocolVersion)), ((null == g ? void 0 : g.bytesReceived) != null || (null != h && !Number.isNaN(h))) && (A.bytesReceived = null !== (u = null !== (l = null == g ? void 0 : g.bytesReceived) && void 0 !== l ? l : h) && void 0 !== u ? u : void 0), ((null == g ? void 0 : g.bytesSent) != null || (null != p && !Number.isNaN(p))) && (A.bytesSent = null !== (f = null !== (E = null == g ? void 0 : g.bytesSent) && void 0 !== E ? E : p) && void 0 !== f ? f : void 0);
    let { screenshare: v, camera: N } = m;
    return {
        mediaEngineConnectionId: e,
        transport: A,
        screenshare: v,
        camera:
            null != N
                ? {
                      capturedFramesDropped: N.capturedFramesDropped,
                      capturedFramesCount: N.capturedFramesCount,
                      capturedFramesMean: N.capturedFramesMean,
                      capturedFramesStdev: N.capturedFramesStdev
                  }
                : null,
        clips: S,
        rtp: {
            inbound: T,
            outbound: I
        }
    };
}
