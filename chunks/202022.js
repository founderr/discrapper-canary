"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eA
  }
});
var a = s("735250");
s("470079");
var n = s("990547"),
  l = s("524437"),
  i = s("692547"),
  r = s("481060"),
  o = s("570140"),
  d = s("893776"),
  u = s("809206"),
  c = s("230711"),
  S = s("493544"),
  E = s("782568"),
  T = s("163379"),
  f = s("703288"),
  m = s("574755"),
  _ = s("377171"),
  g = s("621628"),
  h = s("18438"),
  I = s("778825"),
  N = s("351780"),
  p = s("231765"),
  C = s("813732"),
  A = s("398140"),
  O = s("564344"),
  x = s("171156"),
  R = s("906467"),
  M = s("131951"),
  v = s("25990"),
  D = s("808506"),
  L = s("87086"),
  P = s("759231"),
  j = s("26290"),
  b = s("626135"),
  U = s("49012"),
  y = s("358085"),
  B = s("392735"),
  F = s("61160"),
  G = s("604227"),
  k = s("38915"),
  w = s("498639"),
  H = s("748717"),
  V = s("419636"),
  Y = s("35426"),
  W = s("799071"),
  K = s("601433"),
  z = s("154022"),
  Q = s("393681"),
  q = s("309739"),
  Z = s("64914"),
  X = s("501348"),
  J = s("795594"),
  $ = s("443702"),
  ee = s("920914"),
  et = s("956699"),
  es = s("54942"),
  ea = s("15780"),
  en = s("293389"),
  el = s("88624"),
  ei = s("387747"),
  er = s("389650"),
  eo = s("649157"),
  ed = s("593648"),
  eu = s("327885"),
  ec = s("595242"),
  eS = s("301121"),
  eE = s("36192"),
  eT = s("338345"),
  ef = s("400287"),
  em = s("554042"),
  e_ = s("200645"),
  eg = s("287490"),
  eh = s("674116"),
  eI = s("981631"),
  eN = s("689938"),
  ep = s("480261");
let eC = e_.default;

