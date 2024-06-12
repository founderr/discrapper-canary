"use strict";
n.r(t), n.d(t, {
  DismissibleContentNotices: function() {
    return y
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
  h = n("303172"),
  p = n("463230"),
  N = n("246965"),
  S = n("703656"),
  C = n("706454"),
  g = n("933429"),
  A = n("395361"),
  M = n("626135"),
  R = n("243778"),
  v = n("921944"),
  O = n("981631"),
  x = n("801461"),
  L = n("474936"),
  D = n("689938"),
  P = n("229647");
let y = e => {
  let {
    dismissibleContent: t,
    noticeType: y
  } = e, U = (0, a.useStateFromStores)([g.default], () => g.default.getNotice()), j = (0, a.useStateFromStores)([C.default], () => C.default.locale);
  return (0, s.jsx)(R.default, {
    contentTypes: [t],
    groupName: v.DismissibleContentGroupName.NOTICE_BAR,
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
            dismissCurrentNotice: () => g(v.ContentDismissActionType.UNKNOWN)
          });
        case l.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD:
          return (0, s.jsxs)(i.Notice, {
            color: i.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(i.NoticeCloseButton, {
              onClick: () => g(v.ContentDismissActionType.UNKNOWN),
              noticeType: y
            }), D.default.Messages.NOTICE_NATIVE_APPS_2020_06, (0, s.jsx)("i", {
              className: P.iconApple
            }), (0, s.jsx)("i", {
              className: P.iconAndroid
            }), (0, s.jsx)("i", {
              className: P.iconWindows
            }), (0, s.jsx)(i.PrimaryCTANoticeButton, {
              noticeType: y,
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
              children: D.default.Messages.DOWNLOAD
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, s.jsxs)(i.Notice, {
            color: i.NoticeColors.SPOTIFY,
            children: [(0, s.jsx)(i.NoticeCloseButton, {
              onClick: () => g(v.ContentDismissActionType.UNKNOWN),
              noticeType: y
            }), (0, s.jsx)(A.default, {
              className: P.platformIcon
            }), D.default.Messages.NOTICE_CONNECT_SPOTIFY, (0, s.jsx)(i.PrimaryCTANoticeButton, {
              onClick: () => (0, c.default)({
                platformType: O.PlatformTypes.SPOTIFY,
                location: "Notice Bar"
              }),
              noticeType: y,
              children: D.default.Messages.CONNECT
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, s.jsxs)(i.Notice, {
            color: i.NoticeColors.PLAYSTATION,
            children: [(0, s.jsx)(i.NoticeCloseButton, {
              onClick: () => g(v.ContentDismissActionType.UNKNOWN)
            }), (0, s.jsx)("img", {
              alt: "",
              className: P.platformIcon,
              src: u.default.get(O.PlatformTypes.PLAYSTATION).icon.whiteSVG
            }), D.default.Messages.NOTICE_CONNECT_PLAYSTATION, (0, s.jsx)(i.NoticeButton, {
              onClick: () => (0, c.default)({
                platformType: O.PlatformTypes.PLAYSTATION,
                location: "Notice Bar"
              }),
              children: D.default.Messages.CONNECT
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP:
          return (0, s.jsxs)(i.Notice, {
            color: i.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(i.NoticeCloseButton, {
              onClick: () => g(v.ContentDismissActionType.UNKNOWN),
              noticeType: y
            }), D.default.Messages.NOTICE_MFA_SMS_BACKUP, (0, s.jsx)(i.PrimaryCTANoticeButton, {
              onClick: () => o.default.open(O.UserSettingsSections.ACCOUNT),
              noticeType: y,
              children: D.default.Messages.NOTICE_MFA_SMS_BACKUP_BUTTON
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, s.jsxs)(i.Notice, {
            color: i.NoticeColors.PREMIUM_TIER_2,
            children: [(0, s.jsx)("span", {
              className: P.premiumLogo
            }), (0, s.jsx)("span", {
              className: P.premiumText,
              children: D.default.Messages.NOTICE_PREMIUM_PROMO_MESSAGE
            }), (0, s.jsx)(i.PrimaryCTANoticeButton, {
              className: P.premiumAction,
              noticeType: y,
              onClick: () => {
                M.default.track(O.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                  location_section: O.AnalyticsSections.NOTIFICATION_BAR,
                  location_object: O.AnalyticsObjects.BUTTON_CTA
                }), o.default.open(O.UserSettingsSections.PREMIUM)
              },
              children: D.default.Messages.NOTICE_PREMIUM_PROMO_ACTION
            }), (0, s.jsx)(i.NoticeCloseButton, {
              onClick: () => {
                g(v.ContentDismissActionType.UNKNOWN), (0, r.setFlag)(O.UserFlags.PREMIUM_PROMO_DISMISSED, !0)
              },
              noticeType: y
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, s.jsx)(N.default, {
            dismissCurrentNotice: () => g(v.ContentDismissActionType.UNKNOWN),
            subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, s.jsx)(N.default, {
            dismissCurrentNotice: () => g(v.ContentDismissActionType.UNKNOWN),
            subscriptionTier: L.PremiumSubscriptionSKUs.TIER_0
          });
        case l.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, s.jsxs)(i.Notice, {
            color: i.NoticeColors.PREMIUM_TIER_2,
            children: [(0, s.jsx)(i.NoticeCloseButton, {
              noticeType: y,
              onClick: () => g(v.ContentDismissActionType.UNKNOWN)
            }), D.default.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_TEXT, (0, s.jsx)(i.PrimaryCTANoticeButton, {
              noticeType: y,
              onClick: () => {
                g(v.ContentDismissActionType.UNKNOWN), o.default.open(O.UserSettingsSections.PREMIUM)
              },
              children: D.default.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_BUTTON_TEXT
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING:
          return (0, s.jsx)(p.default, {
            notice: U,
            noticeType: y,
            dismissCurrentNotice: () => g(v.ContentDismissActionType.UNKNOWN)
          });
        case l.DismissibleContent.QUEST_1_GO_LIVE_BANNER:
          let R = null == U ? void 0 : null === (t = U.metadata) || void 0 === t ? void 0 : t.partnerGame;
          return (0, s.jsx)(_.default, {
            noticeType: y,
            markAsDismissed: () => g(v.ContentDismissActionType.UNKNOWN),
            partnerGame: R
          });
        case l.DismissibleContent.QUEST_1_ENDED_INCOMPLETE:
          let b = null == U ? void 0 : null === (a = U.metadata) || void 0 === a ? void 0 : a.partnerGame;
          return (0, s.jsx)(E.default, {
            noticeType: y,
            markAsDismissed: () => g(v.ContentDismissActionType.UNKNOWN),
            partnerGame: b
          });
        case l.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, s.jsxs)(i.Notice, {
            color: i.NoticeColors.DANGER,
            children: [(0, s.jsx)(i.NoticeCloseButton, {
              onClick: () => g(v.ContentDismissActionType.UNKNOWN),
              noticeType: y
            }), D.default.Messages.BOUNCED_EMAIL_DETECTED_NOTICE, (0, s.jsx)(i.PrimaryCTANoticeButton, {
              noticeType: y,
              onClick: () => {
                (0, S.transitionTo)(O.Routes.SETTINGS("account"))
              },
              children: D.default.Messages.CHANGE_EMAIL_SHORT
            })]
          });
        case l.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let F = f.default.getEligibleGuildsForNagActivate();
          return (0, s.jsxs)(i.Notice, {
            color: i.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(i.NoticeCloseButton, {
              onClick: () => g(v.ContentDismissActionType.UNKNOWN),
              noticeType: y
            }), D.default.Messages.GUILD_ROLE_SUBSCRIPTION_NAGBAR_TEXT, (0, s.jsx)(i.PrimaryCTANoticeButton, {
              noticeType: y,
              onClick: () => {
                g(v.ContentDismissActionType.PRIMARY), (0, S.transitionTo)(1 === F.length ? O.Routes.GUILD_SETTINGS(F[0], "role-subscriptions") : O.Routes.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
              },
              children: D.default.Messages.LETS_GO
            })]
          });
        case l.DismissibleContent.NAGBAR_NOTICE_POMELO:
          return (0, s.jsxs)(i.Notice, {
            color: i.NoticeColors.WARNING,
            children: [(0, s.jsx)(i.NoticeCloseButton, {
              onClick: () => g(v.ContentDismissActionType.UNKNOWN),
              noticeType: y
            }), D.default.Messages.POMELO_ACTION_NEEDED.format(), (0, s.jsx)(i.PrimaryCTANoticeButton, {
              onClick: () => (0, h.default)(x.PomeloEntrypoints.NOTICE),
              noticeType: y,
              children: D.default.Messages.GET_STARTED
            })]
          });
        case l.DismissibleContent.UU_MIGRATION_NOTICE:
          return (0, s.jsxs)(i.Notice, {
            color: i.NoticeColors.WARNING,
            children: [(0, s.jsx)(i.NoticeCloseButton, {
              onClick: () => g(v.ContentDismissActionType.UNKNOWN),
              noticeType: y
            }), D.default.Messages.POMELO_ACTION_NEEDED_FORCE.format({
              date: (0, I.getLocalizedForcedUUDate)(j)
            }), (0, s.jsx)(i.PrimaryCTANoticeButton, {
              onClick: () => (0, h.default)(x.PomeloEntrypoints.NOTICE),
              noticeType: y,
              children: D.default.Messages.GET_STARTED
            })]
          });
        case l.DismissibleContent.CHECKOUT_RECOVERY_NAGBAR:
          return (0, s.jsxs)(i.Notice, {
            color: i.NoticeColors.PREMIUM_TIER_2,
            children: [(0, s.jsx)(i.NoticeCloseButton, {
              onClick: () => g(v.ContentDismissActionType.UNKNOWN),
              noticeType: y
            }), D.default.Messages.CHECKOUT_RECOVERY_NAGBAR_CONTENT, (0, s.jsx)(i.PrimaryCTANoticeButton, {
              onClick: () => {
                (0, T.default)({
                  subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2,
                  analyticsLocations: [d.default.CHECKOUT_RECOVERY_NAGBAR],
                  analyticsLocation: O.AnalyticsLocations.CHECKOUT_RECOVERY_NAGBAR,
                  onClose: () => g(v.ContentDismissActionType.UNKNOWN)
                })
              },
              noticeType: y,
              children: D.default.Messages.CHECKOUT_RECOVERY_NAGBAR_CTA
            })]
          })
      }
    }
  })
}