n.d(t, {
    $x: function () {
        return d;
    },
    AB: function () {
        return s;
    },
    EC: function () {
        return E;
    },
    HY: function () {
        return i;
    },
    ME: function () {
        return u;
    },
    Qk: function () {
        return l;
    },
    V: function () {
        return f;
    },
    Vg: function () {
        return o;
    },
    Z7: function () {
        return _;
    },
    oC: function () {
        return r;
    },
    zZ: function () {
        return c;
    }
});
var r,
    i,
    a = n(47120);
!(function (e) {
    (e.ROLE_SUBSCRIPTIONS = 'role-subscriptions'), (e.GUILD_SHOP = 'shop'), (e.MEMBER_APPLICATIONS = 'member-applications'), (e.GUILD_HOME = '@home'), (e.CHANNEL_BROWSER = 'channel-browser'), (e.GUILD_ONBOARDING = 'onboarding'), (e.CUSTOMIZE_COMMUNITY = 'customize-community'), (e.MEMBER_SAFETY = 'member-safety');
})(r || (r = {}));
let o = new Set(Object.values(r));
function s(e) {
    return o.has(e);
}
function l(e, t) {
    return ''.concat(e, '-').concat(t);
}
function u(e) {
    return !!(null == e ? void 0 : e.includes('@home'));
}
let c = Object.freeze({
        GUILD_FEED_REMOVED: 1,
        PINNED: 2,
        ACTIVE_CHANNELS_REMOVED: 4,
        REQUIRE_TAG: 16,
        IS_SPAM: 32,
        IS_GUILD_RESOURCE_CHANNEL: 128,
        CLYDE_AI: 256,
        IS_SCHEDULED_FOR_DELETION: 512,
        IS_MEDIA_CHANNEL: 1024,
        SUMMARIES_DISABLED: 2048,
        IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL: 8192,
        IS_BROADCASTING: 16384,
        HIDE_MEDIA_DOWNLOAD_OPTIONS: 32768,
        IS_JOIN_REQUEST_INTERVIEW_CHANNEL: 65536
    }),
    d = 1024,
    _ = 4096;
!(function (e) {
    (e.GUILD_HOME = 'home'), (e.SERVER_GUIDE = 'guide'), (e.CHANNEL_BROWSER = 'browse'), (e.CUSTOMIZE_COMMUNITY = 'customize'), (e.LINKED_ROLES = 'linked-roles');
})(i || (i = {}));
let E = new Set(Object.values(i)),
    f = '131';
