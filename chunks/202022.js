"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eM
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
  m = s("703288"),
  f = s("574755"),
  _ = s("377171"),
  g = s("621628"),
  h = s("18438"),
  I = s("778825"),
  N = s("351780"),
  p = s("231765"),
  C = s("813732"),
  A = s("398140"),
  O = s("564344"),
  x = s("57655"),
  R = s("652380"),
  M = s("171156"),
  v = s("906467"),
  D = s("131951"),
  L = s("25990"),
  P = s("87086"),
  j = s("759231"),
  b = s("26290"),
  U = s("626135"),
  y = s("49012"),
  B = s("358085"),
  F = s("392735"),
  G = s("61160"),
  k = s("604227"),
  w = s("38915"),
  H = s("498639"),
  V = s("748717"),
  Y = s("419636"),
  K = s("35426"),
  W = s("799071"),
  z = s("601433"),
  Q = s("154022"),
  q = s("393681"),
  Z = s("309739"),
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
  eu = s("593648"),
  ec = s("327885"),
  eS = s("595242"),
  eE = s("301121"),
  eT = s("36192"),
  em = s("338345"),
  ef = s("400287"),
  e_ = s("554042"),
  eg = s("200645"),
  eh = s("287490"),
  eI = s("168308"),
  eN = s("277329"),
  ep = s("674116"),
  eC = s("981631"),
  eA = s("46140"),
  eO = s("689938"),
  ex = s("480261");
let eR = eg.default;

