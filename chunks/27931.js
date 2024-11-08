n.d(t, {
    Dx: function () {
        return m;
    },
    aP: function () {
        return f;
    }
}),
    n(653041),
    n(47120);
var i,
    l,
    a = n(192379),
    r = n(392711),
    s = n(442837),
    o = n(638730),
    c = n(358221),
    d = n(136015),
    u = n(565799),
    h = n(431328),
    p = n(501655);
function m(e) {
    let t = (0, h.Rk)(e, p.pV.AUDIENCE),
        [n, i] = a.useState(!1);
    return (
        a.useEffect(() => {
            t > 100 ? i(!0) : t < 75 && i(!1);
        }, [t]),
        n ? 5000 : 0
    );
}
function f(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = (function (e, t, n) {
            let i = (0, s.e7)([u.Z], () => [e, u.Z.getParticipantsVersion(e)], [e], d.Q),
                l = (0, s.e7)([c.Z], () => c.Z.getSelectedParticipantId(e), [e]);
            return a.useMemo(() => {
                let a = [],
                    s = [],
                    o = -1,
                    c = [];
                if (n)
                    for (let t of u.Z.getMutableParticipants(e, p.pV.SPEAKER))
                        if (t.type === p.Ui.STREAM) t.id !== l && c.push(t), o++;
                        else break;
                let d = (e, t, n) => {
                        let i = n ? e.filter((e, t) => e.id !== l && t > o) : e,
                            c = (0, r.chunk)(i, t);
                        s.push(c), a.push(c.length);
                    },
                    h = null != l ? u.Z.getParticipant(e, l) : null;
                return (
                    (null == h ? void 0 : h.speaker) ? d([h], 1, !1) : d([], 1, !1),
                    [p.pV.SPEAKER, p.pV.AUDIENCE].forEach((e) => {
                        d(u.Z.getMutableParticipants(i[0], e), t[e], e === p.pV.SPEAKER);
                    }),
                    d(c, 1, !1),
                    [a, s]
                );
            }, [i, t, l, n, e]);
        })(e, t, i),
        [h, m] = l,
        [f, g] = (0, o.T)(l, n, [t[p.pV.AUDIENCE]]),
        C = [h[i ? 3 : 0], h[1], f[2]];
    return [C, [m[i ? 3 : 0], m[1], g[2]]];
}
((l = i || (i = {}))[(l.SELECTED = 0)] = 'SELECTED'), (l[(l.SPEAKER = 1)] = 'SPEAKER'), (l[(l.AUDIENCE = 2)] = 'AUDIENCE'), (l[(l.MEDIA = 3)] = 'MEDIA');
