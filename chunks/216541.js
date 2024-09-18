n.d(t, {
    d: function () {
        return v;
    }
});
var r = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    o = n(780384),
    i = n(481060),
    l = n(410030),
    c = n(876917),
    d = n(328456),
    u = n(616066),
    f = n(746443),
    g = n(63243),
    p = n(244488);
let v = (e) => {
    let { product: t, isPurchased: n, isHighlighted: a, user: v, forCollectedModal: C, profileEffectClassName: m } = e,
        { firstProfileEffect: E, firstAvatarDecoration: h } = (0, d.R)(t),
        b = (0, l.ZP)(),
        y = (0, o.ap)(b);
    return (0, r.jsxs)('div', {
        className: f.container,
        children: [
            null != E
                ? (0, r.jsx)('div', {
                      className: s()(f.profileEffectShopPreview, m),
                      children: (0, r.jsx)(c.Z, {
                          isHovering: a,
                          profileEffectId: E.id,
                          isPurchased: n,
                          forCollectedModal: C,
                          removeSetHeight: !0
                      })
                  })
                : null,
            null != h
                ? (0, r.jsx)('div', {
                      className: f.avatarDecorationPreview,
                      children: (0, r.jsx)(u.R, {
                          item: h,
                          user: v,
                          avatarSize: i.AvatarSizes.SIZE_120,
                          isPurchased: n,
                          isHighlighted: a,
                          avatarPlaceholderSrc: y ? p : g
                      })
                  })
                : null
        ]
    });
};
