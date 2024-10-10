var n, a, _, o, i, E, c, s, I, u, l, R, A, T, N, d, O;
r.d(t, {
    Ax: function () {
        return I;
    },
    GA: function () {
        return D;
    },
    JC: function () {
        return C;
    },
    KQ: function () {
        return h;
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
        return L;
    },
    fy: function () {
        return s;
    },
    h1: function () {
        return a;
    },
    ic: function () {
        return g;
    },
    oX: function () {
        return p;
    },
    rP: function () {
        return o;
    },
    to: function () {
        return E;
    },
    u0: function () {
        return u;
    },
    vY: function () {
        return f;
    },
    vc: function () {
        return M;
    },
    yP: function () {
        return c;
    }
});
let p = 250,
    f = 762880,
    L = 'ROLE_SUBSCRIPTIONS',
    S = 'APPLICATION_SUBSCRIPTION_SUBSECTION',
    D = 'SOUNDBOARD_SUBSECTION';
((l = n || (n = {})).USER_PROFILE = 'user_profile'), (l.GUILD = 'guild'), (l.TRY_IT_OUT = 'try_it_out'), ((a || (a = {})).CUSTOM_APP_ICONS = 'custom_app_icon'), ((_ || (_ = {})).TRY_IT_OUT = 'try_it_out'), ((R = o || (o = {})).REDUCED_MOTION = 'reduced_motion'), (R.SYNC_PROFILE_THEME_WITH_USER_THEME = 'sync_profile_theme_with_user_theme'), (R.LEGACY_CHAT_INPUT = 'legacy_chat_input'), ((i || (i = {})).HARDWARE_ACCELERATION = 'hardware_acceleration'), ((A = E || (E = {})).DM_SAFETY_ALERTS = 'dm_safety_alerts'), (A.DM_SAFETY_ALERTS_V2 = 'dm_safety_alerts_v2'), (A.MESSAGE_REQUESTS = 'message_requests'), (A.MESSAGE_REQUESTS_V2 = 'message_requests_v2'), (A.EXPLICIT_MEDIA_REDACTION = 'explicit_media_redaction'), (A.EXPLICIT_MEDIA_REDACTION_V2 = 'explicit_media_redaction_v2');
let h = {
    ProfileCustomizationScrollPositions: _,
    AccessibilityScrollPositions: o,
    VoiceAndVideoScrollPositions: i,
    AppearanceScrollPositions: a,
    PrivacyAndSafetyScrollPositions: E
};
function C() {
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
((T = c || (c = {}))[(T.PRELOADED_USER_SETTINGS = 1)] = 'PRELOADED_USER_SETTINGS'), (T[(T.FRECENCY_AND_FAVORITES_SETTINGS = 2)] = 'FRECENCY_AND_FAVORITES_SETTINGS'), (T[(T.TEST_SETTINGS = 3)] = 'TEST_SETTINGS'), ((N = s || (s = {}))[(N.INFREQUENT_USER_ACTION = 0)] = 'INFREQUENT_USER_ACTION'), (N[(N.FREQUENT_USER_ACTION = 10)] = 'FREQUENT_USER_ACTION'), (N[(N.SLOW_USER_ACTION = 20)] = 'SLOW_USER_ACTION'), (N[(N.AUTOMATED = 30)] = 'AUTOMATED'), (N[(N.DAILY = 86400)] = 'DAILY'), ((d = I || (I = {}))[(d.CONFIRM_START = 0)] = 'CONFIRM_START'), (d[(d.CONFIRM_CODE = 1)] = 'CONFIRM_CODE'), (d[(d.CHANGE_EMAIL_REASONS = 2)] = 'CHANGE_EMAIL_REASONS'), (d[(d.CHANGE_EMAIL_WARNING = 3)] = 'CHANGE_EMAIL_WARNING'), (d[(d.EMAIL_AND_PASSWORD = 4)] = 'EMAIL_AND_PASSWORD'), (d[(d.COMPLETE = 5)] = 'COMPLETE');
let g = {
        NEW_FORUM_THREADS_ON: 16384,
        NEW_FORUM_THREADS_OFF: 8192,
        OPT_IN_ENABLED: 4096,
        FAVORITED: 2048,
        UNREADS_ALL_MESSAGES: 1024,
        UNREADS_ONLY_MENTIONS: 512
    },
    M = {
        OPT_IN_CHANNELS_ON: 16384,
        OPT_IN_CHANNELS_OFF: 8192,
        UNREADS_ONLY_MENTIONS: 4096,
        UNREADS_ALL_MESSAGES: 2048
    };
((O = u || (u = {})).USER = 'user'), (O.STREAM = 'stream');
