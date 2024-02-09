"use strict";
n.r(t), n.d(t, {
  UserProfileSections: function() {
    return i
  },
  UserProfileTypes: function() {
    return l
  },
  getBadgeAsset: function() {
    return o
  }
});
var r, s, i, l, a = n("49111");

function o(e) {
  let {
    API_ENDPOINT: t,
    CDN_HOST: n
  } = window.GLOBAL_ENV;
  return null != n ? "".concat(location.protocol, "//").concat(n, "/badge-icons/").concat(e, ".png") : "".concat(location.protocol).concat(t).concat(a.Endpoints.BADGE_ICON(e))
}(r = i || (i = {})).USER_INFO = "USER_INFO", r.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", r.ACTIVITY = "ACTIVITY", r.MUTUAL_GUILDS = "MUTUAL_GUILDS", r.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", r.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (s = l || (l = {})).POPOUT = "POPOUT", s.MODAL = "MODAL", s.SETTINGS = "SETTINGS", s.PANEL = "PANEL", s.CARD = "CARD", s.POMELO_POPOUT = "POMELO_POPOUT", s.CANCEL_MODAL = "CANCEL_MODAL"