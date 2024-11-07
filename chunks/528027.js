t.d(n, {
    Z: function () {
        return d;
    }
});
var i = t(200651);
t(192379);
var r = t(120356),
    l = t.n(r),
    o = t(596454),
    u = t(377171),
    a = t(403910),
    s = t(549631),
    c = t(873198);
function d(e) {
    var n;
    let { guildId: t, emojiId: r, emojiName: d, className: f } = e,
        p = (0, a.Z)(t, r);
    return null != p || null != d
        ? (0, i.jsx)(o.Z, {
              emojiId: null == p ? void 0 : p.id,
              emojiName: null != d ? d : null == p ? void 0 : p.name,
              animated: null !== (n = null == p ? void 0 : p.animated) && void 0 !== n && n,
              className: l()(c.emojiIcon, f)
          })
        : (0, i.jsx)(s.Z, {
              className: l()(c.emojiIcon, f),
              color: u.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
          });
}
