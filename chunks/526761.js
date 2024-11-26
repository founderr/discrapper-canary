var a, n, _, o, E, i, c, s, l, I, u, R, A, T, N, d, f, O;
r.d(t, {
    Ax: function () {
        return I;
    },
    FY: function () {
        return c;
    },
    GA: function () {
        return S;
    },
    JC: function () {
        return P;
    },
    KQ: function () {
        return C;
    },
    NB: function () {
        return a;
    },
    XZ: function () {
        return D;
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
        return n;
    },
    ic: function () {
        return g;
    },
    oX: function () {
        return L;
    },
    rP: function () {
        return o;
    },
    to: function () {
        return i;
    },
    u0: function () {
        return u;
    },
    vY: function () {
        return p;
    },
    vc: function () {
        return U;
    },
    yP: function () {
        return s;
    }
});
let L = 250,
    p = 762880,
    h = 'ROLE_SUBSCRIPTIONS',
    D = 'APPLICATION_SUBSCRIPTION_SUBSECTION',
    S = 'SOUNDBOARD_SUBSECTION';
((R = a || (a = {})).USER_PROFILE = 'user_profile'), (R.GUILD = 'guild'), (R.TRY_IT_OUT = 'try_it_out'), ((n || (n = {})).CUSTOM_APP_ICONS = 'custom_app_icon'), ((_ || (_ = {})).TRY_IT_OUT = 'try_it_out'), ((A = o || (o = {})).REDUCED_MOTION = 'reduced_motion'), (A.SYNC_PROFILE_THEME_WITH_USER_THEME = 'sync_profile_theme_with_user_theme'), (A.LEGACY_CHAT_INPUT = 'legacy_chat_input'), ((E || (E = {})).HARDWARE_ACCELERATION = 'hardware_acceleration'), ((T = i || (i = {})).DM_SAFETY_ALERTS = 'dm_safety_alerts'), (T.DM_SAFETY_ALERTS_V2 = 'dm_safety_alerts_v2'), (T.MESSAGE_REQUESTS = 'message_requests'), (T.MESSAGE_REQUESTS_V2 = 'message_requests_v2'), (T.EXPLICIT_MEDIA_REDACTION = 'explicit_media_redaction'), (T.EXPLICIT_MEDIA_REDACTION_V2 = 'explicit_media_redaction_v2'), ((c || (c = {})).RESTRICTED_ACCOUNTS = 'restricted_accounts');
let C = {
    ProfileCustomizationScrollPositions: _,
    AccessibilityScrollPositions: o,
    VoiceAndVideoScrollPositions: E,
    AppearanceScrollPositions: n,
    PrivacyAndSafetyScrollPositions: i,
    ContentAndSocialScrollPositions: c
};
function P() {
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
((N = s || (s = {}))[(N.PRELOADED_USER_SETTINGS = 1)] = 'PRELOADED_USER_SETTINGS'), (N[(N.FRECENCY_AND_FAVORITES_SETTINGS = 2)] = 'FRECENCY_AND_FAVORITES_SETTINGS'), (N[(N.TEST_SETTINGS = 3)] = 'TEST_SETTINGS'), ((d = l || (l = {}))[(d.INFREQUENT_USER_ACTION = 0)] = 'INFREQUENT_USER_ACTION'), (d[(d.FREQUENT_USER_ACTION = 10)] = 'FREQUENT_USER_ACTION'), (d[(d.SLOW_USER_ACTION = 20)] = 'SLOW_USER_ACTION'), (d[(d.AUTOMATED = 30)] = 'AUTOMATED'), (d[(d.DAILY = 86400)] = 'DAILY'), ((f = I || (I = {}))[(f.CONFIRM_START = 0)] = 'CONFIRM_START'), (f[(f.CONFIRM_CODE = 1)] = 'CONFIRM_CODE'), (f[(f.CHANGE_EMAIL_REASONS = 2)] = 'CHANGE_EMAIL_REASONS'), (f[(f.CHANGE_EMAIL_WARNING = 3)] = 'CHANGE_EMAIL_WARNING'), (f[(f.EMAIL_AND_PASSWORD = 4)] = 'EMAIL_AND_PASSWORD'), (f[(f.COMPLETE = 5)] = 'COMPLETE');
let g = {
        NEW_FORUM_THREADS_ON: 16384,
        NEW_FORUM_THREADS_OFF: 8192,
        OPT_IN_ENABLED: 4096,
        FAVORITED: 2048,
        UNREADS_ALL_MESSAGES: 1024,
        UNREADS_ONLY_MENTIONS: 512
    },
    U = {
        OPT_IN_CHANNELS_ON: 16384,
        OPT_IN_CHANNELS_OFF: 8192,
        UNREADS_ONLY_MENTIONS: 4096,
        UNREADS_ALL_MESSAGES: 2048
    };
((O = u || (u = {})).USER = 'user'), (O.STREAM = 'stream');
