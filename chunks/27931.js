n.d(t, {
    Dx: function () {
        return p;
    },
    aP: function () {
        return _;
    }
}),
    n(653041),
    n(47120);
var i,
    s,
    a = n(192379),
    l = n(392711),
    r = n(442837),
    o = n(638730),
    c = n(358221),
    u = n(136015),
    d = n(565799),
    h = n(431328),
    m = n(501655);
function p(e) {
    let t = (0, h.Rk)(e, m.pV.AUDIENCE),
        [n, i] = a.useState(!1);
    return (
        a.useEffect(() => {
            t > 100 ? i(!0) : t < 75 && i(!1);
        }, [t]),
        n ? 5000 : 0
    );
}
function _(e, t, n) {
    let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = (function (e, t, n) {
            let i = (0, r.e7)([d.Z], () => [e, d.Z.getParticipantsVersion(e)], [e], u.Q),
                s = (0, r.e7)([c.Z], () => c.Z.getSelectedParticipantId(e), [e]);
            return a.useMemo(() => {
                let a = [],
                    r = [],
                    o = -1,
                    c = [];
                if (n)
                    for (let t of d.Z.getMutableParticipants(e, m.pV.SPEAKER))
                        if (t.type === m.Ui.STREAM) t.id !== s && c.push(t), o++;
                        else break;
                let u = (e, t, n) => {
                        let i = n ? e.filter((e, t) => e.id !== s && t > o) : e,
                            c = (0, l.chunk)(i, t);
                        r.push(c), a.push(c.length);
                    },
                    h = null != s ? d.Z.getParticipant(e, s) : null;
                return (
                    (null == h ? void 0 : h.speaker) ? u([h], 1, !1) : u([], 1, !1),
                    [m.pV.SPEAKER, m.pV.AUDIENCE].forEach((e) => {
                        u(d.Z.getMutableParticipants(i[0], e), t[e], e === m.pV.SPEAKER);
                    }),
                    u(c, 1, !1),
                    [a, r]
                );
            }, [i, t, s, n, e]);
        })(e, t, i),
        [h, p] = s,
        [_, f] = (0, o.T)(s, n, [t[m.pV.AUDIENCE]]),
        E = [h[i ? 3 : 0], h[1], _[2]];
    return [E, [p[i ? 3 : 0], p[1], f[2]]];
}
((s = i || (i = {}))[(s.SELECTED = 0)] = 'SELECTED'), (s[(s.SPEAKER = 1)] = 'SPEAKER'), (s[(s.AUDIENCE = 2)] = 'AUDIENCE'), (s[(s.MEDIA = 3)] = 'MEDIA');
