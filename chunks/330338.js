"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var i, o, l, a = n("446674"),
  u = n("913144"),
  d = n("42203"),
  s = n("476108"),
  r = n("305961"),
  E = n("18494"),
  _ = n("287850"),
  c = n("49111");
let A = (null !== (l = null === (o = window) || void 0 === o ? void 0 : null === (i = o.location) || void 0 === i ? void 0 : i.pathname) && void 0 !== l ? l : "").startsWith(c.Routes.ACTIVITIES) ? c.Routes.ACTIVITIES : null;

function C(e) {
  let {
    link: t
  } = e;
  if (A === t) return !1;
  A = t
}
class T extends a.default.Store {
  initialize() {
    this.waitFor(s.default, _.default, E.default, r.default, d.default)
  }
  getHomeLink() {
    return null != A ? A : s.default.fallbackRoute
  }
}
T.displayName = "AppViewStore";
var S = new T(u.default, {
  OVERLAY_INITIALIZE: function() {
    let e = _.default.getPrivateChannelIds(),
      t = E.default.getChannelId(c.ME);
    (null != t || null != e[0]) && (A = c.Routes.CHANNEL(c.ME, null != t ? t : e[0]))
  },
  APP_VIEW_SET_HOME_LINK: C,
  APPLICATION_STORE_LOCATION_CHANGE: function(e) {
    let {
      location: t
    } = e;
    C({
      link: t.pathname,
      type: "APP_VIEW_SET_HOME_LINK"
    })
  },
  APPLICATION_STORE_RESET_NAVIGATION: function() {
    if (null == A || !A.startsWith(c.Routes.APPLICATION_STORE)) return !1;
    A = c.Routes.APPLICATION_STORE
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t && null != n) {
      let e = c.Routes.CHANNEL(c.ME, n);
      if (e !== A) return A = e, !0
    }
    return !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    null == t.guild_id && null != t.id && null != A && A === c.Routes.CHANNEL(c.ME, t.id) && (A = null)
  }
})