var n, a, _, o, i, E, c, s, l, u, I, R, N, A, T, d, L, f;
r.d(t, {
    Ax: function () {
        return u;
    },
    FY: function () {
        return c;
    },
    GA: function () {
        return D;
    },
    JC: function () {
        return g;
    },
    KQ: function () {
        return C;
    },
    NB: function () {
        return n;
    },
    XZ: function () {
        return S;
    },
    Y_: function () {
        return _;
    },
    cP: function () {
        return h;
    },
    fy: function () {
        return l;
    },
    h1: function () {
        return a;
    },
    ic: function () {
        return U;
    },
    oX: function () {
        return O;
    },
    rP: function () {
        return o;
    },
    to: function () {
        return E;
    },
    u0: function () {
        return I;
    },
    vY: function () {
        return p;
    },
    vc: function () {
        return P;
    },
    yP: function () {
        return s;
    }
});
let O = 250,
    p = 762880,
    h = 'ROLE_SUBSCRIPTIONS',
    S = 'APPLICATION_SUBSCRIPTION_SUBSECTION',
    D = 'SOUNDBOARD_SUBSECTION';
((R = n || (n = {})).USER_PROFILE = 'user_profile'), (R.GUILD = 'guild'), (R.TRY_IT_OUT = 'try_it_out'), ((a || (a = {})).CUSTOM_APP_ICONS = 'custom_app_icon'), ((_ || (_ = {})).TRY_IT_OUT = 'try_it_out'), ((N = o || (o = {})).REDUCED_MOTION = 'reduced_motion'), (N.SYNC_PROFILE_THEME_WITH_USER_THEME = 'sync_profile_theme_with_user_theme'), (N.LEGACY_CHAT_INPUT = 'legacy_chat_input'), ((i || (i = {})).HARDWARE_ACCELERATION = 'hardware_acceleration'), ((A = E || (E = {})).DM_SAFETY_ALERTS = 'dm_safety_alerts'), (A.DM_SAFETY_ALERTS_V2 = 'dm_safety_alerts_v2'), (A.MESSAGE_REQUESTS = 'message_requests'), (A.MESSAGE_REQUESTS_V2 = 'message_requests_v2'), (A.EXPLICIT_MEDIA_REDACTION = 'explicit_media_redaction'), (A.EXPLICIT_MEDIA_REDACTION_V2 = 'explicit_media_redaction_v2'), ((c || (c = {})).RESTRICTED_ACCOUNTS = 'restricted_accounts');
let C = {
    ProfileCustomizationScrollPositions: _,
    AccessibilityScrollPositions: o,
    VoiceAndVideoScrollPositions: i,
    AppearanceScrollPositions: a,
    PrivacyAndSafetyScrollPositions: E,
    ContentAndSocialScrollPositions: c
};
function g() {
    return {
        protoToSave: void 0,
        timeout: void 0,
        timeoutDelay: Number.MIN_SAFE_INTEGER,
        rateLimited: !1,
        cleanupFuncs: [],
        loaded: !1,
        loading: !1,
        triggeredMigrations: !1,
        offlineEditDataVersion: void 0
    };
}
((T = s || (s = {}))[(T.PRELOADED_USER_SETTINGS = 1)] = 'PRELOADED_USER_SETTINGS'), (T[(T.FRECENCY_AND_FAVORITES_SETTINGS = 2)] = 'FRECENCY_AND_FAVORITES_SETTINGS'), (T[(T.TEST_SETTINGS = 3)] = 'TEST_SETTINGS'), ((d = l || (l = {}))[(d.INFREQUENT_USER_ACTION = 0)] = 'INFREQUENT_USER_ACTION'), (d[(d.FREQUENT_USER_ACTION = 10)] = 'FREQUENT_USER_ACTION'), (d[(d.SLOW_USER_ACTION = 20)] = 'SLOW_USER_ACTION'), (d[(d.AUTOMATED = 30)] = 'AUTOMATED'), (d[(d.DAILY = 86400)] = 'DAILY'), ((L = u || (u = {}))[(L.CONFIRM_START = 0)] = 'CONFIRM_START'), (L[(L.CONFIRM_CODE = 1)] = 'CONFIRM_CODE'), (L[(L.CHANGE_EMAIL_REASONS = 2)] = 'CHANGE_EMAIL_REASONS'), (L[(L.CHANGE_EMAIL_WARNING = 3)] = 'CHANGE_EMAIL_WARNING'), (L[(L.EMAIL_AND_PASSWORD = 4)] = 'EMAIL_AND_PASSWORD'), (L[(L.COMPLETE = 5)] = 'COMPLETE');
let U = {
        NEW_FORUM_THREADS_ON: 16384,
        NEW_FORUM_THREADS_OFF: 8192,
        OPT_IN_ENABLED: 4096,
        FAVORITED: 2048,
        UNREADS_ALL_MESSAGES: 1024,
        UNREADS_ONLY_MENTIONS: 512
    },
    P = {
        OPT_IN_CHANNELS_ON: 16384,
        OPT_IN_CHANNELS_OFF: 8192,
        UNREADS_ONLY_MENTIONS: 4096,
        UNREADS_ALL_MESSAGES: 2048
    };
((f = I || (I = {})).USER = 'user'), (f.STREAM = 'stream');
