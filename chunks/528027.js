t.d(n, {
    Z: function () {
        return _;
    }
});
var i = t(735250);
t(470079);
var r = t(120356),
    l = t.n(r),
    s = t(596454),
    o = t(377171),
    u = t(403910),
    a = t(549631),
    c = t(873198);
function _(e) {
    var n;
    let { guildId: t, emojiId: r, emojiName: _, className: d } = e,
        f = (0, u.Z)(t, r);
    return null != f || null != _
        ? (0, i.jsx)(s.Z, {
              emojiId: null == f ? void 0 : f.id,
              emojiName: null != _ ? _ : null == f ? void 0 : f.name,
              animated: null !== (n = null == f ? void 0 : f.animated) && void 0 !== n && n,
              className: l()(c.emojiIcon, d)
          })
        : (0, i.jsx)(a.Z, {
              className: l()(c.emojiIcon, d),
              color: o.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
          });
}
