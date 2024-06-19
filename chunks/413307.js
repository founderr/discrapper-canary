var i = n(735250),
  s = n(470079),
  l = n(949389),
  a = n(82950),
  r = n(434404),
  o = n(981631),
  c = n(689938),
  u = n(438825);
t.Z = e => {
  let {
    guild: t
  } = e, n = s.useCallback(() => {
    (0, l.K7)(t.id)
  }, [t.id]);
  return (0, i.jsx)(a.Z, {
    guild: t,
    onDismissed: n,
    onClick: () => r.Z.open(t.id, o.pNK.COMMUNITY),
    message: c.Z.Messages.NOTICE_ENABLE_PUBLIC_GUILD_UPSELL_MESSAGE,
    trackingSource: o.PsQ.ENABLE_PUBLIC_GUILD_UPSELL_NOTICE,
    type: o.vID.PUBLIC_UPSELL,
    image: u,
    cta: c.Z.Messages.LEARN_MORE
  })
}