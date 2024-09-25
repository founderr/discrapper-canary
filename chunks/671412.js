n.d(t, {
    Z: function () {
        return h;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(120356),
    s = n.n(o),
    l = n(510659),
    u = n(899007),
    c = n(287954),
    d = n(825801),
    _ = n(228168),
    E = n(8621);
function f(e) {
    let { user: t, sourceType: n, className: r, children: o } = e,
        s = a.useRef(null),
        [l, u] = a.useState(!1),
        c = () => {
            u(!0);
        },
        _ = () => {
            u(!1);
        };
    return (0, i.jsxs)('div', {
        className: r,
        onMouseOver: c,
        onMouseLeave: _,
        onFocus: c,
        onBlur: (e) => {
            var t;
            !(null === (t = s.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) && _();
        },
        ref: s,
        children: [
            o,
            (0, i.jsx)(d.ZP, {
                user: t,
                sourceType: n,
                isVisible: l,
                isExpandable: !1
            })
        ]
    });
}
function h(e) {
    let { user: t, profileType: n, animateOnHover: r, onOpenProfile: a, ...o } = e,
        d = _.n_.AVATAR,
        { interactionSource: h } = (0, l.Xo)(),
        p = s()(E.avatar, {
            [E.hoisted]: h === _.n_.AVATAR || h === _.n_.STATUS,
            [E.biteSize]: n === _.y0.BITE_SIZE,
            [E.fullSize]: n === _.y0.FULL_SIZE,
            [E.panel]: n === _.y0.PANEL
        });
    return (0, i.jsx)(c.Z, {
        user: t,
        className: p,
        profileType: n,
        sourceType: d,
        ...o,
        children: () =>
            (0, i.jsx)(f, {
                className: p,
                user: t,
                sourceType: d,
                children: (0, i.jsx)(u.Z, {
                    user: t,
                    animateOnHover: r,
                    onOpenProfile: a,
                    profileType: n,
                    className: E.withReactReply,
                    ...o
                })
            })
    });
}
