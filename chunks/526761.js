var i, a, s, o, l, u, c, d, f, _, h;
r.d(n, {
    Ax: function () {
        return _;
    },
    FY: function () {
        return c;
    },
    GA: function () {
        return v;
    },
    JC: function () {
        return T;
    },
    KQ: function () {
        return I;
    },
    NB: function () {
        return i;
    },
    XZ: function () {
        return E;
    },
    Y_: function () {
        return s;
    },
    cP: function () {
        return g;
    },
    fy: function () {
        return f;
    },
    h1: function () {
        return a;
    },
    ic: function () {
        return b;
    },
    oX: function () {
        return p;
    },
    rP: function () {
        return o;
    },
    to: function () {
        return u;
    },
    u0: function () {
        return h;
    },
    vY: function () {
        return m;
    },
    vc: function () {
        return y;
    },
    yP: function () {
        return d;
    }
});
let p = 250,
    m = 762880,
    g = 'ROLE_SUBSCRIPTIONS',
    E = 'APPLICATION_SUBSCRIPTION_SUBSECTION',
    v = 'SOUNDBOARD_SUBSECTION';
!(function (e) {
    (e.USER_PROFILE = 'user_profile'), (e.GUILD = 'guild'), (e.TRY_IT_OUT = 'try_it_out');
})(i || (i = {})),
    !(function (e) {
        e.CUSTOM_APP_ICONS = 'custom_app_icon';
    })(a || (a = {})),
    !(function (e) {
        e.TRY_IT_OUT = 'try_it_out';
    })(s || (s = {})),
    !(function (e) {
        (e.REDUCED_MOTION = 'reduced_motion'), (e.SYNC_PROFILE_THEME_WITH_USER_THEME = 'sync_profile_theme_with_user_theme'), (e.LEGACY_CHAT_INPUT = 'legacy_chat_input');
    })(o || (o = {})),
    !(function (e) {
        e.HARDWARE_ACCELERATION = 'hardware_acceleration';
    })(l || (l = {})),
    !(function (e) {
        (e.DM_SAFETY_ALERTS = 'dm_safety_alerts'), (e.DM_SAFETY_ALERTS_V2 = 'dm_safety_alerts_v2'), (e.MESSAGE_REQUESTS = 'message_requests'), (e.MESSAGE_REQUESTS_V2 = 'message_requests_v2'), (e.EXPLICIT_MEDIA_REDACTION = 'explicit_media_redaction'), (e.EXPLICIT_MEDIA_REDACTION_V2 = 'explicit_media_redaction_v2');
    })(u || (u = {})),
    !(function (e) {
        e.RESTRICTED_ACCOUNTS = 'restricted_accounts';
    })(c || (c = {}));
let I = {
    ProfileCustomizationScrollPositions: s,
    AccessibilityScrollPositions: o,
    VoiceAndVideoScrollPositions: l,
    AppearanceScrollPositions: a,
    PrivacyAndSafetyScrollPositions: u,
    ContentAndSocialScrollPositions: c
};
function T() {
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
!(function (e) {
    (e[(e.PRELOADED_USER_SETTINGS = 1)] = 'PRELOADED_USER_SETTINGS'), (e[(e.FRECENCY_AND_FAVORITES_SETTINGS = 2)] = 'FRECENCY_AND_FAVORITES_SETTINGS'), (e[(e.TEST_SETTINGS = 3)] = 'TEST_SETTINGS');
})(d || (d = {})),
    !(function (e) {
        (e[(e.INFREQUENT_USER_ACTION = 0)] = 'INFREQUENT_USER_ACTION'), (e[(e.FREQUENT_USER_ACTION = 10)] = 'FREQUENT_USER_ACTION'), (e[(e.SLOW_USER_ACTION = 20)] = 'SLOW_USER_ACTION'), (e[(e.AUTOMATED = 30)] = 'AUTOMATED'), (e[(e.DAILY = 86400)] = 'DAILY');
    })(f || (f = {})),
    !(function (e) {
        (e[(e.CONFIRM_START = 0)] = 'CONFIRM_START'), (e[(e.CONFIRM_CODE = 1)] = 'CONFIRM_CODE'), (e[(e.CHANGE_EMAIL_REASONS = 2)] = 'CHANGE_EMAIL_REASONS'), (e[(e.CHANGE_EMAIL_WARNING = 3)] = 'CHANGE_EMAIL_WARNING'), (e[(e.EMAIL_AND_PASSWORD = 4)] = 'EMAIL_AND_PASSWORD'), (e[(e.COMPLETE = 5)] = 'COMPLETE');
    })(_ || (_ = {}));
let b = {
        NEW_FORUM_THREADS_ON: 16384,
        NEW_FORUM_THREADS_OFF: 8192,
        OPT_IN_ENABLED: 4096,
        FAVORITED: 2048,
        UNREADS_ALL_MESSAGES: 1024,
        UNREADS_ONLY_MENTIONS: 512
    },
    y = {
        OPT_IN_CHANNELS_ON: 16384,
        OPT_IN_CHANNELS_OFF: 8192,
        UNREADS_ONLY_MENTIONS: 4096,
        UNREADS_ALL_MESSAGES: 2048
    };
!(function (e) {
    (e.USER = 'user'), (e.STREAM = 'stream');
})(h || (h = {}));
