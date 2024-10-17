t.d(n, {
    Z: function () {
        return d;
    }
});
var r = t(735250);
t(470079);
var i = t(120356),
    l = t.n(i),
    o = t(596454),
    u = t(377171),
    s = t(403910),
    a = t(549631),
    c = t(873198);
function d(e) {
    var n;
    let { guildId: t, emojiId: i, emojiName: d, className: _ } = e,
        E = (0, s.Z)(t, i);
    return null != E || null != d
        ? (0, r.jsx)(o.Z, {
              emojiId: null == E ? void 0 : E.id,
              emojiName: null != d ? d : null == E ? void 0 : E.name,
              animated: null !== (n = null == E ? void 0 : E.animated) && void 0 !== n && n,
              className: l()(c.emojiIcon, _)
          })
        : (0, r.jsx)(a.Z, {
              className: l()(c.emojiIcon, _),
              color: u.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
          });
}
