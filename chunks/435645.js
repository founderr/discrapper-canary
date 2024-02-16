"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eA
  }
});
var a = s("37983");
s("884691");
var n = s("759843"),
  l = s("151426"),
  i = s("669491"),
  r = s("77078"),
  o = s("913144"),
  d = s("437822"),
  u = s("152584"),
  c = s("79112"),
  S = s("534291"),
  E = s("545158"),
  T = s("788434"),
  f = s("311207"),
  m = s("824357"),
  _ = s("20606"),
  g = s("192845"),
  h = s("929423"),
  N = s("424562"),
  I = s("880731"),
  p = s("317654"),
  C = s("580758"),
  A = s("763417"),
  O = s("470022"),
  x = s("610109"),
  R = s("368694"),
  M = s("42887"),
  D = s("790618"),
  v = s("860957"),
  L = s("893011"),
  P = s("423487"),
  j = s("956089"),
  b = s("599110"),
  U = s("128259"),
  B = s("773336"),
  y = s("546605"),
  F = s("733051"),
  G = s("474775"),
  k = s("413622"),
  H = s("479290"),
  w = s("825958"),
  V = s("20604"),
  Y = s("836833"),
  W = s("625393"),
  K = s("152891"),
  z = s("921600"),
  Q = s("250972"),
  q = s("89563"),
  Z = s("41525"),
  X = s("59574"),
  J = s("602806"),
  $ = s("462506"),
  ee = s("500517"),
  et = s("814953"),
  es = s("409862"),
  ea = s("175077"),
  en = s("688413"),
  el = s("477596"),
  ei = s("9047"),
  er = s("656395"),
  eo = s("960261"),
  ed = s("436112"),
  eu = s("194200"),
  ec = s("974926"),
  eS = s("905818"),
  eE = s("819638"),
  eT = s("114582"),
  ef = s("995350"),
  em = s("409462"),
  e_ = s("799458"),
  eg = s("227473"),
  eh = s("21811"),
  eN = s("49111"),
  eI = s("782340"),
  ep = s("528174");
let eC = e_.default;

