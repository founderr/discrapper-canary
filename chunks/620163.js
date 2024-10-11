t.d(s, {
    i: function () {
        return eG;
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
    u = t(493544),
    E = t(579806),
    T = t(782568),
    S = t(758182),
    I = t(163379),
    N = t(703288),
    m = t(574755),
    C = t(377171),
    A = t(621628),
    g = t(18438),
    h = t(778825),
    O = t(665166),
    p = t(351780),
    R = t(231765),
    x = t(813732),
    M = t(398140),
    f = t(564344),
    D = t(746263),
    L = t(977156),
    P = t(652380),
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
    k = t(604227),
    w = t(38915),
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
    ea = t(949493),
    ei = t(675047),
    er = t(177508),
    eo = t(956699),
    el = t(54942),
    ec = t(15780),
    ed = t(293389),
    e_ = t(88624),
    eu = t(387747),
    eE = t(389650),
    eT = t(649157),
    eS = t(593648),
    eI = t(327885),
    eN = t(595242),
    em = t(301121),
    eC = t(463153),
    eA = t(36192),
    eg = t(338345),
    eh = t(400287),
    eO = t(554042),
    ep = t(200645),
    eR = t(287490),
    ex = t(706060),
    eM = t(168308),
    ef = t(277329),
    eD = t(674116),
    eL = t(726985),
    eP = t(981631),
    eb = t(46140),
    eZ = t(65154),
    ev = t(689938),
    ej = t(208637);
let eB = () => [i.z.CLIENT_THEMES_SETTINGS_BADGE, i.z.DEKSTOP_CUSTOM_APP_ICON_BADGE],
    eU = ep.Z,
    eG = (e) => {
        let { unseenGiftCount: s, showPrepaidPaymentPastDueWarning: eG, impressionSource: eF, numOfPendingFamilyRequests: ey, isOverlaySupported: eV, isClipsBetaTagShowing: eY = !1, shouldMergeGameSettings: ek, isUserSettingsSearchEnabled: ew, isKeywordFilteringEnabled: eH, isStaff: eW, isInappropriateConversationWarningEnabled: eK, paymentsBlocked: ez, isEligibleForQuests: eQ, showGiftNitro: eX, isStricterMessageRequestsEnabled: eq, hasLibraryApplication: eJ, hasTOTPEnabled: e$, developerMode: e0, isSafetySettingsV2Enabled: e1, isAdultUser: e6, hasSecureFramesVerifiedUserIds: e2 } = e;
        return Object.freeze({
            [eL.s6.SEARCH_NO_RESULTS]: {
                section: u.ID.CUSTOM,
                element: eC.Z,
                predicate: () => ew
            },
            [eL.s6.ACCOUNT_SECURITY_TAB]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [ev.Z.Messages.SECURITY],
                label: ev.Z.Messages.SECURITY
            },
            [eL.s6.ACCOUNT]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_MY_ACCOUNT],
                label: ev.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
                ariaLabel: ev.Z.Messages.USER_SETTINGS_MY_ACCOUNT,
                element: q.Z
            },
            [eL.s6.ACCOUNT_PROFILE]: {
                searchableTitles: [ev.Z.Messages.PROFILE],
                parent: eL.s6.ACCOUNT,
                section: eP.oAB.ACCOUNT
            },
            [eL.s6.ACCOUNT_DISPLAY_NAME]: {
                searchableTitles: [ev.Z.Messages.DISPLAY_NAME],
                section: eP.oAB.ACCOUNT,
                parent: eL.s6.ACCOUNT_PROFILE
            },
            [eL.s6.ACCOUNT_PHONE_NUMBER]: {
                searchableTitles: [ev.Z.Messages.CHANGE_PHONE_NUMBER],
                section: eP.oAB.ACCOUNT,
                parent: eL.s6.ACCOUNT_PROFILE
            },
            [eL.s6.ACCOUNT_USERNAME]: {
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_ACCOUNT_CHANGE_USERNAME_TITLE],
                section: eP.oAB.ACCOUNT,
                parent: eL.s6.ACCOUNT_PROFILE
            },
            [eL.s6.ACCOUNT_EMAIL]: {
                searchableTitles: [ev.Z.Messages.CHANGE_EMAIL],
                section: eP.oAB.ACCOUNT,
                parent: eL.s6.ACCOUNT_PROFILE
            },
            [eL.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION]: {
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION],
                section: eP.oAB.ACCOUNT,
                parent: eL.s6.ACCOUNT
            },
            [eL.s6.ACCOUNT_CHANGE_PASSWORD]: {
                searchableTitles: [ev.Z.Messages.CHANGE_PASSWORD],
                section: eP.oAB.ACCOUNT,
                parent: eL.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eL.s6.ACCOUNT_CONFIRM_PASSWORD]: {
                searchableTitles: [ev.Z.Messages.FORM_LABEL_CONFIRM_PASSWORD],
                section: eP.oAB.ACCOUNT,
                parent: eL.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION]: {
                searchableTitles: [ev.Z.Messages.SETTINGS_TWO_FA],
                section: eP.oAB.ACCOUNT,
                parent: eL.s6.ACCOUNT_PASSWORD_AND_AUTHENTICATION
            },
            [eL.s6.ACCOUNT_ENABLE_2FA]: {
                searchableTitles: [ev.Z.Messages.TWO_FA_ENABLE],
                section: eP.oAB.ACCOUNT,
                parent: eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => !e$
            },
            [eL.s6.ACCOUNT_REMOVE_2FA]: {
                searchableTitles: [ev.Z.Messages.TWO_FA_REMOVE],
                section: eP.oAB.ACCOUNT,
                parent: eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION,
                predicate: () => e$
            },
            [eL.s6.ACCOUNT_VIEW_BACKUP_CODES]: {
                searchableTitles: [ev.Z.Messages.TWO_FA_BACKUP_CODE],
                section: eP.oAB.ACCOUNT,
                parent: eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eL.s6.ACCOUNT_SMS_BACKUP]: {
                searchableTitles: [ev.Z.Messages.MFA_SMS_AUTH],
                section: eP.oAB.ACCOUNT,
                parent: eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eL.s6.ACCOUNT_SECURITY_KEYS]: {
                searchableTitles: [ev.Z.Messages.TWO_FA_WEBAUTHN_REGISTER],
                section: eP.oAB.ACCOUNT,
                parent: eL.s6.ACCOUNT_MULTI_FACTOR_AUTHENTICATION
            },
            [eL.s6.ACCOUNT_REMOVAL]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVAL_SECTION],
                parent: eL.s6.ACCOUNT
            },
            [eL.s6.ACCOUNT_DISABLE_ACCOUNT]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [ev.Z.Messages.DISABLE_ACCOUNT],
                parent: eL.s6.ACCOUNT_REMOVAL
            },
            [eL.s6.ACCOUNT_DELETE_ACCOUNT]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [ev.Z.Messages.DELETE_ACCOUNT],
                parent: eL.s6.ACCOUNT_DISABLE_ACCOUNT
            },
            [eL.s6.GAMES]: {
                section: eP.oAB.GAMES,
                searchableTitles: [ev.Z.Messages.GAMES],
                label: ev.Z.Messages.GAMES,
                ariaLabel: ev.Z.Messages.GAMES,
                element: ef.Z,
                predicate: () => ek
            },
            [eL.s6.GAMES_MY_GAMES]: {
                section: eP.oAB.GAMES,
                searchableTitles: [ev.Z.Messages.MY_GAMES],
                parent: eL.s6.GAMES
            },
            [eL.s6.GAMES_CLIPS]: {
                section: eP.oAB.GAMES,
                searchableTitles: [ev.Z.Messages.CLIPS],
                parent: eL.s6.GAMES
            },
            [eL.s6.GAMES_OVERLAY]: {
                section: eP.oAB.GAMES,
                searchableTitles: [ev.Z.Messages.OVERLAY],
                parent: eL.s6.GAMES
            },
            [eL.s6.GAMES_ACTIVITY_PRIVACY]: {
                section: eP.oAB.GAMES,
                searchableTitles: [ev.Z.Messages.ACTIVITY_PRIVACY],
                parent: eL.s6.GAMES
            },
            [eL.s6.PROFILE_CUSTOMIZATION]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                type: u.bT.WIDE,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_PROFILES],
                label: ev.Z.Messages.USER_SETTINGS_PROFILES,
                ariaLabel: ev.Z.Messages.USER_SETTINGS_PROFILES,
                element: f.Z,
                newIndicator: (0, n.jsx)(o.PremiumBadge, { text: ev.Z.Messages.NEW }),
                notice: {
                    stores: [j.Z, h.Z],
                    element: M.Z
                },
                onSettingsClose: () => {
                    l.Z.wait(() => {
                        (0, g.It)(), (0, d.P6)(), _.Z.clearSubsection(eP.oAB.PROFILE_CUSTOMIZATION);
                    });
                }
            },
            [eL.s6.PROFILE_DISPLAY_NAME]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ev.Z.Messages.DISPLAY_NAME],
                parent: eL.s6.PROFILE_CUSTOMIZATION
            },
            [eL.s6.PROFILE_USER_PROFILE]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ev.Z.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE],
                parent: eL.s6.PROFILE_CUSTOMIZATION
            },
            [eL.s6.PROFILE_SERVER_PROFILES]: {
                section: eP.oAB.PROFILE_CUSTOMIZATION,
                searchableTitles: [ev.Z.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY],
                parent: eL.s6.PROFILE_CUSTOMIZATION
            },
            [eL.s6.PRIVACY_AND_SAFETY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                label: ev.Z.Messages.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY],
                ariaLabel: ev.Z.Messages.PRIVACY_AND_SAFETY,
                element: em.Z,
                predicate: () => !e1
            },
            [eL.s6.PRIVACY_USER_SETTINGS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY],
                parent: eL.s6.PRIVACY_AND_SAFETY
            },
            [eL.s6.CONTENT_SOCIAL]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                label: ev.Z.Messages.CONTENT_AND_SOCIAL,
                searchableTitles: [ev.Z.Messages.CONTENT_AND_SOCIAL],
                ariaLabel: ev.Z.Messages.CONTENT_AND_SOCIAL,
                element: ea.Z,
                predicate: () => e1
            },
            [eL.s6.DATA_PRIVACY]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                label: ev.Z.Messages.DATA_AND_PRIVACY,
                searchableTitles: [ev.Z.Messages.DATA_AND_PRIVACY],
                ariaLabel: ev.Z.Messages.DATA_AND_PRIVACY,
                element: ei.Z,
                predicate: () => e1
            },
            [eL.s6.PRIVACY_AND_SAFETY_STANDING]: {
                section: eP.oAB.ACCOUNT,
                searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING],
                parent: eL.s6.ACCOUNT,
                predicate: () => e1
            },
            [eL.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_VOICE_SECURITY],
                parent: eL.s6.DATA_PRIVACY,
                predicate: () => (0, F.isDesktop)()
            },
            [eL.s6.PRIVACY_AND_SAFETY_PERSISTENT_VERIFICATION_CODES]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ev.Z.Messages.E2EE_ENABLE_PERSISTENT_CODES],
                parent: eL.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY
            },
            [eL.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT],
                parent: eL.s6.CONTENT_SOCIAL
            },
            [eL.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ev.Z.Messages.FRIEND_REQUESTS],
                parent: eL.s6.CONTENT_SOCIAL
            },
            [eL.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ev.Z.Messages.FRIEND_REQUESTS],
                parent: eL.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY
            },
            [eL.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_SOCIAL_PERMISSIONS],
                parent: eL.s6.CONTENT_SOCIAL
            },
            [eL.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE],
                parent: eL.s6.DATA_PRIVACY
            },
            [eL.s6.PRIVACY_SENSITIVE_MEDIA]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER, ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_FILTER, ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_BLUR, ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_SENSITIVE_CONTENT, ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_EXPLICIT],
                parent: eL.s6.PRIVACY_USER_SETTINGS
            },
            [eL.s6.PRIVACY_SENSITIVE_MEDIA_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ev.Z.Messages.OBSCURED_CONTENT_SETTINGS_HEADER, ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_FILTER, ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_BLUR, ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_SENSITIVE_CONTENT, ev.Z.Messages.OBSCURED_CONTENT_SEARCH_TERM_EXPLICIT],
                parent: eL.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eL.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.SETTINGS_DM_SPAM_FILTER, ev.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_MESSAGES, ev.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_INBOX],
                parent: eL.s6.PRIVACY_USER_SETTINGS
            },
            [eL.s6.PRIVACY_DIRECT_MESSAGE_SPAM_FILTER_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ev.Z.Messages.SETTINGS_DM_SPAM_FILTER, ev.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_MESSAGES, ev.Z.Messages.SETTINGS_DM_SPAM_FILTER_SEARCH_TERM_INBOX],
                parent: eL.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.USER_DM_SETTINGS, ev.Z.Messages.USER_DM_SEARCH_TERM_DIRECT_MESSAGES, ev.Z.Messages.USER_DM_SEARCH_TERM_DM],
                parent: eL.s6.PRIVACY_USER_SETTINGS
            },
            [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_DMS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.NEW_GUILDS_DM_ALLOWED],
                parent: eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER],
                parent: eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_IOS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ev.Z.Messages.NSFW_GUILDS_TOGGLE_HEADER],
                parent: eL.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_MESSAGE_REQUESTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.MESSAGE_REQUESTS_SETTING_GENERAL_HEADER],
                parent: eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS,
                predicate: () => !eq
            },
            [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.NSFW_DM_COMMANDS_HEADER],
                parent: eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS
            },
            [eL.s6.PRIVACY_SERVER_PRIVACY_DEFAULTS_AGE_RESTRICTED_APPS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ev.Z.Messages.NSFW_DM_COMMANDS_HEADER],
                parent: eL.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY
            },
            [eL.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                parent: eL.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY
            },
            [eL.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.SERVER_SETTINGS],
                parent: eL.s6.PRIVACY_AND_SAFETY
            },
            [eL.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.PRIVACY_SETTINGS_DIRECT_MESSAGES],
                parent: eL.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [eL.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_DMS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_DM_SETTING_TITLE, ev.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_DM_SETTING_GLOBAL_NOTE],
                parent: eL.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eL.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.PRIVACY_SETTINGS_MESSAGE_REQUESTS],
                parent: eL.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS,
                predicate: () => !eq
            },
            [eL.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_MESSAGE_REQUESTS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_MESSAGE_REQUESTS_SETTING_TITLE],
                parent: eL.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                predicate: () => !eq
            },
            [eL.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS],
                parent: eL.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [eL.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ev.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_STATUS],
                parent: eL.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eL.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING],
                parent: eL.s6.PRIVACY_SERVER_SPECIFIC_SETTINGS
            },
            [eL.s6.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ev.Z.Messages.PRIVACY_SETTINGS_ACTIVITY_JOINING],
                parent: eL.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR
            },
            [eL.s6.PRIVACY_DATA_PRIVACY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.SETTINGS_DATA_PRIVACY_CONTROLS],
                parent: eL.s6.PRIVACY_USER_SETTINGS
            },
            [eL.s6.PRIVACY_DATA_IMPROVE_DISCORD]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE],
                parent: eL.s6.PRIVACY_DATA_PRIVACY
            },
            [eL.s6.PRIVACY_DATA_IMPROVE_DISCORD_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ev.Z.Messages.DATA_PRIVACY_CONTROLS_USAGE_STATISTICS_TITLE],
                parent: eL.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eL.s6.PRIVACY_DATA_PERSONALIZE]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE],
                parent: eL.s6.PRIVACY_DATA_PRIVACY
            },
            [eL.s6.PRIVACY_DATA_PERSONALIZE_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ev.Z.Messages.DATA_PRIVACY_CONTROLS_PERSONALIZATION_TITLE],
                parent: eL.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eL.s6.PRIVACY_DATA_QUESTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT],
                parent: eL.s6.PRIVACY_DATA_PRIVACY
            },
            [eL.s6.PRIVACY_DATA_QUESTS_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ev.Z.Messages.USER_DROPS_SETTINGS_DROPS_OPTED_OUT],
                parent: eL.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eL.s6.PRIVACY_DATA_BASIC_SERVICE]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                parent: eL.s6.PRIVACY_DATA_PRIVACY,
                searchableTitles: [eL.CF]
            },
            [eL.s6.PRIVACY_DATA_BASIC_SERVICE_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [eL.CF],
                parent: eL.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY
            },
            [eL.s6.PRIVACY_DATA_REQUEST]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD],
                parent: eL.s6.PRIVACY_DATA_PRIVACY
            },
            [eL.s6.PRIVACY_DATA_REQUEST_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ev.Z.Messages.DATA_PRIVACY_CONTROLS_REQUEST_DATA_DOWNLOAD],
                parent: eL.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY
            },
            [eL.s6.PRIVACY_STAFF_ONLY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.PRIVACY_SETTINGS_STAFF_ONLY_HEADER],
                parent: eL.s6.PRIVACY_USER_SETTINGS,
                predicate: () => eW
            },
            [eL.s6.PRIVACY_KEYWORD_FILTER]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE, ev.Z.Messages.USER_KEYWORD_FILTERS_SEARCH_TERM_KEYWORD],
                parent: eL.s6.PRIVACY_USER_SETTINGS,
                predicate: () => eH
            },
            [eL.s6.PRIVACY_KEYWORD_FILTER_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ev.Z.Messages.USER_KEYWORD_FILTERS_DESCRIPTION_SEARCHABLE, ev.Z.Messages.USER_KEYWORD_FILTERS_SEARCH_TERM_KEYWORD],
                parent: eL.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eH
            },
            [eL.s6.PRIVACY_TERMS_POLICY]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                parent: eL.s6.PRIVACY_USER_SETTINGS,
                searchableTitles: [eL.CF]
            },
            [eL.s6.PRIVACY_SAFETY_ALERTS]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.SAFETY_ALERTS_SETTING_TITLE],
                parent: eL.s6.PRIVACY_USER_SETTINGS,
                predicate: () => eK
            },
            [eL.s6.PRIVACY_SAFETY_ALERTS_V2]: {
                section: eP.oAB.CONTENT_AND_SOCIAL,
                searchableTitles: [ev.Z.Messages.SAFETY_ALERTS_SETTING_TITLE],
                parent: eL.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                predicate: () => eK && !e6
            },
            [eL.s6.PRIVACY_ACCOUNT_STANDING]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2],
                parent: eL.s6.PRIVACY_AND_SAFETY
            },
            [eL.s6.PRIVACY_ENCRYPTION]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.E2EE_ENCRYPTION, ev.Z.Messages.E2EE_END_TO_END_ENCRYPTION],
                parent: eL.s6.PRIVACY_AND_SAFETY
            },
            [eL.s6.PRIVACY_ENCRYPTION_VERIFICATION_CODES]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.E2EE_VERIFICATION_CODES],
                parent: eL.s6.PRIVACY_ENCRYPTION
            },
            [eL.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES]: {
                section: eP.oAB.PRIVACY_AND_SAFETY,
                searchableTitles: [ev.Z.Messages.E2EE_VERIFIED_DEVICES],
                parent: eL.s6.PRIVACY_ENCRYPTION
            },
            [eL.s6.PRIVACY_ENCRYPTION_VERIFIED_DEVICES_V2]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ev.Z.Messages.E2EE_VERIFIED_DEVICES],
                parent: eL.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                predicate: () => e2
            },
            [eL.s6.PRIVACY_FAMILY_CENTER]: {
                section: eP.oAB.FAMILY_CENTER,
                searchableTitles: [ev.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE],
                label: ev.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
                ariaLabel: ev.Z.Messages.FAMILY_CENTER_SETTINGS_TITLE,
                element: el.Z,
                badgeCount: ey,
                newIndicator: (0, n.jsx)(o.TextBadge, {
                    text: ev.Z.Messages.NEW,
                    color: C.Z.BG_BRAND
                }),
                newIndicatorDismissibleContentTypes: [i.z.FAMILY_CENTER_NEW_BADGE]
            },
            [eL.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY]: {
                section: eP.oAB.DATA_AND_PRIVACY,
                searchableTitles: [ev.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_REQUEST_DATA],
                parent: eL.s6.DATA_PRIVACY
            },
            [eL.s6.AUTHORIZED_APPS]: {
                section: eP.oAB.AUTHORIZED_APPS,
                searchableTitles: [ev.Z.Messages.AUTHORIZED_APPS],
                label: ev.Z.Messages.AUTHORIZED_APPS,
                element: es.Z
            },
            [eL.s6.SESSIONS]: {
                section: eP.oAB.SESSIONS,
                searchableTitles: [ev.Z.Messages.AUTH_SESSIONS],
                label: ev.Z.Messages.AUTH_SESSIONS,
                ariaLabel: ev.Z.Messages.AUTH_SESSIONS,
                element: eA.Z,
                newIndicatorDismissibleContentTypes: [i.z.AUTH_SESSIONS_NEW],
                predicate: () => V.Z.getCurrentConfig({ location: '9f7d84_1' }, { autoTrackExposure: !1 }).showSettings
            },
            [eL.s6.CONNECTIONS]: {
                section: eP.oAB.CONNECTIONS,
                searchableTitles: [ev.Z.Messages.CONNECTIONS],
                label: ev.Z.Messages.CONNECTIONS,
                ariaLabel: ev.Z.Messages.CONNECTIONS,
                element: en.Z,
                impressionName: a.ImpressionNames.USER_SETTINGS_CONNECTIONS,
                impressionProperties: { source: eF },
                newIndicatorDismissibleContentTypes: [i.z.NEW_CRUNCHYROLL_CONNECTION]
            },
            [eL.s6.CONNECTIONS_CONNECTED_ACCOUNTS]: {
                section: eP.oAB.CONNECTIONS,
                searchableTitles: [ev.Z.Messages.CONNECTED_ACCOUNTS],
                parent: eL.s6.CONNECTIONS,
                element: en.Z
            },
            [eL.s6.CLIPS]: {
                section: eP.oAB.CLIPS,
                searchableTitles: [ev.Z.Messages.CLIPS],
                label: ev.Z.Messages.CLIPS,
                ariaLabel: ev.Z.Messages.CLIPS,
                icon: eY ? (0, n.jsx)(N.Z, {}) : void 0,
                element: m.Z,
                predicate: () => !ek
            },
            [eL.s6.FRIEND_REQUESTS]: {
                section: eP.oAB.FRIEND_REQUESTS,
                searchableTitles: [ev.Z.Messages.FRIEND_REQUESTS],
                label: ev.Z.Messages.FRIEND_REQUESTS,
                element: ec.Z,
                predicate: () => !e1
            },
            [eL.s6.PREMIUM]: {
                section: eP.oAB.PREMIUM,
                ariaLabel: ev.Z.Messages.PREMIUM,
                searchableTitles: [ev.Z.Messages.PREMIUM],
                label: ev.Z.Messages.PREMIUM,
                element: W.Z,
                className: ej.premiumTab
            },
            [eL.s6.GUILD_BOOSTING]: {
                section: eP.oAB.GUILD_BOOSTING,
                searchableTitles: [ev.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE],
                label: ev.Z.Messages.PREMIUM_GUILD_SUBSCRIPTION_TITLE,
                element: eN.Z
            },
            [eL.s6.SUBSCRIPTIONS]: {
                section: eP.oAB.SUBSCRIPTIONS,
                ariaLabel: ev.Z.Messages.SUBSCRIPTIONS_TITLE,
                searchableTitles: [ev.Z.Messages.SUBSCRIPTIONS_TITLE],
                label: ev.Z.Messages.SUBSCRIPTIONS_TITLE,
                element: x.Z,
                icon: eG
                    ? (0, n.jsx)(o.CircleWarningIcon, {
                          size: 'xs',
                          color: r.Z.unsafe_rawColors.YELLOW_300.css
                      })
                    : null
            },
            [eL.s6.SUBSCRIPTIONS_CREDITS]: {
                section: eP.oAB.SUBSCRIPTIONS,
                searchableTitles: [ev.Z.Messages.BILLING_SUBSCRIPTION_CREDIT],
                parent: eL.s6.SUBSCRIPTIONS
            },
            [eL.s6.GIFT_INVENTORY]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [ev.Z.Messages.GIFT_INVENTORY],
                label: ev.Z.Messages.GIFT_INVENTORY,
                element: eu.Z,
                ariaLabel: ev.Z.Messages.GIFT_INVENTORY,
                badgeCount: s
            },
            [eL.s6.GIFT_NITRO]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [ev.Z.Messages.GIFT_NITRO],
                parent: eL.s6.GIFT_INVENTORY,
                predicate: () => !ez && eX
            },
            [eL.s6.GIFT_CODE_REDEMPTION]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [ev.Z.Messages.GIFT_INVENTORY_REDEEM_CODES],
                parent: eL.s6.GIFT_INVENTORY,
                predicate: () => !ez
            },
            [eL.s6.GIFT_INVENTORY_QUESTS]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [ev.Z.Messages.QUESTS],
                parent: eL.s6.GIFT_INVENTORY,
                predicate: () => eQ
            },
            [eL.s6.GIFT_INVENTORY_LIST]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [ev.Z.Messages.GIFT_INVENTORY_GIFTS_YOU_PURCHASED],
                parent: eL.s6.GIFT_INVENTORY,
                predicate: () => !ez
            },
            [eL.s6.GIFT_BLOCKED_PAYMENTS]: {
                section: eP.oAB.INVENTORY,
                searchableTitles: [ev.Z.Messages.REGION_BLOCKED_PAYMENTS_HEADER],
                parent: eL.s6.GIFT_INVENTORY,
                predicate: () => ez
            },
            [eL.s6.BILLING]: {
                section: eP.oAB.BILLING,
                searchableTitles: [ev.Z.Messages.BILLING],
                label: ev.Z.Messages.BILLING,
                ariaLabel: ev.Z.Messages.BILLING,
                element: et.Z
            },
            [eL.s6.BILLING_PAYMENT_METHODS]: {
                section: eP.oAB.BILLING,
                searchableTitles: [ev.Z.Messages.BILLING_PAYMENT_SOURCES],
                parent: eL.s6.BILLING
            },
            [eL.s6.BILLING_TRANSACTION_HISTORY]: {
                section: eP.oAB.BILLING,
                searchableTitles: [ev.Z.Messages.BILLING_PAYMENT_HISTORY],
                parent: eL.s6.BILLING
            },
            [eL.s6.APPEARANCE]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [ev.Z.Messages.APPEARANCE],
                label: ev.Z.Messages.APPEARANCE,
                ariaLabel: ev.Z.Messages.APPEARANCE,
                element: ee.Z,
                newIndicator: (0, n.jsx)(o.PremiumBadge, { text: ev.Z.Messages.NEW }),
                newIndicatorDismissibleContentTypes: eB()
            },
            [eL.s6.APPEARANCE_THEME]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [ev.Z.Messages.THEME],
                parent: eL.s6.APPEARANCE
            },
            [eL.s6.APPEARANCE_COLOR]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE],
                parent: eL.s6.APPEARANCE_THEME
            },
            [eL.s6.APPEARANCE_ICON]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_APPEARANCE_IN_APP_ICON_TITLE],
                parent: eL.s6.APPEARANCE_THEME
            },
            [eL.s6.APPEARANCE_MESSAGE_DISPLAY_COMPACT]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [ev.Z.Messages.MESSAGE_DISPLAY_MODE_LABEL],
                parent: eL.s6.APPEARANCE
            },
            [eL.s6.APPEARANCE_SCALING_SPACING]: {
                section: eP.oAB.APPEARANCE,
                searchableTitles: [ev.Z.Messages.ACCESSIBILITY_FONT_SCALING_LABEL],
                parent: eL.s6.APPEARANCE
            },
            [eL.s6.ACCESSIBILITY]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ACCESSIBILITY],
                label: ev.Z.Messages.ACCESSIBILITY,
                ariaLabel: ev.Z.Messages.ACCESSIBILITY,
                element: X.Z
            },
            [eL.s6.ACCESSIBILITY_SATURATION]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_TITLE],
                parent: eL.s6.ACCESSIBILITY
            },
            [eL.s6.ACCESSIBILITY_SATURATION_CUSTOM_COLOR]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_SATURATION_CUSTOM_COLORS_LABEL],
                parent: eL.s6.ACCESSIBILITY_SATURATION
            },
            [eL.s6.ACCESSIBILITY_LINK_DECORATIONS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_ALWAYS_SHOW_LINK_DECORATIONS_LABEL],
                parent: eL.s6.ACCESSIBILITY
            },
            [eL.s6.ACCESSIBILITY_ROLE_STYLE]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_ROLE_STYLE_TITLE],
                parent: eL.s6.ACCESSIBILITY
            },
            [eL.s6.ACCESSIBILITY_TAGS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_TITLE],
                parent: eL.s6.ACCESSIBILITY
            },
            [eL.s6.ACCESSIBILITY_TAGS_NAMES]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_TAGS_LABEL],
                parent: eL.s6.ACCESSIBILITY_TAGS
            },
            [eL.s6.ACCESSIBILITY_PROFILE_COLORS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_COLORS_TITLE],
                parent: eL.s6.ACCESSIBILITY
            },
            [eL.s6.ACCESSIBILITY_PROFILE_COLORS_SYNC_THEMES]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_PROFILE_THEMES_DESCRIPTION],
                parent: eL.s6.ACCESSIBILITY_PROFILE_COLORS
            },
            [eL.s6.ACCESSIBILITY_CONTRAST]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_CONTRAST],
                parent: eL.s6.ACCESSIBILITY
            },
            [eL.s6.ACCESSIBILITY_CONTRAST_SYNC_FORCED_COLORS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_SYNC_FORCED_COLORS_LABEL],
                parent: eL.s6.ACCESSIBILITY_CONTRAST
            },
            [eL.s6.ACCESSIBILITY_REDUCED_MOTION]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION],
                parent: eL.s6.ACCESSIBILITY
            },
            [eL.s6.ACCESSIBILITY_REDUCED_MOTION_ENABLE]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ACCESSIBILITY_PREFERS_REDUCED_MOTION_ENABLE],
                parent: eL.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eL.s6.ACCESSIBILITY_REDUCED_MOTION_AUTO_PLAY_GIFS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.GIF_AUTO_PLAY_LABEL],
                parent: eL.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eL.s6.ACCESSIBILITY_REDUCED_MOTION_PLAY_ANIMATED_EMOJI]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ANIMATE_EMOJI],
                parent: eL.s6.ACCESSIBILITY_REDUCED_MOTION
            },
            [eL.s6.ACCESSIBILITY_STICKERS]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
                parent: eL.s6.ACCESSIBILITY
            },
            [eL.s6.ACCESSIBILITY_MESSAGES]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_ACCESSIBILITY_CHAT_INPUT],
                parent: eL.s6.ACCESSIBILITY
            },
            [eL.s6.ACCESSIBILITY_MESSAGES_SEND_MESSAGE_BUTTON]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.DISPLAY_SUBMIT_BUTTON],
                parent: eL.s6.ACCESSIBILITY_MESSAGES
            },
            [eL.s6.ACCESSIBILITY_MESSAGES_LEGACY_CHAT_INPUT]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.LEGACY_CHAT_INPUT],
                parent: eL.s6.ACCESSIBILITY_MESSAGES
            },
            [eL.s6.ACCESSIBILITY_TEXT_TO_SPEECH]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_TTS],
                parent: eL.s6.ACCESSIBILITY
            },
            [eL.s6.ACCESSIBILITY_TEXT_TO_SPEECH_TTS_COMMAND]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ALLOW_TTS_COMMAND],
                parent: eL.s6.ACCESSIBILITY_TEXT_TO_SPEECH
            },
            [eL.s6.ACCESSIBILITY_TEXT_TO_SPEECH_RATE]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [ev.Z.Messages.ACCESSIBILITY_SETTINGS_TTS_RATE_LABEL],
                parent: eL.s6.ACCESSIBILITY
            },
            [eL.s6.ACCESSIBILITY_APPEARANCE_UPSELL]: {
                section: eP.oAB.ACCESSIBILITY,
                searchableTitles: [eL.CF],
                parent: eL.s6.ACCESSIBILITY
            },
            [eL.s6.VOICE_AND_VIDEO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.VOICE_AND_VIDEO],
                label: ev.Z.Messages.VOICE_AND_VIDEO,
                ariaLabel: ev.Z.Messages.VOICE_AND_VIDEO,
                element: eD.Z,
                predicate: () => v.Z.isSupported()
            },
            [eL.s6.VOICE_AND_VIDEO_DEVICES]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_INPUT_DEVICE, ev.Z.Messages.FORM_LABEL_OUTPUT_DEVICE, ev.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE, ev.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS, ev.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES],
                parent: eL.s6.VOICE_AND_VIDEO
            },
            [eL.s6.VOICE_AND_VIDEO_VOLUME_CONTROLS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_INPUT_VOLUME, ev.Z.Messages.FORM_LABEL_OUTPUT_VOLUME, ev.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE, ev.Z.Messages.OUTPUT_SEARCH_TERM_SPEAKERS, ev.Z.Messages.OUTPUT_SEARCH_TERM_HEADPHONES],
                parent: eL.s6.VOICE_AND_VIDEO
            },
            [eL.s6.VOICE_AND_VIDEO_MIC_TEST]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_VOICE_MIC_TEST_TITLE, ev.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
                parent: eL.s6.VOICE_AND_VIDEO
            },
            [eL.s6.VOICE_AND_VIDEO_INPUT_MODE]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_INPUT_MODE, ev.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
                parent: eL.s6.VOICE_AND_VIDEO
            },
            [eL.s6.VOICE_AND_VIDEO_SENSITIVITY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_INPUT_SENSITIVTY, ev.Z.Messages.INPUT_SEARCH_TERM_MICROPHONE],
                parent: eL.s6.VOICE_AND_VIDEO
            },
            [eL.s6.VOICE_AND_VIDEO_SOUNDS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.CALL_SOUNDS_SETTINGS],
                parent: eL.s6.VOICE_AND_VIDEO
            },
            [eL.s6.VOICE_AND_VIDEO_SOUNDBOARD]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.SOUNDBOARD],
                parent: eL.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eL.s6.VOICE_AND_VIDEO_ENTRANCE_SOUNDS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.CALL_SOUNDS_SETTINGS],
                parent: eL.s6.VOICE_AND_VIDEO_SOUNDS
            },
            [eL.s6.VOICE_AND_VIDEO_VIDEO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.VIDEO_SETTINGS],
                parent: eL.s6.VOICE_AND_VIDEO
            },
            [eL.s6.VOICE_AND_VIDEO_VIDEO_CAMERA]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_VIDEO_DEVICE],
                parent: eL.s6.VOICE_AND_VIDEO_VIDEO,
                predicate: () => v.Z.supports(eZ.AN.VIDEO)
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.SETTINGS_ADVANCED],
                parent: eL.s6.VOICE_AND_VIDEO
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_AUDIO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_VOICE_CODEC_TITLE],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_VOICE_VIDEO_CODEC_TITLE],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_OPENH264]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_VOICE_OPEN_H264],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => v.Z.supports(eZ.AN.OPEN_H264)
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_HARDWARE_ACCELERATION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_VOICE_HARDWARE_ENCODING],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO_EXPERIMENTAL_ENCODERS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.EXPERIMENTAL_ENCODERS],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_CODECS_VIDEO,
                predicate: () => 'stable' !== y.ZP.releaseChannel && v.Z.isExperimentalEncodersSupported()
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_VOICE_PROCESSING],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.ECHO_CANCELLATION],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_SIDECHAIN_COMPRESSION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.SIDECHAIN_COMPRESSION],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eL.s6.VOICE_AND_VIDEO_STREAM_PREVIEWS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.SIDECHAIN_COMPRESSION],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.NOISE_SUPPRESSION, ev.Z.Messages.NOISE_CANCELLATION_SEARCH_TERM_KRISP],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => v.Z.isNoiseSuppressionSupported()
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.ADVANCED_VOICE_ACTIVITY],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => v.Z.isAdvancedVoiceActivitySupported()
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.AUTOMATIC_GAIN_CONTROL],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING,
                predicate: () => v.Z.isAutomaticGainControlSupported()
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_QOS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_QOS],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => v.Z.supports(eZ.AN.QOS)
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_ATTENUATION]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_ATTENUATION],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => v.Z.supports(eZ.AN.ATTENUATION)
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_SUBSYSTEM]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_SUBSYSTEM],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => v.Z.supports(eZ.AN.LEGACY_AUDIO_SUBSYSTEM) || v.Z.supports(eZ.AN.EXPERIMENTAL_AUDIO_SUBSYSTEM)
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_SILENCE_WARNING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_VOICE_DIAGNOSTICS],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED,
                predicate: () => F.isPlatformEmbedded
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_DEBUG],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_STREAM_INFO_OVERLAY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_STREAM_INFO_OVERLAY],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => Y.Sb.getSetting()
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_AEC_DUMP]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.FORM_CHECKBOX_AEC_DUMP],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => v.Z.isAecDumpSupported()
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_CONNECTION_REPLAY]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.FORM_CHECKBOX_CONNECTION_LOG],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => ('canary' === y.ZP.releaseChannel || 'development' === y.ZP.releaseChannel) && eW && v.Z.supports(eZ.AN.CONNECTION_REPLAY)
            },
            [eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING_LOGGING]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.FORM_CHECKBOX_DEBUG_LOGGING],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED_DEBUGGING,
                predicate: () => F.isPlatformEmbedded && v.Z.supports(eZ.AN.DEBUG_LOGGING) && null != E.Z.fileManager.readLogFiles
            },
            [eL.s6.VOICE_AND_VIDEO_RESET_VOICE_SETTINGS]: {
                section: eP.oAB.VOICE,
                searchableTitles: [ev.Z.Messages.RESET_VOICE_SETTINGS],
                parent: eL.s6.VOICE_AND_VIDEO_ADVANCED
            },
            [eL.s6.POGGERMODE]: {
                section: eP.oAB.POGGERMODE,
                searchableTitles: [ev.Z.Messages.POGGERMODE],
                label: ev.Z.Messages.POGGERMODE,
                ariaLabel: ev.Z.Messages.POGGERMODE,
                element: R.Z,
                predicate: () => p.Z.settingsVisible,
                icon: (0, n.jsx)('img', {
                    alt: '',
                    src: t(348621),
                    className: ej.poggermodeIcon
                })
            },
            [eL.s6.CHAT]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.CHAT],
                label: ev.Z.Messages.CHAT,
                ariaLabel: ev.Z.Messages.CHAT,
                element: eh.Z
            },
            [eL.s6.CHAT_INLINE_MEDIA]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.INLINE_MEDIA_LABEL],
                parent: eL.s6.CHAT
            },
            [eL.s6.CHAT_INLINE_MEDIA_LINKS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.INLINE_EMBED_MEDIA],
                parent: eL.s6.CHAT_INLINE_MEDIA
            },
            [eL.s6.CHAT_INLINE_MEDIA_UPLOADS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.INLINE_ATTACHMENT_MEDIA],
                parent: eL.s6.CHAT_INLINE_MEDIA
            },
            [eL.s6.CHAT_INLINE_MEDIA_IMAGE_DESCRIPTIONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.IMAGE_DESCRIPTION],
                parent: eL.s6.CHAT_INLINE_MEDIA
            },
            [eL.s6.CHAT_EMBEDS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.RENDER_EMBEDS_LABEL],
                parent: eL.s6.CHAT
            },
            [eL.s6.CHAT_EMBEDS_LINK_PREVIEWS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.RENDER_EMBEDS],
                parent: eL.s6.CHAT_EMBEDS
            },
            [eL.s6.CHAT_EMOJI]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.EMOJI],
                parent: eL.s6.CHAT
            },
            [eL.s6.CHAT_EMOJI_REACTIONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.RENDER_REACTIONS],
                parent: eL.s6.CHAT_EMOJI
            },
            [eL.s6.CHAT_EMOJI_EMOTICONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.CONVERT_EMOTICONS],
                parent: eL.s6.CHAT_EMOJI
            },
            [eL.s6.CHAT_STICKERS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.STICKERS_AUTO_PLAY_HEADING],
                parent: eL.s6.CHAT
            },
            [eL.s6.CHAT_STICKERS_SUGGESTIONS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.AUTO_SUGGEST_STICKERS],
                parent: eL.s6.CHAT_STICKERS
            },
            [eL.s6.CHAT_STICKERS_AUTOCOMPLETE]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.STICKERS_IN_AUTOCOMPLETE],
                parent: eL.s6.CHAT_STICKERS
            },
            [eL.s6.CHAT_TEXT_BOX]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_USE_RICH_CHAT_BOX],
                parent: eL.s6.CHAT
            },
            [eL.s6.CHAT_TEXT_BOX_PREVIEW]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.PREVIEW_MARKDOWN_DESCRIPTION],
                parent: eL.s6.CHAT_TEXT_BOX
            },
            [eL.s6.CHAT_THREADS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.THREADS],
                parent: eL.s6.CHAT
            },
            [eL.s6.CHAT_THREADS_SPLIT_VIEW]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.USE_THREADS_SIDEBAR_DESCRIPTION],
                parent: eL.s6.CHAT_THREADS
            },
            [eL.s6.CHAT_SPOILERS]: {
                section: eP.oAB.TEXT,
                searchableTitles: [ev.Z.Messages.SHOW_SPOILER_CONTENT],
                parent: eL.s6.CHAT
            },
            [eL.s6.NOTIFICATIONS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.NOTIFICATIONS],
                label: ev.Z.Messages.NOTIFICATIONS,
                ariaLabel: ev.Z.Messages.NOTIFICATIONS,
                element: eS.Z
            },
            [eL.s6.NOTIFICATIONS_ENABLE_DESKTOP]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.DESKTOP_NOTIFICATIONS_ENABLE],
                parent: eL.s6.NOTIFICATIONS
            },
            [eL.s6.NOTIFICATIONS_MENTION_ON_ALL_MESSAGES]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ['Mention on all messages'],
                parent: eL.s6.NOTIFICATIONS
            },
            [eL.s6.NOTIFICATIONS_UNREAD_MESSAGE_BADGE]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL],
                parent: eL.s6.NOTIFICATIONS
            },
            [eL.s6.NOTIFICATIONS_ENABLE_TASKBAR_FLASHING]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL],
                parent: eL.s6.NOTIFICATIONS,
                predicate: () => (0, F.isWindows)()
            },
            [eL.s6.NOTIFICATIONS_UNREAD_SETTINGS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.NOTIF_MIGRATION_SETTINGS_TITLE],
                parent: eL.s6.NOTIFICATIONS
            },
            [eL.s6.NOTIFICATIONS_NEW_SETTINGS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ['New Notification Settings (Advancd, Staff Only)'],
                parent: eL.s6.NOTIFICATIONS,
                predicate: () => !1
            },
            [eL.s6.NOTIFICATIONS_RESTORE_MOST_RECENT_SNAPSHOT]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ['Restore most recent snapshot'],
                parent: eL.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eL.s6.NOTIFICATIONS_LAUNCH_MIGRATION]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ['Launch Migration'],
                parent: eL.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eL.s6.NOTIFICATIONS_TOGGLE_NEW_SYSTEM]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: ['Toggle new system on/off'],
                parent: eL.s6.NOTIFICATIONS_NEW_SETTINGS,
                predicate: () => !1
            },
            [eL.s6.NOTIFICATIONS_PUSH_INACTIVE_TIMEOUT]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT],
                parent: eL.s6.NOTIFICATIONS
            },
            [eL.s6.NOTIFICATIONS_TEXT_TO_SPEECH]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_TTS],
                parent: eL.s6.NOTIFICATIONS
            },
            [eL.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.GUILD_COMMUNITY_ALERTS_HEADER],
                parent: eL.s6.NOTIFICATIONS
            },
            [eL.s6.NOTIFICATIONS_COMMUNITY_IN_APP_ALERTS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER],
                parent: eL.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eL.s6.NOTIFICATIONS_COMMUNITY_PUSH_NOTIFICATIONS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER],
                parent: eL.s6.NOTIFICATIONS_COMMUNITY_ACTIVITY_ALERTS
            },
            [eL.s6.NOTIFICATIONS_SOUNDS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.SOUNDS],
                parent: eL.s6.NOTIFICATIONS
            },
            [eL.s6.NOTIFICATIONS_EMAILS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS],
                parent: eL.s6.NOTIFICATIONS
            },
            [eL.s6.NOTIFICATIONS_EMAILS_COMMUNICATION]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_COMMUNICATION],
                parent: eL.s6.NOTIFICATIONS_EMAILS
            },
            [eL.s6.NOTIFICATIONS_EMAILS_SOCIAL]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_SOCIAL],
                parent: eL.s6.NOTIFICATIONS_EMAILS
            },
            [eL.s6.NOTIFICATIONS_EMAILS_ANNOUNCEMENTS_AND_UPDATES]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_UPDATES_AND_ANNOUNCEMENTS],
                parent: eL.s6.NOTIFICATIONS_EMAILS
            },
            [eL.s6.NOTIFICATIONS_EMAILS_TIPS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_TIPS],
                parent: eL.s6.NOTIFICATIONS_EMAILS
            },
            [eL.s6.NOTIFICATIONS_EMAILS_RECOMMENDATIONS_AND_EVENTS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_CATEGORY_RECOMMENDATIONS_AND_EVENTS],
                parent: eL.s6.NOTIFICATIONS_EMAILS
            },
            [eL.s6.NOTIFICATIONS_EMAILS_UNSUBSCRIBE_FROM_ALL_MARKETING_EMAILS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_EMAIL_NOTIFICATIONS_UNSUB_MARKETING],
                parent: eL.s6.NOTIFICATIONS_EMAILS
            },
            [eL.s6.NOTIFICATIONS_REACTIONS]: {
                section: eP.oAB.NOTIFICATIONS,
                searchableTitles: [ev.Z.Messages.REACTION_NOTIFICATIONS],
                parent: eL.s6.NOTIFICATIONS
            },
            [eL.s6.KEYBINDS]: {
                section: eP.oAB.KEYBINDS,
                searchableTitles: [ev.Z.Messages.KEYBINDS],
                label: ev.Z.Messages.KEYBINDS,
                element: eE.Z
            },
            [eL.s6.LANGUAGE]: {
                section: eP.oAB.LOCALE,
                searchableTitles: [ev.Z.Messages.LANGUAGE],
                label: ev.Z.Messages.LANGUAGE,
                element: eT.Z
            },
            [eL.s6.WINDOW_SETTINGS]: {
                section: eP.oAB.WINDOWS,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS],
                label: ev.Z.Messages.USER_SETTINGS_WINDOWS_SETTINGS,
                element: ep.Z,
                predicate: () => F.isPlatformEmbedded && (0, F.isWindows)()
            },
            [eL.s6.LINUX_SETTINGS]: {
                section: eP.oAB.LINUX,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_LINUX_SETTINGS],
                label: ev.Z.Messages.USER_SETTINGS_LINUX_SETTINGS,
                element: eU,
                predicate: () => F.isPlatformEmbedded && (0, F.isLinux)()
            },
            [eL.s6.STREAMER_MODE]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ev.Z.Messages.STREAMER_MODE],
                label: ev.Z.Messages.STREAMER_MODE,
                ariaLabel: ev.Z.Messages.STREAMER_MODE,
                element: eg.Z
            },
            [eL.s6.STREAMER_MODE_INTEGRATIONS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_STREAMER_NOTICE_TITLE],
                parent: eL.s6.STREAMER_MODE
            },
            [eL.s6.STREAMER_MODE_ENABLE]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ev.Z.Messages.ENABLE_STREAMER_MODE_LABEL],
                parent: eL.s6.STREAMER_MODE
            },
            [eL.s6.STREAMER_MODE_HIDE_PERSONAL_INFORMATION]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ev.Z.Messages.HIDE_PERSONAL_INFORMATION_LABEL],
                parent: eL.s6.STREAMER_MODE
            },
            [eL.s6.STREAMER_MODE_HIDE_INVITE_LINKS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ev.Z.Messages.HIDE_INSTANT_INVITES_LABEL],
                parent: eL.s6.STREAMER_MODE
            },
            [eL.s6.STREAMER_MODE_DISABLE_SOUNDS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ev.Z.Messages.FORM_LABEL_MOBILE_NOTIFICATIONS_SOUND_DISABLE],
                parent: eL.s6.STREAMER_MODE
            },
            [eL.s6.STREAMER_MODE_DISABLE_NOTIFICATIONS]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ev.Z.Messages.DISABLE_NOTIFICATIONS_LABEL],
                parent: eL.s6.STREAMER_MODE
            },
            [eL.s6.STREAMER_MODE_HIDE_DISCORD_WINDOW_FROM_SCREEN_CAPTURE]: {
                section: eP.oAB.STREAMER_MODE,
                searchableTitles: [ev.Z.Messages.HIDE_WINDOW_FROM_STREAM_LABEL],
                parent: eL.s6.STREAMER_MODE,
                predicate: () => {
                    var e, s, t;
                    return null !== (t = null === E.Z || void 0 === E.Z ? void 0 : null === (s = E.Z.window) || void 0 === s ? void 0 : null === (e = s.supportsContentProtection) || void 0 === e ? void 0 : e.call(s)) && void 0 !== t && t;
                }
            },
            [eL.s6.SETTINGS_ADVANCED]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [ev.Z.Messages.SETTINGS_ADVANCED],
                label: ev.Z.Messages.SETTINGS_ADVANCED,
                ariaLabel: ev.Z.Messages.SETTINGS_ADVANCED,
                element: $.Z
            },
            [eL.s6.SETTINGS_ADVANCED_DEVELOPER_MODE]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [ev.Z.Messages.DEVELOPER_MODE],
                parent: eL.s6.SETTINGS_ADVANCED,
                predicate: () => U.wS
            },
            [eL.s6.SETTINGS_ADVANCED_HARDWARE_ACCELERATION]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [ev.Z.Messages.HARDWARE_ACCELERATION],
                parent: eL.s6.SETTINGS_ADVANCED,
                predicate: () => F.isPlatformEmbedded
            },
            [eL.s6.SETTINGS_ADVANCED_SHOW_GAME_LIBRARY]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_SHOW_LIBRARY],
                parent: eL.s6.SETTINGS_ADVANCED,
                predicate: () => eJ
            },
            [eL.s6.SETTINGS_ADVANCED_APPLICATION_TEST_MODE]: {
                section: eP.oAB.ADVANCED,
                searchableTitles: [ev.Z.Messages.DEVELOPER_APPLICATION_TEST_MODE],
                parent: eL.s6.SETTINGS_ADVANCED,
                predicate: () => e0
            },
            [eL.s6.ACTIVITY_PRIVACY]: {
                section: eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ev.Z.Messages.ACTIVITY_PRIVACY],
                label: ev.Z.Messages.ACTIVITY_PRIVACY,
                ariaLabel: ev.Z.Messages.ACTIVITY_PRIVACY,
                element: J.Z,
                predicate: () => !ek
            },
            [eL.s6.ACTIVITY_PRIVACY_STATUS]: {
                section: ek ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ev.Z.Messages.ACTIVITY_STATUS],
                parent: ek ? eL.s6.GAMES_ACTIVITY_PRIVACY : eL.s6.ACTIVITY_PRIVACY
            },
            [eL.s6.ACTIVITY_PRIVACY_RICH_PRESENCE]: {
                section: ek ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [ev.Z.Messages.ACTIVITY_PARTY_PRIVACY],
                parent: ek ? eL.s6.GAMES_ACTIVITY_PRIVACY : eL.s6.ACTIVITY_PRIVACY
            },
            [eL.s6.ACTIVITY_PRIVACY_TOS]: {
                section: ek ? eP.oAB.GAMES : eP.oAB.ACTIVITY_PRIVACY,
                searchableTitles: [eL.CF],
                parent: ek ? eL.s6.GAMES_ACTIVITY_PRIVACY : eL.s6.ACTIVITY_PRIVACY
            },
            [eL.s6.REGISTERED_GAMES]: {
                section: eP.oAB.REGISTERED_GAMES,
                searchableTitles: [ev.Z.Messages.REGISTERED_GAMES],
                label: ev.Z.Messages.REGISTERED_GAMES,
                element: ed.Z,
                predicate: () => !ek && (0, eM.Jw)()
            },
            [eL.s6.OVERLAY]: {
                section: eP.oAB.OVERLAY,
                searchableTitles: [ev.Z.Messages.OVERLAY],
                label: ev.Z.Messages.OVERLAY,
                element: eI.Z,
                predicate: () => !ek && eV
            },
            [eL.s6.CHANGELOG]: {
                section: 'changelog',
                onClick: () => (0, I.Z)(!0),
                searchableTitles: [ev.Z.Messages.WHATS_NEW],
                label: ev.Z.Messages.WHATS_NEW
            },
            [eL.s6.MERCHANDISE]: {
                section: 'merchandise',
                onClick: () => {
                    let e = 'https://discordmerch.com/Dsktopprm';
                    B.default.track(eP.rMx.USER_SETTINGS_MERCH_LINK_CLICKED),
                        (0, G.q)({
                            href: e,
                            shouldConfirm: !0,
                            onConfirm: () => {
                                B.default.track(eP.rMx.USER_SETTINGS_MERCH_LINK_CONFIRMED), (0, T.Z)(e);
                            }
                        });
                },
                searchableTitles: [ev.Z.Messages.MERCHANDISE],
                label: ev.Z.Messages.MERCHANDISE,
                ariaLabel: ev.Z.Messages.MERCHANDISE
            },
            [eL.s6.HYPESQUAD]: {
                section: eP.oAB.HYPESQUAD_ONLINE,
                searchableTitles: [ev.Z.Messages.USER_SETTINGS_HYPESQUAD],
                label: ev.Z.Messages.USER_SETTINGS_HYPESQUAD,
                element: e_.Z
            },
            [eL.s6.EXPERIMENTS]: {
                section: eP.oAB.EXPERIMENTS,
                searchableTitles: ['Experiments'],
                label: 'Experiments',
                element: eR.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options'],
                label: 'Developer Options',
                ariaLabel: 'Developer Options',
                element: eo.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_FLAGS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Developer Options Flags'],
                parent: eL.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_TRACING_REQUESTS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Tracing Requests'],
                parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_FORCED_CANARY]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Forced Canary'],
                parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_GATEWAY_EVENTS_TO_CONSOLE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Gateway Events To Console'],
                parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_OVERLAY_RPC_EVENTS_COMMANDS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Rpc Events Commands'],
                parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_ANALYTICS_EVENTS_LOGGING]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Events Logging'],
                parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_SOURCE_MAPS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Source Maps'],
                parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_ANALYTICS_DEBUGGER_VIEW]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Analytics Debugger View'],
                parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_IDLE_STATUS_INDICATOR]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Idle Status Indicator'],
                parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eW && b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_ACCESSIBILITY_AUDITING]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Accessibility Auditing'],
                parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => !1
            },
            [eL.s6.DEVELOPER_OPTIONS_CSS_DEBUGGING]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['CSS Debugging'],
                parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eW && b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eW && b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_LAYOUT_DEBUGGING_OPTIONS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Layout Debugging'],
                parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eW && b.Z.isDeveloper && Z.default.layoutDebuggingEnabled
            },
            [eL.s6.DEVELOPER_OPTIONS_PREVIEW_UNPUBLISHED_COLLECTIONS]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Preview Unpublished Collections'],
                parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => eW && b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side'],
                parent: eL.s6.DEVELOPER_OPTIONS_FLAGS,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Premium Type'],
                parent: eL.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Override Client Side Account Created Data'],
                parent: eL.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_OVERRIDE_OPEN_OVERLAY]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Open Overlay'],
                parent: eL.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_RESET_SOCKET]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Reset Socket'],
                parent: eL.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_CLEAR_CACHES]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Clear Caches'],
                parent: eL.s6.DEVELOPER_OPTIONS,
                predicate: () => S.q && b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_CRASHES]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Crashes'],
                parent: eL.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_SURVEY_OVERRIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Survey Override'],
                parent: eL.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_CHANGELOG_OVERRIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Changelog Override'],
                parent: eL.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DEVELOPER_OPTIONS_BUILD_OVERRIDE]: {
                section: eP.oAB.DEVELOPER_OPTIONS,
                searchableTitles: ['Build Override'],
                parent: eL.s6.DEVELOPER_OPTIONS,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.HOTSPOT_OPTIONS]: {
                section: eP.oAB.HOTSPOT_OPTIONS,
                searchableTitles: ['Hotspot Options'],
                label: 'Hotspot Options',
                element: w.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.DISMISSIBLE_CONTENT_OPTIONS]: {
                section: eP.oAB.DISMISSIBLE_CONTENT_OPTIONS,
                searchableTitles: ['Dismissible Contents'],
                label: 'Dismissible Contents',
                element: A.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.PAYMENT_FLOW_MODALS]: {
                section: eP.oAB.PAYMENT_FLOW_MODAL_TEST_PAGE,
                searchableTitles: ['Payment Flow Modals'],
                label: 'Payment Flow Modals',
                element: H.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.TEXT_PLAYGROUND]: {
                section: eP.oAB.TEXT_PLAYGROUND,
                searchableTitles: ['Text Playground'],
                label: 'Text Playground',
                element: eO.Z,
                predicate: () => (0, Q.D)() || b.Z.isDeveloper
            },
            [eL.s6.DESIGN_SYSTEMS]: {
                section: eP.oAB.DESIGN_SYSTEMS,
                searchableTitles: ['Design Systems'],
                label: 'Design Systems',
                element: er.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.TEXT_COMPONENTS]: {
                section: eP.oAB.TEXT_COMPONENT,
                searchableTitles: ['Text Components'],
                label: 'Text Components',
                element: z.Z,
                predicate: () => (0, Q.D)() || b.Z.isDeveloper
            },
            [eL.s6.INTL_TESTING]: {
                section: eP.oAB.INTL_TESTING,
                searchableTitles: ['Intl Testing', 'i18n'],
                label: 'Intl Testing',
                element: O.Z,
                predicate: () => eW || b.Z.isDeveloper
            },
            [eL.s6.PROFILE_EFFECTS_PREVIEW_TOOL]: {
                section: eP.oAB.PROFILE_EFFECTS_PREVIEW_TOOL,
                searchableTitles: ['Profile Effects Preview Tool'],
                label: 'Profile Effects Preview Tool',
                element: D.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.QUEST_PREVIEW_TOOL]: {
                section: eP.oAB.QUEST_PREVIEW_TOOL,
                searchableTitles: ['Quest Preview Tool'],
                label: 'Quest Preview Tool',
                element: P.Z,
                predicate: () => (0, L.X7)({ location: eb.dr.QUEST_PREVIEW_TOOL })
            },
            [eL.s6.WEB_SETTING_TREE_TOOL]: {
                section: eP.oAB.WEB_SETTING_TREE_TOOL,
                searchableTitles: ['Web Setting Tree Tool'],
                label: 'Web Setting Tree Tool',
                element: ex.Z,
                predicate: () => b.Z.isDeveloper
            },
            [eL.s6.LOGOUT]: {
                section: 'logout',
                onClick: () => {
                    (0, o.openModal)((e) =>
                        (0, n.jsx)(o.ConfirmModal, {
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
                        })
                    );
                },
                label: ev.Z.Messages.LOGOUT,
                ariaLabel: ev.Z.Messages.LOGOUT,
                icon: (0, n.jsx)(o.DoorExitIcon, {
                    size: 'xs',
                    color: 'currentColor'
                })
            },
            [eL.s6.SOCIAL_LINKS]: {
                section: u.ID.CUSTOM,
                element: K.Z
            },
            [eL.s6.CLIENT_DEBUG_INFO]: {
                section: u.ID.CUSTOM,
                element: k.Z
            }
        });
    };
