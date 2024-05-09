"use strict";
s.r(t), s.d(t, {
  default: function() {
    return eD
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
  _ = s("425799"),
  g = s("377171"),
  h = s("621628"),
  I = s("18438"),
  N = s("778825"),
  p = s("351780"),
  C = s("231765"),
  A = s("837741"),
  O = s("813732"),
  x = s("398140"),
  R = s("564344"),
  M = s("977156"),
  v = s("652380"),
  D = s("171156"),
  L = s("906467"),
  P = s("131951"),
  j = s("25990"),
  b = s("87086"),
  U = s("759231"),
  y = s("26290"),
  B = s("626135"),
  F = s("49012"),
  G = s("358085"),
  k = s("392735"),
  w = s("61160"),
  H = s("604227"),
  V = s("38915"),
  Y = s("498639"),
  W = s("748717"),
  K = s("419636"),
  z = s("35426"),
  Q = s("799071"),
  q = s("601433"),
  Z = s("154022"),
  X = s("393681"),
  J = s("309739"),
  $ = s("64914"),
  ee = s("501348"),
  et = s("795594"),
  es = s("443702"),
  ea = s("920914"),
  en = s("956699"),
  el = s("54942"),
  ei = s("15780"),
  er = s("293389"),
  eo = s("88624"),
  ed = s("387747"),
  eu = s("389650"),
  ec = s("649157"),
  eS = s("593648"),
  eE = s("327885"),
  eT = s("595242"),
  ef = s("301121"),
  em = s("36192"),
  e_ = s("338345"),
  eg = s("400287"),
  eh = s("554042"),
  eI = s("200645"),
  eN = s("287490"),
  ep = s("168308"),
  eC = s("277329"),
  eA = s("674116"),
  eO = s("981631"),
  ex = s("46140"),
  eR = s("689938"),
  eM = s("631719");
let ev = eI.default;

function eD(e) {
  let {
    unseenGiftCount: t,
    showPrepaidPaymentPastDueWarning: eD,
    impressionSource: eL,
    numOfPendingFamilyRequests: eP,
    isOverlaySupported: ej,
    isClipsBetaTagShowing: eb = !1,
    shouldMergeGameSettings: eU
  } = e;
  return [{
    section: S.SectionTypes.HEADER,
    label: eR.default.Messages.USER_SETTINGS
  }, {
    section: eO.UserSettingsSections.ACCOUNT,
    label: eR.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    ariaLabel: eR.default.Messages.USER_SETTINGS_MY_ACCOUNT,
    element: X.default
  }, {
    section: eO.UserSettingsSections.GAMES,
    label: eR.default.Messages.GAMES,
    ariaLabel: eR.default.Messages.GAMES,
    element: eC.default,
    predicate: () => eU
  }, {
    section: eO.UserSettingsSections.PROFILE_CUSTOMIZATION,
    type: S.ContentTypes.WIDE,
    label: eR.default.Messages.USER_SETTINGS_PROFILES,
    ariaLabel: eR.default.Messages.USER_SETTINGS_PROFILES,
    element: R.default,
    newIndicator: (0, a.jsx)(y.PremiumBadge, {
      text: eR.default.Messages.NEW
    }),
    notice: {
      stores: [j.default, N.default],
      element: x.default
    },
    onSettingsClose: () => {
      o.default.wait(() => {
        (0, I.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eO.UserSettingsSections.PROFILE_CUSTOMIZATION)
      })
    }
  }, {
    section: eO.UserSettingsSections.PRIVACY_AND_SAFETY,
    label: eR.default.Messages.PRIVACY_AND_SAFETY,
    element: ef.default
  }, {
    section: eO.UserSettingsSections.FAMILY_CENTER,
    label: eR.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    ariaLabel: eR.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    element: el.default,
    badgeCount: eP,
    newIndicator: (0, a.jsx)(y.TextBadge, {
      text: eR.default.Messages.NEW,
      color: g.default.BG_BRAND
    }),
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
  }, {
    section: eO.UserSettingsSections.AUTHORIZED_APPS,
    label: eR.default.Messages.AUTHORIZED_APPS,
    element: et.default
  }, {
    section: eO.UserSettingsSections.SESSIONS,
    label: eR.default.Messages.AUTH_SESSIONS,
    ariaLabel: eR.default.Messages.AUTH_SESSIONS,
    element: em.default,
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
    predicate: () => k.default.getCurrentConfig({
      location: "9f7d84_1"
    }, {
      autoTrackExposure: !1
    }).showSettings
  }, {
    section: eO.UserSettingsSections.CONNECTIONS,
    label: eR.default.Messages.CONNECTIONS,
    ariaLabel: eR.default.Messages.CONNECTIONS,
    element: ea.default,
    impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
    impressionProperties: {
      source: eL
    },
    newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
  }, {
    section: eO.UserSettingsSections.CLIPS,
    label: eR.default.Messages.CLIPS,
    ariaLabel: eR.default.Messages.CLIPS,
    icon: eb ? (0, a.jsx)(f.default, {}) : void 0,
    element: m.default,
    predicate: () => !eU
  }, {
    section: eO.UserSettingsSections.FRIEND_REQUESTS,
    label: eR.default.Messages.FRIEND_REQUESTS,
    element: ei.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eR.default.Messages.BILLING_SETTINGS
  }, {
    section: eO.UserSettingsSections.PREMIUM,
    ariaLabel: eR.default.Messages.PREMIUM,
    label: eR.default.Messages.PREMIUM,
    element: W.default,
    className: eM.premiumTab
  }, {
    section: eO.UserSettingsSections.GUILD_BOOSTING,
    label: eR.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
    element: eT.default
  }, {
    section: eO.UserSettingsSections.SUBSCRIPTIONS,
    ariaLabel: eR.default.Messages.SUBSCRIPTIONS_TITLE,
    label: eR.default.Messages.SUBSCRIPTIONS_TITLE,
    element: O.default,
    icon: eD ? (0, a.jsx)(U.default, {
      width: 16,
      height: 16,
      color: i.default.unsafe_rawColors.YELLOW_300.css
    }) : null
  }, {
    section: eO.UserSettingsSections.INVENTORY,
    label: eR.default.Messages.GIFT_INVENTORY,
    element: ed.default,
    ariaLabel: eR.default.Messages.GIFT_INVENTORY,
    badgeCount: t
  }, {
    section: eO.UserSettingsSections.BILLING,
    label: eR.default.Messages.BILLING,
    element: es.default
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.HEADER,
    label: eR.default.Messages.APP_SETTINGS
  }, {
    section: eO.UserSettingsSections.APPEARANCE,
    label: eR.default.Messages.APPEARANCE,
    ariaLabel: eR.default.Messages.APPEARANCE,
    element: ee.default,
    newIndicator: (0, a.jsx)(y.PremiumBadge, {
      text: eR.default.Messages.NEW
    }),
    newIndicatorDismissibleContentTypes: A.BrandRefreshPerksExperiment.getCurrentConfig({
      location: "Settings list view"
    }).enabled ? [l.DismissibleContent.BRAND_REFRESH_NEW_BADGE, l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE] : [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE]
  }, {
    section: eO.UserSettingsSections.ACCESSIBILITY,
    label: eR.default.Messages.ACCESSIBILITY,
    element: Z.default
  }, {
    section: eO.UserSettingsSections.VOICE,
    label: eR.default.Messages.VOICE_AND_VIDEO,
    element: eA.default,
    predicate: () => P.default.isSupported()
  }, {
    section: eO.UserSettingsSections.POGGERMODE,
    label: eR.default.Messages.POGGERMODE,
    ariaLabel: eR.default.Messages.POGGERMODE,
    element: C.default,
    predicate: () => p.default.settingsVisible,
    icon: (0, a.jsx)("img", {
      alt: "",
      src: s("348621"),
      className: eM.poggermodeIcon
    })
  }, {
    section: eO.UserSettingsSections.TEXT,
    label: eR.default.Messages.CHAT,
    element: eg.default
  }, {
    section: eO.UserSettingsSections.NOTIFICATIONS,
    label: eR.default.Messages.NOTIFICATIONS,
    element: eS.default
  }, {
    section: eO.UserSettingsSections.KEYBINDS,
    label: eR.default.Messages.KEYBINDS,
    element: eu.default
  }, {
    section: eO.UserSettingsSections.LOCALE,
    label: eR.default.Messages.LANGUAGE,
    element: ec.default
  }, {
    section: eO.UserSettingsSections.WINDOWS,
    label: eR.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
    element: eI.default,
    predicate: () => G.isPlatformEmbedded && (0, G.isWindows)()
  }, {
    section: eO.UserSettingsSections.LINUX,
    label: eR.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
    element: ev,
    predicate: () => G.isPlatformEmbedded && (0, G.isLinux)()
  }, {
    section: eO.UserSettingsSections.STREAMER_MODE,
    label: eR.default.Messages.STREAMER_MODE,
    element: e_.default
  }, {
    section: eO.UserSettingsSections.SPEED_TEST,
    label: "Speed Test",
    element: z.default,
    predicate: () => D.default.isSupported() && w.default.getCurrentConfig({
      location: "9f7d84_2"
    }).showSettings
  }, {
    section: eO.UserSettingsSections.ADVANCED,
    label: eR.default.Messages.SETTINGS_ADVANCED,
    element: $.default
  }, {
    section: S.SectionTypes.DIVIDER,
    predicate: () => !eU
  }, {
    section: S.SectionTypes.HEADER,
    label: eR.default.Messages.ACTIVITY_SETTINGS,
    predicate: () => !eU
  }, {
    section: eO.UserSettingsSections.ACTIVITY_PRIVACY,
    label: eR.default.Messages.ACTIVITY_PRIVACY,
    element: J.default,
    predicate: () => !eU
  }, {
    section: eO.UserSettingsSections.REGISTERED_GAMES,
    label: eR.default.Messages.REGISTERED_GAMES,
    element: er.default,
    predicate: () => !eU && (0, ep.shouldShowRegisteredGamesSettings)()
  }, {
    section: eO.UserSettingsSections.OVERLAY,
    label: eR.default.Messages.OVERLAY,
    element: eE.default,
    predicate: () => !eU && ej
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "changelog",
    onClick: () => (0, T.openChangelog)(!0),
    label: eR.default.Messages.WHATS_NEW
  }, {
    section: "merchandise",
    onClick: () => {
      let e = "https://discordmerch.com/Dsktopprm";
      B.default.track(eO.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, F.handleClick)({
        href: e,
        shouldConfirm: !0,
        onConfirm: () => {
          B.default.track(eO.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
        }
      })
    },
    label: eR.default.Messages.MERCHANDISE,
    ariaLabel: eR.default.Messages.MERCHANDISE
  }, {
    section: eO.UserSettingsSections.HYPESQUAD_ONLINE,
    label: eR.default.Messages.USER_SETTINGS_HYPESQUAD,
    element: eo.default
  }, {
    section: eO.UserSettingsSections.EXPERIMENTS,
    label: "Experiments",
    element: eN.default,
    predicate: () => L.default.isDeveloper
  }, {
    section: eO.UserSettingsSections.DEVELOPER_OPTIONS,
    label: "Developer Options",
    element: en.default,
    predicate: () => L.default.isDeveloper
  }, {
    section: eO.UserSettingsSections.HOTSPOT_OPTIONS,
    label: "Hotspot Options",
    element: V.default,
    predicate: () => L.default.isDeveloper
  }, {
    section: eO.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
    label: "Dismissible Contents",
    element: h.default,
    predicate: () => L.default.isDeveloper
  }, {
    section: eO.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
    label: "Payment Flow Modals",
    element: Y.default,
    predicate: () => L.default.isDeveloper
  }, {
    section: eO.UserSettingsSections.TEXT_PLAYGROUND,
    label: "Text Playground",
    element: eh.default,
    predicate: () => (0, q.shouldShowTextPlayground)() || L.default.isDeveloper
  }, {
    section: eO.UserSettingsSections.TEXT_COMPONENT,
    label: "Text Components",
    element: Q.default,
    predicate: () => (0, q.shouldShowTextPlayground)() || L.default.isDeveloper
  }, {
    section: eO.UserSettingsSections.PROFILE_EFFECTS_PREVIEW_TOOL,
    label: "Profile Effects Preview Tool",
    element: _.default,
    predicate: () => L.default.isDeveloper
  }, {
    section: eO.UserSettingsSections.QUEST_PREVIEW_TOOL,
    label: "Quest Preview Tool",
    element: v.default,
    predicate: () => (0, M.isQuestPreviewToolEnabled)({
      location: ex.QuestsExperimentLocations.QUEST_PREVIEW_TOOL
    })
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: "logout",
    onClick() {
      (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
        header: eR.default.Messages.LOGOUT,
        confirmText: eR.default.Messages.LOGOUT,
        cancelText: eR.default.Messages.CANCEL,
        onCancel: e.onClose,
        onConfirm: () => d.default.logout(),
        ...e,
        children: (0, a.jsx)(r.Text, {
          variant: "text-md/normal",
          children: eR.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
        })
      }))
    },
    label: eR.default.Messages.LOGOUT,
    ariaLabel: eR.default.Messages.LOGOUT,
    icon: (0, a.jsx)(b.default, {
      width: 16,
      height: 16
    })
  }, {
    section: S.SectionTypes.DIVIDER
  }, {
    section: S.SectionTypes.CUSTOM,
    element: K.default
  }, {
    section: S.SectionTypes.CUSTOM,
    element: H.default
  }]
}