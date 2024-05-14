"use strict";
s.r(t), s.d(t, {
  getConfig: function() {
    return eL
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
  I = s("621628"),
  h = s("18438"),
  N = s("778825"),
  p = s("351780"),
  C = s("231765"),
  A = s("813732"),
  O = s("398140"),
  x = s("564344"),
  R = s("977156"),
  M = s("652380"),
  v = s("171156"),
  L = s("906467"),
  D = s("131951"),
  P = s("25990"),
  j = s("87086"),
  b = s("759231"),
  U = s("26290"),
  y = s("626135"),
  B = s("49012"),
  F = s("358085"),
  G = s("392735"),
  k = s("61160"),
  w = s("604227"),
  H = s("38915"),
  V = s("498639"),
  Y = s("748717"),
  W = s("419636"),
  K = s("35426"),
  z = s("799071"),
  Q = s("601433"),
  q = s("154022"),
  Z = s("393681"),
  X = s("309739"),
  J = s("64914"),
  $ = s("501348"),
  ee = s("795594"),
  et = s("443702"),
  es = s("920914"),
  ea = s("956699"),
  en = s("54942"),
  el = s("15780"),
  ei = s("293389"),
  er = s("88624"),
  eo = s("387747"),
  ed = s("389650"),
  eu = s("649157"),
  ec = s("593648"),
  eS = s("327885"),
  eE = s("595242"),
  eT = s("301121"),
  ef = s("36192"),
  em = s("338345"),
  e_ = s("400287"),
  eg = s("554042"),
  eI = s("200645"),
  eh = s("287490"),
  eN = s("168308"),
  ep = s("277329"),
  eC = s("674116"),
  eA = s("726985"),
  eO = s("981631"),
  ex = s("46140"),
  eR = s("689938"),
  eM = s("442691");
let ev = eI.default,
  eL = e => {
    let {
      unseenGiftCount: t,
      showPrepaidPaymentPastDueWarning: eL,
      impressionSource: eD,
      numOfPendingFamilyRequests: eP,
      isOverlaySupported: ej,
      isClipsBetaTagShowing: eb = !1,
      shouldMergeGameSettings: eU
    } = e;
    return Object.freeze({
      [eA.Setting.ACCOUNT]: {
        section: eO.UserSettingsSections.ACCOUNT,
        label: eR.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: eR.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: Z.default
      },
      [eA.Setting.GAMES]: {
        section: eO.UserSettingsSections.GAMES,
        label: eR.default.Messages.GAMES,
        ariaLabel: eR.default.Messages.GAMES,
        element: ep.default,
        predicate: () => eU
      },
      [eA.Setting.PROFILE_CUSTOMIZATION]: {
        section: eO.UserSettingsSections.PROFILE_CUSTOMIZATION,
        type: S.ContentTypes.WIDE,
        label: eR.default.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: eR.default.Messages.USER_SETTINGS_PROFILES,
        element: x.default,
        newIndicator: (0, a.jsx)(U.PremiumBadge, {
          text: eR.default.Messages.NEW
        }),
        notice: {
          stores: [P.default, N.default],
          element: O.default
        },
        onSettingsClose: () => {
          o.default.wait(() => {
            (0, h.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eO.UserSettingsSections.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [eA.Setting.PRIVACY_AND_SAFETY]: {
        section: eO.UserSettingsSections.PRIVACY_AND_SAFETY,
        label: eR.default.Messages.PRIVACY_AND_SAFETY,
        element: eT.default
      },
      [eA.Setting.FAMILY_CENTER]: {
        section: eO.UserSettingsSections.FAMILY_CENTER,
        label: eR.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: eR.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: en.default,
        badgeCount: eP,
        newIndicator: (0, a.jsx)(U.TextBadge, {
          text: eR.default.Messages.NEW,
          color: g.default.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
      },
      [eA.Setting.AUTHORIZED_APPS]: {
        section: eO.UserSettingsSections.AUTHORIZED_APPS,
        label: eR.default.Messages.AUTHORIZED_APPS,
        element: ee.default
      },
      [eA.Setting.SESSIONS]: {
        section: eO.UserSettingsSections.SESSIONS,
        label: eR.default.Messages.AUTH_SESSIONS,
        ariaLabel: eR.default.Messages.AUTH_SESSIONS,
        element: ef.default,
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
        predicate: () => G.default.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [eA.Setting.CONNECTIONS]: {
        section: eO.UserSettingsSections.CONNECTIONS,
        label: eR.default.Messages.CONNECTIONS,
        ariaLabel: eR.default.Messages.CONNECTIONS,
        element: es.default,
        impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: eD
        },
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
      },
      [eA.Setting.CLIPS]: {
        section: eO.UserSettingsSections.CLIPS,
        label: eR.default.Messages.CLIPS,
        ariaLabel: eR.default.Messages.CLIPS,
        icon: eb ? (0, a.jsx)(f.default, {}) : void 0,
        element: m.default,
        predicate: () => !eU
      },
      [eA.Setting.FRIEND_REQUESTS]: {
        section: eO.UserSettingsSections.FRIEND_REQUESTS,
        label: eR.default.Messages.FRIEND_REQUESTS,
        element: el.default
      },
      [eA.Setting.PREMIUM]: {
        section: eO.UserSettingsSections.PREMIUM,
        ariaLabel: eR.default.Messages.PREMIUM,
        label: eR.default.Messages.PREMIUM,
        element: Y.default,
        className: eM.premiumTab
      },
      [eA.Setting.GUILD_BOOSTING]: {
        section: eO.UserSettingsSections.GUILD_BOOSTING,
        label: eR.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: eE.default
      },
      [eA.Setting.SUBSCRIPTIONS]: {
        section: eO.UserSettingsSections.SUBSCRIPTIONS,
        ariaLabel: eR.default.Messages.SUBSCRIPTIONS_TITLE,
        label: eR.default.Messages.SUBSCRIPTIONS_TITLE,
        element: A.default,
        icon: eL ? (0, a.jsx)(b.default, {
          width: 16,
          height: 16,
          color: i.default.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [eA.Setting.GIFT_INVENTORY]: {
        section: eO.UserSettingsSections.INVENTORY,
        label: eR.default.Messages.GIFT_INVENTORY,
        element: eo.default,
        ariaLabel: eR.default.Messages.GIFT_INVENTORY,
        badgeCount: t
      },
      [eA.Setting.BILLING]: {
        section: eO.UserSettingsSections.BILLING,
        label: eR.default.Messages.BILLING,
        element: et.default
      },
      [eA.Setting.APPEARANCE]: {
        section: eO.UserSettingsSections.APPEARANCE,
        label: eR.default.Messages.APPEARANCE,
        ariaLabel: eR.default.Messages.APPEARANCE,
        element: $.default,
        newIndicator: (0, a.jsx)(U.PremiumBadge, {
          text: eR.default.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE]
      },
      [eA.Setting.ACCESSIBILITY]: {
        section: eO.UserSettingsSections.ACCESSIBILITY,
        label: eR.default.Messages.ACCESSIBILITY,
        element: q.default
      },
      [eA.Setting.VOICE_AND_VIDEO]: {
        section: eO.UserSettingsSections.VOICE,
        label: eR.default.Messages.VOICE_AND_VIDEO,
        element: eC.default,
        predicate: () => D.default.isSupported()
      },
      [eA.Setting.POGGERMODE]: {
        section: eO.UserSettingsSections.POGGERMODE,
        label: eR.default.Messages.POGGERMODE,
        ariaLabel: eR.default.Messages.POGGERMODE,
        element: C.default,
        predicate: () => p.default.settingsVisible,
        icon: (0, a.jsx)("img", {
          alt: "",
          src: s("542156"),
          className: eM.poggermodeIcon
        })
      },
      [eA.Setting.CHAT]: {
        section: eO.UserSettingsSections.TEXT,
        label: eR.default.Messages.CHAT,
        element: e_.default
      },
      [eA.Setting.NOTIFICATIONS]: {
        section: eO.UserSettingsSections.NOTIFICATIONS,
        label: eR.default.Messages.NOTIFICATIONS,
        element: ec.default
      },
      [eA.Setting.KEYBINDS]: {
        section: eO.UserSettingsSections.KEYBINDS,
        label: eR.default.Messages.KEYBINDS,
        element: ed.default
      },
      [eA.Setting.LANGUAGE]: {
        section: eO.UserSettingsSections.LOCALE,
        label: eR.default.Messages.LANGUAGE,
        element: eu.default
      },
      [eA.Setting.WINDOW_SETTINGS]: {
        section: eO.UserSettingsSections.WINDOWS,
        label: eR.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: eI.default,
        predicate: () => F.isPlatformEmbedded && (0, F.isWindows)()
      },
      [eA.Setting.LINUX_SETTINGS]: {
        section: eO.UserSettingsSections.LINUX,
        label: eR.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: ev,
        predicate: () => F.isPlatformEmbedded && (0, F.isLinux)()
      },
      [eA.Setting.STREAMER_MODE]: {
        section: eO.UserSettingsSections.STREAMER_MODE,
        label: eR.default.Messages.STREAMER_MODE,
        element: em.default
      },
      [eA.Setting.SPEED_TEST]: {
        section: eO.UserSettingsSections.SPEED_TEST,
        label: "Speed Test",
        element: K.default,
        predicate: () => v.default.isSupported() && k.default.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [eA.Setting.SETTINGS_ADVANCED]: {
        section: eO.UserSettingsSections.ADVANCED,
        label: eR.default.Messages.SETTINGS_ADVANCED,
        element: J.default
      },
      [eA.Setting.ACTIVITY_PRIVACY]: {
        section: eO.UserSettingsSections.ACTIVITY_PRIVACY,
        label: eR.default.Messages.ACTIVITY_PRIVACY,
        element: X.default,
        predicate: () => !eU
      },
      [eA.Setting.REGISTERED_GAMES]: {
        section: eO.UserSettingsSections.REGISTERED_GAMES,
        label: eR.default.Messages.REGISTERED_GAMES,
        element: ei.default,
        predicate: () => !eU && (0, eN.shouldShowRegisteredGamesSettings)()
      },
      [eA.Setting.OVERLAY]: {
        section: eO.UserSettingsSections.OVERLAY,
        label: eR.default.Messages.OVERLAY,
        element: eS.default,
        predicate: () => !eU && ej
      },
      [eA.Setting.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, T.openChangelog)(!0),
        label: eR.default.Messages.WHATS_NEW
      },
      [eA.Setting.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          y.default.track(eO.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, B.handleClick)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              y.default.track(eO.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
            }
          })
        },
        label: eR.default.Messages.MERCHANDISE,
        ariaLabel: eR.default.Messages.MERCHANDISE
      },
      [eA.Setting.HYPESQUAD]: {
        section: eO.UserSettingsSections.HYPESQUAD_ONLINE,
        label: eR.default.Messages.USER_SETTINGS_HYPESQUAD,
        element: er.default
      },
      [eA.Setting.EXPERIMENTS]: {
        section: eO.UserSettingsSections.EXPERIMENTS,
        label: "Experiments",
        element: eh.default,
        predicate: () => L.default.isDeveloper
      },
      [eA.Setting.DEVELOPER_OPTIONS]: {
        section: eO.UserSettingsSections.DEVELOPER_OPTIONS,
        label: "Developer Options",
        element: ea.default,
        predicate: () => L.default.isDeveloper
      },
      [eA.Setting.HOTSPOT_OPTIONS]: {
        section: eO.UserSettingsSections.HOTSPOT_OPTIONS,
        label: "Hotspot Options",
        element: H.default,
        predicate: () => L.default.isDeveloper
      },
      [eA.Setting.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: eO.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
        label: "Dismissible Contents",
        element: I.default,
        predicate: () => L.default.isDeveloper
      },
      [eA.Setting.PAYMENT_FLOW_MODALS]: {
        section: eO.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
        label: "Payment Flow Modals",
        element: V.default,
        predicate: () => L.default.isDeveloper
      },
      [eA.Setting.TEXT_PLAYGROUND]: {
        section: eO.UserSettingsSections.TEXT_PLAYGROUND,
        label: "Text Playground",
        element: eg.default,
        predicate: () => (0, Q.shouldShowTextPlayground)() || L.default.isDeveloper
      },
      [eA.Setting.TEXT_COMPONENTS]: {
        section: eO.UserSettingsSections.TEXT_COMPONENT,
        label: "Text Components",
        element: z.default,
        predicate: () => (0, Q.shouldShowTextPlayground)() || L.default.isDeveloper
      },
      [eA.Setting.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: eO.UserSettingsSections.PROFILE_EFFECTS_PREVIEW_TOOL,
        label: "Profile Effects Preview Tool",
        element: _.default,
        predicate: () => L.default.isDeveloper
      },
      [eA.Setting.QUEST_PREVIEW_TOOL]: {
        section: eO.UserSettingsSections.QUEST_PREVIEW_TOOL,
        label: "Quest Preview Tool",
        element: M.default,
        predicate: () => (0, R.isQuestPreviewToolEnabled)({
          location: ex.QuestsExperimentLocations.QUEST_PREVIEW_TOOL
        })
      },
      [eA.Setting.LOGOUT]: {
        section: "logout",
        onClick: () => {
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
        icon: (0, a.jsx)(j.default, {
          width: 16,
          height: 16
        })
      },
      [eA.Setting.SOCIAL_LINKS]: {
        section: S.SectionTypes.CUSTOM,
        element: W.default
      },
      [eA.Setting.CLIENT_DEBUG_INFO]: {
        section: S.SectionTypes.CUSTOM,
        element: w.default
      }
    })
  }