"use strict";
s.r(t), s.d(t, {
  getConfig: function() {
    return ey
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
  _ = s("703288"),
  f = s("574755"),
  m = s("425799"),
  g = s("377171"),
  I = s("621628"),
  N = s("18438"),
  h = s("778825"),
  C = s("351780"),
  p = s("231765"),
  A = s("837741"),
  O = s("804545"),
  x = s("813732"),
  R = s("398140"),
  M = s("564344"),
  v = s("977156"),
  D = s("652380"),
  L = s("171156"),
  P = s("906467"),
  b = s("131951"),
  j = s("25990"),
  U = s("87086"),
  y = s("759231"),
  G = s("26290"),
  B = s("626135"),
  F = s("49012"),
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
  el = s("177508"),
  ei = s("956699"),
  er = s("54942"),
  eo = s("15780"),
  ed = s("293389"),
  eu = s("88624"),
  ec = s("387747"),
  eS = s("389650"),
  eE = s("649157"),
  eT = s("593648"),
  e_ = s("327885"),
  ef = s("595242"),
  em = s("301121"),
  eg = s("207874"),
  eI = s("463153"),
  eN = s("36192"),
  eh = s("338345"),
  eC = s("400287"),
  ep = s("554042"),
  eA = s("200645"),
  eO = s("287490"),
  ex = s("168308"),
  eR = s("277329"),
  eM = s("674116"),
  ev = s("726985"),
  eD = s("981631"),
  eL = s("46140"),
  eP = s("689938"),
  eb = s("442691");
let ej = () => {
    let e = "Settings list view",
      t = [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE];
    return A.BrandRefreshPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.BRAND_REFRESH_NEW_BADGE), O.PrideMonthPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.PRIDE_ICONS_APPEARANCE_BADGE), t
  },
  eU = eA.default,
  ey = e => {
    let {
      unseenGiftCount: t,
      showPrepaidPaymentPastDueWarning: A,
      impressionSource: O,
      numOfPendingFamilyRequests: ey,
      isOverlaySupported: eG,
      isClipsBetaTagShowing: eB = !1,
      shouldMergeGameSettings: eF,
      isUserSettingsSearchEnabled: ek
    } = e;
    return Object.freeze({
      [ev.WebSetting.SEARCH_BAR]: {
        section: S.SectionTypes.CUSTOM,
        element: eg.default,
        predicate: () => ek
      },
      [ev.WebSetting.SEARCH_NO_RESULTS]: {
        section: S.SectionTypes.CUSTOM,
        element: eI.default,
        predicate: () => ek
      },
      [ev.WebSetting.ACCOUNT]: {
        section: eD.UserSettingsSections.ACCOUNT,
        searchableTitle: eP.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        label: eP.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: eP.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.ACCOUNT_PROFILE]: {
        searchableTitle: eP.default.Messages.PROFILE,
        parent: ev.WebSetting.ACCOUNT,
        section: eD.UserSettingsSections.ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.DISPLAY_NAME]: {
        searchableTitle: eP.default.Messages.DISPLAY_NAME,
        section: eD.UserSettingsSections.ACCOUNT,
        parent: ev.WebSetting.ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.PHONE_NUMBER]: {
        searchableTitle: eP.default.Messages.CHANGE_PHONE_NUMBER,
        section: eD.UserSettingsSections.ACCOUNT,
        parent: ev.WebSetting.ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.USERNAME]: {
        searchableTitle: eP.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE,
        section: eD.UserSettingsSections.ACCOUNT,
        parent: ev.WebSetting.ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.ACCOUNT_EMAIL]: {
        searchableTitle: eP.default.Messages.CHANGE_EMAIL,
        section: eD.UserSettingsSections.ACCOUNT,
        parent: ev.WebSetting.ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.PASSWORD_AND_AUTHENTICATION]: {
        section: ev.WebSetting.ACCOUNT,
        parent: ev.WebSetting.ACCOUNT,
        searchableTitle: eP.default.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION,
        element: J.default
      },
      [ev.WebSetting.ACCOUNT_CHANGE_PASSWORD]: {
        searchableTitle: eP.default.Messages.CHANGE_PASSWORD,
        section: ev.WebSetting.ACCOUNT,
        parent: ev.WebSetting.ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.ACCOUNT_CONFIRM_PASSWORD]: {
        searchableTitle: eP.default.Messages.FORM_LABEL_CONFIRM_PASSWORD,
        section: ev.WebSetting.ACCOUNT,
        parent: ev.WebSetting.ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.MULTI_FACTOR_AUTHENTICATION]: {
        searchableTitle: eP.default.Messages.SETTINGS_TWO_FA,
        section: ev.WebSetting.ACCOUNT,
        parent: ev.WebSetting.ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.ACCOUNT_ENABLE_2FA]: {
        searchableTitle: eP.default.Messages.TWO_FA_ENABLE,
        section: ev.WebSetting.ACCOUNT,
        parent: ev.WebSetting.ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.ACCOUNT_REMOVE_2FA]: {
        searchableTitle: eP.default.Messages.TWO_FA_REMOVE,
        section: ev.WebSetting.ACCOUNT,
        parent: ev.WebSetting.ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.ACCOUNT_VIEW_BACKUP_CODES]: {
        searchableTitle: eP.default.Messages.TWO_FA_BACKUP_CODE,
        section: ev.WebSetting.ACCOUNT,
        parent: ev.WebSetting.ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.ACCOUNT_SMS_BACKUP]: {
        searchableTitle: eP.default.Messages.MFA_SMS_AUTH,
        section: ev.WebSetting.ACCOUNT,
        parent: ev.WebSetting.ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.ACCOUNT_REMOVAL]: {
        section: eD.UserSettingsSections.ACCOUNT,
        searchableTitle: eP.default.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION,
        parent: ev.WebSetting.ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.DELETE_ACCOUNT]: {
        section: eD.UserSettingsSections.ACCOUNT,
        searchableTitle: eP.default.Messages.DELETE_ACCOUNT,
        parent: ev.WebSetting.ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.DISABLE_ACCOUNT]: {
        section: eD.UserSettingsSections.ACCOUNT,
        searchableTitle: eP.default.Messages.DISABLE_ACCOUNT,
        parent: ev.WebSetting.ACCOUNT,
        element: J.default
      },
      [ev.WebSetting.GAMES]: {
        section: eD.UserSettingsSections.GAMES,
        searchableTitle: eP.default.Messages.GAMES,
        label: eP.default.Messages.GAMES,
        ariaLabel: eP.default.Messages.GAMES,
        element: eR.default,
        predicate: () => eF
      },
      [ev.WebSetting.PROFILE_CUSTOMIZATION]: {
        section: eD.UserSettingsSections.PROFILE_CUSTOMIZATION,
        type: S.ContentTypes.WIDE,
        searchableTitle: eP.default.Messages.USER_SETTINGS_PROFILES,
        label: eP.default.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: eP.default.Messages.USER_SETTINGS_PROFILES,
        element: M.default,
        newIndicator: (0, a.jsx)(G.PremiumBadge, {
          text: eP.default.Messages.NEW
        }),
        notice: {
          stores: [j.default, h.default],
          element: R.default
        },
        onSettingsClose: () => {
          o.default.wait(() => {
            (0, N.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eD.UserSettingsSections.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [ev.WebSetting.PRIVACY_AND_SAFETY]: {
        section: eD.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eP.default.Messages.PRIVACY_AND_SAFETY,
        label: eP.default.Messages.PRIVACY_AND_SAFETY,
        element: em.default
      },
      [ev.WebSetting.FAMILY_CENTER]: {
        section: eD.UserSettingsSections.FAMILY_CENTER,
        searchableTitle: eP.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        label: eP.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: eP.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: er.default,
        badgeCount: ey,
        newIndicator: (0, a.jsx)(G.TextBadge, {
          text: eP.default.Messages.NEW,
          color: g.default.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
      },
      [ev.WebSetting.AUTHORIZED_APPS]: {
        section: eD.UserSettingsSections.AUTHORIZED_APPS,
        searchableTitle: eP.default.Messages.AUTHORIZED_APPS,
        label: eP.default.Messages.AUTHORIZED_APPS,
        element: es.default
      },
      [ev.WebSetting.SESSIONS]: {
        section: eD.UserSettingsSections.SESSIONS,
        searchableTitle: eP.default.Messages.AUTH_SESSIONS,
        label: eP.default.Messages.AUTH_SESSIONS,
        ariaLabel: eP.default.Messages.AUTH_SESSIONS,
        element: eN.default,
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
        predicate: () => w.default.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [ev.WebSetting.CONNECTIONS]: {
        section: eD.UserSettingsSections.CONNECTIONS,
        searchableTitle: eP.default.Messages.CONNECTIONS,
        label: eP.default.Messages.CONNECTIONS,
        ariaLabel: eP.default.Messages.CONNECTIONS,
        element: en.default,
        impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: O
        },
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
      },
      [ev.WebSetting.CLIPS]: {
        section: eD.UserSettingsSections.CLIPS,
        searchableTitle: eP.default.Messages.CLIPS,
        label: eP.default.Messages.CLIPS,
        ariaLabel: eP.default.Messages.CLIPS,
        icon: eB ? (0, a.jsx)(_.default, {}) : void 0,
        element: f.default,
        predicate: () => !eF
      },
      [ev.WebSetting.FRIEND_REQUESTS]: {
        section: eD.UserSettingsSections.FRIEND_REQUESTS,
        searchableTitle: eP.default.Messages.FRIEND_REQUESTS,
        label: eP.default.Messages.FRIEND_REQUESTS,
        element: eo.default
      },
      [ev.WebSetting.PREMIUM]: {
        section: eD.UserSettingsSections.PREMIUM,
        ariaLabel: eP.default.Messages.PREMIUM,
        searchableTitle: eP.default.Messages.PREMIUM,
        label: eP.default.Messages.PREMIUM,
        element: K.default,
        className: eb.premiumTab
      },
      [ev.WebSetting.GUILD_BOOSTING]: {
        section: eD.UserSettingsSections.GUILD_BOOSTING,
        searchableTitle: eP.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        label: eP.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: ef.default
      },
      [ev.WebSetting.SUBSCRIPTIONS]: {
        section: eD.UserSettingsSections.SUBSCRIPTIONS,
        ariaLabel: eP.default.Messages.SUBSCRIPTIONS_TITLE,
        searchableTitle: eP.default.Messages.SUBSCRIPTIONS_TITLE,
        label: eP.default.Messages.SUBSCRIPTIONS_TITLE,
        element: x.default,
        icon: A ? (0, a.jsx)(y.default, {
          width: 16,
          height: 16,
          color: i.default.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [ev.WebSetting.GIFT_INVENTORY]: {
        section: eD.UserSettingsSections.INVENTORY,
        searchableTitle: eP.default.Messages.GIFT_INVENTORY,
        label: eP.default.Messages.GIFT_INVENTORY,
        element: ec.default,
        ariaLabel: eP.default.Messages.GIFT_INVENTORY,
        badgeCount: t
      },
      [ev.WebSetting.BILLING]: {
        section: eD.UserSettingsSections.BILLING,
        searchableTitle: eP.default.Messages.BILLING,
        label: eP.default.Messages.BILLING,
        element: ea.default
      },
      [ev.WebSetting.APPEARANCE]: {
        section: eD.UserSettingsSections.APPEARANCE,
        searchableTitle: eP.default.Messages.APPEARANCE,
        label: eP.default.Messages.APPEARANCE,
        ariaLabel: eP.default.Messages.APPEARANCE,
        element: et.default,
        newIndicator: (0, a.jsx)(G.PremiumBadge, {
          text: eP.default.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: ej()
      },
      [ev.WebSetting.ACCESSIBILITY]: {
        section: eD.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eP.default.Messages.ACCESSIBILITY,
        label: eP.default.Messages.ACCESSIBILITY,
        element: X.default
      },
      [ev.WebSetting.VOICE_AND_VIDEO]: {
        section: eD.UserSettingsSections.VOICE,
        searchableTitle: eP.default.Messages.VOICE_AND_VIDEO,
        label: eP.default.Messages.VOICE_AND_VIDEO,
        element: eM.default,
        predicate: () => b.default.isSupported()
      },
      [ev.WebSetting.POGGERMODE]: {
        section: eD.UserSettingsSections.POGGERMODE,
        searchableTitle: eP.default.Messages.POGGERMODE,
        label: eP.default.Messages.POGGERMODE,
        ariaLabel: eP.default.Messages.POGGERMODE,
        element: p.default,
        predicate: () => C.default.settingsVisible,
        icon: (0, a.jsx)("img", {
          alt: "",
          src: s("542156"),
          className: eb.poggermodeIcon
        })
      },
      [ev.WebSetting.CHAT]: {
        section: eD.UserSettingsSections.TEXT,
        searchableTitle: eP.default.Messages.CHAT,
        label: eP.default.Messages.CHAT,
        element: eC.default
      },
      [ev.WebSetting.NOTIFICATIONS]: {
        section: eD.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eP.default.Messages.NOTIFICATIONS,
        label: eP.default.Messages.NOTIFICATIONS,
        element: eT.default
      },
      [ev.WebSetting.KEYBINDS]: {
        section: eD.UserSettingsSections.KEYBINDS,
        searchableTitle: eP.default.Messages.KEYBINDS,
        label: eP.default.Messages.KEYBINDS,
        element: eS.default
      },
      [ev.WebSetting.LANGUAGE]: {
        section: eD.UserSettingsSections.LOCALE,
        searchableTitle: eP.default.Messages.LANGUAGE,
        label: eP.default.Messages.LANGUAGE,
        element: eE.default
      },
      [ev.WebSetting.WINDOW_SETTINGS]: {
        section: eD.UserSettingsSections.WINDOWS,
        searchableTitle: eP.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        label: eP.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: eA.default,
        predicate: () => k.isPlatformEmbedded && (0, k.isWindows)()
      },
      [ev.WebSetting.LINUX_SETTINGS]: {
        section: eD.UserSettingsSections.LINUX,
        searchableTitle: eP.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        label: eP.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: eU,
        predicate: () => k.isPlatformEmbedded && (0, k.isLinux)()
      },
      [ev.WebSetting.STREAMER_MODE]: {
        section: eD.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eP.default.Messages.STREAMER_MODE,
        label: eP.default.Messages.STREAMER_MODE,
        element: eh.default
      },
      [ev.WebSetting.SPEED_TEST]: {
        section: eD.UserSettingsSections.SPEED_TEST,
        searchableTitle: "Speed Test",
        label: "Speed Test",
        element: Q.default,
        predicate: () => L.default.isSupported() && H.default.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [ev.WebSetting.SETTINGS_ADVANCED]: {
        section: eD.UserSettingsSections.ADVANCED,
        searchableTitle: eP.default.Messages.SETTINGS_ADVANCED,
        label: eP.default.Messages.SETTINGS_ADVANCED,
        element: ee.default
      },
      [ev.WebSetting.ACTIVITY_PRIVACY]: {
        section: eD.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: eP.default.Messages.ACTIVITY_PRIVACY,
        label: eP.default.Messages.ACTIVITY_PRIVACY,
        element: $.default,
        predicate: () => !eF
      },
      [ev.WebSetting.REGISTERED_GAMES]: {
        section: eD.UserSettingsSections.REGISTERED_GAMES,
        searchableTitle: eP.default.Messages.REGISTERED_GAMES,
        label: eP.default.Messages.REGISTERED_GAMES,
        element: ed.default,
        predicate: () => !eF && (0, ex.shouldShowRegisteredGamesSettings)()
      },
      [ev.WebSetting.OVERLAY]: {
        section: eD.UserSettingsSections.OVERLAY,
        searchableTitle: eP.default.Messages.OVERLAY,
        label: eP.default.Messages.OVERLAY,
        element: e_.default,
        predicate: () => !eF && eG
      },
      [ev.WebSetting.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, T.openChangelog)(!0),
        searchableTitle: eP.default.Messages.WHATS_NEW,
        label: eP.default.Messages.WHATS_NEW
      },
      [ev.WebSetting.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          B.default.track(eD.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, F.handleClick)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              B.default.track(eD.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
            }
          })
        },
        searchableTitle: eP.default.Messages.MERCHANDISE,
        label: eP.default.Messages.MERCHANDISE,
        ariaLabel: eP.default.Messages.MERCHANDISE
      },
      [ev.WebSetting.HYPESQUAD]: {
        section: eD.UserSettingsSections.HYPESQUAD_ONLINE,
        searchableTitle: eP.default.Messages.USER_SETTINGS_HYPESQUAD,
        label: eP.default.Messages.USER_SETTINGS_HYPESQUAD,
        element: eu.default
      },
      [ev.WebSetting.EXPERIMENTS]: {
        section: eD.UserSettingsSections.EXPERIMENTS,
        searchableTitle: "Experiments",
        label: "Experiments",
        element: eO.default,
        predicate: () => P.default.isDeveloper
      },
      [ev.WebSetting.DEVELOPER_OPTIONS]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Developer Options",
        label: "Developer Options",
        element: ei.default,
        predicate: () => P.default.isDeveloper
      },
      [ev.WebSetting.HOTSPOT_OPTIONS]: {
        section: eD.UserSettingsSections.HOTSPOT_OPTIONS,
        searchableTitle: "Hotspot Options",
        label: "Hotspot Options",
        element: Y.default,
        predicate: () => P.default.isDeveloper
      },
      [ev.WebSetting.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: eD.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
        searchableTitle: "Dismissible Contents",
        label: "Dismissible Contents",
        element: I.default,
        predicate: () => P.default.isDeveloper
      },
      [ev.WebSetting.PAYMENT_FLOW_MODALS]: {
        section: eD.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
        searchableTitle: "Payment Flow Modals",
        label: "Payment Flow Modals",
        element: W.default,
        predicate: () => P.default.isDeveloper
      },
      [ev.WebSetting.TEXT_PLAYGROUND]: {
        section: eD.UserSettingsSections.TEXT_PLAYGROUND,
        searchableTitle: "Text Playground",
        label: "Text Playground",
        element: ep.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || P.default.isDeveloper
      },
      [ev.WebSetting.DESIGN_SYSTEMS]: {
        section: eD.UserSettingsSections.DESIGN_SYSTEMS,
        label: "Design Systems",
        element: el.default,
        predicate: () => P.default.isDeveloper
      },
      [ev.WebSetting.TEXT_COMPONENTS]: {
        section: eD.UserSettingsSections.TEXT_COMPONENT,
        searchableTitle: "Text Components",
        label: "Text Components",
        element: q.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || P.default.isDeveloper
      },
      [ev.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: eD.UserSettingsSections.PROFILE_EFFECTS_PREVIEW_TOOL,
        searchableTitle: "Profile Effects Preview Tool",
        label: "Profile Effects Preview Tool",
        element: m.default,
        predicate: () => P.default.isDeveloper
      },
      [ev.WebSetting.QUEST_PREVIEW_TOOL]: {
        section: eD.UserSettingsSections.QUEST_PREVIEW_TOOL,
        searchableTitle: "Quest Preview Tool",
        label: "Quest Preview Tool",
        element: D.default,
        predicate: () => (0, v.isQuestPreviewToolEnabled)({
          location: eL.QuestsExperimentLocations.QUEST_PREVIEW_TOOL
        })
      },
      [ev.WebSetting.LOGOUT]: {
        section: "logout",
        onClick: () => {
          (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
            header: eP.default.Messages.LOGOUT,
            confirmText: eP.default.Messages.LOGOUT,
            cancelText: eP.default.Messages.CANCEL,
            onCancel: e.onClose,
            onConfirm: () => d.default.logout(),
            ...e,
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: eP.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
            })
          }))
        },
        label: eP.default.Messages.LOGOUT,
        ariaLabel: eP.default.Messages.LOGOUT,
        icon: (0, a.jsx)(U.default, {
          width: 16,
          height: 16
        })
      },
      [ev.WebSetting.SOCIAL_LINKS]: {
        section: S.SectionTypes.CUSTOM,
        element: z.default
      },
      [ev.WebSetting.CLIENT_DEBUG_INFO]: {
        section: S.SectionTypes.CUSTOM,
        element: V.default
      }
    })
  }