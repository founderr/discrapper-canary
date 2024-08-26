t.d(s, {
    i: function () {
        return ej;
    }
});
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
    I = t(782568),
    T = t(758182),
    S = t(163379),
    N = t(703288),
    C = t(574755),
    m = t(377171),
    A = t(621628),
    O = t(18438),
    g = t(778825),
    h = t(665166),
    p = t(351780),
    R = t(231765),
    x = t(813732),
    M = t(398140),
    f = t(564344),
    D = t(746263),
    P = t(977156),
    L = t(652380),
    b = t(906467),
    Z = t(857192),
    v = t(131951),
    j = t(25990),
    B = t(626135),
    U = t(572004),
    G = t(49012),
    F = t(358085),
    y = t(998502),
    V = t(392735),
    Y = t(695346),
    H = t(604227),
    w = t(38915),
    k = t(498639),
    W = t(748717),
    K = t(419636),
    z = t(799071),
    Q = t(601433),
    X = t(154022),
    q = t(393681),
    J = t(309739),
    $ = t(64914),
    ee = t(501348),
    es = t(795594),
    et = t(443702),
    en = t(920914),
    ea = t(177508),
    ei = t(956699),
    er = t(54942),
    eo = t(15780),
    el = t(293389),
    ec = t(88624),
    ed = t(387747),
    e_ = t(389650),
    eE = t(649157),
    eu = t(593648),
    eI = t(327885),
    eT = t(595242),
    eS = t(301121),
    eN = t(463153),
    eC = t(36192),
    em = t(338345),
    eA = t(400287),
    eO = t(554042),
    eg = t(200645),
    eh = t(287490),
    ep = t(168308),
    eR = t(277329),
    ex = t(674116),
    eM = t(726985),
    ef = t(981631),
    eD = t(46140),
    eP = t(65154),
    eL = t(689938),
    eb = t(54048);
