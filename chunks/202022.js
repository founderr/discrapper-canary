"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eO
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
  D = s("87086"),
  L = s("759231"),
  P = s("26290"),
  j = s("626135"),
  b = s("49012"),
  U = s("358085"),
  y = s("392735"),
  B = s("61160"),
  G = s("604227"),
  F = s("38915"),
  k = s("498639"),
  w = s("748717"),
  H = s("419636"),
  V = s("35426"),
  Y = s("799071"),
  W = s("601433"),
  K = s("154022"),
  z = s("393681"),
  Q = s("309739"),
  q = s("64914"),
  Z = s("501348"),
  X = s("795594"),
  J = s("443702"),
  $ = s("920914"),
  ee = s("956699"),
  et = s("54942"),
  es = s("15780"),
  ea = s("293389"),
  en = s("88624"),
  el = s("387747"),
  ei = s("389650"),
  er = s("649157"),
  eo = s("593648"),
  ed = s("327885"),
  eu = s("595242"),
  ec = s("301121"),
  eS = s("36192"),
  eE = s("338345"),
  eT = s("400287"),
  ef = s("554042"),
  em = s("200645"),
  e_ = s("287490"),
  eg = s("168308"),
  eh = s("277329"),
  eI = s("674116"),
  eN = s("981631"),
  ep = s("689938"),
  eC = s("480261");
let eA = em.default;

