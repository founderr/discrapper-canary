"use strict";
r.r(t), r.d(t, {
  UserProfileSections: function() {
    return i
  },
  UserProfileTypes: function() {
    return s
  },
  getBadgeAsset: function() {
    return u
  }
});
var n, l, i, s, a = r("49111");

function u(e) {
  let {
    API_ENDPOINT: t,
    CDN_HOST: r
  } = window.GLOBAL_ENV;
  return null != r ? "".concat(location.protocol, "//").concat(r, "/badge-icons/").concat(e, ".png") : "".concat(location.protocol).concat(t).concat(a.Endpoints.BADGE_ICON(e))
}(n = i || (i = {})).USER_INFO = "USER_INFO", n.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", n.ACTIVITY = "ACTIVITY", n.MUTUAL_GUILDS = "MUTUAL_GUILDS", n.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", n.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (l = s || (s = {})).POPOUT = "POPOUT", l.MODAL = "MODAL", l.SETTINGS = "SETTINGS", l.PANEL = "PANEL", l.CARD = "CARD", l.POMELO_POPOUT = "POMELO_POPOUT", l.CANCEL_MODAL = "CANCEL_MODAL"