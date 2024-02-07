"use strict";
n.r(t), n.d(t, {
  default: function() {
    return b
  }
}), n("424973"), n("222007"), n("808653");
var i = n("446674"),
  l = n("913144"),
  u = n("320954"),
  o = n("379881"),
  s = n("271938"),
  r = n("42203"),
  a = n("923959"),
  d = n("305961"),
  c = n("49111");
let _ = null,
  f = {},
  h = null;

function g() {
  return {
    _categories: [],
    null: []
  }
}
let p = g();

function m(e, t) {
  e.index = t
}

function E(e) {
  let t = a.default.getChannels(e),
    n = g(),
    i = e => {
      var t;
      let {
        channel: i
      } = e, l = null !== (t = n[null != i.parent_id ? i.parent_id : "null"]) && void 0 !== t ? t : n.null;
      l.push({
        channel: i,
        index: -1
      })
    };
  return t[c.ChannelTypes.GUILD_CATEGORY].forEach(e => {
    let {
      channel: t
    } = e;
    n._categories.push({
      channel: t,
      index: -1
    }), n[t.id] = []
  }), t[0, a.GUILD_SELECTABLE_CHANNELS_KEY].forEach(i), t[0, a.GUILD_VOCAL_CHANNELS_KEY].forEach(i), (0, u.default)(n._categories, n).forEach(m), f[e] = n, n
}

function v() {
  f = {}, null != _ && E(_)
}

function A(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  f[t] = void 0, _ === t && E(t)
}

function N(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  if (null == t) return !1;
  f[t] = void 0, _ === t && E(t)
}

function S(e) {
  let {
    guildId: t
  } = e;
  f[t] = void 0, t === _ && E(t)
}

function T(e, t) {
  if (h = t, null == e || null == e.getGuildId()) return !1;
  let n = e.getGuildId();
  return null != n && (f[n] = void 0, n === _ && E(n), !0)
}

function I() {
  E(c.FAVORITES)
}
class C extends i.default.Store {
  initialize() {
    this.waitFor(a.default, d.default, s.default, r.default, o.default), this.syncWith([o.default], I)
  }
  getCategories(e) {
    return null != e ? function(e) {
      let t = f[e];
      return null != t ? t : E(e)
    }(e) : p
  }
}
C.displayName = "GuildCategoryStore";
var b = new C(l.default, {
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t
    } = e;
    if (_ = null != t ? t : null, null == t || null != f[t]) return !1;
    E(t)
  },
  CONNECTION_OPEN: v,
  OVERLAY_INITIALIZE: v,
  CACHE_LOADED_LAZY: v,
  GUILD_CREATE: A,
  GUILD_UPDATE: A,
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    delete f[t]
  },
  CHANNEL_CREATE: N,
  CHANNEL_DELETE: N,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let {
        guild_id: e
      }
      of t) null != e && (f[e] = void 0, n = !0, _ === e && E(e));
    return n
  },
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    if (s.default.getId() !== n.id) return !1;
    f[t] = void 0, t === _ && E(t)
  },
  CURRENT_USER_UPDATE: function() {
    if (null == _) return !1;
    E(_)
  },
  GUILD_ROLE_CREATE: S,
  GUILD_ROLE_UPDATE: S,
  GUILD_ROLE_DELETE: S,
  IMPERSONATE_UPDATE: S,
  IMPERSONATE_STOP: S,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null == t && null != h ? T(r.default.getChannel(h), null) : T(r.default.getChannel(t), t)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      let {
        channelId: n,
        sessionId: i
      } = t;
      return s.default.getSessionId() !== i ? e : T(r.default.getChannel(n), n) || e
    }, !1)
  }
})