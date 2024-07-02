n.d(t, {
    ZP: function () {
        return u;
    },
    aJ: function () {
        return d;
    }
}), n(411104), n(653041), n(47120);
var i = n(735250), a = n(470079), s = n(392711), l = n.n(s), r = n(38371), o = n(981631), c = n(658977);
function d(e) {
    let {
        compact: t,
        messageGroups: n,
        groupRange: i,
        attachments: a,
        fontSize: s,
        groupSpacing: c
    } = e;
    if (a > n)
        throw Error('generateMessageSpecs: too many attachments relative to messageGroups: '.concat(n, ', ').concat(a));
    let d = s / o.yqN.FONT_SIZE_DEFAULT, u = t ? r.iv : r.pk, h = t ? r.Pb : r.XX, p = 0, m = Array(n).fill(null).map(() => {
            let e = l().random(1, i);
            return p += c * d + u * d + (e - 1) * h * d, e;
        }), _ = m.map((e, t) => t), f = [];
    for (; f.length < a;) {
        let e = {
            width: l().random(140, 400),
            height: l().random(100, 320)
        };
        f.push([
            _.splice(l().random(0, _.length - 1), 1)[0],
            e
        ]), p += e.height + r.M9 * d;
    }
    return {
        messages: m,
        attachmentSpecs: f,
        totalHeight: p,
        groupSpacing: c
    };
}
function u(e) {
    let {
        compact: t,
        messages: n,
        attachmentSpecs: s,
        totalHeight: l,
        groupSpacing: o
    } = e;
    return a.useMemo(() => {
        let e = Array(n.length).fill(void 0);
        for (let [t, n] of s)
            e[t] = n;
        return (0, i.jsx)('div', {
            className: c.wrapper,
            style: { height: l },
            children: n.map((n, a) => (0, i.jsx)(r.ZP, {
                groupSpacing: o,
                compact: t,
                messages: n,
                attachmentSpecs: e[a]
            }, a))
        });
    }, [
        t,
        n,
        s,
        l,
        o
    ]);
}
