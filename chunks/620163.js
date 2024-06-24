t.d(s, {
  i: function() {
    return eG
  }
}), t(653041);
var n = t(735250);
t(470079);
var i = t(990547),
  a = t(704215),
  l = t(692547),
  r = t(481060),
  o = t(570140),
  c = t(893776),
  E = t(809206),
  d = t(230711),
  _ = t(493544),
  T = t(579806),
  S = t(782568),
  u = t(758182),
  I = t(163379),
  N = t(703288),
  A = t(574755),
  C = t(425799),
  O = t(377171),
  m = t(621628),
  h = t(18438),
  g = t(778825),
  R = t(351780),
  M = t(231765),
  x = t(837741),
  p = t(804545),
  D = t(813732),
  L = t(398140),
  P = t(564344),
  Z = t(977156),
  f = t(652380),
  j = t(171156),
  v = t(906467),
  U = t(131951),
  B = t(25990),
  b = t(626135),
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
  ei = t(443702),
  ea = t(327192),
  el = t(177508),
  er = t(956699),
  eo = t(54942),
  ec = t(15780),
  eE = t(293389),
  ed = t(88624),
  e_ = t(387747),
  eT = t(389650),
  eS = t(649157),
  eu = t(593648),
  eI = t(327885),
  eN = t(595242),
  eA = t(301121),
  eC = t(207874),
  eO = t(463153),
  em = t(36192),
  eh = t(338345),
  eg = t(400287),
  eR = t(554042),
  eM = t(200645),
  ex = t(287490),
  ep = t(168308),
  eD = t(277329),
  eL = t(674116),
  eP = t(726985),
  eZ = t(981631),
  ef = t(46140),
  ej = t(65154),
  ev = t(689938),
  eU = t(422237);
