r.d(n, {
    Z: function () {
        return h;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(510659),
    l = r(899007),
    u = r(287954),
    c = r(660579),
    d = r(64621),
    f = r(228168),
    _ = r(882636);
function h(e) {
    let { user: n, profileType: r, animateOnHover: a, onOpenProfile: h, ...p } = e,
        m = f.n_.AVATAR,
        { interactionSource: g } = (0, o.Xo)(),
        E = s()(_.avatar, {
            [_.hoisted]: g === f.n_.AVATAR || g === f.n_.STATUS,
            [_.biteSize]: r === f.y0.BITE_SIZE,
            [_.fullSize]: r === f.y0.FULL_SIZE,
            [_.panel]: r === f.y0.PANEL
        });
    return (0, i.jsx)(d.Z, {
        sourceType: f.n_.AVATAR,
        user: n,
        children: (0, i.jsx)(u.Z, {
            user: n,
            className: E,
            profileType: r,
            sourceType: m,
            ...p,
            children: () =>
                (0, i.jsx)(c.Z, {
                    className: E,
                    user: n,
                    sourceType: m,
                    children: (0, i.jsx)(l.Z, {
                        user: n,
                        animateOnHover: a,
                        onOpenProfile: h,
                        profileType: r,
                        className: _.withReactReply,
                        ...p
                    })
                })
        })
    });
}
