"use strict";
n.r(t), n.d(t, {
  usesClientMods: function() {
    return c
  },
  initSentry: function() {
    return p
  }
}), n("222007"), n("455209");
var a = n("245123"),
  r = n("88807"),
  s = n("432710"),
  i = n("605250"),
  l = n("155084"),
  o = n("316217");
let u = new i.default("Sentry"),
  d = ["oppobrowser", "realmebrowser", "heytapbrowser"];

function c() {
  let e = window;
  return null != e.jQuery || null != e.$ || null != e.BetterDiscord || null != e.BdApi || null != e.rambox
}
let f = (0, o.filterThrottle)({
  maxBudgetMinute: 1,
  maxBudgetHour: 3
});

function h(e, t) {
  var n, a, i, o;
  if (null != (n = e).exception && null != n.exception.values && n.exception.values.every(e => null == e.stacktrace || null != e.stacktrace.frames && 1 === e.stacktrace.frames.length) && "canary" !== window.GLOBAL_ENV.RELEASE_CHANNEL || d.some(e => window.navigator.appVersion.toLowerCase().indexOf(e) >= 0) || c() || "Aborted" === (a = e).message || "cancel captcha" === a.message || !f()) return null;
  return u.info("Crash", {
    event: e,
    hint: t
  }), o = 0, ("fatal" === (i = e).level || "error" === i.level) && l.default.increment({
    name: s.MetricEvents.APP_CRASHED,
    tags: ["reason:".concat(r.AppCrashedReasons.UNHANDLED_JS_ERROR), "level:".concat(i.level)]
  }, !0), e
}

function p() {
  var e;
  a.init({
    tunnel: "/error-reporting-proxy/web",
    dsn: "https://fa97a90475514c03a42f80cd36d147c4@sentry.io/140984",
    autoSessionTracking: !1,
    environment: window.GLOBAL_ENV.RELEASE_CHANNEL,
    release: "discord_web-22466b27756df28e5097c44b192df678d7b9d656",
    beforeSend: h,
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
  }), a.setTag("buildNumber", (e = "267500", "267500")), a.setTag("builtAt", String("1708456377536"));
  let t = window.GLOBAL_ENV.SENTRY_TAGS;
  if (null != t && "object" == typeof t)
    for (let e in t) a.setTag(e, t[e]);
  return a
}