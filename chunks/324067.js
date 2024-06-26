"use strict";
n(653041), n(47120), n(724458);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(740504),
  _ = n(853856),
  c = n(314897),
  d = n(592125),
  E = n(984933),
  I = n(430824),
  T = n(981631);
let h = null,
  f = {},
  S = null;

function N() {
  return {
    _categories: [],
    null: []
  }
}
let A = N();

function m(e, t) {
  e.index = t
}

function O(e) {
  let t = E.ZP.getChannels(e),
    n = N(),
    i = e => {
      var t;
      let {
        channel: i
      } = e;
      (null !== (t = n[null != i.parent_id ? i.parent_id : "null"]) && void 0 !== t ? t : n.null).push({
        channel: i,
        index: -1
      })
    };
  return t[T.d4z.GUILD_CATEGORY].forEach(e => {
    let {
      channel: t
    } = e;
    n._categories.push({
      channel: t,
      index: -1
    }), n[t.id] = []
  }), t[E.sH].forEach(i), t[E.Zb].forEach(i), (0, u.Z)(n._categories, n).forEach(m), f[e] = n, n
}

function p() {
  f = {}, null != h && O(h)
}

function R(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  f[t] = void 0, h === t && O(t)
}

function g(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  if (null == t) return !1;
  f[t] = void 0, h === t && O(t)
}

function C(e) {
  let {
    guildId: t
  } = e;
  f[t] = void 0, t === h && O(t)
}

function v(e, t) {
  if (S = t, null == e || null == e.getGuildId()) return !1;
  let n = e.getGuildId();
  return null != n && (f[n] = void 0, n === h && O(n), !0)
}

function L() {
  O(T.I_8)
}
class D extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(E.ZP, I.Z, c.default, d.Z, _.Z), this.syncWith([_.Z], L)
  }
  getCategories(e) {
    return null != e ? function(e) {
      let t = f[e];
      return null != t ? t : O(e)
    }(e) : A
  }
}
o = "GuildCategoryStore", (s = "displayName") in(r = D) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new D(l.Z, {
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t
    } = e;
    if (h = null != t ? t : null, null == t || null != f[t]) return !1;
    O(t)
  },
  CONNECTION_OPEN: p,
  OVERLAY_INITIALIZE: p,
  CACHE_LOADED_LAZY: p,
  GUILD_CREATE: R,
  GUILD_UPDATE: R,
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    delete f[t]
  },
  CHANNEL_CREATE: g,
  CHANNEL_DELETE: g,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let {
        guild_id: e
      }
      of t) null != e && (f[e] = void 0, n = !0, h === e && O(e));
    return n
  },
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    if (c.default.getId() !== n.id) return !1;
    f[t] = void 0, t === h && O(t)
  },
  CURRENT_USER_UPDATE: function() {
    if (null == h) return !1;
    O(h)
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
    return null == t && null != S ? v(d.Z.getChannel(S), null) : v(d.Z.getChannel(t), t)
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
      return c.default.getSessionId() !== i ? e : v(d.Z.getChannel(n), n) || e
    }, !1)
  }
})