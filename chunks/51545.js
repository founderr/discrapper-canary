"use strict";
n.r(t), n.d(t, {
  usesClientMods: function() {
    return c
  },
  initSentry: function() {
    return S
  }
}), n("222007");
var a = n("245123"),
  r = n("88807"),
  s = n("432710"),
  i = n("605250"),
  l = n("155084"),
  u = n("316217");
let o = new i.default("Sentry"),
  d = ["oppobrowser", "realmebrowser", "heytapbrowser"];

function c() {
  let e = window;
  return null != e.jQuery || null != e.$ || null != e.BetterDiscord || null != e.BdApi || null != e.rambox
}
let f = (0, u.filterThrottle)({
  maxBudgetMinute: 1,
  maxBudgetHour: 3
});

function E(e, t) {
  var n, a, i, u;
  if (null != (n = e).exception && null != n.exception.values && n.exception.values.every(e => null == e.stacktrace || null != e.stacktrace.frames && 1 === e.stacktrace.frames.length) && "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL || d.some(e => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0) || c() || "Aborted" === (a = e).message || "cancel captcha" === a.message || !f()) return null;
  return o.info("Crash", {
    event: e,
    hint: t
  }), u = 0, ("fatal" === (i = e).level || "error" === i.level) && l.default.increment({
    name: s.MetricEvents.APP_CRASHED,
    tags: ["reason:".concat(r.AppCrashedReasons.UNHANDLED_JS_ERROR), "level:".concat(i.level)]
  }, !0), e
}

function S() {
  var e;
  a.init({
    tunnel: "/error-reporting-proxy/web",
    dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
    autoSessionTracking: !1,
    environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
    release: "discord_web-30572bd83acbe2b7f73a52772599e1c78273de33",
    beforeSend: E,
    integrations: [new a.Integrations.GlobalHandlers({
      onerror: !0,
      onunhandledrejection: !0
    }), new a.Integrations.Breadcrumbs({
      console: !0,
      dom: !0,
      fetch: !0,
      history: !0,
      sentry: !0,
      xhr: !0
    })],
    ignoreErrors: ["EADDRINUSE", "BetterDiscord", "EnhancedDiscord", "Powercord", "RecipeWebview", "jQuery", "localStorage", "has already been declared", "Cannot call hover while not dragging.", "Cannot call beginDrag while dragging.", "getHostNode", "setupCSS", "on missing remote object", "ChunkLoadError", "Cannot find module 'discord_utils'", "Failed to setup Krisp module", "Error invoking remote method 'DISCORD_NATIVE_MODULES_INSTALL': Error: Module updater is not available!", "Non-Error promise rejection captured with keys:", "Request has been terminated", "Cannot resolve a Slate point from DOM point", "Failed to fetch", "no suitable image found", "ResizeObserver loop limit exceeded", "ResizeObserver loop completed with undelivered notifications.", "The play() request was interrupted", "could not play audio", "notosans-400-normalitalic"],
    denyUrls: [/recaptcha/, /mobilediscord\.com/, /betterdiscord:\/\//]
  }), a.setTag("buildNumber", (e = "266806", "266806")), a.setTag("builtAt", String("1708030631773"));
  let t = window.GLOBAL_ENV.SENTRY_TAGS;
  if (null != t && "object" == typeof t)
    for (let e in t) a.setTag(e, t[e]);
  return a
}