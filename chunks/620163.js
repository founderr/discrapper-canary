"use strict";
s.r(t), s.d(t, {
  getConfig: function() {
    return eG
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
  E = s("782568"),
  T = s("163379"),
  _ = s("703288"),
  I = s("574755"),
  N = s("425799"),
  g = s("377171"),
  f = s("621628"),
  m = s("18438"),
  C = s("778825"),
  A = s("351780"),
  h = s("231765"),
  O = s("837741"),
  p = s("804545"),
  R = s("813732"),
  x = s("398140"),
  M = s("564344"),
  D = s("977156"),
  L = s("652380"),
  P = s("171156"),
  b = s("906467"),
  v = s("131951"),
  U = s("25990"),
  j = s("87086"),
  G = s("759231"),
  F = s("26290"),
  B = s("626135"),
  y = s("49012"),
  V = s("358085"),
  H = s("392735"),
  Y = s("61160"),
  k = s("604227"),
  w = s("38915"),
  W = s("498639"),
  K = s("748717"),
  z = s("419636"),
  Q = s("35426"),
  q = s("799071"),
  X = s("601433"),
  Z = s("154022"),
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
  eI = s("595242"),
  eN = s("301121"),
  eg = s("207874"),
  ef = s("463153"),
  em = s("36192"),
  eC = s("338345"),
  eA = s("400287"),
  eh = s("554042"),
  eO = s("200645"),
  ep = s("287490"),
  eR = s("168308"),
  ex = s("277329"),
  eM = s("674116"),
  eD = s("726985"),
  eL = s("981631"),
  eP = s("46140"),
  eb = s("689938"),
  ev = s("442691");
let eU = () => {
    let e = "Settings list view",
      t = [l.DismissibleContent.CLIENT_THEMES_SETTINGS_BADGE, l.DismissibleContent.DEKSTOP_CUSTOM_APP_ICON_BADGE];
    return O.BrandRefreshPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.BRAND_REFRESH_NEW_BADGE), p.PrideMonthPerksExperiment.getCurrentConfig({
      location: e
    }).enabled && t.push(l.DismissibleContent.PRIDE_ICONS_APPEARANCE_BADGE), t
  },
  ej = eO.default,
  eG = e => {
    let {
      unseenGiftCount: t,
      showPrepaidPaymentPastDueWarning: O,
      impressionSource: p,
      numOfPendingFamilyRequests: eG,
      isOverlaySupported: eF,
      isClipsBetaTagShowing: eB = !1,
      shouldMergeGameSettings: ey,
      isUserSettingsSearchEnabled: eV
    } = e;
    return Object.freeze({
      [eD.WebSetting.SEARCH_BAR]: {
        section: S.SectionTypes.CUSTOM,
        element: eg.default,
        predicate: () => eV
      },
      [eD.WebSetting.SEARCH_NO_RESULTS]: {
        section: S.SectionTypes.CUSTOM,
        element: ef.default,
        predicate: () => eV
      },
      [eD.WebSetting.ACCOUNT]: {
        section: eL.UserSettingsSections.ACCOUNT,
        searchableTitle: eb.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        label: eb.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: eb.default.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: J.default
      },
      [eD.WebSetting.ACCOUNT_PROFILE]: {
        searchableTitle: eb.default.Messages.PROFILE,
        parent: eD.WebSetting.ACCOUNT,
        section: eL.UserSettingsSections.ACCOUNT
      },
      [eD.WebSetting.ACCOUNT_DISPLAY_NAME]: {
        searchableTitle: eb.default.Messages.DISPLAY_NAME,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_PROFILE
      },
      [eD.WebSetting.ACCOUNT_PHONE_NUMBER]: {
        searchableTitle: eb.default.Messages.CHANGE_PHONE_NUMBER,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_PROFILE
      },
      [eD.WebSetting.ACCOUNT_USERNAME]: {
        searchableTitle: eb.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_PROFILE
      },
      [eD.WebSetting.ACCOUNT_EMAIL]: {
        searchableTitle: eb.default.Messages.CHANGE_EMAIL,
        section: eL.UserSettingsSections.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_PROFILE
      },
      [eD.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT,
        searchableTitle: eb.default.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_CHANGE_PASSWORD]: {
        searchableTitle: eb.default.Messages.CHANGE_PASSWORD,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_CONFIRM_PASSWORD]: {
        searchableTitle: eb.default.Messages.FORM_LABEL_CONFIRM_PASSWORD,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
        searchableTitle: eb.default.Messages.SETTINGS_TWO_FA,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_ENABLE_2FA]: {
        searchableTitle: eb.default.Messages.TWO_FA_ENABLE,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_REMOVE_2FA]: {
        searchableTitle: eb.default.Messages.TWO_FA_REMOVE,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_VIEW_BACKUP_CODES]: {
        searchableTitle: eb.default.Messages.TWO_FA_BACKUP_CODE,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_SMS_BACKUP]: {
        searchableTitle: eb.default.Messages.MFA_SMS_AUTH,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_SECURITY_KEYS]: {
        searchableTitle: eb.default.Messages.TWO_FA_WEBAUTHN_REGISTER,
        section: eD.WebSetting.ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eD.WebSetting.ACCOUNT_REMOVAL]: {
        section: eL.UserSettingsSections.ACCOUNT,
        searchableTitle: eb.default.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION,
        parent: eD.WebSetting.ACCOUNT
      },
      [eD.WebSetting.ACCOUNT_DISABLE_ACCOUNT]: {
        section: eL.UserSettingsSections.ACCOUNT,
        searchableTitle: eb.default.Messages.DISABLE_ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_REMOVAL
      },
      [eD.WebSetting.ACCOUNT_DELETE_ACCOUNT]: {
        section: eL.UserSettingsSections.ACCOUNT,
        searchableTitle: eb.default.Messages.DELETE_ACCOUNT,
        parent: eD.WebSetting.ACCOUNT_DISABLE_ACCOUNT
      },
      [eD.WebSetting.GAMES]: {
        section: eL.UserSettingsSections.GAMES,
        searchableTitle: eb.default.Messages.GAMES,
        label: eb.default.Messages.GAMES,
        ariaLabel: eb.default.Messages.GAMES,
        element: ex.default,
        predicate: () => ey
      },
      [eD.WebSetting.PROFILE_CUSTOMIZATION]: {
        section: eL.UserSettingsSections.PROFILE_CUSTOMIZATION,
        type: S.ContentTypes.WIDE,
        searchableTitle: eb.default.Messages.USER_SETTINGS_PROFILES,
        label: eb.default.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: eb.default.Messages.USER_SETTINGS_PROFILES,
        element: M.default,
        newIndicator: (0, a.jsx)(F.PremiumBadge, {
          text: eb.default.Messages.NEW
        }),
        notice: {
          stores: [U.default, C.default],
          element: x.default
        },
        onSettingsClose: () => {
          o.default.wait(() => {
            (0, m.resetAndCloseGuildIdentityForm)(), (0, u.resetAndCloseUserProfileForm)(), c.default.clearSubsection(eL.UserSettingsSections.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [eD.WebSetting.PROFILE_DISPLAY_NAME]: {
        section: eL.UserSettingsSections.PROFILE_CUSTOMIZATION,
        searchableTitle: eb.default.Messages.DISPLAY_NAME,
        parent: eD.WebSetting.PROFILE_CUSTOMIZATION
      },
      [eD.WebSetting.PROFILE_SERVER_PROFILES]: {
        section: eL.UserSettingsSections.PROFILE_CUSTOMIZATION,
        searchableTitle: eb.default.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY,
        parent: eD.WebSetting.PROFILE_CUSTOMIZATION
      },
      [eD.WebSetting.PRIVACY_AND_SAFETY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eb.default.Messages.PRIVACY_AND_SAFETY,
        label: eb.default.Messages.PRIVACY_AND_SAFETY,
        ariaLabel: eb.default.Messages.PRIVACY_AND_SAFETY,
        element: eN.default
      },
      [eD.WebSetting.PRIVACY_SENSITIVE_MEDIA]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eb.default.Messages.OBSCURED_CONTENT_SETTINGS_HEADER,
        parent: eD.WebSetting.PRIVACY_AND_SAFETY
      },
      [eD.WebSetting.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eb.default.Messages.SETTINGS_DM_SPAM_FILTER,
        parent: eD.WebSetting.PRIVACY_AND_SAFETY
      },
      [eD.WebSetting.PRIVACY_SERVER_PRIVACY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eb.default.Messages.USER_DM_SETTINGS_TITLE,
        parent: eD.WebSetting.PRIVACY_AND_SAFETY
      },
      [eD.WebSetting.PRIVACY_DATA_PRIVACY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eb.default.Messages.SETTINGS_DATA_PRIVACY_CONTROLS,
        parent: eD.WebSetting.PRIVACY_AND_SAFETY
      },
      [eD.WebSetting.PRIVACY_STAFF_ONLY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eb.default.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER,
        parent: eD.WebSetting.PRIVACY_AND_SAFETY
      },
      [eD.WebSetting.PRIVACY_ACCOUNT_STANDING]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eb.default.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
        parent: eD.WebSetting.PRIVACY_AND_SAFETY
      },
      [eD.WebSetting.PRIVACY_KEYWORD_FILTER]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eb.default.Messages.USER_KEYWORD_FILTERS_DESCRIPTION,
        parent: eD.WebSetting.PRIVACY_AND_SAFETY
      },
      [eD.WebSetting.PRIVACY_KEYWORD_FILTER_PROFANITY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eb.default.Messages.USER_KEYWORD_FILTERS_PROFANITY_TITLE,
        parent: eD.WebSetting.PRIVACY_KEYWORD_FILTER
      },
      [eD.WebSetting.PRIVACY_KEYWORD_FILTER_INSULTS_SLURS]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eb.default.Messages.USER_KEYWORD_FILTERS_SLURS_TITLE,
        parent: eD.WebSetting.PRIVACY_KEYWORD_FILTER
      },
      [eD.WebSetting.PRIVACY_KEYWORD_FILTER_SEXUAL_CONTENT]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eb.default.Messages.USER_KEYWORD_FILTERS_SEXUAL_CONTENT_TITLE,
        parent: eD.WebSetting.PRIVACY_KEYWORD_FILTER
      },
      [eD.WebSetting.PRIVACY_TERMS_POLICY]: {
        section: eL.UserSettingsSections.PRIVACY_AND_SAFETY,
        searchableTitle: eb.default.Messages.USER_SETTINGS_PRIVACY_TERMS_SEARCHABLE,
        parent: eD.WebSetting.PRIVACY_AND_SAFETY
      },
      [eD.WebSetting.PRIVACY_FAMILY_CENTER]: {
        section: eL.UserSettingsSections.FAMILY_CENTER,
        searchableTitle: eb.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        label: eb.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: eb.default.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: er.default,
        badgeCount: eG,
        newIndicator: (0, a.jsx)(F.TextBadge, {
          text: eb.default.Messages.NEW,
          color: g.default.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.FAMILY_CENTER_NEW_BADGE]
      },
      [eD.WebSetting.AUTHORIZED_APPS]: {
        section: eL.UserSettingsSections.AUTHORIZED_APPS,
        searchableTitle: eb.default.Messages.AUTHORIZED_APPS,
        label: eb.default.Messages.AUTHORIZED_APPS,
        element: es.default
      },
      [eD.WebSetting.SESSIONS]: {
        section: eL.UserSettingsSections.SESSIONS,
        searchableTitle: eb.default.Messages.AUTH_SESSIONS,
        label: eb.default.Messages.AUTH_SESSIONS,
        ariaLabel: eb.default.Messages.AUTH_SESSIONS,
        element: em.default,
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.AUTH_SESSIONS_NEW],
        predicate: () => H.default.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [eD.WebSetting.CONNECTIONS]: {
        section: eL.UserSettingsSections.CONNECTIONS,
        searchableTitle: eb.default.Messages.CONNECTIONS,
        label: eb.default.Messages.CONNECTIONS,
        ariaLabel: eb.default.Messages.CONNECTIONS,
        element: en.default,
        impressionName: n.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: p
        },
        newIndicatorDismissibleContentTypes: [l.DismissibleContent.NEW_CRUNCHYROLL_CONNECTION]
      },
      [eD.WebSetting.CONNECTIONS_CONNECTED_ACCOUNTS]: {
        section: eL.UserSettingsSections.CONNECTIONS,
        searchableTitle: eb.default.Messages.CONNECTED_ACCOUNTS,
        parent: eD.WebSetting.CONNECTIONS,
        element: en.default
      },
      [eD.WebSetting.CLIPS]: {
        section: eL.UserSettingsSections.CLIPS,
        searchableTitle: eb.default.Messages.CLIPS,
        label: eb.default.Messages.CLIPS,
        ariaLabel: eb.default.Messages.CLIPS,
        icon: eB ? (0, a.jsx)(_.default, {}) : void 0,
        element: I.default,
        predicate: () => !ey
      },
      [eD.WebSetting.FRIEND_REQUESTS]: {
        section: eL.UserSettingsSections.FRIEND_REQUESTS,
        searchableTitle: eb.default.Messages.FRIEND_REQUESTS,
        label: eb.default.Messages.FRIEND_REQUESTS,
        element: eo.default
      },
      [eD.WebSetting.PREMIUM]: {
        section: eL.UserSettingsSections.PREMIUM,
        ariaLabel: eb.default.Messages.PREMIUM,
        searchableTitle: eb.default.Messages.PREMIUM,
        label: eb.default.Messages.PREMIUM,
        element: K.default,
        className: ev.premiumTab
      },
      [eD.WebSetting.GUILD_BOOSTING]: {
        section: eL.UserSettingsSections.GUILD_BOOSTING,
        searchableTitle: eb.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        label: eb.default.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: eI.default
      },
      [eD.WebSetting.SUBSCRIPTIONS]: {
        section: eL.UserSettingsSections.SUBSCRIPTIONS,
        ariaLabel: eb.default.Messages.SUBSCRIPTIONS_TITLE,
        searchableTitle: eb.default.Messages.SUBSCRIPTIONS_TITLE,
        label: eb.default.Messages.SUBSCRIPTIONS_TITLE,
        element: R.default,
        icon: O ? (0, a.jsx)(G.default, {
          width: 16,
          height: 16,
          color: i.default.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [eD.WebSetting.SUBSCRIPTIONS_CREDITS]: {
        section: eL.UserSettingsSections.SUBSCRIPTIONS,
        searchableTitle: eb.default.Messages.BILLING_SUBSCRIPTION_CREDIT,
        parent: eD.WebSetting.SUBSCRIPTIONS
      },
      [eD.WebSetting.GIFT_INVENTORY]: {
        section: eL.UserSettingsSections.INVENTORY,
        searchableTitle: eb.default.Messages.GIFT_INVENTORY,
        label: eb.default.Messages.GIFT_INVENTORY,
        element: ec.default,
        ariaLabel: eb.default.Messages.GIFT_INVENTORY,
        badgeCount: t
      },
      [eD.WebSetting.GIFT_INVENTORY_QUESTS]: {
        section: eL.UserSettingsSections.INVENTORY,
        searchableTitle: eb.default.Messages.QUESTS,
        parent: eD.WebSetting.GIFT_INVENTORY
      },
      [eD.WebSetting.BILLING]: {
        section: eL.UserSettingsSections.BILLING,
        searchableTitle: eb.default.Messages.BILLING,
        label: eb.default.Messages.BILLING,
        ariaLabel: eb.default.Messages.BILLING,
        element: ea.default
      },
      [eD.WebSetting.BILLING_PAYMENT_METHODS]: {
        section: eL.UserSettingsSections.BILLING,
        searchableTitle: eb.default.Messages.BILLING_PAYMENT_SOURCES,
        parent: eD.WebSetting.BILLING
      },
      [eD.WebSetting.BILLING_TRANSACTION_HISTORY]: {
        section: eL.UserSettingsSections.BILLING,
        searchableTitle: eb.default.Messages.BILLING_PAYMENT_HISTORY,
        parent: eD.WebSetting.BILLING
      },
      [eD.WebSetting.APPEARANCE]: {
        section: eL.UserSettingsSections.APPEARANCE,
        searchableTitle: eb.default.Messages.APPEARANCE,
        label: eb.default.Messages.APPEARANCE,
        ariaLabel: eb.default.Messages.APPEARANCE,
        element: et.default,
        newIndicator: (0, a.jsx)(F.PremiumBadge, {
          text: eb.default.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: eU()
      },
      [eD.WebSetting.APPEARANCE_THEME]: {
        section: eL.UserSettingsSections.APPEARANCE,
        searchableTitle: eb.default.Messages.THEME,
        parent: eD.WebSetting.APPEARANCE
      },
      [eD.WebSetting.APPEARANCE_COLOR]: {
        section: eL.UserSettingsSections.APPEARANCE,
        searchableTitle: eb.default.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE,
        parent: eD.WebSetting.APPEARANCE_THEME
      },
      [eD.WebSetting.APPEARANCE_ICON]: {
        section: eL.UserSettingsSections.APPEARANCE,
        searchableTitle: eb.default.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE,
        parent: eD.WebSetting.APPEARANCE_THEME
      },
      [eD.WebSetting.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
        section: eL.UserSettingsSections.APPEARANCE,
        searchableTitle: eb.default.Messages.MESSAGE_DISPLAY_MODE_LABEL,
        parent: eD.WebSetting.APPEARANCE
      },
      [eD.WebSetting.APPEARANCE_SCALING_SPACING]: {
        section: eL.UserSettingsSections.APPEARANCE,
        searchableTitle: eb.default.Messages.ACCESSIBILITY_FONT_SCALING_LABEL,
        parent: eD.WebSetting.APPEARANCE
      },
      [eD.WebSetting.ACCESSIBILITY]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eb.default.Messages.ACCESSIBILITY,
        label: eb.default.Messages.ACCESSIBILITY,
        ariaLabel: eb.default.Messages.ACCESSIBILITY,
        element: Z.default
      },
      [eD.WebSetting.ACCESSIBILITY_SATURATION]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eb.default.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE,
        parent: eD.WebSetting.ACCESSIBILITY
      },
      [eD.WebSetting.ACCESSIBILITY_LINK_DECORATIONS]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eb.default.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL,
        parent: eD.WebSetting.ACCESSIBILITY
      },
      [eD.WebSetting.ACCESSIBILITY_ROLE_STYLE]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eb.default.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
        parent: eD.WebSetting.ACCESSIBILITY
      },
      [eD.WebSetting.ACCESSIBILITY_TAGS]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eb.default.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE,
        parent: eD.WebSetting.ACCESSIBILITY
      },
      [eD.WebSetting.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eb.default.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_LABEL,
        parent: eD.WebSetting.ACCESSIBILITY
      },
      [eD.WebSetting.ACCESSIBILITY_CONTRAST]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eb.default.Messages.ACCESSIBILITY_SETTINGS_CONTRAST,
        parent: eD.WebSetting.ACCESSIBILITY
      },
      [eD.WebSetting.ACCESSIBILITY_REDUCED_MOTION]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eb.default.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION,
        parent: eD.WebSetting.ACCESSIBILITY
      },
      [eD.WebSetting.ACCESSIBILITY_STICKERS]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eb.default.Messages.STICKERS_AUTO_PLAY_HEADING,
        parent: eD.WebSetting.ACCESSIBILITY
      },
      [eD.WebSetting.ACCESSIBILITY_MESSAGES]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eb.default.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT,
        parent: eD.WebSetting.ACCESSIBILITY
      },
      [eD.WebSetting.ACCESSIBILITY_TEXT_TO_SPEECH]: {
        section: eL.UserSettingsSections.ACCESSIBILITY,
        searchableTitle: eb.default.Messages.FORM_LABEL_TTS,
        parent: eD.WebSetting.ACCESSIBILITY
      },
      [eD.WebSetting.VOICE_AND_VIDEO]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.VOICE_AND_VIDEO,
        label: eb.default.Messages.VOICE_AND_VIDEO,
        ariaLabel: eb.default.Messages.VOICE_AND_VIDEO,
        element: eM.default,
        predicate: () => v.default.isSupported()
      },
      [eD.WebSetting.VOICE_AND_VIDEO_DEVICES]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.FORM_LABEL_INPUT_DEVICE,
        parent: eD.WebSetting.VOICE_AND_VIDEO
      },
      [eD.WebSetting.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.FORM_LABEL_INPUT_VOLUME,
        parent: eD.WebSetting.VOICE_AND_VIDEO
      },
      [eD.WebSetting.VOICE_AND_VIDEO_MIC_TEST]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE,
        parent: eD.WebSetting.VOICE_AND_VIDEO
      },
      [eD.WebSetting.VOICE_AND_VIDEO_TROUBLESHOOTING]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.FORM_HELP_VOICE_VIDEO_TROUBLESHOOTING_SEARCHABLE,
        parent: eD.WebSetting.VOICE_AND_VIDEO
      },
      [eD.WebSetting.VOICE_AND_VIDEO_INPUT_MODE]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.FORM_LABEL_INPUT_MODE,
        parent: eD.WebSetting.VOICE_AND_VIDEO
      },
      [eD.WebSetting.VOICE_AND_VIDEO_SENSITIVITY]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.FORM_LABEL_INPUT_SENSITIVTY,
        parent: eD.WebSetting.VOICE_AND_VIDEO
      },
      [eD.WebSetting.VOICE_AND_VIDEO_SOUNDBOARD]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.SOUNDBOARD,
        parent: eD.WebSetting.VOICE_AND_VIDEO
      },
      [eD.WebSetting.VOICE_AND_VIDEO_CALL_SOUNDS]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.CALL_SOUNDS_SETTINGS,
        parent: eD.WebSetting.VOICE_AND_VIDEO
      },
      [eD.WebSetting.VOICE_AND_VIDEO_VIDEO]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.VIDEO_SETTINGS,
        parent: eD.WebSetting.VOICE_AND_VIDEO
      },
      [eD.WebSetting.VOICE_AND_VIDEO_ADVANCED]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.SETTINGS_ADVANCED,
        parent: eD.WebSetting.VOICE_AND_VIDEO
      },
      [eD.WebSetting.VOICE_AND_VIDEO_ADVANCED_CODECS]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE,
        parent: eD.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [eD.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.FORM_LABEL_VOICE_PROCESSING,
        parent: eD.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [eD.WebSetting.VOICE_AND_VIDEO_ADVANCED_QOS]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.FORM_LABEL_QOS,
        parent: eD.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [eD.WebSetting.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.FORM_LABEL_ATTENUATION,
        parent: eD.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [eD.WebSetting.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.FORM_LABEL_SUBSYSTEM,
        parent: eD.WebSetting.VOICE_AND_VIDEO_ADVANCED
      },
      [eD.WebSetting.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
        section: eL.UserSettingsSections.VOICE,
        searchableTitle: eb.default.Messages.RESET_VOICE_SETTINGS,
        parent: eD.WebSetting.VOICE_AND_VIDEO
      },
      [eD.WebSetting.POGGERMODE]: {
        section: eL.UserSettingsSections.POGGERMODE,
        searchableTitle: eb.default.Messages.POGGERMODE,
        label: eb.default.Messages.POGGERMODE,
        ariaLabel: eb.default.Messages.POGGERMODE,
        element: h.default,
        predicate: () => A.default.settingsVisible,
        icon: (0, a.jsx)("img", {
          alt: "",
          src: s("542156"),
          className: ev.poggermodeIcon
        })
      },
      [eD.WebSetting.CHAT]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: eb.default.Messages.CHAT,
        label: eb.default.Messages.CHAT,
        ariaLabel: eb.default.Messages.CHAT,
        element: eA.default
      },
      [eD.WebSetting.CHAT_INLINE_MEDIA]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: eb.default.Messages.INLINE_MEDIA_LABEL,
        parent: eD.WebSetting.CHAT
      },
      [eD.WebSetting.CHAT_EMBEDS]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: eb.default.Messages.RENDER_EMBEDS_LABEL,
        parent: eD.WebSetting.CHAT
      },
      [eD.WebSetting.CHAT_EMOJI]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: eb.default.Messages.EMOJI,
        parent: eD.WebSetting.CHAT
      },
      [eD.WebSetting.CHAT_STICKERS]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: eb.default.Messages.STICKERS_AUTO_PLAY_HEADING,
        parent: eD.WebSetting.CHAT
      },
      [eD.WebSetting.CHAT_TEXT_BOX]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: eb.default.Messages.FORM_LABEL_USE_RICH_CHAT_BOX,
        parent: eD.WebSetting.CHAT
      },
      [eD.WebSetting.CHAT_SPOILERS]: {
        section: eL.UserSettingsSections.TEXT,
        searchableTitle: eb.default.Messages.SHOW_SPOILER_CONTENT,
        parent: eD.WebSetting.CHAT
      },
      [eD.WebSetting.NOTIFICATIONS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.NOTIFICATIONS,
        label: eb.default.Messages.NOTIFICATIONS,
        ariaLabel: eb.default.Messages.NOTIFICATIONS,
        element: eT.default
      },
      [eD.WebSetting.NOTIFICATIONS_ENABLE_DESKTOP]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE,
        parent: eD.WebSetting.NOTIFICATIONS
      },
      [eD.WebSetting.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "Mention on all messages",
        parent: eD.WebSetting.NOTIFICATIONS
      },
      [eD.WebSetting.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL,
        parent: eD.WebSetting.NOTIFICATIONS
      },
      [eD.WebSetting.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL,
        parent: eD.WebSetting.NOTIFICATIONS
      },
      [eD.WebSetting.NOTIFICATIONS_UNREAD_SETTINGS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE,
        parent: eD.WebSetting.NOTIFICATIONS
      },
      [eD.WebSetting.NOTIFICATIONS_NEW_SETTINGS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "New Notification Settings (Advancd, Staff Only)",
        parent: eD.WebSetting.NOTIFICATIONS
      },
      [eD.WebSetting.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "Restore most recent snapshot",
        parent: eD.WebSetting.NOTIFICATIONS_NEW_SETTINGS
      },
      [eD.WebSetting.NOTIFICATIONS_LAUNCH_MIGRATION]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "Launch Migration",
        parent: eD.WebSetting.NOTIFICATIONS_NEW_SETTINGS
      },
      [eD.WebSetting.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: "Toggle new system on/off",
        parent: eD.WebSetting.NOTIFICATIONS_NEW_SETTINGS
      },
      [eD.WebSetting.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
        parent: eD.WebSetting.NOTIFICATIONS
      },
      [eD.WebSetting.NOTIFICATIONS_TEXT_TO_SPEECH]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.FORM_LABEL_TTS,
        parent: eD.WebSetting.NOTIFICATIONS
      },
      [eD.WebSetting.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.GUILD_COMMUNITY_ALERTS_HEADER,
        parent: eD.WebSetting.NOTIFICATIONS
      },
      [eD.WebSetting.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER,
        parent: eD.WebSetting.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [eD.WebSetting.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER,
        parent: eD.WebSetting.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [eD.WebSetting.NOTIFICATIONS_SOUNDS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.SOUNDS,
        parent: eD.WebSetting.NOTIFICATIONS
      },
      [eD.WebSetting.NOTIFICATIONS_EMAILS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS,
        parent: eD.WebSetting.NOTIFICATIONS
      },
      [eD.WebSetting.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION,
        parent: eD.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eD.WebSetting.NOTIFICATIONS_EMAILS_SOCIAL]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL,
        parent: eD.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eD.WebSetting.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS,
        parent: eD.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eD.WebSetting.NOTIFICATIONS_EMAILS_TIPS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS,
        parent: eD.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eD.WebSetting.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS,
        parent: eD.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eD.WebSetting.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
        section: eL.UserSettingsSections.NOTIFICATIONS,
        searchableTitle: eb.default.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING,
        parent: eD.WebSetting.NOTIFICATIONS_EMAILS
      },
      [eD.WebSetting.KEYBINDS]: {
        section: eL.UserSettingsSections.KEYBINDS,
        searchableTitle: eb.default.Messages.KEYBINDS,
        label: eb.default.Messages.KEYBINDS,
        element: eS.default
      },
      [eD.WebSetting.LANGUAGE]: {
        section: eL.UserSettingsSections.LOCALE,
        searchableTitle: eb.default.Messages.LANGUAGE,
        label: eb.default.Messages.LANGUAGE,
        element: eE.default
      },
      [eD.WebSetting.WINDOW_SETTINGS]: {
        section: eL.UserSettingsSections.WINDOWS,
        searchableTitle: eb.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        label: eb.default.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: eO.default,
        predicate: () => V.isPlatformEmbedded && (0, V.isWindows)()
      },
      [eD.WebSetting.LINUX_SETTINGS]: {
        section: eL.UserSettingsSections.LINUX,
        searchableTitle: eb.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        label: eb.default.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: ej,
        predicate: () => V.isPlatformEmbedded && (0, V.isLinux)()
      },
      [eD.WebSetting.STREAMER_MODE]: {
        section: eL.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eb.default.Messages.STREAMER_MODE,
        label: eb.default.Messages.STREAMER_MODE,
        ariaLabel: eb.default.Messages.STREAMER_MODE,
        element: eC.default
      },
      [eD.WebSetting.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
        section: eL.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eb.default.Messages.HIDE_PERSONAL_INFORMATION_LABEL,
        parent: eD.WebSetting.STREAMER_MODE
      },
      [eD.WebSetting.STREAMER_MODE_HIDE_INVITE_LINKS]: {
        section: eL.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eb.default.Messages.HIDE_INSTANT_INVITES_LABEL,
        parent: eD.WebSetting.STREAMER_MODE
      },
      [eD.WebSetting.STREAMER_MODE_DISABLE_SOUNDS]: {
        section: eL.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eb.default.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE,
        parent: eD.WebSetting.STREAMER_MODE
      },
      [eD.WebSetting.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
        section: eL.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eb.default.Messages.DISABLE_NOTIFICATIONS_LABEL,
        parent: eD.WebSetting.STREAMER_MODE
      },
      [eD.WebSetting.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
        section: eL.UserSettingsSections.STREAMER_MODE,
        searchableTitle: eb.default.Messages.HIDE_WINDOW_FROM_STREAM_LABEL,
        parent: eD.WebSetting.STREAMER_MODE
      },
      [eD.WebSetting.SPEED_TEST]: {
        section: eL.UserSettingsSections.SPEED_TEST,
        searchableTitle: "Speed Test",
        label: "Speed Test",
        element: Q.default,
        predicate: () => P.default.isSupported() && Y.default.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [eD.WebSetting.SETTINGS_ADVANCED]: {
        section: eL.UserSettingsSections.ADVANCED,
        searchableTitle: eb.default.Messages.SETTINGS_ADVANCED,
        label: eb.default.Messages.SETTINGS_ADVANCED,
        ariaLabel: eb.default.Messages.SETTINGS_ADVANCED,
        element: ee.default
      },
      [eD.WebSetting.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: eb.default.Messages.DEVELOPER_MODE,
        parent: eD.WebSetting.SETTINGS_ADVANCED
      },
      [eD.WebSetting.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: eb.default.Messages.HARDWARE_ACCELERATION,
        parent: eD.WebSetting.SETTINGS_ADVANCED
      },
      [eD.WebSetting.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: eb.default.Messages.USER_SETTINGS_SHOW_LIBRARY,
        parent: eD.WebSetting.SETTINGS_ADVANCED
      },
      [eD.WebSetting.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: eb.default.Messages.DEVELOPER_APPLICATION_TEST_MODE,
        parent: eD.WebSetting.SETTINGS_ADVANCED
      },
      [eD.WebSetting.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: eb.default.Messages.USER_SETTINGS_HOME_AUTO_NAV,
        parent: eD.WebSetting.SETTINGS_ADVANCED
      },
      [eD.WebSetting.ACTIVITY_PRIVACY]: {
        section: eL.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: eb.default.Messages.ACTIVITY_PRIVACY,
        label: eb.default.Messages.ACTIVITY_PRIVACY,
        ariaLabel: eb.default.Messages.ACTIVITY_PRIVACY,
        element: $.default,
        predicate: () => !ey
      },
      [eD.WebSetting.ACTIVITY_PRIVACY_STATUS]: {
        section: eL.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: eb.default.Messages.ACTIVITY_STATUS,
        parent: eD.WebSetting.ACTIVITY_PRIVACY
      },
      [eD.WebSetting.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
        section: eL.UserSettingsSections.ACTIVITY_PRIVACY,
        searchableTitle: eb.default.Messages.ACTIVITY_PARTY_PRIVACY,
        parent: eD.WebSetting.ACTIVITY_PRIVACY
      },
      [eD.WebSetting.REGISTERED_GAMES]: {
        section: eL.UserSettingsSections.REGISTERED_GAMES,
        searchableTitle: eb.default.Messages.REGISTERED_GAMES,
        label: eb.default.Messages.REGISTERED_GAMES,
        element: ed.default,
        predicate: () => !ey && (0, eR.shouldShowRegisteredGamesSettings)()
      },
      [eD.WebSetting.OVERLAY]: {
        section: eL.UserSettingsSections.OVERLAY,
        searchableTitle: eb.default.Messages.OVERLAY,
        label: eb.default.Messages.OVERLAY,
        element: e_.default,
        predicate: () => !ey && eF
      },
      [eD.WebSetting.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, T.openChangelog)(!0),
        searchableTitle: eb.default.Messages.WHATS_NEW,
        label: eb.default.Messages.WHATS_NEW
      },
      [eD.WebSetting.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          B.default.track(eL.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CLICKED), (0, y.handleClick)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              B.default.track(eL.AnalyticEvents.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, E.default)(e)
            }
          })
        },
        searchableTitle: eb.default.Messages.MERCHANDISE,
        label: eb.default.Messages.MERCHANDISE,
        ariaLabel: eb.default.Messages.MERCHANDISE
      },
      [eD.WebSetting.HYPESQUAD]: {
        section: eL.UserSettingsSections.HYPESQUAD_ONLINE,
        searchableTitle: eb.default.Messages.USER_SETTINGS_HYPESQUAD,
        label: eb.default.Messages.USER_SETTINGS_HYPESQUAD,
        element: eu.default
      },
      [eD.WebSetting.EXPERIMENTS]: {
        section: eL.UserSettingsSections.EXPERIMENTS,
        searchableTitle: "Experiments",
        label: "Experiments",
        element: ep.default,
        predicate: () => b.default.isDeveloper
      },
      [eD.WebSetting.DEVELOPER_OPTIONS]: {
        section: eL.UserSettingsSections.DEVELOPER_OPTIONS,
        searchableTitle: "Developer Options",
        label: "Developer Options",
        ariaLabel: "Developer Options",
        element: ei.default,
        predicate: () => b.default.isDeveloper
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
        element: w.default,
        predicate: () => b.default.isDeveloper
      },
      [eD.WebSetting.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: eL.UserSettingsSections.DISMISSIBLE_CONTENT_OPTIONS,
        searchableTitle: "Dismissible Contents",
        label: "Dismissible Contents",
        element: f.default,
        predicate: () => b.default.isDeveloper
      },
      [eD.WebSetting.PAYMENT_FLOW_MODALS]: {
        section: eL.UserSettingsSections.PAYMENT_FLOW_MODAL_TEST_PAGE,
        searchableTitle: "Payment Flow Modals",
        label: "Payment Flow Modals",
        element: W.default,
        predicate: () => b.default.isDeveloper
      },
      [eD.WebSetting.TEXT_PLAYGROUND]: {
        section: eL.UserSettingsSections.TEXT_PLAYGROUND,
        searchableTitle: "Text Playground",
        label: "Text Playground",
        element: eh.default,
        predicate: () => (0, X.shouldShowTextPlayground)() || b.default.isDeveloper
      },
      [eD.WebSetting.DESIGN_SYSTEMS]: {
        section: eL.UserSettingsSections.DESIGN_SYSTEMS,
        searchableTitle: "Design Systems",
        label: "Design Systems",
        element: el.default,
        predicate: () => b.default.isDeveloper
      },
      [eD.WebSetting.TEXT_COMPONENTS]: {
        section: eL.UserSettingsSections.TEXT_COMPONENT,
        searchableTitle: "Text Components",
        label: "Text Components",
        element: q.default,
        predicate: () => (0, X.shouldShowTextPlayground)() || b.default.isDeveloper
      },
      [eD.WebSetting.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: eL.UserSettingsSections.PROFILE_EFFECTS_PREVIEW_TOOL,
        searchableTitle: "Profile Effects Preview Tool",
        label: "Profile Effects Preview Tool",
        element: N.default,
        predicate: () => b.default.isDeveloper
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
            header: eb.default.Messages.LOGOUT,
            confirmText: eb.default.Messages.LOGOUT,
            cancelText: eb.default.Messages.CANCEL,
            onCancel: e.onClose,
            onConfirm: () => d.default.logout(),
            ...e,
            children: (0, a.jsx)(r.Text, {
              variant: "text-md/normal",
              children: eb.default.Messages.USER_SETTINGS_CONFIRM_LOGOUT
            })
          }))
        },
        label: eb.default.Messages.LOGOUT,
        ariaLabel: eb.default.Messages.LOGOUT,
        icon: (0, a.jsx)(j.default, {
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
        element: k.default
      }
    })
  }