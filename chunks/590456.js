"use strict";
n.r(t), n.d(t, {
  UserProfileSections: function() {
    return i
  },
  UserProfileTypes: function() {
    return r
  },
  getBadgeAsset: function() {
    return a
  }
});
var s, l, i, r, o = n("49111");

function a(e) {
  let {
    API_ENDPOINT: t,
    CDN_HOST: n
  } = window.GLOBAL_ENV;
  return null != n ? "".concat(location.protocol, "//").concat(n, "/badge-icons/").concat(e, ".png") : "".concat(location.protocol).concat(t).concat(o.Endpoints.BADGE_ICON(e))
}(s = i || (i = {})).USER_INFO = "USER_INFO", s.USER_INFO_CONNECTIONS = "USER_INFO_CONNECTIONS", s.ACTIVITY = "ACTIVITY", s.MUTUAL_GUILDS = "MUTUAL_GUILDS", s.MUTUAL_FRIENDS = "MUTUAL_FRIENDS", s.BOT_DATA_ACCESS = "BOT_DATA_ACCESS", (l = r || (r = {})).POPOUT = "POPOUT", l.MODAL = "MODAL", l.SETTINGS = "SETTINGS", l.PANEL = "PANEL", l.CARD = "CARD", l.POMELO_POPOUT = "POMELO_POPOUT", l.CANCEL_MODAL = "CANCEL_MODAL"