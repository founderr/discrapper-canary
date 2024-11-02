i.d(t, {
    Z: function () {
        return u;
    }
}),
    i(627341);
var n = i(200651);
i(192379);
var l = i(120356),
    r = i.n(l),
    a = i(278074),
    s = i(979554),
    o = i(481060),
    c = i(388032),
    d = i(435216);
function u(e) {
    var t;
    let { product: i, isDarkText: l = !1 } = e;
    let u =
        ((t = i.type),
        (0, a.EQ)(t)
            .with(s.Z.AVATAR_DECORATION, () => c.intl.string(c.t['7v0T9P']))
            .with(s.Z.PROFILE_EFFECT, () => c.intl.string(c.t.wR5wOj))
            .otherwise(() => null));
    return null === u
        ? null
        : (0, n.jsx)(o.Text, {
              variant: 'text-xxs/normal',
              className: r()([d.container, l ? d.darkText : d.lightText]),
              children: u
          });
}
