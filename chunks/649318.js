n.d(t, {
    $6: function () {
        return D;
    },
    MP: function () {
        return A;
    },
    Mg: function () {
        return S;
    },
    Nl: function () {
        return R;
    },
    Ns: function () {
        return i;
    },
    Rx: function () {
        return N;
    },
    nX: function () {
        return L;
    },
    sc: function () {
        return O;
    }
}),
    n(47120),
    n(536091),
    n(411104),
    n(653041),
    n(724458),
    n(852437);
var r,
    i,
    a,
    s,
    o = n(403644),
    l = n.n(o),
    u = n(565925),
    c = n.n(u),
    d = n(21690),
    f = n.n(d),
    _ = n(264344),
    h = n.n(_),
    p = n(988367),
    m = n(259443),
    g = n(65154),
    E = n(436620);
let v = new m.Yd('SDP');
((a = r || (r = {})).AUDIO = 'a'), (a.VIDEO = 'v'), ((s = i || (i = {})).SENDRECV = 'sendrecv'), (s.SENDONLY = 'sendonly'), (s.RECVONLY = 'recvonly'), (s.INACTIVE = 'inactive');
let I = 'UDP/TLS/RTP/SAVPF';
function S(e) {
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
function T(e, t, n) {
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
function b(e) {
    return p.write({
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
function y(e) {
    let { mid: t, type: n, setup: r, direction: i, baseSDP: a, codec: s, payload: o, bitrate: u, ssrcs: c, extensions: d, rtxPayload: f, sendingVideo: _ } = e;
    if ('inactive' === i && !E.WS)
        return {
            connection: {
                ip: '0.0.0.0',
                version: 4
            },
            direction: 'inactive',
            fmtp: [],
            payloads: o,
            port: 0,
            protocol: I,
            rtp: [
                {
                    codec: 'NULL',
                    payload: o,
                    rate: 0
                }
            ],
            mid: void 0,
            type: n
        };
    let {
        media: [m]
    } = p.parse(a);
    if (
        ((m.type = n),
        (m.protocol = I),
        (m.payloads = o),
        (m.setup = r),
        (m.mid = t),
        (m.rtcpMux = 'rtcp-mux'),
        (m.direction = i),
        (m.ssrcs = c),
        c.length > 0 &&
            (null != f &&
                ((m.ssrcGroups = l()(c, 4).map((e) => {
                    let t = e[0].id;
                    return {
                        semantics: 'FID',
                        ssrcs: ''.concat(t, ' ').concat(t + 1)
                    };
                })),
                (m.ssrcs = l()(c, 4)
                    .map((e) => {
                        let t = e.map((e) => ((e = { ...e }), (e.id += 1), e));
                        return [...e, ...t];
                    })
                    .flat())),
            E.WS || 'Firefox' === h().name))
    ) {
        let e = c.find((e) => 'msid' === e.attribute);
        if (null == e) throw Error('msid missing');
        (m.msid = e.value), (m.ssrcs = m.ssrcs.filter((e) => 'cname' === e.attribute));
    }
    switch (n) {
        case 'audio':
            'Firefox' === h().name
                ? (m.ext = d.filter((e) => 'urn:ietf:params:rtp-hdrext:ssrc-audio-level' === e.uri))
                : ((m.ext = d.filter((e) => 'urn:ietf:params:rtp-hdrext:ssrc-audio-level' === e.uri || 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01' === e.uri)),
                  (m.rtcpFb = [
                      {
                          type: 'transport-cc',
                          payload: o
                      }
                  ])),
                m.rtp.push({
                    codec: s,
                    encoding: 2,
                    payload: o,
                    rate: 48000
                }),
                s === g.ad.OPUS &&
                    m.fmtp.push({
                        config: 'minptime=10;useinbandfec=1;usedtx='.concat(_ ? '0' : '1'),
                        payload: o
                    }),
                (m.maxptime = 60);
            break;
        case 'video':
            (m.ext = d.filter((e) => 'urn:ietf:params:rtp-hdrext:toffset' === e.uri || 'http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time' === e.uri || 'urn:3gpp:video-orientation' === e.uri || 'http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01' === e.uri || 'http://www.webrtc.org/experiments/rtp-hdrext/playout-delay' === e.uri)),
                m.rtp.push({
                    codec: s,
                    payload: o,
                    rate: 90000
                });
            let v = 'x-google-max-bitrate='.concat(u);
            s === g.ad.H264 && (v += ';level-asymmetry-allowed=1;packetization-mode=1;profile-level-id=42e01f'),
                m.fmtp.push({
                    config: v,
                    payload: o
                }),
                (m.rtcpFb = [
                    {
                        type: 'ccm',
                        subtype: 'fir',
                        payload: o
                    },
                    {
                        type: 'nack',
                        payload: o
                    },
                    {
                        type: 'nack',
                        subtype: 'pli',
                        payload: o
                    },
                    {
                        type: 'goog-remb',
                        payload: o
                    },
                    {
                        type: 'transport-cc',
                        payload: o
                    }
                ]),
                null != f &&
                    (m.rtp.push({
                        codec: 'rtx',
                        payload: f,
                        rate: 90000
                    }),
                    m.fmtp.push({
                        config: 'apt='.concat(o),
                        payload: f
                    }),
                    (m.payloads = ''.concat(m.payloads, ' ').concat(f)));
    }
    return m;
}
function A(e) {
    let { type: t, baseSDP: n, direction: r, audioCodec: i, audioPayloadType: a, audioBitRate: s, videoCodec: o, videoPayloadType: l, videoBitRate: u, rtxPayloadType: c, ssrcs: d, extensions: f } = e,
        _ = [];
    if ((v.info('generateSessionDescription: '.concat(JSON.stringify(d))), 'Firefox' === h().name)) {
        let e = 'answer' === t ? 'passive' : 'active';
        d.forEach((t) => {
            let [r, d, h, p, m] = t;
            if ('video' !== h || (0 !== l && 0 !== c))
                _.push(
                    y({
                        mid: m,
                        type: h,
                        setup: e,
                        direction: p,
                        baseSDP: n,
                        codec: 'audio' === h ? i : o,
                        payload: 'audio' === h ? a : l,
                        bitrate: 'audio' === h ? s : u,
                        ssrcs: T(d, r, 'audio' === h ? 'a' : 'v'),
                        extensions: f
                    })
                );
        });
    } else {
        let e = 'answer' === t ? 'passive' : 'actpass',
            h = d
                .filter((e) => {
                    let [t, n, r, i, a] = e;
                    return 'inactive' !== i && 'audio' === r;
                })
                .map((e) => {
                    let [t, n] = e;
                    return T(n, t, 'a');
                });
        if (
            (_.push(
                y({
                    mid: 'audio',
                    type: 'audio',
                    setup: e,
                    direction: r,
                    baseSDP: n,
                    codec: i,
                    payload: a,
                    bitrate: s,
                    ssrcs: h.flat(),
                    extensions: f
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
                    return T(n, t, 'v');
                });
            _.push(
                y({
                    mid: 'video',
                    type: 'video',
                    setup: e,
                    direction: r,
                    baseSDP: n,
                    codec: o,
                    payload: l,
                    bitrate: u,
                    ssrcs: t.flat(),
                    extensions: f,
                    rtxPayload: c
                })
            );
        }
    }
    return new RTCSessionDescription({
        type: t,
        sdp: b(_)
    });
}
function N(e) {
    let { type: t, baseSDP: n, audioCodec: r, audioPayloadType: i, audioBitRate: a, videoCodec: s, videoPayloadType: o, videoBitRate: l, sendingVideo: u, rtxPayloadType: c, ssrcs: d, extensions: f } = e,
        _ = [],
        h = 'answer' === t ? 'passive' : 'actpass';
    return (
        d.forEach((e) => {
            let t,
                { ssrc: d, cname: p, type: m, direction: g, mid: E } = e;
            '' !== p ? (t = T(p, d, 'audio' === m ? 'a' : 'v')) : ((t = []), 'sendonly' === g ? (g = 'inactive') : 'sendrecv' === g && (g = 'recvonly'));
            _.push(
                y({
                    mid: E,
                    type: m,
                    setup: h,
                    direction: g,
                    baseSDP: n,
                    codec: 'audio' === m ? r : s,
                    payload: 'audio' === m ? i : o,
                    bitrate: 'audio' === m ? a : l,
                    ssrcs: t,
                    extensions: f,
                    rtxPayload: 'audio' === m ? null : c,
                    sendingVideo: u
                })
            );
        }),
        new RTCSessionDescription({
            type: t,
            sdp: b(_)
        })
    );
}
function C(e, t, n, r, i) {
    let a = e.find((e) => e.codec === r);
    if (null == a) return null;
    let s = t.find((e) => RegExp('^apt='.concat(a.payload)).test(e.config)),
        o = null;
    if (null != s) {
        let t = e.find((e) => e.codec === g.ad.RTX && e.payload === s.payload);
        null != t && (o = t.payload);
    }
    return {
        type: n,
        name: r,
        priority: i + 1,
        payloadType: a.payload,
        rtxPayloadType: o
    };
}
function R(e) {
    let t = p.parse(e).media.reduce(
        (e, t) => {
            let n,
                { type: r, rtp: i, ssrcs: a, fmtp: s, direction: o, mid: l } = t;
            switch (
                (e.outboundStreams.push({
                    type: r,
                    direction: o,
                    mid: l
                }),
                r)
            ) {
                case 'audio':
                    [g.ad.OPUS].forEach((t, n) => {
                        let a = C(i, s, r, t, n);
                        null != a && e.codecs.push(a);
                    }),
                        'sendrecv' === o && null != (n = null == a ? void 0 : a.find((e) => 'cname' === e.attribute)) && (e.audioSSRC = n.id);
                    break;
                case 'video':
                    [g.ad.H264, g.ad.VP8, g.ad.VP9].forEach((t, n) => {
                        let a = C(i, s, r, t, n);
                        null != a && e.codecs.push(a);
                    }),
                        'sendrecv' === o && (null != (n = null == a ? void 0 : a.find((e) => 'cname' === e.attribute)) && (e.videoSSRC = n.id), null != (n = null == a ? void 0 : a.findLast((e) => 'cname' === e.attribute)) && (n.id === e.videoSSRC && v.warn('Unable to find a unique rtx SSRC!'), (e.rtxSSRC = n.id)));
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
    return (t.codecs = f()(t.codecs, c())), t;
}
function O(e) {
    var t;
    let { codecs: n } = R(e),
        r = n.find((e) => e.name === g.ad.VP8),
        i = RegExp('^a=ice|a=extmap|a=fingerprint|opus|VP8|'.concat(null !== (t = null == r ? void 0 : r.rtxPayloadType) && void 0 !== t ? t : 0, ' rtx'), 'i');
    return {
        sdp: [...new Set(e.split(/\r\n/).filter((e) => i.test(e)))].join('\n'),
        codecs: n
    };
}
function D(e) {
    if (!e.includes('a=fingerprint')) return v.error('Remote SDP does not include fingerprint!'), !1;
    if (!e.includes('a=ice-ufrag')) return v.error('Remote SDP does not include ICE user name!'), !1;
    if (!e.includes('a=ice-pwd')) return v.error('Remote SDP does not include ICE password!'), !1;
    if (!e.includes('a=candidate')) return v.error('Remote SDP does not include ICE candidate!'), !1;
    if (!e.includes('c=')) return v.error('Remote SDP does not include c-line!'), !1;
    let t = e
        .split('\n')
        .filter((e) => e.startsWith('c='))
        .join()
        .trim();
    return !(t.split(' ').length < 3) || (v.error('Incorrect c-line: '.concat(t)), !1);
}
function L(e) {
    return [...new Set(e.split(/\r\n/).filter((e) => e.startsWith('a=extmap:')))].map((e) => {
        let t = e.split(' ');
        return {
            value: parseInt(t[0].split('/')[0].substr(9), 10),
            uri: t[1]
        };
    });
}
