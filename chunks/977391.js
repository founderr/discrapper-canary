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
var i = n(200651),
    l = n(192379),
    r = n(392711),
    s = n.n(r),
    a = n(566898),
    o = n(981631),
    c = n(623433);
function u(e) {
    let { compact: t, messageGroups: n, groupRange: i, attachments: l, fontSize: r, groupSpacing: c } = e;
    if (l > n) throw Error('generateMessageSpecs: too many attachments relative to messageGroups: '.concat(n, ', ').concat(l));
    let u = r / o.yqN.FONT_SIZE_DEFAULT,
        d = t ? a.iv : a.pk,
        h = t ? a.Pb : a.XX,
        m = 0,
        p = Array(n)
            .fill(null)
            .map(() => {
                let e = s().random(1, i);
                return (m += c * u + d * u + (e - 1) * h * u), e;
            }),
        f = p.map((e, t) => t),
        g = [];
    for (; g.length < l; ) {
        let e = {
            width: s().random(140, 400),
            height: s().random(100, 320)
        };
        g.push([f.splice(s().random(0, f.length - 1), 1)[0], e]), (m += e.height + a.M9 * u);
    }
    return {
        messages: p,
        attachmentSpecs: g,
        totalHeight: m,
        groupSpacing: c
    };
}
function d(e) {
    let { compact: t, messages: n, attachmentSpecs: r, totalHeight: s, groupSpacing: o } = e;
    return l.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of r) e[t] = n;
        return (0, i.jsx)('div', {
            className: c.wrapper,
            style: { height: s },
            children: n.map((n, l) =>
                (0, i.jsx)(
                    a.ZP,
                    {
                        groupSpacing: o,
                        compact: t,
                        messages: n,
                        attachmentSpecs: e[l]
                    },
                    l
                )
            )
        });
    }, [t, n, r, s, o]);
}