let eZ = () => [i.z.CLIENT_THEMES_SETTINGS_BADGE, i.z.DEKSTOP_CUSTOM_APP_ICON_BADGE],
    ev = eg.Z,
    ej = (e) => {
        let { unseenGiftCount: s, showPrepaidPaymentPastDueWarning: ej, impressionSource: eB, numOfPendingFamilyRequests: eU, isOverlaySupported: eG, isClipsBetaTagShowing: eF = !1, shouldMergeGameSettings: ey, isUserSettingsSearchEnabled: eV, isKeywordFilteringEnabled: eY, isStaff: eH, isInappropriateConversationWarningEnabled: ew, paymentsBlocked: ek, isEligibleForQuests: eW, showGiftNitro: eK, isStricterMessageRequestsEnabled: ez, hasLibraryApplication: eQ, hasTOTPEnabled: eX, canBroadcastActivity: eq, developerMode: eJ } = e;
        return Object.freeze({
            [eM.s6.SEARCH_NO_RESULTS]: {
                section: E.ID.CUSTOM,
                element: eN.Z,
                predicate: () => eV
            },
            [eM.s6.ACCOUNT]: {
                section: ef.oAB.ACCOUNT,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_MY_ACCOUNT],
                label: eL.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
                ariaLabel: eL.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
                element: q.Z
            },
            [eM.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eL.Z.Messages.PROFILE],
                parent: eM.s6.ACCOUNT,
                section: ef.oAB.ACCOUNT
            },
            [eM.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eL.Z.Messages.DISPLAY_NAME],
                section: ef.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE
            },
            [eM.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eL.Z.Messages.CHANGE_PHONE_NUMBER],
                section: ef.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE
            },
            [eM.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE],
                section: ef.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE
            },
            [eM.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eL.Z.Messages.CHANGE_EMAIL],
                section: ef.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE
            },
            [eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION],
                section: ef.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT
            },
            [eM.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eL.Z.Messages.CHANGE_PASSWORD],
                section: ef.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eL.Z.Messages.FORM_LABEL_CONFIRM_PASSWORD],
                section: ef.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eL.Z.Messages.SETTINGS_TWO_FA],
                section: ef.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eL.Z.Messages.TWO_FA_ENABLE],
                section: ef.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !eX
            },
            [eM.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eL.Z.Messages.TWO_FA_REMOVE],
                section: ef.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => eX
            },
            [eM.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eL.Z.Messages.TWO_FA_BACKUP_CODE],
                section: ef.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eL.Z.Messages.MFA_SMS_AUTH],
                section: ef.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eL.Z.Messages.TWO_FA_WEBAUTHN_REGISTER],
                section: ef.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_REMOVAL]: {
                section: ef.oAB.ACCOUNT,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION],
                parent: eM.s6.ACCOUNT
            },
            [eM.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: ef.oAB.ACCOUNT,
                searchableTitles: [eL.Z.Messages.DISABLE_ACCOUNT],
                parent: eM.s6.ACCOUNT_REMOVAL
            },
            [eM.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: ef.oAB.ACCOUNT,
                searchableTitles: [eL.Z.Messages.DELETE_ACCOUNT],
                parent: eM.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [eM.s6.GAMES]: {
                section: ef.oAB.GAMES,
                searchableTitles: [eL.Z.Messages.GAMES],
                label: eL.Z.Messages.GAMES,
                ariaLabel: eL.Z.Messages.GAMES,
                element: eR.Z,
                predicate: () => ey
            },
            [eM.s6.GAMES_MY_GAMES]: {
                section: ef.oAB.GAMES,
                searchableTitles: [eL.Z.Messages.MY_GAMES],
                parent: eM.s6.GAMES
            },
            [eM.s6.GAMES_CLIPS]: {
                section: ef.oAB.GAMES,
                searchableTitles: [eL.Z.Messages.CLIPS],
                parent: eM.s6.GAMES
            },
            [eM.s6.GAMES_OVERLAY]: {
                section: ef.oAB.GAMES,
                searchableTitles: [eL.Z.Messages.OVERLAY],
                parent: eM.s6.GAMES
            },
            [eM.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: ef.oAB.GAMES,
                searchableTitles: [eL.Z.Messages.ACTIVITY_PRIVACY],
                parent: eM.s6.GAMES
            },
            [eM.s6.PROFILE_CUSTOMIZATION]: {
                section: ef.oAB.PROFILE_CUSTOMIZATION,
                type: E.bT.WIDE,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_PROFILES],
                label: eL.Z.Messages.USER_SETTINGS_PROFILES,
                ariaLabel: eL.Z.Messages.USER_SETTINGS_PROFILES,
                element: f.Z,
                newIndicator: (0, n.jsx)(o.PremiumBadge, { text: eL.Z.Messages.NEW }),
                notice: {
                    stores: [j.Z, g.Z],
                    element: M.Z
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, O.It)(), (0, d.P6)(), _.Z.clearSubsection(ef.oAB.PROFILE_CUSTOMIZATION);
                    });
                }
            },
            [eM.s6.PROFILE_DISPLAY_NAME]: {
                section: ef.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eL.Z.Messages.DISPLAY_NAME],
                parent: eM.s6.PROFILE_CUSTOMIZATION
            },
            [eM.s6.PROFILE_USER_PROFILE]: {
                section: ef.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eL.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE],
                parent: eM.s6.PROFILE_CUSTOMIZATION
            },
            [eM.s6.PROFILE_SERVER_PROFILES]: {
                section: ef.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eL.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY],
                parent: eM.s6.PROFILE_CUSTOMIZATION
            },
            [eM.s6.PRIVACY_AND_SAFETY]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                label: eL.Z.Messages.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.PRIVACY_AND_SAFETY],
                ariaLabel: eL.Z.Messages.PRIVACY_AND_SAFETY,
                element: eS.Z
            },
            [eM.s6.PRIVACY_USER_SETTINGS]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.PRIVACY_AND_SAFETY],
                parent: eM.s6.PRIVACY_AND_SAFETY
            },
            [eM.s6.PRIVACY_SENSITIVE_MEDIA]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER, eL.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_FILTER, eL.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_BLUR, eL.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_SENSITIVE_CONTENT, eL.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_EXPLICIT],
                parent: eM.s6.PRIVACY_USER_SETTINGS
            },
            [eM.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.SETTINGS_DM_SPAM_FILTER, eL.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_MESSAGES, eL.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_INBOX],
                parent: eM.s6.PRIVACY_USER_SETTINGS
            },
            [eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.USER_DM_SETTINGS, eL.Z.Messages.USER_DM_SEARCH_TERM_DIRECT_MESSAGES, eL.Z.Messages.USER_DM_SEARCH_TERM_DM],
                parent: eM.s6.PRIVACY_USER_SETTINGS
            },
            [eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.NEW_GUILDS_DM_ALLOWED],
                parent: eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER],
                parent: eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER],
                parent: eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
                predicate: () => !ez
            },
            [eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.NSFW_DM_COMMANDS_HEADER],
                parent: eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.SERVER_SETTINGS],
                parent: eM.s6.PRIVACY_AND_SAFETY
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES],
                parent: eM.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS],
                parent: eM.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS,
                predicate: () => !ez
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS],
                parent: eM.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING],
                parent: eM.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [eM.s6.PRIVACY_DATA_PRIVACY]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.SETTINGS_DATA_PRIVACY_CONTROLS],
                parent: eM.s6.PRIVACY_USER_SETTINGS
            },
            [eM.s6.PRIVACY_DATA_IMPROVE_DISCORD]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE],
                parent: eM.s6.PRIVACY_DATA_PRIVACY
            },
            [eM.s6.PRIVACY_DATA_PERSONALIZE]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE],
                parent: eM.s6.PRIVACY_DATA_PRIVACY
            },
            [eM.s6.PRIVACY_DATA_QUESTS]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT],
                parent: eM.s6.PRIVACY_DATA_PRIVACY
            },
            [eM.s6.PRIVACY_DATA_BASIC_SERVICE]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                parent: eM.s6.PRIVACY_DATA_PRIVACY,
                searchableTitles: [eM.CF]
            },
            [eM.s6.PRIVACY_DATA_REQUEST]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD],
                parent: eM.s6.PRIVACY_DATA_PRIVACY
            },
            [eM.s6.PRIVACY_STAFF_ONLY]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER],
                parent: eM.s6.PRIVACY_USER_SETTINGS,
                predicate: () => eH
            },
            [eM.s6.PRIVACY_KEYWORD_FILTER]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE, eL.Z.Messages.USER_KEYWORD_FILTERS_SEARCH_TERM_KEYWORD],
                parent: eM.s6.PRIVACY_USER_SETTINGS,
                predicate: () => eY
            },
            [eM.s6.PRIVACY_TERMS_POLICY]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                parent: eM.s6.PRIVACY_USER_SETTINGS,
                searchableTitles: [eM.CF]
            },
            [eM.s6.PRIVACY_SAFETY_ALERTS]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.SAFETY_ALERTS_SETTING_TITLE],
                parent: eM.s6.PRIVACY_USER_SETTINGS,
                predicate: () => ew
            },
            [eM.s6.PRIVACY_ACCOUNT_STANDING]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2],
                parent: eM.s6.PRIVACY_AND_SAFETY
            },
            [eM.s6.PRIVACY_ENCRYPTION]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.E2EE_ENCRYPTION, eL.Z.Messages.E2EE_END_TO_END_ENCRYPTION],
                parent: eM.s6.PRIVACY_AND_SAFETY
            },
            [eM.s6.PRIVACY_ENCRYPTION_VERIFICATION_CODES]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.E2EE_VERIFICATION_CODES],
                parent: eM.s6.PRIVACY_ENCRYPTION
            },
            [eM.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES]: {
                section: ef.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eL.Z.Messages.E2EE_VERIFIED_DEVICES],
                parent: eM.s6.PRIVACY_ENCRYPTION
            },
            [eM.s6.PRIVACY_FAMILY_CENTER]: {
                section: ef.oAB.FAMILY_CENTER,
                searchableTitles: [eL.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE],
                label: eL.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
                ariaLabel: eL.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
                element: er.Z,
                badgeCount: eU,
                newIndicator: (0, n.jsx)(o.TextBadge, {
                    text: eL.Z.Messages.NEW,
                    color: m.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [i.z.FAMILY_CENTER_NEW_BADGE]
            },
            [eM.s6.AUTHORIZED_APPS]: {
                section: ef.oAB.AUTHORIZED_APPS,
                searchableTitles: [eL.Z.Messages.AUTHORIZED_APPS],
                label: eL.Z.Messages.AUTHORIZED_APPS,
                element: es.Z
            },
            [eM.s6.SESSIONS]: {
                section: ef.oAB.SESSIONS,
                searchableTitles: [eL.Z.Messages.AUTH_SESSIONS],
                label: eL.Z.Messages.AUTH_SESSIONS,
                ariaLabel: eL.Z.Messages.AUTH_SESSIONS,
                element: eC.Z,
                newIndicatorDismissibleContentTypes: [i.z.AUTH_SESSIONS_NEW],
                predicate: () => V.Z.getCurrentConfig({ location: '9f7d84_1' }, { autoTrackExposure: !1 }).showSettings
            },
            [eM.s6.CONNECTIONS]: {
                section: ef.oAB.CONNECTIONS,
                searchableTitles: [eL.Z.Messages.CONNECTIONS],
                label: eL.Z.Messages.CONNECTIONS,
                ariaLabel: eL.Z.Messages.CONNECTIONS,
                element: en.Z,
                impressionName: a.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: eB },
                newIndicatorDismissibleContentTypes: [i.z.NEW_CRUNCHYROLL_CONNECTION]
            },
            [eM.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: ef.oAB.CONNECTIONS,
                searchableTitles: [eL.Z.Messages.CONNECTED_ACCOUNTS],
                parent: eM.s6.CONNECTIONS,
                element: en.Z
            },
            [eM.s6.CLIPS]: {
                section: ef.oAB.CLIPS,
                searchableTitles: [eL.Z.Messages.CLIPS],
                label: eL.Z.Messages.CLIPS,
                ariaLabel: eL.Z.Messages.CLIPS,
                icon: eF ? (0, n.jsx)(N.Z, {}) : void 0,
                element: C.Z,
                predicate: () => !ey
            },
            [eM.s6.FRIEND_REQUESTS]: {
                section: ef.oAB.FRIEND_REQUESTS,
                searchableTitles: [eL.Z.Messages.FRIEND_REQUESTS],
                label: eL.Z.Messages.FRIEND_REQUESTS,
                element: eo.Z
            },
            [eM.s6.PREMIUM]: {
                section: ef.oAB.PREMIUM,
                ariaLabel: eL.Z.Messages.PREMIUM,
                searchableTitles: [eL.Z.Messages.PREMIUM],
                label: eL.Z.Messages.PREMIUM,
                element: W.Z,
                className: eb.premiumTab
            },
            [eM.s6.GUILD_BOOSTING]: {
                section: ef.oAB.GUILD_BOOSTING,
                searchableTitles: [eL.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE],
                label: eL.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
                element: eT.Z
            },
            [eM.s6.SUBSCRIPTIONS]: {
                section: ef.oAB.SUBSCRIPTIONS,
                ariaLabel: eL.Z.Messages.SUBSCRIPTIONS_TITLE,
                searchableTitles: [eL.Z.Messages.SUBSCRIPTIONS_TITLE],
                label: eL.Z.Messages.SUBSCRIPTIONS_TITLE,
                element: x.Z,
                icon: ej
                    ? (0, n.jsx)(o.CircleWarningIcon, {
                          size: 'xs',
                          color: r.Z.unsafe_rawColors.YELLOW_300.css
                      })
                    : null
            },
            [eM.s6.SUBSCRIPTIONS_CREDITS]: {
                section: ef.oAB.SUBSCRIPTIONS,
                searchableTitles: [eL.Z.Messages.BILLING_SUBSCRIPTION_CREDIT],
                parent: eM.s6.SUBSCRIPTIONS
            },
            [eM.s6.GIFT_INVENTORY]: {
                section: ef.oAB.INVENTORY,
                searchableTitles: [eL.Z.Messages.GIFT_INVENTORY],
                label: eL.Z.Messages.GIFT_INVENTORY,
                element: ed.Z,
                ariaLabel: eL.Z.Messages.GIFT_INVENTORY,
                badgeCount: s
            },
            [eM.s6.GIFT_NITRO]: {
                section: ef.oAB.INVENTORY,
                searchableTitles: [eL.Z.Messages.GIFT_NITRO],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => !ek && eK
            },
            [eM.s6.GIFT_CODE_REDEMPTION]: {
                section: ef.oAB.INVENTORY,
                searchableTitles: [eL.Z.Messages.GIFT_INVENTORY_REDEEM_CODES],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => !ek
            },
            [eM.s6.GIFT_INVENTORY_QUESTS]: {
                section: ef.oAB.INVENTORY,
                searchableTitles: [eL.Z.Messages.QUESTS],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => eW
            },
            [eM.s6.GIFT_INVENTORY_LIST]: {
                section: ef.oAB.INVENTORY,
                searchableTitles: [eL.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => !ek
            },
            [eM.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: ef.oAB.INVENTORY,
                searchableTitles: [eL.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => ek
            },
            [eM.s6.BILLING]: {
                section: ef.oAB.BILLING,
                searchableTitles: [eL.Z.Messages.BILLING],
                label: eL.Z.Messages.BILLING,
                ariaLabel: eL.Z.Messages.BILLING,
                element: et.Z
            },
            [eM.s6.BILLING_PAYMENT_METHODS]: {
                section: ef.oAB.BILLING,
                searchableTitles: [eL.Z.Messages.BILLING_PAYMENT_SOURCES],
                parent: eM.s6.BILLING
            },
            [eM.s6.BILLING_TRANSACTION_HISTORY]: {
                section: ef.oAB.BILLING,
                searchableTitles: [eL.Z.Messages.BILLING_PAYMENT_HISTORY],
                parent: eM.s6.BILLING
            },
            [eM.s6.APPEARANCE]: {
                section: ef.oAB.APPEARANCE,
                searchableTitles: [eL.Z.Messages.APPEARANCE],
                label: eL.Z.Messages.APPEARANCE,
                ariaLabel: eL.Z.Messages.APPEARANCE,
                element: ee.Z,
                newIndicator: (0, n.jsx)(o.PremiumBadge, { text: eL.Z.Messages.NEW }),
                newIndicatorDismissibleContentTypes: eZ()
            },
            [eM.s6.APPEARANCE_THEME]: {
                section: ef.oAB.APPEARANCE,
                searchableTitles: [eL.Z.Messages.THEME],
                parent: eM.s6.APPEARANCE
            },
            [eM.s6.APPEARANCE_COLOR]: {
                section: ef.oAB.APPEARANCE,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE],
                parent: eM.s6.APPEARANCE_THEME
            },
            [eM.s6.APPEARANCE_ICON]: {
                section: ef.oAB.APPEARANCE,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE],
                parent: eM.s6.APPEARANCE_THEME
            },
            [eM.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: ef.oAB.APPEARANCE,
                searchableTitles: [eL.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL],
                parent: eM.s6.APPEARANCE
            },
            [eM.s6.APPEARANCE_SCALING_SPACING]: {
                section: ef.oAB.APPEARANCE,
                searchableTitles: [eL.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL],
                parent: eM.s6.APPEARANCE
            },
            [eM.s6.ACCESSIBILITY]: {
                section: ef.oAB.ACCESSIBILITY,
                searchableTitles: [eL.Z.Messages.ACCESSIBILITY],
                label: eL.Z.Messages.ACCESSIBILITY,
                ariaLabel: eL.Z.Messages.ACCESSIBILITY,
                element: X.Z
            },
            [eM.s6.ACCESSIBILITY_SATURATION]: {
                section: ef.oAB.ACCESSIBILITY,
                searchableTitles: [eL.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: ef.oAB.ACCESSIBILITY,
                searchableTitles: [eL.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: ef.oAB.ACCESSIBILITY,
                searchableTitles: [eL.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_TAGS]: {
                section: ef.oAB.ACCESSIBILITY,
                searchableTitles: [eL.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
                section: ef.oAB.ACCESSIBILITY,
                searchableTitles: [eL.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_CONTRAST]: {
                section: ef.oAB.ACCESSIBILITY,
                searchableTitles: [eL.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: ef.oAB.ACCESSIBILITY,
                searchableTitles: [eL.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_STICKERS]: {
                section: ef.oAB.ACCESSIBILITY,
                searchableTitles: [eL.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_MESSAGES]: {
                section: ef.oAB.ACCESSIBILITY,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: ef.oAB.ACCESSIBILITY,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_TTS],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.VOICE_AND_VIDEO]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.VOICE_AND_VIDEO],
                label: eL.Z.Messages.VOICE_AND_VIDEO,
                ariaLabel: eL.Z.Messages.VOICE_AND_VIDEO,
                element: ex.Z,
                predicate: () => v.Z.isSupported()
            },
            [eM.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_INPUT_DEVICE, eL.Z.Messages.FORM_LABEL_OUTPUT_DEVICE, eL.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE, eL.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS, eL.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_INPUT_VOLUME, eL.Z.Messages.FORM_LABEL_OUTPUT_VOLUME, eL.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE, eL.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS, eL.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE, eL.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_INPUT_MODE, eL.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY, eL.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.CALL_SOUNDS_SETTINGS],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.SOUNDBOARD],
                parent: eM.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eM.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.CALL_SOUNDS_SETTINGS],
                parent: eM.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.VIDEO_SETTINGS],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_VIDEO_DEVICE],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => v.Z.supports(eP.AN.VIDEO)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.SETTINGS_ADVANCED],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_VOICE_CODEC_TITLE],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_VOICE_OPEN_H264],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => v.Z.supports(eP.AN.OPEN_H264)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_VOICE_HARDWARE_H264],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => v.Z.supports(eP.AN.OPEN_H264)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.EXPERIMENTAL_ENCODERS],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== y.ZP.releaseChannel && v.Z.isExperimentalEncodersSupported()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_VOICE_PROCESSING],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.ECHO_CANCELLATION],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.SIDECHAIN_COMPRESSION],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eM.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.SIDECHAIN_COMPRESSION],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.NOISE_SUPPRESSION, eL.Z.Messages.NOISE_CANCELLATION_SEARCH_TERM_KRISP],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => v.Z.isNoiseSuppressionSupported()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.ADVANCED_VOICE_ACTIVITY],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => v.Z.isAdvancedVoiceActivitySupported()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.AUTOMATIC_GAIN_CONTROL],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => v.Z.isAutomaticGainControlSupported()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_QOS],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => v.Z.supports(eP.AN.QOS)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_ATTENUATION],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => v.Z.supports(eP.AN.ATTENUATION)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_SUBSYSTEM],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => v.Z.supports(eP.AN.LEGACY_AUDIO_SUBSYSTEM) || v.Z.supports(eP.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => F.isPlatformEmbedded
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_DEBUG],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_STREAM_INFO_OVERLAY],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => Y.Sb.getSetting()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.FORM_CHECKBOX_AEC_DUMP],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => v.Z.isAecDumpSupported()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === y.ZP.releaseChannel || 'development' === y.ZP.releaseChannel) && eH && v.Z.supports(eP.AN.CONNECTION_REPLAY)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => F.isPlatformEmbedded && v.Z.supports(eP.AN.DEBUG_LOGGING) && null != u.Z.fileManager.readLogFiles
            },
            [eM.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: ef.oAB.VOICE,
                searchableTitles: [eL.Z.Messages.RESET_VOICE_SETTINGS],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eM.s6.POGGERMODE]: {
                section: ef.oAB.POGGERMODE,
                searchableTitles: [eL.Z.Messages.POGGERMODE],
                label: eL.Z.Messages.POGGERMODE,
                ariaLabel: eL.Z.Messages.POGGERMODE,
                element: R.Z,
                predicate: () => p.Z.settingsVisible,
                icon: (0, n.jsx)('img', {
                    alt: '',
                    src: t(348621),
                    className: eb.poggermodeIcon
                })
            },
            [eM.s6.CHAT]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.CHAT],
                label: eL.Z.Messages.CHAT,
                ariaLabel: eL.Z.Messages.CHAT,
                element: eA.Z
            },
            [eM.s6.CHAT_INLINE_MEDIA]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.INLINE_MEDIA_LABEL],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.INLINE_EMBED_MEDIA],
                parent: eM.s6.CHAT_INLINE_MEDIA
            },
            [eM.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.INLINE_ATTACHMENT_MEDIA],
                parent: eM.s6.CHAT_INLINE_MEDIA
            },
            [eM.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.IMAGE_DESCRIPTION],
                parent: eM.s6.CHAT_INLINE_MEDIA
            },
            [eM.s6.CHAT_EMBEDS]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.RENDER_EMBEDS_LABEL],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.RENDER_EMBEDS],
                parent: eM.s6.CHAT_EMBEDS
            },
            [eM.s6.CHAT_EMOJI]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.EMOJI],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_EMOJI_REACTIONS]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.RENDER_REACTIONS],
                parent: eM.s6.CHAT_EMOJI
            },
            [eM.s6.CHAT_EMOJI_EMOTICONS]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.CONVERT_EMOTICONS],
                parent: eM.s6.CHAT_EMOJI
            },
            [eM.s6.CHAT_STICKERS]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.AUTO_SUGGEST_STICKERS],
                parent: eM.s6.CHAT_STICKERS
            },
            [eM.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.STICKERS_IN_AUTOCOMPLETE],
                parent: eM.s6.CHAT_STICKERS
            },
            [eM.s6.CHAT_TEXT_BOX]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION],
                parent: eM.s6.CHAT_TEXT_BOX
            },
            [eM.s6.CHAT_THREADS]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.THREADS],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION],
                parent: eM.s6.CHAT_THREADS
            },
            [eM.s6.CHAT_SPOILERS]: {
                section: ef.oAB.TEXT,
                searchableTitles: [eL.Z.Messages.SHOW_SPOILER_CONTENT],
                parent: eM.s6.CHAT
            },
            [eM.s6.NOTIFICATIONS]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.NOTIFICATIONS],
                label: eL.Z.Messages.NOTIFICATIONS,
                ariaLabel: eL.Z.Messages.NOTIFICATIONS,
                element: eu.Z
            },
            [eM.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL],
                parent: eM.s6.NOTIFICATIONS,
                predicate: () => (0, F.isWindows)()
            },
            [eM.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advancd, Staff Only)'],
                parent: eM.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [eM.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: eM.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eM.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: eM.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eM.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: eM.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eM.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_TTS],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER],
                parent: eM.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eM.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER],
                parent: eM.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eM.s6.NOTIFICATIONS_SOUNDS]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.SOUNDS],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_EMAILS]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: ef.oAB.NOTIFICATIONS,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.KEYBINDS]: {
                section: ef.oAB.KEYBINDS,
                searchableTitles: [eL.Z.Messages.KEYBINDS],
                label: eL.Z.Messages.KEYBINDS,
                element: e_.Z
            },
            [eM.s6.LANGUAGE]: {
                section: ef.oAB.LOCALE,
                searchableTitles: [eL.Z.Messages.LANGUAGE],
                label: eL.Z.Messages.LANGUAGE,
                element: eE.Z
            },
            [eM.s6.WINDOW_SETTINGS]: {
                section: ef.oAB.WINDOWS,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS],
                label: eL.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
                element: eg.Z,
                predicate: () => F.isPlatformEmbedded && (0, F.isWindows)()
            },
            [eM.s6.LINUX_SETTINGS]: {
                section: ef.oAB.LINUX,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_LINUX_SETTINGS],
                label: eL.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
                element: ev,
                predicate: () => F.isPlatformEmbedded && (0, F.isLinux)()
            },
            [eM.s6.STREAMER_MODE]: {
                section: ef.oAB.STREAMER_MODE,
                searchableTitles: [eL.Z.Messages.STREAMER_MODE],
                label: eL.Z.Messages.STREAMER_MODE,
                ariaLabel: eL.Z.Messages.STREAMER_MODE,
                element: em.Z
            },
            [eM.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: ef.oAB.STREAMER_MODE,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_ENABLE]: {
                section: ef.oAB.STREAMER_MODE,
                searchableTitles: [eL.Z.Messages.ENABLE_STREAMER_MODE_LABEL],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: ef.oAB.STREAMER_MODE,
                searchableTitles: [eL.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: ef.oAB.STREAMER_MODE,
                searchableTitles: [eL.Z.Messages.HIDE_INSTANT_INVITES_LABEL],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: ef.oAB.STREAMER_MODE,
                searchableTitles: [eL.Z.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: ef.oAB.STREAMER_MODE,
                searchableTitles: [eL.Z.Messages.DISABLE_NOTIFICATIONS_LABEL],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: ef.oAB.STREAMER_MODE,
                searchableTitles: [eL.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL],
                parent: eM.s6.STREAMER_MODE,
                predicate: () => {
                    var e, s, t;
                    return null !== (t = null === u.Z || void 0 === u.Z ? void 0 : null === (s = u.Z.window) || void 0 === s ? void 0 : null === (e = s.supportsContentProtection) || void 0 === e ? void 0 : e.call(s)) && void 0 !== t && t;
                }
            },
            [eM.s6.SETTINGS_ADVANCED]: {
                section: ef.oAB.ADVANCED,
                searchableTitles: [eL.Z.Messages.SETTINGS_ADVANCED],
                label: eL.Z.Messages.SETTINGS_ADVANCED,
                ariaLabel: eL.Z.Messages.SETTINGS_ADVANCED,
                element: $.Z
            },
            [eM.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: ef.oAB.ADVANCED,
                searchableTitles: [eL.Z.Messages.DEVELOPER_MODE],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => U.wS
            },
            [eM.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: ef.oAB.ADVANCED,
                searchableTitles: [eL.Z.Messages.HARDWARE_ACCELERATION],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => F.isPlatformEmbedded
            },
            [eM.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: ef.oAB.ADVANCED,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_SHOW_LIBRARY],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => eQ
            },
            [eM.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: ef.oAB.ADVANCED,
                searchableTitles: [eL.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => eJ
            },
            [eM.s6.ACTIVITY_PRIVACY]: {
                section: ef.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eL.Z.Messages.ACTIVITY_PRIVACY],
                label: eL.Z.Messages.ACTIVITY_PRIVACY,
                ariaLabel: eL.Z.Messages.ACTIVITY_PRIVACY,
                element: J.Z,
                predicate: () => !ey
            },
            [eM.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: ey ? ef.oAB.GAMES : ef.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eL.Z.Messages.ACTIVITY_STATUS],
                parent: ey ? eM.s6.GAMES_ACTIVITY_PRIVACY : eM.s6.ACTIVITY_PRIVACY
            },
            [eM.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: ey ? ef.oAB.GAMES : ef.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eL.Z.Messages.ACTIVITY_PARTY_PRIVACY],
                parent: ey ? eM.s6.GAMES_ACTIVITY_PRIVACY : eM.s6.ACTIVITY_PRIVACY
            },
            [eM.s6.ACTIVITY_PRIVACY_BROADCASTING]: {
                section: ey ? ef.oAB.GAMES : ef.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eL.Z.Messages.BROADCASTING_SETTINGS],
                parent: ey ? eM.s6.GAMES_ACTIVITY_PRIVACY : eM.s6.ACTIVITY_PRIVACY,
                predicate: () => eq
            },
            [eM.s6.ACTIVITY_PRIVACY_TOS]: {
                section: ey ? ef.oAB.GAMES : ef.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eM.CF],
                parent: ey ? eM.s6.GAMES_ACTIVITY_PRIVACY : eM.s6.ACTIVITY_PRIVACY
            },
            [eM.s6.REGISTERED_GAMES]: {
                section: ef.oAB.REGISTERED_GAMES,
                searchableTitles: [eL.Z.Messages.REGISTERED_GAMES],
                label: eL.Z.Messages.REGISTERED_GAMES,
                element: el.Z,
                predicate: () => !ey && (0, ep.Jw)()
            },
            [eM.s6.OVERLAY]: {
                section: ef.oAB.OVERLAY,
                searchableTitles: [eL.Z.Messages.OVERLAY],
                label: eL.Z.Messages.OVERLAY,
                element: eI.Z,
                predicate: () => !ey && eG
            },
            [eM.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, S.Z)(!0),
                searchableTitles: [eL.Z.Messages.WHATS_NEW],
                label: eL.Z.Messages.WHATS_NEW
            },
            [eM.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    B.default.track(ef.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, G.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                B.default.track(ef.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, I.Z)(e);
                            }
                        });
                },
                searchableTitles: [eL.Z.Messages.MERCHANDISE],
                label: eL.Z.Messages.MERCHANDISE,
                ariaLabel: eL.Z.Messages.MERCHANDISE
            },
            [eM.s6.HYPESQUAD]: {
                section: ef.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eL.Z.Messages.USER_SETTINGS_HYPESQUAD],
                label: eL.Z.Messages.USER_SETTINGS_HYPESQUAD,
                element: ec.Z
            },
            [eM.s6.EXPERIMENTS]: {
                section: ef.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: eh.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: ei.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_FLAGS]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eH && b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => !1
            },
            [eM.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['CSS Debugging'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eH && b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eH && b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eH && b.Z.isDeveloper && Z.default.layoutDebuggingEnabled
            },
            [eM.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eH && b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => T.q && b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: ef.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.HOTSPOT_OPTIONS]: {
                section: ef.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: w.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: ef.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: A.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.PAYMENT_FLOW_MODALS]: {
                section: ef.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: k.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.TEXT_PLAYGROUND]: {
                section: ef.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: eO.Z,
                predicate: () => (0, Q.D)() || b.Z.isDeveloper
            },
            [eM.s6.DESIGN_SYSTEMS]: {
                section: ef.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: ea.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.TEXT_COMPONENTS]: {
                section: ef.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: z.Z,
                predicate: () => (0, Q.D)() || b.Z.isDeveloper
            },
            [eM.s6.INTL_TESTING]: {
                section: ef.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: h.Z,
                predicate: () => eH || b.Z.isDeveloper
            },
            [eM.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
                section: ef.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
                searchableTitles: ['Profile Effects Preview Tool'],
                label: 'Profile Effects Preview Tool',
                element: D.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.QUEST_PREVIEW_TOOL]: {
                section: ef.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: L.Z,
                predicate: () => (0, P.X7)({ location: eD.dr.QUEST_PREVIEW_TOOL })
            },
            [eM.s6.LOGOUT]: {
                section: 'logout',
                onClick: () => {
                    (0, o.openModal)((e) =>
                        (0, n.jsx)(o.ConfirmModal, {
                            header: eL.Z.Messages.LOGOUT,
                            confirmText: eL.Z.Messages.LOGOUT,
                            cancelText: eL.Z.Messages.CANCEL,
                            onCancel: e.onClose,
                            onConfirm: () => c.Z.logout(),
                            ...e,
                            children: (0, n.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: eL.Z.Messages.USER_SETTINGS_CONFIRM_LOGOUT
                            })
                        })
                    );
                },
                label: eL.Z.Messages.LOGOUT,
                ariaLabel: eL.Z.Messages.LOGOUT,
                icon: (0, n.jsx)(o.DoorExitIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            },
            [eM.s6.SOCIAL_LINKS]: {
                section: E.ID.CUSTOM,
                element: K.Z
            },
            [eM.s6.CLIENT_DEBUG_INFO]: {
                section: E.ID.CUSTOM,
                element: H.Z
            }
        });
    };
