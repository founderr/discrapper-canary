n.d(t, {
    Z: function () {
        return l;
    }
});
var r = n(47120);
var i = n(653041);
var a = n(878604);
function o(e) {
    return {
        id: e.payloadType,
        name: e.mimeType.split('/').slice(1)[0]
    };
}
function s(e) {
    return null === e || 0 === e;
}
function l(e, t, n, r, i) {
    var l, u;
    let c = {},
        d = {},
        _ = [],
        E = [];
    for (let t of e.values())
        switch (t.type) {
            case 'candidate-pair':
                c[t.id] = t;
                break;
            case 'codec':
                d[t.id] = t;
                break;
            case 'inbound-rtp':
                _.push(t);
                break;
            case 'outbound-rtp':
                E.push(t);
        }
    let f = Object.values(c).find((e) => 'succeeded' === e.state);
    if (void 0 === f) return null;
    let h = [];
    for (let e of E) {
        let t = d[e.codecId];
        if (null == t) continue;
        let r = {
            type: e.kind,
            ssrc: e.ssrc,
            timestamp: e.timestamp,
            sinkWant: (0, a.f)(n, e.ssrc, 'video' === e.kind),
            sinkWantAsInt: (0, a.F)(n, e.ssrc),
            codec: o(t),
            bytesSent: e.bytesSent,
            packetsSent: e.packetsSent
        };
        if ('audio' === e.kind)
            h.push({
                ...r,
                type: 'audio'
            });
        else if ('video' === e.kind && i) {
            let t =
                null !== e.frameWidth
                    ? {
                          width: e.frameWidth,
                          height: e.frameHeight
                      }
                    : void 0;
            h.push({
                ...r,
                framesEncoded: e.framesEncoded,
                keyFramesEncoded: e.keyFramesEncoded,
                firCount: e.firCount,
                nackCount: e.nackCount,
                pliCount: e.pliCount,
                bitrateTarget: e.targetBitrate,
                qpSum: e.qpSum,
                averageEncodeTime: null == e.framesEncoded || s(e.totalEncodeTime) ? void 0 : ((1000 * e.totalEncodeTime) / e.framesEncoded).toFixed(1),
                resolution: t,
                framesSent: e.framesSent,
                frameRateInput: e.framesPerSecond,
                type: 'video'
            });
        }
    }
    let p = {};
    for (let e of _) {
        let i = d[e.codecId];
        if (null == i) continue;
        let s = t(e.ssrc);
        if (null == s) continue;
        let l = {
            type: e.kind,
            ssrc: e.ssrc,
            timestamp: e.timestamp,
            sinkWant: (0, a.f)(n, e.ssrc, 'video' === e.kind),
            sinkWantAsInt: (0, a.F)(n, e.ssrc),
            sinkWantLocal: (0, a.f)(r, e.ssrc, 'video' === e.kind),
            codec: o(i),
            bytesReceived: e.bytesReceived,
            packetsReceived: e.packetsReceived,
            packetsLost: e.packetsLost
        };
        if ('audio' === e.kind) {
            let t = void 0 !== e.jitterBufferDelay && void 0 !== e.jitterBufferEmittedCount ? Math.round((1000 * e.jitterBufferDelay) / e.jitterBufferEmittedCount) : 0;
            null == p[s] && (p[s] = []),
                p[s].push({
                    ...l,
                    audioLevel: e.audioLevel,
                    jitter: 1000 * e.jitter,
                    jitterBuffer: t
                });
        } else if ('video' === e.kind) {
            null == p[s] && (p[s] = []);
            let t =
                null !== e.frameWidth
                    ? {
                          width: e.frameWidth,
                          height: e.frameHeight
                      }
                    : void 0;
            p[s].push({
                ...l,
                resolution: t,
                framesDecoded: e.framesDecoded,
                keyFramesDecoded: e.keyFramesDecoded,
                framesDropped: e.framesDropped,
                framesReceived: e.framesReceived,
                frameRateDecode: e.framesPerSecond,
                averageDecodeTime: null == e.framesDecoded || null == e.totalDecodeTime ? void 0 : ((1000 * e.totalDecodeTime) / e.framesDecoded).toFixed(1),
                firCount: e.firCount,
                nackCount: e.nackCount,
                pliCount: e.pliCount,
                freezeCount: e.freezeCount,
                pauseCount: e.pauseCount,
                totalFreezesDuration: e.totalFreezesDuration,
                totalPausesDuration: e.totalPausesDuration,
                qpSum: e.qpSum,
                decoderImplementationName: 'WebRTC'
            });
        }
    }
    let m = (null !== (l = f.currentRoundTripTime) && void 0 !== l ? l : 0) * 1000;
    return {
        transport: {
            availableOutgoingBitrate: null !== (u = f.availableOutgoingBitrate) && void 0 !== u ? u : 0,
            bytesReceived: f.bytesReceived,
            bytesSent: f.bytesSent,
            ping: m
        },
        rtp: {
            inbound: p,
            outbound: h
        }
    };
}
