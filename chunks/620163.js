"use strict";
s.r(t), s.d(t, {
  getConfig: function() {
    return eb
  }
}), s("653041");
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
  O = s("804545"),
  x = s("813732"),
  R = s("398140"),
  M = s("564344"),
  v = s("977156"),
  D = s("652380"),
  L = s("171156"),
  P = s("906467"),
  j = s("131951"),
  b = s("25990"),
  U = s("87086"),
  y = s("759231"),
  B = s("26290"),
  F = s("626135"),
  G = s("49012"),
  k = s("358085"),
  w = s("392735"),
  H = s("61160"),
  V = s("604227"),
  Y = s("38915"),
  W = s("498639"),
  K = s("748717"),
  z = s("419636"),
  Q = s("35426"),
  q = s("799071"),
  Z = s("601433"),
  X = s("154022"),
  J = s("393681"),
  $ = s("309739"),
  ee = s("64914"),
  et = s("501348"),
  es = s("795594"),
  ea = s("443702"),
  en = s("920914"),
  el = s("956699"),
  ei = s("54942"),
  er = s("15780"),
  eo = s("293389"),
  ed = s("88624"),
  eu = s("387747"),
  ec = s("389650"),
  eS = s("649157"),
  eE = s("593648"),
  eT = s("327885"),
  ef = s("595242"),
  em = s("301121"),
  e_ = s("207874"),
  eg = s("36192"),
  eI = s("338345"),
  eh = s("400287"),
  eN = s("554042"),
  ep = s("200645"),
  eC = s("287490"),
  eA = s("168308"),
  eO = s("277329"),
  ex = s("674116"),
  eR = s("726985"),
  eM = s("981631"),
  ev = s("46140"),
  eD = s("689938"),
  eL = s("442691");