function eA(e) {
  let {
    unseenGiftCount: t,
    showPrepaidPaymentPastDueWarning: eA,
    impressionSource: eO,
    numOfPendingFamilyRequests: ex,
    isClipsBetaTagShowing: eR = !1
  } = e, eM = [{
    section: S.SectionTypes.HEADER,
    label: eI.default.Messages.USER_SETTINGS
  }, {
    section: eN.UserSettingsSections.ACCOUNT,
    label: eI.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    ariaLabel: eI.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    element: Q.default
  }, {
    section: eN.UserSettingsSections.PROFILE_CUSTOMIZATION,
    type: S.ContentTypes.WIDE,
    label: eI.default.Messages.USER_SETTINGS_PROFILES,
    ariaLabel: eI.default.Messages.USER_SETTINGS_PROFILES,
    element: O.default,
    newIndicator: (0, a.jsx)(j.PremiumBadge, {
      text: eI.default.Messages.NEW
    }),
    notice: {
      stores: [D.default, N.default],
      element: A.default
    },
    onSettingsClose: () => {
      o.default.wait(() => {
        (0, h.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eN.UserSettingsSections.PROFILE_CUSTOMIZATION)
      })
    }
  }, {
    section: eN.UserSettingsSections.PRIVACY_AND_SAFETY,
    label: eI.default.Messages.PRIVACY_AND_SAFETY,
    element: eS.default
  }, {
    section: eN.UserSettingsSections.FAMILY_CENTER,
    label: eI.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    ariaLabel: eI.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    element: es.default,
    badgeCount: ex,
    newIndicator: (0, a.jsx)(j.TextBadge, {
      text: eI.default.Messages.NEW,
      color: _.default.BG_BRAND
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
  }, {
    section: eN.UserSettingsSections.AUTHORIZED_APPS,
    label: eI.default.Messages.AUTHORIZED_APPS,
    element: J.default
  }, {
    section: eN.UserSettingsSections.SESSIONS,
    label: eI.default.Messages.AUTH_SESSIONS,
    ariaLabel: eI.default.Messages.AUTH_SESSIONS,
    element: eE.default,
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
    predicate: () => y.default.getCurrentConfig({
      location: "9f7d84_1"
    }, {
      autoTrackExposure: !1
    }).showSettings
  }, {
    section: eN.UserSettingsSections.CONNECTIONS,
    label: eI.default.Messages.CONNECTIONS,
    ariaLabel: eI.default.Messages.CONNECTIONS,
    element: ee.default,
    impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
    impressionProperties: {
      source: eO
    },
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
  }, {
    section: eN.UserSettingsSections.CLIPS,
    label: eI.default.Messages.CLIPS,
    ariaLabel: eI.default.Messages.CLIPS,
    icon: eR ? (0, a.jsx)(f.default, {}) : void 0,
    element: m.default
  }, {
    section: eN.UserSettingsSections.FRIEND_REQUESTS,
    label: eI.default.Messages.FRIEND_REQUESTS,
    element: ea.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eI.default.Messages.BILLING_SETTINGS
  }, {
    section: eN.UserSettingsSections.PREMIUM,
    ariaLabel: eI.default.Messages.PREMIUM,
    label: eI.default.Messages.PREMIUM,
    element: w.default,
    className: ep.premiumTab
  }, {
    section: eN.UserSettingsSections.GUILD_BOOSTING,
    label: eI.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
    element: ec.default
  }, {
    section: eN.UserSettingsSections.SUBSCRIPTIONS,
    ariaLabel: eI.default.Messages.SUBSCRIPTIONS_TITLE,
    label: eI.default.Messages.SUBSCRIPTIONS_TITLE,
    element: C.default,
    icon: eA ? (0, a.jsx)(P.default, {
      width: 16,
      height: 16,
      color: i.default.unsafe_rawColors.YELLOW_300.css
    }) : null
  }, {
    section: eN.UserSettingsSections.INVENTORY,
    label: eI.default.Messages.GIFT_INVENTORY,
    element: ei.default,
    ariaLabel: eI.default.Messages.GIFT_INVENTORY,
    badgeCount: t
  }, {
    section: eN.UserSettingsSections.BILLING,
    label: eI.default.Messages.BILLING,
    element: $.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eI.default.Messages.APP_SETTINGS
  }, {
    section: eN.UserSettingsSections.APPEARANCE,
    label: eI.default.Messages.APPEARANCE,
    ariaLabel: eI.default.Messages.APPEARANCE,
    element: X.default,
    newIndicator: (0, a.jsx)(j.PremiumBadge, {
      text: eI.default.Messages.NEW
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE]
  }, {
    section: eN.UserSettingsSections.ACCESSIBILITY,
    label: eI.default.Messages.ACCESSIBILITY,
    element: z.default
  }, {
    section: eN.UserSettingsSections.VOICE,
    label: eI.default.Messages.VOICE_AND_VIDEO,
    element: eh.default,
    predicate: () => M.default.isSupported()
  }, {
    section: eN.UserSettingsSections.POGGERMODE,
    label: eI.default.Messages.POGGERMODE,
    ariaLabel: eI.default.Messages.POGGERMODE,
    element: p.default,
    predicate: () => I.default.settingsVisible,
    icon: (0, a.jsx)("img", {
      alt: "",
      src: s("226992"),
      className: ep.poggermodeIcon
    })
  }, {
    section: eN.UserSettingsSections.TEXT,
    label: eI.default.Messages.CHAT,
    element: ef.default
  }, {
    section: eN.UserSettingsSections.NOTIFICATIONS,
    label: eI.default.Messages.NOTIFICATIONS,
    element: ed.default
  }, {
    section: eN.UserSettingsSections.KEYBINDS,
    label: eI.default.Messages.KEYBINDS,
    element: er.default
  }, {
    section: eN.UserSettingsSections.LOCALE,
    label: eI.default.Messages.LANGUAGE,
    element: eo.default
  }, {
    section: eN.UserSettingsSections.WINDOWS,
    label: eI.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
    element: e_.default,
    predicate: () => B.isPlatformEmbedded && (0, B.isWindows)()
  }, {
    section: eN.UserSettingsSections.LINUX,
    label: eI.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
    element: eC,
    predicate: () => B.isPlatformEmbedded && (0, B.isLinux)()
  }, {
    section: eN.UserSettingsSections.STREAMER_MODE,
    label: eI.default.Messages.STREAMER_MODE,
    element: eT.default
  }, {
    section: eN.UserSettingsSections.SPEED_TEST,
    label: "Speed Test",
    element: Y.default,
    predicate: () => x.default.isSupported() && F.default.getCurrentConfig({
      location: "9f7d84_2"
    }).showSettings
  }, {
    section: eN.UserSettingsSections.ADVANCED,
    label: eI.default.Messages.SETTINGS_ADVANCED,
    element: Z.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eI.default.Messages.ACTIVITY_SETTINGS
  }, {
    section: eN.UserSettingsSections.ACTIVITY_PRIVACY,
    label: eI.default.Messages.ACTIVITY_PRIVACY,
    element: q.default
  }, {
    section: eN.UserSettingsSections.REGISTERED_GAMES,
    label: eI.default.Messages.REGISTERED_GAMES,
    element: en.default,
    predicate: () => B.isPlatformEmbedded
  }, {
    section: eN.UserSettingsSections.OVERLAY,
    label: eI.default.Messages.OVERLAY,
    element: eu.default,
    predicate: () => v.default.isSupported() || !1
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "changelog",
    onClick: () => (0, T.openChangelog)(!0),
    label: eI.default.Messages.WHATS_NEW
  }, {
    section: "merchandise",
    onClick: () => {
      let e = "https://discordmerch.com/Dsktopprm";
      b.default.track(eN.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, U.handleClick)({
        href: e,
        shouldConfirm: !0,
        onConfirm: () => {
          b.default.track(eN.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
        }
      })
    },
    label: eI.default.Messages.MERCHANDISE,
    ariaLabel: eI.default.Messages.MERCHANDISE
  }, {
    section: eN.UserSettingsSections.HYPESQUAD_ONLINE,
    label: eI.default.Messages.USER_SETTINGS_HYPESQUAD,
    element: el.default
  }, {
    section: eN.UserSettingsSections.EXPERIMENTS,
    label: "Experiments",
    element: eg.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eN.UserSettingsSections.DEVELOPER_OPTIONS,
    label: "Developer Options",
    element: et.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eN.UserSettingsSections.HOTSPOT_OPTIONS,
    label: "Hotspot Options",
    element: k.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eN.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
    label: "Dismissible Contents",
    element: g.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eN.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
    label: "Payment Flow Modals",
    element: H.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eN.UserSettingsSections.TEXT_PLAYGROUND,
    label: "Text Playground",
    element: em.default,
    predicate: () => (0, K.shouldShowTextPlayground)() || R.default.isDeveloper
  }, {
    section: eN.UserSettingsSections.TEXT_COMPONENT,
    label: "Text Components",
    element: W.default,
    predicate: () => (0, K.shouldShowTextPlayground)() || R.default.isDeveloper
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "logout",
    onClick() {
      (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
        header: eI.default.Messages.LOGOUT,
        confirmText: eI.default.Messages.LOGOUT,
        cancelText: eI.default.Messages.CANCEL,
        onCancel: e.onClose,
        onConfirm: () => d.default.logout(),
        ...e,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: eI.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
        })
      }))
    },
    label: eI.default.Messages.LOGOUT,
    ariaLabel: eI.default.Messages.LOGOUT,
    icon: (0, a.jsx)(L.default, {
      width: 16,
      height: 16
    })
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.CUSTOM,
    element: V.default
  }, {
    section: S.SectionTypes.CUSTOM,
    element: G.default
  }];
  return eM
}