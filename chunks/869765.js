"use strict";
n.d(t, {
  Y: function() {
    return i
  }
}), n(47120), n(653041);
var i, r, s, o = n(31775),
  a = n.n(o),
  l = n(442837),
  u = n(570140),
  _ = n(163268),
  c = n(786761),
  d = n(592125),
  E = n(375954),
  I = n(981631);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {}))[s.LOADED = 0] = "LOADED", s[s.NOT_LOADED = 1] = "NOT_LOADED", s[s.DELETED = 2] = "DELETED";
let h = Object.freeze({
    state: 1
  }),
  f = new Set;
class S {
  handleCacheDisposed(e, t) {
    this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.delete(e))
  }
  set(e, t) {
    this._cachedMessages.set(e, t), !this._cachedMessageIds.has(e) && (this._cachedMessageIds = new Set(this._cachedMessageIds), this._cachedMessageIds.add(e))
  }
  has(e) {
    return this._cachedMessageIds.has(e)
  }
  get(e) {
    return this._cachedMessages.get(e)
  }
  getCachedMessageIds() {
    return this._cachedMessageIds
  }
  constructor() {
    T(this, "_cachedMessages", new(a())({
      max: 100,
      dispose: (e, t) => this.handleCacheDisposed(e, t)
    })), T(this, "_cachedMessageIds", new Set)
  }
}
let A = new class e {
  has(e, t) {
    var n, i;
    return null !== (i = null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.has(t)) && void 0 !== i && i
  }
  get(e, t) {
    var n;
    return null === (n = this._channelCaches.get(e)) || void 0 === n ? void 0 : n.get(t)
  }
  set(e, t, n) {
    let i = this._channelCaches.get(e);
    null == i && (i = new S, this._channelCaches.set(e, i)), i.set(t, n)
  }
  updateExistingMessageIfCached(e) {
    let t = this._channelCaches.get(e.channel_id);
    return !!(null != t && t.has(e.id)) && (t.set(e.id, {
      state: 0,
      message: (0, c.e5)(e)
    }), !0)
  }
  deleteChannelCache(e) {
    return this._channelCaches.delete(e)
  }
  retainWhere(e) {
    let t = [];
    for (let [n] of this._channelCaches) !e(n) && t.push(n);
    for (let e of t) this.deleteChannelCache(e);
    return t.length
  }
  getCachedMessageIdsForChannel(e) {
    let t = this._channelCaches.get(e);
    return null == t ? null : t.getCachedMessageIds()
  }
  clear() {
    this._channelCaches.clear()
  }
  constructor() {
    T(this, "_channelCaches", new Map)
  }
};

function N(e) {
  let t = !1;
  if (A.updateExistingMessageIfCached(e) && (t = !0), I.OBS.has(e.type)) {
    let n = e.message_reference;
    if (null == n) return t;
    let i = n.message_id;
    if (null == i) return t;
    if ("referenced_message" in e) {
      let t = e.referenced_message;
      null != t ? (A.set(t.channel_id, t.id, {
        state: 0,
        message: (0, c.e5)(t)
      }), e.type === I.uaV.THREAD_STARTER_MESSAGE && N(t)) : A.set(e.channel_id, i, {
        state: 2
      })
    } else {
      let e = E.Z.getMessage(n.channel_id, i);
      null != e ? A.set(n.channel_id, i, {
        state: 0,
        message: e
      }) : A.set(n.channel_id, i, h)
    }
    t = !0
  }
  return t
}

function m(e, t) {
  let n = !1;
  for (let i of e) n = !1 !== t(i) || n;
  return n
}

function O(e) {
  let {
    messages: t
  } = e;
  return m(t, e => N(e))
}

function p(e) {
  let {
    messages: t
  } = e;
  return m(t, e => m(e, e => N(e)))
}

function R(e) {
  return A.deleteChannelCache(e.channel.id)
}

function g(e, t) {
  if (!A.has(e, t)) return !1;
  A.set(e, t, {
    state: 2
  })
}

function C() {
  A.clear()
}

function v(e) {
  let {
    firstMessages: t
  } = e;
  return null != t && m(t, e => N(e))
}
class L extends(r = l.ZP.Store) {
  initialize() {
    this.waitFor(E.Z, d.Z)
  }
  getMessageByReference(e) {
    let t;
    return null != e && (t = A.get(e.channel_id, e.message_id)), null != t ? t : h
  }
  getMessage(e, t) {
    var n;
    return null !== (n = A.get(e, t)) && void 0 !== n ? n : h
  }
  getReplyIdsForChannel(e) {
    let t;
    return null != e && (t = A.getCachedMessageIdsForChannel(e)), null != t ? t : f
  }
}
T(L, "displayName", "ReferencedMessageStore"), t.Z = new L(u.Z, {
  CACHE_LOADED: function(e) {
    let {
      messages: t
    } = e;
    return m(Object.values(t), e => m(Object.values(e), e => N(e)))
  },
  LOCAL_MESSAGES_LOADED: O,
  LOAD_MESSAGES_SUCCESS: O,
  LOAD_MESSAGES_AROUND_SUCCESS: O,
  SEARCH_FINISH: p,
  MOD_VIEW_SEARCH_FINISH: p,
  LOAD_THREADS_SUCCESS: v,
  LOAD_ARCHIVED_THREADS_SUCCESS: v,
  MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT: function(e) {
    let {
      messageId: t,
      channelId: n
    } = e;
    if (!A.has(n, t)) return !1;
    let i = A.get(n, t);
    if (null == i || 0 !== i.state) return !1;
    A.set(n, t, {
      state: 0,
      message: (0, _.Cm)(i.message)
    })
  },
  LOAD_FORUM_POSTS: function(e) {
    let {
      threads: t
    } = e;
    return m(Object.values(t), e => {
      let {
        first_message: t
      } = e;
      return null != t && N(t)
    })
  },
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e;
    return !!E.Z.getMessages(t.channel_id).ready && N(t)
  },
  MESSAGE_UPDATE: function(e) {
    let {
      message: t
    } = e, n = t.id, i = t.channel_id;
    if (!A.has(i, n)) return !1;
    let r = A.get(i, n);
    if (null == r || 0 !== r.state) return !1;
    A.set(i, n, {
      state: 0,
      message: (0, c.wi)(r.message, t)
    })
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t,
      channelId: n
    } = e;
    return g(n, t)
  },
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t,
      channelId: n
    } = e;
    return m(t, e => g(n, e))
  },
  CREATE_PENDING_REPLY: function(e) {
    let {
      message: t
    } = e;
    A.set(t.channel_id, t.id, {
      state: 0,
      message: t
    })
  },
  CHANNEL_DELETE: R,
  THREAD_DELETE: R,
  GUILD_DELETE: function() {
    if (0 === A.retainWhere(e => null != d.Z.getChannel(e))) return !1
  },
  CONNECTION_OPEN: C,
  LOGOUT: C
})