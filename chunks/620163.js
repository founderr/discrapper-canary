t.d(s, {
  i: function() {
    return eG
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
  A = t(425799),
  m = t(377171),
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
  eA = t(207874),
  em = t(463153),
  eO = t(36192),
  eg = t(338345),
  eh = t(400287),
  eR = t(554042),
  ep = t(200645),
  ex = t(287490),
  eM = t(168308),
  eD = t(277329),
  ef = t(674116),
  eL = t(726985),
  eP = t(981631),
  eZ = t(46140),
  ev = t(65154),
  eb = t(689938),
  ej = t(422237);
let eU = () => {
    let e = "Settings list view",
      s = [i.z.CLIENT_THEMES_SETTINGS_BADGE, i.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
    return x.F.getCurrentConfig({
      location: e
    }).enabled && s.push(i.z.BRAND_REFRESH_NEW_BADGE), M.n.getCurrentConfig({
      location: e
    }).enabled && s.push(i.z.PRIDE_ICONS_APPEARANCE_BADGE), s
  },
  eB = ep.Z,
  eG = e => {
    let {
      unseenGiftCount: s,
      showPrepaidPaymentPastDueWarning: x,
      impressionSource: M,
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
      hasLibraryApplication: eX,
      hasTOTPEnabled: eq
    } = e;
    return Object.freeze({
      [eL.s6.SEARCH_BAR]: {
        section: E.ID.CUSTOM,
        element: eA.Z,
        predicate: () => eY
      },
      [eL.s6.SEARCH_NO_RESULTS]: {
        section: E.ID.CUSTOM,
        element: em.Z,
        predicate: () => eY
      },
      [eL.s6.ACCOUNT]: {
        section: eP.oAB.ACCOUNT,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_MY_ACCOUNT],
        label: eb.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: eb.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: $.Z
      },
      [eL.s6.ACCOUNT_PROFILE]: {
        searchableTitles: [eb.Z.Messages.PROFILE],
        parent: eL.s6.ACCOUNT,
        section: eP.oAB.ACCOUNT
      },
      [eL.s6.ACCOUNT_DISPLAY_NAME]: {
        searchableTitles: [eb.Z.Messages.DISPLAY_NAME],
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_PROFILE
      },
      [eL.s6.ACCOUNT_PHONE_NUMBER]: {
        searchableTitles: [eb.Z.Messages.CHANGE_PHONE_NUMBER],
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_PROFILE
      },
      [eL.s6.ACCOUNT_USERNAME]: {
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE],
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_PROFILE
      },
      [eL.s6.ACCOUNT_EMAIL]: {
        searchableTitles: [eb.Z.Messages.CHANGE_EMAIL],
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_PROFILE
      },
      [eL.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION],
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT
      },
      [eL.s6.ACCOUNT_CHANGE_PASSWORD]: {
        searchableTitles: [eb.Z.Messages.CHANGE_PASSWORD],
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eL.s6.ACCOUNT_CONFIRM_PASSWORD]: {
        searchableTitles: [eb.Z.Messages.FORM_LABEL_CONFIRM_PASSWORD],
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
        searchableTitles: [eb.Z.Messages.SETTINGS_TWO_FA],
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eL.s6.ACCOUNT_ENABLE_2FA]: {
        searchableTitles: [eb.Z.Messages.TWO_FA_ENABLE],
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
        predicate: () => !eq
      },
      [eL.s6.ACCOUNT_REMOVE_2FA]: {
        searchableTitles: [eb.Z.Messages.TWO_FA_REMOVE],
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
        predicate: () => eq
      },
      [eL.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
        searchableTitles: [eb.Z.Messages.TWO_FA_BACKUP_CODE],
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.s6.ACCOUNT_SMS_BACKUP]: {
        searchableTitles: [eb.Z.Messages.MFA_SMS_AUTH],
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.s6.ACCOUNT_SECURITY_KEYS]: {
        searchableTitles: [eb.Z.Messages.TWO_FA_WEBAUTHN_REGISTER],
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.s6.ACCOUNT_REMOVAL]: {
        section: eP.oAB.ACCOUNT,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION],
        parent: eL.s6.ACCOUNT
      },
      [eL.s6.ACCOUNT_DISABLE_ACCOUNT]: {
        section: eP.oAB.ACCOUNT,
        searchableTitles: [eb.Z.Messages.DISABLE_ACCOUNT],
        parent: eL.s6.ACCOUNT_REMOVAL
      },
      [eL.s6.ACCOUNT_DELETE_ACCOUNT]: {
        section: eP.oAB.ACCOUNT,
        searchableTitles: [eb.Z.Messages.DELETE_ACCOUNT],
        parent: eL.s6.ACCOUNT_DISABLE_ACCOUNT
      },
      [eL.s6.GAMES]: {
        section: eP.oAB.GAMES,
        searchableTitles: [eb.Z.Messages.GAMES],
        label: eb.Z.Messages.GAMES,
        ariaLabel: eb.Z.Messages.GAMES,
        element: eD.Z,
        predicate: () => ey
      },
      [eL.s6.GAMES_MY_GAMES]: {
        section: eP.oAB.GAMES,
        searchableTitles: [eb.Z.Messages.MY_GAMES],
        parent: eL.s6.GAMES
      },
      [eL.s6.GAMES_CLIPS]: {
        section: eP.oAB.GAMES,
        searchableTitles: [eb.Z.Messages.CLIPS],
        parent: eL.s6.GAMES
      },
      [eL.s6.GAMES_OVERLAY]: {
        section: eP.oAB.GAMES,
        searchableTitles: [eb.Z.Messages.OVERLAY],
        parent: eL.s6.GAMES
      },
      [eL.s6.GAMES_ACTIVITY_PRIVACY]: {
        section: eP.oAB.GAMES,
        searchableTitles: [eb.Z.Messages.ACTIVITY_PRIVACY],
        parent: eL.s6.GAMES
      },
      [eL.s6.PROFILE_CUSTOMIZATION]: {
        section: eP.oAB.PROFILE_CUSTOMIZATION,
        type: E.bT.WIDE,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_PROFILES],
        label: eb.Z.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: eb.Z.Messages.USER_SETTINGS_PROFILES,
        element: L.Z,
        newIndicator: (0, n.jsx)(o.PremiumBadge, {
          text: eb.Z.Messages.NEW
        }),
        notice: {
          stores: [U.Z, h.Z],
          element: f.Z
        },
        onSettingsClose: () => {
          l.Z.wait(() => {
            (0, g.It)(), (0, d.P6)(), _.Z.clearSubsection(eP.oAB.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [eL.s6.PROFILE_DISPLAY_NAME]: {
        section: eP.oAB.PROFILE_CUSTOMIZATION,
        searchableTitles: [eb.Z.Messages.DISPLAY_NAME],
        parent: eL.s6.PROFILE_CUSTOMIZATION
      },
      [eL.s6.PROFILE_USER_PROFILE]: {
        section: eP.oAB.PROFILE_CUSTOMIZATION,
        searchableTitles: [eb.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE],
        parent: eL.s6.PROFILE_CUSTOMIZATION
      },
      [eL.s6.PROFILE_SERVER_PROFILES]: {
        section: eP.oAB.PROFILE_CUSTOMIZATION,
        searchableTitles: [eb.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY],
        parent: eL.s6.PROFILE_CUSTOMIZATION
      },
      [eL.s6.PRIVACY_AND_SAFETY]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        label: eb.Z.Messages.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.PRIVACY_AND_SAFETY],
        ariaLabel: eb.Z.Messages.PRIVACY_AND_SAFETY,
        element: eC.Z
      },
      [eL.s6.PRIVACY_USER_SETTINGS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.PRIVACY_AND_SAFETY],
        parent: eL.s6.PRIVACY_AND_SAFETY
      },
      [eL.s6.PRIVACY_SENSITIVE_MEDIA]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER, eb.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_FILTER, eb.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_BLUR, eb.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_SENSITIVE_CONTENT, eb.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_EXPLICIT],
        parent: eL.s6.PRIVACY_USER_SETTINGS
      },
      [eL.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.SETTINGS_DM_SPAM_FILTER, eb.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_MESSAGES, eb.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_INBOX],
        parent: eL.s6.PRIVACY_USER_SETTINGS
      },
      [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.USER_DM_SETTINGS, eb.Z.Messages.USER_DM_SEARCH_TERM_DIRECT_MESSAGES, eb.Z.Messages.USER_DM_SEARCH_TERM_DM],
        parent: eL.s6.PRIVACY_USER_SETTINGS
      },
      [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.NEW_GUILDS_DM_ALLOWED],
        parent: eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER],
        parent: eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER],
        parent: eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
        predicate: () => !eQ
      },
      [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.NSFW_DM_COMMANDS_HEADER],
        parent: eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [eL.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: eb.Z.Messages.PRIVACY_AND_SAFETY,
        parent: eL.s6.PRIVACY_AND_SAFETY
      },
      [eL.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: eb.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES,
        parent: eL.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
      },
      [eL.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: eb.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS,
        parent: eL.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS,
        predicate: () => !eQ
      },
      [eL.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: eb.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS,
        parent: eL.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
      },
      [eL.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: eb.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING,
        parent: eL.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
      },
      [eL.s6.PRIVACY_DATA_PRIVACY]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.SETTINGS_DATA_PRIVACY_CONTROLS],
        parent: eL.s6.PRIVACY_USER_SETTINGS
      },
      [eL.s6.PRIVACY_DATA_IMPROVE_DISCORD]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE],
        parent: eL.s6.PRIVACY_DATA_PRIVACY
      },
      [eL.s6.PRIVACY_DATA_PERSONALIZE]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE],
        parent: eL.s6.PRIVACY_DATA_PRIVACY
      },
      [eL.s6.PRIVACY_DATA_QUESTS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT],
        parent: eL.s6.PRIVACY_DATA_PRIVACY
      },
      [eL.s6.PRIVACY_DATA_BASIC_SERVICE]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        parent: eL.s6.PRIVACY_DATA_PRIVACY,
        searchableTitles: [eL.CF]
      },
      [eL.s6.PRIVACY_DATA_REQUEST]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD],
        parent: eL.s6.PRIVACY_DATA_PRIVACY
      },
      [eL.s6.PRIVACY_STAFF_ONLY]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER],
        parent: eL.s6.PRIVACY_USER_SETTINGS,
        predicate: () => ek
      },
      [eL.s6.PRIVACY_KEYWORD_FILTER]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE, eb.Z.Messages.USER_KEYWORD_FILTERS_SEARCH_TERM_KEYWORD],
        parent: eL.s6.PRIVACY_USER_SETTINGS,
        predicate: () => eH
      },
      [eL.s6.PRIVACY_TERMS_POLICY]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        parent: eL.s6.PRIVACY_USER_SETTINGS,
        searchableTitles: [eL.CF]
      },
      [eL.s6.PRIVACY_SAFETY_ALERTS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.SAFETY_ALERTS_SETTING_TITLE],
        parent: eL.s6.PRIVACY_USER_SETTINGS,
        predicate: () => ew
      },
      [eL.s6.PRIVACY_ACCOUNT_STANDING]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitles: [eb.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2],
        parent: eL.s6.PRIVACY_AND_SAFETY
      },
      [eL.s6.PRIVACY_FAMILY_CENTER]: {
        section: eP.oAB.FAMILY_CENTER,
        searchableTitles: [eb.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE],
        label: eb.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: eb.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: el.Z,
        badgeCount: eG,
        newIndicator: (0, n.jsx)(o.TextBadge, {
          text: eb.Z.Messages.NEW,
          color: m.Z.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [i.z.FAMILY_CENTER_NEW_BADGE]
      },
      [eL.s6.AUTHORIZED_APPS]: {
        section: eP.oAB.AUTHORIZED_APPS,
        searchableTitles: [eb.Z.Messages.AUTHORIZED_APPS],
        label: eb.Z.Messages.AUTHORIZED_APPS,
        element: en.Z
      },
      [eL.s6.SESSIONS]: {
        section: eP.oAB.SESSIONS,
        searchableTitles: [eb.Z.Messages.AUTH_SESSIONS],
        label: eb.Z.Messages.AUTH_SESSIONS,
        ariaLabel: eb.Z.Messages.AUTH_SESSIONS,
        element: eO.Z,
        newIndicatorDismissibleContentTypes: [i.z.AUTH_SESSIONS_NEW],
        predicate: () => Y.Z.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [eL.s6.CONNECTIONS]: {
        section: eP.oAB.CONNECTIONS,
        searchableTitles: [eb.Z.Messages.CONNECTIONS],
        label: eb.Z.Messages.CONNECTIONS,
        ariaLabel: eb.Z.Messages.CONNECTIONS,
        element: ei.Z,
        impressionName: a.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: M
        },
        newIndicatorDismissibleContentTypes: [i.z.NEW_CRUNCHYROLL_CONNECTION]
      },
      [eL.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
        section: eP.oAB.CONNECTIONS,
        searchableTitles: [eb.Z.Messages.CONNECTED_ACCOUNTS],
        parent: eL.s6.CONNECTIONS,
        element: ei.Z
      },
      [eL.s6.CLIPS]: {
        section: eP.oAB.CLIPS,
        searchableTitles: [eb.Z.Messages.CLIPS],
        label: eb.Z.Messages.CLIPS,
        ariaLabel: eb.Z.Messages.CLIPS,
        icon: eV ? (0, n.jsx)(N.Z, {}) : void 0,
        element: C.Z,
        predicate: () => !ey
      },
      [eL.s6.FRIEND_REQUESTS]: {
        section: eP.oAB.FRIEND_REQUESTS,
        searchableTitles: [eb.Z.Messages.FRIEND_REQUESTS],
        label: eb.Z.Messages.FRIEND_REQUESTS,
        element: ec.Z
      },
      [eL.s6.PREMIUM]: {
        section: eP.oAB.PREMIUM,
        ariaLabel: eb.Z.Messages.PREMIUM,
        searchableTitles: [eb.Z.Messages.PREMIUM],
        label: eb.Z.Messages.PREMIUM,
        element: K.Z,
        className: ej.premiumTab
      },
      [eL.s6.GUILD_BOOSTING]: {
        section: eP.oAB.GUILD_BOOSTING,
        searchableTitles: [eb.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE],
        label: eb.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: eN.Z
      },
      [eL.s6.SUBSCRIPTIONS]: {
        section: eP.oAB.SUBSCRIPTIONS,
        ariaLabel: eb.Z.Messages.SUBSCRIPTIONS_TITLE,
        searchableTitles: [eb.Z.Messages.SUBSCRIPTIONS_TITLE],
        label: eb.Z.Messages.SUBSCRIPTIONS_TITLE,
        element: D.Z,
        icon: x ? (0, n.jsx)(o.CircleExclamationPointIcon, {
          size: "xs",
          color: r.Z.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [eL.s6.SUBSCRIPTIONS_CREDITS]: {
        section: eP.oAB.SUBSCRIPTIONS,
        searchableTitles: [eb.Z.Messages.BILLING_SUBSCRIPTION_CREDIT],
        parent: eL.s6.SUBSCRIPTIONS
      },
      [eL.s6.GIFT_INVENTORY]: {
        section: eP.oAB.INVENTORY,
        searchableTitles: [eb.Z.Messages.GIFT_INVENTORY],
        label: eb.Z.Messages.GIFT_INVENTORY,
        element: eE.Z,
        ariaLabel: eb.Z.Messages.GIFT_INVENTORY,
        badgeCount: s
      },
      [eL.s6.GIFT_NITRO]: {
        section: eP.oAB.INVENTORY,
        searchableTitles: [eb.Z.Messages.GIFT_NITRO],
        parent: eL.s6.GIFT_INVENTORY,
        predicate: () => !eW && ez
      },
      [eL.s6.GIFT_CODE_REDEMPTION]: {
        section: eP.oAB.INVENTORY,
        searchableTitles: [eb.Z.Messages.GIFT_INVENTORY_REDEEM_CODES],
        parent: eL.s6.GIFT_INVENTORY,
        predicate: () => !eW
      },
      [eL.s6.GIFT_INVENTORY_QUESTS]: {
        section: eP.oAB.INVENTORY,
        searchableTitles: [eb.Z.Messages.QUESTS],
        parent: eL.s6.GIFT_INVENTORY,
        predicate: () => eK
      },
      [eL.s6.GIFT_INVENTORY_LIST]: {
        section: eP.oAB.INVENTORY,
        searchableTitles: [eb.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED],
        parent: eL.s6.GIFT_INVENTORY,
        predicate: () => !eW
      },
      [eL.s6.GIFT_BLOCKED_PAYMENTS]: {
        section: eP.oAB.INVENTORY,
        searchableTitles: [eb.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER],
        parent: eL.s6.GIFT_INVENTORY,
        predicate: () => eW
      },
      [eL.s6.BILLING]: {
        section: eP.oAB.BILLING,
        searchableTitles: [eb.Z.Messages.BILLING],
        label: eb.Z.Messages.BILLING,
        ariaLabel: eb.Z.Messages.BILLING,
        element: ea.Z
      },
      [eL.s6.BILLING_PAYMENT_METHODS]: {
        section: eP.oAB.BILLING,
        searchableTitles: [eb.Z.Messages.BILLING_PAYMENT_SOURCES],
        parent: eL.s6.BILLING
      },
      [eL.s6.BILLING_TRANSACTION_HISTORY]: {
        section: eP.oAB.BILLING,
        searchableTitles: [eb.Z.Messages.BILLING_PAYMENT_HISTORY],
        parent: eL.s6.BILLING
      },
      [eL.s6.APPEARANCE]: {
        section: eP.oAB.APPEARANCE,
        searchableTitles: [eb.Z.Messages.APPEARANCE],
        label: eb.Z.Messages.APPEARANCE,
        ariaLabel: eb.Z.Messages.APPEARANCE,
        element: et.Z,
        newIndicator: (0, n.jsx)(o.PremiumBadge, {
          text: eb.Z.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: eU()
      },
      [eL.s6.APPEARANCE_THEME]: {
        section: eP.oAB.APPEARANCE,
        searchableTitles: [eb.Z.Messages.THEME],
        parent: eL.s6.APPEARANCE
      },
      [eL.s6.APPEARANCE_COLOR]: {
        section: eP.oAB.APPEARANCE,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE],
        parent: eL.s6.APPEARANCE_THEME
      },
      [eL.s6.APPEARANCE_ICON]: {
        section: eP.oAB.APPEARANCE,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE],
        parent: eL.s6.APPEARANCE_THEME
      },
      [eL.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
        section: eP.oAB.APPEARANCE,
        searchableTitles: [eb.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL],
        parent: eL.s6.APPEARANCE
      },
      [eL.s6.APPEARANCE_SCALING_SPACING]: {
        section: eP.oAB.APPEARANCE,
        searchableTitles: [eb.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL],
        parent: eL.s6.APPEARANCE
      },
      [eL.s6.ACCESSIBILITY]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitles: [eb.Z.Messages.ACCESSIBILITY],
        label: eb.Z.Messages.ACCESSIBILITY,
        ariaLabel: eb.Z.Messages.ACCESSIBILITY,
        element: J.Z
      },
      [eL.s6.ACCESSIBILITY_SATURATION]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE],
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL],
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_ROLE_STYLE]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE],
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_TAGS]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE],
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE],
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_CONTRAST]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST],
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_REDUCED_MOTION]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitles: [eb.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION],
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_STICKERS]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitles: [eb.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_MESSAGES]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT],
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_TTS],
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.VOICE_AND_VIDEO]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.VOICE_AND_VIDEO],
        label: eb.Z.Messages.VOICE_AND_VIDEO,
        ariaLabel: eb.Z.Messages.VOICE_AND_VIDEO,
        element: ef.Z,
        predicate: () => j.Z.isSupported()
      },
      [eL.s6.VOICE_AND_VIDEO_DEVICES]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_INPUT_DEVICE, eb.Z.Messages.FORM_LABEL_OUTPUT_DEVICE, eb.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE, eb.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS, eb.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES],
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_INPUT_VOLUME, eb.Z.Messages.FORM_LABEL_OUTPUT_VOLUME, eb.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE, eb.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS, eb.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES],
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_MIC_TEST]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE, eb.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_INPUT_MODE, eb.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY, eb.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_SOUNDS]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.CALL_SOUNDS_SETTINGS],
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.SOUNDBOARD],
        parent: eL.s6.VOICE_AND_VIDEO_SOUNDS
      },
      [eL.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.CALL_SOUNDS_SETTINGS],
        parent: eL.s6.VOICE_AND_VIDEO_SOUNDS
      },
      [eL.s6.VOICE_AND_VIDEO_VIDEO]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.VIDEO_SETTINGS],
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_VIDEO_DEVICE],
        parent: eL.s6.VOICE_AND_VIDEO_VIDEO,
        predicate: () => j.Z.supports(ev.AN.VIDEO)
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.SETTINGS_ADVANCED],
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_CODECS]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE],
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_VOICE_PROCESSING],
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.ECHO_CANCELLATION],
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.NOISE_SUPPRESSION, eb.Z.Messages.NOISE_CANCELLATION_SEARCH_TERM_KRISP],
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => j.Z.isNoiseSuppressionSupported()
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.ADVANCED_VOICE_ACTIVITY],
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => j.Z.isAdvancedVoiceActivitySupported()
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.AUTOMATIC_GAIN_CONTROL],
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => j.Z.isAutomaticGainControlSupported()
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_QOS],
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => j.Z.supports(ev.AN.QOS)
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_ATTENUATION],
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => j.Z.supports(ev.AN.ATTENUATION)
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_SUBSYSTEM],
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => j.Z.supports(ev.AN.LEGACY_AUDIO_SUBSYSTEM) || j.Z.supports(ev.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS],
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => V.isPlatformEmbedded
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_DEBUG],
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => V.isPlatformEmbedded && j.Z.supports(ev.AN.DEBUG_LOGGING) && null != u.Z.fileManager.readLogFiles
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.FORM_CHECKBOX_AEC_DUMP],
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
        predicate: () => j.Z.isAecDumpSupported()
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG],
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
        predicate: () => ("canary" === y.ZP.releaseChannel || "development" === y.ZP.releaseChannel) && ek && j.Z.supports(ev.AN.CONNECTION_REPLAY)
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING],
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING
      },
      [eL.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
        section: eP.oAB.VOICE,
        searchableTitles: [eb.Z.Messages.RESET_VOICE_SETTINGS],
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED
      },
      [eL.s6.POGGERMODE]: {
        section: eP.oAB.POGGERMODE,
        searchableTitles: [eb.Z.Messages.POGGERMODE],
        label: eb.Z.Messages.POGGERMODE,
        ariaLabel: eb.Z.Messages.POGGERMODE,
        element: p.Z,
        predicate: () => R.Z.settingsVisible,
        icon: (0, n.jsx)("img", {
          alt: "",
          src: t(348621),
          className: ej.poggermodeIcon
        })
      },
      [eL.s6.CHAT]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.CHAT],
        label: eb.Z.Messages.CHAT,
        ariaLabel: eb.Z.Messages.CHAT,
        element: eh.Z
      },
      [eL.s6.CHAT_INLINE_MEDIA]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.INLINE_MEDIA_LABEL],
        parent: eL.s6.CHAT
      },
      [eL.s6.CHAT_INLINE_MEDIA_LINKS]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.INLINE_EMBED_MEDIA],
        parent: eL.s6.CHAT_INLINE_MEDIA
      },
      [eL.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.INLINE_ATTACHMENT_MEDIA],
        parent: eL.s6.CHAT_INLINE_MEDIA
      },
      [eL.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.IMAGE_DESCRIPTION],
        parent: eL.s6.CHAT_INLINE_MEDIA
      },
      [eL.s6.CHAT_EMBEDS]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.RENDER_EMBEDS_LABEL],
        parent: eL.s6.CHAT
      },
      [eL.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.RENDER_EMBEDS],
        parent: eL.s6.CHAT_EMBEDS
      },
      [eL.s6.CHAT_EMOJI]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.EMOJI],
        parent: eL.s6.CHAT
      },
      [eL.s6.CHAT_EMOJI_REACTIONS]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.RENDER_REACTIONS],
        parent: eL.s6.CHAT_EMOJI
      },
      [eL.s6.CHAT_EMOJI_EMOTICONS]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.CONVERT_EMOTICONS],
        parent: eL.s6.CHAT_EMOJI
      },
      [eL.s6.CHAT_STICKERS]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
        parent: eL.s6.CHAT
      },
      [eL.s6.CHAT_STICKERS_SUGGESTIONS]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.AUTO_SUGGEST_STICKERS],
        parent: eL.s6.CHAT_STICKERS
      },
      [eL.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.STICKERS_IN_AUTOCOMPLETE],
        parent: eL.s6.CHAT_STICKERS
      },
      [eL.s6.CHAT_TEXT_BOX]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX],
        parent: eL.s6.CHAT
      },
      [eL.s6.CHAT_TEXT_BOX_PREVIEW]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION],
        parent: eL.s6.CHAT_TEXT_BOX
      },
      [eL.s6.CHAT_THREADS]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.THREADS],
        parent: eL.s6.CHAT
      },
      [eL.s6.CHAT_THREADS_SPLIT_VIEW]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION],
        parent: eL.s6.CHAT_THREADS
      },
      [eL.s6.CHAT_SPOILERS]: {
        section: eP.oAB.TEXT,
        searchableTitles: [eb.Z.Messages.SHOW_SPOILER_CONTENT],
        parent: eL.s6.CHAT
      },
      [eL.s6.NOTIFICATIONS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.NOTIFICATIONS],
        label: eb.Z.Messages.NOTIFICATIONS,
        ariaLabel: eb.Z.Messages.NOTIFICATIONS,
        element: eS.Z
      },
      [eL.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE],
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: ["Mention on all messages"],
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL],
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL],
        parent: eL.s6.NOTIFICATIONS,
        predicate: () => (0, V.isWindows)()
      },
      [eL.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE],
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_NEW_SETTINGS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: ["New Notification Settings (Advancd, Staff Only)"],
        parent: eL.s6.NOTIFICATIONS,
        predicate: () => !1
      },
      [eL.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: ["Restore most recent snapshot"],
        parent: eL.s6.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [eL.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: ["Launch Migration"],
        parent: eL.s6.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [eL.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: ["Toggle new system on/off"],
        parent: eL.s6.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [eL.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT],
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_TTS],
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER],
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER],
        parent: eL.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [eL.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER],
        parent: eL.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [eL.s6.NOTIFICATIONS_SOUNDS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.SOUNDS],
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_EMAILS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS],
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION],
        parent: eL.s6.NOTIFICATIONS_EMAILS
      },
      [eL.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL],
        parent: eL.s6.NOTIFICATIONS_EMAILS
      },
      [eL.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS],
        parent: eL.s6.NOTIFICATIONS_EMAILS
      },
      [eL.s6.NOTIFICATIONS_EMAILS_TIPS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS],
        parent: eL.s6.NOTIFICATIONS_EMAILS
      },
      [eL.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS],
        parent: eL.s6.NOTIFICATIONS_EMAILS
      },
      [eL.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING],
        parent: eL.s6.NOTIFICATIONS_EMAILS
      },
      [eL.s6.KEYBINDS]: {
        section: eP.oAB.KEYBINDS,
        searchableTitles: [eb.Z.Messages.KEYBINDS],
        label: eb.Z.Messages.KEYBINDS,
        element: eu.Z
      },
      [eL.s6.LANGUAGE]: {
        section: eP.oAB.LOCALE,
        searchableTitles: [eb.Z.Messages.LANGUAGE],
        label: eb.Z.Messages.LANGUAGE,
        element: eT.Z
      },
      [eL.s6.WINDOW_SETTINGS]: {
        section: eP.oAB.WINDOWS,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS],
        label: eb.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: ep.Z,
        predicate: () => V.isPlatformEmbedded && (0, V.isWindows)()
      },
      [eL.s6.LINUX_SETTINGS]: {
        section: eP.oAB.LINUX,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_LINUX_SETTINGS],
        label: eb.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: eB,
        predicate: () => V.isPlatformEmbedded && (0, V.isLinux)()
      },
      [eL.s6.STREAMER_MODE]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitles: [eb.Z.Messages.STREAMER_MODE],
        label: eb.Z.Messages.STREAMER_MODE,
        ariaLabel: eb.Z.Messages.STREAMER_MODE,
        element: eg.Z
      },
      [eL.s6.STREAMER_MODE_INTEGRATIONS]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE],
        parent: eL.s6.STREAMER_MODE
      },
      [eL.s6.STREAMER_MODE_ENABLE]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitles: [eb.Z.Messages.ENABLE_STREAMER_MODE_LABEL],
        parent: eL.s6.STREAMER_MODE
      },
      [eL.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitles: [eb.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL],
        parent: eL.s6.STREAMER_MODE
      },
      [eL.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitles: [eb.Z.Messages.HIDE_INSTANT_INVITES_LABEL],
        parent: eL.s6.STREAMER_MODE
      },
      [eL.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitles: [eb.Z.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE],
        parent: eL.s6.STREAMER_MODE
      },
      [eL.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitles: [eb.Z.Messages.DISABLE_NOTIFICATIONS_LABEL],
        parent: eL.s6.STREAMER_MODE
      },
      [eL.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitles: [eb.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL],
        parent: eL.s6.STREAMER_MODE,
        predicate: () => {
          var e, s, t;
          return null !== (t = null === u.Z || void 0 === u.Z ? void 0 : null === (s = u.Z.window) || void 0 === s ? void 0 : null === (e = s.supportsContentProtection) || void 0 === e ? void 0 : e.call(s)) && void 0 !== t && t
        }
      },
      [eL.s6.SPEED_TEST]: {
        section: eP.oAB.SPEED_TEST,
        searchableTitles: ["Speed Test"],
        label: "Speed Test",
        element: Q.Z,
        predicate: () => v.Z.isSupported() && H.Z.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [eL.s6.SETTINGS_ADVANCED]: {
        section: eP.oAB.ADVANCED,
        searchableTitles: [eb.Z.Messages.SETTINGS_ADVANCED],
        label: eb.Z.Messages.SETTINGS_ADVANCED,
        ariaLabel: eb.Z.Messages.SETTINGS_ADVANCED,
        element: es.Z
      },
      [eL.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
        section: eP.oAB.ADVANCED,
        searchableTitles: [eb.Z.Messages.DEVELOPER_MODE],
        parent: eL.s6.SETTINGS_ADVANCED,
        predicate: () => G.wS
      },
      [eL.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
        section: eP.oAB.ADVANCED,
        searchableTitles: [eb.Z.Messages.HARDWARE_ACCELERATION],
        parent: eL.s6.SETTINGS_ADVANCED,
        predicate: () => V.isPlatformEmbedded
      },
      [eL.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
        section: eP.oAB.ADVANCED,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_SHOW_LIBRARY],
        parent: eL.s6.SETTINGS_ADVANCED,
        predicate: () => eX
      },
      [eL.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
        section: eP.oAB.ADVANCED,
        searchableTitles: [eb.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE],
        parent: eL.s6.SETTINGS_ADVANCED,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME]: {
        section: eP.oAB.ADVANCED,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_HOME_AUTO_NAV],
        parent: eL.s6.SETTINGS_ADVANCED
      },
      [eL.s6.ACTIVITY_PRIVACY]: {
        section: eP.oAB.ACTIVITY_PRIVACY,
        searchableTitles: [eb.Z.Messages.ACTIVITY_PRIVACY],
        label: eb.Z.Messages.ACTIVITY_PRIVACY,
        ariaLabel: eb.Z.Messages.ACTIVITY_PRIVACY,
        element: ee.Z,
        predicate: () => !ey
      },
      [eL.s6.ACTIVITY_PRIVACY_STATUS]: {
        section: ey ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
        searchableTitles: [eb.Z.Messages.ACTIVITY_STATUS],
        parent: ey ? eL.s6.GAMES : eL.s6.ACTIVITY_PRIVACY
      },
      [eL.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
        section: ey ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
        searchableTitles: [eb.Z.Messages.ACTIVITY_PARTY_PRIVACY],
        parent: ey ? eL.s6.GAMES : eL.s6.ACTIVITY_PRIVACY
      },
      [eL.s6.REGISTERED_GAMES]: {
        section: eP.oAB.REGISTERED_GAMES,
        searchableTitles: [eb.Z.Messages.REGISTERED_GAMES],
        label: eb.Z.Messages.REGISTERED_GAMES,
        element: ed.Z,
        predicate: () => !ey && (0, eM.Jw)()
      },
      [eL.s6.OVERLAY]: {
        section: eP.oAB.OVERLAY,
        searchableTitles: [eb.Z.Messages.OVERLAY],
        label: eb.Z.Messages.OVERLAY,
        element: eI.Z,
        predicate: () => !ey && eF
      },
      [eL.s6.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, I.Z)(!0),
        searchableTitles: [eb.Z.Messages.WHATS_NEW],
        label: eb.Z.Messages.WHATS_NEW
      },
      [eL.s6.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          B.default.track(eP.rMx.USER_SETTINGS_MERCH_LINK_CLICKED), (0, F.q)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              B.default.track(eP.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, T.Z)(e)
            }
          })
        },
        searchableTitles: [eb.Z.Messages.MERCHANDISE],
        label: eb.Z.Messages.MERCHANDISE,
        ariaLabel: eb.Z.Messages.MERCHANDISE
      },
      [eL.s6.HYPESQUAD]: {
        section: eP.oAB.HYPESQUAD_ONLINE,
        searchableTitles: [eb.Z.Messages.USER_SETTINGS_HYPESQUAD],
        label: eb.Z.Messages.USER_SETTINGS_HYPESQUAD,
        element: e_.Z
      },
      [eL.s6.EXPERIMENTS]: {
        section: eP.oAB.EXPERIMENTS,
        searchableTitles: ["Experiments"],
        label: "Experiments",
        element: ex.Z,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Developer Options"],
        label: "Developer Options",
        ariaLabel: "Developer Options",
        element: eo.Z,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_FLAGS]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Developer Options Flags"],
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Tracing Requests"],
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Forced Canary"],
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Gateway Events To Console"],
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Rpc Events Commands"],
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Analytics Events Logging"],
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Source Maps"],
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Analytics Debugger View"],
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Idle Status Indicator"],
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => ek && b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Accessibility Auditing"],
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => !1
      },
      [eL.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Preview Unpublished Collections"],
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => ek && b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Override Client Side"],
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Override Client Side Premium Type"],
        parent: eL.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Override Client Side Account Created Data"],
        parent: eL.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Open Overlay"],
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Reset Socket"],
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Clear Caches"],
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => S.q && b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_CRASHES]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Crashes"],
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Survey Override"],
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Changelog Override"],
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitles: ["Build Override"],
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.HOTSPOT_OPTIONS]: {
        section: eP.oAB.HOTSPOT_OPTIONS,
        searchableTitles: ["Hotspot Options"],
        label: "Hotspot Options",
        element: w.Z,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: eP.oAB.DISMISSIBLE_CONTENT_OPTIONS,
        searchableTitles: ["Dismissible Contents"],
        label: "Dismissible Contents",
        element: O.Z,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.PAYMENT_FLOW_MODALS]: {
        section: eP.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
        searchableTitles: ["Payment Flow Modals"],
        label: "Payment Flow Modals",
        element: W.Z,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.TEXT_PLAYGROUND]: {
        section: eP.oAB.TEXT_PLAYGROUND,
        searchableTitles: ["Text Playground"],
        label: "Text Playground",
        element: eR.Z,
        predicate: () => (0, q.D)() || b.Z.isDeveloper
      },
      [eL.s6.DESIGN_SYSTEMS]: {
        section: eP.oAB.DESIGN_SYSTEMS,
        searchableTitles: ["Design Systems"],
        label: "Design Systems",
        element: er.Z,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.TEXT_COMPONENTS]: {
        section: eP.oAB.TEXT_COMPONENT,
        searchableTitles: ["Text Components"],
        label: "Text Components",
        element: X.Z,
        predicate: () => (0, q.D)() || b.Z.isDeveloper
      },
      [eL.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: eP.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
        searchableTitles: ["Profile Effects Preview Tool"],
        label: "Profile Effects Preview Tool",
        element: A.Z,
        predicate: () => b.Z.isDeveloper
      },
      [eL.s6.QUEST_PREVIEW_TOOL]: {
        section: eP.oAB.QUEST_PREVIEW_TOOL,
        searchableTitles: ["Quest Preview Tool"],
        label: "Quest Preview Tool",
        element: Z.Z,
        predicate: () => (0, P.X7)({
          location: eZ.dr.QUEST_PREVIEW_TOOL
        })
      },
      [eL.s6.LOGOUT]: {
        section: "logout",
        onClick: () => {
          (0, o.openModal)(e => (0, n.jsx)(o.ConfirmModal, {
            header: eb.Z.Messages.LOGOUT,
            confirmText: eb.Z.Messages.LOGOUT,
            cancelText: eb.Z.Messages.CANCEL,
            onCancel: e.onClose,
            onConfirm: () => c.Z.logout(),
            ...e,
            children: (0, n.jsx)(o.Text, {
              variant: "text-md/normal",
              children: eb.Z.Messages.USER_SETTINGS_CONFIRM_LOGOUT
            })
          }))
        },
        label: eb.Z.Messages.LOGOUT,
        ariaLabel: eb.Z.Messages.LOGOUT,
        icon: (0, n.jsx)(o.DoorExitIcon, {
          size: "xs",
          color: "currentColor"
        })
      },
      [eL.s6.SOCIAL_LINKS]: {
        section: E.ID.CUSTOM,
        element: z.Z
      },
      [eL.s6.CLIENT_DEBUG_INFO]: {
        section: E.ID.CUSTOM,
        element: k.Z
      }
    })
  }