let eP = () => {
    let e = "Settings list view",
      t = [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE];
    return A.BrandRefreshPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.BRAND_REFRESH_NEW_BADGE), O.PrideMonthPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.PRIDE_ICONS_APPEARANCE_BADGE), t
  },
  ej = ep.default,
  eb = e => {
    let {
      unseenGiftCount: t,
      showPrepaidPaymentPastDueWarning: A,
      impressionSource: O,
      numOfPendingFamilyRequests: eb,
      isOverlaySupported: eU,
      isClipsBetaTagShowing: ey = !1,
      shouldMergeGameSettings: eB,
      isUserSettingsSearchEnabled: eF
    } = e;
    return Object.freeze({
      [eR.WebSetting.SEARCH_BAR]: {
        section: S.SectionTypes.CUSTOM,
        element: e_.default,
        predicate: () => eF
      },
      [eR.WebSetting.ACCOUNT]: {
        section: eM.UserSettingsSections.ACCOUNT,
        label: eD.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: eD.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: J.default
      },
      [eR.WebSetting.GAMES]: {
        section: eM.UserSettingsSections.GAMES,
        label: eD.default.Messages.GAMES,
        ariaLabel: eD.default.Messages.GAMES,
        element: eO.default,
        predicate: () => eB
      },
      [eR.WebSetting.PROFILE_CUSTOMIZATION]: {
        section: eM.UserSettingsSections.PROFILE_CUSTOMIZATION,
        type: S.ContentTypes.WIDE,
        label: eD.default.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: eD.default.Messages.USER_SETTINGS_PROFILES,
        element: M.default,
        newIndicator: (0, a.jsx)(B.PremiumBadge, {
          text: eD.default.Messages.NEW
        }),
        notice: {
          stores: [b.default, N.default],
          element: R.default
        },
        onSettingsClose: () => {
          o.default.wait(() => {
            (0, h.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eM.UserSettingsSections.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [eR.WebSetting.PRIVACY_AND_SAFETY]: {
        section: eM.UserSettingsSections.PRIVACY_AND_SAFETY,
        label: eD.default.Messages.PRIVACY_AND_SAFETY,
        element: em.default
      },
      [eR.WebSetting.FAMILY_CENTER]: {
        section: eM.UserSettingsSections.FAMILY_CENTER,
        label: eD.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: eD.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: ei.default,
        badgeCount: eb,
        newIndicator: (0, a.jsx)(B.TextBadge, {
          text: eD.default.Messages.NEW,
          color: g.default.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
      },
      [eR.WebSetting.AUTHORIZED_APPS]: {
        section: eM.UserSettingsSections.AUTHORIZED_APPS,
        label: eD.default.Messages.AUTHORIZED_APPS,
        element: es.default
      },
      [eR.WebSetting.SESSIONS]: {
        section: eM.UserSettingsSections.SESSIONS,
        label: eD.default.Messages.AUTH_SESSIONS,
        ariaLabel: eD.default.Messages.AUTH_SESSIONS,
        element: eg.default,
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
        predicate: () => w.default.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [eR.WebSetting.CONNECTIONS]: {
        section: eM.UserSettingsSections.CONNECTIONS,
        label: eD.default.Messages.CONNECTIONS,
        ariaLabel: eD.default.Messages.CONNECTIONS,
        element: en.default,
        impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: O
        },
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
      },
      [eR.WebSetting.CLIPS]: {
        section: eM.UserSettingsSections.CLIPS,
        label: eD.default.Messages.CLIPS,
        ariaLabel: eD.default.Messages.CLIPS,
        icon: ey ? (0, a.jsx)(f.default, {}) : void 0,
        element: m.default,
        predicate: () => !eB
      },
      [eR.WebSetting.FRIEND_REQUESTS]: {
        section: eM.UserSettingsSections.FRIEND_REQUESTS,
        label: eD.default.Messages.FRIEND_REQUESTS,
        element: er.default
      },
      [eR.WebSetting.PREMIUM]: {
        section: eM.UserSettingsSections.PREMIUM,
        ariaLabel: eD.default.Messages.PREMIUM,
        label: eD.default.Messages.PREMIUM,
        element: K.default,
        className: eL.premiumTab
      },
      [eR.WebSetting.GUILD_BOOSTING]: {
        section: eM.UserSettingsSections.GUILD_BOOSTING,
        label: eD.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: ef.default
      },
      [eR.WebSetting.SUBSCRIPTIONS]: {
        section: eM.UserSettingsSections.SUBSCRIPTIONS,
        ariaLabel: eD.default.Messages.SUBSCRIPTIONS_TITLE,
        label: eD.default.Messages.SUBSCRIPTIONS_TITLE,
        element: x.default,
        icon: A ? (0, a.jsx)(y.default, {
          width: 16,
          height: 16,
          color: i.default.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [eR.WebSetting.GIFT_INVENTORY]: {
        section: eM.UserSettingsSections.INVENTORY,
        label: eD.default.Messages.GIFT_INVENTORY,
        element: eu.default,
        ariaLabel: eD.default.Messages.GIFT_INVENTORY,
        badgeCount: t
      },
      [eR.WebSetting.BILLING]: {
        section: eM.UserSettingsSections.BILLING,
        label: eD.default.Messages.BILLING,
        element: ea.default
      },
      [eR.WebSetting.APPEARANCE]: {
        section: eM.UserSettingsSections.APPEARANCE,
        label: eD.default.Messages.APPEARANCE,
        ariaLabel: eD.default.Messages.APPEARANCE,
        element: et.default,
        newIndicator: (0, a.jsx)(B.PremiumBadge, {
          text: eD.default.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: eP()
      },
      [eR.WebSetting.ACCESSIBILITY]: {
        section: eM.UserSettingsSections.ACCESSIBILITY,
        label: eD.default.Messages.ACCESSIBILITY,
        element: X.default
      },
      [eR.WebSetting.VOICE_AND_VIDEO]: {
        section: eM.UserSettingsSections.VOICE,
        label: eD.default.Messages.VOICE_AND_VIDEO,
        element: ex.default,
        predicate: () => j.default.isSupported()
      },
      [eR.WebSetting.POGGERMODE]: {
        section: eM.UserSettingsSections.POGGERMODE,
        label: eD.default.Messages.POGGERMODE,
        ariaLabel: eD.default.Messages.POGGERMODE,
        element: C.default,
        predicate: () => p.default.settingsVisible,
        icon: (0, a.jsx)("img", {
          alt: "",
          src: s("542156"),
          className: eL.poggermodeIcon
        })
      },
      [eR.WebSetting.CHAT]: {
        section: eM.UserSettingsSections.TEXT,
        label: eD.default.Messages.CHAT,
        element: eh.default
      },
      [eR.WebSetting.NOTIFICATIONS]: {
        section: eM.UserSettingsSections.NOTIFICATIONS,
        label: eD.default.Messages.NOTIFICATIONS,
        element: eE.default
      },
      [eR.WebSetting.KEYBINDS]: {
        section: eM.UserSettingsSections.KEYBINDS,
        label: eD.default.Messages.KEYBINDS,
        element: ec.default
      },
      [eR.WebSetting.LANGUAGE]: {
        section: eM.UserSettingsSections.LOCALE,
        label: eD.default.Messages.LANGUAGE,
        element: eS.default
      },
      [eR.WebSetting.WINDOW_SETTINGS]: {
        section: eM.UserSettingsSections.WINDOWS,
        label: eD.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: ep.default,
        predicate: () => k.isPlatformEmbedded && (0, k.isWindows)()
      },
      [eR.WebSetting.LINUX_SETTINGS]: {
        section: eM.UserSettingsSections.LINUX,
        label: eD.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: ej,
        predicate: () => k.isPlatformEmbedded && (0, k.isLinux)()
      },
      [eR.WebSetting.STREAMER_MODE]: {
        section: eM.UserSettingsSections.STREAMER_MODE,
        label: eD.default.Messages.STREAMER_MODE,
        element: eI.default
      },
      [eR.WebSetting.SPEED_TEST]: {
        section: eM.UserSettingsSections.SPEED_TEST,
        label: "Speed Test",
        element: Q.default,
        predicate: () => L.default.isSupported() && H.default.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [eR.WebSetting.SETTINGS_ADVANCED]: {
        section: eM.UserSettingsSections.ADVANCED,
        label: eD.default.Messages.SETTINGS_ADVANCED,
        element: ee.default
      },
      [eR.WebSetting.ACTIVITY_PRIVACY]: {
        section: eM.UserSettingsSections.ACTIVITY_PRIVACY,
        label: eD.default.Messages.ACTIVITY_PRIVACY,
        element: $.default,
        predicate: () => !eB
      },
      [eR.WebSetting.REGISTERED_GAMES]: {
        section: eM.UserSettingsSections.REGISTERED_GAMES,
        label: eD.default.Messages.REGISTERED_GAMES,
        element: eo.default,
        predicate: () => !eB && (0, eA.shouldShowRegisteredGamesSettings)()
      },
      [eR.WebSetting.OVERLAY]: {
        section: eM.UserSettingsSections.OVERLAY,
        label: eD.default.Messages.OVERLAY,
        element: eT.default,
        predicate: () => !eB && eU
      },
      [eR.WebSetting.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, T.openChangelog)(!0),
        label: eD.default.Messages.WHATS_NEW
      },
      [eR.WebSetting.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          F.default.track(eM.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, G.handleClick)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              F.default.track(eM.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
            }
          })
        },
        label: eD.default.Messages.MERCHANDISE,
        ariaLabel: eD.default.Messages.MERCHANDISE
      },
      [eR.WebSetting.HYPESQUAD]: {
        section: eM.UserSettingsSections.HYPESQUAD_ONLINE,
        label: eD.default.Messages.USER_SETTINGS_HYPESQUAD,
        element: ed.default
      },
      [eR.WebSetting.EXPERIMENTS]: {
        section: eM.UserSettingsSections.EXPERIMENTS,
        label: "Experiments",
        element: eC.default,
        predicate: () => P.default.isDeveloper
      },
      [eR.WebSetting.DEVELOPER_OPTIONS]: {
        section: eM.UserSettingsSections.DEVELOPER_OPTIONS,
        label: "Developer Options",
        element: el.default,
        predicate: () => P.default.isDeveloper
      },
      [eR.WebSetting.HOTSPOT_OPTIONS]: {
        section: eM.UserSettingsSections.HOTSPOT_OPTIONS,
        label: "Hotspot Options",
        element: Y.default,
        predicate: () => P.default.isDeveloper
      },
      [eR.WebSetting.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: eM.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
        label: "Dismissible Contents",
        element: I.default,
        predicate: () => P.default.isDeveloper
      },
      [eR.WebSetting.PAYMENT_FLOW_MODALS]: {
        section: eM.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
        label: "Payment Flow Modals",
        element: W.default,
        predicate: () => P.default.isDeveloper
      },
      [eR.WebSetting.TEXT_PLAYGROUND]: {
        section: eM.UserSettingsSections.TEXT_PLAYGROUND,
        label: "Text Playground",
        element: eN.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || P.default.isDeveloper
      },
      [eR.WebSetting.TEXT_COMPONENTS]: {
        section: eM.UserSettingsSections.TEXT_COMPONENT,
        label: "Text Components",
        element: q.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || P.default.isDeveloper
      },
      [eR.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: eM.UserSettingsSections.PROFILE_EFFECTS_PREVIEW_TOOL,
        label: "Profile Effects Preview Tool",
        element: _.default,
        predicate: () => P.default.isDeveloper
      },
      [eR.WebSetting.QUEST_PREVIEW_TOOL]: {
        section: eM.UserSettingsSections.QUEST_PREVIEW_TOOL,
        label: "Quest Preview Tool",
        element: D.default,
        predicate: () => (0, v.isQuestPreviewToolEnabled)({
          location: ev.QuestsExperimentLocations.QUEST_PREVIEW_TOOL
        })
      },
      [eR.WebSetting.LOGOUT]: {
        section: "logout",
        onClick: () => {
          (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
            header: eD.default.Messages.LOGOUT,
            confirmText: eD.default.Messages.LOGOUT,
            cancelText: eD.default.Messages.CANCEL,
            onCancel: e.onClose,
            onConfirm: () => d.default.logout(),
            ...e,
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: eD.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
            })
          }))
        },
        label: eD.default.Messages.LOGOUT,
        ariaLabel: eD.default.Messages.LOGOUT,
        icon: (0, a.jsx)(U.default, {
          width: 16,
          height: 16
        })
      },
      [eR.WebSetting.SOCIAL_LINKS]: {
        section: S.SectionTypes.CUSTOM,
        element: z.default
      },
      [eR.WebSetting.CLIENT_DEBUG_INFO]: {
        section: S.SectionTypes.CUSTOM,
        element: V.default
      }
    })
  }