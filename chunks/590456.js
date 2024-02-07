"use strict";
n.r(t), n.d(t, {
  UserProfileSections: function() {
    return r
  },
  UserProfileTypes: function() {
    return s
  },
  getBadgeAsset: function() {
    return o
  }
});
var i, l, r, s, a = n("49111");

function o(e) {
  let {
    API_ENDPOINT: t,
    CDN_HOST: n
  } = window.GLOBAL_ENV;
  return null != n ? "".concat(location.protocol, "//").concat(n, "/badge-icons/").concat(e, ".png") : "".concat(location.protocol).concat(t).concat(a.Endpoints.BADGE_ICON(e))
}(i = r || (r = {})).USER_INFO = "USER_INFO", i.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", i.ACTIVITY = "ACTIVITY", i.MUTUAL_GUILDS = "MUTUAL_GUILDS", i.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", i.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (l = s || (s = {})).POPOUT = "POPOUT", l.MODAL = "MODAL", l.SETTINGS = "SETTINGS", l.PANEL = "PANEL", l.CARD = "CARD", l.POMELO_POPOUT = "POMELO_POPOUT", l.CANCEL_MODAL = "CANCEL_MODAL"