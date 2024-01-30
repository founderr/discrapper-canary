"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("424973"), n("222007"), n("808653");
var i = n("446674"),
  l = n("913144"),
  u = n("320954"),
  s = n("379881"),
  o = n("271938"),
  d = n("42203"),
  a = n("923959"),
  _ = n("305961"),
  r = n("49111");
let c = null,
  f = {},
  g = null;

function h() {
  return {
    _categories: [],
    null: []
  }
}
let p = h();

function E(e, t) {
  e.index = t
}

function m(e) {
  let t = a.default.getChannels(e),
    n = h(),
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
  return t[r.ChannelTypes.GUILD_CATEGORY].forEach(e => {
    let {
      channel: t
    } = e;
    n._categories.push({
      channel: t,
      index: -1
    }), n[t.id] = []
  }), t[0, a.GUILD_SELECTABLE_CHANNELS_KEY].forEach(i), t[0, a.GUILD_VOCAL_CHANNELS_KEY].forEach(i), (0, u.default)(n._categories, n).forEach(E), f[e] = n, n
}

function N() {
  f = {}, null != c && m(c)
}

function v(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  f[t] = void 0, c === t && m(t)
}

function A(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  if (null == t) return !1;
  f[t] = void 0, c === t && m(t)
}

function C(e) {
  let {
    guildId: t
  } = e;
  f[t] = void 0, t === c && m(t)
}

function S(e, t) {
  if (g = t, null == e || null == e.getGuildId()) return !1;
  let n = e.getGuildId();
  return null != n && (f[n] = void 0, n === c && m(n), !0)
}

function T() {
  m(r.FAVORITES)
}
class O extends i.default.Store {
  initialize() {
    this.waitFor(a.default, _.default, o.default, d.default, s.default), this.syncWith([s.default], T)
  }
  getCategories(e) {
    return null != e ? function(e) {
      let t = f[e];
      return null != t ? t : m(e)
    }(e) : p
  }
}
O.displayName = "GuildCategoryStore";
var I = new O(l.default, {
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t
    } = e;
    if (c = null != t ? t : null, null == t || null != f[t]) return !1;
    m(t)
  },
  CONNECTION_OPEN: N,
  OVERLAY_INITIALIZE: N,
  CACHE_LOADED_LAZY: N,
  GUILD_CREATE: v,
  GUILD_UPDATE: v,
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    delete f[t]
  },
  CHANNEL_CREATE: A,
  CHANNEL_DELETE: A,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let {
        guild_id: e
      }
      of t) null != e && (f[e] = void 0, n = !0, c === e && m(e));
    return n
  },
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    if (o.default.getId() !== n.id) return !1;
    f[t] = void 0, t === c && m(t)
  },
  CURRENT_USER_UPDATE: function() {
    if (null == c) return !1;
    m(c)
  },
  GUILD_ROLE_CREATE: C,
  GUILD_ROLE_UPDATE: C,
  GUILD_ROLE_DELETE: C,
  IMPERSONATE_UPDATE: C,
  IMPERSONATE_STOP: C,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null == t && null != g ? S(d.default.getChannel(g), null) : S(d.default.getChannel(t), t)
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
      return o.default.getSessionId() !== i ? e : S(d.default.getChannel(n), n) || e
    }, !1)
  }
})