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
  eI = s("554042"),
  eh = s("200645"),
  eN = s("287490"),
  ep = s("168308"),
  eC = s("277329"),
  eA = s("674116"),
  eO = s("726985"),
  ex = s("981631"),
  eR = s("46140"),
  eM = s("689938"),
  ev = s("442691");
let eD = eh.default,
  eL = e => {
    let {
      unseenGiftCount: t,
      showPrepaidPaymentPastDueWarning: eL,
      impressionSource: eP,
      numOfPendingFamilyRequests: ej,
      isOverlaySupported: eb,
      isClipsBetaTagShowing: eU = !1,
      shouldMergeGameSettings: ey
    } = e;
    return Object.freeze({
      [eO.Setting.ACCOUNT]: {
        section: ex.UserSettingsSections.ACCOUNT,
        label: eM.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: eM.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: X.default
      },
      [eO.Setting.GAMES]: {
        section: ex.UserSettingsSections.GAMES,
        label: eM.default.Messages.GAMES,
        ariaLabel: eM.default.Messages.GAMES,
        element: eC.default,
        predicate: () => ey
      },
      [eO.Setting.PROFILE_CUSTOMIZATION]: {
        section: ex.UserSettingsSections.PROFILE_CUSTOMIZATION,
        type: S.ContentTypes.WIDE,
        label: eM.default.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: eM.default.Messages.USER_SETTINGS_PROFILES,
        element: R.default,
        newIndicator: (0, a.jsx)(y.PremiumBadge, {
          text: eM.default.Messages.NEW
        }),
        notice: {
          stores: [j.default, N.default],
          element: x.default
        },
        onSettingsClose: () => {
          o.default.wait(() => {
            (0, h.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(ex.UserSettingsSections.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [eO.Setting.PRIVACY_AND_SAFETY]: {
        section: ex.UserSettingsSections.PRIVACY_AND_SAFETY,
        label: eM.default.Messages.PRIVACY_AND_SAFETY,
        element: ef.default
      },
      [eO.Setting.FAMILY_CENTER]: {
        section: ex.UserSettingsSections.FAMILY_CENTER,
        label: eM.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: eM.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: el.default,
        badgeCount: ej,
        newIndicator: (0, a.jsx)(y.TextBadge, {
          text: eM.default.Messages.NEW,
          color: g.default.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
      },
      [eO.Setting.AUTHORIZED_APPS]: {
        section: ex.UserSettingsSections.AUTHORIZED_APPS,
        label: eM.default.Messages.AUTHORIZED_APPS,
        element: et.default
      },
      [eO.Setting.SESSIONS]: {
        section: ex.UserSettingsSections.SESSIONS,
        label: eM.default.Messages.AUTH_SESSIONS,
        ariaLabel: eM.default.Messages.AUTH_SESSIONS,
        element: em.default,
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
        predicate: () => k.default.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [eO.Setting.CONNECTIONS]: {
        section: ex.UserSettingsSections.CONNECTIONS,
        label: eM.default.Messages.CONNECTIONS,
        ariaLabel: eM.default.Messages.CONNECTIONS,
        element: ea.default,
        impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: eP
        },
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
      },
      [eO.Setting.CLIPS]: {
        section: ex.UserSettingsSections.CLIPS,
        label: eM.default.Messages.CLIPS,
        ariaLabel: eM.default.Messages.CLIPS,
        icon: eU ? (0, a.jsx)(f.default, {}) : void 0,
        element: m.default,
        predicate: () => !ey
      },
      [eO.Setting.FRIEND_REQUESTS]: {
        section: ex.UserSettingsSections.FRIEND_REQUESTS,
        label: eM.default.Messages.FRIEND_REQUESTS,
        element: ei.default
      },
      [eO.Setting.PREMIUM]: {
        section: ex.UserSettingsSections.PREMIUM,
        ariaLabel: eM.default.Messages.PREMIUM,
        label: eM.default.Messages.PREMIUM,
        element: W.default,
        className: ev.premiumTab
      },
      [eO.Setting.GUILD_BOOSTING]: {
        section: ex.UserSettingsSections.GUILD_BOOSTING,
        label: eM.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: eT.default
      },
      [eO.Setting.SUBSCRIPTIONS]: {
        section: ex.UserSettingsSections.SUBSCRIPTIONS,
        ariaLabel: eM.default.Messages.SUBSCRIPTIONS_TITLE,
        label: eM.default.Messages.SUBSCRIPTIONS_TITLE,
        element: O.default,
        icon: eL ? (0, a.jsx)(U.default, {
          width: 16,
          height: 16,
          color: i.default.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [eO.Setting.GIFT_INVENTORY]: {
        section: ex.UserSettingsSections.INVENTORY,
        label: eM.default.Messages.GIFT_INVENTORY,
        element: ed.default,
        ariaLabel: eM.default.Messages.GIFT_INVENTORY,
        badgeCount: t
      },
      [eO.Setting.BILLING]: {
        section: ex.UserSettingsSections.BILLING,
        label: eM.default.Messages.BILLING,
        element: es.default
      },
      [eO.Setting.APPEARANCE]: {
        section: ex.UserSettingsSections.APPEARANCE,
        label: eM.default.Messages.APPEARANCE,
        ariaLabel: eM.default.Messages.APPEARANCE,
        element: ee.default,
        newIndicator: (0, a.jsx)(y.PremiumBadge, {
          text: eM.default.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: A.BrandRefreshPerksExperiment.getCurrentConfig({
          location: "Settings list view"
        }).enabled ? [l.DismissibleContent.BRAND_REFRESH_NEW_BADGE, l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE] : [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE]
      },
      [eO.Setting.ACCESSIBILITY]: {
        section: ex.UserSettingsSections.ACCESSIBILITY,
        label: eM.default.Messages.ACCESSIBILITY,
        element: Z.default
      },
      [eO.Setting.VOICE_AND_VIDEO]: {
        section: ex.UserSettingsSections.VOICE,
        label: eM.default.Messages.VOICE_AND_VIDEO,
        element: eA.default,
        predicate: () => P.default.isSupported()
      },
      [eO.Setting.POGGERMODE]: {
        section: ex.UserSettingsSections.POGGERMODE,
        label: eM.default.Messages.POGGERMODE,
        ariaLabel: eM.default.Messages.POGGERMODE,
        element: C.default,
        predicate: () => p.default.settingsVisible,
        icon: (0, a.jsx)("img", {
          alt: "",
          src: s("542156"),
          className: ev.poggermodeIcon
        })
      },
      [eO.Setting.CHAT]: {
        section: ex.UserSettingsSections.TEXT,
        label: eM.default.Messages.CHAT,
        element: eg.default
      },
      [eO.Setting.NOTIFICATIONS]: {
        section: ex.UserSettingsSections.NOTIFICATIONS,
        label: eM.default.Messages.NOTIFICATIONS,
        element: eS.default
      },
      [eO.Setting.KEYBINDS]: {
        section: ex.UserSettingsSections.KEYBINDS,
        label: eM.default.Messages.KEYBINDS,
        element: eu.default
      },
      [eO.Setting.LANGUAGE]: {
        section: ex.UserSettingsSections.LOCALE,
        label: eM.default.Messages.LANGUAGE,
        element: ec.default
      },
      [eO.Setting.WINDOW_SETTINGS]: {
        section: ex.UserSettingsSections.WINDOWS,
        label: eM.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: eh.default,
        predicate: () => G.isPlatformEmbedded && (0, G.isWindows)()
      },
      [eO.Setting.LINUX_SETTINGS]: {
        section: ex.UserSettingsSections.LINUX,
        label: eM.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: eD,
        predicate: () => G.isPlatformEmbedded && (0, G.isLinux)()
      },
      [eO.Setting.STREAMER_MODE]: {
        section: ex.UserSettingsSections.STREAMER_MODE,
        label: eM.default.Messages.STREAMER_MODE,
        element: e_.default
      },
      [eO.Setting.SPEED_TEST]: {
        section: ex.UserSettingsSections.SPEED_TEST,
        label: "Speed Test",
        element: z.default,
        predicate: () => D.default.isSupported() && w.default.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [eO.Setting.SETTINGS_ADVANCED]: {
        section: ex.UserSettingsSections.ADVANCED,
        label: eM.default.Messages.SETTINGS_ADVANCED,
        element: $.default
      },
      [eO.Setting.ACTIVITY_PRIVACY]: {
        section: ex.UserSettingsSections.ACTIVITY_PRIVACY,
        label: eM.default.Messages.ACTIVITY_PRIVACY,
        element: J.default,
        predicate: () => !ey
      },
      [eO.Setting.REGISTERED_GAMES]: {
        section: ex.UserSettingsSections.REGISTERED_GAMES,
        label: eM.default.Messages.REGISTERED_GAMES,
        element: er.default,
        predicate: () => !ey && (0, ep.shouldShowRegisteredGamesSettings)()
      },
      [eO.Setting.OVERLAY]: {
        section: ex.UserSettingsSections.OVERLAY,
        label: eM.default.Messages.OVERLAY,
        element: eE.default,
        predicate: () => !ey && eb
      },
      [eO.Setting.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, T.openChangelog)(!0),
        label: eM.default.Messages.WHATS_NEW
      },
      [eO.Setting.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          B.default.track(ex.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, F.handleClick)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              B.default.track(ex.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
            }
          })
        },
        label: eM.default.Messages.MERCHANDISE,
        ariaLabel: eM.default.Messages.MERCHANDISE
      },
      [eO.Setting.HYPESQUAD]: {
        section: ex.UserSettingsSections.HYPESQUAD_ONLINE,
        label: eM.default.Messages.USER_SETTINGS_HYPESQUAD,
        element: eo.default
      },
      [eO.Setting.EXPERIMENTS]: {
        section: ex.UserSettingsSections.EXPERIMENTS,
        label: "Experiments",
        element: eN.default,
        predicate: () => L.default.isDeveloper
      },
      [eO.Setting.DEVELOPER_OPTIONS]: {
        section: ex.UserSettingsSections.DEVELOPER_OPTIONS,
        label: "Developer Options",
        element: en.default,
        predicate: () => L.default.isDeveloper
      },
      [eO.Setting.HOTSPOT_OPTIONS]: {
        section: ex.UserSettingsSections.HOTSPOT_OPTIONS,
        label: "Hotspot Options",
        element: V.default,
        predicate: () => L.default.isDeveloper
      },
      [eO.Setting.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: ex.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
        label: "Dismissible Contents",
        element: I.default,
        predicate: () => L.default.isDeveloper
      },
      [eO.Setting.PAYMENT_FLOW_MODALS]: {
        section: ex.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
        label: "Payment Flow Modals",
        element: Y.default,
        predicate: () => L.default.isDeveloper
      },
      [eO.Setting.TEXT_PLAYGROUND]: {
        section: ex.UserSettingsSections.TEXT_PLAYGROUND,
        label: "Text Playground",
        element: eI.default,
        predicate: () => (0, q.shouldShowTextPlayground)() || L.default.isDeveloper
      },
      [eO.Setting.TEXT_COMPONENTS]: {
        section: ex.UserSettingsSections.TEXT_COMPONENT,
        label: "Text Components",
        element: Q.default,
        predicate: () => (0, q.shouldShowTextPlayground)() || L.default.isDeveloper
      },
      [eO.Setting.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: ex.UserSettingsSections.PROFILE_EFFECTS_PREVIEW_TOOL,
        label: "Profile Effects Preview Tool",
        element: _.default,
        predicate: () => L.default.isDeveloper
      },
      [eO.Setting.QUEST_PREVIEW_TOOL]: {
        section: ex.UserSettingsSections.QUEST_PREVIEW_TOOL,
        label: "Quest Preview Tool",
        element: v.default,
        predicate: () => (0, M.isQuestPreviewToolEnabled)({
          location: eR.QuestsExperimentLocations.QUEST_PREVIEW_TOOL
        })
      },
      [eO.Setting.LOGOUT]: {
        section: "logout",
        onClick: () => {
          (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
            header: eM.default.Messages.LOGOUT,
            confirmText: eM.default.Messages.LOGOUT,
            cancelText: eM.default.Messages.CANCEL,
            onCancel: e.onClose,
            onConfirm: () => d.default.logout(),
            ...e,
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: eM.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
            })
          }))
        },
        label: eM.default.Messages.LOGOUT,
        ariaLabel: eM.default.Messages.LOGOUT,
        icon: (0, a.jsx)(b.default, {
          width: 16,
          height: 16
        })
      },
      [eO.Setting.SOCIAL_LINKS]: {
        section: S.SectionTypes.CUSTOM,
        element: K.default
      },
      [eO.Setting.CLIENT_DEBUG_INFO]: {
        section: S.SectionTypes.CUSTOM,
        element: H.default
      }
    })
  }