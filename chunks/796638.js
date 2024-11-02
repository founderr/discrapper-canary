n.d(t, {
    ZB: function () {
        return C;
    },
    ZP: function () {
        return x;
    },
    cF: function () {
        return m;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(392711),
    a = n(933546),
    s = n(314897),
    o = n(70956),
    c = n(823379),
    u = n(27457),
    d = n(354459),
    h = n(192698);
let m = 112,
    p = (16 / 9) * m + 8,
    f = 10 * o.Z.Millis.SECOND;
function g(e) {
    var t;
    let n = s.default.getId();
    return e.type === d.fO.USER && e.user.id === n && (null === (t = e.voiceState) || void 0 === t ? void 0 : t.selfVideo);
}
function C(e, t) {
    let [n, i] = l.useState(Date.now());
    l.useEffect(() => {
        let e = setTimeout(() => {
            i(Date.now());
        }, f);
        return () => {
            clearTimeout(e);
        };
    }, [t]);
    let s = l.useRef({}),
        { visibleParticipants: o, participantTileWidth: u } = l.useMemo(() => {
            let n = Date.now(),
                i = (0, r.sortBy)(t, (e) =>
                    (function (e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Date.now();
                        switch (e.type) {
                            case d.fO.ACTIVITY:
                                return '\0'.concat(e.sortKey);
                            case d.fO.HIDDEN_STREAM:
                            case d.fO.STREAM:
                                return '\x01'.concat((0, a.Z)(e.userNick, e.user));
                            case d.fO.USER:
                                var n;
                                let i = '\x05';
                                return (
                                    e.speaking ? (i = '\x02') : t - e.lastSpoke < f ? (i = '\x03') : (null === (n = e.voiceState) || void 0 === n ? void 0 : n.selfVideo) && (i = '\x04'),
                                    ''
                                        .concat(i)
                                        .concat(
                                            (function (e) {
                                                let t = String(8640000000000000).length;
                                                return String(8640000000000000 - e).padStart(t, '0');
                                            })(e.lastSpoke)
                                        )
                                        .concat((0, a.Z)(e.userNick, e.user))
                                );
                        }
                    })(e, n)
                ),
                [l, o] = (0, r.partition)(i, d.Io),
                u = l.findIndex(g),
                h = null;
            -1 !== u && ((h = l[u]), l.splice(u, 1));
            let m = null != h ? e - p - 8 : e,
                C = Math.max(0, Math.min(Math.floor((m - 8) / 132), 12, t.length)),
                x = Math.min((m - 8) / C - 8, p),
                v = Math.max(0, C - o.length),
                _ = o.slice(0, C),
                I = l.slice(0, v),
                E = Array(v);
            if (v > 0) {
                let e = [];
                for (let t of I) {
                    let n = s.current[t.id];
                    null != n && n < v ? (E[n] = t) : e.push(t);
                }
                for (let t = 0; t < E.length; t++) {
                    if (null != E[t]) continue;
                    let n = e.shift();
                    if (null == n) break;
                    E[t] = n;
                }
            }
            let b = E.filter(c.lm),
                S = (0, r.keyBy)((0, r.range)(b.length), (e) => b[e].id);
            s.current = S;
            let Z = [..._, ...b];
            return (
                null != h && Z.push(h),
                {
                    visibleParticipants: Z,
                    participantTileWidth: x
                }
            );
        }, [e, t, n]);
    return {
        visibleParticipants: o,
        participantTileWidth: u
    };
}
function x(e) {
    let { participants: t, participantTileWidth: n, selectedParticipantId: l, onDoubleClick: r, onContextMenu: a, onClick: s, channel: o, inCall: c, popoutWindow: d, paused: m = !1 } = e,
        f = null != d;
    return (0, i.jsx)('div', {
        className: h.root,
        children: t.map((e) => {
            if (null == e) return null;
            let t = g(e);
            return (0, i.jsx)(
                'div',
                {
                    className: h.tileSizer,
                    style: t ? { flexShrink: 0 } : void 0,
                    children: (0, i.jsx)(u.ZP, {
                        participant: e,
                        selected: l === e.id,
                        channel: o,
                        className: h.tile,
                        fit: u.BP.COVER,
                        onClick: s,
                        onDoubleClick: r,
                        onContextMenu: a,
                        width: t ? p : n,
                        inCall: c,
                        paused: m,
                        inPopout: f
                    })
                },
                e.id
            );
        })
    });
}
