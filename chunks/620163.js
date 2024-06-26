t.d(s, {
  i: function() {
    return eB
  }
}), t(653041);
var n = t(735250);
t(470079);
var a = t(990547),
  i = t(704215),
  r = t(692547),
  o = t(481060),
  l = t(570140),
  c = t(893776),
  d = t(809206),
  _ = t(230711),
  E = t(493544),
  u = t(579806),
  T = t(782568),
  S = t(758182),
  I = t(163379),
  N = t(703288),
  C = t(574755),
  m = t(425799),
  A = t(377171),
  O = t(621628),
  g = t(18438),
  h = t(778825),
  R = t(351780),
  p = t(231765),
  x = t(837741),
  M = t(804545),
  D = t(813732),
  f = t(398140),
  L = t(564344),
  P = t(977156),
  Z = t(652380),
  v = t(171156),
  b = t(906467),
  j = t(131951),
  U = t(25990),
  B = t(626135),
  G = t(572004),
  F = t(49012),
  V = t(358085),
  y = t(998502),
  Y = t(392735),
  H = t(61160),
  k = t(604227),
  w = t(38915),
  W = t(498639),
  K = t(748717),
  z = t(419636),
  Q = t(35426),
  X = t(799071),
  q = t(601433),
  J = t(154022),
  $ = t(393681),
  ee = t(309739),
  es = t(64914),
  et = t(501348),
  en = t(795594),
  ea = t(443702),
  ei = t(327192),
  er = t(177508),
  eo = t(956699),
  el = t(54942),
  ec = t(15780),
  ed = t(293389),
  e_ = t(88624),
  eE = t(387747),
  eu = t(389650),
  eT = t(649157),
  eS = t(593648),
  eI = t(327885),
  eN = t(595242),
  eC = t(301121),
  em = t(463153),
  eA = t(36192),
  eO = t(338345),
  eg = t(400287),
  eh = t(554042),
  eR = t(200645),
  ep = t(287490),
  ex = t(168308),
  eM = t(277329),
  eD = t(674116),
  ef = t(726985),
  eL = t(981631),
  eP = t(46140),
  eZ = t(65154),
  ev = t(689938),
  eb = t(422237);
