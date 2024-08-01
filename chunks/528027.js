t.d(n, {
  Z: function() {
return d;
  }
});
var r = t(735250);
t(470079);
var i = t(120356),
  o = t.n(i),
  l = t(596454),
  u = t(377171),
  a = t(403910),
  s = t(549631),
  c = t(195831);

function d(e) {
  var n;
  let {
guildId: t,
emojiId: i,
emojiName: d,
className: _
  } = e, E = (0, a.Z)(t, i);
  return null != E || null != d ? (0, r.jsx)(l.Z, {
emojiId: null == E ? void 0 : E.id,
emojiName: null != d ? d : null == E ? void 0 : E.name,
animated: null !== (n = null == E ? void 0 : E.animated) && void 0 !== n && n,
className: o()(c.emojiIcon, _)
  }) : (0, r.jsx)(s.Z, {
className: o()(c.emojiIcon, _),
color: u.Z.CREATOR_REVENUE_LOCKED_CHANNEL_ICON
  });
}