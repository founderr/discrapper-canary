n.d(t, {
  Z: function() {
    return m
  }
});
var s = n(735250),
  i = n(470079),
  l = n(399606),
  a = n(704215),
  r = n(481060),
  o = n(605236),
  c = n(434404),
  u = n(430824),
  d = n(914010),
  E = n(626135),
  _ = n(150340),
  I = n(981631),
  T = n(689938);

function m(e) {
  let {
    dismissCurrentNotice: t
  } = e, n = (0, l.e7)([d.Z], () => d.Z.getGuildId(), []), m = (0, l.e7)([u.Z], () => u.Z.getGuild(n), [n]);
  return (i.useEffect(() => {
    (0, o.kk)(a.z.GUILD_ONBOARDING_UPSELL_NAGBAR)
  }, []), null == m) ? null : (0, s.jsxs)(r.Notice, {
    color: r.NoticeColors.DEFAULT,
    children: [(0, s.jsx)(r.NoticeCloseButton, {
      onClick: () => {
        E.default.track(I.rMx.UPSELL_CLICKED, {
          type: a.z[a.z.GUILD_ONBOARDING_UPSELL_NAGBAR],
          action: "dismiss"
        }), t(), (0, _.G)(m.id, a.z.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    }), T.Z.Messages.GUILD_ONBOARDING_NAGBAR_MESSAGE, (0, s.jsx)(r.NoticeButton, {
      onClick: () => {
        E.default.track(I.rMx.UPSELL_CLICKED, {
          type: a.z[a.z.GUILD_ONBOARDING_UPSELL_NAGBAR],
          action: "primary"
        }), c.Z.open(m.id, I.pNK.ONBOARDING), (0, _.G)(m.id, a.z.GUILD_ONBOARDING_UPSELL_NAGBAR)
      },
      children: T.Z.Messages.GUILD_ONBOARDING_UPSELL_COACHMARK_CHECK_IT_OUT
    })]
  })
}