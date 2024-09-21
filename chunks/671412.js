n.d(t, {
    Z: function () {
        return f;
    }
}),
    n(47120);
var r = n(735250),
    i = n(470079),
    a = n(120356),
    s = n.n(a),
    o = n(510659),
    l = n(899007),
    u = n(287954),
    c = n(825801),
    d = n(228168),
    _ = n(8621);
function E(e) {
    let { user: t, sourceType: n, className: a, children: s } = e,
        o = i.useRef(null),
        [l, u] = i.useState(!1),
        d = () => {
            u(!0);
        },
        _ = () => {
            u(!1);
        };
    return (0, r.jsxs)('div', {
        className: a,
        onMouseOver: d,
        onMouseLeave: _,
        onFocus: d,
        onBlur: (e) => {
            var t;
            !(null === (t = o.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && _();
        },
        ref: o,
        children: [
            s,
            (0, r.jsx)(c.ZP, {
                user: t,
                sourceType: n,
                isVisible: l,
                isExpandable: !1
            })
        ]
    });
}
function f(e) {
    let { user: t, profileType: n, animateOnHover: i, onOpenProfile: a, ...c } = e,
        f = d.n_.AVATAR,
        { interactionSource: h } = (0, o.Xo)(),
        p = s()(_.avatar, {
            [_.hoisted]: h === d.n_.AVATAR || h === d.n_.STATUS,
            [_.biteSize]: n === d.y0.BITE_SIZE,
            [_.fullSize]: n === d.y0.FULL_SIZE,
            [_.panel]: n === d.y0.PANEL
        });
    return (0, r.jsx)(u.Z, {
        user: t,
        className: p,
        profileType: n,
        sourceType: f,
        ...c,
        children: () =>
            (0, r.jsx)(E, {
                className: p,
                user: t,
                sourceType: f,
                children: (0, r.jsx)(l.Z, {
                    user: t,
                    animateOnHover: i,
                    onOpenProfile: a,
                    profileType: n,
                    className: _.withReactReply,
                    ...c
                })
            })
    });
}
