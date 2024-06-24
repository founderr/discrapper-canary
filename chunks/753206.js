var i = t(735250),
  l = t(470079),
  r = t(120356),
  u = t.n(r),
  o = t(628238),
  s = t(998951),
  a = t(25015),
  c = t(963550),
  _ = t(845080),
  d = t(105461);
n.Z = l.memo(function(e) {
  var n;
  let {
    message: t,
    channel: l,
    compact: r,
    className: E,
    isGroupStart: f,
    hideSimpleEmbedContent: A = !0,
    disableInteraction: I
  } = e, L = (0, o.A)((null !== (n = t.editedTimestamp) && void 0 !== n ? n : t.timestamp).valueOf()), {
    content: v
  } = (0, a.Z)(t, {
    hideSimpleEmbedContent: A,
    allowList: L,
    allowHeading: L,
    allowLinks: !0,
    previewLinkTarget: !0
  });
  return (0, i.jsx)(s.Z, {
    compact: r,
    className: u()(E, {
      [d.message]: !0,
      [d.cozyMessage]: !r,
      [d.groupStart]: f
    }),
    childrenHeader: (0, _.Z)({
      ...e,
      channel: l,
      guildId: void 0
    }),
    childrenMessageContent: (0, c.Z)(e, v),
    disableInteraction: I
  })
})