let eB = () => {
    let e = "Settings list view",
      s = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
    return x.F.getCurrentConfig({
      location: e
    }).enabled && s.push(a.z.BRAND_REFRESH_NEW_BADGE), p.n.getCurrentConfig({
      location: e
    }).enabled && s.push(a.z.PRIDE_ICONS_APPEARANCE_BADGE), s
  },
  eb = eM.Z,
  eG = e => {
    let {
      unseenGiftCount: s,
      showPrepaidPaymentPastDueWarning: x,
      impressionSource: p,
      numOfPendingFamilyRequests: eG,
      isOverlaySupported: eF,
      isClipsBetaTagShowing: eV = !1,
      shouldMergeGameSettings: ey,
      isUserSettingsSearchEnabled: eY,
      isKeywordFilteringEnabled: eH,
      isStaff: ek,
      isInappropriateConversationWarningEnabled: ew,
      paymentsBlocked: eW,
      isEligibleForQuests: eK,
      showGiftNitro: ez,
      isStricterMessageRequestsEnabled: eQ,
      hasLibraryApplication: eX
    } = e;
    return Object.freeze({
      [eP.s6.SEARCH_BAR]: {
        section: _.ID.CUSTOM,
        element: eC.Z,
        predicate: () => eY
      },
      [eP.s6.SEARCH_NO_RESULTS]: {
        section: _.ID.CUSTOM,
        element: eO.Z,
        predicate: () => eY
      },
      [eP.s6.ACCOUNT]: {
        section: eZ.oAB.ACCOUNT,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_MY_ACCOUNT],
        label: ev.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: ev.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: $.Z
      },
      [eP.s6.ACCOUNT_PROFILE]: {
        searchableTitles: [ev.Z.Messages.PROFILE],
        parent: eP.s6.ACCOUNT,
        section: eZ.oAB.ACCOUNT
      },
      [eP.s6.ACCOUNT_DISPLAY_NAME]: {
        searchableTitles: [ev.Z.Messages.DISPLAY_NAME],
        section: eZ.oAB.ACCOUNT,
        parent: eP.s6.ACCOUNT_PROFILE
      },
      [eP.s6.ACCOUNT_PHONE_NUMBER]: {
        searchableTitles: [ev.Z.Messages.CHANGE_PHONE_NUMBER],
        section: eZ.oAB.ACCOUNT,
        parent: eP.s6.ACCOUNT_PROFILE
      },
      [eP.s6.ACCOUNT_USERNAME]: {
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE],
        section: eZ.oAB.ACCOUNT,
        parent: eP.s6.ACCOUNT_PROFILE
      },
      [eP.s6.ACCOUNT_EMAIL]: {
        searchableTitles: [ev.Z.Messages.CHANGE_EMAIL],
        section: eZ.oAB.ACCOUNT,
        parent: eP.s6.ACCOUNT_PROFILE
      },
      [eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION],
        section: eZ.oAB.ACCOUNT,
        parent: eP.s6.ACCOUNT
      },
      [eP.s6.ACCOUNT_CHANGE_PASSWORD]: {
        searchableTitles: [ev.Z.Messages.CHANGE_PASSWORD],
        section: eZ.oAB.ACCOUNT,
        parent: eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eP.s6.ACCOUNT_CONFIRM_PASSWORD]: {
        searchableTitles: [ev.Z.Messages.FORM_LABEL_CONFIRM_PASSWORD],
        section: eZ.oAB.ACCOUNT,
        parent: eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
        searchableTitles: [ev.Z.Messages.SETTINGS_TWO_FA],
        section: eZ.oAB.ACCOUNT,
        parent: eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eP.s6.ACCOUNT_ENABLE_2FA]: {
        searchableTitles: [ev.Z.Messages.TWO_FA_ENABLE],
        section: eZ.oAB.ACCOUNT,
        parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eP.s6.ACCOUNT_REMOVE_2FA]: {
        searchableTitles: [ev.Z.Messages.TWO_FA_REMOVE],
        section: eZ.oAB.ACCOUNT,
        parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eP.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
        searchableTitles: [ev.Z.Messages.TWO_FA_BACKUP_CODE],
        section: eZ.oAB.ACCOUNT,
        parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eP.s6.ACCOUNT_SMS_BACKUP]: {
        searchableTitles: [ev.Z.Messages.MFA_SMS_AUTH],
        section: eZ.oAB.ACCOUNT,
        parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eP.s6.ACCOUNT_SECURITY_KEYS]: {
        searchableTitles: [ev.Z.Messages.TWO_FA_WEBAUTHN_REGISTER],
        section: eZ.oAB.ACCOUNT,
        parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eP.s6.ACCOUNT_REMOVAL]: {
        section: eZ.oAB.ACCOUNT,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION],
        parent: eP.s6.ACCOUNT
      },
      [eP.s6.ACCOUNT_DISABLE_ACCOUNT]: {
        section: eZ.oAB.ACCOUNT,
        searchableTitles: [ev.Z.Messages.DISABLE_ACCOUNT],
        parent: eP.s6.ACCOUNT_REMOVAL
      },
      [eP.s6.ACCOUNT_DELETE_ACCOUNT]: {
        section: eZ.oAB.ACCOUNT,
        searchableTitles: [ev.Z.Messages.DELETE_ACCOUNT],
        parent: eP.s6.ACCOUNT_DISABLE_ACCOUNT
      },
      [eP.s6.GAMES]: {
        section: eZ.oAB.GAMES,
        searchableTitles: [ev.Z.Messages.GAMES],
        label: ev.Z.Messages.GAMES,
        ariaLabel: ev.Z.Messages.GAMES,
        element: eD.Z,
        predicate: () => ey
      },
      [eP.s6.GAMES_MY_GAMES]: {
        section: eZ.oAB.GAMES,
        searchableTitles: [ev.Z.Messages.MY_GAMES],
        parent: eP.s6.GAMES
      },
      [eP.s6.GAMES_CLIPS]: {
        section: eZ.oAB.GAMES,
        searchableTitles: [ev.Z.Messages.CLIPS],
        parent: eP.s6.GAMES
      },
      [eP.s6.GAMES_OVERLAY]: {
        section: eZ.oAB.GAMES,
        searchableTitles: [ev.Z.Messages.OVERLAY],
        parent: eP.s6.GAMES
      },
      [eP.s6.GAMES_ACTIVITY_PRIVACY]: {
        section: eZ.oAB.GAMES,
        searchableTitles: [ev.Z.Messages.ACTIVITY_PRIVACY],
        parent: eP.s6.GAMES
      },
      [eP.s6.PROFILE_CUSTOMIZATION]: {
        section: eZ.oAB.PROFILE_CUSTOMIZATION,
        type: _.bT.WIDE,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_PROFILES],
        label: ev.Z.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: ev.Z.Messages.USER_SETTINGS_PROFILES,
        element: P.Z,
        newIndicator: (0, n.jsx)(r.PremiumBadge, {
          text: ev.Z.Messages.NEW
        }),
        notice: {
          stores: [B.Z, g.Z],
          element: L.Z
        },
        onSettingsClose: () => {
          o.Z.wait(() => {
            (0, h.It)(), (0, E.P6)(), d.Z.clearSubsection(eZ.oAB.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [eP.s6.PROFILE_DISPLAY_NAME]: {
        section: eZ.oAB.PROFILE_CUSTOMIZATION,
        searchableTitles: [ev.Z.Messages.DISPLAY_NAME],
        parent: eP.s6.PROFILE_CUSTOMIZATION
      },
      [eP.s6.PROFILE_USER_PROFILE]: {
        section: eZ.oAB.PROFILE_CUSTOMIZATION,
        searchableTitles: [ev.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE],
        parent: eP.s6.PROFILE_CUSTOMIZATION
      },
      [eP.s6.PROFILE_SERVER_PROFILES]: {
        section: eZ.oAB.PROFILE_CUSTOMIZATION,
        searchableTitles: [ev.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY],
        parent: eP.s6.PROFILE_CUSTOMIZATION
      },
      [eP.s6.PRIVACY_AND_SAFETY]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        label: ev.Z.Messages.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY],
        ariaLabel: ev.Z.Messages.PRIVACY_AND_SAFETY,
        element: eA.Z
      },
      [eP.s6.PRIVACY_USER_SETTINGS]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY],
        parent: eP.s6.PRIVACY_AND_SAFETY
      },
      [eP.s6.PRIVACY_SENSITIVE_MEDIA]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER],
        parent: eP.s6.PRIVACY_USER_SETTINGS
      },
      [eP.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.SETTINGS_DM_SPAM_FILTER],
        parent: eP.s6.PRIVACY_USER_SETTINGS
      },
      [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.USER_DM_SETTINGS],
        parent: eP.s6.PRIVACY_USER_SETTINGS
      },
      [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.NEW_GUILDS_DM_ALLOWED],
        parent: eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER],
        parent: eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER],
        parent: eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
        predicate: () => !eQ
      },
      [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.NSFW_DM_COMMANDS_HEADER],
        parent: eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [eP.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.PRIVACY_AND_SAFETY,
        parent: eP.s6.PRIVACY_AND_SAFETY
      },
      [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES,
        parent: eP.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
      },
      [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS,
        parent: eP.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS,
        predicate: () => !eQ
      },
      [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS,
        parent: eP.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
      },
      [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING,
        parent: eP.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
      },
      [eP.s6.PRIVACY_DATA_PRIVACY]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.SETTINGS_DATA_PRIVACY_CONTROLS],
        parent: eP.s6.PRIVACY_USER_SETTINGS
      },
      [eP.s6.PRIVACY_DATA_IMPROVE_DISCORD]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE],
        parent: eP.s6.PRIVACY_DATA_PRIVACY
      },
      [eP.s6.PRIVACY_DATA_PERSONALIZE]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE],
        parent: eP.s6.PRIVACY_DATA_PRIVACY
      },
      [eP.s6.PRIVACY_DATA_QUESTS]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT],
        parent: eP.s6.PRIVACY_DATA_PRIVACY
      },
      [eP.s6.PRIVACY_DATA_BASIC_SERVICE]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        parent: eP.s6.PRIVACY_DATA_PRIVACY,
        searchableTitles: [eP.CF]
      },
      [eP.s6.PRIVACY_DATA_REQUEST]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD],
        parent: eP.s6.PRIVACY_DATA_PRIVACY
      },
      [eP.s6.PRIVACY_STAFF_ONLY]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER],
        parent: eP.s6.PRIVACY_USER_SETTINGS,
        predicate: () => ek
      },
      [eP.s6.PRIVACY_KEYWORD_FILTER]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE],
        parent: eP.s6.PRIVACY_USER_SETTINGS,
        predicate: () => eH
      },
      [eP.s6.PRIVACY_TERMS_POLICY]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        parent: eP.s6.PRIVACY_USER_SETTINGS,
        searchableTitles: [eP.CF]
      },
      [eP.s6.PRIVACY_SAFETY_ALERTS]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.SAFETY_ALERTS_SETTING_TITLE],
        parent: eP.s6.PRIVACY_USER_SETTINGS,
        predicate: () => ew
      },
      [eP.s6.PRIVACY_ACCOUNT_STANDING]: {
        section: eZ.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2],
        parent: eP.s6.PRIVACY_AND_SAFETY
      },
      [eP.s6.PRIVACY_FAMILY_CENTER]: {
        section: eZ.oAB.FAMILY_CENTER,
        searchableTitles: [ev.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE],
        label: ev.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: ev.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: eo.Z,
        badgeCount: eG,
        newIndicator: (0, n.jsx)(r.TextBadge, {
          text: ev.Z.Messages.NEW,
          color: O.Z.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE]
      },
      [eP.s6.AUTHORIZED_APPS]: {
        section: eZ.oAB.AUTHORIZED_APPS,
        searchableTitles: [ev.Z.Messages.AUTHORIZED_APPS],
        label: ev.Z.Messages.AUTHORIZED_APPS,
        element: en.Z
      },
      [eP.s6.SESSIONS]: {
        section: eZ.oAB.SESSIONS,
        searchableTitles: [ev.Z.Messages.AUTH_SESSIONS],
        label: ev.Z.Messages.AUTH_SESSIONS,
        ariaLabel: ev.Z.Messages.AUTH_SESSIONS,
        element: em.Z,
        newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
        predicate: () => Y.Z.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [eP.s6.CONNECTIONS]: {
        section: eZ.oAB.CONNECTIONS,
        searchableTitles: [ev.Z.Messages.CONNECTIONS],
        label: ev.Z.Messages.CONNECTIONS,
        ariaLabel: ev.Z.Messages.CONNECTIONS,
        element: ea.Z,
        impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: p
        },
        newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION]
      },
      [eP.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
        section: eZ.oAB.CONNECTIONS,
        searchableTitles: [ev.Z.Messages.CONNECTED_ACCOUNTS],
        parent: eP.s6.CONNECTIONS,
        element: ea.Z
      },
      [eP.s6.CLIPS]: {
        section: eZ.oAB.CLIPS,
        searchableTitles: [ev.Z.Messages.CLIPS],
        label: ev.Z.Messages.CLIPS,
        ariaLabel: ev.Z.Messages.CLIPS,
        icon: eV ? (0, n.jsx)(N.Z, {}) : void 0,
        element: A.Z,
        predicate: () => !ey
      },
      [eP.s6.FRIEND_REQUESTS]: {
        section: eZ.oAB.FRIEND_REQUESTS,
        searchableTitles: [ev.Z.Messages.FRIEND_REQUESTS],
        label: ev.Z.Messages.FRIEND_REQUESTS,
        element: ec.Z
      },
      [eP.s6.PREMIUM]: {
        section: eZ.oAB.PREMIUM,
        ariaLabel: ev.Z.Messages.PREMIUM,
        searchableTitles: [ev.Z.Messages.PREMIUM],
        label: ev.Z.Messages.PREMIUM,
        element: K.Z,
        className: eU.premiumTab
      },
      [eP.s6.GUILD_BOOSTING]: {
        section: eZ.oAB.GUILD_BOOSTING,
        searchableTitles: [ev.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE],
        label: ev.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: eN.Z
      },
      [eP.s6.SUBSCRIPTIONS]: {
        section: eZ.oAB.SUBSCRIPTIONS,
        ariaLabel: ev.Z.Messages.SUBSCRIPTIONS_TITLE,
        searchableTitles: [ev.Z.Messages.SUBSCRIPTIONS_TITLE],
        label: ev.Z.Messages.SUBSCRIPTIONS_TITLE,
        element: D.Z,
        icon: x ? (0, n.jsx)(r.CircleExclamationPointIcon, {
          size: "xs",
          color: l.Z.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [eP.s6.SUBSCRIPTIONS_CREDITS]: {
        section: eZ.oAB.SUBSCRIPTIONS,
        searchableTitles: [ev.Z.Messages.BILLING_SUBSCRIPTION_CREDIT],
        parent: eP.s6.SUBSCRIPTIONS
      },
      [eP.s6.GIFT_INVENTORY]: {
        section: eZ.oAB.INVENTORY,
        searchableTitles: [ev.Z.Messages.GIFT_INVENTORY],
        label: ev.Z.Messages.GIFT_INVENTORY,
        element: e_.Z,
        ariaLabel: ev.Z.Messages.GIFT_INVENTORY,
        badgeCount: s
      },
      [eP.s6.GIFT_NITRO]: {
        section: eZ.oAB.INVENTORY,
        searchableTitles: [ev.Z.Messages.GIFT_NITRO],
        parent: eP.s6.GIFT_INVENTORY,
        predicate: () => !eW && ez
      },
      [eP.s6.GIFT_CODE_REDEMPTION]: {
        section: eZ.oAB.INVENTORY,
        searchableTitles: [ev.Z.Messages.GIFT_INVENTORY_REDEEM_CODES],
        parent: eP.s6.GIFT_INVENTORY,
        predicate: () => !eW
      },
      [eP.s6.GIFT_INVENTORY_QUESTS]: {
        section: eZ.oAB.INVENTORY,
        searchableTitles: [ev.Z.Messages.QUESTS],
        parent: eP.s6.GIFT_INVENTORY,
        predicate: () => eK
      },
      [eP.s6.GIFT_INVENTORY_LIST]: {
        section: eZ.oAB.INVENTORY,
        searchableTitles: [ev.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED],
        parent: eP.s6.GIFT_INVENTORY,
        predicate: () => !eW
      },
      [eP.s6.GIFT_BLOCKED_PAYMENTS]: {
        section: eZ.oAB.INVENTORY,
        searchableTitles: [ev.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER],
        parent: eP.s6.GIFT_INVENTORY,
        predicate: () => eW
      },
      [eP.s6.BILLING]: {
        section: eZ.oAB.BILLING,
        searchableTitles: [ev.Z.Messages.BILLING],
        label: ev.Z.Messages.BILLING,
        ariaLabel: ev.Z.Messages.BILLING,
        element: ei.Z
      },
      [eP.s6.BILLING_PAYMENT_METHODS]: {
        section: eZ.oAB.BILLING,
        searchableTitles: [ev.Z.Messages.BILLING_PAYMENT_SOURCES],
        parent: eP.s6.BILLING
      },
      [eP.s6.BILLING_TRANSACTION_HISTORY]: {
        section: eZ.oAB.BILLING,
        searchableTitles: [ev.Z.Messages.BILLING_PAYMENT_HISTORY],
        parent: eP.s6.BILLING
      },
      [eP.s6.APPEARANCE]: {
        section: eZ.oAB.APPEARANCE,
        searchableTitles: [ev.Z.Messages.APPEARANCE],
        label: ev.Z.Messages.APPEARANCE,
        ariaLabel: ev.Z.Messages.APPEARANCE,
        element: et.Z,
        newIndicator: (0, n.jsx)(r.PremiumBadge, {
          text: ev.Z.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: eB()
      },
      [eP.s6.APPEARANCE_THEME]: {
        section: eZ.oAB.APPEARANCE,
        searchableTitles: [ev.Z.Messages.THEME],
        parent: eP.s6.APPEARANCE
      },
      [eP.s6.APPEARANCE_COLOR]: {
        section: eZ.oAB.APPEARANCE,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE],
        parent: eP.s6.APPEARANCE_THEME
      },
      [eP.s6.APPEARANCE_ICON]: {
        section: eZ.oAB.APPEARANCE,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE],
        parent: eP.s6.APPEARANCE_THEME
      },
      [eP.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
        section: eZ.oAB.APPEARANCE,
        searchableTitles: [ev.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL],
        parent: eP.s6.APPEARANCE
      },
      [eP.s6.APPEARANCE_SCALING_SPACING]: {
        section: eZ.oAB.APPEARANCE,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL],
        parent: eP.s6.APPEARANCE
      },
      [eP.s6.ACCESSIBILITY]: {
        section: eZ.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY],
        label: ev.Z.Messages.ACCESSIBILITY,
        ariaLabel: ev.Z.Messages.ACCESSIBILITY,
        element: J.Z
      },
      [eP.s6.ACCESSIBILITY_SATURATION]: {
        section: eZ.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE],
        parent: eP.s6.ACCESSIBILITY
      },
      [eP.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
        section: eZ.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL],
        parent: eP.s6.ACCESSIBILITY
      },
      [eP.s6.ACCESSIBILITY_ROLE_STYLE]: {
        section: eZ.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE],
        parent: eP.s6.ACCESSIBILITY
      },
      [eP.s6.ACCESSIBILITY_TAGS]: {
        section: eZ.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE],
        parent: eP.s6.ACCESSIBILITY
      },
      [eP.s6.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
        section: eZ.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE],
        parent: eP.s6.ACCESSIBILITY
      },
      [eP.s6.ACCESSIBILITY_CONTRAST]: {
        section: eZ.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST],
        parent: eP.s6.ACCESSIBILITY
      },
      [eP.s6.ACCESSIBILITY_REDUCED_MOTION]: {
        section: eZ.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION],
        parent: eP.s6.ACCESSIBILITY
      },
      [eP.s6.ACCESSIBILITY_STICKERS]: {
        section: eZ.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
        parent: eP.s6.ACCESSIBILITY
      },
      [eP.s6.ACCESSIBILITY_MESSAGES]: {
        section: eZ.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT],
        parent: eP.s6.ACCESSIBILITY
      },
      [eP.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
        section: eZ.oAB.ACCESSIBILITY,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_TTS],
        parent: eP.s6.ACCESSIBILITY
      },
      [eP.s6.VOICE_AND_VIDEO]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.VOICE_AND_VIDEO],
        label: ev.Z.Messages.VOICE_AND_VIDEO,
        ariaLabel: ev.Z.Messages.VOICE_AND_VIDEO,
        element: eL.Z,
        predicate: () => U.Z.isSupported()
      },
      [eP.s6.VOICE_AND_VIDEO_DEVICES]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_INPUT_DEVICE, ev.Z.Messages.FORM_LABEL_OUTPUT_DEVICE],
        parent: eP.s6.VOICE_AND_VIDEO
      },
      [eP.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_INPUT_VOLUME, ev.Z.Messages.FORM_LABEL_OUTPUT_VOLUME],
        parent: eP.s6.VOICE_AND_VIDEO
      },
      [eP.s6.VOICE_AND_VIDEO_MIC_TEST]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE],
        parent: eP.s6.VOICE_AND_VIDEO
      },
      [eP.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_INPUT_MODE],
        parent: eP.s6.VOICE_AND_VIDEO
      },
      [eP.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY],
        parent: eP.s6.VOICE_AND_VIDEO
      },
      [eP.s6.VOICE_AND_VIDEO_SOUNDS]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.CALL_SOUNDS_SETTINGS],
        parent: eP.s6.VOICE_AND_VIDEO
      },
      [eP.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.SOUNDBOARD],
        parent: eP.s6.VOICE_AND_VIDEO_SOUNDS
      },
      [eP.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.CALL_SOUNDS_SETTINGS],
        parent: eP.s6.VOICE_AND_VIDEO_SOUNDS
      },
      [eP.s6.VOICE_AND_VIDEO_VIDEO]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.VIDEO_SETTINGS],
        parent: eP.s6.VOICE_AND_VIDEO
      },
      [eP.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_VIDEO_DEVICE],
        parent: eP.s6.VOICE_AND_VIDEO_VIDEO,
        predicate: () => U.Z.supports(ej.AN.VIDEO)
      },
      [eP.s6.VOICE_AND_VIDEO_ADVANCED]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.SETTINGS_ADVANCED],
        parent: eP.s6.VOICE_AND_VIDEO
      },
      [eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE],
        parent: eP.s6.VOICE_AND_VIDEO_ADVANCED
      },
      [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_VOICE_PROCESSING],
        parent: eP.s6.VOICE_AND_VIDEO_ADVANCED
      },
      [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.ECHO_CANCELLATION],
        parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.Z.getEchoCancellation()
      },
      [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.NOISE_SUPPRESSION],
        parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.Z.isNoiseSuppressionSupported()
      },
      [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.ADVANCED_VOICE_ACTIVITY],
        parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.Z.isAdvancedVoiceActivitySupported()
      },
      [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.AUTOMATIC_GAIN_CONTROL],
        parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.Z.isAutomaticGainControlSupported()
      },
      [eP.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_QOS],
        parent: eP.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => U.Z.supports(ej.AN.QOS)
      },
      [eP.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_ATTENUATION],
        parent: eP.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => U.Z.supports(ej.AN.ATTENUATION)
      },
      [eP.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_SUBSYSTEM],
        parent: eP.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => U.Z.supports(ej.AN.LEGACY_AUDIO_SUBSYSTEM) || U.Z.supports(ej.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
      },
      [eP.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS],
        parent: eP.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => V.isPlatformEmbedded
      },
      [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_DEBUG],
        parent: eP.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => V.isPlatformEmbedded && U.Z.supports(ej.AN.DEBUG_LOGGING) && null != T.Z.fileManager.readLogFiles
      },
      [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_CHECKBOX_AEC_DUMP],
        parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
        predicate: () => U.Z.isAecDumpSupported()
      },
      [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG],
        parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
        predicate: () => ("canary" === y.ZP.releaseChannel || "development" === y.ZP.releaseChannel) && ek && U.Z.supports(ej.AN.CONNECTION_REPLAY)
      },
      [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING],
        parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING
      },
      [eP.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
        section: eZ.oAB.VOICE,
        searchableTitles: [ev.Z.Messages.RESET_VOICE_SETTINGS],
        parent: eP.s6.VOICE_AND_VIDEO_ADVANCED
      },
      [eP.s6.POGGERMODE]: {
        section: eZ.oAB.POGGERMODE,
        searchableTitles: [ev.Z.Messages.POGGERMODE],
        label: ev.Z.Messages.POGGERMODE,
        ariaLabel: ev.Z.Messages.POGGERMODE,
        element: M.Z,
        predicate: () => R.Z.settingsVisible,
        icon: (0, n.jsx)("img", {
          alt: "",
          src: t(348621),
          className: eU.poggermodeIcon
        })
      },
      [eP.s6.CHAT]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.CHAT],
        label: ev.Z.Messages.CHAT,
        ariaLabel: ev.Z.Messages.CHAT,
        element: eg.Z
      },
      [eP.s6.CHAT_INLINE_MEDIA]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.INLINE_MEDIA_LABEL],
        parent: eP.s6.CHAT
      },
      [eP.s6.CHAT_INLINE_MEDIA_LINKS]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.INLINE_EMBED_MEDIA],
        parent: eP.s6.CHAT_INLINE_MEDIA
      },
      [eP.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.INLINE_ATTACHMENT_MEDIA],
        parent: eP.s6.CHAT_INLINE_MEDIA
      },
      [eP.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.IMAGE_DESCRIPTION],
        parent: eP.s6.CHAT_INLINE_MEDIA
      },
      [eP.s6.CHAT_EMBEDS]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.RENDER_EMBEDS_LABEL],
        parent: eP.s6.CHAT
      },
      [eP.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.RENDER_EMBEDS],
        parent: eP.s6.CHAT_EMBEDS
      },
      [eP.s6.CHAT_EMOJI]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.EMOJI],
        parent: eP.s6.CHAT
      },
      [eP.s6.CHAT_EMOJI_REACTIONS]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.RENDER_REACTIONS],
        parent: eP.s6.CHAT_EMOJI
      },
      [eP.s6.CHAT_EMOJI_EMOTICONS]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.CONVERT_EMOTICONS],
        parent: eP.s6.CHAT_EMOJI
      },
      [eP.s6.CHAT_STICKERS]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
        parent: eP.s6.CHAT
      },
      [eP.s6.CHAT_STICKERS_SUGGESTIONS]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.AUTO_SUGGEST_STICKERS],
        parent: eP.s6.CHAT_STICKERS
      },
      [eP.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.STICKERS_IN_AUTOCOMPLETE],
        parent: eP.s6.CHAT_STICKERS
      },
      [eP.s6.CHAT_TEXT_BOX]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX],
        parent: eP.s6.CHAT
      },
      [eP.s6.CHAT_TEXT_BOX_PREVIEW]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION],
        parent: eP.s6.CHAT_TEXT_BOX
      },
      [eP.s6.CHAT_THREADS]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.THREADS],
        parent: eP.s6.CHAT
      },
      [eP.s6.CHAT_THREADS_SPLIT_VIEW]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION],
        parent: eP.s6.CHAT_THREADS
      },
      [eP.s6.CHAT_SPOILERS]: {
        section: eZ.oAB.TEXT,
        searchableTitles: [ev.Z.Messages.SHOW_SPOILER_CONTENT],
        parent: eP.s6.CHAT
      },
      [eP.s6.NOTIFICATIONS]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.NOTIFICATIONS],
        label: ev.Z.Messages.NOTIFICATIONS,
        ariaLabel: ev.Z.Messages.NOTIFICATIONS,
        element: eu.Z
      },
      [eP.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE],
        parent: eP.s6.NOTIFICATIONS
      },
      [eP.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: ["Mention on all messages"],
        parent: eP.s6.NOTIFICATIONS
      },
      [eP.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL],
        parent: eP.s6.NOTIFICATIONS
      },
      [eP.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL],
        parent: eP.s6.NOTIFICATIONS,
        predicate: () => (0, V.isWindows)()
      },
      [eP.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE],
        parent: eP.s6.NOTIFICATIONS
      },
      [eP.s6.NOTIFICATIONS_NEW_SETTINGS]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: ["New Notification Settings (Advancd, Staff Only)"],
        parent: eP.s6.NOTIFICATIONS,
        predicate: () => !1
      },
      [eP.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: ["Restore most recent snapshot"],
        parent: eP.s6.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [eP.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: ["Launch Migration"],
        parent: eP.s6.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [eP.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: ["Toggle new system on/off"],
        parent: eP.s6.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [eP.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT],
        parent: eP.s6.NOTIFICATIONS
      },
      [eP.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_TTS],
        parent: eP.s6.NOTIFICATIONS
      },
      [eP.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER],
        parent: eP.s6.NOTIFICATIONS
      },
      [eP.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER],
        parent: eP.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [eP.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER],
        parent: eP.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [eP.s6.NOTIFICATIONS_SOUNDS]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.SOUNDS],
        parent: eP.s6.NOTIFICATIONS
      },
      [eP.s6.NOTIFICATIONS_EMAILS]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS],
        parent: eP.s6.NOTIFICATIONS
      },
      [eP.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION],
        parent: eP.s6.NOTIFICATIONS_EMAILS
      },
      [eP.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL],
        parent: eP.s6.NOTIFICATIONS_EMAILS
      },
      [eP.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS],
        parent: eP.s6.NOTIFICATIONS_EMAILS
      },
      [eP.s6.NOTIFICATIONS_EMAILS_TIPS]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS],
        parent: eP.s6.NOTIFICATIONS_EMAILS
      },
      [eP.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS],
        parent: eP.s6.NOTIFICATIONS_EMAILS
      },
      [eP.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
        section: eZ.oAB.NOTIFICATIONS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING],
        parent: eP.s6.NOTIFICATIONS_EMAILS
      },
      [eP.s6.KEYBINDS]: {
        section: eZ.oAB.KEYBINDS,
        searchableTitles: [ev.Z.Messages.KEYBINDS],
        label: ev.Z.Messages.KEYBINDS,
        element: eT.Z
      },
      [eP.s6.LANGUAGE]: {
        section: eZ.oAB.LOCALE,
        searchableTitles: [ev.Z.Messages.LANGUAGE],
        label: ev.Z.Messages.LANGUAGE,
        element: eS.Z
      },
      [eP.s6.WINDOW_SETTINGS]: {
        section: eZ.oAB.WINDOWS,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS],
        label: ev.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: eM.Z,
        predicate: () => V.isPlatformEmbedded && (0, V.isWindows)()
      },
      [eP.s6.LINUX_SETTINGS]: {
        section: eZ.oAB.LINUX,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_LINUX_SETTINGS],
        label: ev.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: eb,
        predicate: () => V.isPlatformEmbedded && (0, V.isLinux)()
      },
      [eP.s6.STREAMER_MODE]: {
        section: eZ.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.STREAMER_MODE],
        label: ev.Z.Messages.STREAMER_MODE,
        ariaLabel: ev.Z.Messages.STREAMER_MODE,
        element: eh.Z
      },
      [eP.s6.STREAMER_MODE_INTEGRATIONS]: {
        section: eZ.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE],
        parent: eP.s6.STREAMER_MODE
      },
      [eP.s6.STREAMER_MODE_ENABLE]: {
        section: eZ.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.ENABLE_STREAMER_MODE_LABEL],
        parent: eP.s6.STREAMER_MODE
      },
      [eP.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
        section: eZ.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL],
        parent: eP.s6.STREAMER_MODE
      },
      [eP.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
        section: eZ.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.HIDE_INSTANT_INVITES_LABEL],
        parent: eP.s6.STREAMER_MODE
      },
      [eP.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
        section: eZ.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE],
        parent: eP.s6.STREAMER_MODE
      },
      [eP.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
        section: eZ.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.DISABLE_NOTIFICATIONS_LABEL],
        parent: eP.s6.STREAMER_MODE
      },
      [eP.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
        section: eZ.oAB.STREAMER_MODE,
        searchableTitles: [ev.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL],
        parent: eP.s6.STREAMER_MODE,
        predicate: () => {
          var e, s, t;
          return null !== (t = null === T.Z || void 0 === T.Z ? void 0 : null === (s = T.Z.window) || void 0 === s ? void 0 : null === (e = s.supportsContentProtection) || void 0 === e ? void 0 : e.call(s)) && void 0 !== t && t
        }
      },
      [eP.s6.SPEED_TEST]: {
        section: eZ.oAB.SPEED_TEST,
        searchableTitles: ["Speed Test"],
        label: "Speed Test",
        element: Q.Z,
        predicate: () => j.Z.isSupported() && H.Z.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [eP.s6.SETTINGS_ADVANCED]: {
        section: eZ.oAB.ADVANCED,
        searchableTitles: [ev.Z.Messages.SETTINGS_ADVANCED],
        label: ev.Z.Messages.SETTINGS_ADVANCED,
        ariaLabel: ev.Z.Messages.SETTINGS_ADVANCED,
        element: es.Z
      },
      [eP.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
        section: eZ.oAB.ADVANCED,
        searchableTitles: [ev.Z.Messages.DEVELOPER_MODE],
        parent: eP.s6.SETTINGS_ADVANCED,
        predicate: () => G.wS
      },
      [eP.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
        section: eZ.oAB.ADVANCED,
        searchableTitles: [ev.Z.Messages.HARDWARE_ACCELERATION],
        parent: eP.s6.SETTINGS_ADVANCED,
        predicate: () => V.isPlatformEmbedded
      },
      [eP.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
        section: eZ.oAB.ADVANCED,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_SHOW_LIBRARY],
        parent: eP.s6.SETTINGS_ADVANCED,
        predicate: () => eX
      },
      [eP.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
        section: eZ.oAB.ADVANCED,
        searchableTitles: [ev.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE],
        parent: eP.s6.SETTINGS_ADVANCED,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME]: {
        section: eZ.oAB.ADVANCED,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_HOME_AUTO_NAV],
        parent: eP.s6.SETTINGS_ADVANCED
      },
      [eP.s6.ACTIVITY_PRIVACY]: {
        section: eZ.oAB.ACTIVITY_PRIVACY,
        searchableTitles: [ev.Z.Messages.ACTIVITY_PRIVACY],
        label: ev.Z.Messages.ACTIVITY_PRIVACY,
        ariaLabel: ev.Z.Messages.ACTIVITY_PRIVACY,
        element: ee.Z,
        predicate: () => !ey
      },
      [eP.s6.ACTIVITY_PRIVACY_STATUS]: {
        section: ey ? eZ.oAB.GAMES : eZ.oAB.ACTIVITY_PRIVACY,
        searchableTitles: [ev.Z.Messages.ACTIVITY_STATUS],
        parent: ey ? eP.s6.GAMES : eP.s6.ACTIVITY_PRIVACY
      },
      [eP.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
        section: ey ? eZ.oAB.GAMES : eZ.oAB.ACTIVITY_PRIVACY,
        searchableTitles: [ev.Z.Messages.ACTIVITY_PARTY_PRIVACY],
        parent: ey ? eP.s6.GAMES : eP.s6.ACTIVITY_PRIVACY
      },
      [eP.s6.REGISTERED_GAMES]: {
        section: eZ.oAB.REGISTERED_GAMES,
        searchableTitles: [ev.Z.Messages.REGISTERED_GAMES],
        label: ev.Z.Messages.REGISTERED_GAMES,
        element: eE.Z,
        predicate: () => !ey && (0, ep.Jw)()
      },
      [eP.s6.OVERLAY]: {
        section: eZ.oAB.OVERLAY,
        searchableTitles: [ev.Z.Messages.OVERLAY],
        label: ev.Z.Messages.OVERLAY,
        element: eI.Z,
        predicate: () => !ey && eF
      },
      [eP.s6.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, I.Z)(!0),
        searchableTitles: [ev.Z.Messages.WHATS_NEW],
        label: ev.Z.Messages.WHATS_NEW
      },
      [eP.s6.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          b.default.track(eZ.rMx.USER_SETTINGS_MERCH_LINK_CLICKED), (0, F.q)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              b.default.track(eZ.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, S.Z)(e)
            }
          })
        },
        searchableTitles: [ev.Z.Messages.MERCHANDISE],
        label: ev.Z.Messages.MERCHANDISE,
        ariaLabel: ev.Z.Messages.MERCHANDISE
      },
      [eP.s6.HYPESQUAD]: {
        section: eZ.oAB.HYPESQUAD_ONLINE,
        searchableTitles: [ev.Z.Messages.USER_SETTINGS_HYPESQUAD],
        label: ev.Z.Messages.USER_SETTINGS_HYPESQUAD,
        element: ed.Z
      },
      [eP.s6.EXPERIMENTS]: {
        section: eZ.oAB.EXPERIMENTS,
        searchableTitles: ["Experiments"],
        label: "Experiments",
        element: ex.Z,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Developer Options"],
        label: "Developer Options",
        ariaLabel: "Developer Options",
        element: er.Z,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_FLAGS]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Developer Options Flags"],
        parent: eP.s6.DEVELOPER_OPTIONS,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Tracing Requests"],
        parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Forced Canary"],
        parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Gateway Events To Console"],
        parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Rpc Events Commands"],
        parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Analytics Events Logging"],
        parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Source Maps"],
        parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Analytics Debugger View"],
        parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Idle Status Indicator"],
        parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => ek && v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Accessibility Auditing"],
        parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => !1
      },
      [eP.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Preview Unpublished Collections"],
        parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => ek && v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Override Client Side"],
        parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Override Client Side Premium Type"],
        parent: eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Override Client Side Account Created Data"],
        parent: eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Open Overlay"],
        parent: eP.s6.DEVELOPER_OPTIONS,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Reset Socket"],
        parent: eP.s6.DEVELOPER_OPTIONS,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Clear Caches"],
        parent: eP.s6.DEVELOPER_OPTIONS,
        predicate: () => u.q && v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_CRASHES]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Crashes"],
        parent: eP.s6.DEVELOPER_OPTIONS,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Survey Override"],
        parent: eP.s6.DEVELOPER_OPTIONS,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Changelog Override"],
        parent: eP.s6.DEVELOPER_OPTIONS,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
        section: eZ.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Build Override"],
        parent: eP.s6.DEVELOPER_OPTIONS,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.HOTSPOT_OPTIONS]: {
        section: eZ.oAB.HOTSPOT_OPTIONS,
        searchableTitles: ["Hotspot Options"],
        label: "Hotspot Options",
        element: w.Z,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: eZ.oAB.DISMISSIBLE_CONTENT_OPTIONS,
        searchableTitles: ["Dismissible Contents"],
        label: "Dismissible Contents",
        element: m.Z,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.PAYMENT_FLOW_MODALS]: {
        section: eZ.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
        searchableTitles: ["Payment Flow Modals"],
        label: "Payment Flow Modals",
        element: W.Z,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.TEXT_PLAYGROUND]: {
        section: eZ.oAB.TEXT_PLAYGROUND,
        searchableTitles: ["Text Playground"],
        label: "Text Playground",
        element: eR.Z,
        predicate: () => (0, q.D)() || v.Z.isDeveloper
      },
      [eP.s6.DESIGN_SYSTEMS]: {
        section: eZ.oAB.DESIGN_SYSTEMS,
        searchableTitles: ["Design Systems"],
        label: "Design Systems",
        element: el.Z,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.TEXT_COMPONENTS]: {
        section: eZ.oAB.TEXT_COMPONENT,
        searchableTitles: ["Text Components"],
        label: "Text Components",
        element: X.Z,
        predicate: () => (0, q.D)() || v.Z.isDeveloper
      },
      [eP.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: eZ.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
        searchableTitles: ["Profile Effects Preview Tool"],
        label: "Profile Effects Preview Tool",
        element: C.Z,
        predicate: () => v.Z.isDeveloper
      },
      [eP.s6.QUEST_PREVIEW_TOOL]: {
        section: eZ.oAB.QUEST_PREVIEW_TOOL,
        searchableTitles: ["Quest Preview Tool"],
        label: "Quest Preview Tool",
        element: f.Z,
        predicate: () => (0, Z.X7)({
          location: ef.dr.QUEST_PREVIEW_TOOL
        })
      },
      [eP.s6.LOGOUT]: {
        section: "logout",
        onClick: () => {
          (0, r.openModal)(e => (0, n.jsx)(r.ConfirmModal, {
            header: ev.Z.Messages.LOGOUT,
            confirmText: ev.Z.Messages.LOGOUT,
            cancelText: ev.Z.Messages.CANCEL,
            onCancel: e.onClose,
            onConfirm: () => c.Z.logout(),
            ...e,
            children: (0, n.jsx)(r.Text, {
              variant: "text-md/normal",
              children: ev.Z.Messages.USER_SETTINGS_CONFIRM_LOGOUT
            })
          }))
        },
        label: ev.Z.Messages.LOGOUT,
        ariaLabel: ev.Z.Messages.LOGOUT,
        icon: (0, n.jsx)(r.DoorExitIcon, {
          size: "xs",
          color: "currentColor"
        })
      },
      [eP.s6.SOCIAL_LINKS]: {
        section: _.ID.CUSTOM,
        element: z.Z
      },
      [eP.s6.CLIENT_DEBUG_INFO]: {
        section: _.ID.CUSTOM,
        element: k.Z
      }
    })
  }