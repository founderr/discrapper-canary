"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("446674"),
  r = n("913144"),
  s = n("982527");
n("21121");
var a = n("393414"),
  o = n("271938"),
  l = n("305961"),
  u = n("49111");
let c = null,
  d = null,
  p = {};

function h() {
  null != c && null == l.default.getGuild(c) && null == s.default.getRequest(c) && (c = null), null != d && null == l.default.getGuild(d) && null == s.default.getRequest(d) && (d = null), f(c)
}

function f(e) {
  null != e && (p[e] = Date.now())
}

function E(e) {
  let t = !1;
  return delete p[e], d === e && (d = null, t = !0), c === e && (Object.values(l.default.getGuilds()).find(t => t.id !== e), c = null, (0, a.replaceWith)(u.Routes.ME), t = !0), t
}
class _ extends i.default.PersistedStore {
  initialize(e) {
    var t, n, i;
    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type), this.waitFor(l.default, o.default), p = null !== (t = null == e ? void 0 : e.selectedGuildTimestampMillis) && void 0 !== t ? t : {}, c = null !== (n = null == e ? void 0 : e.selectedGuildId) && void 0 !== n ? n : null, d = null !== (i = null == e ? void 0 : e.lastSelectedGuildId) && void 0 !== i ? i : null
  }
  getState() {
    return {
      selectedGuildTimestampMillis: p,
      selectedGuildId: c,
      lastSelectedGuildId: d
    }
  }
  getGuildId() {
    return c
  }
  getLastSelectedGuildId() {
    return d
  }
  getLastSelectedTimestamp(e) {
    return c === e ? -1 : p[e]
  }
}
_.displayName = "SelectedGuildStore", _.persistKey = "SelectedGuildStore";
var m = new _(r.default, {
  CONNECTION_OPEN: h,
  OVERLAY_INITIALIZE: function(e) {
    c = e.selectedGuildId, d = void 0, h()
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t
    } = e;
    if (c === t) return !1;
    f(c), f(t), null != t && (d = t), c = t
  },
  GUILD_MEMBER_REMOVE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    return n.id === o.default.getId() && E(t)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t,
        unavailable: n
      }
    } = e;
    return !0 !== n && E(t)
  },
  LOGOUT: function() {
    c = null, d = null
  }
})