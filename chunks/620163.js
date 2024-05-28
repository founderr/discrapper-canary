"use strict";
s.r(t), s.d(t, {
  getConfig: function() {
    return eG
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
  L = s("977156"),
  D = s("652380"),
  P = s("171156"),
  v = s("906467"),
  b = s("131951"),
  j = s("25990"),
  U = s("87086"),
  G = s("759231"),
  F = s("26290"),
  B = s("626135"),
  y = s("49012"),
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
  eL = s("726985"),
  eD = s("981631"),
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
  eG = e => {
    let {
      unseenGiftCount: t,
      showPrepaidPaymentPastDueWarning: A,
      impressionSource: p,
      numOfPendingFamilyRequests: eG,
      isOverlaySupported: eF,
      isClipsBetaTagShowing: eB = !1,
      shouldMergeGameSettings: ey,
      isUserSettingsSearchEnabled: ek
    } = e;
    return Object.freeze({
      [eL.WebSetting.SEARCH_BAR]: {
        section: S.SectionTypes.CUSTOM,
        element: eI.default,
        predicate: () => ek
      },
      [eL.WebSetting.SEARCH_NO_RESULTS]: {
        section: S.SectionTypes.CUSTOM,
        element: eg.default,
        predicate: () => ek
      },
      [eL.WebSetting.ACCOUNT]: {
        section: eD.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        label: ev.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: ev.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: J.default
      },
      [eL.WebSetting.ACCOUNT_PROFILE]: {
        searchableTitle: ev.default.Messages.PROFILE,
        parent: eL.WebSetting.ACCOUNT,
        section: eD.UserSettingsSections.ACCOUNT
      },
      [eL.WebSetting.ACCOUNT_DISPLAY_NAME]: {
        searchableTitle: ev.default.Messages.DISPLAY_NAME,
        section: eD.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PROFILE
      },
      [eL.WebSetting.ACCOUNT_PHONE_NUMBER]: {
        searchableTitle: ev.default.Messages.CHANGE_PHONE_NUMBER,
        section: eD.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PROFILE
      },
      [eL.WebSetting.ACCOUNT_USERNAME]: {
        searchableTitle: ev.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE,
        section: eD.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PROFILE
      },
      [eL.WebSetting.ACCOUNT_EMAIL]: {
        searchableTitle: ev.default.Messages.CHANGE_EMAIL,
        section: eD.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PROFILE
      },
      [eL.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
        section: eL.WebSetting.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT,
        searchableTitle: ev.default.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_CHANGE_PASSWORD]: {
        searchableTitle: ev.default.Messages.CHANGE_PASSWORD,
        section: eL.WebSetting.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_CONFIRM_PASSWORD]: {
        searchableTitle: ev.default.Messages.FORM_LABEL_CONFIRM_PASSWORD,
        section: eL.WebSetting.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
        searchableTitle: ev.default.Messages.SETTINGS_TWO_FA,
        section: eL.WebSetting.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_ENABLE_2FA]: {
        searchableTitle: ev.default.Messages.TWO_FA_ENABLE,
        section: eL.WebSetting.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_REMOVE_2FA]: {
        searchableTitle: ev.default.Messages.TWO_FA_REMOVE,
        section: eL.WebSetting.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_VIEW_BACKUP_CODES]: {
        searchableTitle: ev.default.Messages.TWO_FA_BACKUP_CODE,
        section: eL.WebSetting.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_SMS_BACKUP]: {
        searchableTitle: ev.default.Messages.MFA_SMS_AUTH,
        section: eL.WebSetting.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_SECURITY_KEYS]: {
        searchableTitle: ev.default.Messages.TWO_FA_WEBAUTHN_REGISTER,
        section: eL.WebSetting.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_REMOVAL]: {
        section: eD.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION,
        parent: eL.WebSetting.ACCOUNT
      },
      [eL.WebSetting.ACCOUNT_DISABLE_ACCOUNT]: {
        section: eD.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.DISABLE_ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_REMOVAL
      },
      [eL.WebSetting.ACCOUNT_DELETE_ACCOUNT]: {
        section: eD.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.DELETE_ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_DISABLE_ACCOUNT
      },
      [eL.WebSetting.GAMES]: {
        section: eD.UserSettingsSections.GAMES,
        searchableTitle: ev.default.Messages.GAMES,
        label: ev.default.Messages.GAMES,
        ariaLabel: ev.default.Messages.GAMES,
        element: ex.default,
        predicate: () => ey
      },
      [eL.WebSetting.PROFILE_CUSTOMIZATION]: {
        section: eD.UserSettingsSections.PROFILE_CUSTOMIZATION,
        type: S.ContentTypes.WIDE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_PROFILES,
        label: ev.default.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: ev.default.Messages.USER_SETTINGS_PROFILES,
        element: M.default,
        newIndicator: (0, a.jsx)(F.PremiumBadge, {
          text: ev.default.Messages.NEW
        }),
        notice: {
          stores: [j.default, h.default],
          element: x.default
        },
        onSettingsClose: () => {
          o.default.wait(() => {
            (0, N.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eD.UserSettingsSections.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [eL.WebSetting.PROFILE_DISPLAY_NAME]: {
        section: eD.UserSettingsSections.PROFILE_CUSTOMIZATION,
        searchableTitle: ev.default.Messages.DISPLAY_NAME,
        parent: eL.WebSetting.PROFILE_CUSTOMIZATION
      },
      [eL.WebSetting.PROFILE_SERVER_PROFILES]: {
        section: eD.UserSettingsSections.PROFILE_CUSTOMIZATION,
        searchableTitle: ev.default.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY,
        parent: eL.WebSetting.PROFILE_CUSTOMIZATION
      },
      [eL.WebSetting.PRIVACY_AND_SAFETY]: {
        section: eD.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.PRIVACY_AND_SAFETY,
        label: ev.default.Messages.PRIVACY_AND_SAFETY,
        ariaLabel: ev.default.Messages.PRIVACY_AND_SAFETY,
        element: em.default
      },
      [eL.WebSetting.PRIVACY_SENSITIVE_MEDIA]: {
        section: eD.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER,
        parent: eL.WebSetting.PRIVACY_AND_SAFETY
      },
      [eL.WebSetting.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
        section: eD.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.SETTINGS_DM_SPAM_FILTER,
        parent: eL.WebSetting.PRIVACY_AND_SAFETY
      },
      [eL.WebSetting.PRIVACY_SERVER_PRIVACY]: {
        section: eD.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_DM_SETTINGS_TITLE,
        parent: eL.WebSetting.PRIVACY_AND_SAFETY
      },
      [eL.WebSetting.PRIVACY_DATA_PRIVACY]: {
        section: eD.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.SETTINGS_DATA_PRIVACY_CONTROLS,
        parent: eL.WebSetting.PRIVACY_AND_SAFETY
      },
      [eL.WebSetting.PRIVACY_STAFF_ONLY]: {
        section: eD.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER,
        parent: eL.WebSetting.PRIVACY_AND_SAFETY
      },
      [eL.WebSetting.PRIVACY_ACCOUNT_STANDING]: {
        section: eD.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
        parent: eL.WebSetting.PRIVACY_AND_SAFETY
      },
      [eL.WebSetting.PRIVACY_KEYWORD_FILTER]: {
        section: eD.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_DESCRIPTION,
        parent: eL.WebSetting.PRIVACY_AND_SAFETY
      },
      [eL.WebSetting.PRIVACY_KEYWORD_FILTER_PROFANITY]: {
        section: eD.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_TITLE,
        parent: eL.WebSetting.PRIVACY_KEYWORD_FILTER
      },
      [eL.WebSetting.PRIVACY_KEYWORD_FILTER_INSULTS_SLURS]: {
        section: eD.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_SLURS_TITLE,
        parent: eL.WebSetting.PRIVACY_KEYWORD_FILTER
      },
      [eL.WebSetting.PRIVACY_KEYWORD_FILTER_SEXUAL_CONTENT]: {
        section: eD.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_TITLE,
        parent: eL.WebSetting.PRIVACY_KEYWORD_FILTER
      },
      [eL.WebSetting.PRIVACY_FAMILY_CENTER]: {
        section: eD.UserSettingsSections.FAMILY_CENTER,
        searchableTitle: ev.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        label: ev.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: ev.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: er.default,
        badgeCount: eG,
        newIndicator: (0, a.jsx)(F.TextBadge, {
          text: ev.default.Messages.NEW,
          color: I.default.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
      },
      [eL.WebSetting.AUTHORIZED_APPS]: {
        section: eD.UserSettingsSections.AUTHORIZED_APPS,
        searchableTitle: ev.default.Messages.AUTHORIZED_APPS,
        label: ev.default.Messages.AUTHORIZED_APPS,
        element: es.default
      },
      [eL.WebSetting.SESSIONS]: {
        section: eD.UserSettingsSections.SESSIONS,
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
      [eL.WebSetting.CONNECTIONS]: {
        section: eD.UserSettingsSections.CONNECTIONS,
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
      [eL.WebSetting.CONNECTIONS_CONNECTED_ACCOUNTS]: {
        section: eD.UserSettingsSections.CONNECTIONS,
        searchableTitle: ev.default.Messages.CONNECTED_ACCOUNTS,
        parent: eL.WebSetting.CONNECTIONS,
        element: en.default
      },
      [eL.WebSetting.CLIPS]: {
        section: eD.UserSettingsSections.CLIPS,
        searchableTitle: ev.default.Messages.CLIPS,
        label: ev.default.Messages.CLIPS,
        ariaLabel: ev.default.Messages.CLIPS,
        icon: eB ? (0, a.jsx)(_.default, {}) : void 0,
        element: f.default,
        predicate: () => !ey
      },
      [eL.WebSetting.FRIEND_REQUESTS]: {
        section: eD.UserSettingsSections.FRIEND_REQUESTS,
        searchableTitle: ev.default.Messages.FRIEND_REQUESTS,
        label: ev.default.Messages.FRIEND_REQUESTS,
        element: eo.default
      },
      [eL.WebSetting.PREMIUM]: {
        section: eD.UserSettingsSections.PREMIUM,
        ariaLabel: ev.default.Messages.PREMIUM,
        searchableTitle: ev.default.Messages.PREMIUM,
        label: ev.default.Messages.PREMIUM,
        element: K.default,
        className: eb.premiumTab
      },
      [eL.WebSetting.GUILD_BOOSTING]: {
        section: eD.UserSettingsSections.GUILD_BOOSTING,
        searchableTitle: ev.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        label: ev.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: ef.default
      },
      [eL.WebSetting.SUBSCRIPTIONS]: {
        section: eD.UserSettingsSections.SUBSCRIPTIONS,
        ariaLabel: ev.default.Messages.SUBSCRIPTIONS_TITLE,
        searchableTitle: ev.default.Messages.SUBSCRIPTIONS_TITLE,
        label: ev.default.Messages.SUBSCRIPTIONS_TITLE,
        element: R.default,
        icon: A ? (0, a.jsx)(G.default, {
          width: 16,
          height: 16,
          color: i.default.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [eL.WebSetting.SUBSCRIPTIONS_CREDITS]: {
        section: eD.UserSettingsSections.SUBSCRIPTIONS,
        searchableTitle: ev.default.Messages.BILLING_SUBSCRIPTION_CREDIT,
        parent: eL.WebSetting.SUBSCRIPTIONS
      },
      [eL.WebSetting.GIFT_INVENTORY]: {
        section: eD.UserSettingsSections.INVENTORY,
        searchableTitle: ev.default.Messages.GIFT_INVENTORY,
        label: ev.default.Messages.GIFT_INVENTORY,
        element: ec.default,
        ariaLabel: ev.default.Messages.GIFT_INVENTORY,
        badgeCount: t
      },
      [eL.WebSetting.GIFT_INVENTORY_QUESTS]: {
        section: eD.UserSettingsSections.INVENTORY,
        searchableTitle: ev.default.Messages.QUESTS,
        parent: eL.WebSetting.GIFT_INVENTORY
      },
      [eL.WebSetting.BILLING]: {
        section: eD.UserSettingsSections.BILLING,
        searchableTitle: ev.default.Messages.BILLING,
        label: ev.default.Messages.BILLING,
        ariaLabel: ev.default.Messages.BILLING,
        element: ea.default
      },
      [eL.WebSetting.BILLING_PAYMENT_METHODS]: {
        section: eD.UserSettingsSections.BILLING,
        searchableTitle: ev.default.Messages.BILLING_PAYMENT_SOURCES,
        parent: eL.WebSetting.BILLING
      },
      [eL.WebSetting.BILLING_TRANSACTION_HISTORY]: {
        section: eD.UserSettingsSections.BILLING,
        searchableTitle: ev.default.Messages.BILLING_PAYMENT_HISTORY,
        parent: eL.WebSetting.BILLING
      },
      [eL.WebSetting.APPEARANCE]: {
        section: eD.UserSettingsSections.APPEARANCE,
        searchableTitle: ev.default.Messages.APPEARANCE,
        label: ev.default.Messages.APPEARANCE,
        ariaLabel: ev.default.Messages.APPEARANCE,
        element: et.default,
        newIndicator: (0, a.jsx)(F.PremiumBadge, {
          text: ev.default.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: ej()
      },
      [eL.WebSetting.ACCESSIBILITY]: {
        section: eD.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY,
        label: ev.default.Messages.ACCESSIBILITY,
        element: X.default
      },
      [eL.WebSetting.VOICE_AND_VIDEO]: {
        section: eD.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.VOICE_AND_VIDEO,
        label: ev.default.Messages.VOICE_AND_VIDEO,
        element: eM.default,
        predicate: () => b.default.isSupported()
      },
      [eL.WebSetting.POGGERMODE]: {
        section: eD.UserSettingsSections.POGGERMODE,
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
      [eL.WebSetting.CHAT]: {
        section: eD.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.CHAT,
        label: ev.default.Messages.CHAT,
        element: eC.default
      },
      [eL.WebSetting.NOTIFICATIONS]: {
        section: eD.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.NOTIFICATIONS,
        label: ev.default.Messages.NOTIFICATIONS,
        element: eT.default
      },
      [eL.WebSetting.KEYBINDS]: {
        section: eD.UserSettingsSections.KEYBINDS,
        searchableTitle: ev.default.Messages.KEYBINDS,
        label: ev.default.Messages.KEYBINDS,
        element: eS.default
      },
      [eL.WebSetting.LANGUAGE]: {
        section: eD.UserSettingsSections.LOCALE,
        searchableTitle: ev.default.Messages.LANGUAGE,
        label: ev.default.Messages.LANGUAGE,
        element: eE.default
      },
      [eL.WebSetting.WINDOW_SETTINGS]: {
        section: eD.UserSettingsSections.WINDOWS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        label: ev.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: eA.default,
        predicate: () => k.isPlatformEmbedded && (0, k.isWindows)()
      },
      [eL.WebSetting.LINUX_SETTINGS]: {
        section: eD.UserSettingsSections.LINUX,
        searchableTitle: ev.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        label: ev.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: eU,
        predicate: () => k.isPlatformEmbedded && (0, k.isLinux)()
      },
      [eL.WebSetting.STREAMER_MODE]: {
        section: eD.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.STREAMER_MODE,
        label: ev.default.Messages.STREAMER_MODE,
        element: eh.default
      },
      [eL.WebSetting.SPEED_TEST]: {
        section: eD.UserSettingsSections.SPEED_TEST,
        searchableTitle: "Speed Test",
        label: "Speed Test",
        element: Q.default,
        predicate: () => P.default.isSupported() && H.default.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [eL.WebSetting.SETTINGS_ADVANCED]: {
        section: eD.UserSettingsSections.ADVANCED,
        searchableTitle: ev.default.Messages.SETTINGS_ADVANCED,
        label: ev.default.Messages.SETTINGS_ADVANCED,
        element: ee.default
      },
      [eL.WebSetting.ACTIVITY_PRIVACY]: {
        section: eD.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: ev.default.Messages.ACTIVITY_PRIVACY,
        label: ev.default.Messages.ACTIVITY_PRIVACY,
        element: $.default,
        predicate: () => !ey
      },
      [eL.WebSetting.REGISTERED_GAMES]: {
        section: eD.UserSettingsSections.REGISTERED_GAMES,
        searchableTitle: ev.default.Messages.REGISTERED_GAMES,
        label: ev.default.Messages.REGISTERED_GAMES,
        element: ed.default,
        predicate: () => !ey && (0, eR.shouldShowRegisteredGamesSettings)()
      },
      [eL.WebSetting.OVERLAY]: {
        section: eD.UserSettingsSections.OVERLAY,
        searchableTitle: ev.default.Messages.OVERLAY,
        label: ev.default.Messages.OVERLAY,
        element: e_.default,
        predicate: () => !ey && eF
      },
      [eL.WebSetting.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, T.openChangelog)(!0),
        searchableTitle: ev.default.Messages.WHATS_NEW,
        label: ev.default.Messages.WHATS_NEW
      },
      [eL.WebSetting.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          B.default.track(eD.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, y.handleClick)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              B.default.track(eD.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
            }
          })
        },
        searchableTitle: ev.default.Messages.MERCHANDISE,
        label: ev.default.Messages.MERCHANDISE,
        ariaLabel: ev.default.Messages.MERCHANDISE
      },
      [eL.WebSetting.HYPESQUAD]: {
        section: eD.UserSettingsSections.HYPESQUAD_ONLINE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_HYPESQUAD,
        label: ev.default.Messages.USER_SETTINGS_HYPESQUAD,
        element: eu.default
      },
      [eL.WebSetting.EXPERIMENTS]: {
        section: eD.UserSettingsSections.EXPERIMENTS,
        searchableTitle: "Experiments",
        label: "Experiments",
        element: ep.default,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Developer Options",
        label: "Developer Options",
        ariaLabel: "Developer Options",
        element: ei.default,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_FLAGS]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Developer Options Flags",
        parent: eL.WebSetting.DEVELOPER_OPTIONS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Tracing Requests",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_FORCED_CANARY]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Forced Canary",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Gateway Events To Console",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Rpc Events Commands",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Analytics Events Logging",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Source Maps",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Analytics Debugger View",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Idle Status Indicator",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Accessibility Auditing",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Preview Unpublished Collections",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side Premium Type",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side Account Created Data",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Open Overlay",
        parent: eL.WebSetting.DEVELOPER_OPTIONS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_RESET_SOCKET]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Reset Socket",
        parent: eL.WebSetting.DEVELOPER_OPTIONS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Clear Caches",
        parent: eL.WebSetting.DEVELOPER_OPTIONS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_CRASHES]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Crashes",
        parent: eL.WebSetting.DEVELOPER_OPTIONS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Survey Override",
        parent: eL.WebSetting.DEVELOPER_OPTIONS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Changelog Override",
        parent: eL.WebSetting.DEVELOPER_OPTIONS
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
        section: eD.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Build Override",
        parent: eL.WebSetting.DEVELOPER_OPTIONS
      },
      [eL.WebSetting.HOTSPOT_OPTIONS]: {
        section: eD.UserSettingsSections.HOTSPOT_OPTIONS,
        searchableTitle: "Hotspot Options",
        label: "Hotspot Options",
        element: Y.default,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: eD.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
        searchableTitle: "Dismissible Contents",
        label: "Dismissible Contents",
        element: g.default,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.PAYMENT_FLOW_MODALS]: {
        section: eD.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
        searchableTitle: "Payment Flow Modals",
        label: "Payment Flow Modals",
        element: W.default,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.TEXT_PLAYGROUND]: {
        section: eD.UserSettingsSections.TEXT_PLAYGROUND,
        searchableTitle: "Text Playground",
        label: "Text Playground",
        element: eO.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || v.default.isDeveloper
      },
      [eL.WebSetting.DESIGN_SYSTEMS]: {
        section: eD.UserSettingsSections.DESIGN_SYSTEMS,
        label: "Design Systems",
        element: el.default,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.TEXT_COMPONENTS]: {
        section: eD.UserSettingsSections.TEXT_COMPONENT,
        searchableTitle: "Text Components",
        label: "Text Components",
        element: q.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || v.default.isDeveloper
      },
      [eL.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: eD.UserSettingsSections.PROFILE_EFFECTS_PREVIEW_TOOL,
        searchableTitle: "Profile Effects Preview Tool",
        label: "Profile Effects Preview Tool",
        element: m.default,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.QUEST_PREVIEW_TOOL]: {
        section: eD.UserSettingsSections.QUEST_PREVIEW_TOOL,
        searchableTitle: "Quest Preview Tool",
        label: "Quest Preview Tool",
        element: D.default,
        predicate: () => (0, L.isQuestPreviewToolEnabled)({
          location: eP.QuestsExperimentLocations.QUEST_PREVIEW_TOOL
        })
      },
      [eL.WebSetting.LOGOUT]: {
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
      [eL.WebSetting.SOCIAL_LINKS]: {
        section: S.SectionTypes.CUSTOM,
        element: z.default
      },
      [eL.WebSetting.CLIENT_DEBUG_INFO]: {
        section: S.SectionTypes.CUSTOM,
        element: w.default
      }
    })
  }