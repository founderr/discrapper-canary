t.d(s, {
  i: function() {
    return eb
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
  D = t(804545),
  p = t(813732),
  L = t(398140),
  P = t(564344),
  Z = t(977156),
  f = t(652380),
  v = t(171156),
  j = t(906467),
  U = t(131951),
  B = t(25990),
  b = t(626135),
  G = t(49012),
  F = t(358085),
  V = t(998502),
  y = t(392735),
  Y = t(61160),
  H = t(604227),
  k = t(38915),
  w = t(498639),
  W = t(748717),
  K = t(419636),
  z = t(35426),
  Q = t(799071),
  X = t(601433),
  q = t(154022),
  J = t(393681),
  $ = t(309739),
  ee = t(64914),
  es = t(501348),
  et = t(795594),
  en = t(443702),
  ei = t(327192),
  ea = t(177508),
  el = t(956699),
  er = t(54942),
  eo = t(15780),
  ec = t(293389),
  eE = t(88624),
  ed = t(387747),
  e_ = t(389650),
  eT = t(649157),
  eS = t(593648),
  eu = t(327885),
  eI = t(595242),
  eN = t(301121),
  eA = t(207874),
  eC = t(463153),
  eO = t(36192),
  em = t(338345),
  eh = t(400287),
  eg = t(554042),
  eR = t(200645),
  eM = t(287490),
  ex = t(168308),
  eD = t(277329),
  ep = t(674116),
  eL = t(726985),
  eP = t(981631),
  eZ = t(46140),
  ef = t(65154),
  ev = t(689938),
  ej = t(422237);
let eU = () => {
    let e = "Settings list view",
      s = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
    return x.F.getCurrentConfig({
      location: e
    }).enabled && s.push(a.z.BRAND_REFRESH_NEW_BADGE), D.n.getCurrentConfig({
      location: e
    }).enabled && s.push(a.z.PRIDE_ICONS_APPEARANCE_BADGE), s
  },
  eB = eR.Z,
  eb = e => {
    let {
      unseenGiftCount: s,
      showPrepaidPaymentPastDueWarning: x,
      impressionSource: D,
      numOfPendingFamilyRequests: eb,
      isOverlaySupported: eG,
      isClipsBetaTagShowing: eF = !1,
      shouldMergeGameSettings: eV,
      isUserSettingsSearchEnabled: ey,
      isKeywordFilteringEnabled: eY,
      isStaff: eH,
      isInappropriateConversationWarningEnabled: ek,
      paymentsBlocked: ew,
      isEligibleForQuests: eW,
      showGiftNitro: eK
    } = e;
    return Object.freeze({
      [eL.s6.SEARCH_BAR]: {
        section: _.ID.CUSTOM,
        element: eA.Z,
        predicate: () => ey
      },
      [eL.s6.SEARCH_NO_RESULTS]: {
        section: _.ID.CUSTOM,
        element: eC.Z,
        predicate: () => ey
      },
      [eL.s6.ACCOUNT]: {
        section: eP.oAB.ACCOUNT,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
        label: ev.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: ev.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: J.Z
      },
      [eL.s6.ACCOUNT_PROFILE]: {
        searchableTitle: ev.Z.Messages.PROFILE,
        parent: eL.s6.ACCOUNT,
        section: eP.oAB.ACCOUNT
      },
      [eL.s6.ACCOUNT_DISPLAY_NAME]: {
        searchableTitle: ev.Z.Messages.DISPLAY_NAME,
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_PROFILE
      },
      [eL.s6.ACCOUNT_PHONE_NUMBER]: {
        searchableTitle: ev.Z.Messages.CHANGE_PHONE_NUMBER,
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_PROFILE
      },
      [eL.s6.ACCOUNT_USERNAME]: {
        searchableTitle: ev.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE,
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_PROFILE
      },
      [eL.s6.ACCOUNT_EMAIL]: {
        searchableTitle: ev.Z.Messages.CHANGE_EMAIL,
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_PROFILE
      },
      [eL.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eL.s6.ACCOUNT_CHANGE_PASSWORD]: {
        searchableTitle: ev.Z.Messages.CHANGE_PASSWORD,
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eL.s6.ACCOUNT_CONFIRM_PASSWORD]: {
        searchableTitle: ev.Z.Messages.FORM_LABEL_CONFIRM_PASSWORD,
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
        searchableTitle: ev.Z.Messages.SETTINGS_TWO_FA,
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [eL.s6.ACCOUNT_ENABLE_2FA]: {
        searchableTitle: ev.Z.Messages.TWO_FA_ENABLE,
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.s6.ACCOUNT_REMOVE_2FA]: {
        searchableTitle: ev.Z.Messages.TWO_FA_REMOVE,
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
        searchableTitle: ev.Z.Messages.TWO_FA_BACKUP_CODE,
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.s6.ACCOUNT_SMS_BACKUP]: {
        searchableTitle: ev.Z.Messages.MFA_SMS_AUTH,
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.s6.ACCOUNT_SECURITY_KEYS]: {
        searchableTitle: ev.Z.Messages.TWO_FA_WEBAUTHN_REGISTER,
        section: eP.oAB.ACCOUNT,
        parent: eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [eL.s6.ACCOUNT_REMOVAL]: {
        section: eP.oAB.ACCOUNT,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION,
        parent: eL.s6.ACCOUNT
      },
      [eL.s6.ACCOUNT_DISABLE_ACCOUNT]: {
        section: eP.oAB.ACCOUNT,
        searchableTitle: ev.Z.Messages.DISABLE_ACCOUNT,
        parent: eL.s6.ACCOUNT_REMOVAL
      },
      [eL.s6.ACCOUNT_DELETE_ACCOUNT]: {
        section: eP.oAB.ACCOUNT,
        searchableTitle: ev.Z.Messages.DELETE_ACCOUNT,
        parent: eL.s6.ACCOUNT_DISABLE_ACCOUNT
      },
      [eL.s6.GAMES]: {
        section: eP.oAB.GAMES,
        searchableTitle: ev.Z.Messages.GAMES,
        label: ev.Z.Messages.GAMES,
        ariaLabel: ev.Z.Messages.GAMES,
        element: eD.Z,
        predicate: () => eV
      },
      [eL.s6.GAMES_MY_GAMES]: {
        section: eP.oAB.GAMES,
        searchableTitle: ev.Z.Messages.MY_GAMES,
        parent: eL.s6.GAMES
      },
      [eL.s6.GAMES_CLIPS]: {
        section: eP.oAB.GAMES,
        searchableTitle: ev.Z.Messages.CLIPS,
        parent: eL.s6.GAMES
      },
      [eL.s6.GAMES_OVERLAY]: {
        section: eP.oAB.GAMES,
        searchableTitle: ev.Z.Messages.OVERLAY,
        parent: eL.s6.GAMES
      },
      [eL.s6.GAMES_ACTIVITY_PRIVACY]: {
        section: eP.oAB.GAMES,
        searchableTitle: ev.Z.Messages.ACTIVITY_PRIVACY,
        parent: eL.s6.GAMES
      },
      [eL.s6.PROFILE_CUSTOMIZATION]: {
        section: eP.oAB.PROFILE_CUSTOMIZATION,
        type: _.bT.WIDE,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_PROFILES,
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
            (0, h.It)(), (0, E.P6)(), d.Z.clearSubsection(eP.oAB.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [eL.s6.PROFILE_DISPLAY_NAME]: {
        section: eP.oAB.PROFILE_CUSTOMIZATION,
        searchableTitle: ev.Z.Messages.DISPLAY_NAME,
        parent: eL.s6.PROFILE_CUSTOMIZATION
      },
      [eL.s6.PROFILE_USER_PROFILE]: {
        section: eP.oAB.PROFILE_CUSTOMIZATION,
        searchableTitle: ev.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE,
        parent: eL.s6.PROFILE_CUSTOMIZATION
      },
      [eL.s6.PROFILE_SERVER_PROFILES]: {
        section: eP.oAB.PROFILE_CUSTOMIZATION,
        searchableTitle: ev.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY,
        parent: eL.s6.PROFILE_CUSTOMIZATION
      },
      [eL.s6.PRIVACY_AND_SAFETY]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        label: ev.Z.Messages.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.PRIVACY_AND_SAFETY,
        ariaLabel: ev.Z.Messages.PRIVACY_AND_SAFETY,
        element: eN.Z
      },
      [eL.s6.PRIVACY_USER_SETTINGS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.PRIVACY_AND_SAFETY,
        parent: eL.s6.PRIVACY_AND_SAFETY
      },
      [eL.s6.PRIVACY_SENSITIVE_MEDIA]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER,
        parent: eL.s6.PRIVACY_USER_SETTINGS
      },
      [eL.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.SETTINGS_DM_SPAM_FILTER,
        parent: eL.s6.PRIVACY_USER_SETTINGS
      },
      [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.USER_DM_SETTINGS,
        parent: eL.s6.PRIVACY_USER_SETTINGS
      },
      [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.NEW_GUILDS_DM_ALLOWED,
        parent: eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER,
        parent: eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER,
        parent: eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.NSFW_DM_COMMANDS_HEADER,
        parent: eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [eL.s6.PRIVACY_DATA_PRIVACY]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.SETTINGS_DATA_PRIVACY_CONTROLS,
        parent: eL.s6.PRIVACY_USER_SETTINGS
      },
      [eL.s6.PRIVACY_DATA_IMPROVE_DISCORD]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE,
        parent: eL.s6.PRIVACY_DATA_PRIVACY
      },
      [eL.s6.PRIVACY_DATA_PERSONALIZE]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE,
        parent: eL.s6.PRIVACY_DATA_PRIVACY
      },
      [eL.s6.PRIVACY_DATA_QUESTS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT,
        parent: eL.s6.PRIVACY_DATA_PRIVACY
      },
      [eL.s6.PRIVACY_DATA_BASIC_SERVICE]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        parent: eL.s6.PRIVACY_DATA_PRIVACY,
        searchableTitle: eL.CF
      },
      [eL.s6.PRIVACY_DATA_REQUEST]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD,
        parent: eL.s6.PRIVACY_DATA_PRIVACY
      },
      [eL.s6.PRIVACY_STAFF_ONLY]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER,
        parent: eL.s6.PRIVACY_USER_SETTINGS,
        predicate: () => eH
      },
      [eL.s6.PRIVACY_KEYWORD_FILTER]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE,
        parent: eL.s6.PRIVACY_USER_SETTINGS,
        predicate: () => eY
      },
      [eL.s6.PRIVACY_TERMS_POLICY]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        parent: eL.s6.PRIVACY_USER_SETTINGS,
        searchableTitle: eL.CF
      },
      [eL.s6.PRIVACY_SAFETY_ALERTS]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.SAFETY_ALERTS_SETTING_TITLE,
        parent: eL.s6.PRIVACY_USER_SETTINGS,
        predicate: () => ek
      },
      [eL.s6.PRIVACY_ACCOUNT_STANDING]: {
        section: eP.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ev.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
        parent: eL.s6.PRIVACY_AND_SAFETY
      },
      [eL.s6.PRIVACY_FAMILY_CENTER]: {
        section: eP.oAB.FAMILY_CENTER,
        searchableTitle: ev.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        label: ev.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: ev.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: er.Z,
        badgeCount: eb,
        newIndicator: (0, n.jsx)(r.TextBadge, {
          text: ev.Z.Messages.NEW,
          color: O.Z.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE]
      },
      [eL.s6.AUTHORIZED_APPS]: {
        section: eP.oAB.AUTHORIZED_APPS,
        searchableTitle: ev.Z.Messages.AUTHORIZED_APPS,
        label: ev.Z.Messages.AUTHORIZED_APPS,
        element: et.Z
      },
      [eL.s6.SESSIONS]: {
        section: eP.oAB.SESSIONS,
        searchableTitle: ev.Z.Messages.AUTH_SESSIONS,
        label: ev.Z.Messages.AUTH_SESSIONS,
        ariaLabel: ev.Z.Messages.AUTH_SESSIONS,
        element: eO.Z,
        newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
        predicate: () => y.Z.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [eL.s6.CONNECTIONS]: {
        section: eP.oAB.CONNECTIONS,
        searchableTitle: ev.Z.Messages.CONNECTIONS,
        label: ev.Z.Messages.CONNECTIONS,
        ariaLabel: ev.Z.Messages.CONNECTIONS,
        element: ei.Z,
        impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: D
        },
        newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION]
      },
      [eL.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
        section: eP.oAB.CONNECTIONS,
        searchableTitle: ev.Z.Messages.CONNECTED_ACCOUNTS,
        parent: eL.s6.CONNECTIONS,
        element: ei.Z
      },
      [eL.s6.CLIPS]: {
        section: eP.oAB.CLIPS,
        searchableTitle: ev.Z.Messages.CLIPS,
        label: ev.Z.Messages.CLIPS,
        ariaLabel: ev.Z.Messages.CLIPS,
        icon: eF ? (0, n.jsx)(N.Z, {}) : void 0,
        element: A.Z,
        predicate: () => !eV
      },
      [eL.s6.FRIEND_REQUESTS]: {
        section: eP.oAB.FRIEND_REQUESTS,
        searchableTitle: ev.Z.Messages.FRIEND_REQUESTS,
        label: ev.Z.Messages.FRIEND_REQUESTS,
        element: eo.Z
      },
      [eL.s6.PREMIUM]: {
        section: eP.oAB.PREMIUM,
        ariaLabel: ev.Z.Messages.PREMIUM,
        searchableTitle: ev.Z.Messages.PREMIUM,
        label: ev.Z.Messages.PREMIUM,
        element: W.Z,
        className: ej.premiumTab
      },
      [eL.s6.GUILD_BOOSTING]: {
        section: eP.oAB.GUILD_BOOSTING,
        searchableTitle: ev.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        label: ev.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: eI.Z
      },
      [eL.s6.SUBSCRIPTIONS]: {
        section: eP.oAB.SUBSCRIPTIONS,
        ariaLabel: ev.Z.Messages.SUBSCRIPTIONS_TITLE,
        searchableTitle: ev.Z.Messages.SUBSCRIPTIONS_TITLE,
        label: ev.Z.Messages.SUBSCRIPTIONS_TITLE,
        element: p.Z,
        icon: x ? (0, n.jsx)(r.CircleExclamationPointIcon, {
          size: "xs",
          color: l.Z.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [eL.s6.SUBSCRIPTIONS_CREDITS]: {
        section: eP.oAB.SUBSCRIPTIONS,
        searchableTitle: ev.Z.Messages.BILLING_SUBSCRIPTION_CREDIT,
        parent: eL.s6.SUBSCRIPTIONS
      },
      [eL.s6.GIFT_INVENTORY]: {
        section: eP.oAB.INVENTORY,
        searchableTitle: ev.Z.Messages.GIFT_INVENTORY,
        label: ev.Z.Messages.GIFT_INVENTORY,
        element: ed.Z,
        ariaLabel: ev.Z.Messages.GIFT_INVENTORY,
        badgeCount: s
      },
      [eL.s6.GIFT_NITRO]: {
        section: eP.oAB.INVENTORY,
        searchableTitle: ev.Z.Messages.GIFT_NITRO,
        parent: eL.s6.GIFT_INVENTORY,
        predicate: () => !ew && eK
      },
      [eL.s6.GIFT_CODE_REDEMPTION]: {
        section: eP.oAB.INVENTORY,
        searchableTitle: ev.Z.Messages.GIFT_INVENTORY_REDEEM_CODES,
        parent: eL.s6.GIFT_INVENTORY,
        predicate: () => !ew
      },
      [eL.s6.GIFT_INVENTORY_QUESTS]: {
        section: eP.oAB.INVENTORY,
        searchableTitle: ev.Z.Messages.QUESTS,
        parent: eL.s6.GIFT_INVENTORY,
        predicate: () => eW
      },
      [eL.s6.GIFT_INVENTORY_LIST]: {
        section: eP.oAB.INVENTORY,
        searchableTitle: ev.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED,
        parent: eL.s6.GIFT_INVENTORY,
        predicate: () => !ew
      },
      [eL.s6.GIFT_BLOCKED_PAYMENTS]: {
        section: eP.oAB.INVENTORY,
        searchableTitle: ev.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
        parent: eL.s6.GIFT_INVENTORY,
        predicate: () => ew
      },
      [eL.s6.BILLING]: {
        section: eP.oAB.BILLING,
        searchableTitle: ev.Z.Messages.BILLING,
        label: ev.Z.Messages.BILLING,
        ariaLabel: ev.Z.Messages.BILLING,
        element: en.Z
      },
      [eL.s6.BILLING_PAYMENT_METHODS]: {
        section: eP.oAB.BILLING,
        searchableTitle: ev.Z.Messages.BILLING_PAYMENT_SOURCES,
        parent: eL.s6.BILLING
      },
      [eL.s6.BILLING_TRANSACTION_HISTORY]: {
        section: eP.oAB.BILLING,
        searchableTitle: ev.Z.Messages.BILLING_PAYMENT_HISTORY,
        parent: eL.s6.BILLING
      },
      [eL.s6.APPEARANCE]: {
        section: eP.oAB.APPEARANCE,
        searchableTitle: ev.Z.Messages.APPEARANCE,
        label: ev.Z.Messages.APPEARANCE,
        ariaLabel: ev.Z.Messages.APPEARANCE,
        element: es.Z,
        newIndicator: (0, n.jsx)(r.PremiumBadge, {
          text: ev.Z.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: eU()
      },
      [eL.s6.APPEARANCE_THEME]: {
        section: eP.oAB.APPEARANCE,
        searchableTitle: ev.Z.Messages.THEME,
        parent: eL.s6.APPEARANCE
      },
      [eL.s6.APPEARANCE_COLOR]: {
        section: eP.oAB.APPEARANCE,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE,
        parent: eL.s6.APPEARANCE_THEME
      },
      [eL.s6.APPEARANCE_ICON]: {
        section: eP.oAB.APPEARANCE,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE,
        parent: eL.s6.APPEARANCE_THEME
      },
      [eL.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
        section: eP.oAB.APPEARANCE,
        searchableTitle: ev.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL,
        parent: eL.s6.APPEARANCE
      },
      [eL.s6.APPEARANCE_SCALING_SPACING]: {
        section: eP.oAB.APPEARANCE,
        searchableTitle: ev.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL,
        parent: eL.s6.APPEARANCE
      },
      [eL.s6.ACCESSIBILITY]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitle: ev.Z.Messages.ACCESSIBILITY,
        label: ev.Z.Messages.ACCESSIBILITY,
        ariaLabel: ev.Z.Messages.ACCESSIBILITY,
        element: q.Z
      },
      [eL.s6.ACCESSIBILITY_SATURATION]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitle: ev.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE,
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitle: ev.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL,
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_ROLE_STYLE]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitle: ev.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_TAGS]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitle: ev.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE,
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitle: ev.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE,
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_CONTRAST]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitle: ev.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST,
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_REDUCED_MOTION]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitle: ev.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION,
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_STICKERS]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitle: ev.Z.Messages.STICKERS_AUTO_PLAY_HEADING,
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_MESSAGES]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitle: ev.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT,
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
        section: eP.oAB.ACCESSIBILITY,
        searchableTitle: ev.Z.Messages.FORM_LABEL_TTS,
        parent: eL.s6.ACCESSIBILITY
      },
      [eL.s6.VOICE_AND_VIDEO]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.VOICE_AND_VIDEO,
        label: ev.Z.Messages.VOICE_AND_VIDEO,
        ariaLabel: ev.Z.Messages.VOICE_AND_VIDEO,
        element: ep.Z,
        predicate: () => U.Z.isSupported()
      },
      [eL.s6.VOICE_AND_VIDEO_DEVICES]: {
        section: eP.oAB.VOICE,
        searchableTitle: "".concat(ev.Z.Messages.FORM_LABEL_INPUT_DEVICE, " ").concat(ev.Z.Messages.FORM_LABEL_OUTPUT_DEVICE),
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
        section: eP.oAB.VOICE,
        searchableTitle: "".concat(ev.Z.Messages.FORM_LABEL_INPUT_VOLUME, " ").concat(ev.Z.Messages.FORM_LABEL_OUTPUT_VOLUME),
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_MIC_TEST]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE,
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.FORM_LABEL_INPUT_MODE,
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY,
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_SOUNDS]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.CALL_SOUNDS_SETTINGS,
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.SOUNDBOARD,
        parent: eL.s6.VOICE_AND_VIDEO_SOUNDS
      },
      [eL.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.CALL_SOUNDS_SETTINGS,
        parent: eL.s6.VOICE_AND_VIDEO_SOUNDS
      },
      [eL.s6.VOICE_AND_VIDEO_VIDEO]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.VIDEO_SETTINGS,
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.FORM_LABEL_VIDEO_DEVICE,
        parent: eL.s6.VOICE_AND_VIDEO_VIDEO,
        predicate: () => U.Z.supports(ef.AN.VIDEO)
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.SETTINGS_ADVANCED,
        parent: eL.s6.VOICE_AND_VIDEO
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_CODECS]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE,
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.FORM_LABEL_VOICE_PROCESSING,
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.ECHO_CANCELLATION,
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.Z.getEchoCancellation()
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.NOISE_SUPPRESSION,
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.Z.isNoiseSuppressionSupported()
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.ADVANCED_VOICE_ACTIVITY,
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.Z.isAdvancedVoiceActivitySupported()
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.AUTOMATIC_GAIN_CONTROL,
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => U.Z.isAutomaticGainControlSupported()
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.FORM_LABEL_QOS,
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => U.Z.supports(ef.AN.QOS)
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.FORM_LABEL_ATTENUATION,
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => U.Z.supports(ef.AN.ATTENUATION)
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.FORM_LABEL_SUBSYSTEM,
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => U.Z.supports(ef.AN.LEGACY_AUDIO_SUBSYSTEM) || U.Z.supports(ef.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS,
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => F.isPlatformEmbedded
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.FORM_LABEL_DEBUG,
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => F.isPlatformEmbedded && U.Z.supports(ef.AN.DEBUG_LOGGING) && null != T.Z.fileManager.readLogFiles
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.FORM_CHECKBOX_AEC_DUMP,
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
        predicate: () => U.Z.isAecDumpSupported()
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG,
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
        predicate: () => ("canary" === V.ZP.releaseChannel || "development" === V.ZP.releaseChannel) && eH && U.Z.supports(ef.AN.CONNECTION_REPLAY)
      },
      [eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING,
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING
      },
      [eL.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
        section: eP.oAB.VOICE,
        searchableTitle: ev.Z.Messages.RESET_VOICE_SETTINGS,
        parent: eL.s6.VOICE_AND_VIDEO_ADVANCED
      },
      [eL.s6.POGGERMODE]: {
        section: eP.oAB.POGGERMODE,
        searchableTitle: ev.Z.Messages.POGGERMODE,
        label: ev.Z.Messages.POGGERMODE,
        ariaLabel: ev.Z.Messages.POGGERMODE,
        element: M.Z,
        predicate: () => R.Z.settingsVisible,
        icon: (0, n.jsx)("img", {
          alt: "",
          src: t(348621),
          className: ej.poggermodeIcon
        })
      },
      [eL.s6.CHAT]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.CHAT,
        label: ev.Z.Messages.CHAT,
        ariaLabel: ev.Z.Messages.CHAT,
        element: eh.Z
      },
      [eL.s6.CHAT_INLINE_MEDIA]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.INLINE_MEDIA_LABEL,
        parent: eL.s6.CHAT
      },
      [eL.s6.CHAT_INLINE_MEDIA_LINKS]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.INLINE_EMBED_MEDIA,
        parent: eL.s6.CHAT_INLINE_MEDIA
      },
      [eL.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.INLINE_ATTACHMENT_MEDIA,
        parent: eL.s6.CHAT_INLINE_MEDIA
      },
      [eL.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.IMAGE_DESCRIPTION,
        parent: eL.s6.CHAT_INLINE_MEDIA
      },
      [eL.s6.CHAT_EMBEDS]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.RENDER_EMBEDS_LABEL,
        parent: eL.s6.CHAT
      },
      [eL.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.RENDER_EMBEDS,
        parent: eL.s6.CHAT_EMBEDS
      },
      [eL.s6.CHAT_EMOJI]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.EMOJI,
        parent: eL.s6.CHAT
      },
      [eL.s6.CHAT_EMOJI_REACTIONS]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.RENDER_REACTIONS,
        parent: eL.s6.CHAT_EMOJI
      },
      [eL.s6.CHAT_EMOJI_EMOTICONS]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.CONVERT_EMOTICONS,
        parent: eL.s6.CHAT_EMOJI
      },
      [eL.s6.CHAT_STICKERS]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.STICKERS_AUTO_PLAY_HEADING,
        parent: eL.s6.CHAT
      },
      [eL.s6.CHAT_STICKERS_SUGGESTIONS]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.AUTO_SUGGEST_STICKERS,
        parent: eL.s6.CHAT_STICKERS
      },
      [eL.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.STICKERS_IN_AUTOCOMPLETE,
        parent: eL.s6.CHAT_STICKERS
      },
      [eL.s6.CHAT_TEXT_BOX]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX,
        parent: eL.s6.CHAT
      },
      [eL.s6.CHAT_TEXT_BOX_PREVIEW]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION,
        parent: eL.s6.CHAT_TEXT_BOX
      },
      [eL.s6.CHAT_THREADS]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.THREADS,
        parent: eL.s6.CHAT
      },
      [eL.s6.CHAT_THREADS_SPLIT_VIEW]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION,
        parent: eL.s6.CHAT_THREADS
      },
      [eL.s6.CHAT_SPOILERS]: {
        section: eP.oAB.TEXT,
        searchableTitle: ev.Z.Messages.SHOW_SPOILER_CONTENT,
        parent: eL.s6.CHAT
      },
      [eL.s6.NOTIFICATIONS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.NOTIFICATIONS,
        label: ev.Z.Messages.NOTIFICATIONS,
        ariaLabel: ev.Z.Messages.NOTIFICATIONS,
        element: eS.Z
      },
      [eL.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE,
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: "Mention on all messages",
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL,
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL,
        parent: eL.s6.NOTIFICATIONS,
        predicate: () => (0, F.isWindows)()
      },
      [eL.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE,
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_NEW_SETTINGS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: "New Notification Settings (Advancd, Staff Only)",
        parent: eL.s6.NOTIFICATIONS,
        predicate: () => !1
      },
      [eL.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: "Restore most recent snapshot",
        parent: eL.s6.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [eL.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: "Launch Migration",
        parent: eL.s6.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [eL.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: "Toggle new system on/off",
        parent: eL.s6.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [eL.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.FORM_LABEL_TTS,
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER,
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER,
        parent: eL.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [eL.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER,
        parent: eL.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [eL.s6.NOTIFICATIONS_SOUNDS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.SOUNDS,
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_EMAILS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS,
        parent: eL.s6.NOTIFICATIONS
      },
      [eL.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION,
        parent: eL.s6.NOTIFICATIONS_EMAILS
      },
      [eL.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL,
        parent: eL.s6.NOTIFICATIONS_EMAILS
      },
      [eL.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS,
        parent: eL.s6.NOTIFICATIONS_EMAILS
      },
      [eL.s6.NOTIFICATIONS_EMAILS_TIPS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS,
        parent: eL.s6.NOTIFICATIONS_EMAILS
      },
      [eL.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS,
        parent: eL.s6.NOTIFICATIONS_EMAILS
      },
      [eL.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
        section: eP.oAB.NOTIFICATIONS,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING,
        parent: eL.s6.NOTIFICATIONS_EMAILS
      },
      [eL.s6.KEYBINDS]: {
        section: eP.oAB.KEYBINDS,
        searchableTitle: ev.Z.Messages.KEYBINDS,
        label: ev.Z.Messages.KEYBINDS,
        element: e_.Z
      },
      [eL.s6.LANGUAGE]: {
        section: eP.oAB.LOCALE,
        searchableTitle: ev.Z.Messages.LANGUAGE,
        label: ev.Z.Messages.LANGUAGE,
        element: eT.Z
      },
      [eL.s6.WINDOW_SETTINGS]: {
        section: eP.oAB.WINDOWS,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        label: ev.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: eR.Z,
        predicate: () => F.isPlatformEmbedded && (0, F.isWindows)()
      },
      [eL.s6.LINUX_SETTINGS]: {
        section: eP.oAB.LINUX,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
        label: ev.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: eB,
        predicate: () => F.isPlatformEmbedded && (0, F.isLinux)()
      },
      [eL.s6.STREAMER_MODE]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitle: ev.Z.Messages.STREAMER_MODE,
        label: ev.Z.Messages.STREAMER_MODE,
        ariaLabel: ev.Z.Messages.STREAMER_MODE,
        element: em.Z
      },
      [eL.s6.STREAMER_MODE_INTEGRATIONS]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE,
        parent: eL.s6.STREAMER_MODE
      },
      [eL.s6.STREAMER_MODE_ENABLE]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitle: ev.Z.Messages.ENABLE_STREAMER_MODE_LABEL,
        parent: eL.s6.STREAMER_MODE
      },
      [eL.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitle: ev.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL,
        parent: eL.s6.STREAMER_MODE
      },
      [eL.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitle: ev.Z.Messages.HIDE_INSTANT_INVITES_LABEL,
        parent: eL.s6.STREAMER_MODE
      },
      [eL.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitle: ev.Z.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE,
        parent: eL.s6.STREAMER_MODE
      },
      [eL.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitle: ev.Z.Messages.DISABLE_NOTIFICATIONS_LABEL,
        parent: eL.s6.STREAMER_MODE
      },
      [eL.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
        section: eP.oAB.STREAMER_MODE,
        searchableTitle: ev.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL,
        parent: eL.s6.STREAMER_MODE,
        predicate: () => {
          var e, s, t;
          return null !== (t = null === T.Z || void 0 === T.Z ? void 0 : null === (s = T.Z.window) || void 0 === s ? void 0 : null === (e = s.supportsContentProtection) || void 0 === e ? void 0 : e.call(s)) && void 0 !== t && t
        }
      },
      [eL.s6.SPEED_TEST]: {
        section: eP.oAB.SPEED_TEST,
        searchableTitle: "Speed Test",
        label: "Speed Test",
        element: z.Z,
        predicate: () => v.Z.isSupported() && Y.Z.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [eL.s6.SETTINGS_ADVANCED]: {
        section: eP.oAB.ADVANCED,
        searchableTitle: ev.Z.Messages.SETTINGS_ADVANCED,
        label: ev.Z.Messages.SETTINGS_ADVANCED,
        ariaLabel: ev.Z.Messages.SETTINGS_ADVANCED,
        element: ee.Z
      },
      [eL.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
        section: eP.oAB.ADVANCED,
        searchableTitle: ev.Z.Messages.DEVELOPER_MODE,
        parent: eL.s6.SETTINGS_ADVANCED
      },
      [eL.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
        section: eP.oAB.ADVANCED,
        searchableTitle: ev.Z.Messages.HARDWARE_ACCELERATION,
        parent: eL.s6.SETTINGS_ADVANCED
      },
      [eL.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
        section: eP.oAB.ADVANCED,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_SHOW_LIBRARY,
        parent: eL.s6.SETTINGS_ADVANCED
      },
      [eL.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
        section: eP.oAB.ADVANCED,
        searchableTitle: ev.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE,
        parent: eL.s6.SETTINGS_ADVANCED,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME]: {
        section: eP.oAB.ADVANCED,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_HOME_AUTO_NAV,
        parent: eL.s6.SETTINGS_ADVANCED
      },
      [eL.s6.ACTIVITY_PRIVACY]: {
        section: eP.oAB.ACTIVITY_PRIVACY,
        searchableTitle: ev.Z.Messages.ACTIVITY_PRIVACY,
        label: ev.Z.Messages.ACTIVITY_PRIVACY,
        ariaLabel: ev.Z.Messages.ACTIVITY_PRIVACY,
        element: $.Z,
        predicate: () => !eV
      },
      [eL.s6.ACTIVITY_PRIVACY_STATUS]: {
        section: eV ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
        searchableTitle: ev.Z.Messages.ACTIVITY_STATUS,
        parent: eV ? eL.s6.GAMES : eL.s6.ACTIVITY_PRIVACY
      },
      [eL.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
        section: eV ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
        searchableTitle: ev.Z.Messages.ACTIVITY_PARTY_PRIVACY,
        parent: eV ? eL.s6.GAMES : eL.s6.ACTIVITY_PRIVACY
      },
      [eL.s6.REGISTERED_GAMES]: {
        section: eP.oAB.REGISTERED_GAMES,
        searchableTitle: ev.Z.Messages.REGISTERED_GAMES,
        label: ev.Z.Messages.REGISTERED_GAMES,
        element: ec.Z,
        predicate: () => !eV && (0, ex.Jw)()
      },
      [eL.s6.OVERLAY]: {
        section: eP.oAB.OVERLAY,
        searchableTitle: ev.Z.Messages.OVERLAY,
        label: ev.Z.Messages.OVERLAY,
        element: eu.Z,
        predicate: () => !eV && eG
      },
      [eL.s6.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, I.Z)(!0),
        searchableTitle: ev.Z.Messages.WHATS_NEW,
        label: ev.Z.Messages.WHATS_NEW
      },
      [eL.s6.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          b.default.track(eP.rMx.USER_SETTINGS_MERCH_LINK_CLICKED), (0, G.q)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              b.default.track(eP.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, S.Z)(e)
            }
          })
        },
        searchableTitle: ev.Z.Messages.MERCHANDISE,
        label: ev.Z.Messages.MERCHANDISE,
        ariaLabel: ev.Z.Messages.MERCHANDISE
      },
      [eL.s6.HYPESQUAD]: {
        section: eP.oAB.HYPESQUAD_ONLINE,
        searchableTitle: ev.Z.Messages.USER_SETTINGS_HYPESQUAD,
        label: ev.Z.Messages.USER_SETTINGS_HYPESQUAD,
        element: eE.Z
      },
      [eL.s6.EXPERIMENTS]: {
        section: eP.oAB.EXPERIMENTS,
        searchableTitle: "Experiments",
        label: "Experiments",
        element: eM.Z,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Developer Options",
        label: "Developer Options",
        ariaLabel: "Developer Options",
        element: el.Z,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_FLAGS]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Developer Options Flags",
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Tracing Requests",
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Forced Canary",
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Gateway Events To Console",
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Rpc Events Commands",
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Analytics Events Logging",
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Source Maps",
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Analytics Debugger View",
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Idle Status Indicator",
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => eH && j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Accessibility Auditing",
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => !1
      },
      [eL.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Preview Unpublished Collections",
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => eH && j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side",
        parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side Premium Type",
        parent: eL.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side Account Created Data",
        parent: eL.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Open Overlay",
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Reset Socket",
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Clear Caches",
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => u.q && j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_CRASHES]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Crashes",
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Survey Override",
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Changelog Override",
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
        section: eP.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Build Override",
        parent: eL.s6.DEVELOPER_OPTIONS,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.HOTSPOT_OPTIONS]: {
        section: eP.oAB.HOTSPOT_OPTIONS,
        searchableTitle: "Hotspot Options",
        label: "Hotspot Options",
        element: k.Z,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: eP.oAB.DISMISSIBLE_CONTENT_OPTIONS,
        searchableTitle: "Dismissible Contents",
        label: "Dismissible Contents",
        element: m.Z,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.PAYMENT_FLOW_MODALS]: {
        section: eP.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
        searchableTitle: "Payment Flow Modals",
        label: "Payment Flow Modals",
        element: w.Z,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.TEXT_PLAYGROUND]: {
        section: eP.oAB.TEXT_PLAYGROUND,
        searchableTitle: "Text Playground",
        label: "Text Playground",
        element: eg.Z,
        predicate: () => (0, X.D)() || j.Z.isDeveloper
      },
      [eL.s6.DESIGN_SYSTEMS]: {
        section: eP.oAB.DESIGN_SYSTEMS,
        searchableTitle: "Design Systems",
        label: "Design Systems",
        element: ea.Z,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.TEXT_COMPONENTS]: {
        section: eP.oAB.TEXT_COMPONENT,
        searchableTitle: "Text Components",
        label: "Text Components",
        element: Q.Z,
        predicate: () => (0, X.D)() || j.Z.isDeveloper
      },
      [eL.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: eP.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
        searchableTitle: "Profile Effects Preview Tool",
        label: "Profile Effects Preview Tool",
        element: C.Z,
        predicate: () => j.Z.isDeveloper
      },
      [eL.s6.QUEST_PREVIEW_TOOL]: {
        section: eP.oAB.QUEST_PREVIEW_TOOL,
        searchableTitle: "Quest Preview Tool",
        label: "Quest Preview Tool",
        element: f.Z,
        predicate: () => (0, Z.X7)({
          location: eZ.dr.QUEST_PREVIEW_TOOL
        })
      },
      [eL.s6.LOGOUT]: {
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
      [eL.s6.SOCIAL_LINKS]: {
        section: _.ID.CUSTOM,
        element: K.Z
      },
      [eL.s6.CLIENT_DEBUG_INFO]: {
        section: _.ID.CUSTOM,
        element: H.Z
      }
    })
  }