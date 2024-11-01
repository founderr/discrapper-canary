t.d(s, {
    i: function () {
        return eF;
    }
});
var n = t(200651);
t(192379);
var a = t(990547),
    i = t(704215),
    r = t(692547),
    o = t(481060),
    l = t(570140),
    c = t(893776),
    d = t(37234),
    _ = t(809206),
    u = t(230711),
    E = t(493544),
    T = t(579806),
    S = t(782568),
    I = t(758182),
    N = t(163379),
    m = t(703288),
    C = t(574755),
    A = t(377171),
    g = t(621628),
    h = t(18438),
    O = t(778825),
    p = t(665166),
    R = t(351780),
    x = t(231765),
    M = t(813732),
    f = t(398140),
    D = t(564344),
    L = t(746263),
    P = t(977156),
    b = t(652380),
    Z = t(906467),
    v = t(857192),
    j = t(131951),
    B = t(25990),
    U = t(626135),
    G = t(572004),
    F = t(49012),
    y = t(358085),
    V = t(998502),
    Y = t(392735),
    k = t(695346),
    w = t(604227),
    H = t(38915),
    W = t(498639),
    K = t(748717),
    z = t(419636),
    Q = t(799071),
    X = t(601433),
    q = t(154022),
    J = t(393681),
    $ = t(309739),
    ee = t(64914),
    es = t(501348),
    et = t(795594),
    en = t(443702),
    ea = t(920914),
    ei = t(949493),
    er = t(675047),
    eo = t(177508),
    el = t(956699),
    ec = t(54942),
    ed = t(15780),
    e_ = t(293389),
    eu = t(88624),
    eE = t(387747),
    eT = t(389650),
    eS = t(649157),
    eI = t(593648),
    eN = t(327885),
    em = t(595242),
    eC = t(301121),
    eA = t(463153),
    eg = t(36192),
    eh = t(338345),
    eO = t(400287),
    ep = t(554042),
    eR = t(200645),
    ex = t(287490),
    eM = t(706060),
    ef = t(168308),
    eD = t(277329),
    eL = t(674116),
    eP = t(726985),
    eb = t(981631),
    eZ = t(46140),
    ev = t(65154),
    ej = t(689938),
    eB = t(208637);
