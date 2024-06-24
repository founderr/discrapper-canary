t.d(n, {
  Z: function() {
    return _
  }
});
var i = t(735250);
t(470079);
var l = t(120356),
  r = t.n(l),
  u = t(596454),
  o = t(377171),
  s = t(403910),
  a = t(549631),
  c = t(934241);

function _(e) {
  var n;
  let {
    guildId: t,
    emojiId: l,
    emojiName: _,
    className: d
  } = e, E = (0, s.Z)(t, l);
  return null != E || null != _ ? (0, i.jsx)(u.Z, {
    emojiId: null == E ? void 0 : E.id,
    emojiName: null != _ ? _ : null == E ? void 0 : E.name,
    animated: null !== (n = null == E ? void 0 : E.animated) && void 0 !== n && n,
    className: r()(c.emojiIcon, d)
  }) : (0, i.jsx)(a.Z, {
    className: r()(c.emojiIcon, d),
    color: o.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  })
}