function eA(e) {
  let {
    unseenGiftCount: t,
    showPrepaidPaymentPastDueWarning: eA,
    impressionSource: eO,
    numOfPendingFamilyRequests: ex,
    isClipsBetaTagShowing: eR = !1
  } = e;
  return [{
    section: S.SectionTypes.HEADER,
    label: eN.default.Messages.USER_SETTINGS
  }, {
    section: eI.UserSettingsSections.ACCOUNT,
    label: eN.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    ariaLabel: eN.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    element: Q.default
  }, {
    section: eI.UserSettingsSections.PROFILE_CUSTOMIZATION,
    type: S.ContentTypes.WIDE,
    label: eN.default.Messages.USER_SETTINGS_PROFILES,
    ariaLabel: eN.default.Messages.USER_SETTINGS_PROFILES,
    element: O.default,
    newIndicator: (0, a.jsx)(j.PremiumBadge, {
      text: eN.default.Messages.NEW
    }),
    notice: {
      stores: [v.default, I.default],
      element: A.default
    },
    onSettingsClose: () => {
      o.default.wait(() => {
        (0, h.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eI.UserSettingsSections.PROFILE_CUSTOMIZATION)
      })
    }
  }, {
    section: eI.UserSettingsSections.PRIVACY_AND_SAFETY,
    label: eN.default.Messages.PRIVACY_AND_SAFETY,
    element: eS.default
  }, {
    section: eI.UserSettingsSections.FAMILY_CENTER,
    label: eN.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    ariaLabel: eN.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    element: es.default,
    badgeCount: ex,
    newIndicator: (0, a.jsx)(j.TextBadge, {
      text: eN.default.Messages.NEW,
      color: _.default.BG_BRAND
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
  }, {
    section: eI.UserSettingsSections.AUTHORIZED_APPS,
    label: eN.default.Messages.AUTHORIZED_APPS,
    element: J.default
  }, {
    section: eI.UserSettingsSections.SESSIONS,
    label: eN.default.Messages.AUTH_SESSIONS,
    ariaLabel: eN.default.Messages.AUTH_SESSIONS,
    element: eE.default,
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
    predicate: () => B.default.getCurrentConfig({
      location: "9f7d84_1"
    }, {
      autoTrackExposure: !1
    }).showSettings
  }, {
    section: eI.UserSettingsSections.CONNECTIONS,
    label: eN.default.Messages.CONNECTIONS,
    ariaLabel: eN.default.Messages.CONNECTIONS,
    element: ee.default,
    impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
    impressionProperties: {
      source: eO
    },
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
  }, {
    section: eI.UserSettingsSections.CLIPS,
    label: eN.default.Messages.CLIPS,
    ariaLabel: eN.default.Messages.CLIPS,
    icon: eR ? (0, a.jsx)(f.default, {}) : void 0,
    element: m.default
  }, {
    section: eI.UserSettingsSections.FRIEND_REQUESTS,
    label: eN.default.Messages.FRIEND_REQUESTS,
    element: ea.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eN.default.Messages.BILLING_SETTINGS
  }, {
    section: eI.UserSettingsSections.PREMIUM,
    ariaLabel: eN.default.Messages.PREMIUM,
    label: eN.default.Messages.PREMIUM,
    element: H.default,
    className: ep.premiumTab
  }, {
    section: eI.UserSettingsSections.GUILD_BOOSTING,
    label: eN.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
    element: ec.default
  }, {
    section: eI.UserSettingsSections.SUBSCRIPTIONS,
    ariaLabel: eN.default.Messages.SUBSCRIPTIONS_TITLE,
    label: eN.default.Messages.SUBSCRIPTIONS_TITLE,
    element: C.default,
    icon: eA ? (0, a.jsx)(P.default, {
      width: 16,
      height: 16,
      color: i.default.unsafe_rawColors.YELLOW_300.css
    }) : null
  }, {
    section: eI.UserSettingsSections.INVENTORY,
    label: eN.default.Messages.GIFT_INVENTORY,
    element: ei.default,
    ariaLabel: eN.default.Messages.GIFT_INVENTORY,
    badgeCount: t
  }, {
    section: eI.UserSettingsSections.BILLING,
    label: eN.default.Messages.BILLING,
    element: $.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eN.default.Messages.APP_SETTINGS
  }, {
    section: eI.UserSettingsSections.APPEARANCE,
    label: eN.default.Messages.APPEARANCE,
    ariaLabel: eN.default.Messages.APPEARANCE,
    element: X.default,
    newIndicator: (0, a.jsx)(j.PremiumBadge, {
      text: eN.default.Messages.NEW
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE]
  }, {
    section: eI.UserSettingsSections.ACCESSIBILITY,
    label: eN.default.Messages.ACCESSIBILITY,
    element: z.default
  }, {
    section: eI.UserSettingsSections.VOICE,
    label: eN.default.Messages.VOICE_AND_VIDEO,
    element: eh.default,
    predicate: () => M.default.isSupported()
  }, {
    section: eI.UserSettingsSections.POGGERMODE,
    label: eN.default.Messages.POGGERMODE,
    ariaLabel: eN.default.Messages.POGGERMODE,
    element: p.default,
    predicate: () => N.default.settingsVisible,
    icon: (0, a.jsx)("img", {
      alt: "",
      src: s("348621"),
      className: ep.poggermodeIcon
    })
  }, {
    section: eI.UserSettingsSections.TEXT,
    label: eN.default.Messages.CHAT,
    element: ef.default
  }, {
    section: eI.UserSettingsSections.NOTIFICATIONS,
    label: eN.default.Messages.NOTIFICATIONS,
    element: ed.default
  }, {
    section: eI.UserSettingsSections.KEYBINDS,
    label: eN.default.Messages.KEYBINDS,
    element: er.default
  }, {
    section: eI.UserSettingsSections.LOCALE,
    label: eN.default.Messages.LANGUAGE,
    element: eo.default
  }, {
    section: eI.UserSettingsSections.WINDOWS,
    label: eN.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
    element: e_.default,
    predicate: () => y.isPlatformEmbedded && (0, y.isWindows)()
  }, {
    section: eI.UserSettingsSections.LINUX,
    label: eN.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
    element: eC,
    predicate: () => y.isPlatformEmbedded && (0, y.isLinux)()
  }, {
    section: eI.UserSettingsSections.STREAMER_MODE,
    label: eN.default.Messages.STREAMER_MODE,
    element: eT.default
  }, {
    section: eI.UserSettingsSections.SPEED_TEST,
    label: "Speed Test",
    element: Y.default,
    predicate: () => x.default.isSupported() && F.default.getCurrentConfig({
      location: "9f7d84_2"
    }).showSettings
  }, {
    section: eI.UserSettingsSections.ADVANCED,
    label: eN.default.Messages.SETTINGS_ADVANCED,
    element: Z.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eN.default.Messages.ACTIVITY_SETTINGS
  }, {
    section: eI.UserSettingsSections.ACTIVITY_PRIVACY,
    label: eN.default.Messages.ACTIVITY_PRIVACY,
    element: q.default
  }, {
    section: eI.UserSettingsSections.REGISTERED_GAMES,
    label: eN.default.Messages.REGISTERED_GAMES,
    element: en.default,
    predicate: () => y.isPlatformEmbedded
  }, {
    section: eI.UserSettingsSections.OVERLAY,
    label: eN.default.Messages.OVERLAY,
    element: eu.default,
    predicate: () => D.default.isSupported() || !1
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "changelog",
    onClick: () => (0, T.openChangelog)(!0),
    label: eN.default.Messages.WHATS_NEW
  }, {
    section: "merchandise",
    onClick: () => {
      let e = "https://discordmerch.com/Dsktopprm";
      b.default.track(eI.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, U.handleClick)({
        href: e,
        shouldConfirm: !0,
        onConfirm: () => {
          b.default.track(eI.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
        }
      })
    },
    label: eN.default.Messages.MERCHANDISE,
    ariaLabel: eN.default.Messages.MERCHANDISE
  }, {
    section: eI.UserSettingsSections.HYPESQUAD_ONLINE,
    label: eN.default.Messages.USER_SETTINGS_HYPESQUAD,
    element: el.default
  }, {
    section: eI.UserSettingsSections.EXPERIMENTS,
    label: "Experiments",
    element: eg.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eI.UserSettingsSections.DEVELOPER_OPTIONS,
    label: "Developer Options",
    element: et.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eI.UserSettingsSections.HOTSPOT_OPTIONS,
    label: "Hotspot Options",
    element: k.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eI.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
    label: "Dismissible Contents",
    element: g.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eI.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
    label: "Payment Flow Modals",
    element: w.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eI.UserSettingsSections.TEXT_PLAYGROUND,
    label: "Text Playground",
    element: em.default,
    predicate: () => (0, K.shouldShowTextPlayground)() || R.default.isDeveloper
  }, {
    section: eI.UserSettingsSections.TEXT_COMPONENT,
    label: "Text Components",
    element: W.default,
    predicate: () => (0, K.shouldShowTextPlayground)() || R.default.isDeveloper
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "logout",
    onClick() {
      (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
        header: eN.default.Messages.LOGOUT,
        confirmText: eN.default.Messages.LOGOUT,
        cancelText: eN.default.Messages.CANCEL,
        onCancel: e.onClose,
        onConfirm: () => d.default.logout(),
        ...e,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: eN.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
        })
      }))
    },
    label: eN.default.Messages.LOGOUT,
    ariaLabel: eN.default.Messages.LOGOUT,
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
  }]
}