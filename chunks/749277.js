"use strict";
n.r(t), n.d(t, {
  DismissibleContentNotices: function() {
    return U
  }
});
var s = n("735250");
n("470079");
var a = n("442837"),
  l = n("704215"),
  i = n("481060"),
  r = n("232567"),
  o = n("230711"),
  u = n("726542"),
  d = n("100527"),
  c = n("231757"),
  f = n("674525"),
  E = n("29458"),
  _ = n("636629"),
  m = n("33885"),
  T = n("963249"),
  I = n("346585"),
  p = n("303172"),
  h = n("463230"),
  N = n("246965"),
  S = n("703656"),
  C = n("706454"),
  g = n("933429"),
  A = n("395361"),
  M = n("644766"),
  R = n("626135"),
  v = n("243778"),
  O = n("921944"),
  x = n("981631"),
  L = n("801461"),
  D = n("474936"),
  P = n("689938"),
  y = n("229647");
let U = e => {
  let {
    dismissibleContent: t,
    noticeType: U
  } = e, j = (0, a.useStateFromStores)([g.default], () => g.default.getNotice()), b = (0, a.useStateFromStores)([C.default], () => C.default.locale);
  return (0, s.jsx)(v.default, {
    contentTypes: [t],
    groupName: O.DismissibleContentGroupName.NOTICE_BAR,
    bypassAutoDismiss: !0,
    children: e => {
      var t, a;
      let {
        visibleContent: C,
        markAsDismissed: g
      } = e;
      switch (C) {
        case l.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR:
          return (0, s.jsx)(m.default, {
            dismissCurrentNotice: () => g(O.ContentDismissActionType.UNKNOWN)
          });
        case l.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD:
          return (0, s.jsxs)(M.default, {
            color: M.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(M.NoticeCloseButton, {
              onClick: () => g(O.ContentDismissActionType.UNKNOWN),
              noticeType: U
            }), P.default.Messages.NOTICE_NATIVE_APPS_2020_06, (0, s.jsx)("i", {
              className: y.iconApple
            }), (0, s.jsx)("i", {
              className: y.iconAndroid
            }), (0, s.jsx)("i", {
              className: y.iconWindows
            }), (0, s.jsx)(M.PrimaryCTANoticeButton, {
              noticeType: U,
              onClick: () => {
                (0, i.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.resolve().then(n.bind(n, "431583"));
                  return t => (0, s.jsx)(e, {
                    source: "Top Bar Nag",
                    ...t
                  })
                })
              },
              children: P.default.Messages.DOWNLOAD
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, s.jsxs)(M.default, {
            color: M.NoticeColors.SPOTIFY,
            children: [(0, s.jsx)(M.NoticeCloseButton, {
              onClick: () => g(O.ContentDismissActionType.UNKNOWN),
              noticeType: U
            }), (0, s.jsx)(A.default, {
              className: y.platformIcon
            }), P.default.Messages.NOTICE_CONNECT_SPOTIFY, (0, s.jsx)(M.PrimaryCTANoticeButton, {
              onClick: () => (0, c.default)({
                platformType: x.PlatformTypes.SPOTIFY,
                location: "Notice Bar"
              }),
              noticeType: U,
              children: P.default.Messages.CONNECT
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, s.jsxs)(M.default, {
            color: M.NoticeColors.PLAYSTATION,
            children: [(0, s.jsx)(M.NoticeCloseButton, {
              onClick: () => g(O.ContentDismissActionType.UNKNOWN)
            }), (0, s.jsx)("img", {
              alt: "",
              className: y.platformIcon,
              src: u.default.get(x.PlatformTypes.PLAYSTATION).icon.whiteSVG
            }), P.default.Messages.NOTICE_CONNECT_PLAYSTATION, (0, s.jsx)(M.NoticeButton, {
              onClick: () => (0, c.default)({
                platformType: x.PlatformTypes.PLAYSTATION,
                location: "Notice Bar"
              }),
              children: P.default.Messages.CONNECT
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP:
          return (0, s.jsxs)(M.default, {
            color: M.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(M.NoticeCloseButton, {
              onClick: () => g(O.ContentDismissActionType.UNKNOWN),
              noticeType: U
            }), P.default.Messages.NOTICE_MFA_SMS_BACKUP, (0, s.jsx)(M.PrimaryCTANoticeButton, {
              onClick: () => o.default.open(x.UserSettingsSections.ACCOUNT),
              noticeType: U,
              children: P.default.Messages.NOTICE_MFA_SMS_BACKUP_BUTTON
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, s.jsxs)(M.default, {
            color: M.NoticeColors.PREMIUM_TIER_2,
            children: [(0, s.jsx)("span", {
              className: y.premiumLogo
            }), (0, s.jsx)("span", {
              className: y.premiumText,
              children: P.default.Messages.NOTICE_PREMIUM_PROMO_MESSAGE
            }), (0, s.jsx)(M.PrimaryCTANoticeButton, {
              className: y.premiumAction,
              noticeType: U,
              onClick: () => {
                R.default.track(x.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                  location_section: x.AnalyticsSections.NOTIFICATION_BAR,
                  location_object: x.AnalyticsObjects.BUTTON_CTA
                }), o.default.open(x.UserSettingsSections.PREMIUM)
              },
              children: P.default.Messages.NOTICE_PREMIUM_PROMO_ACTION
            }), (0, s.jsx)(M.NoticeCloseButton, {
              onClick: () => {
                g(O.ContentDismissActionType.UNKNOWN), (0, r.setFlag)(x.UserFlags.PREMIUM_PROMO_DISMISSED, !0)
              },
              noticeType: U
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, s.jsx)(N.default, {
            dismissCurrentNotice: () => g(O.ContentDismissActionType.UNKNOWN),
            subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, s.jsx)(N.default, {
            dismissCurrentNotice: () => g(O.ContentDismissActionType.UNKNOWN),
            subscriptionTier: D.PremiumSubscriptionSKUs.TIER_0
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, s.jsxs)(M.default, {
            color: M.NoticeColors.PREMIUM_TIER_2,
            children: [(0, s.jsx)(M.NoticeCloseButton, {
              noticeType: U,
              onClick: () => g(O.ContentDismissActionType.UNKNOWN)
            }), P.default.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_TEXT, (0, s.jsx)(M.PrimaryCTANoticeButton, {
              noticeType: U,
              onClick: () => {
                g(O.ContentDismissActionType.UNKNOWN), o.default.open(x.UserSettingsSections.PREMIUM)
              },
              children: P.default.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_BUTTON_TEXT
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING:
          return (0, s.jsx)(h.default, {
            notice: j,
            noticeType: U,
            dismissCurrentNotice: () => g(O.ContentDismissActionType.UNKNOWN)
          });
        case l.DismissibleContent.QUEST_1_GO_LIVE_BANNER:
          let v = null == j ? void 0 : null === (t = j.metadata) || void 0 === t ? void 0 : t.partnerGame;
          return (0, s.jsx)(_.default, {
            noticeType: U,
            markAsDismissed: () => g(O.ContentDismissActionType.UNKNOWN),
            partnerGame: v
          });
        case l.DismissibleContent.QUEST_1_ENDED_INCOMPLETE:
          let F = null == j ? void 0 : null === (a = j.metadata) || void 0 === a ? void 0 : a.partnerGame;
          return (0, s.jsx)(E.default, {
            noticeType: U,
            markAsDismissed: () => g(O.ContentDismissActionType.UNKNOWN),
            partnerGame: F
          });
        case l.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, s.jsxs)(M.default, {
            color: M.NoticeColors.DANGER,
            children: [(0, s.jsx)(M.NoticeCloseButton, {
              onClick: () => g(O.ContentDismissActionType.UNKNOWN),
              noticeType: U
            }), P.default.Messages.BOUNCED_EMAIL_DETECTED_NOTICE, (0, s.jsx)(M.PrimaryCTANoticeButton, {
              noticeType: U,
              onClick: () => {
                (0, S.transitionTo)(x.Routes.SETTINGS("account"))
              },
              children: P.default.Messages.CHANGE_EMAIL_SHORT
            })]
          });
        case l.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let B = f.default.getEligibleGuildsForNagActivate();
          return (0, s.jsxs)(M.default, {
            color: M.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(M.NoticeCloseButton, {
              onClick: () => g(O.ContentDismissActionType.UNKNOWN),
              noticeType: U
            }), P.default.Messages.GUILD_ROLE_SUBSCRIPTION_NAGBAR_TEXT, (0, s.jsx)(M.PrimaryCTANoticeButton, {
              noticeType: U,
              onClick: () => {
                g(O.ContentDismissActionType.PRIMARY), (0, S.transitionTo)(1 === B.length ? x.Routes.GUILD_SETTINGS(B[0], "role-subscriptions") : x.Routes.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
              },
              children: P.default.Messages.LETS_GO
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_POMELO:
          return (0, s.jsxs)(M.default, {
            color: M.NoticeColors.WARNING,
            children: [(0, s.jsx)(M.NoticeCloseButton, {
              onClick: () => g(O.ContentDismissActionType.UNKNOWN),
              noticeType: U
            }), P.default.Messages.POMELO_ACTION_NEEDED.format(), (0, s.jsx)(M.PrimaryCTANoticeButton, {
              onClick: () => (0, p.default)(L.PomeloEntrypoints.NOTICE),
              noticeType: U,
              children: P.default.Messages.GET_STARTED
            })]
          });
        case l.DismissibleContent.UU_MIGRATION_NOTICE:
          return (0, s.jsxs)(M.default, {
            color: M.NoticeColors.WARNING,
            children: [(0, s.jsx)(M.NoticeCloseButton, {
              onClick: () => g(O.ContentDismissActionType.UNKNOWN),
              noticeType: U
            }), P.default.Messages.POMELO_ACTION_NEEDED_FORCE.format({
              date: (0, I.getLocalizedForcedUUDate)(b)
            }), (0, s.jsx)(M.PrimaryCTANoticeButton, {
              onClick: () => (0, p.default)(L.PomeloEntrypoints.NOTICE),
              noticeType: U,
              children: P.default.Messages.GET_STARTED
            })]
          });
        case l.DismissibleContent.CHECKOUT_RECOVERY_NAGBAR:
          return (0, s.jsxs)(M.default, {
            color: M.NoticeColors.PREMIUM_TIER_2,
            children: [(0, s.jsx)(M.NoticeCloseButton, {
              onClick: () => g(O.ContentDismissActionType.UNKNOWN),
              noticeType: U
            }), P.default.Messages.CHECKOUT_RECOVERY_NAGBAR_CONTENT, (0, s.jsx)(M.PrimaryCTANoticeButton, {
              onClick: () => {
                (0, T.default)({
                  subscriptionTier: D.PremiumSubscriptionSKUs.TIER_2,
                  analyticsLocations: [d.default.CHECKOUT_RECOVERY_NAGBAR],
                  analyticsLocation: x.AnalyticsLocations.CHECKOUT_RECOVERY_NAGBAR,
                  onClose: () => g(O.ContentDismissActionType.UNKNOWN)
                })
              },
              noticeType: U,
              children: P.default.Messages.CHECKOUT_RECOVERY_NAGBAR_CTA
            })]
          })
      }
    }
  })
}