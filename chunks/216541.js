n.d(e, {
    d: function () {
        return h;
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
    g = n(63243),
    p = n(244488);
let h = (t) => {
    let { product: e, isPurchased: n, isHighlighted: a, user: h, forCollectedModal: b, profileEffectClassName: m } = t,
        { firstProfileEffect: v, firstAvatarDecoration: C } = (0, d.R)(e),
        x = (0, l.ZP)(),
        T = (0, o.ap)(x);
    return (0, r.jsxs)('div', {
        className: f.container,
        children: [
            null != v
                ? (0, r.jsx)('div', {
                      className: i()(f.profileEffectShopPreview, m),
                      children: (0, r.jsx)(c.Z, {
                          isHovering: a,
                          profileEffectId: v.id,
                          isPurchased: n,
                          forCollectedModal: b,
                          removeSetHeight: !0
                      })
                  })
                : null,
            null != C
                ? (0, r.jsx)('div', {
                      className: f.avatarDecorationPreview,
                      children: (0, r.jsx)(u.R, {
                          item: C,
                          user: h,
                          avatarSize: s.AvatarSizes.SIZE_120,
                          isPurchased: n,
                          isHighlighted: a,
                          avatarPlaceholderSrc: T ? p : g
                      })
                  })
                : null
        ]
    });
};
