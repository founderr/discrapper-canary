"use strict";
s.r(t), s.d(t, {
  getConfig: function() {
    return eB
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
  C = s("18438"),
  A = s("778825"),
  O = s("351780"),
  h = s("231765"),
  p = s("837741"),
  R = s("804545"),
  M = s("813732"),
  x = s("398140"),
  D = s("564344"),
  L = s("977156"),
  P = s("652380"),
  b = s("171156"),
  v = s("906467"),
  U = s("131951"),
  j = s("25990"),
  G = s("87086"),
  F = s("759231"),
  B = s("26290"),
  y = s("626135"),
  V = s("49012"),
  H = s("358085"),
  Y = s("392735"),
  k = s("61160"),
  w = s("604227"),
  W = s("38915"),
  K = s("498639"),
  z = s("748717"),
  Q = s("419636"),
  X = s("35426"),
  q = s("799071"),
  Z = s("601433"),
  J = s("154022"),
  $ = s("393681"),
  ee = s("309739"),
  et = s("64914"),
  es = s("501348"),
  ea = s("795594"),
  en = s("443702"),
  ei = s("920914"),
  el = s("177508"),
  er = s("956699"),
  eo = s("54942"),
  ed = s("15780"),
  eu = s("293389"),
  ec = s("88624"),
  eS = s("387747"),
  eE = s("389650"),
  eT = s("649157"),
  e_ = s("593648"),
  eI = s("327885"),
  eN = s("595242"),
  eg = s("301121"),
  ef = s("207874"),
  em = s("463153"),
  eC = s("36192"),
  eA = s("338345"),
  eO = s("400287"),
  eh = s("554042"),
  ep = s("200645"),
  eR = s("287490"),
  eM = s("168308"),
  ex = s("277329"),
  eD = s("674116"),
  eL = s("726985"),
  eP = s("981631"),
  eb = s("46140"),
  ev = s("65154"),
  eU = s("689938"),
  ej = s("442691");
let eG = () => {
    let e = "Settings list view",
      t = [i.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, i.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE];
    return p.BrandRefreshPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(i.DismissibleContent.BRAND_REFRESH_NEW_BADGE), R.PrideMonthPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(i.DismissibleContent.PRIDE_ICONS_APPEARANCE_BADGE), t
  },
  eF = ep.default,
  eB = e => {
    let {
      unseenGiftCount: t,
      showPrepaidPaymentPastDueWarning: p,
      impressionSource: R,
      numOfPendingFamilyRequests: eB,
      isOverlaySupported: ey,
      isClipsBetaTagShowing: eV = !1,
      shouldMergeGameSettings: eH,
      isUserSettingsSearchEnabled: eY,
      isKeywordFilteringEnabled: ek,
      isStaff: ew,
      isInappropriateConversationWarningEnabled: eW,
      paymentsBlocked: eK,
      isEligibleForQuests: ez,
      showGiftNitro: eQ
    } = e;
    return Object.freeze({
      [eL.WebSetting.SEARCH_BAR]: {
        section: S.SectionTypes.CUSTOM,
        element: ef.default,
        predicate: () => eY
      },
      [eL.WebSetting.SEARCH_NO_RESULTS]: {
        section: S.SectionTypes.CUSTOM,
        element: em.default,
        predicate: () => eY
      },
      [eL.WebSetting.ACCOUNT]: {
        section: eP.UserSettingsSections.ACCOUNT,
        searchableTitle: eU.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        label: eU.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: eU.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: $.default
      },
      [eL.WebSetting.ACCOUNT_PROFILE]: {
        searchableTitle: eU.default.Messages.PROFILE,
        parent: eL.WebSetting.ACCOUNT,
        section: eP.UserSettingsSections.ACCOUNT
      },
      [eL.WebSetting.ACCOUNT_DISPLAY_NAME]: {
        searchableTitle: eU.default.Messages.DISPLAY_NAME,
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PROFILE
      },
      [eL.WebSetting.ACCOUNT_PHONE_NUMBER]: {
        searchableTitle: eU.default.Messages.CHANGE_PHONE_NUMBER,
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PROFILE
      },
      [eL.WebSetting.ACCOUNT_USERNAME]: {
        searchableTitle: eU.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE,
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PROFILE
      },
      [eL.WebSetting.ACCOUNT_EMAIL]: {
        searchableTitle: eU.default.Messages.CHANGE_EMAIL,
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PROFILE
      },
      [eL.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT,
        searchableTitle: eU.default.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_CHANGE_PASSWORD]: {
        searchableTitle: eU.default.Messages.CHANGE_PASSWORD,
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_CONFIRM_PASSWORD]: {
        searchableTitle: eU.default.Messages.FORM_LABEL_CONFIRM_PASSWORD,
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
        searchableTitle: eU.default.Messages.SETTINGS_TWO_FA,
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_ENABLE_2FA]: {
        searchableTitle: eU.default.Messages.TWO_FA_ENABLE,
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_REMOVE_2FA]: {
        searchableTitle: eU.default.Messages.TWO_FA_REMOVE,
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_VIEW_BACKUP_CODES]: {
        searchableTitle: eU.default.Messages.TWO_FA_BACKUP_CODE,
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_SMS_BACKUP]: {
        searchableTitle: eU.default.Messages.MFA_SMS_AUTH,
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_SECURITY_KEYS]: {
        searchableTitle: eU.default.Messages.TWO_FA_WEBAUTHN_REGISTER,
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.WebSetting.ACCOUNT_REMOVAL]: {
        section: eP.UserSettingsSections.ACCOUNT,
        searchableTitle: eU.default.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION,
        parent: eL.WebSetting.ACCOUNT
      },
      [eL.WebSetting.ACCOUNT_DISABLE_ACCOUNT]: {
        section: eP.UserSettingsSections.ACCOUNT,
        searchableTitle: eU.default.Messages.DISABLE_ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_REMOVAL
      },
      [eL.WebSetting.ACCOUNT_DELETE_ACCOUNT]: {
        section: eP.UserSettingsSections.ACCOUNT,
        searchableTitle: eU.default.Messages.DELETE_ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_DISABLE_ACCOUNT
      },
      [eL.WebSetting.GAMES]: {
        section: eP.UserSettingsSections.GAMES,
        searchableTitle: eU.default.Messages.GAMES,
        label: eU.default.Messages.GAMES,
        ariaLabel: eU.default.Messages.GAMES,
        element: ex.default,
        predicate: () => eH
      },
      [eL.WebSetting.GAMES_MY_GAMES]: {
        section: eP.UserSettingsSections.GAMES,
        searchableTitle: eU.default.Messages.MY_GAMES,
        parent: eL.WebSetting.GAMES
      },
      [eL.WebSetting.GAMES_CLIPS]: {
        section: eP.UserSettingsSections.GAMES,
        searchableTitle: eU.default.Messages.CLIPS,
        parent: eL.WebSetting.GAMES
      },
      [eL.WebSetting.GAMES_OVERLAY]: {
        section: eP.UserSettingsSections.GAMES,
        searchableTitle: eU.default.Messages.OVERLAY,
        parent: eL.WebSetting.GAMES
      },
      [eL.WebSetting.GAMES_ACTIVITY_PRIVACY]: {
        section: eP.UserSettingsSections.GAMES,
        searchableTitle: eU.default.Messages.ACTIVITY_PRIVACY,
        parent: eL.WebSetting.GAMES
      },
      [eL.WebSetting.PROFILE_CUSTOMIZATION]: {
        section: eP.UserSettingsSections.PROFILE_CUSTOMIZATION,
        type: S.ContentTypes.WIDE,
        searchableTitle: eU.default.Messages.USER_SETTINGS_PROFILES,
        label: eU.default.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: eU.default.Messages.USER_SETTINGS_PROFILES,
        element: D.default,
        newIndicator: (0, a.jsx)(B.PremiumBadge, {
          text: eU.default.Messages.NEW
        }),
        notice: {
          stores: [j.default, A.default],
          element: x.default
        },
        onSettingsClose: () => {
          o.default.wait(() => {
            (0, C.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eP.UserSettingsSections.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [eL.WebSetting.PROFILE_DISPLAY_NAME]: {
        section: eP.UserSettingsSections.PROFILE_CUSTOMIZATION,
        searchableTitle: eU.default.Messages.DISPLAY_NAME,
        parent: eL.WebSetting.PROFILE_CUSTOMIZATION
      },
      [eL.WebSetting.PROFILE_USER_PROFILE]: {
        section: eP.UserSettingsSections.PROFILE_CUSTOMIZATION,
        searchableTitle: eU.default.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE,
        parent: eL.WebSetting.PROFILE_CUSTOMIZATION
      },
      [eL.WebSetting.PROFILE_SERVER_PROFILES]: {
        section: eP.UserSettingsSections.PROFILE_CUSTOMIZATION,
        searchableTitle: eU.default.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY,
        parent: eL.WebSetting.PROFILE_CUSTOMIZATION
      },
      [eL.WebSetting.PRIVACY_AND_SAFETY]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        label: eU.default.Messages.PRIVACY_AND_SAFETY,
        searchableTitle: eU.default.Messages.PRIVACY_AND_SAFETY,
        ariaLabel: eU.default.Messages.PRIVACY_AND_SAFETY,
        element: eg.default
      },
      [eL.WebSetting.PRIVACY_USER_SETTINGS]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eU.default.Messages.PRIVACY_AND_SAFETY,
        parent: eL.WebSetting.PRIVACY_AND_SAFETY
      },
      [eL.WebSetting.PRIVACY_SENSITIVE_MEDIA]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eU.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS
      },
      [eL.WebSetting.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eU.default.Messages.SETTINGS_DM_SPAM_FILTER,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS
      },
      [eL.WebSetting.PRIVACY_SERVER_PRIVACY]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eU.default.Messages.USER_DM_SETTINGS,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS
      },
      [eL.WebSetting.PRIVACY_DATA_PRIVACY]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eU.default.Messages.SETTINGS_DATA_PRIVACY_CONTROLS,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS
      },
      [eL.WebSetting.PRIVACY_STAFF_ONLY]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eU.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS,
        predicate: () => ew
      },
      [eL.WebSetting.PRIVACY_KEYWORD_FILTER]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eU.default.Messages.USER_KEYWORD_FILTERS_DESCRIPTION,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS,
        predicate: () => ek
      },
      [eL.WebSetting.PRIVACY_KEYWORD_FILTER_PROFANITY]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eU.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_TITLE,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS,
        predicate: () => ek
      },
      [eL.WebSetting.PRIVACY_KEYWORD_FILTER_INSULTS_SLURS]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eU.default.Messages.USER_KEYWORD_FILTERS_SLURS_TITLE,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS,
        predicate: () => ek
      },
      [eL.WebSetting.PRIVACY_KEYWORD_FILTER_SEXUAL_CONTENT]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eU.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_TITLE,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS,
        predicate: () => ek
      },
      [eL.WebSetting.PRIVACY_TERMS_POLICY]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS
      },
      [eL.WebSetting.PRIVACY_SAFETY_ALERTS]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eU.default.Messages.SAFETY_ALERTS_SETTING_TITLE,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS,
        predicate: () => eW
      },
      [eL.WebSetting.PRIVACY_ACCOUNT_STANDING]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eU.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
        parent: eL.WebSetting.PRIVACY_AND_SAFETY
      },
      [eL.WebSetting.PRIVACY_FAMILY_CENTER]: {
        section: eP.UserSettingsSections.FAMILY_CENTER,
        searchableTitle: eU.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        label: eU.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: eU.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: eo.default,
        badgeCount: eB,
        newIndicator: (0, a.jsx)(B.TextBadge, {
          text: eU.default.Messages.NEW,
          color: f.default.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [i.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
      },
      [eL.WebSetting.AUTHORIZED_APPS]: {
        section: eP.UserSettingsSections.AUTHORIZED_APPS,
        searchableTitle: eU.default.Messages.AUTHORIZED_APPS,
        label: eU.default.Messages.AUTHORIZED_APPS,
        element: ea.default
      },
      [eL.WebSetting.SESSIONS]: {
        section: eP.UserSettingsSections.SESSIONS,
        searchableTitle: eU.default.Messages.AUTH_SESSIONS,
        label: eU.default.Messages.AUTH_SESSIONS,
        ariaLabel: eU.default.Messages.AUTH_SESSIONS,
        element: eC.default,
        newIndicatorDismissibleContentTypes: [i.DismissibleContent.AUTH_SESSIONS_NEW],
        predicate: () => Y.default.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [eL.WebSetting.CONNECTIONS]: {
        section: eP.UserSettingsSections.CONNECTIONS,
        searchableTitle: eU.default.Messages.CONNECTIONS,
        label: eU.default.Messages.CONNECTIONS,
        ariaLabel: eU.default.Messages.CONNECTIONS,
        element: ei.default,
        impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: R
        },
        newIndicatorDismissibleContentTypes: [i.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
      },
      [eL.WebSetting.CONNECTIONS_CONNECTED_ACCOUNTS]: {
        section: eP.UserSettingsSections.CONNECTIONS,
        searchableTitle: eU.default.Messages.CONNECTED_ACCOUNTS,
        parent: eL.WebSetting.CONNECTIONS,
        element: ei.default
      },
      [eL.WebSetting.CLIPS]: {
        section: eP.UserSettingsSections.CLIPS,
        searchableTitle: eU.default.Messages.CLIPS,
        label: eU.default.Messages.CLIPS,
        ariaLabel: eU.default.Messages.CLIPS,
        icon: eV ? (0, a.jsx)(I.default, {}) : void 0,
        element: N.default,
        predicate: () => !eH
      },
      [eL.WebSetting.FRIEND_REQUESTS]: {
        section: eP.UserSettingsSections.FRIEND_REQUESTS,
        searchableTitle: eU.default.Messages.FRIEND_REQUESTS,
        label: eU.default.Messages.FRIEND_REQUESTS,
        element: ed.default
      },
      [eL.WebSetting.PREMIUM]: {
        section: eP.UserSettingsSections.PREMIUM,
        ariaLabel: eU.default.Messages.PREMIUM,
        searchableTitle: eU.default.Messages.PREMIUM,
        label: eU.default.Messages.PREMIUM,
        element: z.default,
        className: ej.premiumTab
      },
      [eL.WebSetting.GUILD_BOOSTING]: {
        section: eP.UserSettingsSections.GUILD_BOOSTING,
        searchableTitle: eU.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        label: eU.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: eN.default
      },
      [eL.WebSetting.SUBSCRIPTIONS]: {
        section: eP.UserSettingsSections.SUBSCRIPTIONS,
        ariaLabel: eU.default.Messages.SUBSCRIPTIONS_TITLE,
        searchableTitle: eU.default.Messages.SUBSCRIPTIONS_TITLE,
        label: eU.default.Messages.SUBSCRIPTIONS_TITLE,
        element: M.default,
        icon: p ? (0, a.jsx)(F.default, {
          width: 16,
          height: 16,
          color: l.default.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [eL.WebSetting.SUBSCRIPTIONS_CREDITS]: {
        section: eP.UserSettingsSections.SUBSCRIPTIONS,
        searchableTitle: eU.default.Messages.BILLING_SUBSCRIPTION_CREDIT,
        parent: eL.WebSetting.SUBSCRIPTIONS
      },
      [eL.WebSetting.GIFT_INVENTORY]: {
        section: eP.UserSettingsSections.INVENTORY,
        searchableTitle: eU.default.Messages.GIFT_INVENTORY,
        label: eU.default.Messages.GIFT_INVENTORY,
        element: eS.default,
        ariaLabel: eU.default.Messages.GIFT_INVENTORY,
        badgeCount: t
      },
      [eL.WebSetting.GIFT_NITRO]: {
        section: eP.UserSettingsSections.INVENTORY,
        searchableTitle: eU.default.Messages.GIFT_NITRO,
        parent: eL.WebSetting.GIFT_INVENTORY,
        predicate: () => !eK && eQ
      },
      [eL.WebSetting.GIFT_CODE_REDEMPTION]: {
        section: eP.UserSettingsSections.INVENTORY,
        searchableTitle: eU.default.Messages.GIFT_INVENTORY_REDEEM_CODES,
        parent: eL.WebSetting.GIFT_INVENTORY,
        predicate: () => !eK
      },
      [eL.WebSetting.GIFT_INVENTORY_QUESTS]: {
        section: eP.UserSettingsSections.INVENTORY,
        searchableTitle: eU.default.Messages.QUESTS,
        parent: eL.WebSetting.GIFT_INVENTORY,
        predicate: () => ez
      },
      [eL.WebSetting.GIFT_INVENTORY_LIST]: {
        section: eP.UserSettingsSections.INVENTORY,
        searchableTitle: eU.default.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED,
        parent: eL.WebSetting.GIFT_INVENTORY,
        predicate: () => !eK
      },
      [eL.WebSetting.GIFT_BLOCKED_PAYMENTS]: {
        section: eP.UserSettingsSections.INVENTORY,
        searchableTitle: eU.default.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
        parent: eL.WebSetting.GIFT_INVENTORY,
        predicate: () => eK
      },
      [eL.WebSetting.BILLING]: {
        section: eP.UserSettingsSections.BILLING,
        searchableTitle: eU.default.Messages.BILLING,
        label: eU.default.Messages.BILLING,
        ariaLabel: eU.default.Messages.BILLING,
        element: en.default
      },
      [eL.WebSetting.BILLING_PAYMENT_METHODS]: {
        section: eP.UserSettingsSections.BILLING,
        searchableTitle: eU.default.Messages.BILLING_PAYMENT_SOURCES,
        parent: eL.WebSetting.BILLING
      },
      [eL.WebSetting.BILLING_TRANSACTION_HISTORY]: {
        section: eP.UserSettingsSections.BILLING,
        searchableTitle: eU.default.Messages.BILLING_PAYMENT_HISTORY,
        parent: eL.WebSetting.BILLING
      },
      [eL.WebSetting.APPEARANCE]: {
        section: eP.UserSettingsSections.APPEARANCE,
        searchableTitle: eU.default.Messages.APPEARANCE,
        label: eU.default.Messages.APPEARANCE,
        ariaLabel: eU.default.Messages.APPEARANCE,
        element: es.default,
        newIndicator: (0, a.jsx)(B.PremiumBadge, {
          text: eU.default.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: eG()
      },
      [eL.WebSetting.APPEARANCE_THEME]: {
        section: eP.UserSettingsSections.APPEARANCE,
        searchableTitle: eU.default.Messages.THEME,
        parent: eL.WebSetting.APPEARANCE
      },
      [eL.WebSetting.APPEARANCE_COLOR]: {
        section: eP.UserSettingsSections.APPEARANCE,
        searchableTitle: eU.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE,
        parent: eL.WebSetting.APPEARANCE_THEME
      },
      [eL.WebSetting.APPEARANCE_ICON]: {
        section: eP.UserSettingsSections.APPEARANCE,
        searchableTitle: eU.default.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE,
        parent: eL.WebSetting.APPEARANCE_THEME
      },
      [eL.WebSetting.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
        section: eP.UserSettingsSections.APPEARANCE,
        searchableTitle: eU.default.Messages.MESSAGE_DISPLAY_MODE_LABEL,
        parent: eL.WebSetting.APPEARANCE
      },
      [eL.WebSetting.APPEARANCE_SCALING_SPACING]: {
        section: eP.UserSettingsSections.APPEARANCE,
        searchableTitle: eU.default.Messages.ACCESSIBILITY_FONT_SCALING_LABEL,
        parent: eL.WebSetting.APPEARANCE
      },
      [eL.WebSetting.ACCESSIBILITY]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eU.default.Messages.ACCESSIBILITY,
        label: eU.default.Messages.ACCESSIBILITY,
        ariaLabel: eU.default.Messages.ACCESSIBILITY,
        element: J.default
      },
      [eL.WebSetting.ACCESSIBILITY_SATURATION]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eU.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_LINK_DECORATIONS]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eU.default.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_ROLE_STYLE]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eU.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_TAGS]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eU.default.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eU.default.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_CONTRAST]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eU.default.Messages.ACCESSIBILITY_SETTINGS_CONTRAST,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_REDUCED_MOTION]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eU.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_STICKERS]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eU.default.Messages.STICKERS_AUTO_PLAY_HEADING,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_MESSAGES]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eU.default.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_TEXT_TO_SPEECH]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eU.default.Messages.FORM_LABEL_TTS,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.VOICE_AND_VIDEO]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.VOICE_AND_VIDEO,
        label: eU.default.Messages.VOICE_AND_VIDEO,
        ariaLabel: eU.default.Messages.VOICE_AND_VIDEO,
        element: eD.default,
        predicate: () => U.default.isSupported()
      },
      [eL.WebSetting.VOICE_AND_VIDEO_DEVICES]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.FORM_LABEL_INPUT_DEVICE + eU.default.Messages.FORM_LABEL_OUTPUT_DEVICE,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.FORM_LABEL_INPUT_VOLUME,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_MIC_TEST]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_TROUBLESHOOTING]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.FORM_HELP_VOICE_VIDEO_TROUBLESHOOTING_SEARCHABLE,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_INPUT_MODE]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.FORM_LABEL_INPUT_MODE,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_SENSITIVITY]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.FORM_LABEL_INPUT_SENSITIVTY,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_SOUNDS]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.CALL_SOUNDS_SETTINGS,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_SOUNDBOARD]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.SOUNDBOARD,
        parent: eL.WebSetting.VOICE_AND_VIDEO_SOUNDS
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.CALL_SOUNDS_SETTINGS,
        parent: eL.WebSetting.VOICE_AND_VIDEO_SOUNDS
      },
      [eL.WebSetting.VOICE_AND_VIDEO_VIDEO]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.VIDEO_SETTINGS,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.FORM_LABEL_VIDEO_DEVICE,
        parent: eL.WebSetting.VOICE_AND_VIDEO_VIDEO,
        predicate: () => U.default.supports(ev.Features.VIDEO)
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.SETTINGS_ADVANCED,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_CODECS]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE,
        parent: eL.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.FORM_LABEL_VOICE_PROCESSING,
        parent: eL.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.ECHO_CANCELLATION,
        parent: eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.default.getEchoCancellation()
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.NOISE_SUPPRESSION,
        parent: eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.default.isNoiseSuppressionSupported()
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.ADVANCED_VOICE_ACTIVITY,
        parent: eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.default.isAdvancedVoiceActivitySupported()
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.AUTOMATIC_GAIN_CONTROL,
        parent: eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.default.isAutomaticGainControlSupported()
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_QOS]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.FORM_LABEL_QOS,
        parent: eL.WebSetting.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => U.default.supports(ev.Features.QOS)
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.FORM_LABEL_ATTENUATION,
        parent: eL.WebSetting.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => U.default.supports(ev.Features.ATTENUATION)
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.FORM_LABEL_SUBSYSTEM,
        parent: eL.WebSetting.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => U.default.supports(ev.Features.LEGACY_AUDIO_SUBSYSTEM) || U.default.supports(ev.Features.EXPERIMENTAL_AUDIO_SUBSYSTEM)
      },
      [eL.WebSetting.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: eU.default.Messages.RESET_VOICE_SETTINGS,
        parent: eL.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [eL.WebSetting.POGGERMODE]: {
        section: eP.UserSettingsSections.POGGERMODE,
        searchableTitle: eU.default.Messages.POGGERMODE,
        label: eU.default.Messages.POGGERMODE,
        ariaLabel: eU.default.Messages.POGGERMODE,
        element: h.default,
        predicate: () => O.default.settingsVisible,
        icon: (0, a.jsx)("img", {
          alt: "",
          src: s("542156"),
          className: ej.poggermodeIcon
        })
      },
      [eL.WebSetting.CHAT]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.CHAT,
        label: eU.default.Messages.CHAT,
        ariaLabel: eU.default.Messages.CHAT,
        element: eO.default
      },
      [eL.WebSetting.CHAT_INLINE_MEDIA]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.INLINE_MEDIA_LABEL,
        parent: eL.WebSetting.CHAT
      },
      [eL.WebSetting.CHAT_INLINE_MEDIA_LINKS]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.INLINE_EMBED_MEDIA,
        parent: eL.WebSetting.CHAT_INLINE_MEDIA
      },
      [eL.WebSetting.CHAT_INLINE_MEDIA_UPLOADS]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.INLINE_ATTACHMENT_MEDIA,
        parent: eL.WebSetting.CHAT_INLINE_MEDIA
      },
      [eL.WebSetting.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.IMAGE_DESCRIPTION,
        parent: eL.WebSetting.CHAT_INLINE_MEDIA
      },
      [eL.WebSetting.CHAT_EMBEDS]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.RENDER_EMBEDS_LABEL,
        parent: eL.WebSetting.CHAT
      },
      [eL.WebSetting.CHAT_EMBEDS_LINK_PREVIEWS]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.RENDER_EMBEDS,
        parent: eL.WebSetting.CHAT_EMBEDS
      },
      [eL.WebSetting.CHAT_EMOJI]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.EMOJI,
        parent: eL.WebSetting.CHAT
      },
      [eL.WebSetting.CHAT_EMOJI_REACTIONS]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.RENDER_REACTIONS,
        parent: eL.WebSetting.CHAT_EMOJI
      },
      [eL.WebSetting.CHAT_EMOJI_EMOTICONS]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.CONVERT_EMOTICONS,
        parent: eL.WebSetting.CHAT_EMOJI
      },
      [eL.WebSetting.CHAT_STICKERS]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.STICKERS_AUTO_PLAY_HEADING,
        parent: eL.WebSetting.CHAT
      },
      [eL.WebSetting.CHAT_STICKERS_SUGGESTIONS]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.AUTO_SUGGEST_STICKERS,
        parent: eL.WebSetting.CHAT_STICKERS
      },
      [eL.WebSetting.CHAT_STICKERS_AUTOCOMPLETE]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.STICKERS_IN_AUTOCOMPLETE,
        parent: eL.WebSetting.CHAT_STICKERS
      },
      [eL.WebSetting.CHAT_TEXT_BOX]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.FORM_LABEL_USE_RICH_CHAT_BOX,
        parent: eL.WebSetting.CHAT
      },
      [eL.WebSetting.CHAT_TEXT_BOX_PREVIEW]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.PREVIEW_MARKDOWN_DESCRIPTION,
        parent: eL.WebSetting.CHAT_TEXT_BOX
      },
      [eL.WebSetting.CHAT_THREADS]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.THREADS,
        parent: eL.WebSetting.CHAT
      },
      [eL.WebSetting.CHAT_THREADS_SPLIT_VIEW]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.USE_THREADS_SIDEBAR_DESCRIPTION,
        parent: eL.WebSetting.CHAT_THREADS
      },
      [eL.WebSetting.CHAT_SPOILERS]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: eU.default.Messages.SHOW_SPOILER_CONTENT,
        parent: eL.WebSetting.CHAT
      },
      [eL.WebSetting.NOTIFICATIONS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.NOTIFICATIONS,
        label: eU.default.Messages.NOTIFICATIONS,
        ariaLabel: eU.default.Messages.NOTIFICATIONS,
        element: e_.default
      },
      [eL.WebSetting.NOTIFICATIONS_ENABLE_DESKTOP]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "Mention on all messages",
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL,
        parent: eL.WebSetting.NOTIFICATIONS,
        predicate: () => H.isPlatformEmbedded && (0, H.isWindows)()
      },
      [eL.WebSetting.NOTIFICATIONS_UNREAD_SETTINGS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_NEW_SETTINGS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "New Notification Settings (Advancd, Staff Only)",
        parent: eL.WebSetting.NOTIFICATIONS,
        predicate: () => !1
      },
      [eL.WebSetting.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "Restore most recent snapshot",
        parent: eL.WebSetting.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [eL.WebSetting.NOTIFICATIONS_LAUNCH_MIGRATION]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "Launch Migration",
        parent: eL.WebSetting.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [eL.WebSetting.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "Toggle new system on/off",
        parent: eL.WebSetting.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [eL.WebSetting.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_TEXT_TO_SPEECH]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.FORM_LABEL_TTS,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.GUILD_COMMUNITY_ALERTS_HEADER,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER,
        parent: eL.WebSetting.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [eL.WebSetting.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER,
        parent: eL.WebSetting.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [eL.WebSetting.NOTIFICATIONS_SOUNDS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.SOUNDS,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_EMAILS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION,
        parent: eL.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eL.WebSetting.NOTIFICATIONS_EMAILS_SOCIAL]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL,
        parent: eL.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eL.WebSetting.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS,
        parent: eL.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eL.WebSetting.NOTIFICATIONS_EMAILS_TIPS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS,
        parent: eL.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eL.WebSetting.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS,
        parent: eL.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eL.WebSetting.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eU.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING,
        parent: eL.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eL.WebSetting.KEYBINDS]: {
        section: eP.UserSettingsSections.KEYBINDS,
        searchableTitle: eU.default.Messages.KEYBINDS,
        label: eU.default.Messages.KEYBINDS,
        element: eE.default
      },
      [eL.WebSetting.LANGUAGE]: {
        section: eP.UserSettingsSections.LOCALE,
        searchableTitle: eU.default.Messages.LANGUAGE,
        label: eU.default.Messages.LANGUAGE,
        element: eT.default
      },
      [eL.WebSetting.WINDOW_SETTINGS]: {
        section: eP.UserSettingsSections.WINDOWS,
        searchableTitle: eU.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        label: eU.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: ep.default,
        predicate: () => H.isPlatformEmbedded && (0, H.isWindows)()
      },
      [eL.WebSetting.LINUX_SETTINGS]: {
        section: eP.UserSettingsSections.LINUX,
        searchableTitle: eU.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        label: eU.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: eF,
        predicate: () => H.isPlatformEmbedded && (0, H.isLinux)()
      },
      [eL.WebSetting.STREAMER_MODE]: {
        section: eP.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eU.default.Messages.STREAMER_MODE,
        label: eU.default.Messages.STREAMER_MODE,
        ariaLabel: eU.default.Messages.STREAMER_MODE,
        element: eA.default
      },
      [eL.WebSetting.STREAMER_MODE_INTEGRATIONS]: {
        section: eP.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eU.default.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE,
        parent: eL.WebSetting.STREAMER_MODE
      },
      [eL.WebSetting.STREAMER_MODE_ENABLE]: {
        section: eP.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eU.default.Messages.ENABLE_STREAMER_MODE_LABEL,
        parent: eL.WebSetting.STREAMER_MODE
      },
      [eL.WebSetting.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
        section: eP.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eU.default.Messages.HIDE_PERSONAL_INFORMATION_LABEL,
        parent: eL.WebSetting.STREAMER_MODE
      },
      [eL.WebSetting.STREAMER_MODE_HIDE_INVITE_LINKS]: {
        section: eP.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eU.default.Messages.HIDE_INSTANT_INVITES_LABEL,
        parent: eL.WebSetting.STREAMER_MODE
      },
      [eL.WebSetting.STREAMER_MODE_DISABLE_SOUNDS]: {
        section: eP.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eU.default.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE,
        parent: eL.WebSetting.STREAMER_MODE
      },
      [eL.WebSetting.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
        section: eP.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eU.default.Messages.DISABLE_NOTIFICATIONS_LABEL,
        parent: eL.WebSetting.STREAMER_MODE
      },
      [eL.WebSetting.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
        section: eP.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eU.default.Messages.HIDE_WINDOW_FROM_STREAM_LABEL,
        parent: eL.WebSetting.STREAMER_MODE,
        predicate: () => {
          var e, t, s;
          return null !== (s = null === E.default || void 0 === E.default ? void 0 : null === (t = E.default.window) || void 0 === t ? void 0 : null === (e = t.supportsContentProtection) || void 0 === e ? void 0 : e.call(t)) && void 0 !== s && s
        }
      },
      [eL.WebSetting.SPEED_TEST]: {
        section: eP.UserSettingsSections.SPEED_TEST,
        searchableTitle: "Speed Test",
        label: "Speed Test",
        element: X.default,
        predicate: () => b.default.isSupported() && k.default.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [eL.WebSetting.SETTINGS_ADVANCED]: {
        section: eP.UserSettingsSections.ADVANCED,
        searchableTitle: eU.default.Messages.SETTINGS_ADVANCED,
        label: eU.default.Messages.SETTINGS_ADVANCED,
        ariaLabel: eU.default.Messages.SETTINGS_ADVANCED,
        element: et.default
      },
      [eL.WebSetting.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
        section: eP.UserSettingsSections.ADVANCED,
        searchableTitle: eU.default.Messages.DEVELOPER_MODE,
        parent: eL.WebSetting.SETTINGS_ADVANCED
      },
      [eL.WebSetting.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
        section: eP.UserSettingsSections.ADVANCED,
        searchableTitle: eU.default.Messages.HARDWARE_ACCELERATION,
        parent: eL.WebSetting.SETTINGS_ADVANCED
      },
      [eL.WebSetting.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
        section: eP.UserSettingsSections.ADVANCED,
        searchableTitle: eU.default.Messages.USER_SETTINGS_SHOW_LIBRARY,
        parent: eL.WebSetting.SETTINGS_ADVANCED
      },
      [eL.WebSetting.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
        section: eP.UserSettingsSections.ADVANCED,
        searchableTitle: eU.default.Messages.DEVELOPER_APPLICATION_TEST_MODE,
        parent: eL.WebSetting.SETTINGS_ADVANCED,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME]: {
        section: eP.UserSettingsSections.ADVANCED,
        searchableTitle: eU.default.Messages.USER_SETTINGS_HOME_AUTO_NAV,
        parent: eL.WebSetting.SETTINGS_ADVANCED
      },
      [eL.WebSetting.ACTIVITY_PRIVACY]: {
        section: eP.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: eU.default.Messages.ACTIVITY_PRIVACY,
        label: eU.default.Messages.ACTIVITY_PRIVACY,
        ariaLabel: eU.default.Messages.ACTIVITY_PRIVACY,
        element: ee.default,
        predicate: () => !eH
      },
      [eL.WebSetting.ACTIVITY_PRIVACY_STATUS]: {
        section: eH ? eP.UserSettingsSections.GAMES : eP.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: eU.default.Messages.ACTIVITY_STATUS,
        parent: eH ? eL.WebSetting.GAMES : eL.WebSetting.ACTIVITY_PRIVACY
      },
      [eL.WebSetting.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
        section: eH ? eP.UserSettingsSections.GAMES : eP.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: eU.default.Messages.ACTIVITY_PARTY_PRIVACY,
        parent: eH ? eL.WebSetting.GAMES : eL.WebSetting.ACTIVITY_PRIVACY
      },
      [eL.WebSetting.REGISTERED_GAMES]: {
        section: eP.UserSettingsSections.REGISTERED_GAMES,
        searchableTitle: eU.default.Messages.REGISTERED_GAMES,
        label: eU.default.Messages.REGISTERED_GAMES,
        element: eu.default,
        predicate: () => !eH && (0, eM.shouldShowRegisteredGamesSettings)()
      },
      [eL.WebSetting.OVERLAY]: {
        section: eP.UserSettingsSections.OVERLAY,
        searchableTitle: eU.default.Messages.OVERLAY,
        label: eU.default.Messages.OVERLAY,
        element: eI.default,
        predicate: () => !eH && ey
      },
      [eL.WebSetting.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, _.openChangelog)(!0),
        searchableTitle: eU.default.Messages.WHATS_NEW,
        label: eU.default.Messages.WHATS_NEW
      },
      [eL.WebSetting.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          y.default.track(eP.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, V.handleClick)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              y.default.track(eP.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, T.default)(e)
            }
          })
        },
        searchableTitle: eU.default.Messages.MERCHANDISE,
        label: eU.default.Messages.MERCHANDISE,
        ariaLabel: eU.default.Messages.MERCHANDISE
      },
      [eL.WebSetting.HYPESQUAD]: {
        section: eP.UserSettingsSections.HYPESQUAD_ONLINE,
        searchableTitle: eU.default.Messages.USER_SETTINGS_HYPESQUAD,
        label: eU.default.Messages.USER_SETTINGS_HYPESQUAD,
        element: ec.default
      },
      [eL.WebSetting.EXPERIMENTS]: {
        section: eP.UserSettingsSections.EXPERIMENTS,
        searchableTitle: "Experiments",
        label: "Experiments",
        element: eR.default,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Developer Options",
        label: "Developer Options",
        ariaLabel: "Developer Options",
        element: er.default,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_FLAGS]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Developer Options Flags",
        parent: eL.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Tracing Requests",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_FORCED_CANARY]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Forced Canary",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Gateway Events To Console",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Rpc Events Commands",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Analytics Events Logging",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Source Maps",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Analytics Debugger View",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Idle Status Indicator",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Accessibility Auditing",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Preview Unpublished Collections",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side Premium Type",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side Account Created Data",
        parent: eL.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Open Overlay",
        parent: eL.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_RESET_SOCKET]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Reset Socket",
        parent: eL.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Clear Caches",
        parent: eL.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_CRASHES]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Crashes",
        parent: eL.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Survey Override",
        parent: eL.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Changelog Override",
        parent: eL.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Build Override",
        parent: eL.WebSetting.DEVELOPER_OPTIONS,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.HOTSPOT_OPTIONS]: {
        section: eP.UserSettingsSections.HOTSPOT_OPTIONS,
        searchableTitle: "Hotspot Options",
        label: "Hotspot Options",
        element: W.default,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: eP.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
        searchableTitle: "Dismissible Contents",
        label: "Dismissible Contents",
        element: m.default,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.PAYMENT_FLOW_MODALS]: {
        section: eP.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
        searchableTitle: "Payment Flow Modals",
        label: "Payment Flow Modals",
        element: K.default,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.TEXT_PLAYGROUND]: {
        section: eP.UserSettingsSections.TEXT_PLAYGROUND,
        searchableTitle: "Text Playground",
        label: "Text Playground",
        element: eh.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || v.default.isDeveloper
      },
      [eL.WebSetting.DESIGN_SYSTEMS]: {
        section: eP.UserSettingsSections.DESIGN_SYSTEMS,
        searchableTitle: "Design Systems",
        label: "Design Systems",
        element: el.default,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.TEXT_COMPONENTS]: {
        section: eP.UserSettingsSections.TEXT_COMPONENT,
        searchableTitle: "Text Components",
        label: "Text Components",
        element: q.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || v.default.isDeveloper
      },
      [eL.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: eP.UserSettingsSections.PROFILE_EFFECTS_PREVIEW_TOOL,
        searchableTitle: "Profile Effects Preview Tool",
        label: "Profile Effects Preview Tool",
        element: g.default,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.QUEST_PREVIEW_TOOL]: {
        section: eP.UserSettingsSections.QUEST_PREVIEW_TOOL,
        searchableTitle: "Quest Preview Tool",
        label: "Quest Preview Tool",
        element: P.default,
        predicate: () => (0, L.isQuestPreviewToolEnabled)({
          location: eb.QuestsExperimentLocations.QUEST_PREVIEW_TOOL
        })
      },
      [eL.WebSetting.LOGOUT]: {
        section: "logout",
        onClick: () => {
          (0, r.openModal)(e => (0, a.jsx)(r.ConfirmModal, {
            header: eU.default.Messages.LOGOUT,
            confirmText: eU.default.Messages.LOGOUT,
            cancelText: eU.default.Messages.CANCEL,
            onCancel: e.onClose,
            onConfirm: () => d.default.logout(),
            ...e,
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: eU.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
            })
          }))
        },
        label: eU.default.Messages.LOGOUT,
        ariaLabel: eU.default.Messages.LOGOUT,
        icon: (0, a.jsx)(G.default, {
          width: 16,
          height: 16
        })
      },
      [eL.WebSetting.SOCIAL_LINKS]: {
        section: S.SectionTypes.CUSTOM,
        element: Q.default
      },
      [eL.WebSetting.CLIENT_DEBUG_INFO]: {
        section: S.SectionTypes.CUSTOM,
        element: w.default
      }
    })
  }