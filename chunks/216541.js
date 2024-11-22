n.d(e, {
    d: function () {
        return v;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    o = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(876917),
    d = n(328456),
    u = n(616066),
    f = n(746443),
    p = n(63243),
    g = n(244488);
let v = (t) => {
    let { product: e, isPurchased: n, isHighlighted: a, user: v, forCollectedModal: h, profileEffectClassName: b } = t,
        { firstProfileEffect: m, firstAvatarDecoration: x } = (0, d.R)(e),
        S = (0, l.ZP)(),
        C = (0, o.ap)(S);
    return (0, r.jsxs)('div', {
        className: f.container,
        children: [
            null != m
                ? (0, r.jsx)('div', {
                      className: i()(f.profileEffectShopPreview, b),
                      children: (0, r.jsx)(c.Z, {
                          isHovering: a,
                          profileEffectId: m.id,
                          isPurchased: n,
                          forCollectedModal: h,
                          removeSetHeight: !0
                      })
                  })
                : null,
            null != x
                ? (0, r.jsx)('div', {
                      className: f.avatarDecorationPreview,
                      children: (0, r.jsx)(u.R, {
                          item: x,
                          user: v,
                          avatarSize: s.AvatarSizes.SIZE_120,
                          isPurchased: n,
                          isHighlighted: a,
                          avatarPlaceholderSrc: C ? g : p
                      })
                  })
                : null
        ]
    });
};
