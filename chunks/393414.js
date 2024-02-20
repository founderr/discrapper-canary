"use strict";
let r, i, o;
n.r(t), n.d(t, {
  transitionTo: function() {
    return S
  },
  transitionToGuild: function() {
    return f
  },
  currentRouteHasBackNavigation: function() {
    return O
  },
  replaceWith: function() {
    return R
  },
  getHistory: function() {
    return N
  },
  getLastRouteChangeSource: function() {
    return L
  },
  getLastRouteChangeSourceLocationStack: function() {
    return p
  },
  isValidFingerprintRoute: function() {
    return C
  },
  getFingerprintLocation: function() {
    return m
  },
  hasNavigated: function() {
    return P
  },
  back: function() {
    return h
  },
  forward: function() {
    return D
  }
}), n("424973"), n("781738");
var l = n("294094"),
  u = n("605250"),
  a = n("659500"),
  s = n("877275"),
  E = n("49111");
let _ = new u.default("Routing/Utils"),
  c = [E.RelativeMarketingURLs.DEVELOPER_PORTAL];
r = __OVERLAY__ ? (0, l.createMemoryHistory)() : (0, l.createBrowserHistory)();
let d = !1,
  T = r.listen((e, t) => {
    "REPLACE" !== t && (d = !0, T())
  });

function A() {
  return !a.ComponentDispatch.hasSubscribers(E.ComponentActions.MODAL_CLOSE) && (n("144747").default.close(), !0)
}

function I(e, t) {
  return !!("string" == typeof e && c.some(t => e.startsWith(t))) && (_.log("".concat(t, " - route to external path ").concat(e)), window.dispatchEvent(new Event("beforeunload")), window.location[t](e), !0)
}

function S(e, t, n, l) {
  !I(e, "assign") && (_.log("transitionTo - Transitioning to ".concat(e)), null != n && (null == t ? t = {
    source: n
  } : t.source = n), null == t ? r.push(e) : r.push({
    pathname: e,
    ...t
  }), i = n, o = l)
}

function f(e, t, n, r, i) {
  _.log("transitionToGuild - Transitioning to ".concat(JSON.stringify({
    guildId: e,
    channelId: t,
    messageId: n
  }))), S(E.Routes.CHANNEL(e, t, n), null != i ? i : null, r)
}

function O() {
  return null != i && s.ChannelBackNavigationSources.has(i)
}

function R(e, t, n) {
  !I(e, "replace") && (_.log("Replacing route with ".concat(e)), "string" == typeof e ? r.replace(e, t) : r.replace(e), i = n)
}

function N() {
  return r
}

function L() {
  return i
}

function p() {
  return o
}

function C(e) {
  if (null == e) {
    var t;
    e = null !== (t = r.location.pathname) && void 0 !== t ? t : ""
  }
  return !e.startsWith(E.Routes.HANDOFF) && !0
}

function m(e) {
  if (null == e) {
    var t;
    e = null !== (t = r.location.pathname) && void 0 !== t ? t : ""
  }
  if (e.startsWith(E.Routes.LOGIN)) return E.PageAnalyticsLocations.LOGIN;
  if (e.startsWith(E.Routes.REGISTER)) return E.PageAnalyticsLocations.REGISTER;
  if (e.startsWith(E.Routes.INVITE(""))) return E.PageAnalyticsLocations.INVITE;
  else if (e.startsWith(E.Routes.VERIFY)) return E.PageAnalyticsLocations.VERIFY;
  else if (e.startsWith(E.Routes.DISABLE_EMAIL_NOTIFICATIONS)) return E.PageAnalyticsLocations.DISABLE_EMAIL_NOTIFICATIONS;
  else if (e.startsWith(E.Routes.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS)) return E.PageAnalyticsLocations.DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS;
  else if (e.startsWith(E.Routes.REJECT_IP)) return E.PageAnalyticsLocations.REJECT_IP;
  else if (e.startsWith(E.Routes.REJECT_MFA)) return E.PageAnalyticsLocations.REJECT_MFA;
  else if (e.startsWith(E.Routes.AUTHORIZE_IP)) return E.PageAnalyticsLocations.AUTHORIZE_IP;
  else if (e.startsWith(E.Routes.AUTHORIZE_PAYMENT)) return E.PageAnalyticsLocations.AUTHORIZE_PAYMENT;
  else if (e.startsWith(E.Routes.RESET)) return E.PageAnalyticsLocations.RESET;
  else if (e.startsWith(E.Routes.REPORT)) return E.PageAnalyticsLocations.REPORT;
  else if (e.startsWith(E.Routes.REPORT_SECOND_LOOK)) return E.PageAnalyticsLocations.REPORT_SECOND_LOOK;
  return e
}

function P() {
  return d
}

function h() {
  A() && (i = null, r.goBack())
}

function D() {
  A() && (i = null, r.goForward())
}