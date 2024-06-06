"use strict";
s.r(t), s.d(t, {
  getConfig: function() {
    return eF
  }
}), s("653041");
var a = s("735250");
s("470079");
var n = s("990547"),
  l = s("704215"),
  i = s("692547"),
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
  f = s("425799"),
  g = s("377171"),
  m = s("621628"),
  C = s("18438"),
  A = s("778825"),
  h = s("351780"),
  O = s("231765"),
  p = s("837741"),
  R = s("804545"),
  x = s("813732"),
  M = s("398140"),
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
  k = s("392735"),
  Y = s("61160"),
  w = s("604227"),
  W = s("38915"),
  K = s("498639"),
  z = s("748717"),
  Q = s("419636"),
  q = s("35426"),
  X = s("799071"),
  Z = s("601433"),
  J = s("154022"),
  $ = s("393681"),
  ee = s("309739"),
  et = s("64914"),
  es = s("501348"),
  ea = s("795594"),
  en = s("443702"),
  el = s("920914"),
  ei = s("177508"),
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
  ef = s("301121"),
  eg = s("207874"),
  em = s("463153"),
  eC = s("36192"),
  eA = s("338345"),
  eh = s("400287"),
  eO = s("554042"),
  ep = s("200645"),
  eR = s("287490"),
  ex = s("168308"),
  eM = s("277329"),
  eD = s("674116"),
  eL = s("726985"),
  eP = s("981631"),
  eb = s("46140"),
  ev = s("689938"),
  eU = s("442691");