let eU = () => [i.z.CLIENT_THEMES_SETTINGS_BADGE, i.z.DEKSTOP_CUSTOM_APP_ICON_BADGE],
    eG = eR.Z,
    eF = (e) => {
        let { unseenGiftCount: s, showPrepaidPaymentPastDueWarning: eF, impressionSource: ey, numOfPendingFamilyRequests: eV, isOverlaySupported: eY, isClipsBetaTagShowing: ek = !1, shouldMergeGameSettings: ew, isUserSettingsSearchEnabled: eH, isKeywordFilteringEnabled: eW, isStaff: eK, isInappropriateConversationWarningEnabled: ez, paymentsBlocked: eQ, isEligibleForQuests: eX, showGiftNitro: eq, isStricterMessageRequestsEnabled: eJ, hasLibraryApplication: e$, hasTOTPEnabled: e0, developerMode: e1, isSafetySettingsV2Enabled: e6, isAdultUser: e2, hasSecureFramesVerifiedUserIds: e3, hypeSquadRemoved: e8 } = e;
        return Object.freeze({
            [eP.s6.SEARCH_NO_RESULTS]: {
                section: E.ID.CUSTOM,
                element: eA.Z,
                predicate: () => eH
            },
            [eP.s6.ACCOUNT_SECURITY_TAB]: {
                section: eb.oAB.ACCOUNT,
                searchableTitles: [ej.Z.Messages.SECURITY],
                label: ej.Z.Messages.SECURITY
            },
            [eP.s6.ACCOUNT]: {
                section: eb.oAB.ACCOUNT,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_MY_ACCOUNT],
                label: ej.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
                ariaLabel: ej.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
                element: J.Z
            },
            [eP.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [ej.Z.Messages.PROFILE],
                parent: eP.s6.ACCOUNT,
                section: eb.oAB.ACCOUNT
            },
            [eP.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [ej.Z.Messages.DISPLAY_NAME],
                section: eb.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_PROFILE
            },
            [eP.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [ej.Z.Messages.CHANGE_PHONE_NUMBER],
                section: eb.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_PROFILE
            },
            [eP.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE],
                section: eb.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_PROFILE
            },
            [eP.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [ej.Z.Messages.CHANGE_EMAIL],
                section: eb.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_PROFILE
            },
            [eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION],
                section: eb.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT
            },
            [eP.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [ej.Z.Messages.CHANGE_PASSWORD],
                section: eb.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eP.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [ej.Z.Messages.FORM_LABEL_CONFIRM_PASSWORD],
                section: eb.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [ej.Z.Messages.SETTINGS_TWO_FA],
                section: eb.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eP.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [ej.Z.Messages.TWO_FA_ENABLE],
                section: eb.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e0
            },
            [eP.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [ej.Z.Messages.TWO_FA_REMOVE],
                section: eb.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e0
            },
            [eP.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [ej.Z.Messages.TWO_FA_BACKUP_CODE],
                section: eb.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eP.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [ej.Z.Messages.MFA_SMS_AUTH],
                section: eb.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eP.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [ej.Z.Messages.TWO_FA_WEBAUTHN_REGISTER],
                section: eb.oAB.ACCOUNT,
                parent: eP.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eP.s6.ACCOUNT_REMOVAL]: {
                section: eb.oAB.ACCOUNT,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION],
                parent: eP.s6.ACCOUNT
            },
            [eP.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eb.oAB.ACCOUNT,
                searchableTitles: [ej.Z.Messages.DISABLE_ACCOUNT],
                parent: eP.s6.ACCOUNT_REMOVAL
            },
            [eP.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eb.oAB.ACCOUNT,
                searchableTitles: [ej.Z.Messages.DELETE_ACCOUNT],
                parent: eP.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [eP.s6.GAMES]: {
                section: eb.oAB.GAMES,
                searchableTitles: [ej.Z.Messages.GAMES],
                label: ej.Z.Messages.GAMES,
                ariaLabel: ej.Z.Messages.GAMES,
                element: eD.Z,
                predicate: () => ew
            },
            [eP.s6.GAMES_MY_GAMES]: {
                section: eb.oAB.GAMES,
                searchableTitles: [ej.Z.Messages.MY_GAMES],
                parent: eP.s6.GAMES
            },
            [eP.s6.GAMES_CLIPS]: {
                section: eb.oAB.GAMES,
                searchableTitles: [ej.Z.Messages.CLIPS],
                parent: eP.s6.GAMES
            },
            [eP.s6.GAMES_OVERLAY]: {
                section: eb.oAB.GAMES,
                searchableTitles: [ej.Z.Messages.OVERLAY],
                parent: eP.s6.GAMES
            },
            [eP.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eb.oAB.GAMES,
                searchableTitles: [ej.Z.Messages.ACTIVITY_PRIVACY],
                parent: eP.s6.GAMES
            },
            [eP.s6.PROFILE_CUSTOMIZATION]: {
                section: eb.oAB.PROFILE_CUSTOMIZATION,
                type: E.bT.WIDE,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_PROFILES],
                label: ej.Z.Messages.USER_SETTINGS_PROFILES,
                ariaLabel: ej.Z.Messages.USER_SETTINGS_PROFILES,
                element: D.Z,
                newIndicator: (0, n.jsx)(o.PremiumBadge, { text: ej.Z.Messages.NEW }),
                notice: {
                    stores: [B.Z, O.Z],
                    element: f.Z
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, h.It)(), (0, _.P6)(), u.Z.clearSubsection(eb.oAB.PROFILE_CUSTOMIZATION);
                    });
                }
            },
            [eP.s6.PROFILE_DISPLAY_NAME]: {
                section: eb.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ej.Z.Messages.DISPLAY_NAME],
                parent: eP.s6.PROFILE_CUSTOMIZATION
            },
            [eP.s6.PROFILE_USER_PROFILE]: {
                section: eb.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ej.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE],
                parent: eP.s6.PROFILE_CUSTOMIZATION
            },
            [eP.s6.PROFILE_SERVER_PROFILES]: {
                section: eb.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ej.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY],
                parent: eP.s6.PROFILE_CUSTOMIZATION
            },
            [eP.s6.PRIVACY_AND_SAFETY]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                label: ej.Z.Messages.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.PRIVACY_AND_SAFETY],
                ariaLabel: ej.Z.Messages.PRIVACY_AND_SAFETY,
                element: eC.Z,
                predicate: () => !e6
            },
            [eP.s6.PRIVACY_USER_SETTINGS]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.PRIVACY_AND_SAFETY],
                parent: eP.s6.PRIVACY_AND_SAFETY
            },
            [eP.s6.CONTENT_SOCIAL]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                label: ej.Z.Messages.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.Z.Messages.CONTENT_AND_SOCIAL],
                ariaLabel: ej.Z.Messages.CONTENT_AND_SOCIAL,
                element: ei.Z,
                predicate: () => e6
            },
            [eP.s6.DATA_PRIVACY]: {
                section: eb.oAB.DATA_AND_PRIVACY,
                label: ej.Z.Messages.DATA_AND_PRIVACY,
                searchableTitles: [ej.Z.Messages.DATA_AND_PRIVACY],
                ariaLabel: ej.Z.Messages.DATA_AND_PRIVACY,
                element: er.Z,
                predicate: () => e6
            },
            [eP.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eb.oAB.ACCOUNT,
                searchableTitles: [ej.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING],
                parent: eP.s6.ACCOUNT,
                predicate: () => e6
            },
            [eP.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eb.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_VOICE_SECURITY],
                parent: eP.s6.DATA_PRIVACY,
                predicate: () => (0, y.isDesktop)()
            },
            [eP.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eb.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.Z.Messages.E2EE_ENABLE_PERSISTENT_CODES],
                parent: eP.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY
            },
            [eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT],
                parent: eP.s6.CONTENT_SOCIAL
            },
            [eP.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.Z.Messages.FRIEND_REQUESTS],
                parent: eP.s6.CONTENT_SOCIAL
            },
            [eP.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.Z.Messages.FRIEND_REQUESTS],
                parent: eP.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
            },
            [eP.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_SOCIAL_PERMISSIONS],
                parent: eP.s6.CONTENT_SOCIAL
            },
            [eP.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eb.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE],
                parent: eP.s6.DATA_PRIVACY
            },
            [eP.s6.PRIVACY_SENSITIVE_MEDIA]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER, ej.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_FILTER, ej.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_BLUR, ej.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_SENSITIVE_CONTENT, ej.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_EXPLICIT],
                parent: eP.s6.PRIVACY_USER_SETTINGS
            },
            [eP.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER, ej.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_FILTER, ej.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_BLUR, ej.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_SENSITIVE_CONTENT, ej.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_EXPLICIT],
                parent: eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eP.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.SETTINGS_DM_SPAM_FILTER, ej.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_MESSAGES, ej.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_INBOX],
                parent: eP.s6.PRIVACY_USER_SETTINGS
            },
            [eP.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.Z.Messages.SETTINGS_DM_SPAM_FILTER, ej.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_MESSAGES, ej.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_INBOX],
                parent: eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.USER_DM_SETTINGS, ej.Z.Messages.USER_DM_SEARCH_TERM_DIRECT_MESSAGES, ej.Z.Messages.USER_DM_SEARCH_TERM_DM],
                parent: eP.s6.PRIVACY_USER_SETTINGS
            },
            [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.NEW_GUILDS_DM_ALLOWED],
                parent: eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER],
                parent: eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER],
                parent: eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER],
                parent: eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
                predicate: () => !eJ
            },
            [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.NSFW_DM_COMMANDS_HEADER],
                parent: eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eP.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.Z.Messages.NSFW_DM_COMMANDS_HEADER],
                parent: eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eP.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                parent: eP.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
            },
            [eP.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.SERVER_SETTINGS],
                parent: eP.s6.PRIVACY_AND_SAFETY
            },
            [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES],
                parent: eP.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_DM_SETTING_TITLE, ej.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_DM_SETTING_GLOBAL_NOTE],
                parent: eP.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS],
                parent: eP.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS,
                predicate: () => !eJ
            },
            [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING_TITLE],
                parent: eP.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !eJ
            },
            [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS],
                parent: eP.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS],
                parent: eP.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING],
                parent: eP.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [eP.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING],
                parent: eP.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eP.s6.PRIVACY_DATA_PRIVACY]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.SETTINGS_DATA_PRIVACY_CONTROLS],
                parent: eP.s6.PRIVACY_USER_SETTINGS
            },
            [eP.s6.PRIVACY_DATA_IMPROVE_DISCORD]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE],
                parent: eP.s6.PRIVACY_DATA_PRIVACY
            },
            [eP.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eb.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE],
                parent: eP.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eP.s6.PRIVACY_DATA_PERSONALIZE]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE],
                parent: eP.s6.PRIVACY_DATA_PRIVACY
            },
            [eP.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eb.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE],
                parent: eP.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eP.s6.PRIVACY_DATA_QUESTS]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT],
                parent: eP.s6.PRIVACY_DATA_PRIVACY
            },
            [eP.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eb.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT],
                parent: eP.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eP.s6.PRIVACY_DATA_BASIC_SERVICE]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                parent: eP.s6.PRIVACY_DATA_PRIVACY,
                searchableTitles: [eP.CF]
            },
            [eP.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eb.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eP.CF],
                parent: eP.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eP.s6.PRIVACY_DATA_REQUEST]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD],
                parent: eP.s6.PRIVACY_DATA_PRIVACY
            },
            [eP.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eb.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD],
                parent: eP.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
            },
            [eP.s6.PRIVACY_STAFF_ONLY]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER],
                parent: eP.s6.PRIVACY_USER_SETTINGS,
                predicate: () => eK
            },
            [eP.s6.PRIVACY_KEYWORD_FILTER]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE, ej.Z.Messages.USER_KEYWORD_FILTERS_SEARCH_TERM_KEYWORD],
                parent: eP.s6.PRIVACY_USER_SETTINGS,
                predicate: () => eW
            },
            [eP.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE, ej.Z.Messages.USER_KEYWORD_FILTERS_SEARCH_TERM_KEYWORD],
                parent: eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eW
            },
            [eP.s6.PRIVACY_TERMS_POLICY]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                parent: eP.s6.PRIVACY_USER_SETTINGS,
                searchableTitles: [eP.CF]
            },
            [eP.s6.PRIVACY_SAFETY_ALERTS]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.SAFETY_ALERTS_SETTING_TITLE],
                parent: eP.s6.PRIVACY_USER_SETTINGS,
                predicate: () => ez
            },
            [eP.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eb.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ej.Z.Messages.SAFETY_ALERTS_SETTING_TITLE],
                parent: eP.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => ez && !e2
            },
            [eP.s6.PRIVACY_ACCOUNT_STANDING]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2],
                parent: eP.s6.PRIVACY_AND_SAFETY
            },
            [eP.s6.PRIVACY_ENCRYPTION]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.E2EE_ENCRYPTION, ej.Z.Messages.E2EE_END_TO_END_ENCRYPTION],
                parent: eP.s6.PRIVACY_AND_SAFETY
            },
            [eP.s6.PRIVACY_ENCRYPTION_VERIFICATION_CODES]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.E2EE_VERIFICATION_CODES],
                parent: eP.s6.PRIVACY_ENCRYPTION
            },
            [eP.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES]: {
                section: eb.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ej.Z.Messages.E2EE_VERIFIED_DEVICES],
                parent: eP.s6.PRIVACY_ENCRYPTION
            },
            [eP.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eb.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.Z.Messages.E2EE_VERIFIED_DEVICES],
                parent: eP.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => e3
            },
            [eP.s6.PRIVACY_FAMILY_CENTER]: {
                section: eb.oAB.FAMILY_CENTER,
                searchableTitles: [ej.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE],
                label: ej.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
                ariaLabel: ej.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
                element: ec.Z,
                badgeCount: eV,
                newIndicator: (0, n.jsx)(o.TextBadge, {
                    text: ej.Z.Messages.NEW,
                    color: A.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [i.z.FAMILY_CENTER_NEW_BADGE]
            },
            [eP.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eb.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ej.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_REQUEST_DATA],
                parent: eP.s6.DATA_PRIVACY
            },
            [eP.s6.AUTHORIZED_APPS]: {
                section: eb.oAB.AUTHORIZED_APPS,
                searchableTitles: [ej.Z.Messages.AUTHORIZED_APPS],
                label: ej.Z.Messages.AUTHORIZED_APPS,
                element: et.Z
            },
            [eP.s6.SESSIONS]: {
                section: eb.oAB.SESSIONS,
                searchableTitles: [ej.Z.Messages.AUTH_SESSIONS],
                label: ej.Z.Messages.AUTH_SESSIONS,
                ariaLabel: ej.Z.Messages.AUTH_SESSIONS,
                element: eg.Z,
                newIndicatorDismissibleContentTypes: [i.z.AUTH_SESSIONS_NEW],
                predicate: () => Y.Z.getCurrentConfig({ location: '9f7d84_1' }, { autoTrackExposure: !1 }).showSettings
            },
            [eP.s6.CONNECTIONS]: {
                section: eb.oAB.CONNECTIONS,
                searchableTitles: [ej.Z.Messages.CONNECTIONS],
                label: ej.Z.Messages.CONNECTIONS,
                ariaLabel: ej.Z.Messages.CONNECTIONS,
                element: ea.Z,
                impressionName: a.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: ey },
                newIndicatorDismissibleContentTypes: [i.z.NEW_CRUNCHYROLL_CONNECTION]
            },
            [eP.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eb.oAB.CONNECTIONS,
                searchableTitles: [ej.Z.Messages.CONNECTED_ACCOUNTS],
                parent: eP.s6.CONNECTIONS,
                element: ea.Z
            },
            [eP.s6.CLIPS]: {
                section: eb.oAB.CLIPS,
                searchableTitles: [ej.Z.Messages.CLIPS],
                label: ej.Z.Messages.CLIPS,
                ariaLabel: ej.Z.Messages.CLIPS,
                icon: ek ? (0, n.jsx)(m.Z, {}) : void 0,
                element: C.Z,
                predicate: () => !ew
            },
            [eP.s6.FRIEND_REQUESTS]: {
                section: eb.oAB.FRIEND_REQUESTS,
                searchableTitles: [ej.Z.Messages.FRIEND_REQUESTS],
                label: ej.Z.Messages.FRIEND_REQUESTS,
                element: ed.Z,
                predicate: () => !e6
            },
            [eP.s6.PREMIUM]: {
                section: eb.oAB.PREMIUM,
                ariaLabel: ej.Z.Messages.PREMIUM,
                searchableTitles: [ej.Z.Messages.PREMIUM],
                label: ej.Z.Messages.PREMIUM,
                element: K.Z,
                className: eB.premiumTab
            },
            [eP.s6.GUILD_BOOSTING]: {
                section: eb.oAB.GUILD_BOOSTING,
                searchableTitles: [ej.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE],
                label: ej.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
                element: em.Z
            },
            [eP.s6.SUBSCRIPTIONS]: {
                section: eb.oAB.SUBSCRIPTIONS,
                ariaLabel: ej.Z.Messages.SUBSCRIPTIONS_TITLE,
                searchableTitles: [ej.Z.Messages.SUBSCRIPTIONS_TITLE],
                label: ej.Z.Messages.SUBSCRIPTIONS_TITLE,
                element: M.Z,
                icon: eF
                    ? (0, n.jsx)(o.CircleWarningIcon, {
                          size: 'xs',
                          color: r.Z.unsafe_rawColors.YELLOW_300.css
                      })
                    : null
            },
            [eP.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eb.oAB.SUBSCRIPTIONS,
                searchableTitles: [ej.Z.Messages.BILLING_SUBSCRIPTION_CREDIT],
                parent: eP.s6.SUBSCRIPTIONS
            },
            [eP.s6.GIFT_INVENTORY]: {
                section: eb.oAB.INVENTORY,
                searchableTitles: [ej.Z.Messages.GIFT_INVENTORY],
                label: ej.Z.Messages.GIFT_INVENTORY,
                element: eE.Z,
                ariaLabel: ej.Z.Messages.GIFT_INVENTORY,
                badgeCount: s
            },
            [eP.s6.GIFT_NITRO]: {
                section: eb.oAB.INVENTORY,
                searchableTitles: [ej.Z.Messages.GIFT_NITRO],
                parent: eP.s6.GIFT_INVENTORY,
                predicate: () => !eQ && eq
            },
            [eP.s6.GIFT_CODE_REDEMPTION]: {
                section: eb.oAB.INVENTORY,
                searchableTitles: [ej.Z.Messages.GIFT_INVENTORY_REDEEM_CODES],
                parent: eP.s6.GIFT_INVENTORY,
                predicate: () => !eQ
            },
            [eP.s6.GIFT_INVENTORY_QUESTS]: {
                section: eb.oAB.INVENTORY,
                searchableTitles: [ej.Z.Messages.QUESTS],
                parent: eP.s6.GIFT_INVENTORY,
                predicate: () => eX
            },
            [eP.s6.GIFT_INVENTORY_LIST]: {
                section: eb.oAB.INVENTORY,
                searchableTitles: [ej.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED],
                parent: eP.s6.GIFT_INVENTORY,
                predicate: () => !eQ
            },
            [eP.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eb.oAB.INVENTORY,
                searchableTitles: [ej.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER],
                parent: eP.s6.GIFT_INVENTORY,
                predicate: () => eQ
            },
            [eP.s6.BILLING]: {
                section: eb.oAB.BILLING,
                searchableTitles: [ej.Z.Messages.BILLING],
                label: ej.Z.Messages.BILLING,
                ariaLabel: ej.Z.Messages.BILLING,
                element: en.Z
            },
            [eP.s6.BILLING_PAYMENT_METHODS]: {
                section: eb.oAB.BILLING,
                searchableTitles: [ej.Z.Messages.BILLING_PAYMENT_SOURCES],
                parent: eP.s6.BILLING
            },
            [eP.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eb.oAB.BILLING,
                searchableTitles: [ej.Z.Messages.BILLING_PAYMENT_HISTORY],
                parent: eP.s6.BILLING
            },
            [eP.s6.APPEARANCE]: {
                section: eb.oAB.APPEARANCE,
                searchableTitles: [ej.Z.Messages.APPEARANCE],
                label: ej.Z.Messages.APPEARANCE,
                ariaLabel: ej.Z.Messages.APPEARANCE,
                element: es.Z,
                newIndicator: (0, n.jsx)(o.PremiumBadge, { text: ej.Z.Messages.NEW }),
                newIndicatorDismissibleContentTypes: eU()
            },
            [eP.s6.APPEARANCE_THEME]: {
                section: eb.oAB.APPEARANCE,
                searchableTitles: [ej.Z.Messages.THEME],
                parent: eP.s6.APPEARANCE
            },
            [eP.s6.APPEARANCE_COLOR]: {
                section: eb.oAB.APPEARANCE,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE],
                parent: eP.s6.APPEARANCE_THEME
            },
            [eP.s6.APPEARANCE_ICON]: {
                section: eb.oAB.APPEARANCE,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE],
                parent: eP.s6.APPEARANCE_THEME
            },
            [eP.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eb.oAB.APPEARANCE,
                searchableTitles: [ej.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL],
                parent: eP.s6.APPEARANCE
            },
            [eP.s6.APPEARANCE_SCALING_SPACING]: {
                section: eb.oAB.APPEARANCE,
                searchableTitles: [ej.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL],
                parent: eP.s6.APPEARANCE
            },
            [eP.s6.ACCESSIBILITY]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ACCESSIBILITY],
                label: ej.Z.Messages.ACCESSIBILITY,
                ariaLabel: ej.Z.Messages.ACCESSIBILITY,
                element: q.Z
            },
            [eP.s6.ACCESSIBILITY_SATURATION]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE],
                parent: eP.s6.ACCESSIBILITY
            },
            [eP.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_LABEL],
                parent: eP.s6.ACCESSIBILITY_SATURATION
            },
            [eP.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL],
                parent: eP.s6.ACCESSIBILITY
            },
            [eP.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE],
                parent: eP.s6.ACCESSIBILITY
            },
            [eP.s6.ACCESSIBILITY_TAGS]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE],
                parent: eP.s6.ACCESSIBILITY
            },
            [eP.s6.ACCESSIBILITY_TAGS_NAMES]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_LABEL],
                parent: eP.s6.ACCESSIBILITY_TAGS
            },
            [eP.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE],
                parent: eP.s6.ACCESSIBILITY
            },
            [eP.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_DESCRIPTION],
                parent: eP.s6.ACCESSIBILITY_PROFILE_COLORS
            },
            [eP.s6.ACCESSIBILITY_CONTRAST]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST],
                parent: eP.s6.ACCESSIBILITY
            },
            [eP.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_LABEL],
                parent: eP.s6.ACCESSIBILITY_CONTRAST
            },
            [eP.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION],
                parent: eP.s6.ACCESSIBILITY
            },
            [eP.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE],
                parent: eP.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eP.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.GIF_AUTO_PLAY_LABEL],
                parent: eP.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eP.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ANIMATE_EMOJI],
                parent: eP.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eP.s6.ACCESSIBILITY_STICKERS]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
                parent: eP.s6.ACCESSIBILITY
            },
            [eP.s6.ACCESSIBILITY_MESSAGES]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT],
                parent: eP.s6.ACCESSIBILITY
            },
            [eP.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.DISPLAY_SUBMIT_BUTTON],
                parent: eP.s6.ACCESSIBILITY_MESSAGES
            },
            [eP.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.LEGACY_CHAT_INPUT],
                parent: eP.s6.ACCESSIBILITY_MESSAGES
            },
            [eP.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_TTS],
                parent: eP.s6.ACCESSIBILITY
            },
            [eP.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ALLOW_TTS_COMMAND],
                parent: eP.s6.ACCESSIBILITY_TEXT_TO_SPEECH
            },
            [eP.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [ej.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_LABEL],
                parent: eP.s6.ACCESSIBILITY
            },
            [eP.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eb.oAB.ACCESSIBILITY,
                searchableTitles: [eP.CF],
                parent: eP.s6.ACCESSIBILITY
            },
            [eP.s6.VOICE_AND_VIDEO]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.VOICE_AND_VIDEO],
                label: ej.Z.Messages.VOICE_AND_VIDEO,
                ariaLabel: ej.Z.Messages.VOICE_AND_VIDEO,
                element: eL.Z,
                predicate: () => j.Z.isSupported()
            },
            [eP.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_INPUT_DEVICE, ej.Z.Messages.FORM_LABEL_OUTPUT_DEVICE, ej.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE, ej.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS, ej.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES],
                parent: eP.s6.VOICE_AND_VIDEO
            },
            [eP.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_INPUT_VOLUME, ej.Z.Messages.FORM_LABEL_OUTPUT_VOLUME, ej.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE, ej.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS, ej.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES],
                parent: eP.s6.VOICE_AND_VIDEO
            },
            [eP.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE, ej.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
                parent: eP.s6.VOICE_AND_VIDEO
            },
            [eP.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_INPUT_MODE, ej.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
                parent: eP.s6.VOICE_AND_VIDEO
            },
            [eP.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY, ej.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
                parent: eP.s6.VOICE_AND_VIDEO
            },
            [eP.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.CALL_SOUNDS_SETTINGS],
                parent: eP.s6.VOICE_AND_VIDEO
            },
            [eP.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.SOUNDBOARD],
                parent: eP.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eP.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.CALL_SOUNDS_SETTINGS],
                parent: eP.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eP.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.VIDEO_SETTINGS],
                parent: eP.s6.VOICE_AND_VIDEO
            },
            [eP.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_VIDEO_DEVICE],
                parent: eP.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => j.Z.supports(ev.AN.VIDEO)
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.SETTINGS_ADVANCED],
                parent: eP.s6.VOICE_AND_VIDEO
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_VOICE_CODEC_TITLE],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_VOICE_OPEN_H264],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => j.Z.supports(ev.AN.OPEN_H264)
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_VOICE_HARDWARE_ENCODING],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.EXPERIMENTAL_ENCODERS],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== V.ZP.releaseChannel && j.Z.isExperimentalEncodersSupported()
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_VOICE_PROCESSING],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.ECHO_CANCELLATION],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.SIDECHAIN_COMPRESSION],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eP.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.SIDECHAIN_COMPRESSION],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.NOISE_SUPPRESSION, ej.Z.Messages.NOISE_CANCELLATION_SEARCH_TERM_KRISP],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => j.Z.isNoiseSuppressionSupported()
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.ADVANCED_VOICE_ACTIVITY],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => j.Z.isAdvancedVoiceActivitySupported()
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.AUTOMATIC_GAIN_CONTROL],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => j.Z.isAutomaticGainControlSupported()
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_QOS],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => j.Z.supports(ev.AN.QOS)
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_ATTENUATION],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => j.Z.supports(ev.AN.ATTENUATION)
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_SUBSYSTEM],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => j.Z.supports(ev.AN.LEGACY_AUDIO_SUBSYSTEM) || j.Z.supports(ev.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => y.isPlatformEmbedded
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_DEBUG],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_STREAM_INFO_OVERLAY],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => k.Sb.getSetting()
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.FORM_CHECKBOX_AEC_DUMP],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => j.Z.isAecDumpSupported()
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === V.ZP.releaseChannel || 'development' === V.ZP.releaseChannel) && eK && j.Z.supports(ev.AN.CONNECTION_REPLAY)
            },
            [eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => y.isPlatformEmbedded && j.Z.supports(ev.AN.DEBUG_LOGGING) && null != T.Z.fileManager.readLogFiles
            },
            [eP.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eb.oAB.VOICE,
                searchableTitles: [ej.Z.Messages.RESET_VOICE_SETTINGS],
                parent: eP.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eP.s6.POGGERMODE]: {
                section: eb.oAB.POGGERMODE,
                searchableTitles: [ej.Z.Messages.POGGERMODE],
                label: ej.Z.Messages.POGGERMODE,
                ariaLabel: ej.Z.Messages.POGGERMODE,
                element: x.Z,
                predicate: () => R.Z.settingsVisible,
                icon: (0, n.jsx)('img', {
                    alt: '',
                    src: t(348621),
                    className: eB.poggermodeIcon
                })
            },
            [eP.s6.CHAT]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.CHAT],
                label: ej.Z.Messages.CHAT,
                ariaLabel: ej.Z.Messages.CHAT,
                element: eO.Z
            },
            [eP.s6.CHAT_INLINE_MEDIA]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.INLINE_MEDIA_LABEL],
                parent: eP.s6.CHAT
            },
            [eP.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.INLINE_EMBED_MEDIA],
                parent: eP.s6.CHAT_INLINE_MEDIA
            },
            [eP.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.INLINE_ATTACHMENT_MEDIA],
                parent: eP.s6.CHAT_INLINE_MEDIA
            },
            [eP.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.IMAGE_DESCRIPTION],
                parent: eP.s6.CHAT_INLINE_MEDIA
            },
            [eP.s6.CHAT_EMBEDS]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.RENDER_EMBEDS_LABEL],
                parent: eP.s6.CHAT
            },
            [eP.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.RENDER_EMBEDS],
                parent: eP.s6.CHAT_EMBEDS
            },
            [eP.s6.CHAT_EMOJI]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.EMOJI],
                parent: eP.s6.CHAT
            },
            [eP.s6.CHAT_EMOJI_REACTIONS]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.RENDER_REACTIONS],
                parent: eP.s6.CHAT_EMOJI
            },
            [eP.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.CONVERT_EMOTICONS],
                parent: eP.s6.CHAT_EMOJI
            },
            [eP.s6.CHAT_STICKERS]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
                parent: eP.s6.CHAT
            },
            [eP.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.AUTO_SUGGEST_STICKERS],
                parent: eP.s6.CHAT_STICKERS
            },
            [eP.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.STICKERS_IN_AUTOCOMPLETE],
                parent: eP.s6.CHAT_STICKERS
            },
            [eP.s6.CHAT_TEXT_BOX]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX],
                parent: eP.s6.CHAT
            },
            [eP.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION],
                parent: eP.s6.CHAT_TEXT_BOX
            },
            [eP.s6.CHAT_THREADS]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.THREADS],
                parent: eP.s6.CHAT
            },
            [eP.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION],
                parent: eP.s6.CHAT_THREADS
            },
            [eP.s6.CHAT_SPOILERS]: {
                section: eb.oAB.TEXT,
                searchableTitles: [ej.Z.Messages.SHOW_SPOILER_CONTENT],
                parent: eP.s6.CHAT
            },
            [eP.s6.NOTIFICATIONS]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.NOTIFICATIONS],
                label: ej.Z.Messages.NOTIFICATIONS,
                ariaLabel: ej.Z.Messages.NOTIFICATIONS,
                element: eI.Z
            },
            [eP.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE],
                parent: eP.s6.NOTIFICATIONS
            },
            [eP.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: eP.s6.NOTIFICATIONS
            },
            [eP.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL],
                parent: eP.s6.NOTIFICATIONS
            },
            [eP.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL],
                parent: eP.s6.NOTIFICATIONS,
                predicate: () => (0, y.isWindows)()
            },
            [eP.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE],
                parent: eP.s6.NOTIFICATIONS
            },
            [eP.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advancd, Staff Only)'],
                parent: eP.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [eP.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: eP.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eP.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: eP.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eP.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: eP.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eP.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT],
                parent: eP.s6.NOTIFICATIONS
            },
            [eP.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_TTS],
                parent: eP.s6.NOTIFICATIONS
            },
            [eP.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER],
                parent: eP.s6.NOTIFICATIONS
            },
            [eP.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER],
                parent: eP.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eP.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER],
                parent: eP.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eP.s6.NOTIFICATIONS_SOUNDS]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.SOUNDS],
                parent: eP.s6.NOTIFICATIONS
            },
            [eP.s6.NOTIFICATIONS_EMAILS]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS],
                parent: eP.s6.NOTIFICATIONS
            },
            [eP.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION],
                parent: eP.s6.NOTIFICATIONS_EMAILS
            },
            [eP.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL],
                parent: eP.s6.NOTIFICATIONS_EMAILS
            },
            [eP.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS],
                parent: eP.s6.NOTIFICATIONS_EMAILS
            },
            [eP.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS],
                parent: eP.s6.NOTIFICATIONS_EMAILS
            },
            [eP.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS],
                parent: eP.s6.NOTIFICATIONS_EMAILS
            },
            [eP.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING],
                parent: eP.s6.NOTIFICATIONS_EMAILS
            },
            [eP.s6.NOTIFICATIONS_REACTIONS]: {
                section: eb.oAB.NOTIFICATIONS,
                searchableTitles: [ej.Z.Messages.REACTION_NOTIFICATIONS],
                parent: eP.s6.NOTIFICATIONS
            },
            [eP.s6.KEYBINDS]: {
                section: eb.oAB.KEYBINDS,
                searchableTitles: [ej.Z.Messages.KEYBINDS],
                label: ej.Z.Messages.KEYBINDS,
                element: eT.Z
            },
            [eP.s6.LANGUAGE]: {
                section: eb.oAB.LOCALE,
                searchableTitles: [ej.Z.Messages.LANGUAGE],
                label: ej.Z.Messages.LANGUAGE,
                element: eS.Z
            },
            [eP.s6.WINDOW_SETTINGS]: {
                section: eb.oAB.WINDOWS,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS],
                label: ej.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
                element: eR.Z,
                predicate: () => y.isPlatformEmbedded && (0, y.isWindows)()
            },
            [eP.s6.LINUX_SETTINGS]: {
                section: eb.oAB.LINUX,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_LINUX_SETTINGS],
                label: ej.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
                element: eG,
                predicate: () => y.isPlatformEmbedded && (0, y.isLinux)()
            },
            [eP.s6.STREAMER_MODE]: {
                section: eb.oAB.STREAMER_MODE,
                searchableTitles: [ej.Z.Messages.STREAMER_MODE],
                label: ej.Z.Messages.STREAMER_MODE,
                ariaLabel: ej.Z.Messages.STREAMER_MODE,
                element: eh.Z
            },
            [eP.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eb.oAB.STREAMER_MODE,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE],
                parent: eP.s6.STREAMER_MODE
            },
            [eP.s6.STREAMER_MODE_ENABLE]: {
                section: eb.oAB.STREAMER_MODE,
                searchableTitles: [ej.Z.Messages.ENABLE_STREAMER_MODE_LABEL],
                parent: eP.s6.STREAMER_MODE
            },
            [eP.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eb.oAB.STREAMER_MODE,
                searchableTitles: [ej.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL],
                parent: eP.s6.STREAMER_MODE
            },
            [eP.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eb.oAB.STREAMER_MODE,
                searchableTitles: [ej.Z.Messages.HIDE_INSTANT_INVITES_LABEL],
                parent: eP.s6.STREAMER_MODE
            },
            [eP.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eb.oAB.STREAMER_MODE,
                searchableTitles: [ej.Z.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE],
                parent: eP.s6.STREAMER_MODE
            },
            [eP.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eb.oAB.STREAMER_MODE,
                searchableTitles: [ej.Z.Messages.DISABLE_NOTIFICATIONS_LABEL],
                parent: eP.s6.STREAMER_MODE
            },
            [eP.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eb.oAB.STREAMER_MODE,
                searchableTitles: [ej.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL],
                parent: eP.s6.STREAMER_MODE,
                predicate: () => {
                    var e, s, t;
                    return null !== (t = null === T.Z || void 0 === T.Z ? void 0 : null === (s = T.Z.window) || void 0 === s ? void 0 : null === (e = s.supportsContentProtection) || void 0 === e ? void 0 : e.call(s)) && void 0 !== t && t;
                }
            },
            [eP.s6.SETTINGS_ADVANCED]: {
                section: eb.oAB.ADVANCED,
                searchableTitles: [ej.Z.Messages.SETTINGS_ADVANCED],
                label: ej.Z.Messages.SETTINGS_ADVANCED,
                ariaLabel: ej.Z.Messages.SETTINGS_ADVANCED,
                element: ee.Z
            },
            [eP.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eb.oAB.ADVANCED,
                searchableTitles: [ej.Z.Messages.DEVELOPER_MODE],
                parent: eP.s6.SETTINGS_ADVANCED,
                predicate: () => G.wS
            },
            [eP.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eb.oAB.ADVANCED,
                searchableTitles: [ej.Z.Messages.HARDWARE_ACCELERATION],
                parent: eP.s6.SETTINGS_ADVANCED,
                predicate: () => y.isPlatformEmbedded
            },
            [eP.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eb.oAB.ADVANCED,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_SHOW_LIBRARY],
                parent: eP.s6.SETTINGS_ADVANCED,
                predicate: () => e$
            },
            [eP.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eb.oAB.ADVANCED,
                searchableTitles: [ej.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE],
                parent: eP.s6.SETTINGS_ADVANCED,
                predicate: () => e1
            },
            [eP.s6.ACTIVITY_PRIVACY]: {
                section: eb.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ej.Z.Messages.ACTIVITY_PRIVACY],
                label: ej.Z.Messages.ACTIVITY_PRIVACY,
                ariaLabel: ej.Z.Messages.ACTIVITY_PRIVACY,
                element: $.Z,
                predicate: () => !ew
            },
            [eP.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: ew ? eb.oAB.GAMES : eb.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ej.Z.Messages.ACTIVITY_STATUS],
                parent: ew ? eP.s6.GAMES_ACTIVITY_PRIVACY : eP.s6.ACTIVITY_PRIVACY
            },
            [eP.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: ew ? eb.oAB.GAMES : eb.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ej.Z.Messages.ACTIVITY_PARTY_PRIVACY],
                parent: ew ? eP.s6.GAMES_ACTIVITY_PRIVACY : eP.s6.ACTIVITY_PRIVACY
            },
            [eP.s6.ACTIVITY_PRIVACY_TOS]: {
                section: ew ? eb.oAB.GAMES : eb.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eP.CF],
                parent: ew ? eP.s6.GAMES_ACTIVITY_PRIVACY : eP.s6.ACTIVITY_PRIVACY
            },
            [eP.s6.REGISTERED_GAMES]: {
                section: eb.oAB.REGISTERED_GAMES,
                searchableTitles: [ej.Z.Messages.REGISTERED_GAMES],
                label: ej.Z.Messages.REGISTERED_GAMES,
                element: e_.Z,
                predicate: () => !ew && (0, ef.Jw)()
            },
            [eP.s6.OVERLAY]: {
                section: eb.oAB.OVERLAY,
                searchableTitles: [ej.Z.Messages.OVERLAY],
                label: ej.Z.Messages.OVERLAY,
                element: eN.Z,
                predicate: () => !ew && eY
            },
            [eP.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, N.Z)(!0),
                searchableTitles: [ej.Z.Messages.WHATS_NEW],
                label: ej.Z.Messages.WHATS_NEW
            },
            [eP.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    U.default.track(eb.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, F.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                U.default.track(eb.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, S.Z)(e);
                            }
                        });
                },
                searchableTitles: [ej.Z.Messages.MERCHANDISE],
                label: ej.Z.Messages.MERCHANDISE,
                ariaLabel: ej.Z.Messages.MERCHANDISE
            },
            [eP.s6.HYPESQUAD]: {
                section: eb.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_HYPESQUAD],
                label: ej.Z.Messages.USER_SETTINGS_HYPESQUAD,
                element: eu.Z,
                predicate: () => !e8
            },
            [eP.s6.TOWNHALL]: {
                section: eb.oAB.TOWNHALL,
                searchableTitles: [ej.Z.Messages.USER_SETTINGS_TOWNHALL],
                label: ej.Z.Messages.USER_SETTINGS_TOWNHALL,
                predicate: () => e8,
                onClick: () => {
                    (0, S.Z)('https://discord.gg/discord-townhall'), (0, d.xf)();
                }
            },
            [eP.s6.EXPERIMENTS]: {
                section: eb.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: ex.Z,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: el.Z,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_FLAGS]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: eP.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eK && Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => !1
            },
            [eP.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['CSS Debugging'],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eK && Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eK && Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eK && Z.Z.isDeveloper && v.default.layoutDebuggingEnabled
            },
            [eP.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eK && Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: eP.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: eP.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: eP.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: eP.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: eP.s6.DEVELOPER_OPTIONS,
                predicate: () => I.q && Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: eP.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: eP.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: eP.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eb.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: eP.s6.DEVELOPER_OPTIONS,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.HOTSPOT_OPTIONS]: {
                section: eb.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: H.Z,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eb.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: g.Z,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.PAYMENT_FLOW_MODALS]: {
                section: eb.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: W.Z,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.TEXT_PLAYGROUND]: {
                section: eb.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: ep.Z,
                predicate: () => (0, X.D)() || Z.Z.isDeveloper
            },
            [eP.s6.DESIGN_SYSTEMS]: {
                section: eb.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: eo.Z,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.TEXT_COMPONENTS]: {
                section: eb.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: Q.Z,
                predicate: () => (0, X.D)() || Z.Z.isDeveloper
            },
            [eP.s6.INTL_TESTING]: {
                section: eb.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: p.Z,
                predicate: () => eK || Z.Z.isDeveloper
            },
            [eP.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
                section: eb.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
                searchableTitles: ['Profile Effects Preview Tool'],
                label: 'Profile Effects Preview Tool',
                element: L.Z,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.QUEST_PREVIEW_TOOL]: {
                section: eb.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: b.Z,
                predicate: () => (0, P.X7)({ location: eZ.dr.QUEST_PREVIEW_TOOL })
            },
            [eP.s6.WEB_SETTING_TREE_TOOL]: {
                section: eb.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ['Web Setting Tree Tool'],
                label: 'Web Setting Tree Tool',
                element: eM.Z,
                predicate: () => Z.Z.isDeveloper
            },
            [eP.s6.LOGOUT]: {
                section: 'logout',
                onClick: () => {
                    (0, o.openModal)((e) =>
                        (0, n.jsx)(o.ConfirmModal, {
                            header: ej.Z.Messages.LOGOUT,
                            confirmText: ej.Z.Messages.LOGOUT,
                            cancelText: ej.Z.Messages.CANCEL,
                            onCancel: e.onClose,
                            onConfirm: () => c.Z.logout(),
                            ...e,
                            children: (0, n.jsx)(o.Text, {
                                variant: 'text-md/normal',
                                children: ej.Z.Messages.USER_SETTINGS_CONFIRM_LOGOUT
                            })
                        })
                    );
                },
                label: ej.Z.Messages.LOGOUT,
                ariaLabel: ej.Z.Messages.LOGOUT,
                icon: (0, n.jsx)(o.DoorExitIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            },
            [eP.s6.SOCIAL_LINKS]: {
                section: E.ID.CUSTOM,
                element: z.Z
            },
            [eP.s6.CLIENT_DEBUG_INFO]: {
                section: E.ID.CUSTOM,
                element: w.Z
            }
        });
    };
