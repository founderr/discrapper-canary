n.d(e, {
    d: function () {
        return v;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    i = n.n(a),
    s = n(780384),
    o = n(481060),
    l = n(410030),
    c = n(876917),
    d = n(328456),
    u = n(616066),
    f = n(746443),
    g = n(63243),
    p = n(244488);
let v = (t) => {
    let { product: e, isPurchased: n, isHighlighted: a, user: v, forCollectedModal: h, profileEffectClassName: b } = t,
        { firstProfileEffect: m, firstAvatarDecoration: S } = (0, d.R)(e),
        T = (0, l.ZP)(),
        C = (0, s.ap)(T);
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
            null != S
                ? (0, r.jsx)('div', {
                      className: f.avatarDecorationPreview,
                      children: (0, r.jsx)(u.R, {
                          item: S,
                          user: v,
                          avatarSize: o.AvatarSizes.SIZE_120,
                          isPurchased: n,
                          isHighlighted: a,
                          avatarPlaceholderSrc: C ? p : g
                      })
                  })
                : null
        ]
    });
};
