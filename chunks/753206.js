var _ = S(735250),
  t = S(470079),
  n = S(120356),
  i = S.n(n),
  l = S(628238),
  I = S(492593),
  r = S(25015),
  s = S(963550),
  N = S(845080),
  o = S(105461);
e.Z = t.memo(function(E) {
  var e;
  let {
    message: S,
    channel: t,
    compact: n,
    className: A,
    isGroupStart: R,
    hideSimpleEmbedContent: O = !0,
    disableInteraction: u
  } = E, a = (0, l.A)((null !== (e = S.editedTimestamp) && void 0 !== e ? e : S.timestamp).valueOf()), {
    content: P
  } = (0, r.Z)(S, {
    hideSimpleEmbedContent: O,
    allowList: a,
    allowHeading: a,
    allowLinks: !0,
    previewLinkTarget: !0
  });
  return (0, _.jsx)(I.Z, {
    compact: n,
    className: i()(A, {
      [o.message]: !0,
      [o.cozyMessage]: !n,
      [o.groupStart]: R
    }),
    childrenHeader: (0, N.Z)({
      ...E,
      channel: t,
      guildId: void 0
    }),
    childrenMessageContent: (0, s.Z)(E, P),
    disableInteraction: u
  })
})