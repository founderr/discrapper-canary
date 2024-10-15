n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250);
n(470079);
var i = n(120356),
    a = n.n(i),
    s = n(510659),
    o = n(899007),
    l = n(287954),
    u = n(660579),
    c = n(64621),
    d = n(228168),
    _ = n(8621);
function E(e) {
    let { user: t, profileType: n, animateOnHover: i, onOpenProfile: E, ...f } = e,
        h = d.n_.AVATAR,
        { interactionSource: p } = (0, s.Xo)(),
        I = a()(_.avatar, {
            [_.hoisted]: p === d.n_.AVATAR || p === d.n_.STATUS,
            [_.biteSize]: n === d.y0.BITE_SIZE,
            [_.fullSize]: n === d.y0.FULL_SIZE,
            [_.panel]: n === d.y0.PANEL
        });
    return (0, r.jsx)(c.Z, {
        sourceType: d.n_.AVATAR,
        user: t,
        children: (0, r.jsx)(l.Z, {
            user: t,
            className: I,
            profileType: n,
            sourceType: h,
            ...f,
            children: () =>
                (0, r.jsx)(u.Z, {
                    className: I,
                    user: t,
                    sourceType: h,
                    children: (0, r.jsx)(o.Z, {
                        user: t,
                        animateOnHover: i,
                        onOpenProfile: E,
                        profileType: n,
                        className: _.withReactReply,
                        ...f
                    })
                })
        })
    });
}
