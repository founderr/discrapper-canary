"use strict";
n.r(t);
var i, l, o, a, u, s, d, r = n("442837"),
  E = n("570140"),
  c = n("592125"),
  _ = n("896797"),
  A = n("430824"),
  C = n("944486"),
  T = n("55589"),
  S = n("981631");
let f = (null !== (s = null === (u = window) || void 0 === u ? void 0 : null === (a = u.location) || void 0 === a ? void 0 : a.pathname) && void 0 !== s ? s : "").startsWith(S.Routes.ACTIVITIES) ? S.Routes.ACTIVITIES : null;

function I(e) {
  let {
    link: t
  } = e;
  if (f === t) return !1;
  f = t
}
class O extends(d = r.default.Store) {
  initialize() {
    this.waitFor(_.default, T.default, C.default, A.default, c.default)
  }
  getHomeLink() {
    return null != f ? f : _.default.fallbackRoute
  }
}
o = "AppViewStore", (l = "displayName") in(i = O) ? Object.defineProperty(i, l, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = o, t.default = new O(E.default, {
  OVERLAY_INITIALIZE: function() {
    let e = T.default.getPrivateChannelIds(),
      t = C.default.getChannelId(S.ME);
    (null != t || null != e[0]) && (f = S.Routes.CHANNEL(S.ME, null != t ? t : e[0]))
  },
  APP_VIEW_SET_HOME_LINK: I,
  APPLICATION_STORE_LOCATION_CHANGE: function(e) {
    let {
      location: t
    } = e;
    I({
      link: t.pathname,
      type: "APP_VIEW_SET_HOME_LINK"
    })
  },
  APPLICATION_STORE_RESET_NAVIGATION: function() {
    if (null == f || !f.startsWith(S.Routes.APPLICATION_STORE)) return !1;
    f = S.Routes.APPLICATION_STORE
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t && null != n) {
      let e = S.Routes.CHANNEL(S.ME, n);
      if (e !== f) return f = e, !0
    }
    return !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    null == t.guild_id && null != t.id && null != f && f === S.Routes.CHANNEL(S.ME, t.id) && (f = null)
  }
})