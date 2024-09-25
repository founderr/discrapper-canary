n.d(t, {
    $6: function () {
        return w;
    },
    MP: function () {
        return L;
    },
    Mg: function () {
        return R;
    },
    Nl: function () {
        return P;
    },
    Ns: function () {
        return i;
    },
    Rx: function () {
        return D;
    },
    nX: function () {
        return x;
    },
    sc: function () {
        return U;
    }
});
var r,
    i,
    a = n(47120);
var o = n(536091);
var s = n(411104);
var l = n(653041);
var u = n(724458);
var c = n(852437);
var d = n(403644),
    _ = n.n(d),
    E = n(565925),
    f = n.n(E),
    h = n(21690),
    p = n.n(h),
    m = n(264344),
    I = n.n(m),
    T = n(988367),
    g = n(259443),
    S = n(65154),
    A = n(436620);
let v = 4,
    N = new g.Y('SDP');
!(function (e) {
    (e.AUDIO = 'a'), (e.VIDEO = 'v');
})(r || (r = {})),
    !(function (e) {
        (e.SENDRECV = 'sendrecv'), (e.SENDONLY = 'sendonly'), (e.RECVONLY = 'recvonly'), (e.INACTIVE = 'inactive');
    })(i || (i = {}));
let O = 'UDP/TLS/RTP/SAVPF';
function R(e) {
    switch (e) {
        case 'recvonly':
            return 'sendonly';
        case 'sendonly':
            return 'recvonly';
        case 'sendrecv':
            return 'sendrecv';
        default:
            return 'inactive';
    }
}
function C(e, t, n) {
    let r = ''.concat(e, '-').concat(t),
        i = ''.concat(n).concat(r);
    return [
        {
            attribute: 'cname',
            id: t,
            value: r
        },
        {
            attribute: 'msid',
            id: t,
            value: ''.concat(r, ' ').concat(i)
        },
        {
            attribute: 'mslabel',
            id: t,
            value: r
        },
        {
            attribute: 'label',
            id: t,
            value: i
        }
    ];
}
function y(e) {
    return T.write({
        version: 0,
        timing: {
            start: 0,
            stop: 0
        },
        origin: {
            address: '127.0.0.1',
            ipVer: 4,
            netType: 'IN',
            sessionId: '1420070400000',
            sessionVersion: 0,
            username: '-'
        },
        name: '-',
        msidSemantic: {
            semantic: 'WMS',
            token: '*'
        },
        groups: [
            {
                type: 'BUNDLE',
                mids: e
                    .filter((e) => null != e.mid)
                    .map((e) => e.mid)
                    .join(' ')
            }
        ],
        media: e
    });
}
function b(e) {
    let { mid: t, type: n, setup: r, direction: i, baseSDP: a, codec: o, payload: s, bitrate: l, ssrcs: u, extensions: c, rtxPayload: d, sendingVideo: E } = e;
    if ('inactive' === i && !A.WS)
        return {
            connection: {
                ip: '0.0.0.0',
                version: 4
            },
            direction: 'inactive',
            fmtp: [],
            payloads: s,
            port: 0,
            protocol: O,
            rtp: [
                {
                    codec: 'NULL',
                    payload: s,
                    rate: 0
                }
            ],
            mid: void 0,
            type: n
        };
    let {
        media: [f]
    } = T.parse(a);
    if (
        ((f.type = n),
        (f.protocol = O),
        (f.payloads = s),
        (f.setup = r),
        (f.mid = t),
        (f.rtcpMux = 'rtcp-mux'),
        (f.direction = i),
        (f.ssrcs = u),
        u.length > 0 &&
            (null != d &&
                ((f.ssrcGroups = _()(u, v).map((e) => {
                    let t = e[0].id;
                    return {
                        semantics: 'FID',
                        ssrcs: ''.concat(t, ' ').concat(t + 1)
                    };
                })),
                (f.ssrcs = _()(u, v)
                    .map((e) => {
                        let t = e.map((e) => ((e = { ...e }), (e.id += 1), e));
                        return [...e, ...t];
                    })
                    .flat())),
            A.WS || 'Firefox' === I().name))
    ) {
        let e = u.find((e) => 'msid' === e.attribute);
        if (null == e) throw Error('msid missing');
        (f.msid = e.value), (f.ssrcs = f.ssrcs.filter((e) => 'cname' === e.attribute));
    }
    switch (n) {
        case 'audio':
            'Firefox' === I().name
                ? (f.ext = c.filter((e) => 'urn:ietf:params:rtp-hdrext:ssrc-audio-level' === e.uri))
                : ((f.ext = c.filter((e) => 'urn:ietf:params:rtp-hdrext:ssrc-audio-level' === e.uri || 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01' === e.uri)),
                  (f.rtcpFb = [
                      {
                          type: 'transport-cc',
                          payload: s
                      }
                  ])),
                f.rtp.push({
                    codec: o,
                    encoding: 2,
                    payload: s,
                    rate: 48000
                }),
                o === S.ad.OPUS &&
                    f.fmtp.push({
                        config: 'minptime=10;useinbandfec=1;usedtx='.concat(E ? '0' : '1'),
                        payload: s
                    }),
                (f.maxptime = 60);
            break;
        case 'video':
            (f.ext = c.filter((e) => 'urn:ietf:params:rtp-hdrext:toffset' === e.uri || 'http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time' === e.uri || 'urn:3gpp:video-orientation' === e.uri || 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01' === e.uri || 'http://www.webrtc.org/experiments/rtp-hdrext/playout-delay' === e.uri)),
                f.rtp.push({
                    codec: o,
                    payload: s,
                    rate: 90000
                });
            let h = 'x-google-max-bitrate='.concat(l);
            o === S.ad.H264 && (h += ';level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f'),
                f.fmtp.push({
                    config: h,
                    payload: s
                }),
                (f.rtcpFb = [
                    {
                        type: 'ccm',
                        subtype: 'fir',
                        payload: s
                    },
                    {
                        type: 'nack',
                        payload: s
                    },
                    {
                        type: 'nack',
                        subtype: 'pli',
                        payload: s
                    },
                    {
                        type: 'goog-remb',
                        payload: s
                    },
                    {
                        type: 'transport-cc',
                        payload: s
                    }
                ]),
                null != d &&
                    (f.rtp.push({
                        codec: 'rtx',
                        payload: d,
                        rate: 90000
                    }),
                    f.fmtp.push({
                        config: 'apt='.concat(s),
                        payload: d
                    }),
                    (f.payloads = ''.concat(f.payloads, ' ').concat(d)));
    }
    return f;
}
function L(e) {
    let { type: t, baseSDP: n, direction: r, audioCodec: i, audioPayloadType: a, audioBitRate: o, videoCodec: s, videoPayloadType: l, videoBitRate: u, rtxPayloadType: c, ssrcs: d, extensions: _ } = e,
        E = [];
    if ((N.info('generateSessionDescription: '.concat(JSON.stringify(d))), 'Firefox' === I().name)) {
        let e = 'answer' === t ? 'passive' : 'active';
        d.forEach((t) => {
            let [r, d, f, h, p] = t;
            if ('video' === f && (0 === l || 0 === c)) return;
            let m = 'audio' === f ? i : s,
                I = 'audio' === f ? a : l,
                T = 'audio' === f ? o : u;
            E.push(
                b({
                    mid: p,
                    type: f,
                    setup: e,
                    direction: h,
                    baseSDP: n,
                    codec: m,
                    payload: I,
                    bitrate: T,
                    ssrcs: C(d, r, 'audio' === f ? 'a' : 'v'),
                    extensions: _
                })
            );
        });
    } else {
        let e = 'answer' === t ? 'passive' : 'actpass',
            f = d
                .filter((e) => {
                    let [t, n, r, i, a] = e;
                    return 'inactive' !== i && 'audio' === r;
                })
                .map((e) => {
                    let [t, n] = e;
                    return C(n, t, 'a');
                });
        if (
            (E.push(
                b({
                    mid: 'audio',
                    type: 'audio',
                    setup: e,
                    direction: r,
                    baseSDP: n,
                    codec: i,
                    payload: a,
                    bitrate: o,
                    ssrcs: f.flat(),
                    extensions: _
                })
            ),
            l > 0)
        ) {
            let t = d
                .filter((e) => {
                    let [t, n, r, i, a] = e;
                    return 'inactive' !== i && 'video' === r;
                })
                .map((e) => {
                    let [t, n] = e;
                    return C(n, t, 'v');
                });
            E.push(
                b({
                    mid: 'video',
                    type: 'video',
                    setup: e,
                    direction: r,
                    baseSDP: n,
                    codec: s,
                    payload: l,
                    bitrate: u,
                    ssrcs: t.flat(),
                    extensions: _,
                    rtxPayload: c
                })
            );
        }
    }
    return new RTCSessionDescription({
        type: t,
        sdp: y(E)
    });
}
function D(e) {
    let { type: t, baseSDP: n, audioCodec: r, audioPayloadType: i, audioBitRate: a, videoCodec: o, videoPayloadType: s, videoBitRate: l, sendingVideo: u, rtxPayloadType: c, ssrcs: d, extensions: _ } = e,
        E = [],
        f = 'answer' === t ? 'passive' : 'actpass';
    return (
        d.forEach((e) => {
            let t,
                { ssrc: d, cname: h, type: p, direction: m, mid: I } = e;
            '' !== h ? (t = C(h, d, 'audio' === p ? 'a' : 'v')) : ((t = []), 'sendonly' === m ? (m = 'inactive') : 'sendrecv' === m && (m = 'recvonly'));
            let T = 'audio' === p ? r : o,
                g = 'audio' === p ? i : s,
                S = 'audio' === p ? null : c,
                A = 'audio' === p ? a : l;
            E.push(
                b({
                    mid: I,
                    type: p,
                    setup: f,
                    direction: m,
                    baseSDP: n,
                    codec: T,
                    payload: g,
                    bitrate: A,
                    ssrcs: t,
                    extensions: _,
                    rtxPayload: S,
                    sendingVideo: u
                })
            );
        }),
        new RTCSessionDescription({
            type: t,
            sdp: y(E)
        })
    );
}
function M(e, t, n, r, i) {
    let a = e.find((e) => e.codec === r);
    if (null == a) return null;
    let o = t.find((e) => RegExp('^apt='.concat(a.payload)).test(e.config)),
        s = null;
    if (null != o) {
        let t = e.find((e) => e.codec === S.ad.RTX && e.payload === o.payload);
        null != t && (s = t.payload);
    }
    return {
        type: n,
        name: r,
        priority: i + 1,
        payloadType: a.payload,
        rtxPayloadType: s
    };
}
function P(e) {
    let t = T.parse(e).media.reduce(
        (e, t) => {
            let n,
                { type: r, rtp: i, ssrcs: a, fmtp: o, direction: s, mid: l } = t;
            switch (
                (e.outboundStreams.push({
                    type: r,
                    direction: s,
                    mid: l
                }),
                r)
            ) {
                case 'audio':
                    [S.ad.OPUS].forEach((t, n) => {
                        let a = M(i, o, r, t, n);
                        null != a && e.codecs.push(a);
                    }),
                        'sendrecv' === s && null != (n = null == a ? void 0 : a.find((e) => 'cname' === e.attribute)) && (e.audioSSRC = n.id);
                    break;
                case 'video':
                    [S.ad.H264, S.ad.VP8, S.ad.VP9].forEach((t, n) => {
                        let a = M(i, o, r, t, n);
                        null != a && e.codecs.push(a);
                    }),
                        'sendrecv' === s && (null != (n = null == a ? void 0 : a.find((e) => 'cname' === e.attribute)) && (e.videoSSRC = n.id), null != (n = null == a ? void 0 : a.findLast((e) => 'cname' === e.attribute)) && (n.id === e.videoSSRC && N.warn('Unable to find a unique rtx SSRC!'), (e.rtxSSRC = n.id)));
            }
            return e;
        },
        {
            outboundStreams: [],
            codecs: [],
            audioSSRC: 0,
            videoSSRC: 0,
            rtxSSRC: 0
        }
    );
    return (t.codecs = p()(t.codecs, f())), t;
}
function U(e) {
    var t;
    let { codecs: n } = P(e),
        r = n.find((e) => e.name === S.ad.VP8),
        i = RegExp('^a=ice|a=extmap|a=fingerprint|opus|VP8|'.concat(null !== (t = null == r ? void 0 : r.rtxPayloadType) && void 0 !== t ? t : 0, ' rtx'), 'i');
    return {
        sdp: [...new Set(e.split(/\r\n/).filter((e) => i.test(e)))].join('\n'),
        codecs: n
    };
}
function w(e) {
    if (!e.includes('a=fingerprint')) return N.error('Remote SDP does not include fingerprint!'), !1;
    if (!e.includes('a=ice-ufrag')) return N.error('Remote SDP does not include ICE user name!'), !1;
    if (!e.includes('a=ice-pwd')) return N.error('Remote SDP does not include ICE password!'), !1;
    if (!e.includes('a=candidate')) return N.error('Remote SDP does not include ICE candidate!'), !1;
    if (!e.includes('c=')) return N.error('Remote SDP does not include c-line!'), !1;
    let t = e
        .split('\n')
        .filter((e) => e.startsWith('c='))
        .join()
        .trim();
    return !(t.split(' ').length < 3) || (N.error('Incorrect c-line: '.concat(t)), !1);
}
function x(e) {
    return [...new Set(e.split(/\r\n/).filter((e) => e.startsWith('a=extmap:')))].map((e) => {
        let t = e.split(' ');
        return {
            value: parseInt(t[0].split('/')[0].substr(9), 10),
            uri: t[1]
        };
    });
}