let ej = () => {
    let e = "Settings list view",
      t = [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE];
    return p.BrandRefreshPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.BRAND_REFRESH_NEW_BADGE), R.PrideMonthPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.PRIDE_ICONS_APPEARANCE_BADGE), t
  },
  eG = ep.default,
  eF = e => {
    let {
      unseenGiftCount: t,
      showPrepaidPaymentPastDueWarning: p,
      impressionSource: R,
      numOfPendingFamilyRequests: eF,
      isOverlaySupported: eB,
      isClipsBetaTagShowing: ey = !1,
      shouldMergeGameSettings: eV,
      isUserSettingsSearchEnabled: eH,
      isKeywordFilteringEnabled: ek,
      isStaff: eY,
      isInappropriateConversationWarningEnabled: ew
    } = e;
    return Object.freeze({
      [eL.WebSetting.SEARCH_BAR]: {
        section: S.SectionTypes.CUSTOM,
        element: eg.default,
        predicate: () => eH
      },
      [eL.WebSetting.SEARCH_NO_RESULTS]: {
        section: S.SectionTypes.CUSTOM,
        element: em.default,
        predicate: () => eH
      },
      [eL.WebSetting.ACCOUNT]: {
        section: eP.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        label: ev.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: ev.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: $.default
      },
      [eL.WebSetting.ACCOUNT_PROFILE]: {
        searchableTitle: ev.default.Messages.PROFILE,
        parent: eL.WebSetting.ACCOUNT,
        section: eP.UserSettingsSections.ACCOUNT
      },
      [eL.WebSetting.ACCOUNT_DISPLAY_NAME]: {
        searchableTitle: ev.default.Messages.DISPLAY_NAME,
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PROFILE
      },
      [eL.WebSetting.ACCOUNT_PHONE_NUMBER]: {
        searchableTitle: ev.default.Messages.CHANGE_PHONE_NUMBER,
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PROFILE
      },
      [eL.WebSetting.ACCOUNT_USERNAME]: {
        searchableTitle: ev.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE,
        section: eP.UserSettingsSections.ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_PROFILE
      },
      [eL.WebSetting.ACCOUNT_EMAIL]: {
        searchableTitle: ev.default.Messages.CHANGE_EMAIL,
        section: eP.UserSettingsSections.ACCOUNT,
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
        section: eP.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION,
        parent: eL.WebSetting.ACCOUNT
      },
      [eL.WebSetting.ACCOUNT_DISABLE_ACCOUNT]: {
        section: eP.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.DISABLE_ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_REMOVAL
      },
      [eL.WebSetting.ACCOUNT_DELETE_ACCOUNT]: {
        section: eP.UserSettingsSections.ACCOUNT,
        searchableTitle: ev.default.Messages.DELETE_ACCOUNT,
        parent: eL.WebSetting.ACCOUNT_DISABLE_ACCOUNT
      },
      [eL.WebSetting.GAMES]: {
        section: eP.UserSettingsSections.GAMES,
        searchableTitle: ev.default.Messages.GAMES,
        label: ev.default.Messages.GAMES,
        ariaLabel: ev.default.Messages.GAMES,
        element: eM.default,
        predicate: () => eV
      },
      [eL.WebSetting.PROFILE_CUSTOMIZATION]: {
        section: eP.UserSettingsSections.PROFILE_CUSTOMIZATION,
        type: S.ContentTypes.WIDE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_PROFILES,
        label: ev.default.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: ev.default.Messages.USER_SETTINGS_PROFILES,
        element: D.default,
        newIndicator: (0, a.jsx)(B.PremiumBadge, {
          text: ev.default.Messages.NEW
        }),
        notice: {
          stores: [j.default, A.default],
          element: M.default
        },
        onSettingsClose: () => {
          o.default.wait(() => {
            (0, C.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eP.UserSettingsSections.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [eL.WebSetting.PROFILE_DISPLAY_NAME]: {
        section: eP.UserSettingsSections.PROFILE_CUSTOMIZATION,
        searchableTitle: ev.default.Messages.DISPLAY_NAME,
        parent: eL.WebSetting.PROFILE_CUSTOMIZATION
      },
      [eL.WebSetting.PROFILE_SERVER_PROFILES]: {
        section: eP.UserSettingsSections.PROFILE_CUSTOMIZATION,
        searchableTitle: ev.default.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY,
        parent: eL.WebSetting.PROFILE_CUSTOMIZATION
      },
      [eL.WebSetting.PRIVACY_AND_SAFETY]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        label: ev.default.Messages.PRIVACY_AND_SAFETY,
        ariaLabel: ev.default.Messages.PRIVACY_AND_SAFETY,
        element: ef.default
      },
      [eL.WebSetting.PRIVACY_USER_SETTINGS]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.PRIVACY_AND_SAFETY,
        parent: eL.WebSetting.PRIVACY_AND_SAFETY
      },
      [eL.WebSetting.PRIVACY_SENSITIVE_MEDIA]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS
      },
      [eL.WebSetting.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.SETTINGS_DM_SPAM_FILTER,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS
      },
      [eL.WebSetting.PRIVACY_SERVER_PRIVACY]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_DM_SETTINGS_TITLE,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS
      },
      [eL.WebSetting.PRIVACY_DATA_PRIVACY]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.SETTINGS_DATA_PRIVACY_CONTROLS,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS
      },
      [eL.WebSetting.PRIVACY_STAFF_ONLY]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS,
        predicate: () => eY
      },
      [eL.WebSetting.PRIVACY_KEYWORD_FILTER]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_DESCRIPTION,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS,
        predicate: () => ek
      },
      [eL.WebSetting.PRIVACY_KEYWORD_FILTER_PROFANITY]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_TITLE,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS,
        predicate: () => ek
      },
      [eL.WebSetting.PRIVACY_KEYWORD_FILTER_INSULTS_SLURS]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_SLURS_TITLE,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS,
        predicate: () => ek
      },
      [eL.WebSetting.PRIVACY_KEYWORD_FILTER_SEXUAL_CONTENT]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_TITLE,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS,
        predicate: () => ek
      },
      [eL.WebSetting.PRIVACY_TERMS_POLICY]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.USER_SETTINGS_PRIVACY_TERMS_SEARCHABLE,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS
      },
      [eL.WebSetting.PRIVACY_SAFETY_ALERTS]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.SAFETY_ALERTS_SETTING_TITLE,
        parent: eL.WebSetting.PRIVACY_USER_SETTINGS,
        predicate: () => ew
      },
      [eL.WebSetting.PRIVACY_ACCOUNT_STANDING]: {
        section: eP.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: ev.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
        parent: eL.WebSetting.PRIVACY_AND_SAFETY
      },
      [eL.WebSetting.PRIVACY_FAMILY_CENTER]: {
        section: eP.UserSettingsSections.FAMILY_CENTER,
        searchableTitle: ev.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        label: ev.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: ev.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: eo.default,
        badgeCount: eF,
        newIndicator: (0, a.jsx)(B.TextBadge, {
          text: ev.default.Messages.NEW,
          color: g.default.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
      },
      [eL.WebSetting.AUTHORIZED_APPS]: {
        section: eP.UserSettingsSections.AUTHORIZED_APPS,
        searchableTitle: ev.default.Messages.AUTHORIZED_APPS,
        label: ev.default.Messages.AUTHORIZED_APPS,
        element: ea.default
      },
      [eL.WebSetting.SESSIONS]: {
        section: eP.UserSettingsSections.SESSIONS,
        searchableTitle: ev.default.Messages.AUTH_SESSIONS,
        label: ev.default.Messages.AUTH_SESSIONS,
        ariaLabel: ev.default.Messages.AUTH_SESSIONS,
        element: eC.default,
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
        predicate: () => k.default.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [eL.WebSetting.CONNECTIONS]: {
        section: eP.UserSettingsSections.CONNECTIONS,
        searchableTitle: ev.default.Messages.CONNECTIONS,
        label: ev.default.Messages.CONNECTIONS,
        ariaLabel: ev.default.Messages.CONNECTIONS,
        element: el.default,
        impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: R
        },
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
      },
      [eL.WebSetting.CONNECTIONS_CONNECTED_ACCOUNTS]: {
        section: eP.UserSettingsSections.CONNECTIONS,
        searchableTitle: ev.default.Messages.CONNECTED_ACCOUNTS,
        parent: eL.WebSetting.CONNECTIONS,
        element: el.default
      },
      [eL.WebSetting.CLIPS]: {
        section: eP.UserSettingsSections.CLIPS,
        searchableTitle: ev.default.Messages.CLIPS,
        label: ev.default.Messages.CLIPS,
        ariaLabel: ev.default.Messages.CLIPS,
        icon: ey ? (0, a.jsx)(I.default, {}) : void 0,
        element: N.default,
        predicate: () => !eV
      },
      [eL.WebSetting.FRIEND_REQUESTS]: {
        section: eP.UserSettingsSections.FRIEND_REQUESTS,
        searchableTitle: ev.default.Messages.FRIEND_REQUESTS,
        label: ev.default.Messages.FRIEND_REQUESTS,
        element: ed.default
      },
      [eL.WebSetting.PREMIUM]: {
        section: eP.UserSettingsSections.PREMIUM,
        ariaLabel: ev.default.Messages.PREMIUM,
        searchableTitle: ev.default.Messages.PREMIUM,
        label: ev.default.Messages.PREMIUM,
        element: z.default,
        className: eU.premiumTab
      },
      [eL.WebSetting.GUILD_BOOSTING]: {
        section: eP.UserSettingsSections.GUILD_BOOSTING,
        searchableTitle: ev.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        label: ev.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: eN.default
      },
      [eL.WebSetting.SUBSCRIPTIONS]: {
        section: eP.UserSettingsSections.SUBSCRIPTIONS,
        ariaLabel: ev.default.Messages.SUBSCRIPTIONS_TITLE,
        searchableTitle: ev.default.Messages.SUBSCRIPTIONS_TITLE,
        label: ev.default.Messages.SUBSCRIPTIONS_TITLE,
        element: x.default,
        icon: p ? (0, a.jsx)(F.default, {
          width: 16,
          height: 16,
          color: i.default.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [eL.WebSetting.SUBSCRIPTIONS_CREDITS]: {
        section: eP.UserSettingsSections.SUBSCRIPTIONS,
        searchableTitle: ev.default.Messages.BILLING_SUBSCRIPTION_CREDIT,
        parent: eL.WebSetting.SUBSCRIPTIONS
      },
      [eL.WebSetting.GIFT_INVENTORY]: {
        section: eP.UserSettingsSections.INVENTORY,
        searchableTitle: ev.default.Messages.GIFT_INVENTORY,
        label: ev.default.Messages.GIFT_INVENTORY,
        element: eS.default,
        ariaLabel: ev.default.Messages.GIFT_INVENTORY,
        badgeCount: t
      },
      [eL.WebSetting.GIFT_INVENTORY_QUESTS]: {
        section: eP.UserSettingsSections.INVENTORY,
        searchableTitle: ev.default.Messages.QUESTS,
        parent: eL.WebSetting.GIFT_INVENTORY
      },
      [eL.WebSetting.BILLING]: {
        section: eP.UserSettingsSections.BILLING,
        searchableTitle: ev.default.Messages.BILLING,
        label: ev.default.Messages.BILLING,
        ariaLabel: ev.default.Messages.BILLING,
        element: en.default
      },
      [eL.WebSetting.BILLING_PAYMENT_METHODS]: {
        section: eP.UserSettingsSections.BILLING,
        searchableTitle: ev.default.Messages.BILLING_PAYMENT_SOURCES,
        parent: eL.WebSetting.BILLING
      },
      [eL.WebSetting.BILLING_TRANSACTION_HISTORY]: {
        section: eP.UserSettingsSections.BILLING,
        searchableTitle: ev.default.Messages.BILLING_PAYMENT_HISTORY,
        parent: eL.WebSetting.BILLING
      },
      [eL.WebSetting.APPEARANCE]: {
        section: eP.UserSettingsSections.APPEARANCE,
        searchableTitle: ev.default.Messages.APPEARANCE,
        label: ev.default.Messages.APPEARANCE,
        ariaLabel: ev.default.Messages.APPEARANCE,
        element: es.default,
        newIndicator: (0, a.jsx)(B.PremiumBadge, {
          text: ev.default.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: ej()
      },
      [eL.WebSetting.APPEARANCE_THEME]: {
        section: eP.UserSettingsSections.APPEARANCE,
        searchableTitle: ev.default.Messages.THEME,
        parent: eL.WebSetting.APPEARANCE
      },
      [eL.WebSetting.APPEARANCE_COLOR]: {
        section: eP.UserSettingsSections.APPEARANCE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE,
        parent: eL.WebSetting.APPEARANCE_THEME
      },
      [eL.WebSetting.APPEARANCE_ICON]: {
        section: eP.UserSettingsSections.APPEARANCE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE,
        parent: eL.WebSetting.APPEARANCE_THEME
      },
      [eL.WebSetting.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
        section: eP.UserSettingsSections.APPEARANCE,
        searchableTitle: ev.default.Messages.MESSAGE_DISPLAY_MODE_LABEL,
        parent: eL.WebSetting.APPEARANCE
      },
      [eL.WebSetting.APPEARANCE_SCALING_SPACING]: {
        section: eP.UserSettingsSections.APPEARANCE,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_FONT_SCALING_LABEL,
        parent: eL.WebSetting.APPEARANCE
      },
      [eL.WebSetting.ACCESSIBILITY]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY,
        label: ev.default.Messages.ACCESSIBILITY,
        ariaLabel: ev.default.Messages.ACCESSIBILITY,
        element: J.default
      },
      [eL.WebSetting.ACCESSIBILITY_SATURATION]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_LINK_DECORATIONS]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_ROLE_STYLE]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_TAGS]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_CONTRAST]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_SETTINGS_CONTRAST,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_REDUCED_MOTION]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_STICKERS]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.STICKERS_AUTO_PLAY_HEADING,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_MESSAGES]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.ACCESSIBILITY_TEXT_TO_SPEECH]: {
        section: eP.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: ev.default.Messages.FORM_LABEL_TTS,
        parent: eL.WebSetting.ACCESSIBILITY
      },
      [eL.WebSetting.VOICE_AND_VIDEO]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.VOICE_AND_VIDEO,
        label: ev.default.Messages.VOICE_AND_VIDEO,
        ariaLabel: ev.default.Messages.VOICE_AND_VIDEO,
        element: eD.default,
        predicate: () => U.default.isSupported()
      },
      [eL.WebSetting.VOICE_AND_VIDEO_DEVICES]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_LABEL_INPUT_DEVICE,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_LABEL_INPUT_VOLUME,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_MIC_TEST]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_TROUBLESHOOTING]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_HELP_VOICE_VIDEO_TROUBLESHOOTING_SEARCHABLE,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_INPUT_MODE]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_LABEL_INPUT_MODE,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_SENSITIVITY]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_LABEL_INPUT_SENSITIVTY,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_SOUNDBOARD]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.SOUNDBOARD,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_CALL_SOUNDS]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.CALL_SOUNDS_SETTINGS,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_VIDEO]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.VIDEO_SETTINGS,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.SETTINGS_ADVANCED,
        parent: eL.WebSetting.VOICE_AND_VIDEO
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_CODECS]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE,
        parent: eL.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_LABEL_VOICE_PROCESSING,
        parent: eL.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_QOS]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_LABEL_QOS,
        parent: eL.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_LABEL_ATTENUATION,
        parent: eL.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [eL.WebSetting.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.FORM_LABEL_SUBSYSTEM,
        parent: eL.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [eL.WebSetting.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
        section: eP.UserSettingsSections.VOICE,
        searchableTitle: ev.default.Messages.RESET_VOICE_SETTINGS,
        parent: eL.WebSetting.VOICE_AND_VIDEO,
        predicate: () => H.isPlatformEmbedded && null != E.default.fileManager.readLogFiles
      },
      [eL.WebSetting.POGGERMODE]: {
        section: eP.UserSettingsSections.POGGERMODE,
        searchableTitle: ev.default.Messages.POGGERMODE,
        label: ev.default.Messages.POGGERMODE,
        ariaLabel: ev.default.Messages.POGGERMODE,
        element: O.default,
        predicate: () => h.default.settingsVisible,
        icon: (0, a.jsx)("img", {
          alt: "",
          src: s("542156"),
          className: eU.poggermodeIcon
        })
      },
      [eL.WebSetting.CHAT]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.CHAT,
        label: ev.default.Messages.CHAT,
        ariaLabel: ev.default.Messages.CHAT,
        element: eh.default
      },
      [eL.WebSetting.CHAT_INLINE_MEDIA]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.INLINE_MEDIA_LABEL,
        parent: eL.WebSetting.CHAT
      },
      [eL.WebSetting.CHAT_EMBEDS]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.RENDER_EMBEDS_LABEL,
        parent: eL.WebSetting.CHAT
      },
      [eL.WebSetting.CHAT_EMOJI]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.EMOJI,
        parent: eL.WebSetting.CHAT
      },
      [eL.WebSetting.CHAT_STICKERS]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.STICKERS_AUTO_PLAY_HEADING,
        parent: eL.WebSetting.CHAT
      },
      [eL.WebSetting.CHAT_TEXT_BOX]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.FORM_LABEL_USE_RICH_CHAT_BOX,
        parent: eL.WebSetting.CHAT
      },
      [eL.WebSetting.CHAT_SPOILERS]: {
        section: eP.UserSettingsSections.TEXT,
        searchableTitle: ev.default.Messages.SHOW_SPOILER_CONTENT,
        parent: eL.WebSetting.CHAT
      },
      [eL.WebSetting.NOTIFICATIONS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.NOTIFICATIONS,
        label: ev.default.Messages.NOTIFICATIONS,
        ariaLabel: ev.default.Messages.NOTIFICATIONS,
        element: e_.default
      },
      [eL.WebSetting.NOTIFICATIONS_ENABLE_DESKTOP]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "Mention on all messages",
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_UNREAD_SETTINGS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE,
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
        searchableTitle: ev.default.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_TEXT_TO_SPEECH]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.FORM_LABEL_TTS,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.GUILD_COMMUNITY_ALERTS_HEADER,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER,
        parent: eL.WebSetting.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [eL.WebSetting.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER,
        parent: eL.WebSetting.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [eL.WebSetting.NOTIFICATIONS_SOUNDS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.SOUNDS,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_EMAILS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS,
        parent: eL.WebSetting.NOTIFICATIONS
      },
      [eL.WebSetting.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION,
        parent: eL.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eL.WebSetting.NOTIFICATIONS_EMAILS_SOCIAL]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL,
        parent: eL.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eL.WebSetting.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS,
        parent: eL.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eL.WebSetting.NOTIFICATIONS_EMAILS_TIPS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS,
        parent: eL.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eL.WebSetting.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS,
        parent: eL.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eL.WebSetting.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
        section: eP.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING,
        parent: eL.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eL.WebSetting.KEYBINDS]: {
        section: eP.UserSettingsSections.KEYBINDS,
        searchableTitle: ev.default.Messages.KEYBINDS,
        label: ev.default.Messages.KEYBINDS,
        element: eE.default
      },
      [eL.WebSetting.LANGUAGE]: {
        section: eP.UserSettingsSections.LOCALE,
        searchableTitle: ev.default.Messages.LANGUAGE,
        label: ev.default.Messages.LANGUAGE,
        element: eT.default
      },
      [eL.WebSetting.WINDOW_SETTINGS]: {
        section: eP.UserSettingsSections.WINDOWS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        label: ev.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: ep.default,
        predicate: () => H.isPlatformEmbedded && (0, H.isWindows)()
      },
      [eL.WebSetting.LINUX_SETTINGS]: {
        section: eP.UserSettingsSections.LINUX,
        searchableTitle: ev.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        label: ev.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: eG,
        predicate: () => H.isPlatformEmbedded && (0, H.isLinux)()
      },
      [eL.WebSetting.STREAMER_MODE]: {
        section: eP.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.STREAMER_MODE,
        label: ev.default.Messages.STREAMER_MODE,
        ariaLabel: ev.default.Messages.STREAMER_MODE,
        element: eA.default
      },
      [eL.WebSetting.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
        section: eP.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.HIDE_PERSONAL_INFORMATION_LABEL,
        parent: eL.WebSetting.STREAMER_MODE
      },
      [eL.WebSetting.STREAMER_MODE_HIDE_INVITE_LINKS]: {
        section: eP.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.HIDE_INSTANT_INVITES_LABEL,
        parent: eL.WebSetting.STREAMER_MODE
      },
      [eL.WebSetting.STREAMER_MODE_DISABLE_SOUNDS]: {
        section: eP.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE,
        parent: eL.WebSetting.STREAMER_MODE
      },
      [eL.WebSetting.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
        section: eP.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.DISABLE_NOTIFICATIONS_LABEL,
        parent: eL.WebSetting.STREAMER_MODE
      },
      [eL.WebSetting.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
        section: eP.UserSettingsSections.STREAMER_MODE,
        searchableTitle: ev.default.Messages.HIDE_WINDOW_FROM_STREAM_LABEL,
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
        element: q.default,
        predicate: () => b.default.isSupported() && Y.default.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [eL.WebSetting.SETTINGS_ADVANCED]: {
        section: eP.UserSettingsSections.ADVANCED,
        searchableTitle: ev.default.Messages.SETTINGS_ADVANCED,
        label: ev.default.Messages.SETTINGS_ADVANCED,
        ariaLabel: ev.default.Messages.SETTINGS_ADVANCED,
        element: et.default
      },
      [eL.WebSetting.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
        section: eP.UserSettingsSections.ADVANCED,
        searchableTitle: ev.default.Messages.DEVELOPER_MODE,
        parent: eL.WebSetting.SETTINGS_ADVANCED
      },
      [eL.WebSetting.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
        section: eP.UserSettingsSections.ADVANCED,
        searchableTitle: ev.default.Messages.HARDWARE_ACCELERATION,
        parent: eL.WebSetting.SETTINGS_ADVANCED
      },
      [eL.WebSetting.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
        section: eP.UserSettingsSections.ADVANCED,
        searchableTitle: ev.default.Messages.USER_SETTINGS_SHOW_LIBRARY,
        parent: eL.WebSetting.SETTINGS_ADVANCED
      },
      [eL.WebSetting.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
        section: eP.UserSettingsSections.ADVANCED,
        searchableTitle: ev.default.Messages.DEVELOPER_APPLICATION_TEST_MODE,
        parent: eL.WebSetting.SETTINGS_ADVANCED,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME]: {
        section: eP.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: ev.default.Messages.USER_SETTINGS_HOME_AUTO_NAV,
        parent: eL.WebSetting.SETTINGS_ADVANCED
      },
      [eL.WebSetting.ACTIVITY_PRIVACY]: {
        section: eP.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: ev.default.Messages.ACTIVITY_PRIVACY,
        label: ev.default.Messages.ACTIVITY_PRIVACY,
        ariaLabel: ev.default.Messages.ACTIVITY_PRIVACY,
        element: ee.default,
        predicate: () => !eV
      },
      [eL.WebSetting.ACTIVITY_PRIVACY_STATUS]: {
        section: eP.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: ev.default.Messages.ACTIVITY_STATUS,
        parent: eL.WebSetting.ACTIVITY_PRIVACY
      },
      [eL.WebSetting.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
        section: eP.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: ev.default.Messages.ACTIVITY_PARTY_PRIVACY,
        parent: eL.WebSetting.ACTIVITY_PRIVACY
      },
      [eL.WebSetting.REGISTERED_GAMES]: {
        section: eP.UserSettingsSections.REGISTERED_GAMES,
        searchableTitle: ev.default.Messages.REGISTERED_GAMES,
        label: ev.default.Messages.REGISTERED_GAMES,
        element: eu.default,
        predicate: () => !eV && (0, ex.shouldShowRegisteredGamesSettings)()
      },
      [eL.WebSetting.OVERLAY]: {
        section: eP.UserSettingsSections.OVERLAY,
        searchableTitle: ev.default.Messages.OVERLAY,
        label: ev.default.Messages.OVERLAY,
        element: eI.default,
        predicate: () => !eV && eB
      },
      [eL.WebSetting.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, _.openChangelog)(!0),
        searchableTitle: ev.default.Messages.WHATS_NEW,
        label: ev.default.Messages.WHATS_NEW
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
        searchableTitle: ev.default.Messages.MERCHANDISE,
        label: ev.default.Messages.MERCHANDISE,
        ariaLabel: ev.default.Messages.MERCHANDISE
      },
      [eL.WebSetting.HYPESQUAD]: {
        section: eP.UserSettingsSections.HYPESQUAD_ONLINE,
        searchableTitle: ev.default.Messages.USER_SETTINGS_HYPESQUAD,
        label: ev.default.Messages.USER_SETTINGS_HYPESQUAD,
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
        element: eO.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || v.default.isDeveloper
      },
      [eL.WebSetting.DESIGN_SYSTEMS]: {
        section: eP.UserSettingsSections.DESIGN_SYSTEMS,
        searchableTitle: "Design Systems",
        label: "Design Systems",
        element: ei.default,
        predicate: () => v.default.isDeveloper
      },
      [eL.WebSetting.TEXT_COMPONENTS]: {
        section: eP.UserSettingsSections.TEXT_COMPONENT,
        searchableTitle: "Text Components",
        label: "Text Components",
        element: X.default,
        predicate: () => (0, Z.shouldShowTextPlayground)() || v.default.isDeveloper
      },
      [eL.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: eP.UserSettingsSections.PROFILE_EFFECTS_PREVIEW_TOOL,
        searchableTitle: "Profile Effects Preview Tool",
        label: "Profile Effects Preview Tool",
        element: f.default,
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