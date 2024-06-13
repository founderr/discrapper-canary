"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("399606"),
  i = n("704215"),
  r = n("481060"),
  o = n("605236"),
  u = n("434404"),
  d = n("430824"),
  c = n("914010"),
  f = n("626135"),
  E = n("150340"),
  _ = n("981631"),
  T = n("689938");

function m(e) {
  let {
    dismissCurrentNotice: t
  } = e, n = (0, l.useStateFromStores)([c.default], () => c.default.getGuildId(), []), m = (0, l.useStateFromStores)([d.default], () => d.default.getGuild(n), [n]);
  return (a.useEffect(() => {
    (0, o.requestMarkDismissibleContentAsShown)(i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
  }, []), null == m) ? null : (0, s.jsxs)(r.Notice, {
    color: r.NoticeColors.DEFAULT,
    children: [(0, s.jsx)(r.NoticeCloseButton, {
      onClick: () => {
        f.default.track(_.AnalyticEvents.UPSELL_CLICKED, {
          type: i.DismissibleContent[i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
          action: "dismiss"
        }), t(), (0, E.dismissedGuildOnboardingUpsell)(m.id, i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    }), T.default.Messages.GUILD_ONBOARDING_NAGBAR_MESSAGE, (0, s.jsx)(r.NoticeButton, {
      onClick: () => {
        f.default.track(_.AnalyticEvents.UPSELL_CLICKED, {
          type: i.DismissibleContent[i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
          action: "primary"
        }), u.default.open(m.id, _.GuildSettingsSections.ONBOARDING), (0, E.dismissedGuildOnboardingUpsell)(m.id, i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      },
      children: T.default.Messages.GUILD_ONBOARDING_UPSELL_COACHMARK_CHECK_IT_OUT
    })]
  })
}