s.d(t, {
  i: function() {
return eG;
  }
}), s(653041);
var n = s(735250);
s(470079);
var a = s(990547),
  i = s(704215),
  r = s(692547),
  o = s(481060),
  l = s(570140),
  c = s(893776),
  d = s(809206),
  _ = s(230711),
  E = s(493544),
  u = s(579806),
  T = s(782568),
  I = s(758182),
  S = s(163379),
  N = s(703288),
  C = s(574755),
  m = s(425799),
  A = s(377171),
  g = s(621628),
  h = s(18438),
  O = s(778825),
  p = s(665166),
  R = s(351780),
  x = s(231765),
  f = s(837741),
  M = s(804545),
  D = s(813732),
  P = s(398140),
  L = s(564344),
  b = s(977156),
  Z = s(652380),
  v = s(171156),
  j = s(906467),
  B = s(131951),
  U = s(25990),
  G = s(626135),
  F = s(572004),
  y = s(49012),
  V = s(358085),
  Y = s(998502),
  w = s(392735),
  k = s(61160),
  H = s(604227),
  W = s(38915),
  K = s(498639),
  z = s(748717),
  Q = s(419636),
  X = s(35426),
  q = s(799071),
  J = s(601433),
  $ = s(154022),
  ee = s(393681),
  et = s(309739),
  es = s(64914),
  en = s(501348),
  ea = s(795594),
  ei = s(443702),
  er = s(920914),
  eo = s(177508),
  el = s(956699),
  ec = s(54942),
  ed = s(15780),
  e_ = s(293389),
  eE = s(88624),
  eu = s(387747),
  eT = s(389650),
  eI = s(649157),
  eS = s(593648),
  eN = s(327885),
  eC = s(595242),
  em = s(301121),
  eA = s(463153),
  eg = s(36192),
  eh = s(338345),
  eO = s(400287),
  ep = s(554042),
  eR = s(200645),
  ex = s(287490),
  ef = s(168308),
  eM = s(277329),
  eD = s(674116),
  eP = s(726985),
  eL = s(981631),
  eb = s(46140),
  eZ = s(65154),
  ev = s(689938),
  ej = s(54048);
