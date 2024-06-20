n.d(t, {
  A: function() {
    return D
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(704215),
  a = n(481060),
  r = n(232567),
  o = n(230711),
  c = n(726542),
  u = n(100527),
  d = n(231757),
  E = n(674525),
  _ = n(29458),
  I = n(636629),
  T = n(33885),
  N = n(963249),
  m = n(346585),
  h = n(303172),
  C = n(463230),
  S = n(246965),
  A = n(703656),
  p = n(706454),
  g = n(933429),
  f = n(395361),
  O = n(626135),
  R = n(243778),
  M = n(921944),
  x = n(981631),
  v = n(801461),
  L = n(474936),
  Z = n(689938),
  P = n(596791);
let D = e => {
  let {
    dismissibleContent: t,
    noticeType: D
  } = e, j = (0, i.e7)([g.Z], () => g.Z.getNotice()), U = (0, i.e7)([p.default], () => p.default.locale);
  return (0, s.jsx)(R.Z, {
    contentTypes: [t],
    groupName: M.R.NOTICE_BAR,
    bypassAutoDismiss: !0,
    children: e => {
      var t, i;
      let {
        visibleContent: p,
        markAsDismissed: g
      } = e;
      switch (p) {
        case l.z.GUILD_ONBOARDING_UPSELL_NAGBAR:
          return (0, s.jsx)(T.Z, {
            dismissCurrentNotice: () => g(M.L.UNKNOWN)
          });
        case l.z.NAGBAR_NOTICE_DOWNLOAD:
          return (0, s.jsxs)(a.Notice, {
            color: a.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(a.NoticeCloseButton, {
              onClick: () => g(M.L.UNKNOWN),
              noticeType: D
            }), Z.Z.Messages.NOTICE_NATIVE_APPS_2020_06, (0, s.jsx)("i", {
              className: P.iconApple
            }), (0, s.jsx)("i", {
              className: P.iconAndroid
            }), (0, s.jsx)("i", {
              className: P.iconWindows
            }), (0, s.jsx)(a.PrimaryCTANoticeButton, {
              noticeType: D,
              onClick: () => {
                (0, a.openModalLazy)(async () => {
                  let {
                    default: e
                  } = await Promise.resolve().then(n.bind(n, 431583));
                  return t => (0, s.jsx)(e, {
                    source: "Top Bar Nag",
                    ...t
                  })
                })
              },
              children: Z.Z.Messages.DOWNLOAD
            })]
          });
        case l.z.NAGBAR_NOTICE_CONNECT_SPOTIFY:
          return (0, s.jsxs)(a.Notice, {
            color: a.NoticeColors.SPOTIFY,
            children: [(0, s.jsx)(a.NoticeCloseButton, {
              onClick: () => g(M.L.UNKNOWN),
              noticeType: D
            }), (0, s.jsx)(f.Z, {
              className: P.platformIcon
            }), Z.Z.Messages.NOTICE_CONNECT_SPOTIFY, (0, s.jsx)(a.PrimaryCTANoticeButton, {
              onClick: () => (0, d.Z)({
                platformType: x.ABu.SPOTIFY,
                location: "Notice Bar"
              }),
              noticeType: D,
              children: Z.Z.Messages.CONNECT
            })]
          });
        case l.z.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
          return (0, s.jsxs)(a.Notice, {
            color: a.NoticeColors.PLAYSTATION,
            children: [(0, s.jsx)(a.NoticeCloseButton, {
              onClick: () => g(M.L.UNKNOWN)
            }), (0, s.jsx)("img", {
              alt: "",
              className: P.platformIcon,
              src: c.Z.get(x.ABu.PLAYSTATION).icon.whiteSVG
            }), Z.Z.Messages.NOTICE_CONNECT_PLAYSTATION, (0, s.jsx)(a.NoticeButton, {
              onClick: () => (0, d.Z)({
                platformType: x.ABu.PLAYSTATION,
                location: "Notice Bar"
              }),
              children: Z.Z.Messages.CONNECT
            })]
          });
        case l.z.NAGBAR_NOTICE_MFA_SMS_BACKUP:
          return (0, s.jsxs)(a.Notice, {
            color: a.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(a.NoticeCloseButton, {
              onClick: () => g(M.L.UNKNOWN),
              noticeType: D
            }), Z.Z.Messages.NOTICE_MFA_SMS_BACKUP, (0, s.jsx)(a.PrimaryCTANoticeButton, {
              onClick: () => o.Z.open(x.oAB.ACCOUNT),
              noticeType: D,
              children: Z.Z.Messages.NOTICE_MFA_SMS_BACKUP_BUTTON
            })]
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_PROMO:
          return (0, s.jsxs)(a.Notice, {
            color: a.NoticeColors.PREMIUM_TIER_2,
            children: [(0, s.jsx)("span", {
              className: P.premiumLogo
            }), (0, s.jsx)("span", {
              className: P.premiumText,
              children: Z.Z.Messages.NOTICE_PREMIUM_PROMO_MESSAGE
            }), (0, s.jsx)(a.PrimaryCTANoticeButton, {
              className: P.premiumAction,
              noticeType: D,
              onClick: () => {
                O.default.track(x.rMx.PREMIUM_PROMOTION_OPENED, {
                  location_section: x.jXE.NOTIFICATION_BAR,
                  location_object: x.qAy.BUTTON_CTA
                }), o.Z.open(x.oAB.PREMIUM)
              },
              children: Z.Z.Messages.NOTICE_PREMIUM_PROMO_ACTION
            }), (0, s.jsx)(a.NoticeCloseButton, {
              onClick: () => {
                g(M.L.UNKNOWN), (0, r.mB)(x.xW$.PREMIUM_PROMO_DISMISSED, !0)
              },
              noticeType: D
            })]
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
          return (0, s.jsx)(S.Z, {
            dismissCurrentNotice: () => g(M.L.UNKNOWN),
            subscriptionTier: L.Si.TIER_2
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
          return (0, s.jsx)(S.Z, {
            dismissCurrentNotice: () => g(M.L.UNKNOWN),
            subscriptionTier: L.Si.TIER_0
          });
        case l.z.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
          return (0, s.jsxs)(a.Notice, {
            color: a.NoticeColors.PREMIUM_TIER_2,
            children: [(0, s.jsx)(a.NoticeCloseButton, {
              noticeType: D,
              onClick: () => g(M.L.UNKNOWN)
            }), Z.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_TEXT, (0, s.jsx)(a.PrimaryCTANoticeButton, {
              noticeType: D,
              onClick: () => {
                g(M.L.UNKNOWN), o.Z.open(x.oAB.PREMIUM)
              },
              children: Z.Z.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_BUTTON_TEXT
            })]
          });
        case l.z.NAGBAR_NOTICE_LOCALIZED_PRICING:
          return (0, s.jsx)(C.Z, {
            notice: j,
            noticeType: D,
            dismissCurrentNotice: () => g(M.L.UNKNOWN)
          });
        case l.z.QUEST_1_GO_LIVE_BANNER:
          let R = null == j ? void 0 : null === (t = j.metadata) || void 0 === t ? void 0 : t.partnerGame;
          return (0, s.jsx)(I.Z, {
            noticeType: D,
            markAsDismissed: () => g(M.L.UNKNOWN),
            partnerGame: R
          });
        case l.z.QUEST_1_ENDED_INCOMPLETE:
          let y = null == j ? void 0 : null === (i = j.metadata) || void 0 === i ? void 0 : i.partnerGame;
          return (0, s.jsx)(_.Z, {
            noticeType: D,
            markAsDismissed: () => g(M.L.UNKNOWN),
            partnerGame: y
          });
        case l.z.NAGBAR_BOUNCED_EMAIL_NOTICE:
          return (0, s.jsxs)(a.Notice, {
            color: a.NoticeColors.DANGER,
            children: [(0, s.jsx)(a.NoticeCloseButton, {
              onClick: () => g(M.L.UNKNOWN),
              noticeType: D
            }), Z.Z.Messages.BOUNCED_EMAIL_DETECTED_NOTICE, (0, s.jsx)(a.PrimaryCTANoticeButton, {
              noticeType: D,
              onClick: () => {
                (0, A.uL)(x.Z5c.SETTINGS("account"))
              },
              children: Z.Z.Messages.CHANGE_EMAIL_SHORT
            })]
          });
        case l.z.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
          let b = E.Z.getEligibleGuildsForNagActivate();
          return (0, s.jsxs)(a.Notice, {
            color: a.NoticeColors.DEFAULT,
            children: [(0, s.jsx)(a.NoticeCloseButton, {
              onClick: () => g(M.L.UNKNOWN),
              noticeType: D
            }), Z.Z.Messages.GUILD_ROLE_SUBSCRIPTION_NAGBAR_TEXT, (0, s.jsx)(a.PrimaryCTANoticeButton, {
              noticeType: D,
              onClick: () => {
                g(M.L.PRIMARY), (0, A.uL)(1 === b.length ? x.Z5c.GUILD_SETTINGS(b[0], "role-subscriptions") : x.Z5c.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
              },
              children: Z.Z.Messages.LETS_GO
            })]
          });
        case l.z.NAGBAR_NOTICE_POMELO:
          return (0, s.jsxs)(a.Notice, {
            color: a.NoticeColors.WARNING,
            children: [(0, s.jsx)(a.NoticeCloseButton, {
              onClick: () => g(M.L.UNKNOWN),
              noticeType: D
            }), Z.Z.Messages.POMELO_ACTION_NEEDED.format(), (0, s.jsx)(a.PrimaryCTANoticeButton, {
              onClick: () => (0, h.Z)(v.Kq.NOTICE),
              noticeType: D,
              children: Z.Z.Messages.GET_STARTED
            })]
          });
        case l.z.UU_MIGRATION_NOTICE:
          return (0, s.jsxs)(a.Notice, {
            color: a.NoticeColors.WARNING,
            children: [(0, s.jsx)(a.NoticeCloseButton, {
              onClick: () => g(M.L.UNKNOWN),
              noticeType: D
            }), Z.Z.Messages.POMELO_ACTION_NEEDED_FORCE.format({
              date: (0, m.IE)(U)
            }), (0, s.jsx)(a.PrimaryCTANoticeButton, {
              onClick: () => (0, h.Z)(v.Kq.NOTICE),
              noticeType: D,
              children: Z.Z.Messages.GET_STARTED
            })]
          });
        case l.z.CHECKOUT_RECOVERY_NAGBAR:
          return (0, s.jsxs)(a.Notice, {
            color: a.NoticeColors.PREMIUM_TIER_2,
            children: [(0, s.jsx)(a.NoticeCloseButton, {
              onClick: () => g(M.L.UNKNOWN),
              noticeType: D
            }), Z.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CONTENT, (0, s.jsx)(a.PrimaryCTANoticeButton, {
              onClick: () => {
                (0, N.Z)({
                  subscriptionTier: L.Si.TIER_2,
                  analyticsLocations: [u.Z.CHECKOUT_RECOVERY_NAGBAR],
                  analyticsLocation: x.Sbl.CHECKOUT_RECOVERY_NAGBAR,
                  onClose: () => g(M.L.UNKNOWN)
                })
              },
              noticeType: D,
              children: Z.Z.Messages.CHECKOUT_RECOVERY_NAGBAR_CTA
            })]
          })
      }
    }
  })
}