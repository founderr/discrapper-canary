n.d(t, {
    ZP: function () {
        return d;
    },
    aJ: function () {
        return u;
    }
}),
    n(411104),
    n(653041),
    n(47120);
var i = n(735250),
    s = n(470079),
    a = n(392711),
    l = n.n(a),
    r = n(566898),
    o = n(981631),
    c = n(623433);
function u(e) {
    let { compact: t, messageGroups: n, groupRange: i, attachments: s, fontSize: a, groupSpacing: c } = e;
    if (s > n) throw Error('generateMessageSpecs: too many attachments relative to messageGroups: '.concat(n, ', ').concat(s));
    let u = a / o.yqN.FONT_SIZE_DEFAULT,
        d = t ? r.iv : r.pk,
        h = t ? r.Pb : r.XX,
        p = 0,
        m = Array(n)
            .fill(null)
            .map(() => {
                let e = l().random(1, i);
                return (p += c * u + d * u + (e - 1) * h * u), e;
            }),
        _ = m.map((e, t) => t),
        f = [];
    for (; f.length < s; ) {
        let e = {
            width: l().random(140, 400),
            height: l().random(100, 320)
        };
        f.push([_.splice(l().random(0, _.length - 1), 1)[0], e]), (p += e.height + r.M9 * u);
    }
    return {
        messages: m,
        attachmentSpecs: f,
        totalHeight: p,
        groupSpacing: c
    };
}
function d(e) {
    let { compact: t, messages: n, attachmentSpecs: a, totalHeight: l, groupSpacing: o } = e;
    return s.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of a) e[t] = n;
        return (0, i.jsx)('div', {
            className: c.wrapper,
            style: { height: l },
            children: n.map((n, s) =>
                (0, i.jsx)(
                    r.ZP,
                    {
                        groupSpacing: o,
                        compact: t,
                        messages: n,
                        attachmentSpecs: e[s]
                    },
                    s
                )
            )
        });
    }, [t, n, a, l, o]);
}
