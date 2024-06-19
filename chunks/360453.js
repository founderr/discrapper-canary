var i = n(735250);
n(470079);
var s = n(442837),
  l = n(481060),
  a = n(949389),
  r = n(82950),
  o = n(434404),
  c = n(899667),
  u = n(267642),
  d = n(981631),
  E = n(689938),
  h = n(571472);
t.Z = e => {
  let {
    guild: t
  } = e, n = t.id, _ = (0, s.e7)([c.Z], () => c.Z.getAppliedGuildBoostsForGuild(t.id));
  return null == _ || 0 >= (0, u._k)(_, n) ? null : (0, i.jsx)(r.Z, {
    guild: t,
    onDismissed: () => {
      (0, a.GO)(n)
    },
    onClick: () => {
      o.Z.open(n, d.pNK.GUILD_PREMIUM)
    },
    message: E.Z.Messages.PREMIUM_GUILD_GRACE_PERIOD_NOTICE,
    trackingSource: d.PsQ.GRACE_PERIOD_NOTICE,
    type: d.vID.GUILD_BOOSTING_GRACE_PERIOD,
    image: h,
    cta: E.Z.Messages.PREMIUM_GUILD_GRACE_PERIOD_NOTICE_BUTTON,
    ctaColor: l.ButtonColors.PRIMARY
  })
}