function eO(e) {
  let {
    unseenGiftCount: t,
    showPrepaidPaymentPastDueWarning: eO,
    impressionSource: ex,
    numOfPendingFamilyRequests: eR,
    isOverlaySupported: eM,
    isClipsBetaTagShowing: ev = !1,
    shouldMergeGameSettings: eD
  } = e;
  return [{
    section: S.SectionTypes.HEADER,
    label: ep.default.Messages.USER_SETTINGS
  }, {
    section: eN.UserSettingsSections.ACCOUNT,
    label: ep.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    ariaLabel: ep.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    element: z.default
  }, {
    section: eN.UserSettingsSections.GAMES,
    label: ep.default.Messages.GAMES,
    ariaLabel: ep.default.Messages.GAMES,
    element: eh.default,
    predicate: () => eD
  }, {
    section: eN.UserSettingsSections.PROFILE_CUSTOMIZATION,
    type: S.ContentTypes.WIDE,
    label: ep.default.Messages.USER_SETTINGS_PROFILES,
    ariaLabel: ep.default.Messages.USER_SETTINGS_PROFILES,
    element: O.default,
    newIndicator: (0, a.jsx)(P.PremiumBadge, {
      text: ep.default.Messages.NEW
    }),
    notice: {
      stores: [v.default, I.default],
      element: A.default
    },
    onSettingsClose: () => {
      o.default.wait(() => {
        (0, h.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eN.UserSettingsSections.PROFILE_CUSTOMIZATION)
      })
    }
  }, {
    section: eN.UserSettingsSections.PRIVACY_AND_SAFETY,
    label: ep.default.Messages.PRIVACY_AND_SAFETY,
    element: ec.default
  }, {
    section: eN.UserSettingsSections.FAMILY_CENTER,
    label: ep.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    ariaLabel: ep.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    element: et.default,
    badgeCount: eR,
    newIndicator: (0, a.jsx)(P.TextBadge, {
      text: ep.default.Messages.NEW,
      color: _.default.BG_BRAND
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
  }, {
    section: eN.UserSettingsSections.AUTHORIZED_APPS,
    label: ep.default.Messages.AUTHORIZED_APPS,
    element: X.default
  }, {
    section: eN.UserSettingsSections.SESSIONS,
    label: ep.default.Messages.AUTH_SESSIONS,
    ariaLabel: ep.default.Messages.AUTH_SESSIONS,
    element: eS.default,
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
    predicate: () => y.default.getCurrentConfig({
      location: "9f7d84_1"
    }, {
      autoTrackExposure: !1
    }).showSettings
  }, {
    section: eN.UserSettingsSections.CONNECTIONS,
    label: ep.default.Messages.CONNECTIONS,
    ariaLabel: ep.default.Messages.CONNECTIONS,
    element: $.default,
    impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
    impressionProperties: {
      source: ex
    },
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
  }, {
    section: eN.UserSettingsSections.CLIPS,
    label: ep.default.Messages.CLIPS,
    ariaLabel: ep.default.Messages.CLIPS,
    icon: ev ? (0, a.jsx)(f.default, {}) : void 0,
    element: m.default,
    predicate: () => !eD
  }, {
    section: eN.UserSettingsSections.FRIEND_REQUESTS,
    label: ep.default.Messages.FRIEND_REQUESTS,
    element: es.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: ep.default.Messages.BILLING_SETTINGS
  }, {
    section: eN.UserSettingsSections.PREMIUM,
    ariaLabel: ep.default.Messages.PREMIUM,
    label: ep.default.Messages.PREMIUM,
    element: w.default,
    className: eC.premiumTab
  }, {
    section: eN.UserSettingsSections.GUILD_BOOSTING,
    label: ep.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
    element: eu.default
  }, {
    section: eN.UserSettingsSections.SUBSCRIPTIONS,
    ariaLabel: ep.default.Messages.SUBSCRIPTIONS_TITLE,
    label: ep.default.Messages.SUBSCRIPTIONS_TITLE,
    element: C.default,
    icon: eO ? (0, a.jsx)(L.default, {
      width: 16,
      height: 16,
      color: i.default.unsafe_rawColors.YELLOW_300.css
    }) : null
  }, {
    section: eN.UserSettingsSections.INVENTORY,
    label: ep.default.Messages.GIFT_INVENTORY,
    element: el.default,
    ariaLabel: ep.default.Messages.GIFT_INVENTORY,
    badgeCount: t
  }, {
    section: eN.UserSettingsSections.BILLING,
    label: ep.default.Messages.BILLING,
    element: J.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: ep.default.Messages.APP_SETTINGS
  }, {
    section: eN.UserSettingsSections.APPEARANCE,
    label: ep.default.Messages.APPEARANCE,
    ariaLabel: ep.default.Messages.APPEARANCE,
    element: Z.default,
    newIndicator: (0, a.jsx)(P.PremiumBadge, {
      text: ep.default.Messages.NEW
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE]
  }, {
    section: eN.UserSettingsSections.ACCESSIBILITY,
    label: ep.default.Messages.ACCESSIBILITY,
    element: K.default
  }, {
    section: eN.UserSettingsSections.VOICE,
    label: ep.default.Messages.VOICE_AND_VIDEO,
    element: eI.default,
    predicate: () => M.default.isSupported()
  }, {
    section: eN.UserSettingsSections.POGGERMODE,
    label: ep.default.Messages.POGGERMODE,
    ariaLabel: ep.default.Messages.POGGERMODE,
    element: p.default,
    predicate: () => N.default.settingsVisible,
    icon: (0, a.jsx)("img", {
      alt: "",
      src: s("348621"),
      className: eC.poggermodeIcon
    })
  }, {
    section: eN.UserSettingsSections.TEXT,
    label: ep.default.Messages.CHAT,
    element: eT.default
  }, {
    section: eN.UserSettingsSections.NOTIFICATIONS,
    label: ep.default.Messages.NOTIFICATIONS,
    element: eo.default
  }, {
    section: eN.UserSettingsSections.KEYBINDS,
    label: ep.default.Messages.KEYBINDS,
    element: ei.default
  }, {
    section: eN.UserSettingsSections.LOCALE,
    label: ep.default.Messages.LANGUAGE,
    element: er.default
  }, {
    section: eN.UserSettingsSections.WINDOWS,
    label: ep.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
    element: em.default,
    predicate: () => U.isPlatformEmbedded && (0, U.isWindows)()
  }, {
    section: eN.UserSettingsSections.LINUX,
    label: ep.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
    element: eA,
    predicate: () => U.isPlatformEmbedded && (0, U.isLinux)()
  }, {
    section: eN.UserSettingsSections.STREAMER_MODE,
    label: ep.default.Messages.STREAMER_MODE,
    element: eE.default
  }, {
    section: eN.UserSettingsSections.SPEED_TEST,
    label: "Speed Test",
    element: V.default,
    predicate: () => x.default.isSupported() && B.default.getCurrentConfig({
      location: "9f7d84_2"
    }).showSettings
  }, {
    section: eN.UserSettingsSections.ADVANCED,
    label: ep.default.Messages.SETTINGS_ADVANCED,
    element: q.default
  }, {
    section: S.SectionTypes.DIVIDER,
    predicate: () => !eD
  }, {
    section: S.SectionTypes.HEADER,
    label: ep.default.Messages.ACTIVITY_SETTINGS,
    predicate: () => !eD
  }, {
    section: eN.UserSettingsSections.ACTIVITY_PRIVACY,
    label: ep.default.Messages.ACTIVITY_PRIVACY,
    element: Q.default,
    predicate: () => !eD
  }, {
    section: eN.UserSettingsSections.REGISTERED_GAMES,
    label: ep.default.Messages.REGISTERED_GAMES,
    element: ea.default,
    predicate: () => !eD && (0, eg.shouldShowRegisteredGamesSettings)()
  }, {
    section: eN.UserSettingsSections.OVERLAY,
    label: ep.default.Messages.OVERLAY,
    element: ed.default,
    predicate: () => !eD && eM
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "changelog",
    onClick: () => (0, T.openChangelog)(!0),
    label: ep.default.Messages.WHATS_NEW
  }, {
    section: "merchandise",
    onClick: () => {
      let e = "https://discordmerch.com/Dsktopprm";
      j.default.track(eN.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, b.handleClick)({
        href: e,
        shouldConfirm: !0,
        onConfirm: () => {
          j.default.track(eN.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
        }
      })
    },
    label: ep.default.Messages.MERCHANDISE,
    ariaLabel: ep.default.Messages.MERCHANDISE
  }, {
    section: eN.UserSettingsSections.HYPESQUAD_ONLINE,
    label: ep.default.Messages.USER_SETTINGS_HYPESQUAD,
    element: en.default
  }, {
    section: eN.UserSettingsSections.EXPERIMENTS,
    label: "Experiments",
    element: e_.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eN.UserSettingsSections.DEVELOPER_OPTIONS,
    label: "Developer Options",
    element: ee.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eN.UserSettingsSections.HOTSPOT_OPTIONS,
    label: "Hotspot Options",
    element: F.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eN.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
    label: "Dismissible Contents",
    element: g.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eN.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
    label: "Payment Flow Modals",
    element: k.default,
    predicate: () => R.default.isDeveloper
  }, {
    section: eN.UserSettingsSections.TEXT_PLAYGROUND,
    label: "Text Playground",
    element: ef.default,
    predicate: () => (0, W.shouldShowTextPlayground)() || R.default.isDeveloper
  }, {
    section: eN.UserSettingsSections.TEXT_COMPONENT,
    label: "Text Components",
    element: Y.default,
    predicate: () => (0, W.shouldShowTextPlayground)() || R.default.isDeveloper
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "logout",
    onClick() {
      (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
        header: ep.default.Messages.LOGOUT,
        confirmText: ep.default.Messages.LOGOUT,
        cancelText: ep.default.Messages.CANCEL,
        onCancel: e.onClose,
        onConfirm: () => d.default.logout(),
        ...e,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: ep.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
        })
      }))
    },
    label: ep.default.Messages.LOGOUT,
    ariaLabel: ep.default.Messages.LOGOUT,
    icon: (0, a.jsx)(D.default, {
      width: 16,
      height: 16
    })
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.CUSTOM,
    element: H.default
  }, {
    section: S.SectionTypes.CUSTOM,
    element: G.default
  }]
}