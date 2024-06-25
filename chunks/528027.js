t.d(n, {
  Z: function() {
    return d
  }
});
var i = t(735250);
t(470079);
var r = t(120356),
  l = t.n(r),
  o = t(596454),
  u = t(377171),
  s = t(403910),
  a = t(549631),
  c = t(934241);

function d(e) {
  var n;
  let {
    guildId: t,
    emojiId: r,
    emojiName: d,
    className: _
  } = e, f = (0, s.Z)(t, r);
  return null != f || null != d ? (0, i.jsx)(o.Z, {
    emojiId: null == f ? void 0 : f.id,
    emojiName: null != d ? d : null == f ? void 0 : f.name,
    animated: null !== (n = null == f ? void 0 : f.animated) && void 0 !== n && n,
    className: l()(c.emojiIcon, _)
  }) : (0, i.jsx)(a.Z, {
    className: l()(c.emojiIcon, _),
    color: u.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  })
}