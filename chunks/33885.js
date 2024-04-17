"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n("735250"),
  a = n("470079"),
  l = n("399606"),
  i = n("524437"),
  r = n("605236"),
  o = n("434404"),
  u = n("430824"),
  d = n("914010"),
  c = n("644766"),
  f = n("626135"),
  E = n("150340"),
  _ = n("981631"),
  m = n("689938");

function T(e) {
  let {
    dismissCurrentNotice: t
  } = e, n = (0, l.useStateFromStores)([d.default], () => d.default.getGuildId(), []), T = (0, l.useStateFromStores)([u.default], () => u.default.getGuild(n), [n]);
  return (a.useEffect(() => {
    (0, r.requestMarkDismissibleContentAsShown)(i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
  }, []), null == T) ? null : (0, s.jsxs)(c.default, {
    color: c.NoticeColors.DEFAULT,
    children: [(0, s.jsx)(c.NoticeCloseButton, {
      onClick: () => {
        f.default.track(_.AnalyticEvents.UPSELL_CLICKED, {
          type: i.DismissibleContent[i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
          action: "dismiss"
        }), t(), (0, E.dismissedGuildOnboardingUpsell)(T.id, i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    }), m.default.Messages.GUILD_ONBOARDING_NAGBAR_MESSAGE, (0, s.jsx)(c.NoticeButton, {
      onClick: () => {
        f.default.track(_.AnalyticEvents.UPSELL_CLICKED, {
          type: i.DismissibleContent[i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
          action: "primary"
        }), o.default.open(T.id, _.GuildSettingsSections.ONBOARDING), (0, E.dismissedGuildOnboardingUpsell)(T.id, i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      },
      children: m.default.Messages.GUILD_ONBOARDING_UPSELL_COACHMARK_CHECK_IT_OUT
    })]
  })
}