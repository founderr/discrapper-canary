"use strict";
s.r(t), s.d(t, {
  getConfig: function() {
    return ej
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
  L = s("652380"),
  D = s("171156"),
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
  e_ = s("36192"),
  eg = s("338345"),
  eI = s("400287"),
  eh = s("554042"),
  eN = s("200645"),
  ep = s("287490"),
  eC = s("168308"),
  eA = s("277329"),
  eO = s("674116"),
  ex = s("726985"),
  eR = s("981631"),
  eM = s("46140"),
  ev = s("689938"),
  eL = s("442691");
let eD = () => {
    let e = "Settings list view",
      t = [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE];
    return A.BrandRefreshPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.BRAND_REFRESH_NEW_BADGE), O.PrideMonthPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.PRIDE_ICONS_APPEARANCE_BADGE), t
  },
  eP = eN.default,
  ej = e => {
    let {
      unseenGiftCount: t,
      showPrepaidPaymentPastDueWarning: A,
      impressionSource: O,
      numOfPendingFamilyRequests: ej,
      isOverlaySupported: eb,
      isClipsBetaTagShowing: eU = !1,
      shouldMergeGameSettings: ey
    } = e;
    return Object.freeze({
      [ex.Setting.ACCOUNT]: {
        section: eR.UserSettingsSections.ACCOUNT,
        label: ev.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: ev.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: J.default
      },
      [ex.Setting.GAMES]: {
        section: eR.UserSettingsSections.GAMES,
        label: ev.default.Messages.GAMES,
        ariaLabel: ev.default.Messages.GAMES,
        element: eA.default,
        predicate: () => ey
      },
      [ex.Setting.PROFILE_CUSTOMIZATION]: {
        section: eR.UserSettingsSections.PROFILE_CUSTOMIZATION,
        type: S.ContentTypes.WIDE,
        label: ev.default.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: ev.default.Messages.USER_SETTINGS_PROFILES,
        element: M.default,
        newIndicator: (0, a.jsx)(B.PremiumBadge, {
          text: ev.default.Messages.NEW
        }),
        notice: {
          stores: [b.default, N.default],
          element: R.default
        },
        onSettingsClose: () => {
          o.default.wait(() => {
            (0, h.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eR.UserSettingsSections.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [ex.Setting.PRIVACY_AND_SAFETY]: {
        section: eR.UserSettingsSections.PRIVACY_AND_SAFETY,
        label: ev.default.Messages.PRIVACY_AND_SAFETY,
        element: em.default
      },
      [ex.Setting.FAMILY_CENTER]: {
        section: eR.UserSettingsSections.FAMILY_CENTER,
        label: ev.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: ev.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: ei.default,
        badgeCount: ej,
        newIndicator: (0, a.jsx)(B.TextBadge, {
          text: ev.default.Messages.NEW,
          color: g.default.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
      },
      [ex.Setting.AUTHORIZED_APPS]: {
        section: eR.UserSettingsSections.AUTHORIZED_APPS,
        label: ev.default.Messages.AUTHORIZED_APPS,
        element: es.default
      },
      [ex.Setting.SESSIONS]: {
        section: eR.UserSettingsSections.SESSIONS,
        label: ev.default.Messages.AUTH_SESSIONS,
        ariaLabel: ev.default.Messages.AUTH_SESSIONS,
        element: e_.default,
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
        predicate: () => w.default.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [ex.Setting.CONNECTIONS]: {
        section: eR.UserSettingsSections.CONNECTIONS,
        label: ev.default.Messages.CONNECTIONS,
        ariaLabel: ev.default.Messages.CONNECTIONS,
        element: en.default,
        impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: O
        },
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
      },
      [ex.Setting.CLIPS]: {
        section: eR.UserSettingsSections.CLIPS,
        label: ev.default.Messages.CLIPS,
        ariaLabel: ev.default.Messages.CLIPS,
        icon: eU ? (0, a.jsx)(f.default, {}) : void 0,
        element: m.default,
        predicate: () => !ey
      },
      [ex.Setting.FRIEND_REQUESTS]: {
        section: eR.UserSettingsSections.FRIEND_REQUESTS,
        label: ev.default.Messages.FRIEND_REQUESTS,
        element: er.default
      },
      [ex.Setting.PREMIUM]: {
        section: eR.UserSettingsSections.PREMIUM,
        ariaLabel: ev.default.Messages.PREMIUM,
        label: ev.default.Messages.PREMIUM,
        element: K.default,
        className: eL.premiumTab
      },
      [ex.Setting.GUILD_BOOSTING]: {
        section: eR.UserSettingsSections.GUILD_BOOSTING,
        label: ev.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: ef.default
      },
      [ex.Setting.SUBSCRIPTIONS]: {
        section: eR.UserSettingsSections.SUBSCRIPTIONS,
        ariaLabel: ev.default.Messages.SUBSCRIPTIONS_TITLE,
        label: ev.default.Messages.SUBSCRIPTIONS_TITLE,
        element: x.default,
        icon: A ? (0, a.jsx)(y.default, {
          width: 16,
          height: 16,
          color: i.default.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [ex.Setting.GIFT_INVENTORY]: {
        section: eR.UserSettingsSections.INVENTORY,
        label: ev.default.Messages.GIFT_INVENTORY,
        element: eu.default,
        ariaLabel: ev.default.Messages.GIFT_INVENTORY,
        badgeCount: t
      },
      [ex.Setting.BILLING]: {
        section: eR.UserSettingsSections.BILLING,
        label: ev.default.Messages.BILLING,
        element: ea.default
      },
      [ex.Setting.APPEARANCE]: {
        section: eR.UserSettingsSections.APPEARANCE,
        label: ev.default.Messages.APPEARANCE,
        ariaLabel: ev.default.Messages.APPEARANCE,
        element: et.default,
        newIndicator: (0, a.jsx)(B.PremiumBadge, {
          text: ev.default.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: eD()
      },
      [ex.Setting.ACCESSIBILITY]: {
        section: eR.UserSettingsSections.ACCESSIBILITY,
        label: ev.default.Messages.ACCESSIBILITY,
        element: X.default
      },
      [ex.Setting.VOICE_AND_VIDEO]: {
        section: eR.UserSettingsSections.VOICE,
        label: ev.default.Messages.VOICE_AND_VIDEO,
        element: eO.default,
        predicate: () => j.default.isSupported()
      },
      [ex.Setting.POGGERMODE]: {
        section: eR.UserSettingsSections.POGGERMODE,
        label: ev.default.Messages.POGGERMODE,
        ariaLabel: ev.default.Messages.POGGERMODE,
        element: C.default,
        predicate: () => p.default.settingsVisible,
        icon: (0, a.jsx)("img", {
          alt: "",
          src: s("542156"),
          className: eL.poggermodeIcon
        })
      },
      [ex.Setting.CHAT]: {
        section: eR.UserSettingsSections.TEXT,
        label: ev.default.Messages.CHAT,
        element: eI.default
      },
      [ex.Setting.NOTIFICATIONS]: {
        section: eR.UserSettingsSections.NOTIFICATIONS,
        label: ev.default.Messages.NOTIFICATIONS,
        element: eE.default
      },
      [ex.Setting.KEYBINDS]: {
        section: eR.UserSettingsSections.KEYBINDS,
        label: ev.default.Messages.KEYBINDS,
        element: ec.default
      },
      [ex.Setting.LANGUAGE]: {
        section: eR.UserSettingsSections.LOCALE,
        label: ev.default.Messages.LANGUAGE,
        element: eS.default
      },
      [ex.Setting.WINDOW_SETTINGS]: {
        section: eR.UserSettingsSections.WINDOWS,
        label: ev.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: eN.default,
        predicate: () => k.isPlatformEmbedded && (0, k.isWindows)()
      },
      [ex.Setting.LINUX_SETTINGS]: {
        section: eR.UserSettingsSections.LINUX,
        label: ev.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: eP,
        predicate: () => k.isPlatformEmbedded && (0, k.isLinux)()
      },
      [ex.Setting.STREAMER_MODE]: {
        section: eR.UserSettingsSections.STREAMER_MODE,
        label: ev.default.Messages.STREAMER_MODE,
        element: eg.default
      },
      [ex.Setting.SPEED_TEST]: {
        section: eR.UserSettingsSections.SPEED_TEST,
        label: "Speed Test",
        element: Q.default,
        predicate: () => D.default.isSupported() && H.default.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [ex.Setting.SETTINGS_ADVANCED]: {
        section: eR.UserSettingsSections.ADVANCED,
        label: ev.default.Messages.SETTINGS_ADVANCED,
        element: ee.default
      },
      [ex.Setting.ACTIVITY_PRIVACY]: {
        section: eR.UserSettingsSections.ACTIVITY_PRIVACY,
        label: ev.default.Messages.ACTIVITY_PRIVACY,
        element: $.default,
        predicate: () => !ey
      },
      [ex.Setting.REGISTERED_GAMES]: {
        section: eR.UserSettingsSections.REGISTERED_GAMES,
        label: ev.default.Messages.REGISTERED_GAMES,
        element: eo.default,
        predicate: () => !ey && (0, eC.shouldShowRegisteredGamesSettings)()
      },
      [ex.Setting.OVERLAY]: {
        section: eR.UserSettingsSections.OVERLAY,
        label: ev.default.Messages.OVERLAY,
        element: eT.default,
        predicate: () => !ey && eb
      },
      [ex.Setting.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, T.openChangelog)(!0),
        label: ev.default.Messages.WHATS_NEW
      },
      [ex.Setting.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          F.default.track(eR.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, G.handleClick)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              F.default.track(eR.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
            }
          })
        },
        label: ev.default.Messages.MERCHANDISE,
        ariaLabel: ev.default.Messages.MERCHANDISE
      },
      [ex.Setting.HYPESQUAD]: {
        section: eR.UserSettingsSections.HYPESQUAD_ONLINE,
        label: ev.default.Messages.USER_SETTINGS_HYPESQUAD,
        element: ed.default
      },
      [ex.Setting.EXPERIMENTS]: {
        section: eR.UserSettingsSections.EXPERIMENTS,
        label: "Experiments",
        element: ep.default,
        predicate: () => P.default.isDeveloper
      },
      [ex.Setting.DEVELOPER_OPTIONS]: {
        section: eR.UserSettingsSections.DEVELOPER_OPTIONS,
        label: "Developer Options",
        element: el.default,
        predicate: () => P.default.isDeveloper
      },
      [ex.Setting.HOTSPOT_OPTIONS]: {
        section: eR.UserSettingsSections.HOTSPOT_OPTIONS,
        label: "Hotspot Options",
        element: Y.default,
        predicate: () => P.default.isDeveloper
      },
      [ex.Setting.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: eR.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
        label: "Dismissible Contents",
        element: I.default,
        predicate: () => P.default.isDeveloper
      },
      [ex.Setting.PAYMENT_FLOW_MODALS]: {
        section: eR.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
        label: "Payment Flow Modals",
        element: W.default,
        predicate: () => P.default.isDeveloper
      },
      [ex.Setting.TEXT_PLAYGROUND]: {
        section: eR.UserSettingsSections.TEXT_PLAYGROUND,
        label: "Text Playground",
        element: eh.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || P.default.isDeveloper
      },
      [ex.Setting.TEXT_COMPONENTS]: {
        section: eR.UserSettingsSections.TEXT_COMPONENT,
        label: "Text Components",
        element: q.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || P.default.isDeveloper
      },
      [ex.Setting.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: eR.UserSettingsSections.PROFILE_EFFECTS_PREVIEW_TOOL,
        label: "Profile Effects Preview Tool",
        element: _.default,
        predicate: () => P.default.isDeveloper
      },
      [ex.Setting.QUEST_PREVIEW_TOOL]: {
        section: eR.UserSettingsSections.QUEST_PREVIEW_TOOL,
        label: "Quest Preview Tool",
        element: L.default,
        predicate: () => (0, v.isQuestPreviewToolEnabled)({
          location: eM.QuestsExperimentLocations.QUEST_PREVIEW_TOOL
        })
      },
      [ex.Setting.LOGOUT]: {
        section: "logout",
        onClick: () => {
          (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
            header: ev.default.Messages.LOGOUT,
            confirmText: ev.default.Messages.LOGOUT,
            cancelText: ev.default.Messages.CANCEL,
            onCancel: e.onClose,
            onConfirm: () => d.default.logout(),
            ...e,
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: ev.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
            })
          }))
        },
        label: ev.default.Messages.LOGOUT,
        ariaLabel: ev.default.Messages.LOGOUT,
        icon: (0, a.jsx)(U.default, {
          width: 16,
          height: 16
        })
      },
      [ex.Setting.SOCIAL_LINKS]: {
        section: S.SectionTypes.CUSTOM,
        element: z.default
      },
      [ex.Setting.CLIENT_DEBUG_INFO]: {
        section: S.SectionTypes.CUSTOM,
        element: V.default
      }
    })
  }