function eM(e) {
  let {
    unseenGiftCount: t,
    showPrepaidPaymentPastDueWarning: eM,
    impressionSource: ev,
    numOfPendingFamilyRequests: eD,
    isOverlaySupported: eL,
    isClipsBetaTagShowing: eP = !1,
    shouldMergeGameSettings: ej
  } = e;
  return [{
    section: S.SectionTypes.HEADER,
    label: eO.default.Messages.USER_SETTINGS
  }, {
    section: eC.UserSettingsSections.ACCOUNT,
    label: eO.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    ariaLabel: eO.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    element: q.default
  }, {
    section: eC.UserSettingsSections.GAMES,
    label: eO.default.Messages.GAMES,
    ariaLabel: eO.default.Messages.GAMES,
    element: eN.default,
    predicate: () => ej
  }, {
    section: eC.UserSettingsSections.PROFILE_CUSTOMIZATION,
    type: S.ContentTypes.WIDE,
    label: eO.default.Messages.USER_SETTINGS_PROFILES,
    ariaLabel: eO.default.Messages.USER_SETTINGS_PROFILES,
    element: O.default,
    newIndicator: (0, a.jsx)(b.PremiumBadge, {
      text: eO.default.Messages.NEW
    }),
    notice: {
      stores: [L.default, I.default],
      element: A.default
    },
    onSettingsClose: () => {
      o.default.wait(() => {
        (0, h.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eC.UserSettingsSections.PROFILE_CUSTOMIZATION)
      })
    }
  }, {
    section: eC.UserSettingsSections.PRIVACY_AND_SAFETY,
    label: eO.default.Messages.PRIVACY_AND_SAFETY,
    element: eE.default
  }, {
    section: eC.UserSettingsSections.FAMILY_CENTER,
    label: eO.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    ariaLabel: eO.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    element: ea.default,
    badgeCount: eD,
    newIndicator: (0, a.jsx)(b.TextBadge, {
      text: eO.default.Messages.NEW,
      color: _.default.BG_BRAND
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
  }, {
    section: eC.UserSettingsSections.AUTHORIZED_APPS,
    label: eO.default.Messages.AUTHORIZED_APPS,
    element: $.default
  }, {
    section: eC.UserSettingsSections.SESSIONS,
    label: eO.default.Messages.AUTH_SESSIONS,
    ariaLabel: eO.default.Messages.AUTH_SESSIONS,
    element: eT.default,
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
    predicate: () => F.default.getCurrentConfig({
      location: "9f7d84_1"
    }, {
      autoTrackExposure: !1
    }).showSettings
  }, {
    section: eC.UserSettingsSections.CONNECTIONS,
    label: eO.default.Messages.CONNECTIONS,
    ariaLabel: eO.default.Messages.CONNECTIONS,
    element: et.default,
    impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
    impressionProperties: {
      source: ev
    },
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
  }, {
    section: eC.UserSettingsSections.CLIPS,
    label: eO.default.Messages.CLIPS,
    ariaLabel: eO.default.Messages.CLIPS,
    icon: eP ? (0, a.jsx)(m.default, {}) : void 0,
    element: f.default,
    predicate: () => !ej
  }, {
    section: eC.UserSettingsSections.FRIEND_REQUESTS,
    label: eO.default.Messages.FRIEND_REQUESTS,
    element: en.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eO.default.Messages.BILLING_SETTINGS
  }, {
    section: eC.UserSettingsSections.PREMIUM,
    ariaLabel: eO.default.Messages.PREMIUM,
    label: eO.default.Messages.PREMIUM,
    element: V.default,
    className: ex.premiumTab
  }, {
    section: eC.UserSettingsSections.GUILD_BOOSTING,
    label: eO.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
    element: eS.default
  }, {
    section: eC.UserSettingsSections.SUBSCRIPTIONS,
    ariaLabel: eO.default.Messages.SUBSCRIPTIONS_TITLE,
    label: eO.default.Messages.SUBSCRIPTIONS_TITLE,
    element: C.default,
    icon: eM ? (0, a.jsx)(j.default, {
      width: 16,
      height: 16,
      color: i.default.unsafe_rawColors.YELLOW_300.css
    }) : null
  }, {
    section: eC.UserSettingsSections.INVENTORY,
    label: eO.default.Messages.GIFT_INVENTORY,
    element: er.default,
    ariaLabel: eO.default.Messages.GIFT_INVENTORY,
    badgeCount: t
  }, {
    section: eC.UserSettingsSections.BILLING,
    label: eO.default.Messages.BILLING,
    element: ee.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eO.default.Messages.APP_SETTINGS
  }, {
    section: eC.UserSettingsSections.APPEARANCE,
    label: eO.default.Messages.APPEARANCE,
    ariaLabel: eO.default.Messages.APPEARANCE,
    element: J.default,
    newIndicator: (0, a.jsx)(b.PremiumBadge, {
      text: eO.default.Messages.NEW
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE]
  }, {
    section: eC.UserSettingsSections.ACCESSIBILITY,
    label: eO.default.Messages.ACCESSIBILITY,
    element: Q.default
  }, {
    section: eC.UserSettingsSections.VOICE,
    label: eO.default.Messages.VOICE_AND_VIDEO,
    element: ep.default,
    predicate: () => D.default.isSupported()
  }, {
    section: eC.UserSettingsSections.POGGERMODE,
    label: eO.default.Messages.POGGERMODE,
    ariaLabel: eO.default.Messages.POGGERMODE,
    element: p.default,
    predicate: () => N.default.settingsVisible,
    icon: (0, a.jsx)("img", {
      alt: "",
      src: s("348621"),
      className: ex.poggermodeIcon
    })
  }, {
    section: eC.UserSettingsSections.TEXT,
    label: eO.default.Messages.CHAT,
    element: ef.default
  }, {
    section: eC.UserSettingsSections.NOTIFICATIONS,
    label: eO.default.Messages.NOTIFICATIONS,
    element: eu.default
  }, {
    section: eC.UserSettingsSections.KEYBINDS,
    label: eO.default.Messages.KEYBINDS,
    element: eo.default
  }, {
    section: eC.UserSettingsSections.LOCALE,
    label: eO.default.Messages.LANGUAGE,
    element: ed.default
  }, {
    section: eC.UserSettingsSections.WINDOWS,
    label: eO.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
    element: eg.default,
    predicate: () => B.isPlatformEmbedded && (0, B.isWindows)()
  }, {
    section: eC.UserSettingsSections.LINUX,
    label: eO.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
    element: eR,
    predicate: () => B.isPlatformEmbedded && (0, B.isLinux)()
  }, {
    section: eC.UserSettingsSections.STREAMER_MODE,
    label: eO.default.Messages.STREAMER_MODE,
    element: em.default
  }, {
    section: eC.UserSettingsSections.SPEED_TEST,
    label: "Speed Test",
    element: K.default,
    predicate: () => M.default.isSupported() && G.default.getCurrentConfig({
      location: "9f7d84_2"
    }).showSettings
  }, {
    section: eC.UserSettingsSections.ADVANCED,
    label: eO.default.Messages.SETTINGS_ADVANCED,
    element: X.default
  }, {
    section: S.SectionTypes.DIVIDER,
    predicate: () => !ej
  }, {
    section: S.SectionTypes.HEADER,
    label: eO.default.Messages.ACTIVITY_SETTINGS,
    predicate: () => !ej
  }, {
    section: eC.UserSettingsSections.ACTIVITY_PRIVACY,
    label: eO.default.Messages.ACTIVITY_PRIVACY,
    element: Z.default,
    predicate: () => !ej
  }, {
    section: eC.UserSettingsSections.REGISTERED_GAMES,
    label: eO.default.Messages.REGISTERED_GAMES,
    element: el.default,
    predicate: () => !ej && (0, eI.shouldShowRegisteredGamesSettings)()
  }, {
    section: eC.UserSettingsSections.OVERLAY,
    label: eO.default.Messages.OVERLAY,
    element: ec.default,
    predicate: () => !ej && eL
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "changelog",
    onClick: () => (0, T.openChangelog)(!0),
    label: eO.default.Messages.WHATS_NEW
  }, {
    section: "merchandise",
    onClick: () => {
      let e = "https://discordmerch.com/Dsktopprm";
      U.default.track(eC.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, y.handleClick)({
        href: e,
        shouldConfirm: !0,
        onConfirm: () => {
          U.default.track(eC.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
        }
      })
    },
    label: eO.default.Messages.MERCHANDISE,
    ariaLabel: eO.default.Messages.MERCHANDISE
  }, {
    section: eC.UserSettingsSections.HYPESQUAD_ONLINE,
    label: eO.default.Messages.USER_SETTINGS_HYPESQUAD,
    element: ei.default
  }, {
    section: eC.UserSettingsSections.EXPERIMENTS,
    label: "Experiments",
    element: eh.default,
    predicate: () => v.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.DEVELOPER_OPTIONS,
    label: "Developer Options",
    element: es.default,
    predicate: () => v.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.HOTSPOT_OPTIONS,
    label: "Hotspot Options",
    element: w.default,
    predicate: () => v.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
    label: "Dismissible Contents",
    element: g.default,
    predicate: () => v.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
    label: "Payment Flow Modals",
    element: H.default,
    predicate: () => v.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.TEXT_PLAYGROUND,
    label: "Text Playground",
    element: e_.default,
    predicate: () => (0, z.shouldShowTextPlayground)() || v.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.TEXT_COMPONENT,
    label: "Text Components",
    element: W.default,
    predicate: () => (0, z.shouldShowTextPlayground)() || v.default.isDeveloper
  }, {
    section: eC.UserSettingsSections.QUEST_PREVIEW_TOOL,
    label: "Quest Preview Tool",
    element: R.default,
    predicate: () => (0, x.isQuestPreviewToolEnabled)({
      location: eA.QuestsExperimentLocations.QUEST_PREVIEW_TOOL
    })
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "logout",
    onClick() {
      (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
        header: eO.default.Messages.LOGOUT,
        confirmText: eO.default.Messages.LOGOUT,
        cancelText: eO.default.Messages.CANCEL,
        onCancel: e.onClose,
        onConfirm: () => d.default.logout(),
        ...e,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: eO.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
        })
      }))
    },
    label: eO.default.Messages.LOGOUT,
    ariaLabel: eO.default.Messages.LOGOUT,
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