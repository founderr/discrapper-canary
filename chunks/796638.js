n.d(t, {
    ZB: function () {
        return E;
    },
    ZP: function () {
        return g;
    },
    cF: function () {
        return m;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    s = n(192379),
    a = n(392711),
    l = n(933546),
    r = n(314897),
    o = n(70956),
    c = n(823379),
    u = n(27457),
    d = n(354459),
    h = n(192698);
let m = 112,
    p = (16 / 9) * m + 8,
    _ = 10 * o.Z.Millis.SECOND;
function f(e) {
    var t;
    let n = r.default.getId();
    return e.type === d.fO.USER && e.user.id === n && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo);
}
function E(e, t) {
    let [n, i] = s.useState(Date.now());
    s.useEffect(() => {
        let e = setTimeout(() => {
            i(Date.now());
        }, _);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let r = s.useRef({}),
        { visibleParticipants: o, participantTileWidth: u } = s.useMemo(() => {
            let n = Date.now(),
                i = (0, a.sortBy)(t, (e) =>
                    (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                        switch (e.type) {
                            case d.fO.ACTIVITY:
                                return '\0'.concat(e.sortKey);
                            case d.fO.HIDDEN_STREAM:
                            case d.fO.STREAM:
                                return '\x01'.concat((0, l.Z)(e.userNick, e.user));
                            case d.fO.USER:
                                var n;
                                let i = '\x05';
                                return (
                                    e.speaking ? (i = '\x02') : t - e.lastSpoke < _ ? (i = '\x03') : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfVideo) && (i = '\x04'),
                                    ''
                                        .concat(i)
                                        .concat(
                                            (function (e) {
                                                let t = String(8640000000000000).length;
                                                return String(8640000000000000 - e).padStart(t, '0');
                                            })(e.lastSpoke)
                                        )
                                        .concat((0, l.Z)(e.userNick, e.user))
                                );
                        }
                    })(e, n)
                ),
                [s, o] = (0, a.partition)(i, d.Io),
                u = s.findIndex(f),
                h = null;
            -1 !== u && ((h = s[u]), s.splice(u, 1));
            let m = null != h ? e - p - 8 : e,
                E = Math.max(0, Math.min(Math.floor((m - 8) / 132), 12, t.length)),
                g = Math.min((m - 8) / E - 8, p),
                C = Math.max(0, E - o.length),
                I = o.slice(0, E),
                T = s.slice(0, C),
                x = Array(C);
            if (C > 0) {
                let e = [];
                for (let t of T) {
                    let n = r.current[t.id];
                    null != n && n < C ? (x[n] = t) : e.push(t);
                }
                for (let t = 0; t < x.length; t++) {
                    if (null != x[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    x[t] = n;
                }
            }
            let S = x.filter(c.lm),
                v = (0, a.keyBy)((0, a.range)(S.length), (e) => S[e].id);
            r.current = v;
            let N = [...I, ...S];
            return (
                null != h && N.push(h),
                {
                    visibleParticipants: N,
                    participantTileWidth: g
                }
            );
        }, [e, t, n]);
    return {
        visibleParticipants: o,
        participantTileWidth: u
    };
}
function g(e) {
    let { participants: t, participantTileWidth: n, selectedParticipantId: s, onDoubleClick: a, onContextMenu: l, onClick: r, channel: o, inCall: c, popoutWindow: d, paused: m = !1 } = e,
        _ = null != d;
    return (0, i.jsx)('div', {
        className: h.root,
        children: t.map((e) => {
            if (null == e) return null;
            let t = f(e);
            return (0, i.jsx)(
                'div',
                {
                    className: h.tileSizer,
                    style: t ? { flexShrink: 0 } : void 0,
                    children: (0, i.jsx)(u.ZP, {
                        participant: e,
                        selected: s === e.id,
                        channel: o,
                        className: h.tile,
                        fit: u.BP.COVER,
                        onClick: r,
                        onDoubleClick: a,
                        onContextMenu: l,
                        width: t ? p : n,
                        inCall: c,
                        paused: m,
                        inPopout: _
                    })
                },
                e.id
            );
        })
    });
}