let ej = () => {
    let e = "Settings list view",
      s = [i.z.CLIENT_THEMES_SETTINGS_BADGE, i.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
    return x.F.getCurrentConfig({
      location: e
    }).enabled && s.push(i.z.BRAND_REFRESH_NEW_BADGE), M.n.getCurrentConfig({
      location: e
    }).enabled && s.push(i.z.PRIDE_ICONS_APPEARANCE_BADGE), s
  },
  eU = eR.Z,
  eB = e => {
    let {
      unseenGiftCount: s,
      showPrepaidPaymentPastDueWarning: x,
      impressionSource: M,
      numOfPendingFamilyRequests: eB,
      isOverlaySupported: eG,
      isClipsBetaTagShowing: eF = !1,
      shouldMergeGameSettings: eV,
      isUserSettingsSearchEnabled: ey,
      isKeywordFilteringEnabled: eY,
      isStaff: eH,
      isInappropriateConversationWarningEnabled: ek,
      paymentsBlocked: ew,
      isEligibleForQuests: eW,
      showGiftNitro: eK,
      isStricterMessageRequestsEnabled: ez,
      hasLibraryApplication: eQ,
      hasTOTPEnabled: eX
    } = e;
    return Object.freeze({
      [ef.s6.SEARCH_NO_RESULTS]: {
        section: E.ID.CUSTOM,
        element: em.Z,
        predicate: () => ey
      },
      [ef.s6.ACCOUNT]: {
        section: eL.oAB.ACCOUNT,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_MY_ACCOUNT],
        label: ev.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: ev.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: $.Z
      },
      [ef.s6.ACCOUNT_PROFILE]: {
        searchableTitles: [ev.Z.Messages.PROFILE],
        parent: ef.s6.ACCOUNT,
        section: eL.oAB.ACCOUNT
      },
      [ef.s6.ACCOUNT_DISPLAY_NAME]: {
        searchableTitles: [ev.Z.Messages.DISPLAY_NAME],
        section: eL.oAB.ACCOUNT,
        parent: ef.s6.ACCOUNT_PROFILE
      },
      [ef.s6.ACCOUNT_PHONE_NUMBER]: {
        searchableTitles: [ev.Z.Messages.CHANGE_PHONE_NUMBER],
        section: eL.oAB.ACCOUNT,
        parent: ef.s6.ACCOUNT_PROFILE
      },
      [ef.s6.ACCOUNT_USERNAME]: {
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE],
        section: eL.oAB.ACCOUNT,
        parent: ef.s6.ACCOUNT_PROFILE
      },
      [ef.s6.ACCOUNT_EMAIL]: {
        searchableTitles: [ev.Z.Messages.CHANGE_EMAIL],
        section: eL.oAB.ACCOUNT,
        parent: ef.s6.ACCOUNT_PROFILE
      },
      [ef.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION],
        section: eL.oAB.ACCOUNT,
        parent: ef.s6.ACCOUNT
      },
      [ef.s6.ACCOUNT_CHANGE_PASSWORD]: {
        searchableTitles: [ev.Z.Messages.CHANGE_PASSWORD],
        section: eL.oAB.ACCOUNT,
        parent: ef.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [ef.s6.ACCOUNT_CONFIRM_PASSWORD]: {
        searchableTitles: [ev.Z.Messages.FORM_LABEL_CONFIRM_PASSWORD],
        section: eL.oAB.ACCOUNT,
        parent: ef.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [ef.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
        searchableTitles: [ev.Z.Messages.SETTINGS_TWO_FA],
        section: eL.oAB.ACCOUNT,
        parent: ef.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [ef.s6.ACCOUNT_ENABLE_2FA]: {
        searchableTitles: [ev.Z.Messages.TWO_FA_ENABLE],
        section: eL.oAB.ACCOUNT,
        parent: ef.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
        predicate: () => !eX
      },
      [ef.s6.ACCOUNT_REMOVE_2FA]: {
        searchableTitles: [ev.Z.Messages.TWO_FA_REMOVE],
        section: eL.oAB.ACCOUNT,
        parent: ef.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
        predicate: () => eX
      },
      [ef.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
        searchableTitles: [ev.Z.Messages.TWO_FA_BACKUP_CODE],
        section: eL.oAB.ACCOUNT,
        parent: ef.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [ef.s6.ACCOUNT_SMS_BACKUP]: {
        searchableTitles: [ev.Z.Messages.MFA_SMS_AUTH],
        section: eL.oAB.ACCOUNT,
        parent: ef.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [ef.s6.ACCOUNT_SECURITY_KEYS]: {
        searchableTitles: [ev.Z.Messages.TWO_FA_WEBAUTHN_REGISTER],
        section: eL.oAB.ACCOUNT,
        parent: ef.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [ef.s6.ACCOUNT_REMOVAL]: {
        section: eL.oAB.ACCOUNT,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION],
        parent: ef.s6.ACCOUNT
      },
      [ef.s6.ACCOUNT_DISABLE_ACCOUNT]: {
        section: eL.oAB.ACCOUNT,
        searchableTitles: [ev.Z.Messages.DISABLE_ACCOUNT],
        parent: ef.s6.ACCOUNT_REMOVAL
      },
      [ef.s6.ACCOUNT_DELETE_ACCOUNT]: {
        section: eL.oAB.ACCOUNT,
        searchableTitles: [ev.Z.Messages.DELETE_ACCOUNT],
        parent: ef.s6.ACCOUNT_DISABLE_ACCOUNT
      },
      [ef.s6.GAMES]: {
        section: eL.oAB.GAMES,
        searchableTitles: [ev.Z.Messages.GAMES],
        label: ev.Z.Messages.GAMES,
        ariaLabel: ev.Z.Messages.GAMES,
        element: eM.Z,
        predicate: () => eV
      },
      [ef.s6.GAMES_MY_GAMES]: {
        section: eL.oAB.GAMES,
        searchableTitles: [ev.Z.Messages.MY_GAMES],
        parent: ef.s6.GAMES
      },
      [ef.s6.GAMES_CLIPS]: {
        section: eL.oAB.GAMES,
        searchableTitles: [ev.Z.Messages.CLIPS],
        parent: ef.s6.GAMES
      },
      [ef.s6.GAMES_OVERLAY]: {
        section: eL.oAB.GAMES,
        searchableTitles: [ev.Z.Messages.OVERLAY],
        parent: ef.s6.GAMES
      },
      [ef.s6.GAMES_ACTIVITY_PRIVACY]: {
        section: eL.oAB.GAMES,
        searchableTitles: [ev.Z.Messages.ACTIVITY_PRIVACY],
        parent: ef.s6.GAMES
      },
      [ef.s6.PROFILE_CUSTOMIZATION]: {
        section: eL.oAB.PROFILE_CUSTOMIZATION,
        type: E.bT.WIDE,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_PROFILES],
        label: ev.Z.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: ev.Z.Messages.USER_SETTINGS_PROFILES,
        element: L.Z,
        newIndicator: (0, n.jsx)(o.PremiumBadge, {
          text: ev.Z.Messages.NEW
        }),
        notice: {
          stores: [U.Z, h.Z],
          element: f.Z
        },
        onSettingsClose: () => {
          l.Z.wait(() => {
            (0, g.It)(), (0, d.P6)(), _.Z.clearSubsection(eL.oAB.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [ef.s6.PROFILE_DISPLAY_NAME]: {
        section: eL.oAB.PROFILE_CUSTOMIZATION,
        searchableTitles: [ev.Z.Messages.DISPLAY_NAME],
        parent: ef.s6.PROFILE_CUSTOMIZATION
      },
      [ef.s6.PROFILE_USER_PROFILE]: {
        section: eL.oAB.PROFILE_CUSTOMIZATION,
        searchableTitles: [ev.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE],
        parent: ef.s6.PROFILE_CUSTOMIZATION
      },
      [ef.s6.PROFILE_SERVER_PROFILES]: {
        section: eL.oAB.PROFILE_CUSTOMIZATION,
        searchableTitles: [ev.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY],
        parent: ef.s6.PROFILE_CUSTOMIZATION
      },
      [ef.s6.PRIVACY_AND_SAFETY]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        label: ev.Z.Messages.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY],
        ariaLabel: ev.Z.Messages.PRIVACY_AND_SAFETY,
        element: eC.Z
      },
      [ef.s6.PRIVACY_USER_SETTINGS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY],
        parent: ef.s6.PRIVACY_AND_SAFETY
      },
      [ef.s6.PRIVACY_SENSITIVE_MEDIA]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER, ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_FILTER, ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_BLUR, ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_SENSITIVE_CONTENT, ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_EXPLICIT],
        parent: ef.s6.PRIVACY_USER_SETTINGS
      },
      [ef.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.SETTINGS_DM_SPAM_FILTER, ev.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_MESSAGES, ev.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_INBOX],
        parent: ef.s6.PRIVACY_USER_SETTINGS
      },
      [ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.USER_DM_SETTINGS, ev.Z.Messages.USER_DM_SEARCH_TERM_DIRECT_MESSAGES, ev.Z.Messages.USER_DM_SEARCH_TERM_DM],
        parent: ef.s6.PRIVACY_USER_SETTINGS
      },
      [ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.NEW_GUILDS_DM_ALLOWED],
        parent: ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER],
        parent: ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER],
        parent: ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
        predicate: () => !ez
      },
      [ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.NSFW_DM_COMMANDS_HEADER],
        parent: ef.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [ef.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.PRIVACY_AND_SAFETY,
        parent: ef.s6.PRIVACY_AND_SAFETY
      },
      [ef.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES,
        parent: ef.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
      },
      [ef.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS,
        parent: ef.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS,
        predicate: () => !ez
      },
      [ef.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS,
        parent: ef.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
      },
      [ef.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING,
        parent: ef.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
      },
      [ef.s6.PRIVACY_DATA_PRIVACY]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.SETTINGS_DATA_PRIVACY_CONTROLS],
        parent: ef.s6.PRIVACY_USER_SETTINGS
      },
      [ef.s6.PRIVACY_DATA_IMPROVE_DISCORD]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE],
        parent: ef.s6.PRIVACY_DATA_PRIVACY
      },
      [ef.s6.PRIVACY_DATA_PERSONALIZE]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE],
        parent: ef.s6.PRIVACY_DATA_PRIVACY
      },
      [ef.s6.PRIVACY_DATA_QUESTS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT],
        parent: ef.s6.PRIVACY_DATA_PRIVACY
      },
      [ef.s6.PRIVACY_DATA_BASIC_SERVICE]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        parent: ef.s6.PRIVACY_DATA_PRIVACY,
        searchableTitles: [ef.CF]
      },
      [ef.s6.PRIVACY_DATA_REQUEST]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD],
        parent: ef.s6.PRIVACY_DATA_PRIVACY
      },
      [ef.s6.PRIVACY_STAFF_ONLY]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER],
        parent: ef.s6.PRIVACY_USER_SETTINGS,
        predicate: () => eH
      },
      [ef.s6.PRIVACY_KEYWORD_FILTER]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE, ev.Z.Messages.USER_KEYWORD_FILTERS_SEARCH_TERM_KEYWORD],
        parent: ef.s6.PRIVACY_USER_SETTINGS,
        predicate: () => eY
      },
      [ef.s6.PRIVACY_TERMS_POLICY]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        parent: ef.s6.PRIVACY_USER_SETTINGS,
        searchableTitles: [ef.CF]
      },
      [ef.s6.PRIVACY_SAFETY_ALERTS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.SAFETY_ALERTS_SETTING_TITLE],
        parent: ef.s6.PRIVACY_USER_SETTINGS,
        predicate: () => ek
      },
      [ef.s6.PRIVACY_ACCOUNT_STANDING]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2],
        parent: ef.s6.PRIVACY_AND_SAFETY
      },
      [ef.s6.PRIVACY_FAMILY_CENTER]: {
        section: eL.oAB.FAMILY_CENTER,
        searchableTitles: [ev.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE],
        label: ev.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: ev.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: el.Z,
        badgeCount: eB,
        newIndicator: (0, n.jsx)(o.TextBadge, {
          text: ev.Z.Messages.NEW,
          color: A.Z.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [i.z.FAMILY_CENTER_NEW_BADGE]
      },
      [ef.s6.AUTHORIZED_APPS]: {
        section: eL.oAB.AUTHORIZED_APPS,
        searchableTitles: [ev.Z.Messages.AUTHORIZED_APPS],
        label: ev.Z.Messages.AUTHORIZED_APPS,
        element: en.Z
      },
      [ef.s6.SESSIONS]: {
        section: eL.oAB.SESSIONS,
        searchableTitles: [ev.Z.Messages.AUTH_SESSIONS],
        label: ev.Z.Messages.AUTH_SESSIONS,
        ariaLabel: ev.Z.Messages.AUTH_SESSIONS,
        element: eA.Z,
        newIndicatorDismissibleContentTypes: [i.z.AUTH_SESSIONS_NEW],
        predicate: () => Y.Z.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [ef.s6.CONNECTIONS]: {
        section: eL.oAB.CONNECTIONS,
        searchableTitles: [ev.Z.Messages.CONNECTIONS],
        label: ev.Z.Messages.CONNECTIONS,
        ariaLabel: ev.Z.Messages.CONNECTIONS,
        element: ei.Z,
        impressionName: a.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: M
        },
        newIndicatorDismissibleContentTypes: [i.z.NEW_CRUNCHYROLL_CONNECTION]
      },
      [ef.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
        section: eL.oAB.CONNECTIONS,
        searchableTitles: [ev.Z.Messages.CONNECTED_ACCOUNTS],
        parent: ef.s6.CONNECTIONS,
        element: ei.Z
      },
      [ef.s6.CLIPS]: {
        section: eL.oAB.CLIPS,
        searchableTitles: [ev.Z.Messages.CLIPS],
        label: ev.Z.Messages.CLIPS,
        ariaLabel: ev.Z.Messages.CLIPS,
        icon: eF ? (0, n.jsx)(N.Z, {}) : void 0,
        element: C.Z,
        predicate: () => !eV
      },
      [ef.s6.FRIEND_REQUESTS]: {
        section: eL.oAB.FRIEND_REQUESTS,
        searchableTitles: [ev.Z.Messages.FRIEND_REQUESTS],
        label: ev.Z.Messages.FRIEND_REQUESTS,
        element: ec.Z
      },
      [ef.s6.PREMIUM]: {
        section: eL.oAB.PREMIUM,
        ariaLabel: ev.Z.Messages.PREMIUM,
        searchableTitles: [ev.Z.Messages.PREMIUM],
        label: ev.Z.Messages.PREMIUM,
        element: K.Z,
        className: eb.premiumTab
      },
      [ef.s6.GUILD_BOOSTING]: {
        section: eL.oAB.GUILD_BOOSTING,
        searchableTitles: [ev.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE],
        label: ev.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: eN.Z
      },
      [ef.s6.SUBSCRIPTIONS]: {
        section: eL.oAB.SUBSCRIPTIONS,
        ariaLabel: ev.Z.Messages.SUBSCRIPTIONS_TITLE,
        searchableTitles: [ev.Z.Messages.SUBSCRIPTIONS_TITLE],
        label: ev.Z.Messages.SUBSCRIPTIONS_TITLE,
        element: D.Z,
        icon: x ? (0, n.jsx)(o.CircleExclamationPointIcon, {
          size: "xs",
          color: r.Z.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [ef.s6.SUBSCRIPTIONS_CREDITS]: {
        section: eL.oAB.SUBSCRIPTIONS,
        searchableTitles: [ev.Z.Messages.BILLING_SUBSCRIPTION_CREDIT],
        parent: ef.s6.SUBSCRIPTIONS
      },
      [ef.s6.GIFT_INVENTORY]: {
        section: eL.oAB.INVENTORY,
        searchableTitles: [ev.Z.Messages.GIFT_INVENTORY],
        label: ev.Z.Messages.GIFT_INVENTORY,
        element: eE.Z,
        ariaLabel: ev.Z.Messages.GIFT_INVENTORY,
        badgeCount: s
      },
      [ef.s6.GIFT_NITRO]: {
        section: eL.oAB.INVENTORY,
        searchableTitles: [ev.Z.Messages.GIFT_NITRO],
        parent: ef.s6.GIFT_INVENTORY,
        predicate: () => !ew && eK
      },
      [ef.s6.GIFT_CODE_REDEMPTION]: {
        section: eL.oAB.INVENTORY,
        searchableTitles: [ev.Z.Messages.GIFT_INVENTORY_REDEEM_CODES],
        parent: ef.s6.GIFT_INVENTORY,
        predicate: () => !ew
      },
      [ef.s6.GIFT_INVENTORY_QUESTS]: {
        section: eL.oAB.INVENTORY,
        searchableTitles: [ev.Z.Messages.QUESTS],
        parent: ef.s6.GIFT_INVENTORY,
        predicate: () => eW
      },
      [ef.s6.GIFT_INVENTORY_LIST]: {
        section: eL.oAB.INVENTORY,
        searchableTitles: [ev.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED],
        parent: ef.s6.GIFT_INVENTORY,
        predicate: () => !ew
      },
      [ef.s6.GIFT_BLOCKED_PAYMENTS]: {
        section: eL.oAB.INVENTORY,
        searchableTitles: [ev.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER],
        parent: ef.s6.GIFT_INVENTORY,
        predicate: () => ew
      },
      [ef.s6.BILLING]: {
        section: eL.oAB.BILLING,
        searchableTitles: [ev.Z.Messages.BILLING],
        label: ev.Z.Messages.BILLING,
        ariaLabel: ev.Z.Messages.BILLING,
        element: ea.Z
      },
      [ef.s6.BILLING_PAYMENT_METHODS]: {
        section: eL.oAB.BILLING,
        searchableTitles: [ev.Z.Messages.BILLING_PAYMENT_SOURCES],
        parent: ef.s6.BILLING
      },
      [ef.s6.BILLING_TRANSACTION_HISTORY]: {
        section: eL.oAB.BILLING,
        searchableTitles: [ev.Z.Messages.BILLING_PAYMENT_HISTORY],
        parent: ef.s6.BILLING
      },
      [ef.s6.APPEARANCE]: {
        section: eL.oAB.APPEARANCE,
        searchableTitles: [ev.Z.Messages.APPEARANCE],
        label: ev.Z.Messages.APPEARANCE,
        ariaLabel: ev.Z.Messages.APPEARANCE,
        element: et.Z,
        newIndicator: (0, n.jsx)(o.PremiumBadge, {
          text: ev.Z.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: ej()
      },
      [ef.s6.APPEARANCE_THEME]: {
        section: eL.oAB.APPEARANCE,
        searchableTitles: [ev.Z.Messages.THEME],
        parent: ef.s6.APPEARANCE
      },
      [ef.s6.APPEARANCE_COLOR]: {
        section: eL.oAB.APPEARANCE,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE],
        parent: ef.s6.APPEARANCE_THEME
      },
      [ef.s6.APPEARANCE_ICON]: {
        section: eL.oAB.APPEARANCE,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE],
        parent: ef.s6.APPEARANCE_THEME
      },
      [ef.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
        section: eL.oAB.APPEARANCE,
        searchableTitles: [ev.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL],
        parent: ef.s6.APPEARANCE
      },
      [ef.s6.APPEARANCE_SCALING_SPACING]: {
        section: eL.oAB.APPEARANCE,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL],
        parent: ef.s6.APPEARANCE
      },
      [ef.s6.ACCESSIBILITY]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY],
        label: ev.Z.Messages.ACCESSIBILITY,
        ariaLabel: ev.Z.Messages.ACCESSIBILITY,
        element: J.Z
      },
      [ef.s6.ACCESSIBILITY_SATURATION]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE],
        parent: ef.s6.ACCESSIBILITY
      },
      [ef.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL],
        parent: ef.s6.ACCESSIBILITY
      },
      [ef.s6.ACCESSIBILITY_ROLE_STYLE]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE],
        parent: ef.s6.ACCESSIBILITY
      },
      [ef.s6.ACCESSIBILITY_TAGS]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE],
        parent: ef.s6.ACCESSIBILITY
      },
      [ef.s6.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE],
        parent: ef.s6.ACCESSIBILITY
      },
      [ef.s6.ACCESSIBILITY_CONTRAST]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST],
        parent: ef.s6.ACCESSIBILITY
      },
      [ef.s6.ACCESSIBILITY_REDUCED_MOTION]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION],
        parent: ef.s6.ACCESSIBILITY
      },
      [ef.s6.ACCESSIBILITY_STICKERS]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
        parent: ef.s6.ACCESSIBILITY
      },
      [ef.s6.ACCESSIBILITY_MESSAGES]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT],
        parent: ef.s6.ACCESSIBILITY
      },
      [ef.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_TTS],
        parent: ef.s6.ACCESSIBILITY
      },
      [ef.s6.VOICE_AND_VIDEO]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.VOICE_AND_VIDEO],
        label: ev.Z.Messages.VOICE_AND_VIDEO,
        ariaLabel: ev.Z.Messages.VOICE_AND_VIDEO,
        element: eD.Z,
        predicate: () => j.Z.isSupported()
      },
      [ef.s6.VOICE_AND_VIDEO_DEVICES]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_INPUT_DEVICE, ev.Z.Messages.FORM_LABEL_OUTPUT_DEVICE, ev.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE, ev.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS, ev.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES],
        parent: ef.s6.VOICE_AND_VIDEO
      },
      [ef.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_INPUT_VOLUME, ev.Z.Messages.FORM_LABEL_OUTPUT_VOLUME, ev.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE, ev.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS, ev.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES],
        parent: ef.s6.VOICE_AND_VIDEO
      },
      [ef.s6.VOICE_AND_VIDEO_MIC_TEST]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE, ev.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
        parent: ef.s6.VOICE_AND_VIDEO
      },
      [ef.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_INPUT_MODE, ev.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
        parent: ef.s6.VOICE_AND_VIDEO
      },
      [ef.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY, ev.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
        parent: ef.s6.VOICE_AND_VIDEO
      },
      [ef.s6.VOICE_AND_VIDEO_SOUNDS]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.CALL_SOUNDS_SETTINGS],
        parent: ef.s6.VOICE_AND_VIDEO
      },
      [ef.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.SOUNDBOARD],
        parent: ef.s6.VOICE_AND_VIDEO_SOUNDS
      },
      [ef.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.CALL_SOUNDS_SETTINGS],
        parent: ef.s6.VOICE_AND_VIDEO_SOUNDS
      },
      [ef.s6.VOICE_AND_VIDEO_VIDEO]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.VIDEO_SETTINGS],
        parent: ef.s6.VOICE_AND_VIDEO
      },
      [ef.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_VIDEO_DEVICE],
        parent: ef.s6.VOICE_AND_VIDEO_VIDEO,
        predicate: () => j.Z.supports(eZ.AN.VIDEO)
      },
      [ef.s6.VOICE_AND_VIDEO_ADVANCED]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.SETTINGS_ADVANCED],
        parent: ef.s6.VOICE_AND_VIDEO
      },
      [ef.s6.VOICE_AND_VIDEO_ADVANCED_CODECS]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE],
        parent: ef.s6.VOICE_AND_VIDEO_ADVANCED
      },
      [ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_VOICE_PROCESSING],
        parent: ef.s6.VOICE_AND_VIDEO_ADVANCED
      },
      [ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.ECHO_CANCELLATION],
        parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
      },
      [ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.NOISE_SUPPRESSION, ev.Z.Messages.NOISE_CANCELLATION_SEARCH_TERM_KRISP],
        parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => j.Z.isNoiseSuppressionSupported()
      },
      [ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.ADVANCED_VOICE_ACTIVITY],
        parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => j.Z.isAdvancedVoiceActivitySupported()
      },
      [ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.AUTOMATIC_GAIN_CONTROL],
        parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => j.Z.isAutomaticGainControlSupported()
      },
      [ef.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_QOS],
        parent: ef.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => j.Z.supports(eZ.AN.QOS)
      },
      [ef.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_ATTENUATION],
        parent: ef.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => j.Z.supports(eZ.AN.ATTENUATION)
      },
      [ef.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_SUBSYSTEM],
        parent: ef.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => j.Z.supports(eZ.AN.LEGACY_AUDIO_SUBSYSTEM) || j.Z.supports(eZ.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
      },
      [ef.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS],
        parent: ef.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => V.isPlatformEmbedded
      },
      [ef.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_DEBUG],
        parent: ef.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => V.isPlatformEmbedded && j.Z.supports(eZ.AN.DEBUG_LOGGING) && null != u.Z.fileManager.readLogFiles
      },
      [ef.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_CHECKBOX_AEC_DUMP],
        parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
        predicate: () => j.Z.isAecDumpSupported()
      },
      [ef.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG],
        parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
        predicate: () => ("canary" === y.ZP.releaseChannel || "development" === y.ZP.releaseChannel) && eH && j.Z.supports(eZ.AN.CONNECTION_REPLAY)
      },
      [ef.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING],
        parent: ef.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING
      },
      [ef.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
        section: eL.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.RESET_VOICE_SETTINGS],
        parent: ef.s6.VOICE_AND_VIDEO_ADVANCED
      },
      [ef.s6.POGGERMODE]: {
        section: eL.oAB.POGGERMODE,
        searchableTitles: [ev.Z.Messages.POGGERMODE],
        label: ev.Z.Messages.POGGERMODE,
        ariaLabel: ev.Z.Messages.POGGERMODE,
        element: p.Z,
        predicate: () => R.Z.settingsVisible,
        icon: (0, n.jsx)("img", {
          alt: "",
          src: t(348621),
          className: eb.poggermodeIcon
        })
      },
      [ef.s6.CHAT]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.CHAT],
        label: ev.Z.Messages.CHAT,
        ariaLabel: ev.Z.Messages.CHAT,
        element: eg.Z
      },
      [ef.s6.CHAT_INLINE_MEDIA]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.INLINE_MEDIA_LABEL],
        parent: ef.s6.CHAT
      },
      [ef.s6.CHAT_INLINE_MEDIA_LINKS]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.INLINE_EMBED_MEDIA],
        parent: ef.s6.CHAT_INLINE_MEDIA
      },
      [ef.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.INLINE_ATTACHMENT_MEDIA],
        parent: ef.s6.CHAT_INLINE_MEDIA
      },
      [ef.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.IMAGE_DESCRIPTION],
        parent: ef.s6.CHAT_INLINE_MEDIA
      },
      [ef.s6.CHAT_EMBEDS]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.RENDER_EMBEDS_LABEL],
        parent: ef.s6.CHAT
      },
      [ef.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.RENDER_EMBEDS],
        parent: ef.s6.CHAT_EMBEDS
      },
      [ef.s6.CHAT_EMOJI]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.EMOJI],
        parent: ef.s6.CHAT
      },
      [ef.s6.CHAT_EMOJI_REACTIONS]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.RENDER_REACTIONS],
        parent: ef.s6.CHAT_EMOJI
      },
      [ef.s6.CHAT_EMOJI_EMOTICONS]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.CONVERT_EMOTICONS],
        parent: ef.s6.CHAT_EMOJI
      },
      [ef.s6.CHAT_STICKERS]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
        parent: ef.s6.CHAT
      },
      [ef.s6.CHAT_STICKERS_SUGGESTIONS]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.AUTO_SUGGEST_STICKERS],
        parent: ef.s6.CHAT_STICKERS
      },
      [ef.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.STICKERS_IN_AUTOCOMPLETE],
        parent: ef.s6.CHAT_STICKERS
      },
      [ef.s6.CHAT_TEXT_BOX]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX],
        parent: ef.s6.CHAT
      },
      [ef.s6.CHAT_TEXT_BOX_PREVIEW]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION],
        parent: ef.s6.CHAT_TEXT_BOX
      },
      [ef.s6.CHAT_THREADS]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.THREADS],
        parent: ef.s6.CHAT
      },
      [ef.s6.CHAT_THREADS_SPLIT_VIEW]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION],
        parent: ef.s6.CHAT_THREADS
      },
      [ef.s6.CHAT_SPOILERS]: {
        section: eL.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.SHOW_SPOILER_CONTENT],
        parent: ef.s6.CHAT
      },
      [ef.s6.NOTIFICATIONS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.NOTIFICATIONS],
        label: ev.Z.Messages.NOTIFICATIONS,
        ariaLabel: ev.Z.Messages.NOTIFICATIONS,
        element: eS.Z
      },
      [ef.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE],
        parent: ef.s6.NOTIFICATIONS
      },
      [ef.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: ["Mention on all messages"],
        parent: ef.s6.NOTIFICATIONS
      },
      [ef.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL],
        parent: ef.s6.NOTIFICATIONS
      },
      [ef.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL],
        parent: ef.s6.NOTIFICATIONS,
        predicate: () => (0, V.isWindows)()
      },
      [ef.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE],
        parent: ef.s6.NOTIFICATIONS
      },
      [ef.s6.NOTIFICATIONS_NEW_SETTINGS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: ["New Notification Settings (Advancd, Staff Only)"],
        parent: ef.s6.NOTIFICATIONS,
        predicate: () => !1
      },
      [ef.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: ["Restore most recent snapshot"],
        parent: ef.s6.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [ef.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: ["Launch Migration"],
        parent: ef.s6.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [ef.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: ["Toggle new system on/off"],
        parent: ef.s6.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [ef.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT],
        parent: ef.s6.NOTIFICATIONS
      },
      [ef.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_TTS],
        parent: ef.s6.NOTIFICATIONS
      },
      [ef.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER],
        parent: ef.s6.NOTIFICATIONS
      },
      [ef.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER],
        parent: ef.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [ef.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER],
        parent: ef.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [ef.s6.NOTIFICATIONS_SOUNDS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.SOUNDS],
        parent: ef.s6.NOTIFICATIONS
      },
      [ef.s6.NOTIFICATIONS_EMAILS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS],
        parent: ef.s6.NOTIFICATIONS
      },
      [ef.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION],
        parent: ef.s6.NOTIFICATIONS_EMAILS
      },
      [ef.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL],
        parent: ef.s6.NOTIFICATIONS_EMAILS
      },
      [ef.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS],
        parent: ef.s6.NOTIFICATIONS_EMAILS
      },
      [ef.s6.NOTIFICATIONS_EMAILS_TIPS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS],
        parent: ef.s6.NOTIFICATIONS_EMAILS
      },
      [ef.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS],
        parent: ef.s6.NOTIFICATIONS_EMAILS
      },
      [ef.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING],
        parent: ef.s6.NOTIFICATIONS_EMAILS
      },
      [ef.s6.KEYBINDS]: {
        section: eL.oAB.KEYBINDS,
        searchableTitles: [ev.Z.Messages.KEYBINDS],
        label: ev.Z.Messages.KEYBINDS,
        element: eu.Z
      },
      [ef.s6.LANGUAGE]: {
        section: eL.oAB.LOCALE,
        searchableTitles: [ev.Z.Messages.LANGUAGE],
        label: ev.Z.Messages.LANGUAGE,
        element: eT.Z
      },
      [ef.s6.WINDOW_SETTINGS]: {
        section: eL.oAB.WINDOWS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS],
        label: ev.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: eR.Z,
        predicate: () => V.isPlatformEmbedded && (0, V.isWindows)()
      },
      [ef.s6.LINUX_SETTINGS]: {
        section: eL.oAB.LINUX,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_LINUX_SETTINGS],
        label: ev.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: eU,
        predicate: () => V.isPlatformEmbedded && (0, V.isLinux)()
      },
      [ef.s6.STREAMER_MODE]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.STREAMER_MODE],
        label: ev.Z.Messages.STREAMER_MODE,
        ariaLabel: ev.Z.Messages.STREAMER_MODE,
        element: eO.Z
      },
      [ef.s6.STREAMER_MODE_INTEGRATIONS]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE],
        parent: ef.s6.STREAMER_MODE
      },
      [ef.s6.STREAMER_MODE_ENABLE]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.ENABLE_STREAMER_MODE_LABEL],
        parent: ef.s6.STREAMER_MODE
      },
      [ef.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL],
        parent: ef.s6.STREAMER_MODE
      },
      [ef.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.HIDE_INSTANT_INVITES_LABEL],
        parent: ef.s6.STREAMER_MODE
      },
      [ef.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE],
        parent: ef.s6.STREAMER_MODE
      },
      [ef.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.DISABLE_NOTIFICATIONS_LABEL],
        parent: ef.s6.STREAMER_MODE
      },
      [ef.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL],
        parent: ef.s6.STREAMER_MODE,
        predicate: () => {
          var e, s, t;
          return null !== (t = null === u.Z || void 0 === u.Z ? void 0 : null === (s = u.Z.window) || void 0 === s ? void 0 : null === (e = s.supportsContentProtection) || void 0 === e ? void 0 : e.call(s)) && void 0 !== t && t
        }
      },
      [ef.s6.SPEED_TEST]: {
        section: eL.oAB.SPEED_TEST,
        searchableTitles: ["Speed Test"],
        label: "Speed Test",
        element: Q.Z,
        predicate: () => v.Z.isSupported() && H.Z.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [ef.s6.SETTINGS_ADVANCED]: {
        section: eL.oAB.ADVANCED,
        searchableTitles: [ev.Z.Messages.SETTINGS_ADVANCED],
        label: ev.Z.Messages.SETTINGS_ADVANCED,
        ariaLabel: ev.Z.Messages.SETTINGS_ADVANCED,
        element: es.Z
      },
      [ef.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
        section: eL.oAB.ADVANCED,
        searchableTitles: [ev.Z.Messages.DEVELOPER_MODE],
        parent: ef.s6.SETTINGS_ADVANCED,
        predicate: () => G.wS
      },
      [ef.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
        section: eL.oAB.ADVANCED,
        searchableTitles: [ev.Z.Messages.HARDWARE_ACCELERATION],
        parent: ef.s6.SETTINGS_ADVANCED,
        predicate: () => V.isPlatformEmbedded
      },
      [ef.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
        section: eL.oAB.ADVANCED,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_SHOW_LIBRARY],
        parent: ef.s6.SETTINGS_ADVANCED,
        predicate: () => eQ
      },
      [ef.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
        section: eL.oAB.ADVANCED,
        searchableTitles: [ev.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE],
        parent: ef.s6.SETTINGS_ADVANCED,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME]: {
        section: eL.oAB.ADVANCED,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_HOME_AUTO_NAV],
        parent: ef.s6.SETTINGS_ADVANCED
      },
      [ef.s6.ACTIVITY_PRIVACY]: {
        section: eL.oAB.ACTIVITY_PRIVACY,
        searchableTitles: [ev.Z.Messages.ACTIVITY_PRIVACY],
        label: ev.Z.Messages.ACTIVITY_PRIVACY,
        ariaLabel: ev.Z.Messages.ACTIVITY_PRIVACY,
        element: ee.Z,
        predicate: () => !eV
      },
      [ef.s6.ACTIVITY_PRIVACY_STATUS]: {
        section: eV ? eL.oAB.GAMES : eL.oAB.ACTIVITY_PRIVACY,
        searchableTitles: [ev.Z.Messages.ACTIVITY_STATUS],
        parent: eV ? ef.s6.GAMES : ef.s6.ACTIVITY_PRIVACY
      },
      [ef.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
        section: eV ? eL.oAB.GAMES : eL.oAB.ACTIVITY_PRIVACY,
        searchableTitles: [ev.Z.Messages.ACTIVITY_PARTY_PRIVACY],
        parent: eV ? ef.s6.GAMES : ef.s6.ACTIVITY_PRIVACY
      },
      [ef.s6.REGISTERED_GAMES]: {
        section: eL.oAB.REGISTERED_GAMES,
        searchableTitles: [ev.Z.Messages.REGISTERED_GAMES],
        label: ev.Z.Messages.REGISTERED_GAMES,
        element: ed.Z,
        predicate: () => !eV && (0, ex.Jw)()
      },
      [ef.s6.OVERLAY]: {
        section: eL.oAB.OVERLAY,
        searchableTitles: [ev.Z.Messages.OVERLAY],
        label: ev.Z.Messages.OVERLAY,
        element: eI.Z,
        predicate: () => !eV && eG
      },
      [ef.s6.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, I.Z)(!0),
        searchableTitles: [ev.Z.Messages.WHATS_NEW],
        label: ev.Z.Messages.WHATS_NEW
      },
      [ef.s6.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          B.default.track(eL.rMx.USER_SETTINGS_MERCH_LINK_CLICKED), (0, F.q)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              B.default.track(eL.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, T.Z)(e)
            }
          })
        },
        searchableTitles: [ev.Z.Messages.MERCHANDISE],
        label: ev.Z.Messages.MERCHANDISE,
        ariaLabel: ev.Z.Messages.MERCHANDISE
      },
      [ef.s6.HYPESQUAD]: {
        section: eL.oAB.HYPESQUAD_ONLINE,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_HYPESQUAD],
        label: ev.Z.Messages.USER_SETTINGS_HYPESQUAD,
        element: e_.Z
      },
      [ef.s6.EXPERIMENTS]: {
        section: eL.oAB.EXPERIMENTS,
        searchableTitles: ["Experiments"],
        label: "Experiments",
        element: ep.Z,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Developer Options"],
        label: "Developer Options",
        ariaLabel: "Developer Options",
        element: eo.Z,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_FLAGS]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Developer Options Flags"],
        parent: ef.s6.DEVELOPER_OPTIONS,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Tracing Requests"],
        parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Forced Canary"],
        parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Gateway Events To Console"],
        parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Rpc Events Commands"],
        parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Analytics Events Logging"],
        parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Source Maps"],
        parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Analytics Debugger View"],
        parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Idle Status Indicator"],
        parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => eH && b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Accessibility Auditing"],
        parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => !1
      },
      [ef.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Preview Unpublished Collections"],
        parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => eH && b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Override Client Side"],
        parent: ef.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Override Client Side Premium Type"],
        parent: ef.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Override Client Side Account Created Data"],
        parent: ef.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Open Overlay"],
        parent: ef.s6.DEVELOPER_OPTIONS,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Reset Socket"],
        parent: ef.s6.DEVELOPER_OPTIONS,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Clear Caches"],
        parent: ef.s6.DEVELOPER_OPTIONS,
        predicate: () => S.q && b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_CRASHES]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Crashes"],
        parent: ef.s6.DEVELOPER_OPTIONS,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Survey Override"],
        parent: ef.s6.DEVELOPER_OPTIONS,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Changelog Override"],
        parent: ef.s6.DEVELOPER_OPTIONS,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Build Override"],
        parent: ef.s6.DEVELOPER_OPTIONS,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.HOTSPOT_OPTIONS]: {
        section: eL.oAB.HOTSPOT_OPTIONS,
        searchableTitles: ["Hotspot Options"],
        label: "Hotspot Options",
        element: w.Z,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: eL.oAB.DISMISSIBLE_CONTENT_OPTIONS,
        searchableTitles: ["Dismissible Contents"],
        label: "Dismissible Contents",
        element: O.Z,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.PAYMENT_FLOW_MODALS]: {
        section: eL.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
        searchableTitles: ["Payment Flow Modals"],
        label: "Payment Flow Modals",
        element: W.Z,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.TEXT_PLAYGROUND]: {
        section: eL.oAB.TEXT_PLAYGROUND,
        searchableTitles: ["Text Playground"],
        label: "Text Playground",
        element: eh.Z,
        predicate: () => (0, q.D)() || b.Z.isDeveloper
      },
      [ef.s6.DESIGN_SYSTEMS]: {
        section: eL.oAB.DESIGN_SYSTEMS,
        searchableTitles: ["Design Systems"],
        label: "Design Systems",
        element: er.Z,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.TEXT_COMPONENTS]: {
        section: eL.oAB.TEXT_COMPONENT,
        searchableTitles: ["Text Components"],
        label: "Text Components",
        element: X.Z,
        predicate: () => (0, q.D)() || b.Z.isDeveloper
      },
      [ef.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: eL.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
        searchableTitles: ["Profile Effects Preview Tool"],
        label: "Profile Effects Preview Tool",
        element: m.Z,
        predicate: () => b.Z.isDeveloper
      },
      [ef.s6.QUEST_PREVIEW_TOOL]: {
        section: eL.oAB.QUEST_PREVIEW_TOOL,
        searchableTitles: ["Quest Preview Tool"],
        label: "Quest Preview Tool",
        element: Z.Z,
        predicate: () => (0, P.X7)({
          location: eP.dr.QUEST_PREVIEW_TOOL
        })
      },
      [ef.s6.LOGOUT]: {
        section: "logout",
        onClick: () => {
          (0, o.openModal)(e => (0, n.jsx)(o.ConfirmModal, {
            header: ev.Z.Messages.LOGOUT,
            confirmText: ev.Z.Messages.LOGOUT,
            cancelText: ev.Z.Messages.CANCEL,
            onCancel: e.onClose,
            onConfirm: () => c.Z.logout(),
            ...e,
            children: (0, n.jsx)(o.Text, {
              variant: "text-md/normal",
              children: ev.Z.Messages.USER_SETTINGS_CONFIRM_LOGOUT
            })
          }))
        },
        label: ev.Z.Messages.LOGOUT,
        ariaLabel: ev.Z.Messages.LOGOUT,
        icon: (0, n.jsx)(o.DoorExitIcon, {
          size: "xs",
          color: "currentColor"
        })
      },
      [ef.s6.SOCIAL_LINKS]: {
        section: E.ID.CUSTOM,
        element: z.Z
      },
      [ef.s6.CLIENT_DEBUG_INFO]: {
        section: E.ID.CUSTOM,
        element: k.Z
      }
    })
  }