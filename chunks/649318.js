r.d(n, {
    $6: function () {
        return k;
    },
    MP: function () {
        return L;
    },
    Mg: function () {
        return C;
    },
    Nl: function () {
        return P;
    },
    Ns: function () {
        return a;
    },
    Rx: function () {
        return x;
    },
    nX: function () {
        return U;
    },
    sc: function () {
        return M;
    }
});
var i,
    a,
    s = r(47120);
var o = r(536091);
var l = r(411104);
var u = r(653041);
var c = r(724458);
var d = r(852437);
var f = r(403644),
    _ = r.n(f),
    h = r(565925),
    p = r.n(h),
    m = r(21690),
    g = r.n(m),
    E = r(264344),
    v = r.n(E),
    I = r(988367),
    T = r(259443),
    b = r(65154),
    y = r(436620);
let S = 4,
    A = new T.Yd('SDP');
!(function (e) {
    (e.AUDIO = 'a'), (e.VIDEO = 'v');
})(i || (i = {})),
    !(function (e) {
        (e.SENDRECV = 'sendrecv'), (e.SENDONLY = 'sendonly'), (e.RECVONLY = 'recvonly'), (e.INACTIVE = 'inactive');
    })(a || (a = {}));
let N = 'UDP/TLS/RTP/SAVPF';
function C(e) {
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
function R(e, n, r) {
    let i = ''.concat(e, '-').concat(n),
        a = ''.concat(r).concat(i);
    return [
        {
            attribute: 'cname',
            id: n,
            value: i
        },
        {
            attribute: 'msid',
            id: n,
            value: ''.concat(i, ' ').concat(a)
        },
        {
            attribute: 'mslabel',
            id: n,
            value: i
        },
        {
            attribute: 'label',
            id: n,
            value: a
        }
    ];
}
function O(e) {
    return I.write({
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
function D(e) {
    let { mid: n, type: r, setup: i, direction: a, baseSDP: s, codec: o, payload: l, bitrate: u, ssrcs: c, extensions: d, rtxPayload: f, sendingVideo: h } = e;
    if ('inactive' === a && !y.WS)
        return {
            connection: {
                ip: '0.0.0.0',
                version: 4
            },
            direction: 'inactive',
            fmtp: [],
            payloads: l,
            port: 0,
            protocol: N,
            rtp: [
                {
                    codec: 'NULL',
                    payload: l,
                    rate: 0
                }
            ],
            mid: void 0,
            type: r
        };
    let {
        media: [p]
    } = I.parse(s);
    if (
        ((p.type = r),
        (p.protocol = N),
        (p.payloads = l),
        (p.setup = i),
        (p.mid = n),
        (p.rtcpMux = 'rtcp-mux'),
        (p.direction = a),
        (p.ssrcs = c),
        c.length > 0 &&
            (null != f &&
                ((p.ssrcGroups = _()(c, S).map((e) => {
                    let n = e[0].id;
                    return {
                        semantics: 'FID',
                        ssrcs: ''.concat(n, ' ').concat(n + 1)
                    };
                })),
                (p.ssrcs = _()(c, S)
                    .map((e) => {
                        let n = e.map((e) => ((e = { ...e }), (e.id += 1), e));
                        return [...e, ...n];
                    })
                    .flat())),
            y.WS || 'Firefox' === v().name))
    ) {
        let e = c.find((e) => 'msid' === e.attribute);
        if (null == e) throw Error('msid missing');
        (p.msid = e.value), (p.ssrcs = p.ssrcs.filter((e) => 'cname' === e.attribute));
    }
    switch (r) {
        case 'audio':
            'Firefox' === v().name
                ? (p.ext = d.filter((e) => 'urn:ietf:params:rtp-hdrext:ssrc-audio-level' === e.uri))
                : ((p.ext = d.filter((e) => 'urn:ietf:params:rtp-hdrext:ssrc-audio-level' === e.uri || 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01' === e.uri)),
                  (p.rtcpFb = [
                      {
                          type: 'transport-cc',
                          payload: l
                      }
                  ])),
                p.rtp.push({
                    codec: o,
                    encoding: 2,
                    payload: l,
                    rate: 48000
                }),
                o === b.ad.OPUS &&
                    p.fmtp.push({
                        config: 'minptime=10;useinbandfec=1;usedtx='.concat(h ? '0' : '1'),
                        payload: l
                    }),
                (p.maxptime = 60);
            break;
        case 'video':
            (p.ext = d.filter((e) => 'urn:ietf:params:rtp-hdrext:toffset' === e.uri || 'http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time' === e.uri || 'urn:3gpp:video-orientation' === e.uri || 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01' === e.uri || 'http://www.webrtc.org/experiments/rtp-hdrext/playout-delay' === e.uri)),
                p.rtp.push({
                    codec: o,
                    payload: l,
                    rate: 90000
                });
            let m = 'x-google-max-bitrate='.concat(u);
            o === b.ad.H264 && (m += ';level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f'),
                p.fmtp.push({
                    config: m,
                    payload: l
                }),
                (p.rtcpFb = [
                    {
                        type: 'ccm',
                        subtype: 'fir',
                        payload: l
                    },
                    {
                        type: 'nack',
                        payload: l
                    },
                    {
                        type: 'nack',
                        subtype: 'pli',
                        payload: l
                    },
                    {
                        type: 'goog-remb',
                        payload: l
                    },
                    {
                        type: 'transport-cc',
                        payload: l
                    }
                ]),
                null != f &&
                    (p.rtp.push({
                        codec: 'rtx',
                        payload: f,
                        rate: 90000
                    }),
                    p.fmtp.push({
                        config: 'apt='.concat(l),
                        payload: f
                    }),
                    (p.payloads = ''.concat(p.payloads, ' ').concat(f)));
    }
    return p;
}
function L(e) {
    let { type: n, baseSDP: r, direction: i, audioCodec: a, audioPayloadType: s, audioBitRate: o, videoCodec: l, videoPayloadType: u, videoBitRate: c, rtxPayloadType: d, ssrcs: f, extensions: _ } = e,
        h = [];
    if ((A.info('generateSessionDescription: '.concat(JSON.stringify(f))), 'Firefox' === v().name)) {
        let e = 'answer' === n ? 'passive' : 'active';
        f.forEach((n) => {
            let [i, f, p, m, g] = n;
            if ('video' === p && (0 === u || 0 === d)) return;
            let E = 'audio' === p ? a : l,
                v = 'audio' === p ? s : u,
                I = 'audio' === p ? o : c;
            h.push(
                D({
                    mid: g,
                    type: p,
                    setup: e,
                    direction: m,
                    baseSDP: r,
                    codec: E,
                    payload: v,
                    bitrate: I,
                    ssrcs: R(f, i, 'audio' === p ? 'a' : 'v'),
                    extensions: _
                })
            );
        });
    } else {
        let e = 'answer' === n ? 'passive' : 'actpass',
            p = f
                .filter((e) => {
                    let [n, r, i, a, s] = e;
                    return 'inactive' !== a && 'audio' === i;
                })
                .map((e) => {
                    let [n, r] = e;
                    return R(r, n, 'a');
                });
        if (
            (h.push(
                D({
                    mid: 'audio',
                    type: 'audio',
                    setup: e,
                    direction: i,
                    baseSDP: r,
                    codec: a,
                    payload: s,
                    bitrate: o,
                    ssrcs: p.flat(),
                    extensions: _
                })
            ),
            u > 0)
        ) {
            let n = f
                .filter((e) => {
                    let [n, r, i, a, s] = e;
                    return 'inactive' !== a && 'video' === i;
                })
                .map((e) => {
                    let [n, r] = e;
                    return R(r, n, 'v');
                });
            h.push(
                D({
                    mid: 'video',
                    type: 'video',
                    setup: e,
                    direction: i,
                    baseSDP: r,
                    codec: l,
                    payload: u,
                    bitrate: c,
                    ssrcs: n.flat(),
                    extensions: _,
                    rtxPayload: d
                })
            );
        }
    }
    return new RTCSessionDescription({
        type: n,
        sdp: O(h)
    });
}
function x(e) {
    let { type: n, baseSDP: r, audioCodec: i, audioPayloadType: a, audioBitRate: s, videoCodec: o, videoPayloadType: l, videoBitRate: u, sendingVideo: c, rtxPayloadType: d, ssrcs: f, extensions: _ } = e,
        h = [],
        p = 'answer' === n ? 'passive' : 'actpass';
    return (
        f.forEach((e) => {
            let n,
                { ssrc: f, cname: m, type: g, direction: E, mid: v } = e;
            '' !== m ? (n = R(m, f, 'audio' === g ? 'a' : 'v')) : ((n = []), 'sendonly' === E ? (E = 'inactive') : 'sendrecv' === E && (E = 'recvonly'));
            let I = 'audio' === g ? i : o,
                T = 'audio' === g ? a : l,
                b = 'audio' === g ? null : d,
                y = 'audio' === g ? s : u;
            h.push(
                D({
                    mid: v,
                    type: g,
                    setup: p,
                    direction: E,
                    baseSDP: r,
                    codec: I,
                    payload: T,
                    bitrate: y,
                    ssrcs: n,
                    extensions: _,
                    rtxPayload: b,
                    sendingVideo: c
                })
            );
        }),
        new RTCSessionDescription({
            type: n,
            sdp: O(h)
        })
    );
}
function w(e, n, r, i, a) {
    let s = e.find((e) => e.codec === i);
    if (null == s) return null;
    let o = n.find((e) => RegExp('^apt='.concat(s.payload)).test(e.config)),
        l = null;
    if (null != o) {
        let n = e.find((e) => e.codec === b.ad.RTX && e.payload === o.payload);
        null != n && (l = n.payload);
    }
    return {
        type: r,
        name: i,
        priority: a + 1,
        payloadType: s.payload,
        rtxPayloadType: l
    };
}
function P(e) {
    let n = I.parse(e).media.reduce(
        (e, n) => {
            let r,
                { type: i, rtp: a, ssrcs: s, fmtp: o, direction: l, mid: u } = n;
            switch (
                (e.outboundStreams.push({
                    type: i,
                    direction: l,
                    mid: u
                }),
                i)
            ) {
                case 'audio':
                    [b.ad.OPUS].forEach((n, r) => {
                        let s = w(a, o, i, n, r);
                        null != s && e.codecs.push(s);
                    }),
                        'sendrecv' === l && null != (r = null == s ? void 0 : s.find((e) => 'cname' === e.attribute)) && (e.audioSSRC = r.id);
                    break;
                case 'video':
                    [b.ad.H264, b.ad.VP8, b.ad.VP9].forEach((n, r) => {
                        let s = w(a, o, i, n, r);
                        null != s && e.codecs.push(s);
                    }),
                        'sendrecv' === l && (null != (r = null == s ? void 0 : s.find((e) => 'cname' === e.attribute)) && (e.videoSSRC = r.id), null != (r = null == s ? void 0 : s.findLast((e) => 'cname' === e.attribute)) && (r.id === e.videoSSRC && A.warn('Unable to find a unique rtx SSRC!'), (e.rtxSSRC = r.id)));
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
    return (n.codecs = g()(n.codecs, p())), n;
}
function M(e) {
    var n;
    let { codecs: r } = P(e),
        i = r.find((e) => e.name === b.ad.VP8),
        a = RegExp('^a=ice|a=extmap|a=fingerprint|opus|VP8|'.concat(null !== (n = null == i ? void 0 : i.rtxPayloadType) && void 0 !== n ? n : 0, ' rtx'), 'i');
    return {
        sdp: [...new Set(e.split(/\r\n/).filter((e) => a.test(e)))].join('\n'),
        codecs: r
    };
}
function k(e) {
    if (!e.includes('a=fingerprint')) return A.error('Remote SDP does not include fingerprint!'), !1;
    if (!e.includes('a=ice-ufrag')) return A.error('Remote SDP does not include ICE user name!'), !1;
    if (!e.includes('a=ice-pwd')) return A.error('Remote SDP does not include ICE password!'), !1;
    if (!e.includes('a=candidate')) return A.error('Remote SDP does not include ICE candidate!'), !1;
    if (!e.includes('c=')) return A.error('Remote SDP does not include c-line!'), !1;
    let n = e
        .split('\n')
        .filter((e) => e.startsWith('c='))
        .join()
        .trim();
    return !(n.split(' ').length < 3) || (A.error('Incorrect c-line: '.concat(n)), !1);
}
function U(e) {
    return [...new Set(e.split(/\r\n/).filter((e) => e.startsWith('a=extmap:')))].map((e) => {
        let n = e.split(' ');
        return {
            value: parseInt(n[0].split('/')[0].substr(9), 10),
            uri: n[1]
        };
    });
}
