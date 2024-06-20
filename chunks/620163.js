t.d(s, {
  i: function() {
    return eB
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
  u = t(163379),
  I = t(703288),
  N = t(574755),
  A = t(425799),
  C = t(377171),
  O = t(621628),
  m = t(18438),
  h = t(778825),
  g = t(351780),
  R = t(231765),
  M = t(837741),
  x = t(804545),
  D = t(813732),
  p = t(398140),
  L = t(564344),
  P = t(977156),
  Z = t(652380),
  f = t(171156),
  v = t(906467),
  j = t(131951),
  U = t(25990),
  B = t(626135),
  b = t(49012),
  G = t(358085),
  F = t(998502),
  V = t(392735),
  y = t(61160),
  Y = t(604227),
  H = t(38915),
  k = t(498639),
  w = t(748717),
  W = t(419636),
  K = t(35426),
  z = t(799071),
  Q = t(601433),
  X = t(154022),
  q = t(393681),
  J = t(309739),
  $ = t(64914),
  ee = t(501348),
  es = t(795594),
  et = t(443702),
  en = t(327192),
  ei = t(177508),
  ea = t(956699),
  el = t(54942),
  er = t(15780),
  eo = t(293389),
  ec = t(88624),
  eE = t(387747),
  ed = t(389650),
  e_ = t(649157),
  eT = t(593648),
  eS = t(327885),
  eu = t(595242),
  eI = t(301121),
  eN = t(207874),
  eA = t(463153),
  eC = t(36192),
  eO = t(338345),
  em = t(400287),
  eh = t(554042),
  eg = t(200645),
  eR = t(287490),
  eM = t(168308),
  ex = t(277329),
  eD = t(674116),
  ep = t(726985),
  eL = t(981631),
  eP = t(46140),
  eZ = t(65154),
  ef = t(689938),
  ev = t(422237);
let ej = () => {
    let e = "Settings list view",
      s = [a.z.CLIENT_THEMES_SETTINGS_BADGE, a.z.DEKSTOP_CUSTOM_APP_ICON_BADGE];
    return M.F.getCurrentConfig({
      location: e
    }).enabled && s.push(a.z.BRAND_REFRESH_NEW_BADGE), x.n.getCurrentConfig({
      location: e
    }).enabled && s.push(a.z.PRIDE_ICONS_APPEARANCE_BADGE), s
  },
  eU = eg.Z,
  eB = e => {
    let {
      unseenGiftCount: s,
      showPrepaidPaymentPastDueWarning: M,
      impressionSource: x,
      numOfPendingFamilyRequests: eB,
      isOverlaySupported: eb,
      isClipsBetaTagShowing: eG = !1,
      shouldMergeGameSettings: eF,
      isUserSettingsSearchEnabled: eV,
      isKeywordFilteringEnabled: ey,
      isStaff: eY,
      isInappropriateConversationWarningEnabled: eH,
      paymentsBlocked: ek,
      isEligibleForQuests: ew,
      showGiftNitro: eW
    } = e;
    return Object.freeze({
      [ep.s6.SEARCH_BAR]: {
        section: _.ID.CUSTOM,
        element: eN.Z,
        predicate: () => eV
      },
      [ep.s6.SEARCH_NO_RESULTS]: {
        section: _.ID.CUSTOM,
        element: eA.Z,
        predicate: () => eV
      },
      [ep.s6.ACCOUNT]: {
        section: eL.oAB.ACCOUNT,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
        label: ef.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
        ariaLabel: ef.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
        element: q.Z
      },
      [ep.s6.ACCOUNT_PROFILE]: {
        searchableTitle: ef.Z.Messages.PROFILE,
        parent: ep.s6.ACCOUNT,
        section: eL.oAB.ACCOUNT
      },
      [ep.s6.ACCOUNT_DISPLAY_NAME]: {
        searchableTitle: ef.Z.Messages.DISPLAY_NAME,
        section: eL.oAB.ACCOUNT,
        parent: ep.s6.ACCOUNT_PROFILE
      },
      [ep.s6.ACCOUNT_PHONE_NUMBER]: {
        searchableTitle: ef.Z.Messages.CHANGE_PHONE_NUMBER,
        section: eL.oAB.ACCOUNT,
        parent: ep.s6.ACCOUNT_PROFILE
      },
      [ep.s6.ACCOUNT_USERNAME]: {
        searchableTitle: ef.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE,
        section: eL.oAB.ACCOUNT,
        parent: ep.s6.ACCOUNT_PROFILE
      },
      [ep.s6.ACCOUNT_EMAIL]: {
        searchableTitle: ef.Z.Messages.CHANGE_EMAIL,
        section: eL.oAB.ACCOUNT,
        parent: ep.s6.ACCOUNT_PROFILE
      },
      [ep.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
        section: eL.oAB.ACCOUNT,
        parent: ep.s6.ACCOUNT,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [ep.s6.ACCOUNT_CHANGE_PASSWORD]: {
        searchableTitle: ef.Z.Messages.CHANGE_PASSWORD,
        section: eL.oAB.ACCOUNT,
        parent: ep.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [ep.s6.ACCOUNT_CONFIRM_PASSWORD]: {
        searchableTitle: ef.Z.Messages.FORM_LABEL_CONFIRM_PASSWORD,
        section: eL.oAB.ACCOUNT,
        parent: ep.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [ep.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
        searchableTitle: ef.Z.Messages.SETTINGS_TWO_FA,
        section: eL.oAB.ACCOUNT,
        parent: ep.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
      },
      [ep.s6.ACCOUNT_ENABLE_2FA]: {
        searchableTitle: ef.Z.Messages.TWO_FA_ENABLE,
        section: eL.oAB.ACCOUNT,
        parent: ep.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [ep.s6.ACCOUNT_REMOVE_2FA]: {
        searchableTitle: ef.Z.Messages.TWO_FA_REMOVE,
        section: eL.oAB.ACCOUNT,
        parent: ep.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [ep.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
        searchableTitle: ef.Z.Messages.TWO_FA_BACKUP_CODE,
        section: eL.oAB.ACCOUNT,
        parent: ep.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [ep.s6.ACCOUNT_SMS_BACKUP]: {
        searchableTitle: ef.Z.Messages.MFA_SMS_AUTH,
        section: eL.oAB.ACCOUNT,
        parent: ep.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [ep.s6.ACCOUNT_SECURITY_KEYS]: {
        searchableTitle: ef.Z.Messages.TWO_FA_WEBAUTHN_REGISTER,
        section: eL.oAB.ACCOUNT,
        parent: ep.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
      },
      [ep.s6.ACCOUNT_REMOVAL]: {
        section: eL.oAB.ACCOUNT,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION,
        parent: ep.s6.ACCOUNT
      },
      [ep.s6.ACCOUNT_DISABLE_ACCOUNT]: {
        section: eL.oAB.ACCOUNT,
        searchableTitle: ef.Z.Messages.DISABLE_ACCOUNT,
        parent: ep.s6.ACCOUNT_REMOVAL
      },
      [ep.s6.ACCOUNT_DELETE_ACCOUNT]: {
        section: eL.oAB.ACCOUNT,
        searchableTitle: ef.Z.Messages.DELETE_ACCOUNT,
        parent: ep.s6.ACCOUNT_DISABLE_ACCOUNT
      },
      [ep.s6.GAMES]: {
        section: eL.oAB.GAMES,
        searchableTitle: ef.Z.Messages.GAMES,
        label: ef.Z.Messages.GAMES,
        ariaLabel: ef.Z.Messages.GAMES,
        element: ex.Z,
        predicate: () => eF
      },
      [ep.s6.GAMES_MY_GAMES]: {
        section: eL.oAB.GAMES,
        searchableTitle: ef.Z.Messages.MY_GAMES,
        parent: ep.s6.GAMES
      },
      [ep.s6.GAMES_CLIPS]: {
        section: eL.oAB.GAMES,
        searchableTitle: ef.Z.Messages.CLIPS,
        parent: ep.s6.GAMES
      },
      [ep.s6.GAMES_OVERLAY]: {
        section: eL.oAB.GAMES,
        searchableTitle: ef.Z.Messages.OVERLAY,
        parent: ep.s6.GAMES
      },
      [ep.s6.GAMES_ACTIVITY_PRIVACY]: {
        section: eL.oAB.GAMES,
        searchableTitle: ef.Z.Messages.ACTIVITY_PRIVACY,
        parent: ep.s6.GAMES
      },
      [ep.s6.PROFILE_CUSTOMIZATION]: {
        section: eL.oAB.PROFILE_CUSTOMIZATION,
        type: _.bT.WIDE,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_PROFILES,
        label: ef.Z.Messages.USER_SETTINGS_PROFILES,
        ariaLabel: ef.Z.Messages.USER_SETTINGS_PROFILES,
        element: L.Z,
        newIndicator: (0, n.jsx)(r.PremiumBadge, {
          text: ef.Z.Messages.NEW
        }),
        notice: {
          stores: [U.Z, h.Z],
          element: p.Z
        },
        onSettingsClose: () => {
          o.Z.wait(() => {
            (0, m.It)(), (0, E.P6)(), d.Z.clearSubsection(eL.oAB.PROFILE_CUSTOMIZATION)
          })
        }
      },
      [ep.s6.PROFILE_DISPLAY_NAME]: {
        section: eL.oAB.PROFILE_CUSTOMIZATION,
        searchableTitle: ef.Z.Messages.DISPLAY_NAME,
        parent: ep.s6.PROFILE_CUSTOMIZATION
      },
      [ep.s6.PROFILE_USER_PROFILE]: {
        section: eL.oAB.PROFILE_CUSTOMIZATION,
        searchableTitle: ef.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE,
        parent: ep.s6.PROFILE_CUSTOMIZATION
      },
      [ep.s6.PROFILE_SERVER_PROFILES]: {
        section: eL.oAB.PROFILE_CUSTOMIZATION,
        searchableTitle: ef.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY,
        parent: ep.s6.PROFILE_CUSTOMIZATION
      },
      [ep.s6.PRIVACY_AND_SAFETY]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        label: ef.Z.Messages.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.PRIVACY_AND_SAFETY,
        ariaLabel: ef.Z.Messages.PRIVACY_AND_SAFETY,
        element: eI.Z
      },
      [ep.s6.PRIVACY_USER_SETTINGS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.PRIVACY_AND_SAFETY,
        parent: ep.s6.PRIVACY_AND_SAFETY
      },
      [ep.s6.PRIVACY_SENSITIVE_MEDIA]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER,
        parent: ep.s6.PRIVACY_USER_SETTINGS
      },
      [ep.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.SETTINGS_DM_SPAM_FILTER,
        parent: ep.s6.PRIVACY_USER_SETTINGS
      },
      [ep.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.USER_DM_SETTINGS,
        parent: ep.s6.PRIVACY_USER_SETTINGS
      },
      [ep.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.NEW_GUILDS_DM_ALLOWED,
        parent: ep.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [ep.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER,
        parent: ep.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [ep.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER,
        parent: ep.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [ep.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.NSFW_DM_COMMANDS_HEADER,
        parent: ep.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
      },
      [ep.s6.PRIVACY_DATA_PRIVACY]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.SETTINGS_DATA_PRIVACY_CONTROLS,
        parent: ep.s6.PRIVACY_USER_SETTINGS
      },
      [ep.s6.PRIVACY_DATA_IMPROVE_DISCORD]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE,
        parent: ep.s6.PRIVACY_DATA_PRIVACY
      },
      [ep.s6.PRIVACY_DATA_PERSONALIZE]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE,
        parent: ep.s6.PRIVACY_DATA_PRIVACY
      },
      [ep.s6.PRIVACY_DATA_QUESTS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT,
        parent: ep.s6.PRIVACY_DATA_PRIVACY
      },
      [ep.s6.PRIVACY_DATA_BASIC_SERVICE]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        parent: ep.s6.PRIVACY_DATA_PRIVACY,
        searchableTitle: ep.CF
      },
      [ep.s6.PRIVACY_DATA_REQUEST]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD,
        parent: ep.s6.PRIVACY_DATA_PRIVACY
      },
      [ep.s6.PRIVACY_STAFF_ONLY]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER,
        parent: ep.s6.PRIVACY_USER_SETTINGS,
        predicate: () => eY
      },
      [ep.s6.PRIVACY_KEYWORD_FILTER]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE,
        parent: ep.s6.PRIVACY_USER_SETTINGS,
        predicate: () => ey
      },
      [ep.s6.PRIVACY_TERMS_POLICY]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        parent: ep.s6.PRIVACY_USER_SETTINGS,
        searchableTitle: ep.CF
      },
      [ep.s6.PRIVACY_SAFETY_ALERTS]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.SAFETY_ALERTS_SETTING_TITLE,
        parent: ep.s6.PRIVACY_USER_SETTINGS,
        predicate: () => eH
      },
      [ep.s6.PRIVACY_ACCOUNT_STANDING]: {
        section: eL.oAB.PRIVACY_AND_SAFETY,
        searchableTitle: ef.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
        parent: ep.s6.PRIVACY_AND_SAFETY
      },
      [ep.s6.PRIVACY_FAMILY_CENTER]: {
        section: eL.oAB.FAMILY_CENTER,
        searchableTitle: ef.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        label: ef.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        ariaLabel: ef.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
        element: el.Z,
        badgeCount: eB,
        newIndicator: (0, n.jsx)(r.TextBadge, {
          text: ef.Z.Messages.NEW,
          color: C.Z.BG_BRAND
        }),
        newIndicatorDismissibleContentTypes: [a.z.FAMILY_CENTER_NEW_BADGE]
      },
      [ep.s6.AUTHORIZED_APPS]: {
        section: eL.oAB.AUTHORIZED_APPS,
        searchableTitle: ef.Z.Messages.AUTHORIZED_APPS,
        label: ef.Z.Messages.AUTHORIZED_APPS,
        element: es.Z
      },
      [ep.s6.SESSIONS]: {
        section: eL.oAB.SESSIONS,
        searchableTitle: ef.Z.Messages.AUTH_SESSIONS,
        label: ef.Z.Messages.AUTH_SESSIONS,
        ariaLabel: ef.Z.Messages.AUTH_SESSIONS,
        element: eC.Z,
        newIndicatorDismissibleContentTypes: [a.z.AUTH_SESSIONS_NEW],
        predicate: () => V.Z.getCurrentConfig({
          location: "9f7d84_1"
        }, {
          autoTrackExposure: !1
        }).showSettings
      },
      [ep.s6.CONNECTIONS]: {
        section: eL.oAB.CONNECTIONS,
        searchableTitle: ef.Z.Messages.CONNECTIONS,
        label: ef.Z.Messages.CONNECTIONS,
        ariaLabel: ef.Z.Messages.CONNECTIONS,
        element: en.Z,
        impressionName: i.ImpressionNames.USER_SETTINGS_CONNECTIONS,
        impressionProperties: {
          source: x
        },
        newIndicatorDismissibleContentTypes: [a.z.NEW_CRUNCHYROLL_CONNECTION]
      },
      [ep.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
        section: eL.oAB.CONNECTIONS,
        searchableTitle: ef.Z.Messages.CONNECTED_ACCOUNTS,
        parent: ep.s6.CONNECTIONS,
        element: en.Z
      },
      [ep.s6.CLIPS]: {
        section: eL.oAB.CLIPS,
        searchableTitle: ef.Z.Messages.CLIPS,
        label: ef.Z.Messages.CLIPS,
        ariaLabel: ef.Z.Messages.CLIPS,
        icon: eG ? (0, n.jsx)(I.Z, {}) : void 0,
        element: N.Z,
        predicate: () => !eF
      },
      [ep.s6.FRIEND_REQUESTS]: {
        section: eL.oAB.FRIEND_REQUESTS,
        searchableTitle: ef.Z.Messages.FRIEND_REQUESTS,
        label: ef.Z.Messages.FRIEND_REQUESTS,
        element: er.Z
      },
      [ep.s6.PREMIUM]: {
        section: eL.oAB.PREMIUM,
        ariaLabel: ef.Z.Messages.PREMIUM,
        searchableTitle: ef.Z.Messages.PREMIUM,
        label: ef.Z.Messages.PREMIUM,
        element: w.Z,
        className: ev.premiumTab
      },
      [ep.s6.GUILD_BOOSTING]: {
        section: eL.oAB.GUILD_BOOSTING,
        searchableTitle: ef.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        label: ef.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
        element: eu.Z
      },
      [ep.s6.SUBSCRIPTIONS]: {
        section: eL.oAB.SUBSCRIPTIONS,
        ariaLabel: ef.Z.Messages.SUBSCRIPTIONS_TITLE,
        searchableTitle: ef.Z.Messages.SUBSCRIPTIONS_TITLE,
        label: ef.Z.Messages.SUBSCRIPTIONS_TITLE,
        element: D.Z,
        icon: M ? (0, n.jsx)(r.CircleExclamationPointIcon, {
          size: "xs",
          color: l.Z.unsafe_rawColors.YELLOW_300.css
        }) : null
      },
      [ep.s6.SUBSCRIPTIONS_CREDITS]: {
        section: eL.oAB.SUBSCRIPTIONS,
        searchableTitle: ef.Z.Messages.BILLING_SUBSCRIPTION_CREDIT,
        parent: ep.s6.SUBSCRIPTIONS
      },
      [ep.s6.GIFT_INVENTORY]: {
        section: eL.oAB.INVENTORY,
        searchableTitle: ef.Z.Messages.GIFT_INVENTORY,
        label: ef.Z.Messages.GIFT_INVENTORY,
        element: eE.Z,
        ariaLabel: ef.Z.Messages.GIFT_INVENTORY,
        badgeCount: s
      },
      [ep.s6.GIFT_NITRO]: {
        section: eL.oAB.INVENTORY,
        searchableTitle: ef.Z.Messages.GIFT_NITRO,
        parent: ep.s6.GIFT_INVENTORY,
        predicate: () => !ek && eW
      },
      [ep.s6.GIFT_CODE_REDEMPTION]: {
        section: eL.oAB.INVENTORY,
        searchableTitle: ef.Z.Messages.GIFT_INVENTORY_REDEEM_CODES,
        parent: ep.s6.GIFT_INVENTORY,
        predicate: () => !ek
      },
      [ep.s6.GIFT_INVENTORY_QUESTS]: {
        section: eL.oAB.INVENTORY,
        searchableTitle: ef.Z.Messages.QUESTS,
        parent: ep.s6.GIFT_INVENTORY,
        predicate: () => ew
      },
      [ep.s6.GIFT_INVENTORY_LIST]: {
        section: eL.oAB.INVENTORY,
        searchableTitle: ef.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED,
        parent: ep.s6.GIFT_INVENTORY,
        predicate: () => !ek
      },
      [ep.s6.GIFT_BLOCKED_PAYMENTS]: {
        section: eL.oAB.INVENTORY,
        searchableTitle: ef.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER,
        parent: ep.s6.GIFT_INVENTORY,
        predicate: () => ek
      },
      [ep.s6.BILLING]: {
        section: eL.oAB.BILLING,
        searchableTitle: ef.Z.Messages.BILLING,
        label: ef.Z.Messages.BILLING,
        ariaLabel: ef.Z.Messages.BILLING,
        element: et.Z
      },
      [ep.s6.BILLING_PAYMENT_METHODS]: {
        section: eL.oAB.BILLING,
        searchableTitle: ef.Z.Messages.BILLING_PAYMENT_SOURCES,
        parent: ep.s6.BILLING
      },
      [ep.s6.BILLING_TRANSACTION_HISTORY]: {
        section: eL.oAB.BILLING,
        searchableTitle: ef.Z.Messages.BILLING_PAYMENT_HISTORY,
        parent: ep.s6.BILLING
      },
      [ep.s6.APPEARANCE]: {
        section: eL.oAB.APPEARANCE,
        searchableTitle: ef.Z.Messages.APPEARANCE,
        label: ef.Z.Messages.APPEARANCE,
        ariaLabel: ef.Z.Messages.APPEARANCE,
        element: ee.Z,
        newIndicator: (0, n.jsx)(r.PremiumBadge, {
          text: ef.Z.Messages.NEW
        }),
        newIndicatorDismissibleContentTypes: ej()
      },
      [ep.s6.APPEARANCE_THEME]: {
        section: eL.oAB.APPEARANCE,
        searchableTitle: ef.Z.Messages.THEME,
        parent: ep.s6.APPEARANCE
      },
      [ep.s6.APPEARANCE_COLOR]: {
        section: eL.oAB.APPEARANCE,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE,
        parent: ep.s6.APPEARANCE_THEME
      },
      [ep.s6.APPEARANCE_ICON]: {
        section: eL.oAB.APPEARANCE,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE,
        parent: ep.s6.APPEARANCE_THEME
      },
      [ep.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
        section: eL.oAB.APPEARANCE,
        searchableTitle: ef.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL,
        parent: ep.s6.APPEARANCE
      },
      [ep.s6.APPEARANCE_SCALING_SPACING]: {
        section: eL.oAB.APPEARANCE,
        searchableTitle: ef.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL,
        parent: ep.s6.APPEARANCE
      },
      [ep.s6.ACCESSIBILITY]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitle: ef.Z.Messages.ACCESSIBILITY,
        label: ef.Z.Messages.ACCESSIBILITY,
        ariaLabel: ef.Z.Messages.ACCESSIBILITY,
        element: X.Z
      },
      [ep.s6.ACCESSIBILITY_SATURATION]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitle: ef.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE,
        parent: ep.s6.ACCESSIBILITY
      },
      [ep.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitle: ef.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL,
        parent: ep.s6.ACCESSIBILITY
      },
      [ep.s6.ACCESSIBILITY_ROLE_STYLE]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitle: ef.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE,
        parent: ep.s6.ACCESSIBILITY
      },
      [ep.s6.ACCESSIBILITY_TAGS]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitle: ef.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE,
        parent: ep.s6.ACCESSIBILITY
      },
      [ep.s6.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitle: ef.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE,
        parent: ep.s6.ACCESSIBILITY
      },
      [ep.s6.ACCESSIBILITY_CONTRAST]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitle: ef.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST,
        parent: ep.s6.ACCESSIBILITY
      },
      [ep.s6.ACCESSIBILITY_REDUCED_MOTION]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitle: ef.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION,
        parent: ep.s6.ACCESSIBILITY
      },
      [ep.s6.ACCESSIBILITY_STICKERS]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitle: ef.Z.Messages.STICKERS_AUTO_PLAY_HEADING,
        parent: ep.s6.ACCESSIBILITY
      },
      [ep.s6.ACCESSIBILITY_MESSAGES]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitle: ef.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT,
        parent: ep.s6.ACCESSIBILITY
      },
      [ep.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
        section: eL.oAB.ACCESSIBILITY,
        searchableTitle: ef.Z.Messages.FORM_LABEL_TTS,
        parent: ep.s6.ACCESSIBILITY
      },
      [ep.s6.VOICE_AND_VIDEO]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.VOICE_AND_VIDEO,
        label: ef.Z.Messages.VOICE_AND_VIDEO,
        ariaLabel: ef.Z.Messages.VOICE_AND_VIDEO,
        element: eD.Z,
        predicate: () => j.Z.isSupported()
      },
      [ep.s6.VOICE_AND_VIDEO_DEVICES]: {
        section: eL.oAB.VOICE,
        searchableTitle: "".concat(ef.Z.Messages.FORM_LABEL_INPUT_DEVICE, " ").concat(ef.Z.Messages.FORM_LABEL_OUTPUT_DEVICE),
        parent: ep.s6.VOICE_AND_VIDEO
      },
      [ep.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
        section: eL.oAB.VOICE,
        searchableTitle: "".concat(ef.Z.Messages.FORM_LABEL_INPUT_VOLUME, " ").concat(ef.Z.Messages.FORM_LABEL_OUTPUT_VOLUME),
        parent: ep.s6.VOICE_AND_VIDEO
      },
      [ep.s6.VOICE_AND_VIDEO_MIC_TEST]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE,
        parent: ep.s6.VOICE_AND_VIDEO
      },
      [ep.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.FORM_LABEL_INPUT_MODE,
        parent: ep.s6.VOICE_AND_VIDEO
      },
      [ep.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY,
        parent: ep.s6.VOICE_AND_VIDEO
      },
      [ep.s6.VOICE_AND_VIDEO_SOUNDS]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.CALL_SOUNDS_SETTINGS,
        parent: ep.s6.VOICE_AND_VIDEO
      },
      [ep.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.SOUNDBOARD,
        parent: ep.s6.VOICE_AND_VIDEO_SOUNDS
      },
      [ep.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.CALL_SOUNDS_SETTINGS,
        parent: ep.s6.VOICE_AND_VIDEO_SOUNDS
      },
      [ep.s6.VOICE_AND_VIDEO_VIDEO]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.VIDEO_SETTINGS,
        parent: ep.s6.VOICE_AND_VIDEO
      },
      [ep.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.FORM_LABEL_VIDEO_DEVICE,
        parent: ep.s6.VOICE_AND_VIDEO_VIDEO,
        predicate: () => j.Z.supports(eZ.AN.VIDEO)
      },
      [ep.s6.VOICE_AND_VIDEO_ADVANCED]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.SETTINGS_ADVANCED,
        parent: ep.s6.VOICE_AND_VIDEO
      },
      [ep.s6.VOICE_AND_VIDEO_ADVANCED_CODECS]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE,
        parent: ep.s6.VOICE_AND_VIDEO_ADVANCED
      },
      [ep.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.FORM_LABEL_VOICE_PROCESSING,
        parent: ep.s6.VOICE_AND_VIDEO_ADVANCED
      },
      [ep.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.ECHO_CANCELLATION,
        parent: ep.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => j.Z.getEchoCancellation()
      },
      [ep.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.NOISE_SUPPRESSION,
        parent: ep.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => j.Z.isNoiseSuppressionSupported()
      },
      [ep.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.ADVANCED_VOICE_ACTIVITY,
        parent: ep.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => j.Z.isAdvancedVoiceActivitySupported()
      },
      [ep.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.AUTOMATIC_GAIN_CONTROL,
        parent: ep.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
        predicate: () => j.Z.isAutomaticGainControlSupported()
      },
      [ep.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.FORM_LABEL_QOS,
        parent: ep.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => j.Z.supports(eZ.AN.QOS)
      },
      [ep.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.FORM_LABEL_ATTENUATION,
        parent: ep.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => j.Z.supports(eZ.AN.ATTENUATION)
      },
      [ep.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.FORM_LABEL_SUBSYSTEM,
        parent: ep.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => j.Z.supports(eZ.AN.LEGACY_AUDIO_SUBSYSTEM) || j.Z.supports(eZ.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
      },
      [ep.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS,
        parent: ep.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => G.isPlatformEmbedded
      },
      [ep.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.FORM_LABEL_DEBUG,
        parent: ep.s6.VOICE_AND_VIDEO_ADVANCED,
        predicate: () => G.isPlatformEmbedded && j.Z.supports(eZ.AN.DEBUG_LOGGING) && null != T.Z.fileManager.readLogFiles
      },
      [ep.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.FORM_CHECKBOX_AEC_DUMP,
        parent: ep.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
        predicate: () => j.Z.isAecDumpSupported()
      },
      [ep.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG,
        parent: ep.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
        predicate: () => ("canary" === F.ZP.releaseChannel || "development" === F.ZP.releaseChannel) && eY && j.Z.supports(eZ.AN.CONNECTION_REPLAY)
      },
      [ep.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING,
        parent: ep.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING
      },
      [ep.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
        section: eL.oAB.VOICE,
        searchableTitle: ef.Z.Messages.RESET_VOICE_SETTINGS,
        parent: ep.s6.VOICE_AND_VIDEO_ADVANCED
      },
      [ep.s6.POGGERMODE]: {
        section: eL.oAB.POGGERMODE,
        searchableTitle: ef.Z.Messages.POGGERMODE,
        label: ef.Z.Messages.POGGERMODE,
        ariaLabel: ef.Z.Messages.POGGERMODE,
        element: R.Z,
        predicate: () => g.Z.settingsVisible,
        icon: (0, n.jsx)("img", {
          alt: "",
          src: t(348621),
          className: ev.poggermodeIcon
        })
      },
      [ep.s6.CHAT]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.CHAT,
        label: ef.Z.Messages.CHAT,
        ariaLabel: ef.Z.Messages.CHAT,
        element: em.Z
      },
      [ep.s6.CHAT_INLINE_MEDIA]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.INLINE_MEDIA_LABEL,
        parent: ep.s6.CHAT
      },
      [ep.s6.CHAT_INLINE_MEDIA_LINKS]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.INLINE_EMBED_MEDIA,
        parent: ep.s6.CHAT_INLINE_MEDIA
      },
      [ep.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.INLINE_ATTACHMENT_MEDIA,
        parent: ep.s6.CHAT_INLINE_MEDIA
      },
      [ep.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.IMAGE_DESCRIPTION,
        parent: ep.s6.CHAT_INLINE_MEDIA
      },
      [ep.s6.CHAT_EMBEDS]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.RENDER_EMBEDS_LABEL,
        parent: ep.s6.CHAT
      },
      [ep.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.RENDER_EMBEDS,
        parent: ep.s6.CHAT_EMBEDS
      },
      [ep.s6.CHAT_EMOJI]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.EMOJI,
        parent: ep.s6.CHAT
      },
      [ep.s6.CHAT_EMOJI_REACTIONS]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.RENDER_REACTIONS,
        parent: ep.s6.CHAT_EMOJI
      },
      [ep.s6.CHAT_EMOJI_EMOTICONS]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.CONVERT_EMOTICONS,
        parent: ep.s6.CHAT_EMOJI
      },
      [ep.s6.CHAT_STICKERS]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.STICKERS_AUTO_PLAY_HEADING,
        parent: ep.s6.CHAT
      },
      [ep.s6.CHAT_STICKERS_SUGGESTIONS]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.AUTO_SUGGEST_STICKERS,
        parent: ep.s6.CHAT_STICKERS
      },
      [ep.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.STICKERS_IN_AUTOCOMPLETE,
        parent: ep.s6.CHAT_STICKERS
      },
      [ep.s6.CHAT_TEXT_BOX]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX,
        parent: ep.s6.CHAT
      },
      [ep.s6.CHAT_TEXT_BOX_PREVIEW]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION,
        parent: ep.s6.CHAT_TEXT_BOX
      },
      [ep.s6.CHAT_THREADS]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.THREADS,
        parent: ep.s6.CHAT
      },
      [ep.s6.CHAT_THREADS_SPLIT_VIEW]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION,
        parent: ep.s6.CHAT_THREADS
      },
      [ep.s6.CHAT_SPOILERS]: {
        section: eL.oAB.TEXT,
        searchableTitle: ef.Z.Messages.SHOW_SPOILER_CONTENT,
        parent: ep.s6.CHAT
      },
      [ep.s6.NOTIFICATIONS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.NOTIFICATIONS,
        label: ef.Z.Messages.NOTIFICATIONS,
        ariaLabel: ef.Z.Messages.NOTIFICATIONS,
        element: eT.Z
      },
      [ep.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE,
        parent: ep.s6.NOTIFICATIONS
      },
      [ep.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: "Mention on all messages",
        parent: ep.s6.NOTIFICATIONS
      },
      [ep.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL,
        parent: ep.s6.NOTIFICATIONS
      },
      [ep.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL,
        parent: ep.s6.NOTIFICATIONS,
        predicate: () => (0, G.isWindows)()
      },
      [ep.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE,
        parent: ep.s6.NOTIFICATIONS
      },
      [ep.s6.NOTIFICATIONS_NEW_SETTINGS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: "New Notification Settings (Advancd, Staff Only)",
        parent: ep.s6.NOTIFICATIONS,
        predicate: () => !1
      },
      [ep.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: "Restore most recent snapshot",
        parent: ep.s6.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [ep.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: "Launch Migration",
        parent: ep.s6.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [ep.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: "Toggle new system on/off",
        parent: ep.s6.NOTIFICATIONS_NEW_SETTINGS,
        predicate: () => !1
      },
      [ep.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
        parent: ep.s6.NOTIFICATIONS
      },
      [ep.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.FORM_LABEL_TTS,
        parent: ep.s6.NOTIFICATIONS
      },
      [ep.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER,
        parent: ep.s6.NOTIFICATIONS
      },
      [ep.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER,
        parent: ep.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [ep.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER,
        parent: ep.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
      },
      [ep.s6.NOTIFICATIONS_SOUNDS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.SOUNDS,
        parent: ep.s6.NOTIFICATIONS
      },
      [ep.s6.NOTIFICATIONS_EMAILS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS,
        parent: ep.s6.NOTIFICATIONS
      },
      [ep.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION,
        parent: ep.s6.NOTIFICATIONS_EMAILS
      },
      [ep.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL,
        parent: ep.s6.NOTIFICATIONS_EMAILS
      },
      [ep.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS,
        parent: ep.s6.NOTIFICATIONS_EMAILS
      },
      [ep.s6.NOTIFICATIONS_EMAILS_TIPS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS,
        parent: ep.s6.NOTIFICATIONS_EMAILS
      },
      [ep.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS,
        parent: ep.s6.NOTIFICATIONS_EMAILS
      },
      [ep.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
        section: eL.oAB.NOTIFICATIONS,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING,
        parent: ep.s6.NOTIFICATIONS_EMAILS
      },
      [ep.s6.KEYBINDS]: {
        section: eL.oAB.KEYBINDS,
        searchableTitle: ef.Z.Messages.KEYBINDS,
        label: ef.Z.Messages.KEYBINDS,
        element: ed.Z
      },
      [ep.s6.LANGUAGE]: {
        section: eL.oAB.LOCALE,
        searchableTitle: ef.Z.Messages.LANGUAGE,
        label: ef.Z.Messages.LANGUAGE,
        element: e_.Z
      },
      [ep.s6.WINDOW_SETTINGS]: {
        section: eL.oAB.WINDOWS,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        label: ef.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
        element: eg.Z,
        predicate: () => G.isPlatformEmbedded && (0, G.isWindows)()
      },
      [ep.s6.LINUX_SETTINGS]: {
        section: eL.oAB.LINUX,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
        label: ef.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
        element: eU,
        predicate: () => G.isPlatformEmbedded && (0, G.isLinux)()
      },
      [ep.s6.STREAMER_MODE]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitle: ef.Z.Messages.STREAMER_MODE,
        label: ef.Z.Messages.STREAMER_MODE,
        ariaLabel: ef.Z.Messages.STREAMER_MODE,
        element: eO.Z
      },
      [ep.s6.STREAMER_MODE_INTEGRATIONS]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE,
        parent: ep.s6.STREAMER_MODE
      },
      [ep.s6.STREAMER_MODE_ENABLE]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitle: ef.Z.Messages.ENABLE_STREAMER_MODE_LABEL,
        parent: ep.s6.STREAMER_MODE
      },
      [ep.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitle: ef.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL,
        parent: ep.s6.STREAMER_MODE
      },
      [ep.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitle: ef.Z.Messages.HIDE_INSTANT_INVITES_LABEL,
        parent: ep.s6.STREAMER_MODE
      },
      [ep.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitle: ef.Z.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE,
        parent: ep.s6.STREAMER_MODE
      },
      [ep.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitle: ef.Z.Messages.DISABLE_NOTIFICATIONS_LABEL,
        parent: ep.s6.STREAMER_MODE
      },
      [ep.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
        section: eL.oAB.STREAMER_MODE,
        searchableTitle: ef.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL,
        parent: ep.s6.STREAMER_MODE,
        predicate: () => {
          var e, s, t;
          return null !== (t = null === T.Z || void 0 === T.Z ? void 0 : null === (s = T.Z.window) || void 0 === s ? void 0 : null === (e = s.supportsContentProtection) || void 0 === e ? void 0 : e.call(s)) && void 0 !== t && t
        }
      },
      [ep.s6.SPEED_TEST]: {
        section: eL.oAB.SPEED_TEST,
        searchableTitle: "Speed Test",
        label: "Speed Test",
        element: K.Z,
        predicate: () => f.Z.isSupported() && y.Z.getCurrentConfig({
          location: "9f7d84_2"
        }).showSettings
      },
      [ep.s6.SETTINGS_ADVANCED]: {
        section: eL.oAB.ADVANCED,
        searchableTitle: ef.Z.Messages.SETTINGS_ADVANCED,
        label: ef.Z.Messages.SETTINGS_ADVANCED,
        ariaLabel: ef.Z.Messages.SETTINGS_ADVANCED,
        element: $.Z
      },
      [ep.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
        section: eL.oAB.ADVANCED,
        searchableTitle: ef.Z.Messages.DEVELOPER_MODE,
        parent: ep.s6.SETTINGS_ADVANCED
      },
      [ep.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
        section: eL.oAB.ADVANCED,
        searchableTitle: ef.Z.Messages.HARDWARE_ACCELERATION,
        parent: ep.s6.SETTINGS_ADVANCED
      },
      [ep.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
        section: eL.oAB.ADVANCED,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_SHOW_LIBRARY,
        parent: ep.s6.SETTINGS_ADVANCED
      },
      [ep.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
        section: eL.oAB.ADVANCED,
        searchableTitle: ef.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE,
        parent: ep.s6.SETTINGS_ADVANCED,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.SETTINGS_ADVANCED_AUTO_NAVIGATE_TO_HOME]: {
        section: eL.oAB.ADVANCED,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_HOME_AUTO_NAV,
        parent: ep.s6.SETTINGS_ADVANCED
      },
      [ep.s6.ACTIVITY_PRIVACY]: {
        section: eL.oAB.ACTIVITY_PRIVACY,
        searchableTitle: ef.Z.Messages.ACTIVITY_PRIVACY,
        label: ef.Z.Messages.ACTIVITY_PRIVACY,
        ariaLabel: ef.Z.Messages.ACTIVITY_PRIVACY,
        element: J.Z,
        predicate: () => !eF
      },
      [ep.s6.ACTIVITY_PRIVACY_STATUS]: {
        section: eF ? eL.oAB.GAMES : eL.oAB.ACTIVITY_PRIVACY,
        searchableTitle: ef.Z.Messages.ACTIVITY_STATUS,
        parent: eF ? ep.s6.GAMES : ep.s6.ACTIVITY_PRIVACY
      },
      [ep.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
        section: eF ? eL.oAB.GAMES : eL.oAB.ACTIVITY_PRIVACY,
        searchableTitle: ef.Z.Messages.ACTIVITY_PARTY_PRIVACY,
        parent: eF ? ep.s6.GAMES : ep.s6.ACTIVITY_PRIVACY
      },
      [ep.s6.REGISTERED_GAMES]: {
        section: eL.oAB.REGISTERED_GAMES,
        searchableTitle: ef.Z.Messages.REGISTERED_GAMES,
        label: ef.Z.Messages.REGISTERED_GAMES,
        element: eo.Z,
        predicate: () => !eF && (0, eM.Jw)()
      },
      [ep.s6.OVERLAY]: {
        section: eL.oAB.OVERLAY,
        searchableTitle: ef.Z.Messages.OVERLAY,
        label: ef.Z.Messages.OVERLAY,
        element: eS.Z,
        predicate: () => !eF && eb
      },
      [ep.s6.CHANGELOG]: {
        section: "changelog",
        onClick: () => (0, u.Z)(!0),
        searchableTitle: ef.Z.Messages.WHATS_NEW,
        label: ef.Z.Messages.WHATS_NEW
      },
      [ep.s6.MERCHANDISE]: {
        section: "merchandise",
        onClick: () => {
          let e = "https://discordmerch.com/Dsktopprm";
          B.default.track(eL.rMx.USER_SETTINGS_MERCH_LINK_CLICKED), (0, b.q)({
            href: e,
            shouldConfirm: !0,
            onConfirm: () => {
              B.default.track(eL.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, S.Z)(e)
            }
          })
        },
        searchableTitle: ef.Z.Messages.MERCHANDISE,
        label: ef.Z.Messages.MERCHANDISE,
        ariaLabel: ef.Z.Messages.MERCHANDISE
      },
      [ep.s6.HYPESQUAD]: {
        section: eL.oAB.HYPESQUAD_ONLINE,
        searchableTitle: ef.Z.Messages.USER_SETTINGS_HYPESQUAD,
        label: ef.Z.Messages.USER_SETTINGS_HYPESQUAD,
        element: ec.Z
      },
      [ep.s6.EXPERIMENTS]: {
        section: eL.oAB.EXPERIMENTS,
        searchableTitle: "Experiments",
        label: "Experiments",
        element: eR.Z,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Developer Options",
        label: "Developer Options",
        ariaLabel: "Developer Options",
        element: ea.Z,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_FLAGS]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Developer Options Flags",
        parent: ep.s6.DEVELOPER_OPTIONS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Tracing Requests",
        parent: ep.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Forced Canary",
        parent: ep.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Gateway Events To Console",
        parent: ep.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Rpc Events Commands",
        parent: ep.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Analytics Events Logging",
        parent: ep.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Source Maps",
        parent: ep.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Analytics Debugger View",
        parent: ep.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Idle Status Indicator",
        parent: ep.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Accessibility Auditing",
        parent: ep.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Preview Unpublished Collections",
        parent: ep.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side",
        parent: ep.s6.DEVELOPER_OPTIONS_FLAGS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side Premium Type",
        parent: ep.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Override Client Side Account Created Data",
        parent: ep.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Open Overlay",
        parent: ep.s6.DEVELOPER_OPTIONS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Reset Socket",
        parent: ep.s6.DEVELOPER_OPTIONS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Clear Caches",
        parent: ep.s6.DEVELOPER_OPTIONS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_CRASHES]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Crashes",
        parent: ep.s6.DEVELOPER_OPTIONS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Survey Override",
        parent: ep.s6.DEVELOPER_OPTIONS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Changelog Override",
        parent: ep.s6.DEVELOPER_OPTIONS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
        section: eL.oAB.DEVELOPER_OPTIONS,
        searchableTitle: "Build Override",
        parent: ep.s6.DEVELOPER_OPTIONS,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.HOTSPOT_OPTIONS]: {
        section: eL.oAB.HOTSPOT_OPTIONS,
        searchableTitle: "Hotspot Options",
        label: "Hotspot Options",
        element: H.Z,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
        section: eL.oAB.DISMISSIBLE_CONTENT_OPTIONS,
        searchableTitle: "Dismissible Contents",
        label: "Dismissible Contents",
        element: O.Z,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.PAYMENT_FLOW_MODALS]: {
        section: eL.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
        searchableTitle: "Payment Flow Modals",
        label: "Payment Flow Modals",
        element: k.Z,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.TEXT_PLAYGROUND]: {
        section: eL.oAB.TEXT_PLAYGROUND,
        searchableTitle: "Text Playground",
        label: "Text Playground",
        element: eh.Z,
        predicate: () => (0, Q.D)() || v.Z.isDeveloper
      },
      [ep.s6.DESIGN_SYSTEMS]: {
        section: eL.oAB.DESIGN_SYSTEMS,
        searchableTitle: "Design Systems",
        label: "Design Systems",
        element: ei.Z,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.TEXT_COMPONENTS]: {
        section: eL.oAB.TEXT_COMPONENT,
        searchableTitle: "Text Components",
        label: "Text Components",
        element: z.Z,
        predicate: () => (0, Q.D)() || v.Z.isDeveloper
      },
      [ep.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
        section: eL.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
        searchableTitle: "Profile Effects Preview Tool",
        label: "Profile Effects Preview Tool",
        element: A.Z,
        predicate: () => v.Z.isDeveloper
      },
      [ep.s6.QUEST_PREVIEW_TOOL]: {
        section: eL.oAB.QUEST_PREVIEW_TOOL,
        searchableTitle: "Quest Preview Tool",
        label: "Quest Preview Tool",
        element: Z.Z,
        predicate: () => (0, P.X7)({
          location: eP.dr.QUEST_PREVIEW_TOOL
        })
      },
      [ep.s6.LOGOUT]: {
        section: "logout",
        onClick: () => {
          (0, r.openModal)(e => (0, n.jsx)(r.ConfirmModal, {
            header: ef.Z.Messages.LOGOUT,
            confirmText: ef.Z.Messages.LOGOUT,
            cancelText: ef.Z.Messages.CANCEL,
            onCancel: e.onClose,
            onConfirm: () => c.Z.logout(),
            ...e,
            children: (0, n.jsx)(r.Text, {
              variant: "text-md/normal",
              children: ef.Z.Messages.USER_SETTINGS_CONFIRM_LOGOUT
            })
          }))
        },
        label: ef.Z.Messages.LOGOUT,
        ariaLabel: ef.Z.Messages.LOGOUT,
        icon: (0, n.jsx)(r.DoorExitIcon, {
          size: "xs",
          color: "currentColor"
        })
      },
      [ep.s6.SOCIAL_LINKS]: {
        section: _.ID.CUSTOM,
        element: W.Z
      },
      [ep.s6.CLIENT_DEBUG_INFO]: {
        section: _.ID.CUSTOM,
        element: Y.Z
      }
    })
  }