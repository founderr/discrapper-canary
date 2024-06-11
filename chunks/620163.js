"use strict";
s.r(t), s.d(t, {
  getConfig: function() {
    return eF
  }
}), s("653041");
var a = s("735250");
s("470079");
var n = s("990547"),
  i = s("704215"),
  l = s("692547"),
  r = s("481060"),
  o = s("570140"),
  d = s("893776"),
  u = s("809206"),
  c = s("230711"),
  S = s("493544"),
  E = s("579806"),
  T = s("782568"),
  _ = s("163379"),
  I = s("703288"),
  N = s("574755"),
  g = s("425799"),
  f = s("377171"),
  m = s("621628"),
  A = s("18438"),
  C = s("778825"),
  O = s("351780"),
  h = s("231765"),
  R = s("837741"),
  p = s("804545"),
  M = s("813732"),
  D = s("398140"),
  x = s("564344"),
  L = s("977156"),
  P = s("652380"),
  b = s("171156"),
  v = s("906467"),
  U = s("131951"),
  j = s("25990"),
  G = s("87086"),
  F = s("759231"),
  B = s("626135"),
  y = s("49012"),
  V = s("358085"),
  H = s("392735"),
  Y = s("61160"),
  k = s("604227"),
  w = s("38915"),
  W = s("498639"),
  K = s("748717"),
  Q = s("419636"),
  z = s("35426"),
  X = s("799071"),
  q = s("601433"),
  Z = s("154022"),
  J = s("393681"),
  $ = s("309739"),
  ee = s("64914"),
  et = s("501348"),
  es = s("795594"),
  ea = s("443702"),
  en = s("920914"),
  ei = s("177508"),
  el = s("956699"),
  er = s("54942"),
  eo = s("15780"),
  ed = s("293389"),
  eu = s("88624"),
  ec = s("387747"),
  eS = s("389650"),
  eE = s("649157"),
  eT = s("593648"),
  e_ = s("327885"),
  eI = s("595242"),
  eN = s("301121"),
  eg = s("207874"),
  ef = s("463153"),
  em = s("36192"),
  eA = s("338345"),
  eC = s("400287"),
  eO = s("554042"),
  eh = s("200645"),
  eR = s("287490"),
  ep = s("168308"),
  eM = s("277329"),
  eD = s("674116"),
  ex = s("726985"),
  eL = s("981631"),
  eP = s("46140"),
  eb = s("65154"),
  ev = s("689938"),
  eU = s("442691");
