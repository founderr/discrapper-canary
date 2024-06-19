var i = n(735250),
  s = n(470079),
  l = n(704215),
  a = n(605236),
  r = n(150340),
  o = n(434404),
  c = n(626135),
  u = n(428695),
  d = n(981631),
  E = n(921944),
  h = n(689938);
t.Z = e => {
  let {
    guild: t,
    markAsDismissed: n
  } = e;
  s.useEffect(() => {
    (0, a.kk)(l.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
  }, []);
  let _ = s.useCallback(() => {
      o.Z.open(t.id, d.pNK.ONBOARDING), c.default.track(d.rMx.UPSELL_CLICKED, {
        type: l.z[l.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE],
        action: "primary"
      }), (0, a.EW)(l.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, {
        dismissAction: E.L.PRIMARY
      }), (0, r.G)(t.id, l.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
    }, [t.id]),
    I = s.useCallback(() => {
      c.default.track(d.rMx.UPSELL_CLICKED, {
        type: l.z[l.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE],
        action: "dismiss"
      }), n(E.L.UNKNOWN), (0, r.G)(t.id, l.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
    }, [t.id, n]);
  return (0, i.jsx)(u.Z, {
    guild: t,
    onDismissed: I,
    onClick: _,
    title: h.Z.Messages.GUILD_ONBOARDING_CHANNEL_NOTICE_TITLE,
    message: h.Z.Messages.GUILD_ONBOARDING_CHANNEL_NOTICE_MESSAGE,
    cta: h.Z.Messages.CHECK_IT_OUT,
    trackingSource: d.PsQ.GUILD_ONBOARDING_UPSELL_NOTICE,
    type: d.vID.GUILD_ONBOARDING_UPSELL
  })
}