n.d(t, {
    d: function () {
        return E;
    }
});
var a = n(735250);
n(470079);
var r = n(120356),
    s = n.n(r),
    o = n(780384),
    i = n(481060),
    l = n(410030),
    c = n(876917),
    d = n(328456),
    u = n(616066),
    f = n(746443),
    g = n(63243),
    p = n(244488);
let E = (e) => {
    let { product: t, isPurchased: n, isHighlighted: r, user: E, forCollectedModal: T, profileEffectClassName: C } = e,
        { firstProfileEffect: h, firstAvatarDecoration: b } = (0, d.R)(t),
        m = (0, l.ZP)(),
        v = (0, o.ap)(m);
    return (0, a.jsxs)('div', {
        className: f.container,
        children: [
            null != h
                ? (0, a.jsx)('div', {
                      className: s()(f.profileEffectShopPreview, C),
                      children: (0, a.jsx)(c.Z, {
                          isHovering: r,
                          profileEffectId: h.id,
                          isPurchased: n,
                          forCollectedModal: T,
                          removeSetHeight: !0
                      })
                  })
                : null,
            null != b
                ? (0, a.jsx)('div', {
                      className: f.avatarDecorationPreview,
                      children: (0, a.jsx)(u.R, {
                          item: b,
                          user: E,
                          avatarSize: i.AvatarSizes.SIZE_120,
                          isPurchased: n,
                          isHighlighted: r,
                          avatarPlaceholderSrc: v ? p : g
                      })
                  })
                : null
        ]
    });
};
