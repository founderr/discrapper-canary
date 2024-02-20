"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var i = n("943224"),
  r = n.n(i),
  s = n("917351"),
  a = n.n(s),
  o = n("746379"),
  l = n("49111");
let u = /(?:^|\.)(?:discordapp|discord)\.com$/i,
  c = r.v4().source,
  d = "(?:".concat("(?:(?:[a-z]+:)?//)", "|www\\.)").concat("(?:\\S+(?::\\S*)?@)?", "(?:localhost|").concat(c, "|").concat("(?:[a-z\\u00a1-\\uffff0-9-_]+\\.)+").concat("(?:(?:[a-z\\u00a1-\\uffff]{2,}))", ")").concat("(?::\\d{2,5})?").concat('(?:[/?#][^\\s"]*)?'),
  p = RegExp(d, "ig"),
  h = new Set([window.GLOBAL_ENV.CDN_HOST, window.GLOBAL_ENV.INVITE_HOST, window.GLOBAL_ENV.GIFT_CODE_HOST, window.GLOBAL_ENV.GUILD_TEMPLATE_HOST]);

function f(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  if (null == e) return !1;
  return u.test(e) || n && (t = e, h.has(t.toLowerCase()))
}

function E(e) {
  return null != e && "discord:" === e
}

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return null != e && f(o.parse(e).hostname, t)
}

function m(e) {
  return null != e && E(o.parse(e).protocol)
}
var S = {
  URL_REGEX: p,
  isDiscordHostname: f,
  isDiscordLocalhost: function(e, t) {
    return null != e && null != t && (window.location.host === e || !1)
  },
  isDiscordProtocol: E,
  isDiscordUrl: _,
  isDiscordUri: m,
  isDiscordCdnUrl: function(e) {
    return null != e && o.parse(e).hostname === window.GLOBAL_ENV.CDN_HOST
  },
  isDiscordUrlOrUri: e => _(e) || m(e),
  isAppRoute: e => {
    let t = e.toLowerCase();
    return t.startsWith("/channels/") || t.startsWith(l.Routes.APPLICATION_STORE) || t.startsWith(l.Routes.APPLICATION_LIBRARY) || t.startsWith(l.Routes.MESSAGE_REQUESTS) || t.startsWith(l.Routes.ACTIVITIES) || t.startsWith(l.Routes.COLLECTIBLES_SHOP) || t.startsWith(l.Routes.ACTIVITY)
  },
  format: e => o.format(e),
  formatPathWithQuery: (e, t) => o.format({
    pathname: e,
    query: a.pickBy(t)
  }),
  formatSearch: e => o.format({
    query: a.pickBy(e)
  }),
  safeParseWithQuery(e) {
    try {
      return o.parse(e, !0)
    } catch (e) {
      return null
    }
  },
  makeUrl: function(e) {
    let t = __DEV__ ? window.GLOBAL_ENV.INVITE_HOST : location.host;
    return "".concat(location.protocol, "//").concat(t).concat(e)
  }
}