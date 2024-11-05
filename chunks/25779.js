r.d(t, {
    e: function () {
        return s;
    },
    j: function () {
        return u;
    }
}),
    r(47120);
var n = r(509068),
    a = r(804410),
    _ = r(408720),
    o = r(233517),
    i = r(931327),
    E = r(97145);
let c = ['oppobrowser', 'realmebrowser', 'heytapbrowser'];
function s() {
    let e = window;
    return null != e.jQuery || null != e.$ || null != e.BetterDiscord || null != e.BdApi || null != e.rambox;
}
let l = (0, E.f)({
    maxBudgetMinute: 1,
    maxBudgetHour: 3
});
function u() {
    var e;
    n.S1({
        tunnel: '/error-reporting-proxy/web',
        dsn: 'https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984',
        autoSessionTracking: !1,
        environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
        release: 'discord_web-606fb93cae5a78885239fced52911c7e70a65bc4',
        beforeSend: function (e, t) {
            var r, n;
            return !((null != (r = e).exception && null != r.exception.values && r.exception.values.every((e) => null == e.stacktrace || (null != e.stacktrace.frames && 1 === e.stacktrace.frames.length)) && 'canary' !== window.GLOBAL_ENV.RELEASE_CHANNEL) || c.some((e) => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0)) && !s() && !('Aborted' === (n = e).message || 'cancel captcha' === n.message) && l() ? e : null;
        },
        integrations: [
            a.k({
                onerror: !0,
                onunhandledrejection: !0
            }),
            _.f({
                console: !0,
                dom: !0,
                fetch: !0,
                history: !0,
                sentry: !0,
                xhr: !0
            })
        ],
        ignoreErrors: ['EADDRINUSE', 'BetterDiscord', 'EnhancedDiscord', 'Powercord', 'RecipeWebview', 'jQuery', 'localStorage', 'has already been declared', 'Cannot call hover while not dragging.', 'Cannot call beginDrag while dragging.', 'getHostNode', 'setupCSS', 'on missing remote object', 'ChunkLoadError', "Cannot find module 'discord_utils'", 'Failed to setup Krisp module', "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL': Error: Module updater is not available!", 'Non-Error promise rejection captured with keys:', 'Request has been terminated', 'Cannot resolve a Slate point from DOM point', 'Failed to fetch', 'no suitable image found', 'ResizeObserver loop limit exceeded', 'ResizeObserver loop completed with undelivered notifications.', 'The play() request was interrupted', 'could not play audio', 'notosans-400-normalitalic'],
        denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//]
    }),
        o.YA('buildNumber', ((e = '341691'), '341691'));
    o.YA('builtAt', String('1730799874612'));
    let t = window.GLOBAL_ENV.SENTRY_TAGS;
    if (null != t && 'object' == typeof t) for (let e in t) o.YA(e, t[e]);
    return i;
}
