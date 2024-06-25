var i = t(735250),
  r = t(470079),
  l = t(120356),
  o = t.n(l),
  u = t(628238),
  s = t(998951),
  a = t(25015),
  c = t(963550),
  d = t(845080),
  _ = t(105461);
n.Z = r.memo(function(e) {
  var n;
  let {
    message: t,
    channel: r,
    compact: l,
    className: f,
    isGroupStart: E,
    hideSimpleEmbedContent: I = !0,
    disableInteraction: g
  } = e, S = (0, u.A)((null !== (n = t.editedTimestamp) && void 0 !== n ? n : t.timestamp).valueOf()), {
    content: p
  } = (0, a.Z)(t, {
    hideSimpleEmbedContent: I,
    allowList: S,
    allowHeading: S,
    allowLinks: !0,
    previewLinkTarget: !0
  });
  return (0, i.jsx)(s.Z, {
    compact: l,
    className: o()(f, {
      [_.message]: !0,
      [_.cozyMessage]: !l,
      [_.groupStart]: E
    }),
    childrenHeader: (0, d.Z)({
      ...e,
      channel: r,
      guildId: void 0
    }),
    childrenMessageContent: (0, c.Z)(e, p),
    disableInteraction: g
  })
})