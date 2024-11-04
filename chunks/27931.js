n.d(t, {
    Dx: function () {
        return p;
    },
    aP: function () {
        return f;
    }
}),
    n(653041),
    n(47120);
var i,
    l,
    r = n(192379),
    s = n(392711),
    a = n(442837),
    o = n(638730),
    c = n(358221),
    u = n(136015),
    d = n(565799),
    h = n(431328),
    m = n(501655);
function p(e) {
    let t = (0, h.Rk)(e, m.pV.AUDIENCE),
        [n, i] = r.useState(!1);
    return (
        r.useEffect(() => {
            t > 100 ? i(!0) : t < 75 && i(!1);
        }, [t]),
        n ? 5000 : 0
    );
}
function f(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        l = (function (e, t, n) {
            let i = (0, a.e7)([d.Z], () => [e, d.Z.getParticipantsVersion(e)], [e], u.Q),
                l = (0, a.e7)([c.Z], () => c.Z.getSelectedParticipantId(e), [e]);
            return r.useMemo(() => {
                let r = [],
                    a = [],
                    o = -1,
                    c = [];
                if (n)
                    for (let t of d.Z.getMutableParticipants(e, m.pV.SPEAKER))
                        if (t.type === m.Ui.STREAM) t.id !== l && c.push(t), o++;
                        else break;
                let u = (e, t, n) => {
                        let i = n ? e.filter((e, t) => e.id !== l && t > o) : e,
                            c = (0, s.chunk)(i, t);
                        a.push(c), r.push(c.length);
                    },
                    h = null != l ? d.Z.getParticipant(e, l) : null;
                return (
                    (null == h ? void 0 : h.speaker) ? u([h], 1, !1) : u([], 1, !1),
                    [m.pV.SPEAKER, m.pV.AUDIENCE].forEach((e) => {
                        u(d.Z.getMutableParticipants(i[0], e), t[e], e === m.pV.SPEAKER);
                    }),
                    u(c, 1, !1),
                    [r, a]
                );
            }, [i, t, l, n, e]);
        })(e, t, i),
        [h, p] = l,
        [f, g] = (0, o.T)(l, n, [t[m.pV.AUDIENCE]]),
        C = [h[i ? 3 : 0], h[1], f[2]];
    return [C, [p[i ? 3 : 0], p[1], g[2]]];
}
((l = i || (i = {}))[(l.SELECTED = 0)] = 'SELECTED'), (l[(l.SPEAKER = 1)] = 'SPEAKER'), (l[(l.AUDIENCE = 2)] = 'AUDIENCE'), (l[(l.MEDIA = 3)] = 'MEDIA');