let eB = () => {
let e = 'Settings list view',
  t = [
    i.z.CLIENT_THEMES_SETTINGS_BADGE,
    i.z.DEKSTOP_CUSTOM_APP_ICON_BADGE
  ];
return f.F.getCurrentConfig({
  location: e
}).enabled && t.push(i.z.BRAND_REFRESH_NEW_BADGE), M.n.getCurrentConfig({
  location: e
}).enabled && t.push(i.z.PRIDE_ICONS_APPEARANCE_BADGE), t;
  },
  eU = eR.Z,
  eG = e => {
let {
  unseenGiftCount: t,
  showPrepaidPaymentPastDueWarning: f,
  impressionSource: M,
  numOfPendingFamilyRequests: eG,
  isOverlaySupported: eF,
  isClipsBetaTagShowing: ey = !1,
  shouldMergeGameSettings: eV,
  isUserSettingsSearchEnabled: eY,
  isKeywordFilteringEnabled: ew,
  isStaff: ek,
  isInappropriateConversationWarningEnabled: eH,
  paymentsBlocked: eW,
  isEligibleForQuests: eK,
  showGiftNitro: ez,
  isStricterMessageRequestsEnabled: eQ,
  hasLibraryApplication: eX,
  hasTOTPEnabled: eq,
  canBroadcastActivity: eJ,
  developerMode: e$
} = e;
return Object.freeze({
  [eP.s6.SEARCH_NO_RESULTS]: {
    section: E.ID.CUSTOM,
    element: eA.Z,
    predicate: () => eY
  },
  [eP.s6.ACCOUNT]: {
    section: eL.oAB.ACCOUNT,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_MY_ACCOUNT],
    label: ev.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
    ariaLabel: ev.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
    element: ee.Z
  },
  [eP.s6.ACCOUNT_PROFILE]: {
    searchableTitles: [ev.Z.Messages.PROFILE],
    parent: eP.s6.ACCOUNT,
    section: eL.oAB.ACCOUNT
  },
  [eP.s6.ACCOUNT_DISPLAY_NAME]: {
    searchableTitles: [ev.Z.Messages.DISPLAY_NAME],
    section: eL.oAB.ACCOUNT,
    parent: eP.s6.ACCOUNT_PROFILE
  },
  [eP.s6.ACCOUNT_PHONE_NUMBER]: {
    searchableTitles: [ev.Z.Messages.CHANGE_PHONE_NUMBER],
    section: eL.oAB.ACCOUNT,
    parent: eP.s6.ACCOUNT_PROFILE
  },
  [eP.s6.ACCOUNT_USERNAME]: {
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE],
    section: eL.oAB.ACCOUNT,
    parent: eP.s6.ACCOUNT_PROFILE
  },
  [eP.s6.ACCOUNT_EMAIL]: {
    searchableTitles: [ev.Z.Messages.CHANGE_EMAIL],
    section: eL.oAB.ACCOUNT,
    parent: eP.s6.ACCOUNT_PROFILE
  },
  [eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION],
    section: eL.oAB.ACCOUNT,
    parent: eP.s6.ACCOUNT
  },
  [eP.s6.ACCOUNT_CHANGE_PASSWORD]: {
    searchableTitles: [ev.Z.Messages.CHANGE_PASSWORD],
    section: eL.oAB.ACCOUNT,
    parent: eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
  },
  [eP.s6.ACCOUNT_CONFIRM_PASSWORD]: {
    searchableTitles: [ev.Z.Messages.FORM_LABEL_CONFIRM_PASSWORD],
    section: eL.oAB.ACCOUNT,
    parent: eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
  },
  [eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
    searchableTitles: [ev.Z.Messages.SETTINGS_TWO_FA],
    section: eL.oAB.ACCOUNT,
    parent: eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
  },
  [eP.s6.ACCOUNT_ENABLE_2FA]: {
    searchableTitles: [ev.Z.Messages.TWO_FA_ENABLE],
    section: eL.oAB.ACCOUNT,
    parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
    predicate: () => !eq
  },
  [eP.s6.ACCOUNT_REMOVE_2FA]: {
    searchableTitles: [ev.Z.Messages.TWO_FA_REMOVE],
    section: eL.oAB.ACCOUNT,
    parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
    predicate: () => eq
  },
  [eP.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
    searchableTitles: [ev.Z.Messages.TWO_FA_BACKUP_CODE],
    section: eL.oAB.ACCOUNT,
    parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
  },
  [eP.s6.ACCOUNT_SMS_BACKUP]: {
    searchableTitles: [ev.Z.Messages.MFA_SMS_AUTH],
    section: eL.oAB.ACCOUNT,
    parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
  },
  [eP.s6.ACCOUNT_SECURITY_KEYS]: {
    searchableTitles: [ev.Z.Messages.TWO_FA_WEBAUTHN_REGISTER],
    section: eL.oAB.ACCOUNT,
    parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
  },
  [eP.s6.ACCOUNT_REMOVAL]: {
    section: eL.oAB.ACCOUNT,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION],
    parent: eP.s6.ACCOUNT
  },
  [eP.s6.ACCOUNT_DISABLE_ACCOUNT]: {
    section: eL.oAB.ACCOUNT,
    searchableTitles: [ev.Z.Messages.DISABLE_ACCOUNT],
    parent: eP.s6.ACCOUNT_REMOVAL
  },
  [eP.s6.ACCOUNT_DELETE_ACCOUNT]: {
    section: eL.oAB.ACCOUNT,
    searchableTitles: [ev.Z.Messages.DELETE_ACCOUNT],
    parent: eP.s6.ACCOUNT_DISABLE_ACCOUNT
  },
  [eP.s6.GAMES]: {
    section: eL.oAB.GAMES,
    searchableTitles: [ev.Z.Messages.GAMES],
    label: ev.Z.Messages.GAMES,
    ariaLabel: ev.Z.Messages.GAMES,
    element: eM.Z,
    predicate: () => eV
  },
  [eP.s6.GAMES_MY_GAMES]: {
    section: eL.oAB.GAMES,
    searchableTitles: [ev.Z.Messages.MY_GAMES],
    parent: eP.s6.GAMES
  },
  [eP.s6.GAMES_CLIPS]: {
    section: eL.oAB.GAMES,
    searchableTitles: [ev.Z.Messages.CLIPS],
    parent: eP.s6.GAMES
  },
  [eP.s6.GAMES_OVERLAY]: {
    section: eL.oAB.GAMES,
    searchableTitles: [ev.Z.Messages.OVERLAY],
    parent: eP.s6.GAMES
  },
  [eP.s6.GAMES_ACTIVITY_PRIVACY]: {
    section: eL.oAB.GAMES,
    searchableTitles: [ev.Z.Messages.ACTIVITY_PRIVACY],
    parent: eP.s6.GAMES
  },
  [eP.s6.PROFILE_CUSTOMIZATION]: {
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
      stores: [
        U.Z,
        O.Z
      ],
      element: P.Z
    },
    onSettingsClose: () => {
      l.Z.wait(() => {
        (0, h.It)(), (0, d.P6)(), _.Z.clearSubsection(eL.oAB.PROFILE_CUSTOMIZATION);
      });
    }
  },
  [eP.s6.PROFILE_DISPLAY_NAME]: {
    section: eL.oAB.PROFILE_CUSTOMIZATION,
    searchableTitles: [ev.Z.Messages.DISPLAY_NAME],
    parent: eP.s6.PROFILE_CUSTOMIZATION
  },
  [eP.s6.PROFILE_USER_PROFILE]: {
    section: eL.oAB.PROFILE_CUSTOMIZATION,
    searchableTitles: [ev.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE],
    parent: eP.s6.PROFILE_CUSTOMIZATION
  },
  [eP.s6.PROFILE_SERVER_PROFILES]: {
    section: eL.oAB.PROFILE_CUSTOMIZATION,
    searchableTitles: [ev.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY],
    parent: eP.s6.PROFILE_CUSTOMIZATION
  },
  [eP.s6.PRIVACY_AND_SAFETY]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    label: ev.Z.Messages.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY],
    ariaLabel: ev.Z.Messages.PRIVACY_AND_SAFETY,
    element: em.Z
  },
  [eP.s6.PRIVACY_USER_SETTINGS]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY],
    parent: eP.s6.PRIVACY_AND_SAFETY
  },
  [eP.s6.PRIVACY_SENSITIVE_MEDIA]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [
      ev.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER,
      ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_FILTER,
      ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_BLUR,
      ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_SENSITIVE_CONTENT,
      ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_EXPLICIT
    ],
    parent: eP.s6.PRIVACY_USER_SETTINGS
  },
  [eP.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [
      ev.Z.Messages.SETTINGS_DM_SPAM_FILTER,
      ev.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_MESSAGES,
      ev.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_INBOX
    ],
    parent: eP.s6.PRIVACY_USER_SETTINGS
  },
  [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [
      ev.Z.Messages.USER_DM_SETTINGS,
      ev.Z.Messages.USER_DM_SEARCH_TERM_DIRECT_MESSAGES,
      ev.Z.Messages.USER_DM_SEARCH_TERM_DM
    ],
    parent: eP.s6.PRIVACY_USER_SETTINGS
  },
  [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.NEW_GUILDS_DM_ALLOWED],
    parent: eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
  },
  [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER],
    parent: eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
  },
  [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER],
    parent: eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
    predicate: () => !eQ
  },
  [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.NSFW_DM_COMMANDS_HEADER],
    parent: eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
  },
  [eP.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.SERVER_SETTINGS],
    parent: eP.s6.PRIVACY_AND_SAFETY
  },
  [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES],
    parent: eP.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
  },
  [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS],
    parent: eP.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS,
    predicate: () => !eQ
  },
  [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS],
    parent: eP.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
  },
  [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING],
    parent: eP.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
  },
  [eP.s6.PRIVACY_DATA_PRIVACY]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.SETTINGS_DATA_PRIVACY_CONTROLS],
    parent: eP.s6.PRIVACY_USER_SETTINGS
  },
  [eP.s6.PRIVACY_DATA_IMPROVE_DISCORD]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE],
    parent: eP.s6.PRIVACY_DATA_PRIVACY
  },
  [eP.s6.PRIVACY_DATA_PERSONALIZE]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE],
    parent: eP.s6.PRIVACY_DATA_PRIVACY
  },
  [eP.s6.PRIVACY_DATA_QUESTS]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT],
    parent: eP.s6.PRIVACY_DATA_PRIVACY
  },
  [eP.s6.PRIVACY_DATA_BASIC_SERVICE]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    parent: eP.s6.PRIVACY_DATA_PRIVACY,
    searchableTitles: [eP.CF]
  },
  [eP.s6.PRIVACY_DATA_REQUEST]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD],
    parent: eP.s6.PRIVACY_DATA_PRIVACY
  },
  [eP.s6.PRIVACY_STAFF_ONLY]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER],
    parent: eP.s6.PRIVACY_USER_SETTINGS,
    predicate: () => ek
  },
  [eP.s6.PRIVACY_KEYWORD_FILTER]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [
      ev.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE,
      ev.Z.Messages.USER_KEYWORD_FILTERS_SEARCH_TERM_KEYWORD
    ],
    parent: eP.s6.PRIVACY_USER_SETTINGS,
    predicate: () => ew
  },
  [eP.s6.PRIVACY_TERMS_POLICY]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    parent: eP.s6.PRIVACY_USER_SETTINGS,
    searchableTitles: [eP.CF]
  },
  [eP.s6.PRIVACY_SAFETY_ALERTS]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.SAFETY_ALERTS_SETTING_TITLE],
    parent: eP.s6.PRIVACY_USER_SETTINGS,
    predicate: () => eH
  },
  [eP.s6.PRIVACY_ACCOUNT_STANDING]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2],
    parent: eP.s6.PRIVACY_AND_SAFETY
  },
  [eP.s6.PRIVACY_ENCRYPTION]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [
      ev.Z.Messages.E2EE_ENCRYPTION,
      ev.Z.Messages.E2EE_END_TO_END_ENCRYPTION
    ],
    parent: eP.s6.PRIVACY_AND_SAFETY
  },
  [eP.s6.PRIVACY_ENCRYPTION_VERIFICATION_CODES]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.E2EE_VERIFICATION_CODES],
    parent: eP.s6.PRIVACY_ENCRYPTION
  },
  [eP.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES]: {
    section: eL.oAB.PRIVACY_AND_SAFETY,
    searchableTitles: [ev.Z.Messages.E2EE_VERIFIED_DEVICES],
    parent: eP.s6.PRIVACY_ENCRYPTION
  },
  [eP.s6.PRIVACY_FAMILY_CENTER]: {
    section: eL.oAB.FAMILY_CENTER,
    searchableTitles: [ev.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE],
    label: ev.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    ariaLabel: ev.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
    element: ec.Z,
    badgeCount: eG,
    newIndicator: (0, n.jsx)(o.TextBadge, {
      text: ev.Z.Messages.NEW,
      color: A.Z.BG_BRAND
    }),
    newIndicatorDismissibleContentTypes: [i.z.FAMILY_CENTER_NEW_BADGE]
  },
  [eP.s6.AUTHORIZED_APPS]: {
    section: eL.oAB.AUTHORIZED_APPS,
    searchableTitles: [ev.Z.Messages.AUTHORIZED_APPS],
    label: ev.Z.Messages.AUTHORIZED_APPS,
    element: ea.Z
  },
  [eP.s6.SESSIONS]: {
    section: eL.oAB.SESSIONS,
    searchableTitles: [ev.Z.Messages.AUTH_SESSIONS],
    label: ev.Z.Messages.AUTH_SESSIONS,
    ariaLabel: ev.Z.Messages.AUTH_SESSIONS,
    element: eg.Z,
    newIndicatorDismissibleContentTypes: [i.z.AUTH_SESSIONS_NEW],
    predicate: () => w.Z.getCurrentConfig({
      location: '9f7d84_1'
    }, {
      autoTrackExposure: !1
    }).showSettings
  },
  [eP.s6.CONNECTIONS]: {
    section: eL.oAB.CONNECTIONS,
    searchableTitles: [ev.Z.Messages.CONNECTIONS],
    label: ev.Z.Messages.CONNECTIONS,
    ariaLabel: ev.Z.Messages.CONNECTIONS,
    element: er.Z,
    impressionName: a.ImpressionNames.USER_SETTINGS_CONNECTIONS,
    impressionProperties: {
      source: M
    },
    newIndicatorDismissibleContentTypes: [i.z.NEW_CRUNCHYROLL_CONNECTION]
  },
  [eP.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
    section: eL.oAB.CONNECTIONS,
    searchableTitles: [ev.Z.Messages.CONNECTED_ACCOUNTS],
    parent: eP.s6.CONNECTIONS,
    element: er.Z
  },
  [eP.s6.CLIPS]: {
    section: eL.oAB.CLIPS,
    searchableTitles: [ev.Z.Messages.CLIPS],
    label: ev.Z.Messages.CLIPS,
    ariaLabel: ev.Z.Messages.CLIPS,
    icon: ey ? (0, n.jsx)(N.Z, {}) : void 0,
    element: C.Z,
    predicate: () => !eV
  },
  [eP.s6.FRIEND_REQUESTS]: {
    section: eL.oAB.FRIEND_REQUESTS,
    searchableTitles: [ev.Z.Messages.FRIEND_REQUESTS],
    label: ev.Z.Messages.FRIEND_REQUESTS,
    element: ed.Z
  },
  [eP.s6.PREMIUM]: {
    section: eL.oAB.PREMIUM,
    ariaLabel: ev.Z.Messages.PREMIUM,
    searchableTitles: [ev.Z.Messages.PREMIUM],
    label: ev.Z.Messages.PREMIUM,
    element: z.Z,
    className: ej.premiumTab
  },
  [eP.s6.GUILD_BOOSTING]: {
    section: eL.oAB.GUILD_BOOSTING,
    searchableTitles: [ev.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE],
    label: ev.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
    element: eC.Z
  },
  [eP.s6.SUBSCRIPTIONS]: {
    section: eL.oAB.SUBSCRIPTIONS,
    ariaLabel: ev.Z.Messages.SUBSCRIPTIONS_TITLE,
    searchableTitles: [ev.Z.Messages.SUBSCRIPTIONS_TITLE],
    label: ev.Z.Messages.SUBSCRIPTIONS_TITLE,
    element: D.Z,
    icon: f ? (0, n.jsx)(o.CircleExclamationPointIcon, {
      size: 'xs',
      color: r.Z.unsafe_rawColors.YELLOW_300.css
    }) : null
  },
  [eP.s6.SUBSCRIPTIONS_CREDITS]: {
    section: eL.oAB.SUBSCRIPTIONS,
    searchableTitles: [ev.Z.Messages.BILLING_SUBSCRIPTION_CREDIT],
    parent: eP.s6.SUBSCRIPTIONS
  },
  [eP.s6.GIFT_INVENTORY]: {
    section: eL.oAB.INVENTORY,
    searchableTitles: [ev.Z.Messages.GIFT_INVENTORY],
    label: ev.Z.Messages.GIFT_INVENTORY,
    element: eu.Z,
    ariaLabel: ev.Z.Messages.GIFT_INVENTORY,
    badgeCount: t
  },
  [eP.s6.GIFT_NITRO]: {
    section: eL.oAB.INVENTORY,
    searchableTitles: [ev.Z.Messages.GIFT_NITRO],
    parent: eP.s6.GIFT_INVENTORY,
    predicate: () => !eW && ez
  },
  [eP.s6.GIFT_CODE_REDEMPTION]: {
    section: eL.oAB.INVENTORY,
    searchableTitles: [ev.Z.Messages.GIFT_INVENTORY_REDEEM_CODES],
    parent: eP.s6.GIFT_INVENTORY,
    predicate: () => !eW
  },
  [eP.s6.GIFT_INVENTORY_QUESTS]: {
    section: eL.oAB.INVENTORY,
    searchableTitles: [ev.Z.Messages.QUESTS],
    parent: eP.s6.GIFT_INVENTORY,
    predicate: () => eK
  },
  [eP.s6.GIFT_INVENTORY_LIST]: {
    section: eL.oAB.INVENTORY,
    searchableTitles: [ev.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED],
    parent: eP.s6.GIFT_INVENTORY,
    predicate: () => !eW
  },
  [eP.s6.GIFT_BLOCKED_PAYMENTS]: {
    section: eL.oAB.INVENTORY,
    searchableTitles: [ev.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER],
    parent: eP.s6.GIFT_INVENTORY,
    predicate: () => eW
  },
  [eP.s6.BILLING]: {
    section: eL.oAB.BILLING,
    searchableTitles: [ev.Z.Messages.BILLING],
    label: ev.Z.Messages.BILLING,
    ariaLabel: ev.Z.Messages.BILLING,
    element: ei.Z
  },
  [eP.s6.BILLING_PAYMENT_METHODS]: {
    section: eL.oAB.BILLING,
    searchableTitles: [ev.Z.Messages.BILLING_PAYMENT_SOURCES],
    parent: eP.s6.BILLING
  },
  [eP.s6.BILLING_TRANSACTION_HISTORY]: {
    section: eL.oAB.BILLING,
    searchableTitles: [ev.Z.Messages.BILLING_PAYMENT_HISTORY],
    parent: eP.s6.BILLING
  },
  [eP.s6.APPEARANCE]: {
    section: eL.oAB.APPEARANCE,
    searchableTitles: [ev.Z.Messages.APPEARANCE],
    label: ev.Z.Messages.APPEARANCE,
    ariaLabel: ev.Z.Messages.APPEARANCE,
    element: en.Z,
    newIndicator: (0, n.jsx)(o.PremiumBadge, {
      text: ev.Z.Messages.NEW
    }),
    newIndicatorDismissibleContentTypes: eB()
  },
  [eP.s6.APPEARANCE_THEME]: {
    section: eL.oAB.APPEARANCE,
    searchableTitles: [ev.Z.Messages.THEME],
    parent: eP.s6.APPEARANCE
  },
  [eP.s6.APPEARANCE_COLOR]: {
    section: eL.oAB.APPEARANCE,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE],
    parent: eP.s6.APPEARANCE_THEME
  },
  [eP.s6.APPEARANCE_ICON]: {
    section: eL.oAB.APPEARANCE,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE],
    parent: eP.s6.APPEARANCE_THEME
  },
  [eP.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
    section: eL.oAB.APPEARANCE,
    searchableTitles: [ev.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL],
    parent: eP.s6.APPEARANCE
  },
  [eP.s6.APPEARANCE_SCALING_SPACING]: {
    section: eL.oAB.APPEARANCE,
    searchableTitles: [ev.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL],
    parent: eP.s6.APPEARANCE
  },
  [eP.s6.ACCESSIBILITY]: {
    section: eL.oAB.ACCESSIBILITY,
    searchableTitles: [ev.Z.Messages.ACCESSIBILITY],
    label: ev.Z.Messages.ACCESSIBILITY,
    ariaLabel: ev.Z.Messages.ACCESSIBILITY,
    element: $.Z
  },
  [eP.s6.ACCESSIBILITY_SATURATION]: {
    section: eL.oAB.ACCESSIBILITY,
    searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE],
    parent: eP.s6.ACCESSIBILITY
  },
  [eP.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
    section: eL.oAB.ACCESSIBILITY,
    searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL],
    parent: eP.s6.ACCESSIBILITY
  },
  [eP.s6.ACCESSIBILITY_ROLE_STYLE]: {
    section: eL.oAB.ACCESSIBILITY,
    searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE],
    parent: eP.s6.ACCESSIBILITY
  },
  [eP.s6.ACCESSIBILITY_TAGS]: {
    section: eL.oAB.ACCESSIBILITY,
    searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE],
    parent: eP.s6.ACCESSIBILITY
  },
  [eP.s6.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
    section: eL.oAB.ACCESSIBILITY,
    searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE],
    parent: eP.s6.ACCESSIBILITY
  },
  [eP.s6.ACCESSIBILITY_CONTRAST]: {
    section: eL.oAB.ACCESSIBILITY,
    searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST],
    parent: eP.s6.ACCESSIBILITY
  },
  [eP.s6.ACCESSIBILITY_REDUCED_MOTION]: {
    section: eL.oAB.ACCESSIBILITY,
    searchableTitles: [ev.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION],
    parent: eP.s6.ACCESSIBILITY
  },
  [eP.s6.ACCESSIBILITY_STICKERS]: {
    section: eL.oAB.ACCESSIBILITY,
    searchableTitles: [ev.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
    parent: eP.s6.ACCESSIBILITY
  },
  [eP.s6.ACCESSIBILITY_MESSAGES]: {
    section: eL.oAB.ACCESSIBILITY,
    searchableTitles: [ev.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT],
    parent: eP.s6.ACCESSIBILITY
  },
  [eP.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
    section: eL.oAB.ACCESSIBILITY,
    searchableTitles: [ev.Z.Messages.FORM_LABEL_TTS],
    parent: eP.s6.ACCESSIBILITY
  },
  [eP.s6.VOICE_AND_VIDEO]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.VOICE_AND_VIDEO],
    label: ev.Z.Messages.VOICE_AND_VIDEO,
    ariaLabel: ev.Z.Messages.VOICE_AND_VIDEO,
    element: eD.Z,
    predicate: () => B.Z.isSupported()
  },
  [eP.s6.VOICE_AND_VIDEO_DEVICES]: {
    section: eL.oAB.VOICE,
    searchableTitles: [
      ev.Z.Messages.FORM_LABEL_INPUT_DEVICE,
      ev.Z.Messages.FORM_LABEL_OUTPUT_DEVICE,
      ev.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE,
      ev.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS,
      ev.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES
    ],
    parent: eP.s6.VOICE_AND_VIDEO
  },
  [eP.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
    section: eL.oAB.VOICE,
    searchableTitles: [
      ev.Z.Messages.FORM_LABEL_INPUT_VOLUME,
      ev.Z.Messages.FORM_LABEL_OUTPUT_VOLUME,
      ev.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE,
      ev.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS,
      ev.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES
    ],
    parent: eP.s6.VOICE_AND_VIDEO
  },
  [eP.s6.VOICE_AND_VIDEO_MIC_TEST]: {
    section: eL.oAB.VOICE,
    searchableTitles: [
      ev.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE,
      ev.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE
    ],
    parent: eP.s6.VOICE_AND_VIDEO
  },
  [eP.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
    section: eL.oAB.VOICE,
    searchableTitles: [
      ev.Z.Messages.FORM_LABEL_INPUT_MODE,
      ev.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE
    ],
    parent: eP.s6.VOICE_AND_VIDEO
  },
  [eP.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
    section: eL.oAB.VOICE,
    searchableTitles: [
      ev.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY,
      ev.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE
    ],
    parent: eP.s6.VOICE_AND_VIDEO
  },
  [eP.s6.VOICE_AND_VIDEO_SOUNDS]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.CALL_SOUNDS_SETTINGS],
    parent: eP.s6.VOICE_AND_VIDEO
  },
  [eP.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.SOUNDBOARD],
    parent: eP.s6.VOICE_AND_VIDEO_SOUNDS
  },
  [eP.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.CALL_SOUNDS_SETTINGS],
    parent: eP.s6.VOICE_AND_VIDEO_SOUNDS
  },
  [eP.s6.VOICE_AND_VIDEO_VIDEO]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.VIDEO_SETTINGS],
    parent: eP.s6.VOICE_AND_VIDEO
  },
  [eP.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.FORM_LABEL_VIDEO_DEVICE],
    parent: eP.s6.VOICE_AND_VIDEO_VIDEO,
    predicate: () => B.Z.supports(eZ.AN.VIDEO)
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.SETTINGS_ADVANCED],
    parent: eP.s6.VOICE_AND_VIDEO
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_VOICE_CODEC_TITLE],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_VOICE_OPEN_H264],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
    predicate: () => B.Z.supports(eZ.AN.OPEN_H264)
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_VOICE_HARDWARE_ENCODING],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.EXPERIMENTAL_ENCODERS],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
    predicate: () => 'stable' !== Y.ZP.releaseChannel && B.Z.isExperimentalEncodersSupported()
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.FORM_LABEL_VOICE_PROCESSING],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.ECHO_CANCELLATION],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
    section: eL.oAB.VOICE,
    searchableTitles: [
      ev.Z.Messages.NOISE_SUPPRESSION,
      ev.Z.Messages.NOISE_CANCELLATION_SEARCH_TERM_KRISP
    ],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
    predicate: () => B.Z.isNoiseSuppressionSupported()
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.ADVANCED_VOICE_ACTIVITY],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
    predicate: () => B.Z.isAdvancedVoiceActivitySupported()
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.AUTOMATIC_GAIN_CONTROL],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
    predicate: () => B.Z.isAutomaticGainControlSupported()
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.FORM_LABEL_QOS],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED,
    predicate: () => B.Z.supports(eZ.AN.QOS)
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.FORM_LABEL_ATTENUATION],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED,
    predicate: () => B.Z.supports(eZ.AN.ATTENUATION)
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.FORM_LABEL_SUBSYSTEM],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED,
    predicate: () => B.Z.supports(eZ.AN.LEGACY_AUDIO_SUBSYSTEM) || B.Z.supports(eZ.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED,
    predicate: () => V.isPlatformEmbedded
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.FORM_LABEL_DEBUG],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED,
    predicate: () => V.isPlatformEmbedded && B.Z.supports(eZ.AN.DEBUG_LOGGING) && null != u.Z.fileManager.readLogFiles
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.FORM_CHECKBOX_AEC_DUMP],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
    predicate: () => B.Z.isAecDumpSupported()
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
    predicate: () => ('canary' === Y.ZP.releaseChannel || 'development' === Y.ZP.releaseChannel) && ek && B.Z.supports(eZ.AN.CONNECTION_REPLAY)
  },
  [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING
  },
  [eP.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
    section: eL.oAB.VOICE,
    searchableTitles: [ev.Z.Messages.RESET_VOICE_SETTINGS],
    parent: eP.s6.VOICE_AND_VIDEO_ADVANCED
  },
  [eP.s6.POGGERMODE]: {
    section: eL.oAB.POGGERMODE,
    searchableTitles: [ev.Z.Messages.POGGERMODE],
    label: ev.Z.Messages.POGGERMODE,
    ariaLabel: ev.Z.Messages.POGGERMODE,
    element: x.Z,
    predicate: () => R.Z.settingsVisible,
    icon: (0, n.jsx)('img', {
      alt: '',
      src: s(348621),
      className: ej.poggermodeIcon
    })
  },
  [eP.s6.CHAT]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.CHAT],
    label: ev.Z.Messages.CHAT,
    ariaLabel: ev.Z.Messages.CHAT,
    element: eO.Z
  },
  [eP.s6.CHAT_INLINE_MEDIA]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.INLINE_MEDIA_LABEL],
    parent: eP.s6.CHAT
  },
  [eP.s6.CHAT_INLINE_MEDIA_LINKS]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.INLINE_EMBED_MEDIA],
    parent: eP.s6.CHAT_INLINE_MEDIA
  },
  [eP.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.INLINE_ATTACHMENT_MEDIA],
    parent: eP.s6.CHAT_INLINE_MEDIA
  },
  [eP.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.IMAGE_DESCRIPTION],
    parent: eP.s6.CHAT_INLINE_MEDIA
  },
  [eP.s6.CHAT_EMBEDS]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.RENDER_EMBEDS_LABEL],
    parent: eP.s6.CHAT
  },
  [eP.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.RENDER_EMBEDS],
    parent: eP.s6.CHAT_EMBEDS
  },
  [eP.s6.CHAT_EMOJI]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.EMOJI],
    parent: eP.s6.CHAT
  },
  [eP.s6.CHAT_EMOJI_REACTIONS]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.RENDER_REACTIONS],
    parent: eP.s6.CHAT_EMOJI
  },
  [eP.s6.CHAT_EMOJI_EMOTICONS]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.CONVERT_EMOTICONS],
    parent: eP.s6.CHAT_EMOJI
  },
  [eP.s6.CHAT_STICKERS]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
    parent: eP.s6.CHAT
  },
  [eP.s6.CHAT_STICKERS_SUGGESTIONS]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.AUTO_SUGGEST_STICKERS],
    parent: eP.s6.CHAT_STICKERS
  },
  [eP.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.STICKERS_IN_AUTOCOMPLETE],
    parent: eP.s6.CHAT_STICKERS
  },
  [eP.s6.CHAT_TEXT_BOX]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX],
    parent: eP.s6.CHAT
  },
  [eP.s6.CHAT_TEXT_BOX_PREVIEW]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION],
    parent: eP.s6.CHAT_TEXT_BOX
  },
  [eP.s6.CHAT_THREADS]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.THREADS],
    parent: eP.s6.CHAT
  },
  [eP.s6.CHAT_THREADS_SPLIT_VIEW]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION],
    parent: eP.s6.CHAT_THREADS
  },
  [eP.s6.CHAT_SPOILERS]: {
    section: eL.oAB.TEXT,
    searchableTitles: [ev.Z.Messages.SHOW_SPOILER_CONTENT],
    parent: eP.s6.CHAT
  },
  [eP.s6.NOTIFICATIONS]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.NOTIFICATIONS],
    label: ev.Z.Messages.NOTIFICATIONS,
    ariaLabel: ev.Z.Messages.NOTIFICATIONS,
    element: eS.Z
  },
  [eP.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE],
    parent: eP.s6.NOTIFICATIONS
  },
  [eP.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: ['Mention on all messages'],
    parent: eP.s6.NOTIFICATIONS
  },
  [eP.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL],
    parent: eP.s6.NOTIFICATIONS
  },
  [eP.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL],
    parent: eP.s6.NOTIFICATIONS,
    predicate: () => (0, V.isWindows)()
  },
  [eP.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE],
    parent: eP.s6.NOTIFICATIONS
  },
  [eP.s6.NOTIFICATIONS_NEW_SETTINGS]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: ['New Notification Settings (Advancd, Staff Only)'],
    parent: eP.s6.NOTIFICATIONS,
    predicate: () => !1
  },
  [eP.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: ['Restore most recent snapshot'],
    parent: eP.s6.NOTIFICATIONS_NEW_SETTINGS,
    predicate: () => !1
  },
  [eP.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: ['Launch Migration'],
    parent: eP.s6.NOTIFICATIONS_NEW_SETTINGS,
    predicate: () => !1
  },
  [eP.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: ['Toggle new system on/off'],
    parent: eP.s6.NOTIFICATIONS_NEW_SETTINGS,
    predicate: () => !1
  },
  [eP.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT],
    parent: eP.s6.NOTIFICATIONS
  },
  [eP.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.FORM_LABEL_TTS],
    parent: eP.s6.NOTIFICATIONS
  },
  [eP.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER],
    parent: eP.s6.NOTIFICATIONS
  },
  [eP.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER],
    parent: eP.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
  },
  [eP.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER],
    parent: eP.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
  },
  [eP.s6.NOTIFICATIONS_SOUNDS]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.SOUNDS],
    parent: eP.s6.NOTIFICATIONS
  },
  [eP.s6.NOTIFICATIONS_EMAILS]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS],
    parent: eP.s6.NOTIFICATIONS
  },
  [eP.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION],
    parent: eP.s6.NOTIFICATIONS_EMAILS
  },
  [eP.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL],
    parent: eP.s6.NOTIFICATIONS_EMAILS
  },
  [eP.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS],
    parent: eP.s6.NOTIFICATIONS_EMAILS
  },
  [eP.s6.NOTIFICATIONS_EMAILS_TIPS]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS],
    parent: eP.s6.NOTIFICATIONS_EMAILS
  },
  [eP.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS],
    parent: eP.s6.NOTIFICATIONS_EMAILS
  },
  [eP.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
    section: eL.oAB.NOTIFICATIONS,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING],
    parent: eP.s6.NOTIFICATIONS_EMAILS
  },
  [eP.s6.KEYBINDS]: {
    section: eL.oAB.KEYBINDS,
    searchableTitles: [ev.Z.Messages.KEYBINDS],
    label: ev.Z.Messages.KEYBINDS,
    element: eT.Z
  },
  [eP.s6.LANGUAGE]: {
    section: eL.oAB.LOCALE,
    searchableTitles: [ev.Z.Messages.LANGUAGE],
    label: ev.Z.Messages.LANGUAGE,
    element: eI.Z
  },
  [eP.s6.WINDOW_SETTINGS]: {
    section: eL.oAB.WINDOWS,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS],
    label: ev.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
    element: eR.Z,
    predicate: () => V.isPlatformEmbedded && (0, V.isWindows)()
  },
  [eP.s6.LINUX_SETTINGS]: {
    section: eL.oAB.LINUX,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_LINUX_SETTINGS],
    label: ev.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
    element: eU,
    predicate: () => V.isPlatformEmbedded && (0, V.isLinux)()
  },
  [eP.s6.STREAMER_MODE]: {
    section: eL.oAB.STREAMER_MODE,
    searchableTitles: [ev.Z.Messages.STREAMER_MODE],
    label: ev.Z.Messages.STREAMER_MODE,
    ariaLabel: ev.Z.Messages.STREAMER_MODE,
    element: eh.Z
  },
  [eP.s6.STREAMER_MODE_INTEGRATIONS]: {
    section: eL.oAB.STREAMER_MODE,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE],
    parent: eP.s6.STREAMER_MODE
  },
  [eP.s6.STREAMER_MODE_ENABLE]: {
    section: eL.oAB.STREAMER_MODE,
    searchableTitles: [ev.Z.Messages.ENABLE_STREAMER_MODE_LABEL],
    parent: eP.s6.STREAMER_MODE
  },
  [eP.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
    section: eL.oAB.STREAMER_MODE,
    searchableTitles: [ev.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL],
    parent: eP.s6.STREAMER_MODE
  },
  [eP.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
    section: eL.oAB.STREAMER_MODE,
    searchableTitles: [ev.Z.Messages.HIDE_INSTANT_INVITES_LABEL],
    parent: eP.s6.STREAMER_MODE
  },
  [eP.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
    section: eL.oAB.STREAMER_MODE,
    searchableTitles: [ev.Z.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE],
    parent: eP.s6.STREAMER_MODE
  },
  [eP.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
    section: eL.oAB.STREAMER_MODE,
    searchableTitles: [ev.Z.Messages.DISABLE_NOTIFICATIONS_LABEL],
    parent: eP.s6.STREAMER_MODE
  },
  [eP.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
    section: eL.oAB.STREAMER_MODE,
    searchableTitles: [ev.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL],
    parent: eP.s6.STREAMER_MODE,
    predicate: () => {
      var e, t, s;
      return null !== (s = null === u.Z || void 0 === u.Z ? void 0 : null === (t = u.Z.window) || void 0 === t ? void 0 : null === (e = t.supportsContentProtection) || void 0 === e ? void 0 : e.call(t)) && void 0 !== s && s;
    }
  },
  [eP.s6.SPEED_TEST]: {
    section: eL.oAB.SPEED_TEST,
    searchableTitles: ['Speed Test'],
    label: 'Speed Test',
    element: X.Z,
    predicate: () => v.Z.isSupported() && k.Z.getCurrentConfig({
      location: '9f7d84_2'
    }).showSettings
  },
  [eP.s6.SETTINGS_ADVANCED]: {
    section: eL.oAB.ADVANCED,
    searchableTitles: [ev.Z.Messages.SETTINGS_ADVANCED],
    label: ev.Z.Messages.SETTINGS_ADVANCED,
    ariaLabel: ev.Z.Messages.SETTINGS_ADVANCED,
    element: es.Z
  },
  [eP.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
    section: eL.oAB.ADVANCED,
    searchableTitles: [ev.Z.Messages.DEVELOPER_MODE],
    parent: eP.s6.SETTINGS_ADVANCED,
    predicate: () => F.wS
  },
  [eP.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
    section: eL.oAB.ADVANCED,
    searchableTitles: [ev.Z.Messages.HARDWARE_ACCELERATION],
    parent: eP.s6.SETTINGS_ADVANCED,
    predicate: () => V.isPlatformEmbedded
  },
  [eP.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
    section: eL.oAB.ADVANCED,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_SHOW_LIBRARY],
    parent: eP.s6.SETTINGS_ADVANCED,
    predicate: () => eX
  },
  [eP.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
    section: eL.oAB.ADVANCED,
    searchableTitles: [ev.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE],
    parent: eP.s6.SETTINGS_ADVANCED,
    predicate: () => e$
  },
  [eP.s6.ACTIVITY_PRIVACY]: {
    section: eL.oAB.ACTIVITY_PRIVACY,
    searchableTitles: [ev.Z.Messages.ACTIVITY_PRIVACY],
    label: ev.Z.Messages.ACTIVITY_PRIVACY,
    ariaLabel: ev.Z.Messages.ACTIVITY_PRIVACY,
    element: et.Z,
    predicate: () => !eV
  },
  [eP.s6.ACTIVITY_PRIVACY_STATUS]: {
    section: eV ? eL.oAB.GAMES : eL.oAB.ACTIVITY_PRIVACY,
    searchableTitles: [ev.Z.Messages.ACTIVITY_STATUS],
    parent: eV ? eP.s6.GAMES_ACTIVITY_PRIVACY : eP.s6.ACTIVITY_PRIVACY
  },
  [eP.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
    section: eV ? eL.oAB.GAMES : eL.oAB.ACTIVITY_PRIVACY,
    searchableTitles: [ev.Z.Messages.ACTIVITY_PARTY_PRIVACY],
    parent: eV ? eP.s6.GAMES_ACTIVITY_PRIVACY : eP.s6.ACTIVITY_PRIVACY
  },
  [eP.s6.ACTIVITY_PRIVACY_BROADCASTING]: {
    section: eV ? eL.oAB.GAMES : eL.oAB.ACTIVITY_PRIVACY,
    searchableTitles: [ev.Z.Messages.BROADCASTING_SETTINGS],
    parent: eV ? eP.s6.GAMES_ACTIVITY_PRIVACY : eP.s6.ACTIVITY_PRIVACY,
    predicate: () => eJ
  },
  [eP.s6.ACTIVITY_PRIVACY_TOS]: {
    section: eV ? eL.oAB.GAMES : eL.oAB.ACTIVITY_PRIVACY,
    searchableTitles: [eP.CF],
    parent: eV ? eP.s6.GAMES_ACTIVITY_PRIVACY : eP.s6.ACTIVITY_PRIVACY
  },
  [eP.s6.REGISTERED_GAMES]: {
    section: eL.oAB.REGISTERED_GAMES,
    searchableTitles: [ev.Z.Messages.REGISTERED_GAMES],
    label: ev.Z.Messages.REGISTERED_GAMES,
    element: e_.Z,
    predicate: () => !eV && (0, ef.Jw)()
  },
  [eP.s6.OVERLAY]: {
    section: eL.oAB.OVERLAY,
    searchableTitles: [ev.Z.Messages.OVERLAY],
    label: ev.Z.Messages.OVERLAY,
    element: eN.Z,
    predicate: () => !eV && eF
  },
  [eP.s6.CHANGELOG]: {
    section: 'changelog',
    onClick: () => (0, S.Z)(!0),
    searchableTitles: [ev.Z.Messages.WHATS_NEW],
    label: ev.Z.Messages.WHATS_NEW
  },
  [eP.s6.MERCHANDISE]: {
    section: 'merchandise',
    onClick: () => {
      let e = 'https://discordmerch.com/Dsktopprm';
      G.default.track(eL.rMx.USER_SETTINGS_MERCH_LINK_CLICKED), (0, y.q)({
        href: e,
        shouldConfirm: !0,
        onConfirm: () => {
          G.default.track(eL.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, T.Z)(e);
        }
      });
    },
    searchableTitles: [ev.Z.Messages.MERCHANDISE],
    label: ev.Z.Messages.MERCHANDISE,
    ariaLabel: ev.Z.Messages.MERCHANDISE
  },
  [eP.s6.HYPESQUAD]: {
    section: eL.oAB.HYPESQUAD_ONLINE,
    searchableTitles: [ev.Z.Messages.USER_SETTINGS_HYPESQUAD],
    label: ev.Z.Messages.USER_SETTINGS_HYPESQUAD,
    element: eE.Z
  },
  [eP.s6.EXPERIMENTS]: {
    section: eL.oAB.EXPERIMENTS,
    searchableTitles: ['Experiments'],
    label: 'Experiments',
    element: ex.Z,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Developer Options'],
    label: 'Developer Options',
    ariaLabel: 'Developer Options',
    element: el.Z,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_FLAGS]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Developer Options Flags'],
    parent: eP.s6.DEVELOPER_OPTIONS,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Tracing Requests'],
    parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Forced Canary'],
    parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Gateway Events To Console'],
    parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Rpc Events Commands'],
    parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Analytics Events Logging'],
    parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Source Maps'],
    parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Analytics Debugger View'],
    parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Idle Status Indicator'],
    parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => ek && j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Accessibility Auditing'],
    parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => !1
  },
  [eP.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['CSS Debugging'],
    parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => ek && j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Preview Unpublished Collections'],
    parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => ek && j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Override Client Side'],
    parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Override Client Side Premium Type'],
    parent: eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Override Client Side Account Created Data'],
    parent: eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Open Overlay'],
    parent: eP.s6.DEVELOPER_OPTIONS,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Reset Socket'],
    parent: eP.s6.DEVELOPER_OPTIONS,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Clear Caches'],
    parent: eP.s6.DEVELOPER_OPTIONS,
    predicate: () => I.q && j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_CRASHES]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Crashes'],
    parent: eP.s6.DEVELOPER_OPTIONS,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Survey Override'],
    parent: eP.s6.DEVELOPER_OPTIONS,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Changelog Override'],
    parent: eP.s6.DEVELOPER_OPTIONS,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
    section: eL.oAB.DEVELOPER_OPTIONS,
    searchableTitles: ['Build Override'],
    parent: eP.s6.DEVELOPER_OPTIONS,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.HOTSPOT_OPTIONS]: {
    section: eL.oAB.HOTSPOT_OPTIONS,
    searchableTitles: ['Hotspot Options'],
    label: 'Hotspot Options',
    element: W.Z,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
    section: eL.oAB.DISMISSIBLE_CONTENT_OPTIONS,
    searchableTitles: ['Dismissible Contents'],
    label: 'Dismissible Contents',
    element: g.Z,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.PAYMENT_FLOW_MODALS]: {
    section: eL.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
    searchableTitles: ['Payment Flow Modals'],
    label: 'Payment Flow Modals',
    element: K.Z,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.TEXT_PLAYGROUND]: {
    section: eL.oAB.TEXT_PLAYGROUND,
    searchableTitles: ['Text Playground'],
    label: 'Text Playground',
    element: ep.Z,
    predicate: () => (0, J.D)() || j.Z.isDeveloper
  },
  [eP.s6.DESIGN_SYSTEMS]: {
    section: eL.oAB.DESIGN_SYSTEMS,
    searchableTitles: ['Design Systems'],
    label: 'Design Systems',
    element: eo.Z,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.TEXT_COMPONENTS]: {
    section: eL.oAB.TEXT_COMPONENT,
    searchableTitles: ['Text Components'],
    label: 'Text Components',
    element: q.Z,
    predicate: () => (0, J.D)() || j.Z.isDeveloper
  },
  [eP.s6.INTL_TESTING]: {
    section: eL.oAB.INTL_TESTING,
    searchableTitles: [
      'Intl Testing',
      'i18n'
    ],
    label: 'Intl Testing',
    element: p.Z,
    predicate: () => ek || j.Z.isDeveloper
  },
  [eP.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
    section: eL.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
    searchableTitles: ['Profile Effects Preview Tool'],
    label: 'Profile Effects Preview Tool',
    element: m.Z,
    predicate: () => j.Z.isDeveloper
  },
  [eP.s6.QUEST_PREVIEW_TOOL]: {
    section: eL.oAB.QUEST_PREVIEW_TOOL,
    searchableTitles: ['Quest Preview Tool'],
    label: 'Quest Preview Tool',
    element: Z.Z,
    predicate: () => (0, b.X7)({
      location: eb.dr.QUEST_PREVIEW_TOOL
    })
  },
  [eP.s6.LOGOUT]: {
    section: 'logout',
    onClick: () => {
      (0, o.openModal)(e => (0, n.jsx)(o.ConfirmModal, {
        header: ev.Z.Messages.LOGOUT,
        confirmText: ev.Z.Messages.LOGOUT,
        cancelText: ev.Z.Messages.CANCEL,
        onCancel: e.onClose,
        onConfirm: () => c.Z.logout(),
        ...e,
        children: (0, n.jsx)(o.Text, {
          variant: 'text-md/normal',
          children: ev.Z.Messages.USER_SETTINGS_CONFIRM_LOGOUT
        })
      }));
    },
    label: ev.Z.Messages.LOGOUT,
    ariaLabel: ev.Z.Messages.LOGOUT,
    icon: (0, n.jsx)(o.DoorExitIcon, {
      size: 'xs',
      color: 'currentColor'
    })
  },
  [eP.s6.SOCIAL_LINKS]: {
    section: E.ID.CUSTOM,
    element: Q.Z
  },
  [eP.s6.CLIENT_DEBUG_INFO]: {
    section: E.ID.CUSTOM,
    element: H.Z
  }
});
  };