let ej = () => {
    let e = "Settings list view",
      t = [i.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, i.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE];
    return R.BrandRefreshPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(i.DismissibleContent.BRAND_REFRESH_NEW_BADGE), p.PrideMonthPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(i.DismissibleContent.PRIDE_ICONS_APPEARANCE_BADGE), t
  },
  eG = eh.default,
  eF = e => {
    let {
      unseenGiftCount: t,
      showPrepaidPaymentPastDueWarning: R,
      impressionSource: p,
      numOfPendingFamilyRequests: eF,
      isOverlaySupported: eB,
      isClipsBetaTagShowing: ey = !1,
      shouldMergeGameSettings: eV,
      isUserSettingsSearchEnabled: eH,
      isKeywordFilteringEnabled: eY,
      isStaff: ek,
      isInappropriateConversationWarningEnabled: ew,
      paymentsBlocked: eW,
      isEligibleForQuests: eK,
      showGiftNitro: eQ
    } = e;
    return Object.freeze({
      [ex.WebSetting.SEARCH_BAR]: {
        section: S.SectionTypes.CUSTOM,
        element: eg.default,
        predicate: () => eH
      },
      [ex.WebSetting.SEARCH_NO_RESULTS]: {
        section: S.SectionTypes.CUSTOM,
        element: ef.default,
        predicate: () => eH
      },
      [ex.WebSetting.ACCOUNT]: {
        section: eL.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        label: ev.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: ev.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: J.default
      },
      [ex.WebSetting.ACCOUNT_PROFILE]: {
        searchableTitle: ev.default.Messages.PROFILE,
        parent: ex.WebSetting.ACCOUNT,
        section: eL.UserSettingsSections.ACCOUNT
      },
      [ex.WebSetting.ACCOUNT_DISPLAY_NAME]: {
        searchableTitle: ev.default.Messages.DISPLAY_NAME,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: ex.WebSetting.ACCOUNT_PROFILE
      },
      [ex.WebSetting.ACCOUNT_PHONE_NUMBER]: {
        searchableTitle: ev.default.Messages.CHANGE_PHONE_NUMBER,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: ex.WebSetting.ACCOUNT_PROFILE
      },
      [ex.WebSetting.ACCOUNT_USERNAME]: {
        searchableTitle: ev.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: ex.WebSetting.ACCOUNT_PROFILE
      },
      [ex.WebSetting.ACCOUNT_EMAIL]: {
        searchableTitle: ev.default.Messages.CHANGE_EMAIL,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: ex.WebSetting.ACCOUNT_PROFILE
      },
      [ex.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
        section: eL.UserSettingsSections.ACCOUNT,
        parent: ex.WebSetting.ACCOUNT,
        searchableTitle: ev.default.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [ex.WebSetting.ACCOUNT_CHANGE_PASSWORD]: {
        searchableTitle: ev.default.Messages.CHANGE_PASSWORD,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: ex.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [ex.WebSetting.ACCOUNT_CONFIRM_PASSWORD]: {
        searchableTitle: ev.default.Messages.FORM_LABEL_CONFIRM_PASSWORD,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: ex.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [ex.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
        searchableTitle: ev.default.Messages.SETTINGS_TWO_FA,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: ex.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [ex.WebSetting.ACCOUNT_ENABLE_2FA]: {
        searchableTitle: ev.default.Messages.TWO_FA_ENABLE,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: ex.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [ex.WebSetting.ACCOUNT_REMOVE_2FA]: {
        searchableTitle: ev.default.Messages.TWO_FA_REMOVE,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: ex.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [ex.WebSetting.ACCOUNT_VIEW_BACKUP_CODES]: {
        searchableTitle: ev.default.Messages.TWO_FA_BACKUP_CODE,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: ex.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [ex.WebSetting.ACCOUNT_SMS_BACKUP]: {
        searchableTitle: ev.default.Messages.MFA_SMS_AUTH,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: ex.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [ex.WebSetting.ACCOUNT_SECURITY_KEYS]: {
        searchableTitle: ev.default.Messages.TWO_FA_WEBAUTHN_REGISTER,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: ex.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [ex.WebSetting.ACCOUNT_REMOVAL]: {
        section: eL.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION,
        parent: ex.WebSetting.ACCOUNT
      },
      [ex.WebSetting.ACCOUNT_DISABLE_ACCOUNT]: {
        section: eL.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.DISABLE_ACCOUNT,
        parent: ex.WebSetting.ACCOUNT_REMOVAL
      },
      [ex.WebSetting.ACCOUNT_DELETE_ACCOUNT]: {
        section: eL.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.DELETE_ACCOUNT,
        parent: ex.WebSetting.ACCOUNT_DISABLE_ACCOUNT
      },
      [ex.WebSetting.GAMES]: {
        section: eL.UserSettingsSections.GAMES,
        searchableTitle: ev.default.Messages.GAMES,
        label: ev.default.Messages.GAMES,
        ariaLabel: ev.default.Messages.GAMES,
        element: eM.default,
        predicate: () => eV
      },
      [ex.WebSetting.GAMES_MY_GAMES]: {
        section: eL.UserSettingsSections.GAMES,
        searchableTitle: ev.default.Messages.MY_GAMES,
        parent: ex.WebSetting.GAMES
      },
      [ex.WebSetting.GAMES_CLIPS]: {
        section: eL.UserSettingsSections.GAMES,
        searchableTitle: ev.default.Messages.CLIPS,
        parent: ex.WebSetting.GAMES
      },
      [ex.WebSetting.GAMES_OVERLAY]: {
        section: eL.UserSettingsSections.GAMES,
        searchableTitle: ev.default.Messages.OVERLAY,
        parent: ex.WebSetting.GAMES
      },
      [ex.WebSetting.GAMES_ACTIVITY_PRIVACY]: {
        section: eL.UserSettingsSections.GAMES,
        searchableTitle: ev.default.Messages.ACTIVITY_PRIVACY,
        parent: ex.WebSetting.GAMES
      },
      [ex.WebSetting.PROFILE_CUSTOMIZATION]: {
        section: eL.UserSettingsSections.PROFILE_CUSTOMIZATION,
        type: S.ContentTypes.WIDE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_PROFILES,
        label: ev.default.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: ev.default.Messages.USER_SETTINGS_PROFILES,
        element: x.default,
        newIndicator: (0, a.jsx)(r.PremiumBadge, {
          text: ev.default.Messages.NEW
        }),
        notice: {
          stores: [j.default, C.default],
          element: D.default
        },
        onSettingsClose: () => {
          o.default.wait(() => {
            (0, A.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eL.UserSettingsSections.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [ex.WebSetting.PROFILE_DISPLAY_NAME]: {
        section: eL.UserSettingsSections.PROFILE_CUSTOMIZATION,
        searchableTitle: ev.default.Messages.DISPLAY_NAME,
        parent: ex.WebSetting.PROFILE_CUSTOMIZATION
      },
      [ex.WebSetting.PROFILE_USER_PROFILE]: {
        section: eL.UserSettingsSections.PROFILE_CUSTOMIZATION,
        searchableTitle: ev.default.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE,
        parent: ex.WebSetting.PROFILE_CUSTOMIZATION
      },
      [ex.WebSetting.PROFILE_SERVER_PROFILES]: {
        section: eL.UserSettingsSections.PROFILE_CUSTOMIZATION,
        searchableTitle: ev.default.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY,
        parent: ex.WebSetting.PROFILE_CUSTOMIZATION
      },
      [ex.WebSetting.PRIVACY_AND_SAFETY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        label: ev.default.Messages.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.PRIVACY_AND_SAFETY,
        ariaLabel: ev.default.Messages.PRIVACY_AND_SAFETY,
        element: eN.default
      },
      [ex.WebSetting.PRIVACY_USER_SETTINGS]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.PRIVACY_AND_SAFETY,
        parent: ex.WebSetting.PRIVACY_AND_SAFETY
      },
      [ex.WebSetting.PRIVACY_SENSITIVE_MEDIA]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER,
        parent: ex.WebSetting.PRIVACY_USER_SETTINGS
      },
      [ex.WebSetting.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.SETTINGS_DM_SPAM_FILTER,
        parent: ex.WebSetting.PRIVACY_USER_SETTINGS
      },
      [ex.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_DM_SETTINGS,
        parent: ex.WebSetting.PRIVACY_USER_SETTINGS
      },
      [ex.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.NEW_GUILDS_DM_ALLOWED,
        parent: ex.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [ex.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.NSFW_GUILDS_TOGGLE_HEADER,
        parent: ex.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [ex.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER,
        parent: ex.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [ex.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.NSFW_DM_COMMANDS_HEADER,
        parent: ex.WebSetting.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [ex.WebSetting.PRIVACY_DATA_PRIVACY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.SETTINGS_DATA_PRIVACY_CONTROLS,
        parent: ex.WebSetting.PRIVACY_USER_SETTINGS
      },
      [ex.WebSetting.PRIVACY_DATA_IMPROVE_DISCORD]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE,
        parent: ex.WebSetting.PRIVACY_DATA_PRIVACY
      },
      [ex.WebSetting.PRIVACY_DATA_PERSONALIZE]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE,
        parent: ex.WebSetting.PRIVACY_DATA_PRIVACY
      },
      [ex.WebSetting.PRIVACY_DATA_QUESTS]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT,
        parent: ex.WebSetting.PRIVACY_DATA_PRIVACY
      },
      [ex.WebSetting.PRIVACY_DATA_BASIC_SERVICE]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        parent: ex.WebSetting.PRIVACY_DATA_PRIVACY,
        searchableTitle: ex.NON_SEARCHABLE_SETTING
      },
      [ex.WebSetting.PRIVACY_DATA_REQUEST]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD,
        parent: ex.WebSetting.PRIVACY_DATA_PRIVACY
      },
      [ex.WebSetting.PRIVACY_STAFF_ONLY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER,
        parent: ex.WebSetting.PRIVACY_USER_SETTINGS,
        predicate: () => ek
      },
      [ex.WebSetting.PRIVACY_KEYWORD_FILTER]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_DESCRIPTION,
        parent: ex.WebSetting.PRIVACY_USER_SETTINGS,
        predicate: () => eY
      },
      [ex.WebSetting.PRIVACY_KEYWORD_FILTER_PROFANITY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_TITLE,
        parent: ex.WebSetting.PRIVACY_KEYWORD_FILTER,
        predicate: () => eY
      },
      [ex.WebSetting.PRIVACY_KEYWORD_FILTER_INSULTS_SLURS]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_SLURS_TITLE,
        parent: ex.WebSetting.PRIVACY_KEYWORD_FILTER,
        predicate: () => eY
      },
      [ex.WebSetting.PRIVACY_KEYWORD_FILTER_SEXUAL_CONTENT]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_TITLE,
        parent: ex.WebSetting.PRIVACY_KEYWORD_FILTER,
        predicate: () => eY
      },
      [ex.WebSetting.PRIVACY_TERMS_POLICY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        parent: ex.WebSetting.PRIVACY_USER_SETTINGS,
        searchableTitle: ex.NON_SEARCHABLE_SETTING
      },
      [ex.WebSetting.PRIVACY_SAFETY_ALERTS]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.SAFETY_ALERTS_SETTING_TITLE,
        parent: ex.WebSetting.PRIVACY_USER_SETTINGS,
        predicate: () => ew
      },
      [ex.WebSetting.PRIVACY_ACCOUNT_STANDING]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
        parent: ex.WebSetting.PRIVACY_AND_SAFETY
      },
      [ex.WebSetting.PRIVACY_FAMILY_CENTER]: {
        section: eL.UserSettingsSections.FAMILY_CENTER,
        searchableTitle: ev.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        label: ev.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: ev.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: er.default,
        badgeCount: eF,
        newIndicator: (0, a.jsx)(r.TextBadge, {
          text: ev.default.Messages.NEW,
          color: f.default.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [i.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
      },
      [ex.WebSetting.AUTHORIZED_APPS]: {
        section: eL.UserSettingsSections.AUTHORIZED_APPS,
        searchableTitle: ev.default.Messages.AUTHORIZED_APPS,
        label: ev.default.Messages.AUTHORIZED_APPS,
        element: es.default
      },
      [ex.WebSetting.SESSIONS]: {
        section: eL.UserSettingsSections.SESSIONS,
        searchableTitle: ev.default.Messages.AUTH_SESSIONS,
        label: ev.default.Messages.AUTH_SESSIONS,
        ariaLabel: ev.default.Messages.AUTH_SESSIONS,
        element: em.default,
        newIndicatorDismissibleContentTypes: [i.DismissibleContent.AUTH_SESSIONS_NEW],
        predicate: () => H.default.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [ex.WebSetting.CONNECTIONS]: {
        section: eL.UserSettingsSections.CONNECTIONS,
        searchableTitle: ev.default.Messages.CONNECTIONS,
        label: ev.default.Messages.CONNECTIONS,
        ariaLabel: ev.default.Messages.CONNECTIONS,
        element: en.default,
        impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: p
        },
        newIndicatorDismissibleContentTypes: [i.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
      },
      [ex.WebSetting.CONNECTIONS_CONNECTED_ACCOUNTS]: {
        section: eL.UserSettingsSections.CONNECTIONS,
        searchableTitle: ev.default.Messages.CONNECTED_ACCOUNTS,
        parent: ex.WebSetting.CONNECTIONS,
        element: en.default
      },
      [ex.WebSetting.CLIPS]: {
        section: eL.UserSettingsSections.CLIPS,
        searchableTitle: ev.default.Messages.CLIPS,
        label: ev.default.Messages.CLIPS,
        ariaLabel: ev.default.Messages.CLIPS,
        icon: ey ? (0, a.jsx)(I.default, {}) : void 0,
        element: N.default,
        predicate: () => !eV
      },
      [ex.WebSetting.FRIEND_REQUESTS]: {
        section: eL.UserSettingsSections.FRIEND_REQUESTS,
        searchableTitle: ev.default.Messages.FRIEND_REQUESTS,
        label: ev.default.Messages.FRIEND_REQUESTS,
        element: eo.default
      },
      [ex.WebSetting.PREMIUM]: {
        section: eL.UserSettingsSections.PREMIUM,
        ariaLabel: ev.default.Messages.PREMIUM,
        searchableTitle: ev.default.Messages.PREMIUM,
        label: ev.default.Messages.PREMIUM,
        element: K.default,
        className: eU.premiumTab
      },
      [ex.WebSetting.GUILD_BOOSTING]: {
        section: eL.UserSettingsSections.GUILD_BOOSTING,
        searchableTitle: ev.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        label: ev.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: eI.default
      },
      [ex.WebSetting.SUBSCRIPTIONS]: {
        section: eL.UserSettingsSections.SUBSCRIPTIONS,
        ariaLabel: ev.default.Messages.SUBSCRIPTIONS_TITLE,
        searchableTitle: ev.default.Messages.SUBSCRIPTIONS_TITLE,
        label: ev.default.Messages.SUBSCRIPTIONS_TITLE,
        element: M.default,
        icon: R ? (0, a.jsx)(F.default, {
          width: 16,
          height: 16,
          color: l.default.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [ex.WebSetting.SUBSCRIPTIONS_CREDITS]: {
        section: eL.UserSettingsSections.SUBSCRIPTIONS,
        searchableTitle: ev.default.Messages.BILLING_SUBSCRIPTION_CREDIT,
        parent: ex.WebSetting.SUBSCRIPTIONS
      },
      [ex.WebSetting.GIFT_INVENTORY]: {
        section: eL.UserSettingsSections.INVENTORY,
        searchableTitle: ev.default.Messages.GIFT_INVENTORY,
        label: ev.default.Messages.GIFT_INVENTORY,
        element: ec.default,
        ariaLabel: ev.default.Messages.GIFT_INVENTORY,
        badgeCount: t
      },
      [ex.WebSetting.GIFT_NITRO]: {
        section: eL.UserSettingsSections.INVENTORY,
        searchableTitle: ev.default.Messages.GIFT_NITRO,
        parent: ex.WebSetting.GIFT_INVENTORY,
        predicate: () => !eW && eQ
      },
      [ex.WebSetting.GIFT_CODE_REDEMPTION]: {
        section: eL.UserSettingsSections.INVENTORY,
        searchableTitle: ev.default.Messages.GIFT_INVENTORY_REDEEM_CODES,
        parent: ex.WebSetting.GIFT_INVENTORY,
        predicate: () => !eW
      },
      [ex.WebSetting.GIFT_INVENTORY_QUESTS]: {
        section: eL.UserSettingsSections.INVENTORY,
        searchableTitle: ev.default.Messages.QUESTS,
        parent: ex.WebSetting.GIFT_INVENTORY,
        predicate: () => eK
      },
      [ex.WebSetting.GIFT_INVENTORY_LIST]: {
        section: eL.UserSettingsSections.INVENTORY,
        searchableTitle: ev.default.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED,
        parent: ex.WebSetting.GIFT_INVENTORY,
        predicate: () => !eW
      },
      [ex.WebSetting.GIFT_BLOCKED_PAYMENTS]: {
        section: eL.UserSettingsSections.INVENTORY,
        searchableTitle: ev.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
        parent: ex.WebSetting.GIFT_INVENTORY,
        predicate: () => eW
      },
      [ex.WebSetting.BILLING]: {
        section: eL.UserSettingsSections.BILLING,
        searchableTitle: ev.default.Messages.BILLING,
        label: ev.default.Messages.BILLING,
        ariaLabel: ev.default.Messages.BILLING,
        element: ea.default
      },
      [ex.WebSetting.BILLING_PAYMENT_METHODS]: {
        section: eL.UserSettingsSections.BILLING,
        searchableTitle: ev.default.Messages.BILLING_PAYMENT_SOURCES,
        parent: ex.WebSetting.BILLING
      },
      [ex.WebSetting.BILLING_TRANSACTION_HISTORY]: {
        section: eL.UserSettingsSections.BILLING,
        searchableTitle: ev.default.Messages.BILLING_PAYMENT_HISTORY,
        parent: ex.WebSetting.BILLING
      },
      [ex.WebSetting.APPEARANCE]: {
        section: eL.UserSettingsSections.APPEARANCE,
        searchableTitle: ev.default.Messages.APPEARANCE,
        label: ev.default.Messages.APPEARANCE,
        ariaLabel: ev.default.Messages.APPEARANCE,
        element: et.default,
        newIndicator: (0, a.jsx)(r.PremiumBadge, {
          text: ev.default.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: ej()
      },
      [ex.WebSetting.APPEARANCE_THEME]: {
        section: eL.UserSettingsSections.APPEARANCE,
        searchableTitle: ev.default.Messages.THEME,
        parent: ex.WebSetting.APPEARANCE
      },
      [ex.WebSetting.APPEARANCE_COLOR]: {
        section: eL.UserSettingsSections.APPEARANCE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE,
        parent: ex.WebSetting.APPEARANCE_THEME
      },
      [ex.WebSetting.APPEARANCE_ICON]: {
        section: eL.UserSettingsSections.APPEARANCE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE,
        parent: ex.WebSetting.APPEARANCE_THEME
      },
      [ex.WebSetting.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
        section: eL.UserSettingsSections.APPEARANCE,
        searchableTitle: ev.default.Messages.MESSAGE_DISPLAY_MODE_LABEL,
        parent: ex.WebSetting.APPEARANCE
      },
      [ex.WebSetting.APPEARANCE_SCALING_SPACING]: {
        section: eL.UserSettingsSections.APPEARANCE,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_FONT_SCALING_LABEL,
        parent: ex.WebSetting.APPEARANCE
      },
      [ex.WebSetting.ACCESSIBILITY]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY,
        label: ev.default.Messages.ACCESSIBILITY,
        ariaLabel: ev.default.Messages.ACCESSIBILITY,
        element: Z.default
      },
      [ex.WebSetting.ACCESSIBILITY_SATURATION]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE,
        parent: ex.WebSetting.ACCESSIBILITY
      },
      [ex.WebSetting.ACCESSIBILITY_LINK_DECORATIONS]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL,
        parent: ex.WebSetting.ACCESSIBILITY
      },
      [ex.WebSetting.ACCESSIBILITY_ROLE_STYLE]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
        parent: ex.WebSetting.ACCESSIBILITY
      },
      [ex.WebSetting.ACCESSIBILITY_TAGS]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE,
        parent: ex.WebSetting.ACCESSIBILITY
      },
      [ex.WebSetting.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE,
        parent: ex.WebSetting.ACCESSIBILITY
      },
      [ex.WebSetting.ACCESSIBILITY_CONTRAST]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_SETTINGS_CONTRAST,
        parent: ex.WebSetting.ACCESSIBILITY
      },
      [ex.WebSetting.ACCESSIBILITY_REDUCED_MOTION]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION,
        parent: ex.WebSetting.ACCESSIBILITY
      },
      [ex.WebSetting.ACCESSIBILITY_STICKERS]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.STICKERS_AUTO_PLAY_HEADING,
        parent: ex.WebSetting.ACCESSIBILITY
      },
      [ex.WebSetting.ACCESSIBILITY_MESSAGES]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT,
        parent: ex.WebSetting.ACCESSIBILITY
      },
      [ex.WebSetting.ACCESSIBILITY_TEXT_TO_SPEECH]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.FORM_LABEL_TTS,
        parent: ex.WebSetting.ACCESSIBILITY
      },
      [ex.WebSetting.VOICE_AND_VIDEO]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.VOICE_AND_VIDEO,
        label: ev.default.Messages.VOICE_AND_VIDEO,
        ariaLabel: ev.default.Messages.VOICE_AND_VIDEO,
        element: eD.default,
        predicate: () => U.default.isSupported()
      },
      [ex.WebSetting.VOICE_AND_VIDEO_DEVICES]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: "".concat(ev.default.Messages.FORM_LABEL_INPUT_DEVICE, " ").concat(ev.default.Messages.FORM_LABEL_OUTPUT_DEVICE),
        parent: ex.WebSetting.VOICE_AND_VIDEO
      },
      [ex.WebSetting.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: "".concat(ev.default.Messages.FORM_LABEL_INPUT_VOLUME, " ").concat(ev.default.Messages.FORM_LABEL_OUTPUT_VOLUME),
        parent: ex.WebSetting.VOICE_AND_VIDEO
      },
      [ex.WebSetting.VOICE_AND_VIDEO_MIC_TEST]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE,
        parent: ex.WebSetting.VOICE_AND_VIDEO
      },
      [ex.WebSetting.VOICE_AND_VIDEO_TROUBLESHOOTING]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_HELP_VOICE_VIDEO_TROUBLESHOOTING_SEARCHABLE,
        parent: ex.WebSetting.VOICE_AND_VIDEO
      },
      [ex.WebSetting.VOICE_AND_VIDEO_INPUT_MODE]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_LABEL_INPUT_MODE,
        parent: ex.WebSetting.VOICE_AND_VIDEO
      },
      [ex.WebSetting.VOICE_AND_VIDEO_SENSITIVITY]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_LABEL_INPUT_SENSITIVTY,
        parent: ex.WebSetting.VOICE_AND_VIDEO
      },
      [ex.WebSetting.VOICE_AND_VIDEO_SOUNDS]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.CALL_SOUNDS_SETTINGS,
        parent: ex.WebSetting.VOICE_AND_VIDEO
      },
      [ex.WebSetting.VOICE_AND_VIDEO_SOUNDBOARD]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.SOUNDBOARD,
        parent: ex.WebSetting.VOICE_AND_VIDEO_SOUNDS
      },
      [ex.WebSetting.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.CALL_SOUNDS_SETTINGS,
        parent: ex.WebSetting.VOICE_AND_VIDEO_SOUNDS
      },
      [ex.WebSetting.VOICE_AND_VIDEO_VIDEO]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.VIDEO_SETTINGS,
        parent: ex.WebSetting.VOICE_AND_VIDEO
      },
      [ex.WebSetting.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_LABEL_VIDEO_DEVICE,
        parent: ex.WebSetting.VOICE_AND_VIDEO_VIDEO,
        predicate: () => U.default.supports(eb.Features.VIDEO)
      },
      [ex.WebSetting.VOICE_AND_VIDEO_ADVANCED]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.SETTINGS_ADVANCED,
        parent: ex.WebSetting.VOICE_AND_VIDEO
      },
      [ex.WebSetting.VOICE_AND_VIDEO_ADVANCED_CODECS]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE,
        parent: ex.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [ex.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_LABEL_VOICE_PROCESSING,
        parent: ex.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [ex.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.ECHO_CANCELLATION,
        parent: ex.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.default.getEchoCancellation()
      },
      [ex.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.NOISE_SUPPRESSION,
        parent: ex.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.default.isNoiseSuppressionSupported()
      },
      [ex.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.ADVANCED_VOICE_ACTIVITY,
        parent: ex.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.default.isAdvancedVoiceActivitySupported()
      },
      [ex.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.AUTOMATIC_GAIN_CONTROL,
        parent: ex.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.default.isAutomaticGainControlSupported()
      },
      [ex.WebSetting.VOICE_AND_VIDEO_ADVANCED_QOS]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_LABEL_QOS,
        parent: ex.WebSetting.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => U.default.supports(eb.Features.QOS)
      },
      [ex.WebSetting.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_LABEL_ATTENUATION,
        parent: ex.WebSetting.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => U.default.supports(eb.Features.ATTENUATION)
      },
      [ex.WebSetting.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_LABEL_SUBSYSTEM,
        parent: ex.WebSetting.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => U.default.supports(eb.Features.LEGACY_AUDIO_SUBSYSTEM) || U.default.supports(eb.Features.EXPERIMENTAL_AUDIO_SUBSYSTEM)
      },
      [ex.WebSetting.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.RESET_VOICE_SETTINGS,
        parent: ex.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [ex.WebSetting.POGGERMODE]: {
        section: eL.UserSettingsSections.POGGERMODE,
        searchableTitle: ev.default.Messages.POGGERMODE,
        label: ev.default.Messages.POGGERMODE,
        ariaLabel: ev.default.Messages.POGGERMODE,
        element: h.default,
        predicate: () => O.default.settingsVisible,
        icon: (0, a.jsx)("img", {
          alt: "",
          src: s("542156"),
          className: eU.poggermodeIcon
        })
      },
      [ex.WebSetting.CHAT]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.CHAT,
        label: ev.default.Messages.CHAT,
        ariaLabel: ev.default.Messages.CHAT,
        element: eC.default
      },
      [ex.WebSetting.CHAT_INLINE_MEDIA]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.INLINE_MEDIA_LABEL,
        parent: ex.WebSetting.CHAT
      },
      [ex.WebSetting.CHAT_INLINE_MEDIA_LINKS]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.INLINE_EMBED_MEDIA,
        parent: ex.WebSetting.CHAT_INLINE_MEDIA
      },
      [ex.WebSetting.CHAT_INLINE_MEDIA_UPLOADS]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.INLINE_ATTACHMENT_MEDIA,
        parent: ex.WebSetting.CHAT_INLINE_MEDIA
      },
      [ex.WebSetting.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.IMAGE_DESCRIPTION,
        parent: ex.WebSetting.CHAT_INLINE_MEDIA
      },
      [ex.WebSetting.CHAT_EMBEDS]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.RENDER_EMBEDS_LABEL,
        parent: ex.WebSetting.CHAT
      },
      [ex.WebSetting.CHAT_EMBEDS_LINK_PREVIEWS]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.RENDER_EMBEDS,
        parent: ex.WebSetting.CHAT_EMBEDS
      },
      [ex.WebSetting.CHAT_EMOJI]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.EMOJI,
        parent: ex.WebSetting.CHAT
      },
      [ex.WebSetting.CHAT_EMOJI_REACTIONS]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.RENDER_REACTIONS,
        parent: ex.WebSetting.CHAT_EMOJI
      },
      [ex.WebSetting.CHAT_EMOJI_EMOTICONS]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.CONVERT_EMOTICONS,
        parent: ex.WebSetting.CHAT_EMOJI
      },
      [ex.WebSetting.CHAT_STICKERS]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.STICKERS_AUTO_PLAY_HEADING,
        parent: ex.WebSetting.CHAT
      },
      [ex.WebSetting.CHAT_STICKERS_SUGGESTIONS]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.AUTO_SUGGEST_STICKERS,
        parent: ex.WebSetting.CHAT_STICKERS
      },
      [ex.WebSetting.CHAT_STICKERS_AUTOCOMPLETE]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.STICKERS_IN_AUTOCOMPLETE,
        parent: ex.WebSetting.CHAT_STICKERS
      },
      [ex.WebSetting.CHAT_TEXT_BOX]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.FORM_LABEL_USE_RICH_CHAT_BOX,
        parent: ex.WebSetting.CHAT
      },
      [ex.WebSetting.CHAT_TEXT_BOX_PREVIEW]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.PREVIEW_MARKDOWN_DESCRIPTION,
        parent: ex.WebSetting.CHAT_TEXT_BOX
      },
      [ex.WebSetting.CHAT_THREADS]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.THREADS,
        parent: ex.WebSetting.CHAT
      },
      [ex.WebSetting.CHAT_THREADS_SPLIT_VIEW]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.USE_THREADS_SIDEBAR_DESCRIPTION,
        parent: ex.WebSetting.CHAT_THREADS
      },
      [ex.WebSetting.CHAT_SPOILERS]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.SHOW_SPOILER_CONTENT,
        parent: ex.WebSetting.CHAT
      },
      [ex.WebSetting.NOTIFICATIONS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.NOTIFICATIONS,
        label: ev.default.Messages.NOTIFICATIONS,
        ariaLabel: ev.default.Messages.NOTIFICATIONS,
        element: eT.default
      },
      [ex.WebSetting.NOTIFICATIONS_ENABLE_DESKTOP]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE,
        parent: ex.WebSetting.NOTIFICATIONS
      },
      [ex.WebSetting.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "Mention on all messages",
        parent: ex.WebSetting.NOTIFICATIONS
      },
      [ex.WebSetting.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL,
        parent: ex.WebSetting.NOTIFICATIONS
      },
      [ex.WebSetting.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL,
        parent: ex.WebSetting.NOTIFICATIONS,
        predicate: () => V.isPlatformEmbedded && (0, V.isWindows)()
      },
      [ex.WebSetting.NOTIFICATIONS_UNREAD_SETTINGS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE,
        parent: ex.WebSetting.NOTIFICATIONS
      },
      [ex.WebSetting.NOTIFICATIONS_NEW_SETTINGS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "New Notification Settings (Advancd, Staff Only)",
        parent: ex.WebSetting.NOTIFICATIONS,
        predicate: () => !1
      },
      [ex.WebSetting.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "Restore most recent snapshot",
        parent: ex.WebSetting.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [ex.WebSetting.NOTIFICATIONS_LAUNCH_MIGRATION]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "Launch Migration",
        parent: ex.WebSetting.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [ex.WebSetting.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "Toggle new system on/off",
        parent: ex.WebSetting.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [ex.WebSetting.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
        parent: ex.WebSetting.NOTIFICATIONS
      },
      [ex.WebSetting.NOTIFICATIONS_TEXT_TO_SPEECH]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.FORM_LABEL_TTS,
        parent: ex.WebSetting.NOTIFICATIONS
      },
      [ex.WebSetting.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.GUILD_COMMUNITY_ALERTS_HEADER,
        parent: ex.WebSetting.NOTIFICATIONS
      },
      [ex.WebSetting.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER,
        parent: ex.WebSetting.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [ex.WebSetting.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER,
        parent: ex.WebSetting.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [ex.WebSetting.NOTIFICATIONS_SOUNDS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.SOUNDS,
        parent: ex.WebSetting.NOTIFICATIONS
      },
      [ex.WebSetting.NOTIFICATIONS_EMAILS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS,
        parent: ex.WebSetting.NOTIFICATIONS
      },
      [ex.WebSetting.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION,
        parent: ex.WebSetting.NOTIFICATIONS_EMAILS
      },
      [ex.WebSetting.NOTIFICATIONS_EMAILS_SOCIAL]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL,
        parent: ex.WebSetting.NOTIFICATIONS_EMAILS
      },
      [ex.WebSetting.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS,
        parent: ex.WebSetting.NOTIFICATIONS_EMAILS
      },
      [ex.WebSetting.NOTIFICATIONS_EMAILS_TIPS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS,
        parent: ex.WebSetting.NOTIFICATIONS_EMAILS
      },
      [ex.WebSetting.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS,
        parent: ex.WebSetting.NOTIFICATIONS_EMAILS
      },
      [ex.WebSetting.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING,
        parent: ex.WebSetting.NOTIFICATIONS_EMAILS
      },
      [ex.WebSetting.KEYBINDS]: {
        section: eL.UserSettingsSections.KEYBINDS,
        searchableTitle: ev.default.Messages.KEYBINDS,
        label: ev.default.Messages.KEYBINDS,
        element: eS.default
      },
      [ex.WebSetting.LANGUAGE]: {
        section: eL.UserSettingsSections.LOCALE,
        searchableTitle: ev.default.Messages.LANGUAGE,
        label: ev.default.Messages.LANGUAGE,
        element: eE.default
      },
      [ex.WebSetting.WINDOW_SETTINGS]: {
        section: eL.UserSettingsSections.WINDOWS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        label: ev.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: eh.default,
        predicate: () => V.isPlatformEmbedded && (0, V.isWindows)()
      },
      [ex.WebSetting.LINUX_SETTINGS]: {
        section: eL.UserSettingsSections.LINUX,
        searchableTitle: ev.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        label: ev.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: eG,
        predicate: () => V.isPlatformEmbedded && (0, V.isLinux)()
      },
      [ex.WebSetting.STREAMER_MODE]: {
        section: eL.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.STREAMER_MODE,
        label: ev.default.Messages.STREAMER_MODE,
        ariaLabel: ev.default.Messages.STREAMER_MODE,
        element: eA.default
      },
      [ex.WebSetting.STREAMER_MODE_INTEGRATIONS]: {
        section: eL.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE,
        parent: ex.WebSetting.STREAMER_MODE
      },
      [ex.WebSetting.STREAMER_MODE_ENABLE]: {
        section: eL.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.ENABLE_STREAMER_MODE_LABEL,
        parent: ex.WebSetting.STREAMER_MODE
      },
      [ex.WebSetting.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
        section: eL.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.HIDE_PERSONAL_INFORMATION_LABEL,
        parent: ex.WebSetting.STREAMER_MODE
      },
      [ex.WebSetting.STREAMER_MODE_HIDE_INVITE_LINKS]: {
        section: eL.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.HIDE_INSTANT_INVITES_LABEL,
        parent: ex.WebSetting.STREAMER_MODE
      },
      [ex.WebSetting.STREAMER_MODE_DISABLE_SOUNDS]: {
        section: eL.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE,
        parent: ex.WebSetting.STREAMER_MODE
      },
      [ex.WebSetting.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
        section: eL.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.DISABLE_NOTIFICATIONS_LABEL,
        parent: ex.WebSetting.STREAMER_MODE
      },
      [ex.WebSetting.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
        section: eL.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.HIDE_WINDOW_FROM_STREAM_LABEL,
        parent: ex.WebSetting.STREAMER_MODE,
        predicate: () => {
          var e, t, s;
          return null !== (s = null === E.default || void 0 === E.default ? void 0 : null === (t = E.default.window) || void 0 === t ? void 0 : null === (e = t.supportsContentProtection) || void 0 === e ? void 0 : e.call(t)) && void 0 !== s && s
        }
      },
      [ex.WebSetting.SPEED_TEST]: {
        section: eL.UserSettingsSections.SPEED_TEST,
        searchableTitle: "Speed Test",
        label: "Speed Test",
        element: z.default,
        predicate: () => b.default.isSupported() && Y.default.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [ex.WebSetting.SETTINGS_ADVANCED]: {
        section: eL.UserSettingsSections.ADVANCED,
        searchableTitle: ev.default.Messages.SETTINGS_ADVANCED,
        label: ev.default.Messages.SETTINGS_ADVANCED,
        ariaLabel: ev.default.Messages.SETTINGS_ADVANCED,
        element: ee.default
      },
      [ex.WebSetting.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
        section: eL.UserSettingsSections.ADVANCED,
        searchableTitle: ev.default.Messages.DEVELOPER_MODE,
        parent: ex.WebSetting.SETTINGS_ADVANCED
      },
      [ex.WebSetting.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
        section: eL.UserSettingsSections.ADVANCED,
        searchableTitle: ev.default.Messages.HARDWARE_ACCELERATION,
        parent: ex.WebSetting.SETTINGS_ADVANCED
      },
      [ex.WebSetting.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
        section: eL.UserSettingsSections.ADVANCED,
        searchableTitle: ev.default.Messages.USER_SETTINGS_SHOW_LIBRARY,
        parent: ex.WebSetting.SETTINGS_ADVANCED
      },
      [ex.WebSetting.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
        section: eL.UserSettingsSections.ADVANCED,
        searchableTitle: ev.default.Messages.DEVELOPER_APPLICATION_TEST_MODE,
        parent: ex.WebSetting.SETTINGS_ADVANCED,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME]: {
        section: eL.UserSettingsSections.ADVANCED,
        searchableTitle: ev.default.Messages.USER_SETTINGS_HOME_AUTO_NAV,
        parent: ex.WebSetting.SETTINGS_ADVANCED
      },
      [ex.WebSetting.ACTIVITY_PRIVACY]: {
        section: eL.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: ev.default.Messages.ACTIVITY_PRIVACY,
        label: ev.default.Messages.ACTIVITY_PRIVACY,
        ariaLabel: ev.default.Messages.ACTIVITY_PRIVACY,
        element: $.default,
        predicate: () => !eV
      },
      [ex.WebSetting.ACTIVITY_PRIVACY_STATUS]: {
        section: eV ? eL.UserSettingsSections.GAMES : eL.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: ev.default.Messages.ACTIVITY_STATUS,
        parent: eV ? ex.WebSetting.GAMES : ex.WebSetting.ACTIVITY_PRIVACY
      },
      [ex.WebSetting.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
        section: eV ? eL.UserSettingsSections.GAMES : eL.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: ev.default.Messages.ACTIVITY_PARTY_PRIVACY,
        parent: eV ? ex.WebSetting.GAMES : ex.WebSetting.ACTIVITY_PRIVACY
      },
      [ex.WebSetting.REGISTERED_GAMES]: {
        section: eL.UserSettingsSections.REGISTERED_GAMES,
        searchableTitle: ev.default.Messages.REGISTERED_GAMES,
        label: ev.default.Messages.REGISTERED_GAMES,
        element: ed.default,
        predicate: () => !eV && (0, ep.shouldShowRegisteredGamesSettings)()
      },
      [ex.WebSetting.OVERLAY]: {
        section: eL.UserSettingsSections.OVERLAY,
        searchableTitle: ev.default.Messages.OVERLAY,
        label: ev.default.Messages.OVERLAY,
        element: e_.default,
        predicate: () => !eV && eB
      },
      [ex.WebSetting.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, _.openChangelog)(!0),
        searchableTitle: ev.default.Messages.WHATS_NEW,
        label: ev.default.Messages.WHATS_NEW
      },
      [ex.WebSetting.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          B.default.track(eL.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, y.handleClick)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              B.default.track(eL.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, T.default)(e)
            }
          })
        },
        searchableTitle: ev.default.Messages.MERCHANDISE,
        label: ev.default.Messages.MERCHANDISE,
        ariaLabel: ev.default.Messages.MERCHANDISE
      },
      [ex.WebSetting.HYPESQUAD]: {
        section: eL.UserSettingsSections.HYPESQUAD_ONLINE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_HYPESQUAD,
        label: ev.default.Messages.USER_SETTINGS_HYPESQUAD,
        element: eu.default
      },
      [ex.WebSetting.EXPERIMENTS]: {
        section: eL.UserSettingsSections.EXPERIMENTS,
        searchableTitle: "Experiments",
        label: "Experiments",
        element: eR.default,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Developer Options",
        label: "Developer Options",
        ariaLabel: "Developer Options",
        element: el.default,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_FLAGS]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Developer Options Flags",
        parent: ex.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Tracing Requests",
        parent: ex.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_FORCED_CANARY]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Forced Canary",
        parent: ex.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Gateway Events To Console",
        parent: ex.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Rpc Events Commands",
        parent: ex.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Analytics Events Logging",
        parent: ex.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Source Maps",
        parent: ex.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Analytics Debugger View",
        parent: ex.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Idle Status Indicator",
        parent: ex.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Accessibility Auditing",
        parent: ex.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Preview Unpublished Collections",
        parent: ex.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side",
        parent: ex.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side Premium Type",
        parent: ex.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side Account Created Data",
        parent: ex.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Open Overlay",
        parent: ex.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_RESET_SOCKET]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Reset Socket",
        parent: ex.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Clear Caches",
        parent: ex.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_CRASHES]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Crashes",
        parent: ex.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Survey Override",
        parent: ex.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Changelog Override",
        parent: ex.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Build Override",
        parent: ex.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.HOTSPOT_OPTIONS]: {
        section: eL.UserSettingsSections.HOTSPOT_OPTIONS,
        searchableTitle: "Hotspot Options",
        label: "Hotspot Options",
        element: w.default,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: eL.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
        searchableTitle: "Dismissible Contents",
        label: "Dismissible Contents",
        element: m.default,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.PAYMENT_FLOW_MODALS]: {
        section: eL.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
        searchableTitle: "Payment Flow Modals",
        label: "Payment Flow Modals",
        element: W.default,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.TEXT_PLAYGROUND]: {
        section: eL.UserSettingsSections.TEXT_PLAYGROUND,
        searchableTitle: "Text Playground",
        label: "Text Playground",
        element: eO.default,
        predicate: () => (0, q.shouldShowTextPlayground)() || v.default.isDeveloper
      },
      [ex.WebSetting.DESIGN_SYSTEMS]: {
        section: eL.UserSettingsSections.DESIGN_SYSTEMS,
        searchableTitle: "Design Systems",
        label: "Design Systems",
        element: ei.default,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.TEXT_COMPONENTS]: {
        section: eL.UserSettingsSections.TEXT_COMPONENT,
        searchableTitle: "Text Components",
        label: "Text Components",
        element: X.default,
        predicate: () => (0, q.shouldShowTextPlayground)() || v.default.isDeveloper
      },
      [ex.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: eL.UserSettingsSections.PROFILE_EFFECTS_PREVIEW_TOOL,
        searchableTitle: "Profile Effects Preview Tool",
        label: "Profile Effects Preview Tool",
        element: g.default,
        predicate: () => v.default.isDeveloper
      },
      [ex.WebSetting.QUEST_PREVIEW_TOOL]: {
        section: eL.UserSettingsSections.QUEST_PREVIEW_TOOL,
        searchableTitle: "Quest Preview Tool",
        label: "Quest Preview Tool",
        element: P.default,
        predicate: () => (0, L.isQuestPreviewToolEnabled)({
          location: eP.QuestsExperimentLocations.QUEST_PREVIEW_TOOL
        })
      },
      [ex.WebSetting.LOGOUT]: {
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
        icon: (0, a.jsx)(G.default, {
          width: 16,
          height: 16
        })
      },
      [ex.WebSetting.SOCIAL_LINKS]: {
        section: S.SectionTypes.CUSTOM,
        element: Q.default
      },
      [ex.WebSetting.CLIENT_DEBUG_INFO]: {
        section: S.SectionTypes.CUSTOM,
        element: k.default
      }
    })
  }