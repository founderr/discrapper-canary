n.d(t, {
    d: function () {
        return C;
    }
});
var a = n(735250);
n(470079);
var r = n(120356),
    s = n.n(r),
    o = n(780384),
    l = n(481060),
    i = n(410030),
    c = n(876917),
    d = n(328456),
    u = n(616066),
    f = n(746443),
    g = n(63243),
    p = n(244488);
let C = (e) => {
    let { product: t, isPurchased: n, isHighlighted: r, user: C, forCollectedModal: m, profileEffectClassName: E } = e,
        { firstProfileEffect: v, firstAvatarDecoration: h } = (0, d.R)(t),
        b = (0, i.ZP)(),
        y = (0, o.ap)(b);
    return (0, a.jsxs)('div', {
        className: f.container,
        children: [
            null != v
                ? (0, a.jsx)('div', {
                      className: s()(f.profileEffectShopPreview, E),
                      children: (0, a.jsx)(c.Z, {
                          isHovering: r,
                          profileEffectId: v.id,
                          isPurchased: n,
                          forCollectedModal: m,
                          removeSetHeight: !0
                      })
                  })
                : null,
            null != h
                ? (0, a.jsx)('div', {
                      className: f.avatarDecorationPreview,
                      children: (0, a.jsx)(u.R, {
                          item: h,
                          user: C,
                          avatarSize: l.AvatarSizes.SIZE_120,
                          isPurchased: n,
                          isHighlighted: r,
                          avatarPlaceholderSrc: y ? p : g
                      })
                  })
                : null
        ]
    });
};
