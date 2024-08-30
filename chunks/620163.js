t.d(s, {
    i: function () {
        return eB;
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
    u = t(230711),
    _ = t(493544),
    E = t(579806),
    T = t(782568),
    I = t(758182),
    S = t(163379),
    N = t(703288),
    m = t(574755),
    C = t(377171),
    g = t(621628),
    A = t(18438),
    h = t(778825),
    O = t(665166),
    p = t(351780),
    x = t(231765),
    R = t(813732),
    f = t(398140),
    M = t(564344),
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
    y = t(358085),
    F = t(998502),
    V = t(392735),
    w = t(695346),
    k = t(604227),
    Y = t(38915),
    H = t(498639),
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
    eu = t(389650),
    e_ = t(649157),
    eE = t(593648),
    eT = t(327885),
    eI = t(595242),
    eS = t(301121),
    eN = t(757151),
    em = t(463153),
    eC = t(36192),
    eg = t(338345),
    eA = t(400287),
    eh = t(554042),
    eO = t(200645),
    ep = t(287490),
    ex = t(168308),
    eR = t(277329),
    ef = t(674116),
    eM = t(726985),
    eD = t(981631),
    eP = t(46140),
    eL = t(65154),
    eb = t(689938),
    eZ = t(54048);
let ev = () => [i.z.CLIENT_THEMES_SETTINGS_BADGE, i.z.DEKSTOP_CUSTOM_APP_ICON_BADGE],
    ej = eO.Z,
    eB = (e) => {
        let { unseenGiftCount: s, showPrepaidPaymentPastDueWarning: eB, impressionSource: eU, numOfPendingFamilyRequests: eG, isOverlaySupported: ey, isClipsBetaTagShowing: eF = !1, shouldMergeGameSettings: eV, isUserSettingsSearchEnabled: ew, isKeywordFilteringEnabled: ek, isStaff: eY, isInappropriateConversationWarningEnabled: eH, paymentsBlocked: eW, isEligibleForQuests: eK, showGiftNitro: ez, isStricterMessageRequestsEnabled: eQ, hasLibraryApplication: eX, hasTOTPEnabled: eq, canBroadcastActivity: eJ, developerMode: e$, isSafetySettingsV2Enabled: e0 } = e;
        return Object.freeze({
            [eM.s6.SEARCH_NO_RESULTS]: {
                section: _.ID.CUSTOM,
                element: em.Z,
                predicate: () => ew
            },
            [eM.s6.ACCOUNT]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_MY_ACCOUNT],
                label: eb.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
                ariaLabel: eb.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
                element: q.Z
            },
            [eM.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [eb.Z.Messages.PROFILE],
                parent: eM.s6.ACCOUNT,
                section: eD.oAB.ACCOUNT
            },
            [eM.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [eb.Z.Messages.DISPLAY_NAME],
                section: eD.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE
            },
            [eM.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [eb.Z.Messages.CHANGE_PHONE_NUMBER],
                section: eD.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE
            },
            [eM.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE],
                section: eD.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE
            },
            [eM.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [eb.Z.Messages.CHANGE_EMAIL],
                section: eD.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PROFILE
            },
            [eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION],
                section: eD.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT
            },
            [eM.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [eb.Z.Messages.CHANGE_PASSWORD],
                section: eD.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [eb.Z.Messages.FORM_LABEL_CONFIRM_PASSWORD],
                section: eD.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [eb.Z.Messages.SETTINGS_TWO_FA],
                section: eD.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [eb.Z.Messages.TWO_FA_ENABLE],
                section: eD.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !eq
            },
            [eM.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [eb.Z.Messages.TWO_FA_REMOVE],
                section: eD.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => eq
            },
            [eM.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [eb.Z.Messages.TWO_FA_BACKUP_CODE],
                section: eD.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [eb.Z.Messages.MFA_SMS_AUTH],
                section: eD.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [eb.Z.Messages.TWO_FA_WEBAUTHN_REGISTER],
                section: eD.oAB.ACCOUNT,
                parent: eM.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eM.s6.ACCOUNT_REMOVAL]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION],
                parent: eM.s6.ACCOUNT
            },
            [eM.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [eb.Z.Messages.DISABLE_ACCOUNT],
                parent: eM.s6.ACCOUNT_REMOVAL
            },
            [eM.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eD.oAB.ACCOUNT,
                searchableTitles: [eb.Z.Messages.DELETE_ACCOUNT],
                parent: eM.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [eM.s6.GAMES]: {
                section: eD.oAB.GAMES,
                searchableTitles: [eb.Z.Messages.GAMES],
                label: eb.Z.Messages.GAMES,
                ariaLabel: eb.Z.Messages.GAMES,
                element: eR.Z,
                predicate: () => eV
            },
            [eM.s6.GAMES_MY_GAMES]: {
                section: eD.oAB.GAMES,
                searchableTitles: [eb.Z.Messages.MY_GAMES],
                parent: eM.s6.GAMES
            },
            [eM.s6.GAMES_CLIPS]: {
                section: eD.oAB.GAMES,
                searchableTitles: [eb.Z.Messages.CLIPS],
                parent: eM.s6.GAMES
            },
            [eM.s6.GAMES_OVERLAY]: {
                section: eD.oAB.GAMES,
                searchableTitles: [eb.Z.Messages.OVERLAY],
                parent: eM.s6.GAMES
            },
            [eM.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eD.oAB.GAMES,
                searchableTitles: [eb.Z.Messages.ACTIVITY_PRIVACY],
                parent: eM.s6.GAMES
            },
            [eM.s6.PROFILE_CUSTOMIZATION]: {
                section: eD.oAB.PROFILE_CUSTOMIZATION,
                type: _.bT.WIDE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_PROFILES],
                label: eb.Z.Messages.USER_SETTINGS_PROFILES,
                ariaLabel: eb.Z.Messages.USER_SETTINGS_PROFILES,
                element: M.Z,
                newIndicator: (0, n.jsx)(o.PremiumBadge, { text: eb.Z.Messages.NEW }),
                notice: {
                    stores: [j.Z, h.Z],
                    element: f.Z
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, A.It)(), (0, d.P6)(), u.Z.clearSubsection(eD.oAB.PROFILE_CUSTOMIZATION);
                    });
                }
            },
            [eM.s6.PROFILE_DISPLAY_NAME]: {
                section: eD.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eb.Z.Messages.DISPLAY_NAME],
                parent: eM.s6.PROFILE_CUSTOMIZATION
            },
            [eM.s6.PROFILE_USER_PROFILE]: {
                section: eD.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eb.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE],
                parent: eM.s6.PROFILE_CUSTOMIZATION
            },
            [eM.s6.PROFILE_SERVER_PROFILES]: {
                section: eD.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [eb.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY],
                parent: eM.s6.PROFILE_CUSTOMIZATION
            },
            [eM.s6.PRIVACY_AND_SAFETY]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                label: eb.Z.Messages.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_AND_SAFETY],
                ariaLabel: eb.Z.Messages.PRIVACY_AND_SAFETY,
                element: eS.Z,
                predicate: () => !e0
            },
            [eM.s6.PRIVACY_AND_SAFETY_V2]: {
                section: eD.oAB.PRIVACY_AND_SAFETY_V2,
                label: eb.Z.Messages.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_AND_SAFETY],
                ariaLabel: eb.Z.Messages.PRIVACY_AND_SAFETY,
                element: eN.Z,
                predicate: () => e0
            },
            [eM.s6.PRIVACY_USER_SETTINGS]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_AND_SAFETY],
                parent: eM.s6.PRIVACY_AND_SAFETY
            },
            [eM.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL]: {
                section: eD.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eb.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL],
                parent: eM.s6.PRIVACY_AND_SAFETY_V2
            },
            [eM.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY]: {
                section: eD.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eb.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY],
                parent: eM.s6.PRIVACY_AND_SAFETY_V2
            },
            [eM.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eD.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eb.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING],
                parent: eM.s6.PRIVACY_AND_SAFETY_V2
            },
            [eM.s6.PRIVACY_AND_SAFETY_ENCRYPTION]: {
                section: eD.oAB.PRIVACY_AND_SAFETY_V2,
                searchableTitles: [eb.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION],
                parent: eM.s6.PRIVACY_AND_SAFETY_V2
            },
            [eM.s6.PRIVACY_SENSITIVE_MEDIA]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER, eb.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_FILTER, eb.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_BLUR, eb.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_SENSITIVE_CONTENT, eb.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_EXPLICIT],
                parent: eM.s6.PRIVACY_USER_SETTINGS
            },
            [eM.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.SETTINGS_DM_SPAM_FILTER, eb.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_MESSAGES, eb.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_INBOX],
                parent: eM.s6.PRIVACY_USER_SETTINGS
            },
            [eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.USER_DM_SETTINGS, eb.Z.Messages.USER_DM_SEARCH_TERM_DIRECT_MESSAGES, eb.Z.Messages.USER_DM_SEARCH_TERM_DM],
                parent: eM.s6.PRIVACY_USER_SETTINGS
            },
            [eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.NEW_GUILDS_DM_ALLOWED],
                parent: eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER],
                parent: eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER],
                parent: eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
                predicate: () => !eQ
            },
            [eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.NSFW_DM_COMMANDS_HEADER],
                parent: eM.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.SERVER_SETTINGS],
                parent: eM.s6.PRIVACY_AND_SAFETY
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES],
                parent: eM.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS],
                parent: eM.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS,
                predicate: () => !eQ
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS],
                parent: eM.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [eM.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING],
                parent: eM.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [eM.s6.PRIVACY_DATA_PRIVACY]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.SETTINGS_DATA_PRIVACY_CONTROLS],
                parent: eM.s6.PRIVACY_USER_SETTINGS
            },
            [eM.s6.PRIVACY_DATA_IMPROVE_DISCORD]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE],
                parent: eM.s6.PRIVACY_DATA_PRIVACY
            },
            [eM.s6.PRIVACY_DATA_PERSONALIZE]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE],
                parent: eM.s6.PRIVACY_DATA_PRIVACY
            },
            [eM.s6.PRIVACY_DATA_QUESTS]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT],
                parent: eM.s6.PRIVACY_DATA_PRIVACY
            },
            [eM.s6.PRIVACY_DATA_BASIC_SERVICE]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                parent: eM.s6.PRIVACY_DATA_PRIVACY,
                searchableTitles: [eM.CF]
            },
            [eM.s6.PRIVACY_DATA_REQUEST]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD],
                parent: eM.s6.PRIVACY_DATA_PRIVACY
            },
            [eM.s6.PRIVACY_STAFF_ONLY]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER],
                parent: eM.s6.PRIVACY_USER_SETTINGS,
                predicate: () => eY
            },
            [eM.s6.PRIVACY_KEYWORD_FILTER]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE, eb.Z.Messages.USER_KEYWORD_FILTERS_SEARCH_TERM_KEYWORD],
                parent: eM.s6.PRIVACY_USER_SETTINGS,
                predicate: () => ek
            },
            [eM.s6.PRIVACY_TERMS_POLICY]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                parent: eM.s6.PRIVACY_USER_SETTINGS,
                searchableTitles: [eM.CF]
            },
            [eM.s6.PRIVACY_SAFETY_ALERTS]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.SAFETY_ALERTS_SETTING_TITLE],
                parent: eM.s6.PRIVACY_USER_SETTINGS,
                predicate: () => eH
            },
            [eM.s6.PRIVACY_ACCOUNT_STANDING]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2],
                parent: eM.s6.PRIVACY_AND_SAFETY
            },
            [eM.s6.PRIVACY_ENCRYPTION]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.E2EE_ENCRYPTION, eb.Z.Messages.E2EE_END_TO_END_ENCRYPTION],
                parent: eM.s6.PRIVACY_AND_SAFETY
            },
            [eM.s6.PRIVACY_ENCRYPTION_VERIFICATION_CODES]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.E2EE_VERIFICATION_CODES],
                parent: eM.s6.PRIVACY_ENCRYPTION
            },
            [eM.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES]: {
                section: eD.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [eb.Z.Messages.E2EE_VERIFIED_DEVICES],
                parent: eM.s6.PRIVACY_ENCRYPTION
            },
            [eM.s6.PRIVACY_FAMILY_CENTER]: {
                section: eD.oAB.FAMILY_CENTER,
                searchableTitles: [eb.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE],
                label: eb.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
                ariaLabel: eb.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
                element: er.Z,
                badgeCount: eG,
                newIndicator: (0, n.jsx)(o.TextBadge, {
                    text: eb.Z.Messages.NEW,
                    color: C.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [i.z.FAMILY_CENTER_NEW_BADGE]
            },
            [eM.s6.AUTHORIZED_APPS]: {
                section: eD.oAB.AUTHORIZED_APPS,
                searchableTitles: [eb.Z.Messages.AUTHORIZED_APPS],
                label: eb.Z.Messages.AUTHORIZED_APPS,
                element: es.Z
            },
            [eM.s6.SESSIONS]: {
                section: eD.oAB.SESSIONS,
                searchableTitles: [eb.Z.Messages.AUTH_SESSIONS],
                label: eb.Z.Messages.AUTH_SESSIONS,
                ariaLabel: eb.Z.Messages.AUTH_SESSIONS,
                element: eC.Z,
                newIndicatorDismissibleContentTypes: [i.z.AUTH_SESSIONS_NEW],
                predicate: () => V.Z.getCurrentConfig({ location: '9f7d84_1' }, { autoTrackExposure: !1 }).showSettings
            },
            [eM.s6.CONNECTIONS]: {
                section: eD.oAB.CONNECTIONS,
                searchableTitles: [eb.Z.Messages.CONNECTIONS],
                label: eb.Z.Messages.CONNECTIONS,
                ariaLabel: eb.Z.Messages.CONNECTIONS,
                element: en.Z,
                impressionName: a.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: eU },
                newIndicatorDismissibleContentTypes: [i.z.NEW_CRUNCHYROLL_CONNECTION]
            },
            [eM.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eD.oAB.CONNECTIONS,
                searchableTitles: [eb.Z.Messages.CONNECTED_ACCOUNTS],
                parent: eM.s6.CONNECTIONS,
                element: en.Z
            },
            [eM.s6.CLIPS]: {
                section: eD.oAB.CLIPS,
                searchableTitles: [eb.Z.Messages.CLIPS],
                label: eb.Z.Messages.CLIPS,
                ariaLabel: eb.Z.Messages.CLIPS,
                icon: eF ? (0, n.jsx)(N.Z, {}) : void 0,
                element: m.Z,
                predicate: () => !eV
            },
            [eM.s6.FRIEND_REQUESTS]: {
                section: eD.oAB.FRIEND_REQUESTS,
                searchableTitles: [eb.Z.Messages.FRIEND_REQUESTS],
                label: eb.Z.Messages.FRIEND_REQUESTS,
                element: eo.Z
            },
            [eM.s6.PREMIUM]: {
                section: eD.oAB.PREMIUM,
                ariaLabel: eb.Z.Messages.PREMIUM,
                searchableTitles: [eb.Z.Messages.PREMIUM],
                label: eb.Z.Messages.PREMIUM,
                element: W.Z,
                className: eZ.premiumTab
            },
            [eM.s6.GUILD_BOOSTING]: {
                section: eD.oAB.GUILD_BOOSTING,
                searchableTitles: [eb.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE],
                label: eb.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
                element: eI.Z
            },
            [eM.s6.SUBSCRIPTIONS]: {
                section: eD.oAB.SUBSCRIPTIONS,
                ariaLabel: eb.Z.Messages.SUBSCRIPTIONS_TITLE,
                searchableTitles: [eb.Z.Messages.SUBSCRIPTIONS_TITLE],
                label: eb.Z.Messages.SUBSCRIPTIONS_TITLE,
                element: R.Z,
                icon: eB
                    ? (0, n.jsx)(o.CircleWarningIcon, {
                          size: 'xs',
                          color: r.Z.unsafe_rawColors.YELLOW_300.css
                      })
                    : null
            },
            [eM.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eD.oAB.SUBSCRIPTIONS,
                searchableTitles: [eb.Z.Messages.BILLING_SUBSCRIPTION_CREDIT],
                parent: eM.s6.SUBSCRIPTIONS
            },
            [eM.s6.GIFT_INVENTORY]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [eb.Z.Messages.GIFT_INVENTORY],
                label: eb.Z.Messages.GIFT_INVENTORY,
                element: ed.Z,
                ariaLabel: eb.Z.Messages.GIFT_INVENTORY,
                badgeCount: s
            },
            [eM.s6.GIFT_NITRO]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [eb.Z.Messages.GIFT_NITRO],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => !eW && ez
            },
            [eM.s6.GIFT_CODE_REDEMPTION]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [eb.Z.Messages.GIFT_INVENTORY_REDEEM_CODES],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => !eW
            },
            [eM.s6.GIFT_INVENTORY_QUESTS]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [eb.Z.Messages.QUESTS],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => eK
            },
            [eM.s6.GIFT_INVENTORY_LIST]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [eb.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => !eW
            },
            [eM.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eD.oAB.INVENTORY,
                searchableTitles: [eb.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER],
                parent: eM.s6.GIFT_INVENTORY,
                predicate: () => eW
            },
            [eM.s6.BILLING]: {
                section: eD.oAB.BILLING,
                searchableTitles: [eb.Z.Messages.BILLING],
                label: eb.Z.Messages.BILLING,
                ariaLabel: eb.Z.Messages.BILLING,
                element: et.Z
            },
            [eM.s6.BILLING_PAYMENT_METHODS]: {
                section: eD.oAB.BILLING,
                searchableTitles: [eb.Z.Messages.BILLING_PAYMENT_SOURCES],
                parent: eM.s6.BILLING
            },
            [eM.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eD.oAB.BILLING,
                searchableTitles: [eb.Z.Messages.BILLING_PAYMENT_HISTORY],
                parent: eM.s6.BILLING
            },
            [eM.s6.APPEARANCE]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [eb.Z.Messages.APPEARANCE],
                label: eb.Z.Messages.APPEARANCE,
                ariaLabel: eb.Z.Messages.APPEARANCE,
                element: ee.Z,
                newIndicator: (0, n.jsx)(o.PremiumBadge, { text: eb.Z.Messages.NEW }),
                newIndicatorDismissibleContentTypes: ev()
            },
            [eM.s6.APPEARANCE_THEME]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [eb.Z.Messages.THEME],
                parent: eM.s6.APPEARANCE
            },
            [eM.s6.APPEARANCE_COLOR]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE],
                parent: eM.s6.APPEARANCE_THEME
            },
            [eM.s6.APPEARANCE_ICON]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE],
                parent: eM.s6.APPEARANCE_THEME
            },
            [eM.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [eb.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL],
                parent: eM.s6.APPEARANCE
            },
            [eM.s6.APPEARANCE_SCALING_SPACING]: {
                section: eD.oAB.APPEARANCE,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL],
                parent: eM.s6.APPEARANCE
            },
            [eM.s6.ACCESSIBILITY]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY],
                label: eb.Z.Messages.ACCESSIBILITY,
                ariaLabel: eb.Z.Messages.ACCESSIBILITY,
                element: X.Z
            },
            [eM.s6.ACCESSIBILITY_SATURATION]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_TAGS]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_SYNC_PROFILE_THEME]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_CONTRAST]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_STICKERS]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_MESSAGES]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eD.oAB.ACCESSIBILITY,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_TTS],
                parent: eM.s6.ACCESSIBILITY
            },
            [eM.s6.VOICE_AND_VIDEO]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.VOICE_AND_VIDEO],
                label: eb.Z.Messages.VOICE_AND_VIDEO,
                ariaLabel: eb.Z.Messages.VOICE_AND_VIDEO,
                element: ef.Z,
                predicate: () => v.Z.isSupported()
            },
            [eM.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_INPUT_DEVICE, eb.Z.Messages.FORM_LABEL_OUTPUT_DEVICE, eb.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE, eb.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS, eb.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_INPUT_VOLUME, eb.Z.Messages.FORM_LABEL_OUTPUT_VOLUME, eb.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE, eb.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS, eb.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE, eb.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_INPUT_MODE, eb.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY, eb.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.CALL_SOUNDS_SETTINGS],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.SOUNDBOARD],
                parent: eM.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eM.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.CALL_SOUNDS_SETTINGS],
                parent: eM.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.VIDEO_SETTINGS],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_VIDEO_DEVICE],
                parent: eM.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => v.Z.supports(eL.AN.VIDEO)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.SETTINGS_ADVANCED],
                parent: eM.s6.VOICE_AND_VIDEO
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_VOICE_CODEC_TITLE],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_VOICE_OPEN_H264],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => v.Z.supports(eL.AN.OPEN_H264)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_VOICE_HARDWARE_H264],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => v.Z.supports(eL.AN.OPEN_H264)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.EXPERIMENTAL_ENCODERS],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== F.ZP.releaseChannel && v.Z.isExperimentalEncodersSupported()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_VOICE_PROCESSING],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.ECHO_CANCELLATION],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.SIDECHAIN_COMPRESSION],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eM.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.SIDECHAIN_COMPRESSION],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.NOISE_SUPPRESSION, eb.Z.Messages.NOISE_CANCELLATION_SEARCH_TERM_KRISP],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => v.Z.isNoiseSuppressionSupported()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.ADVANCED_VOICE_ACTIVITY],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => v.Z.isAdvancedVoiceActivitySupported()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.AUTOMATIC_GAIN_CONTROL],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => v.Z.isAutomaticGainControlSupported()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_QOS],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => v.Z.supports(eL.AN.QOS)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_ATTENUATION],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => v.Z.supports(eL.AN.ATTENUATION)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_SUBSYSTEM],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => v.Z.supports(eL.AN.LEGACY_AUDIO_SUBSYSTEM) || v.Z.supports(eL.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => y.isPlatformEmbedded
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_DEBUG],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_STREAM_INFO_OVERLAY],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => w.Sb.getSetting()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_CHECKBOX_AEC_DUMP],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => v.Z.isAecDumpSupported()
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === F.ZP.releaseChannel || 'development' === F.ZP.releaseChannel) && eY && v.Z.supports(eL.AN.CONNECTION_REPLAY)
            },
            [eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => y.isPlatformEmbedded && v.Z.supports(eL.AN.DEBUG_LOGGING) && null != E.Z.fileManager.readLogFiles
            },
            [eM.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eD.oAB.VOICE,
                searchableTitles: [eb.Z.Messages.RESET_VOICE_SETTINGS],
                parent: eM.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eM.s6.POGGERMODE]: {
                section: eD.oAB.POGGERMODE,
                searchableTitles: [eb.Z.Messages.POGGERMODE],
                label: eb.Z.Messages.POGGERMODE,
                ariaLabel: eb.Z.Messages.POGGERMODE,
                element: x.Z,
                predicate: () => p.Z.settingsVisible,
                icon: (0, n.jsx)('img', {
                    alt: '',
                    src: t(348621),
                    className: eZ.poggermodeIcon
                })
            },
            [eM.s6.CHAT]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.CHAT],
                label: eb.Z.Messages.CHAT,
                ariaLabel: eb.Z.Messages.CHAT,
                element: eA.Z
            },
            [eM.s6.CHAT_INLINE_MEDIA]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.INLINE_MEDIA_LABEL],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.INLINE_EMBED_MEDIA],
                parent: eM.s6.CHAT_INLINE_MEDIA
            },
            [eM.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.INLINE_ATTACHMENT_MEDIA],
                parent: eM.s6.CHAT_INLINE_MEDIA
            },
            [eM.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.IMAGE_DESCRIPTION],
                parent: eM.s6.CHAT_INLINE_MEDIA
            },
            [eM.s6.CHAT_EMBEDS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.RENDER_EMBEDS_LABEL],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.RENDER_EMBEDS],
                parent: eM.s6.CHAT_EMBEDS
            },
            [eM.s6.CHAT_EMOJI]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.EMOJI],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_EMOJI_REACTIONS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.RENDER_REACTIONS],
                parent: eM.s6.CHAT_EMOJI
            },
            [eM.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.CONVERT_EMOTICONS],
                parent: eM.s6.CHAT_EMOJI
            },
            [eM.s6.CHAT_STICKERS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.AUTO_SUGGEST_STICKERS],
                parent: eM.s6.CHAT_STICKERS
            },
            [eM.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.STICKERS_IN_AUTOCOMPLETE],
                parent: eM.s6.CHAT_STICKERS
            },
            [eM.s6.CHAT_TEXT_BOX]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION],
                parent: eM.s6.CHAT_TEXT_BOX
            },
            [eM.s6.CHAT_THREADS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.THREADS],
                parent: eM.s6.CHAT
            },
            [eM.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION],
                parent: eM.s6.CHAT_THREADS
            },
            [eM.s6.CHAT_SPOILERS]: {
                section: eD.oAB.TEXT,
                searchableTitles: [eb.Z.Messages.SHOW_SPOILER_CONTENT],
                parent: eM.s6.CHAT
            },
            [eM.s6.NOTIFICATIONS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.NOTIFICATIONS],
                label: eb.Z.Messages.NOTIFICATIONS,
                ariaLabel: eb.Z.Messages.NOTIFICATIONS,
                element: eE.Z
            },
            [eM.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL],
                parent: eM.s6.NOTIFICATIONS,
                predicate: () => (0, y.isWindows)()
            },
            [eM.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advancd, Staff Only)'],
                parent: eM.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [eM.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: eM.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eM.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: eM.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eM.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: eM.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eM.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_TTS],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER],
                parent: eM.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eM.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER],
                parent: eM.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eM.s6.NOTIFICATIONS_SOUNDS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.SOUNDS],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_EMAILS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS],
                parent: eM.s6.NOTIFICATIONS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eD.oAB.NOTIFICATIONS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING],
                parent: eM.s6.NOTIFICATIONS_EMAILS
            },
            [eM.s6.KEYBINDS]: {
                section: eD.oAB.KEYBINDS,
                searchableTitles: [eb.Z.Messages.KEYBINDS],
                label: eb.Z.Messages.KEYBINDS,
                element: eu.Z
            },
            [eM.s6.LANGUAGE]: {
                section: eD.oAB.LOCALE,
                searchableTitles: [eb.Z.Messages.LANGUAGE],
                label: eb.Z.Messages.LANGUAGE,
                element: e_.Z
            },
            [eM.s6.WINDOW_SETTINGS]: {
                section: eD.oAB.WINDOWS,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS],
                label: eb.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
                element: eO.Z,
                predicate: () => y.isPlatformEmbedded && (0, y.isWindows)()
            },
            [eM.s6.LINUX_SETTINGS]: {
                section: eD.oAB.LINUX,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_LINUX_SETTINGS],
                label: eb.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
                element: ej,
                predicate: () => y.isPlatformEmbedded && (0, y.isLinux)()
            },
            [eM.s6.STREAMER_MODE]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.STREAMER_MODE],
                label: eb.Z.Messages.STREAMER_MODE,
                ariaLabel: eb.Z.Messages.STREAMER_MODE,
                element: eg.Z
            },
            [eM.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_ENABLE]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.ENABLE_STREAMER_MODE_LABEL],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.HIDE_INSTANT_INVITES_LABEL],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.DISABLE_NOTIFICATIONS_LABEL],
                parent: eM.s6.STREAMER_MODE
            },
            [eM.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eD.oAB.STREAMER_MODE,
                searchableTitles: [eb.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL],
                parent: eM.s6.STREAMER_MODE,
                predicate: () => {
                    var e, s, t;
                    return null !== (t = null === E.Z || void 0 === E.Z ? void 0 : null === (s = E.Z.window) || void 0 === s ? void 0 : null === (e = s.supportsContentProtection) || void 0 === e ? void 0 : e.call(s)) && void 0 !== t && t;
                }
            },
            [eM.s6.SETTINGS_ADVANCED]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [eb.Z.Messages.SETTINGS_ADVANCED],
                label: eb.Z.Messages.SETTINGS_ADVANCED,
                ariaLabel: eb.Z.Messages.SETTINGS_ADVANCED,
                element: $.Z
            },
            [eM.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [eb.Z.Messages.DEVELOPER_MODE],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => U.wS
            },
            [eM.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [eb.Z.Messages.HARDWARE_ACCELERATION],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => y.isPlatformEmbedded
            },
            [eM.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_SHOW_LIBRARY],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => eX
            },
            [eM.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eD.oAB.ADVANCED,
                searchableTitles: [eb.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE],
                parent: eM.s6.SETTINGS_ADVANCED,
                predicate: () => e$
            },
            [eM.s6.ACTIVITY_PRIVACY]: {
                section: eD.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eb.Z.Messages.ACTIVITY_PRIVACY],
                label: eb.Z.Messages.ACTIVITY_PRIVACY,
                ariaLabel: eb.Z.Messages.ACTIVITY_PRIVACY,
                element: J.Z,
                predicate: () => !eV
            },
            [eM.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: eV ? eD.oAB.GAMES : eD.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eb.Z.Messages.ACTIVITY_STATUS],
                parent: eV ? eM.s6.GAMES_ACTIVITY_PRIVACY : eM.s6.ACTIVITY_PRIVACY
            },
            [eM.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: eV ? eD.oAB.GAMES : eD.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eb.Z.Messages.ACTIVITY_PARTY_PRIVACY],
                parent: eV ? eM.s6.GAMES_ACTIVITY_PRIVACY : eM.s6.ACTIVITY_PRIVACY
            },
            [eM.s6.ACTIVITY_PRIVACY_BROADCASTING]: {
                section: eV ? eD.oAB.GAMES : eD.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eb.Z.Messages.BROADCASTING_SETTINGS],
                parent: eV ? eM.s6.GAMES_ACTIVITY_PRIVACY : eM.s6.ACTIVITY_PRIVACY,
                predicate: () => eJ
            },
            [eM.s6.ACTIVITY_PRIVACY_TOS]: {
                section: eV ? eD.oAB.GAMES : eD.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eM.CF],
                parent: eV ? eM.s6.GAMES_ACTIVITY_PRIVACY : eM.s6.ACTIVITY_PRIVACY
            },
            [eM.s6.REGISTERED_GAMES]: {
                section: eD.oAB.REGISTERED_GAMES,
                searchableTitles: [eb.Z.Messages.REGISTERED_GAMES],
                label: eb.Z.Messages.REGISTERED_GAMES,
                element: el.Z,
                predicate: () => !eV && (0, ex.Jw)()
            },
            [eM.s6.OVERLAY]: {
                section: eD.oAB.OVERLAY,
                searchableTitles: [eb.Z.Messages.OVERLAY],
                label: eb.Z.Messages.OVERLAY,
                element: eT.Z,
                predicate: () => !eV && ey
            },
            [eM.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, S.Z)(!0),
                searchableTitles: [eb.Z.Messages.WHATS_NEW],
                label: eb.Z.Messages.WHATS_NEW
            },
            [eM.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    B.default.track(eD.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, G.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                B.default.track(eD.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, T.Z)(e);
                            }
                        });
                },
                searchableTitles: [eb.Z.Messages.MERCHANDISE],
                label: eb.Z.Messages.MERCHANDISE,
                ariaLabel: eb.Z.Messages.MERCHANDISE
            },
            [eM.s6.HYPESQUAD]: {
                section: eD.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [eb.Z.Messages.USER_SETTINGS_HYPESQUAD],
                label: eb.Z.Messages.USER_SETTINGS_HYPESQUAD,
                element: ec.Z
            },
            [eM.s6.EXPERIMENTS]: {
                section: eD.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: ep.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: ei.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_FLAGS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eY && b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => !1
            },
            [eM.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['CSS Debugging'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eY && b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eY && b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eY && b.Z.isDeveloper && Z.default.layoutDebuggingEnabled
            },
            [eM.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eY && b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: eM.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: eM.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => I.q && b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eD.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: eM.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.HOTSPOT_OPTIONS]: {
                section: eD.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: Y.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eD.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: g.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.PAYMENT_FLOW_MODALS]: {
                section: eD.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: H.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.TEXT_PLAYGROUND]: {
                section: eD.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: eh.Z,
                predicate: () => (0, Q.D)() || b.Z.isDeveloper
            },
            [eM.s6.DESIGN_SYSTEMS]: {
                section: eD.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: ea.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.TEXT_COMPONENTS]: {
                section: eD.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: z.Z,
                predicate: () => (0, Q.D)() || b.Z.isDeveloper
            },
            [eM.s6.INTL_TESTING]: {
                section: eD.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: O.Z,
                predicate: () => eY || b.Z.isDeveloper
            },
            [eM.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
                section: eD.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
                searchableTitles: ['Profile Effects Preview Tool'],
                label: 'Profile Effects Preview Tool',
                element: D.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eM.s6.QUEST_PREVIEW_TOOL]: {
                section: eD.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: L.Z,
                predicate: () => (0, P.X7)({ location: eP.dr.QUEST_PREVIEW_TOOL })
            },
            [eM.s6.LOGOUT]: {
                section: 'logout',
                onClick: () => {
                    (0, o.openModal)((e) =>
                        (0, n.jsx)(o.ConfirmModal, {
                            header: eb.Z.Messages.LOGOUT,
                            confirmText: eb.Z.Messages.LOGOUT,
                            cancelText: eb.Z.Messages.CANCEL,
                            onCancel: e.onClose,
                            onConfirm: () => c.Z.logout(),
                            ...e,
                            children: (0, n.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: eb.Z.Messages.USER_SETTINGS_CONFIRM_LOGOUT
                            })
                        })
                    );
                },
                label: eb.Z.Messages.LOGOUT,
                ariaLabel: eb.Z.Messages.LOGOUT,
                icon: (0, n.jsx)(o.DoorExitIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            },
            [eM.s6.SOCIAL_LINKS]: {
                section: _.ID.CUSTOM,
                element: K.Z
            },
            [eM.s6.CLIENT_DEBUG_INFO]: {
                section: _.ID.CUSTOM,
                element: k.Z
            }
        });
    };
