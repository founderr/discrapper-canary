"use strict";
s.r(t), s.d(t, {
  default: function() {
    return ex
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
  N = s("266983"),
  p = s("351780"),
  C = s("231765"),
  A = s("813732"),
  O = s("398140"),
  x = s("564344"),
  R = s("171156"),
  M = s("906467"),
  v = s("131951"),
  D = s("25990"),
  L = s("808506"),
  P = s("87086"),
  j = s("759231"),
  b = s("26290"),
  U = s("626135"),
  y = s("49012"),
  B = s("358085"),
  F = s("392735"),
  G = s("61160"),
  k = s("604227"),
  H = s("38915"),
  w = s("498639"),
  V = s("748717"),
  Y = s("419636"),
  K = s("35426"),
  W = s("799071"),
  z = s("601433"),
  Q = s("154022"),
  Z = s("393681"),
  q = s("309739"),
  X = s("64914"),
  J = s("501348"),
  $ = s("795594"),
  ee = s("443702"),
  et = s("920914"),
  es = s("956699"),
  ea = s("54942"),
  en = s("15780"),
  el = s("293389"),
  ei = s("88624"),
  er = s("387747"),
  eo = s("389650"),
  ed = s("649157"),
  eu = s("533193"),
  ec = s("593648"),
  eS = s("327885"),
  eE = s("595242"),
  eT = s("301121"),
  ef = s("36192"),
  em = s("338345"),
  e_ = s("400287"),
  eg = s("554042"),
  eh = s("200645"),
  eI = s("287490"),
  eN = s("674116"),
  ep = s("981631"),
  eC = s("689938"),
  eA = s("480261");
let eO = eh.default;

function ex(e) {
  let {
    unseenGiftCount: t,
    showPrepaidPaymentPastDueWarning: ex,
    impressionSource: eR,
    numOfPendingFamilyRequests: eM,
    isClipsBetaTagShowing: ev = !1,
    isLootboxesShowing: eD
  } = e;
  return [{
    section: S.SectionTypes.HEADER,
    label: eC.default.Messages.USER_SETTINGS
  }, {
    section: ep.UserSettingsSections.ACCOUNT,
    label: eC.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    ariaLabel: eC.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    element: Z.default
  }, {
    section: ep.UserSettingsSections.PROFILE_CUSTOMIZATION,
    type: S.ContentTypes.WIDE,
    label: eC.default.Messages.USER_SETTINGS_PROFILES,
    ariaLabel: eC.default.Messages.USER_SETTINGS_PROFILES,
    element: x.default,
    newIndicator: (0, a.jsx)(b.PremiumBadge, {
      text: eC.default.Messages.NEW
    }),
    notice: {
      stores: [D.default, I.default],
      element: O.default
    },
    onSettingsClose: () => {
      o.default.wait(() => {
        (0, h.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(ep.UserSettingsSections.PROFILE_CUSTOMIZATION)
      })
    }
  }, {
    section: ep.UserSettingsSections.PRIVACY_AND_SAFETY,
    label: eC.default.Messages.PRIVACY_AND_SAFETY,
    element: eT.default
  }, {
    section: ep.UserSettingsSections.FAMILY_CENTER,
    label: eC.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    ariaLabel: eC.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    element: ea.default,
    badgeCount: eM,
    newIndicator: (0, a.jsx)(b.TextBadge, {
      text: eC.default.Messages.NEW,
      color: _.default.BG_BRAND
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
  }, {
    section: ep.UserSettingsSections.AUTHORIZED_APPS,
    label: eC.default.Messages.AUTHORIZED_APPS,
    element: $.default
  }, {
    section: ep.UserSettingsSections.SESSIONS,
    label: eC.default.Messages.AUTH_SESSIONS,
    ariaLabel: eC.default.Messages.AUTH_SESSIONS,
    element: ef.default,
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
    predicate: () => F.default.getCurrentConfig({
      location: "9f7d84_1"
    }, {
      autoTrackExposure: !1
    }).showSettings
  }, {
    section: ep.UserSettingsSections.CONNECTIONS,
    label: eC.default.Messages.CONNECTIONS,
    ariaLabel: eC.default.Messages.CONNECTIONS,
    element: et.default,
    impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
    impressionProperties: {
      source: eR
    },
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
  }, {
    section: ep.UserSettingsSections.CLIPS,
    label: eC.default.Messages.CLIPS,
    ariaLabel: eC.default.Messages.CLIPS,
    icon: ev ? (0, a.jsx)(f.default, {}) : void 0,
    element: m.default
  }, {
    section: ep.UserSettingsSections.LOOTBOXES,
    label: eC.default.Messages.PACKAGES,
    ariaLabel: eC.default.Messages.PACKAGES,
    element: eu.default,
    icon: (0, a.jsx)(N.default, {
      width: 16,
      height: 16,
      color: "currentColor"
    }),
    predicate: () => eD
  }, {
    section: ep.UserSettingsSections.FRIEND_REQUESTS,
    label: eC.default.Messages.FRIEND_REQUESTS,
    element: en.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eC.default.Messages.BILLING_SETTINGS
  }, {
    section: ep.UserSettingsSections.PREMIUM,
    ariaLabel: eC.default.Messages.PREMIUM,
    label: eC.default.Messages.PREMIUM,
    element: V.default,
    className: eA.premiumTab
  }, {
    section: ep.UserSettingsSections.GUILD_BOOSTING,
    label: eC.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
    element: eE.default
  }, {
    section: ep.UserSettingsSections.SUBSCRIPTIONS,
    ariaLabel: eC.default.Messages.SUBSCRIPTIONS_TITLE,
    label: eC.default.Messages.SUBSCRIPTIONS_TITLE,
    element: A.default,
    icon: ex ? (0, a.jsx)(j.default, {
      width: 16,
      height: 16,
      color: i.default.unsafe_rawColors.YELLOW_300.css
    }) : null
  }, {
    section: ep.UserSettingsSections.INVENTORY,
    label: eC.default.Messages.GIFT_INVENTORY,
    element: er.default,
    ariaLabel: eC.default.Messages.GIFT_INVENTORY,
    badgeCount: t
  }, {
    section: ep.UserSettingsSections.BILLING,
    label: eC.default.Messages.BILLING,
    element: ee.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eC.default.Messages.APP_SETTINGS
  }, {
    section: ep.UserSettingsSections.APPEARANCE,
    label: eC.default.Messages.APPEARANCE,
    ariaLabel: eC.default.Messages.APPEARANCE,
    element: J.default,
    newIndicator: (0, a.jsx)(b.PremiumBadge, {
      text: eC.default.Messages.NEW
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE]
  }, {
    section: ep.UserSettingsSections.ACCESSIBILITY,
    label: eC.default.Messages.ACCESSIBILITY,
    element: Q.default
  }, {
    section: ep.UserSettingsSections.VOICE,
    label: eC.default.Messages.VOICE_AND_VIDEO,
    element: eN.default,
    predicate: () => v.default.isSupported()
  }, {
    section: ep.UserSettingsSections.POGGERMODE,
    label: eC.default.Messages.POGGERMODE,
    ariaLabel: eC.default.Messages.POGGERMODE,
    element: C.default,
    predicate: () => p.default.settingsVisible,
    icon: (0, a.jsx)("img", {
      alt: "",
      src: s("348621"),
      className: eA.poggermodeIcon
    })
  }, {
    section: ep.UserSettingsSections.TEXT,
    label: eC.default.Messages.CHAT,
    element: e_.default
  }, {
    section: ep.UserSettingsSections.NOTIFICATIONS,
    label: eC.default.Messages.NOTIFICATIONS,
    element: ec.default
  }, {
    section: ep.UserSettingsSections.KEYBINDS,
    label: eC.default.Messages.KEYBINDS,
    element: eo.default
  }, {
    section: ep.UserSettingsSections.LOCALE,
    label: eC.default.Messages.LANGUAGE,
    element: ed.default
  }, {
    section: ep.UserSettingsSections.WINDOWS,
    label: eC.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
    element: eh.default,
    predicate: () => B.isPlatformEmbedded && (0, B.isWindows)()
  }, {
    section: ep.UserSettingsSections.LINUX,
    label: eC.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
    element: eO,
    predicate: () => B.isPlatformEmbedded && (0, B.isLinux)()
  }, {
    section: ep.UserSettingsSections.STREAMER_MODE,
    label: eC.default.Messages.STREAMER_MODE,
    element: em.default
  }, {
    section: ep.UserSettingsSections.SPEED_TEST,
    label: "Speed Test",
    element: K.default,
    predicate: () => R.default.isSupported() && G.default.getCurrentConfig({
      location: "9f7d84_2"
    }).showSettings
  }, {
    section: ep.UserSettingsSections.ADVANCED,
    label: eC.default.Messages.SETTINGS_ADVANCED,
    element: X.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eC.default.Messages.ACTIVITY_SETTINGS
  }, {
    section: ep.UserSettingsSections.ACTIVITY_PRIVACY,
    label: eC.default.Messages.ACTIVITY_PRIVACY,
    element: q.default
  }, {
    section: ep.UserSettingsSections.REGISTERED_GAMES,
    label: eC.default.Messages.REGISTERED_GAMES,
    element: el.default,
    predicate: () => B.isPlatformEmbedded
  }, {
    section: ep.UserSettingsSections.OVERLAY,
    label: eC.default.Messages.OVERLAY,
    element: eS.default,
    predicate: () => L.default.isSupported() || !1
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "changelog",
    onClick: () => (0, T.openChangelog)(!0),
    label: eC.default.Messages.WHATS_NEW
  }, {
    section: "merchandise",
    onClick: () => {
      let e = "https://discordmerch.com/Dsktopprm";
      U.default.track(ep.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, y.handleClick)({
        href: e,
        shouldConfirm: !0,
        onConfirm: () => {
          U.default.track(ep.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
        }
      })
    },
    label: eC.default.Messages.MERCHANDISE,
    ariaLabel: eC.default.Messages.MERCHANDISE
  }, {
    section: ep.UserSettingsSections.HYPESQUAD_ONLINE,
    label: eC.default.Messages.USER_SETTINGS_HYPESQUAD,
    element: ei.default
  }, {
    section: ep.UserSettingsSections.EXPERIMENTS,
    label: "Experiments",
    element: eI.default,
    predicate: () => M.default.isDeveloper
  }, {
    section: ep.UserSettingsSections.DEVELOPER_OPTIONS,
    label: "Developer Options",
    element: es.default,
    predicate: () => M.default.isDeveloper
  }, {
    section: ep.UserSettingsSections.HOTSPOT_OPTIONS,
    label: "Hotspot Options",
    element: H.default,
    predicate: () => M.default.isDeveloper
  }, {
    section: ep.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
    label: "Dismissible Contents",
    element: g.default,
    predicate: () => M.default.isDeveloper
  }, {
    section: ep.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
    label: "Payment Flow Modals",
    element: w.default,
    predicate: () => M.default.isDeveloper
  }, {
    section: ep.UserSettingsSections.TEXT_PLAYGROUND,
    label: "Text Playground",
    element: eg.default,
    predicate: () => (0, z.shouldShowTextPlayground)() || M.default.isDeveloper
  }, {
    section: ep.UserSettingsSections.TEXT_COMPONENT,
    label: "Text Components",
    element: W.default,
    predicate: () => (0, z.shouldShowTextPlayground)() || M.default.isDeveloper
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "logout",
    onClick() {
      (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
        header: eC.default.Messages.LOGOUT,
        confirmText: eC.default.Messages.LOGOUT,
        cancelText: eC.default.Messages.CANCEL,
        onCancel: e.onClose,
        onConfirm: () => d.default.logout(),
        ...e,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: eC.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
        })
      }))
    },
    label: eC.default.Messages.LOGOUT,
    ariaLabel: eC.default.Messages.LOGOUT,
    icon: (0, a.jsx)(P.default, {
      width: 16,
      height: 16
    })
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.CUSTOM,
    element: Y.default
  }, {
    section: S.SectionTypes.CUSTOM,
    element: k.default
  }]
}