r.d(t, {
    d: function () {
        return v;
    }
});
var n = r(735250);
r(470079);
var a = r(120356),
    s = r.n(a),
    o = r(780384),
    i = r(481060),
    l = r(410030),
    c = r(876917),
    d = r(328456),
    u = r(616066),
    f = r(746443),
    g = r(63243),
    p = r(244488);
let v = (e) => {
    let { product: t, isPurchased: r, isHighlighted: a, user: v, forCollectedModal: C, profileEffectClassName: m } = e,
        { firstProfileEffect: E, firstAvatarDecoration: h } = (0, d.R)(t),
        b = (0, l.ZP)(),
        y = (0, o.ap)(b);
    return (0, n.jsxs)('div', {
        className: f.container,
        children: [
            null != E
                ? (0, n.jsx)('div', {
                      className: s()(f.profileEffectShopPreview, m),
                      children: (0, n.jsx)(c.Z, {
                          isHovering: a,
                          profileEffectId: E.id,
                          isPurchased: r,
                          forCollectedModal: C,
                          removeSetHeight: !0
                      })
                  })
                : null,
            null != h
                ? (0, n.jsx)('div', {
                      className: f.avatarDecorationPreview,
                      children: (0, n.jsx)(u.R, {
                          item: h,
                          user: v,
                          avatarSize: i.AvatarSizes.SIZE_120,
                          isPurchased: r,
                          isHighlighted: a,
                          avatarPlaceholderSrc: y ? p : g
                      })
                  })
                : null
        ]
    });
};
