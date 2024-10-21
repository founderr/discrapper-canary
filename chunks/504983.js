s.d(n, {
    Y: function () {
        return l;
    }
});
var t,
    l,
    i = s(200651),
    r = s(192379),
    a = s(120356),
    c = s.n(a),
    o = s(261842);
((t = l || (l = {})).PREMIUM = 'premium'), (t.LIMITED = 'limited');
let u = {
    premium: {
        border: o.premiumFeatureBorder,
        background: o.premiumBackground
    },
    limited: {
        border: o.limitedFeatureBorder,
        background: o.limitedBackground
    }
};
n.Z = r.forwardRef(function (e, n) {
    let { children: s, type: t = 'premium', isShown: l, hasBackground: r = !1, className: a, backgroundClassName: d } = e;
    if (!l) return (0, i.jsx)(i.Fragment, { children: s });
    let { border: _, background: m } = u[t];
    return (0, i.jsx)('div', {
        ref: n,
        className: c()(_, a),
        children: (0, i.jsx)('div', {
            className: c()(r ? m : o.background, d),
            children: s
        })
    });
});
