n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    o = n(596454),
    u = n(377171),
    a = n(403910),
    s = n(549631),
    c = n(873198);
function d(e) {
    var t;
    let { guildId: n, emojiId: r, emojiName: d, className: f } = e,
        p = (0, a.Z)(n, r);
    return null != p || null != d
        ? (0, i.jsx)(o.Z, {
              emojiId: null == p ? void 0 : p.id,
              emojiName: null != d ? d : null == p ? void 0 : p.name,
              animated: null !== (t = null == p ? void 0 : p.animated) && void 0 !== t && t,
              className: l()(c.emojiIcon, f)
          })
        : (0, i.jsx)(s.Z, {
              className: l()(c.emojiIcon, f),
              color: u.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
          });
}
