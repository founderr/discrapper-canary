"use strict";
s.r(t), s.d(t, {
  getConfig: function() {
    return eF
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
  I = s("377171"),
  g = s("621628"),
  N = s("18438"),
  h = s("778825"),
  C = s("351780"),
  O = s("231765"),
  A = s("837741"),
  p = s("804545"),
  R = s("813732"),
  x = s("398140"),
  M = s("564344"),
  D = s("977156"),
  L = s("652380"),
  P = s("171156"),
  v = s("906467"),
  b = s("131951"),
  j = s("25990"),
  U = s("87086"),
  F = s("759231"),
  G = s("26290"),
  y = s("626135"),
  B = s("49012"),
  k = s("358085"),
  V = s("392735"),
  H = s("61160"),
  w = s("604227"),
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
  eI = s("207874"),
  eg = s("463153"),
  eN = s("36192"),
  eh = s("338345"),
  eC = s("400287"),
  eO = s("554042"),
  eA = s("200645"),
  ep = s("287490"),
  eR = s("168308"),
  ex = s("277329"),
  eM = s("674116"),
  eD = s("726985"),
  eL = s("981631"),
  eP = s("46140"),
  ev = s("689938"),
  eb = s("442691");
let ej = () => {
    let e = "Settings list view",
      t = [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE];
    return A.BrandRefreshPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.BRAND_REFRESH_NEW_BADGE), p.PrideMonthPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.PRIDE_ICONS_APPEARANCE_BADGE), t
  },
  eU = eA.default,
  eF = e => {
    let {
      unseenGiftCount: t,
      showPrepaidPaymentPastDueWarning: A,
      impressionSource: p,
      numOfPendingFamilyRequests: eF,
      isOverlaySupported: eG,
      isClipsBetaTagShowing: ey = !1,
      shouldMergeGameSettings: eB,
      isUserSettingsSearchEnabled: ek
    } = e;
    return Object.freeze({
      [eD.WebSetting.SEARCH_BAR]: {
        section: S.SectionTypes.CUSTOM,
        element: eI.default,
        predicate: () => ek
      },
      [eD.WebSetting.SEARCH_NO_RESULTS]: {
        section: S.SectionTypes.CUSTOM,
        element: eg.default,
        predicate: () => ek
      },
      [eD.WebSetting.ACCOUNT]: {
        section: eL.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        label: ev.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: ev.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: J.default
      },
      [eD.WebSetting.ACCOUNT_PROFILE]: {
        searchableTitle: ev.default.Messages.PROFILE,
        parent: eD.WebSetting.ACCOUNT,
        section: eL.UserSettingsSections.ACCOUNT
      },
      [eD.WebSetting.ACCOUNT_DISPLAY_NAME]: {
        searchableTitle: ev.default.Messages.DISPLAY_NAME,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_PROFILE
      },
      [eD.WebSetting.ACCOUNT_PHONE_NUMBER]: {
        searchableTitle: ev.default.Messages.CHANGE_PHONE_NUMBER,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_PROFILE
      },
      [eD.WebSetting.ACCOUNT_USERNAME]: {
        searchableTitle: ev.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_PROFILE
      },
      [eD.WebSetting.ACCOUNT_EMAIL]: {
        searchableTitle: ev.default.Messages.CHANGE_EMAIL,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_PROFILE
      },
      [eD.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT,
        searchableTitle: ev.default.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_CHANGE_PASSWORD]: {
        searchableTitle: ev.default.Messages.CHANGE_PASSWORD,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_CONFIRM_PASSWORD]: {
        searchableTitle: ev.default.Messages.FORM_LABEL_CONFIRM_PASSWORD,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
        searchableTitle: ev.default.Messages.SETTINGS_TWO_FA,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_ENABLE_2FA]: {
        searchableTitle: ev.default.Messages.TWO_FA_ENABLE,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_REMOVE_2FA]: {
        searchableTitle: ev.default.Messages.TWO_FA_REMOVE,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_VIEW_BACKUP_CODES]: {
        searchableTitle: ev.default.Messages.TWO_FA_BACKUP_CODE,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_SMS_BACKUP]: {
        searchableTitle: ev.default.Messages.MFA_SMS_AUTH,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_SECURITY_KEYS]: {
        searchableTitle: ev.default.Messages.TWO_FA_WEBAUTHN_REGISTER,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_REMOVAL]: {
        section: eL.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION,
        parent: eD.WebSetting.ACCOUNT
      },
      [eD.WebSetting.ACCOUNT_DISABLE_ACCOUNT]: {
        section: eL.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.DISABLE_ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_REMOVAL
      },
      [eD.WebSetting.ACCOUNT_DELETE_ACCOUNT]: {
        section: eL.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.DELETE_ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_DISABLE_ACCOUNT
      },
      [eD.WebSetting.GAMES]: {
        section: eL.UserSettingsSections.GAMES,
        searchableTitle: ev.default.Messages.GAMES,
        label: ev.default.Messages.GAMES,
        ariaLabel: ev.default.Messages.GAMES,
        element: ex.default,
        predicate: () => eB
      },
      [eD.WebSetting.PROFILE_CUSTOMIZATION]: {
        section: eL.UserSettingsSections.PROFILE_CUSTOMIZATION,
        type: S.ContentTypes.WIDE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_PROFILES,
        label: ev.default.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: ev.default.Messages.USER_SETTINGS_PROFILES,
        element: M.default,
        newIndicator: (0, a.jsx)(G.PremiumBadge, {
          text: ev.default.Messages.NEW
        }),
        notice: {
          stores: [j.default, h.default],
          element: x.default
        },
        onSettingsClose: () => {
          o.default.wait(() => {
            (0, N.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eL.UserSettingsSections.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [eD.WebSetting.PROFILE_DISPLAY_NAME]: {
        section: eL.UserSettingsSections.PROFILE_CUSTOMIZATION,
        searchableTitle: ev.default.Messages.DISPLAY_NAME,
        parent: eD.WebSetting.PROFILE_CUSTOMIZATION
      },
      [eD.WebSetting.PROFILE_SERVER_PROFILES]: {
        section: eL.UserSettingsSections.PROFILE_CUSTOMIZATION,
        searchableTitle: ev.default.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY,
        parent: eD.WebSetting.PROFILE_CUSTOMIZATION
      },
      [eD.WebSetting.PRIVACY_AND_SAFETY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.PRIVACY_AND_SAFETY,
        label: ev.default.Messages.PRIVACY_AND_SAFETY,
        ariaLabel: ev.default.Messages.PRIVACY_AND_SAFETY,
        element: em.default
      },
      [eD.WebSetting.PRIVACY_SENSITIVE_MEDIA]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER,
        parent: eD.WebSetting.PRIVACY_AND_SAFETY
      },
      [eD.WebSetting.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.SETTINGS_DM_SPAM_FILTER,
        parent: eD.WebSetting.PRIVACY_AND_SAFETY
      },
      [eD.WebSetting.PRIVACY_SERVER_PRIVACY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_DM_SETTINGS_TITLE,
        parent: eD.WebSetting.PRIVACY_AND_SAFETY
      },
      [eD.WebSetting.PRIVACY_DATA_PRIVACY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.SETTINGS_DATA_PRIVACY_CONTROLS,
        parent: eD.WebSetting.PRIVACY_AND_SAFETY
      },
      [eD.WebSetting.PRIVACY_STAFF_ONLY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER,
        parent: eD.WebSetting.PRIVACY_AND_SAFETY
      },
      [eD.WebSetting.PRIVACY_ACCOUNT_STANDING]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
        parent: eD.WebSetting.PRIVACY_AND_SAFETY
      },
      [eD.WebSetting.PRIVACY_KEYWORD_FILTER]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_DESCRIPTION,
        parent: eD.WebSetting.PRIVACY_AND_SAFETY
      },
      [eD.WebSetting.PRIVACY_KEYWORD_FILTER_PROFANITY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_TITLE,
        parent: eD.WebSetting.PRIVACY_KEYWORD_FILTER
      },
      [eD.WebSetting.PRIVACY_KEYWORD_FILTER_INSULTS_SLURS]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_SLURS_TITLE,
        parent: eD.WebSetting.PRIVACY_KEYWORD_FILTER
      },
      [eD.WebSetting.PRIVACY_KEYWORD_FILTER_SEXUAL_CONTENT]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_TITLE,
        parent: eD.WebSetting.PRIVACY_KEYWORD_FILTER
      },
      [eD.WebSetting.PRIVACY_FAMILY_CENTER]: {
        section: eL.UserSettingsSections.FAMILY_CENTER,
        searchableTitle: ev.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        label: ev.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: ev.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: er.default,
        badgeCount: eF,
        newIndicator: (0, a.jsx)(G.TextBadge, {
          text: ev.default.Messages.NEW,
          color: I.default.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
      },
      [eD.WebSetting.AUTHORIZED_APPS]: {
        section: eL.UserSettingsSections.AUTHORIZED_APPS,
        searchableTitle: ev.default.Messages.AUTHORIZED_APPS,
        label: ev.default.Messages.AUTHORIZED_APPS,
        element: es.default
      },
      [eD.WebSetting.SESSIONS]: {
        section: eL.UserSettingsSections.SESSIONS,
        searchableTitle: ev.default.Messages.AUTH_SESSIONS,
        label: ev.default.Messages.AUTH_SESSIONS,
        ariaLabel: ev.default.Messages.AUTH_SESSIONS,
        element: eN.default,
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
        predicate: () => V.default.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [eD.WebSetting.CONNECTIONS]: {
        section: eL.UserSettingsSections.CONNECTIONS,
        searchableTitle: ev.default.Messages.CONNECTIONS,
        label: ev.default.Messages.CONNECTIONS,
        ariaLabel: ev.default.Messages.CONNECTIONS,
        element: en.default,
        impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: p
        },
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
      },
      [eD.WebSetting.CONNECTIONS_CONNECTED_ACCOUNTS]: {
        section: eL.UserSettingsSections.CONNECTIONS,
        searchableTitle: ev.default.Messages.CONNECTED_ACCOUNTS,
        parent: eD.WebSetting.CONNECTIONS,
        element: en.default
      },
      [eD.WebSetting.CLIPS]: {
        section: eL.UserSettingsSections.CLIPS,
        searchableTitle: ev.default.Messages.CLIPS,
        label: ev.default.Messages.CLIPS,
        ariaLabel: ev.default.Messages.CLIPS,
        icon: ey ? (0, a.jsx)(_.default, {}) : void 0,
        element: f.default,
        predicate: () => !eB
      },
      [eD.WebSetting.FRIEND_REQUESTS]: {
        section: eL.UserSettingsSections.FRIEND_REQUESTS,
        searchableTitle: ev.default.Messages.FRIEND_REQUESTS,
        label: ev.default.Messages.FRIEND_REQUESTS,
        element: eo.default
      },
      [eD.WebSetting.PREMIUM]: {
        section: eL.UserSettingsSections.PREMIUM,
        ariaLabel: ev.default.Messages.PREMIUM,
        searchableTitle: ev.default.Messages.PREMIUM,
        label: ev.default.Messages.PREMIUM,
        element: K.default,
        className: eb.premiumTab
      },
      [eD.WebSetting.GUILD_BOOSTING]: {
        section: eL.UserSettingsSections.GUILD_BOOSTING,
        searchableTitle: ev.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        label: ev.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: ef.default
      },
      [eD.WebSetting.SUBSCRIPTIONS]: {
        section: eL.UserSettingsSections.SUBSCRIPTIONS,
        ariaLabel: ev.default.Messages.SUBSCRIPTIONS_TITLE,
        searchableTitle: ev.default.Messages.SUBSCRIPTIONS_TITLE,
        label: ev.default.Messages.SUBSCRIPTIONS_TITLE,
        element: R.default,
        icon: A ? (0, a.jsx)(F.default, {
          width: 16,
          height: 16,
          color: i.default.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [eD.WebSetting.GIFT_INVENTORY]: {
        section: eL.UserSettingsSections.INVENTORY,
        searchableTitle: ev.default.Messages.GIFT_INVENTORY,
        label: ev.default.Messages.GIFT_INVENTORY,
        element: ec.default,
        ariaLabel: ev.default.Messages.GIFT_INVENTORY,
        badgeCount: t
      },
      [eD.WebSetting.BILLING]: {
        section: eL.UserSettingsSections.BILLING,
        searchableTitle: ev.default.Messages.BILLING,
        label: ev.default.Messages.BILLING,
        element: ea.default
      },
      [eD.WebSetting.APPEARANCE]: {
        section: eL.UserSettingsSections.APPEARANCE,
        searchableTitle: ev.default.Messages.APPEARANCE,
        label: ev.default.Messages.APPEARANCE,
        ariaLabel: ev.default.Messages.APPEARANCE,
        element: et.default,
        newIndicator: (0, a.jsx)(G.PremiumBadge, {
          text: ev.default.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: ej()
      },
      [eD.WebSetting.ACCESSIBILITY]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY,
        label: ev.default.Messages.ACCESSIBILITY,
        element: X.default
      },
      [eD.WebSetting.VOICE_AND_VIDEO]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.VOICE_AND_VIDEO,
        label: ev.default.Messages.VOICE_AND_VIDEO,
        element: eM.default,
        predicate: () => b.default.isSupported()
      },
      [eD.WebSetting.POGGERMODE]: {
        section: eL.UserSettingsSections.POGGERMODE,
        searchableTitle: ev.default.Messages.POGGERMODE,
        label: ev.default.Messages.POGGERMODE,
        ariaLabel: ev.default.Messages.POGGERMODE,
        element: O.default,
        predicate: () => C.default.settingsVisible,
        icon: (0, a.jsx)("img", {
          alt: "",
          src: s("542156"),
          className: eb.poggermodeIcon
        })
      },
      [eD.WebSetting.CHAT]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.CHAT,
        label: ev.default.Messages.CHAT,
        element: eC.default
      },
      [eD.WebSetting.NOTIFICATIONS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.NOTIFICATIONS,
        label: ev.default.Messages.NOTIFICATIONS,
        element: eT.default
      },
      [eD.WebSetting.KEYBINDS]: {
        section: eL.UserSettingsSections.KEYBINDS,
        searchableTitle: ev.default.Messages.KEYBINDS,
        label: ev.default.Messages.KEYBINDS,
        element: eS.default
      },
      [eD.WebSetting.LANGUAGE]: {
        section: eL.UserSettingsSections.LOCALE,
        searchableTitle: ev.default.Messages.LANGUAGE,
        label: ev.default.Messages.LANGUAGE,
        element: eE.default
      },
      [eD.WebSetting.WINDOW_SETTINGS]: {
        section: eL.UserSettingsSections.WINDOWS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        label: ev.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: eA.default,
        predicate: () => k.isPlatformEmbedded && (0, k.isWindows)()
      },
      [eD.WebSetting.LINUX_SETTINGS]: {
        section: eL.UserSettingsSections.LINUX,
        searchableTitle: ev.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        label: ev.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: eU,
        predicate: () => k.isPlatformEmbedded && (0, k.isLinux)()
      },
      [eD.WebSetting.STREAMER_MODE]: {
        section: eL.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.STREAMER_MODE,
        label: ev.default.Messages.STREAMER_MODE,
        element: eh.default
      },
      [eD.WebSetting.SPEED_TEST]: {
        section: eL.UserSettingsSections.SPEED_TEST,
        searchableTitle: "Speed Test",
        label: "Speed Test",
        element: Q.default,
        predicate: () => P.default.isSupported() && H.default.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [eD.WebSetting.SETTINGS_ADVANCED]: {
        section: eL.UserSettingsSections.ADVANCED,
        searchableTitle: ev.default.Messages.SETTINGS_ADVANCED,
        label: ev.default.Messages.SETTINGS_ADVANCED,
        element: ee.default
      },
      [eD.WebSetting.ACTIVITY_PRIVACY]: {
        section: eL.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: ev.default.Messages.ACTIVITY_PRIVACY,
        label: ev.default.Messages.ACTIVITY_PRIVACY,
        element: $.default,
        predicate: () => !eB
      },
      [eD.WebSetting.REGISTERED_GAMES]: {
        section: eL.UserSettingsSections.REGISTERED_GAMES,
        searchableTitle: ev.default.Messages.REGISTERED_GAMES,
        label: ev.default.Messages.REGISTERED_GAMES,
        element: ed.default,
        predicate: () => !eB && (0, eR.shouldShowRegisteredGamesSettings)()
      },
      [eD.WebSetting.OVERLAY]: {
        section: eL.UserSettingsSections.OVERLAY,
        searchableTitle: ev.default.Messages.OVERLAY,
        label: ev.default.Messages.OVERLAY,
        element: e_.default,
        predicate: () => !eB && eG
      },
      [eD.WebSetting.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, T.openChangelog)(!0),
        searchableTitle: ev.default.Messages.WHATS_NEW,
        label: ev.default.Messages.WHATS_NEW
      },
      [eD.WebSetting.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          y.default.track(eL.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, B.handleClick)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              y.default.track(eL.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
            }
          })
        },
        searchableTitle: ev.default.Messages.MERCHANDISE,
        label: ev.default.Messages.MERCHANDISE,
        ariaLabel: ev.default.Messages.MERCHANDISE
      },
      [eD.WebSetting.HYPESQUAD]: {
        section: eL.UserSettingsSections.HYPESQUAD_ONLINE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_HYPESQUAD,
        label: ev.default.Messages.USER_SETTINGS_HYPESQUAD,
        element: eu.default
      },
      [eD.WebSetting.EXPERIMENTS]: {
        section: eL.UserSettingsSections.EXPERIMENTS,
        searchableTitle: "Experiments",
        label: "Experiments",
        element: ep.default,
        predicate: () => v.default.isDeveloper
      },
      [eD.WebSetting.DEVELOPER_OPTIONS]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Developer Options",
        label: "Developer Options",
        ariaLabel: "Developer Options",
        element: ei.default,
        predicate: () => v.default.isDeveloper
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_FLAGS]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Developer Options Flags",
        parent: eD.WebSetting.DEVELOPER_OPTIONS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Tracing Requests",
        parent: eD.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_FORCED_CANARY]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Forced Canary",
        parent: eD.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Gateway Events To Console",
        parent: eD.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Rpc Events Commands",
        parent: eD.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Analytics Events Logging",
        parent: eD.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Source Maps",
        parent: eD.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Analytics Debugger View",
        parent: eD.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Idle Status Indicator",
        parent: eD.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Accessibility Auditing",
        parent: eD.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Preview Unpublished Collections",
        parent: eD.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side",
        parent: eD.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side Premium Type",
        parent: eD.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side Account Created Data",
        parent: eD.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Open Overlay",
        parent: eD.WebSetting.DEVELOPER_OPTIONS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_RESET_SOCKET]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Reset Socket",
        parent: eD.WebSetting.DEVELOPER_OPTIONS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Clear Caches",
        parent: eD.WebSetting.DEVELOPER_OPTIONS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_CRASHES]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Crashes",
        parent: eD.WebSetting.DEVELOPER_OPTIONS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Survey Override",
        parent: eD.WebSetting.DEVELOPER_OPTIONS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Changelog Override",
        parent: eD.WebSetting.DEVELOPER_OPTIONS
      },
      [eD.WebSetting.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Build Override",
        parent: eD.WebSetting.DEVELOPER_OPTIONS
      },
      [eD.WebSetting.HOTSPOT_OPTIONS]: {
        section: eL.UserSettingsSections.HOTSPOT_OPTIONS,
        searchableTitle: "Hotspot Options",
        label: "Hotspot Options",
        element: Y.default,
        predicate: () => v.default.isDeveloper
      },
      [eD.WebSetting.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: eL.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
        searchableTitle: "Dismissible Contents",
        label: "Dismissible Contents",
        element: g.default,
        predicate: () => v.default.isDeveloper
      },
      [eD.WebSetting.PAYMENT_FLOW_MODALS]: {
        section: eL.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
        searchableTitle: "Payment Flow Modals",
        label: "Payment Flow Modals",
        element: W.default,
        predicate: () => v.default.isDeveloper
      },
      [eD.WebSetting.TEXT_PLAYGROUND]: {
        section: eL.UserSettingsSections.TEXT_PLAYGROUND,
        searchableTitle: "Text Playground",
        label: "Text Playground",
        element: eO.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || v.default.isDeveloper
      },
      [eD.WebSetting.DESIGN_SYSTEMS]: {
        section: eL.UserSettingsSections.DESIGN_SYSTEMS,
        label: "Design Systems",
        element: el.default,
        predicate: () => v.default.isDeveloper
      },
      [eD.WebSetting.TEXT_COMPONENTS]: {
        section: eL.UserSettingsSections.TEXT_COMPONENT,
        searchableTitle: "Text Components",
        label: "Text Components",
        element: q.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || v.default.isDeveloper
      },
      [eD.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: eL.UserSettingsSections.PROFILE_EFFECTS_PREVIEW_TOOL,
        searchableTitle: "Profile Effects Preview Tool",
        label: "Profile Effects Preview Tool",
        element: m.default,
        predicate: () => v.default.isDeveloper
      },
      [eD.WebSetting.QUEST_PREVIEW_TOOL]: {
        section: eL.UserSettingsSections.QUEST_PREVIEW_TOOL,
        searchableTitle: "Quest Preview Tool",
        label: "Quest Preview Tool",
        element: L.default,
        predicate: () => (0, D.isQuestPreviewToolEnabled)({
          location: eP.QuestsExperimentLocations.QUEST_PREVIEW_TOOL
        })
      },
      [eD.WebSetting.LOGOUT]: {
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
      [eD.WebSetting.SOCIAL_LINKS]: {
        section: S.SectionTypes.CUSTOM,
        element: z.default
      },
      [eD.WebSetting.CLIENT_DEBUG_INFO]: {
        section: S.SectionTypes.CUSTOM,
        element: w.default
      }
    })
  }