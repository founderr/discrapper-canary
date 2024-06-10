"use strict";
n.r(t), n.d(t, {
  ReferencedMessageState: function() {
    return i
  }
}), n("47120"), n("653041");
var i, r, s, a = n("31775"),
  o = n.n(a),
  l = n("442837"),
  u = n("570140"),
  d = n("163268"),
  _ = n("786761"),
  c = n("592125"),
  E = n("375954"),
  I = n("981631");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}(s = i || (i = {}))[s.LOADED = 0] = "LOADED", s[s.NOT_LOADED = 1] = "NOT_LOADED", s[s.DELETED = 2] = "DELETED";
let f = Object.freeze({
    state: 1
  }),
  S = new Set;
class h {
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
    T(this, "_cachedMessages", new(o())({
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
    null == i && (i = new h, this._channelCaches.set(e, i)), i.set(t, n)
  }
  updateExistingMessageIfCached(e) {
    let t = this._channelCaches.get(e.channel_id);
    return !!(null != t && t.has(e.id)) && (t.set(e.id, {
      state: 0,
      message: (0, _.createMessageRecord)(e)
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

function m(e) {
  let t = !1;
  if (A.updateExistingMessageIfCached(e) && (t = !0), I.MessageTypesWithLazyLoadedReferences.has(e.type)) {
    let n = e.message_reference;
    if (null == n) return t;
    let i = n.message_id;
    if (null == i) return t;
    if ("referenced_message" in e) {
      let t = e.referenced_message;
      null != t ? (A.set(t.channel_id, t.id, {
        state: 0,
        message: (0, _.createMessageRecord)(t)
      }), e.type === I.MessageTypes.THREAD_STARTER_MESSAGE && m(t)) : A.set(e.channel_id, i, {
        state: 2
      })
    } else {
      let e = E.default.getMessage(n.channel_id, i);
      null != e ? A.set(n.channel_id, i, {
        state: 0,
        message: e
      }) : A.set(n.channel_id, i, f)
    }
    t = !0
  }
  return t
}

function N(e, t) {
  let n = !1;
  for (let i of e) n = !1 !== t(i) || n;
  return n
}

function p(e) {
  let {
    messages: t
  } = e;
  return N(t, e => m(e))
}

function O(e) {
  let {
    messages: t
  } = e;
  return N(t, e => N(e, e => m(e)))
}

function C(e) {
  return A.deleteChannelCache(e.channel.id)
}

function R(e, t) {
  if (!A.has(e, t)) return !1;
  A.set(e, t, {
    state: 2
  })
}

function g() {
  A.clear()
}

function L(e) {
  let {
    firstMessages: t
  } = e;
  return null != t && N(t, e => m(e))
}
class v extends(r = l.default.Store) {
  initialize() {
    this.waitFor(E.default, c.default)
  }
  getMessageByReference(e) {
    let t;
    return null != e && (t = A.get(e.channel_id, e.message_id)), null != t ? t : f
  }
  getMessage(e, t) {
    var n;
    return null !== (n = A.get(e, t)) && void 0 !== n ? n : f
  }
  getReplyIdsForChannel(e) {
    let t;
    return null != e && (t = A.getCachedMessageIdsForChannel(e)), null != t ? t : S
  }
}
T(v, "displayName", "ReferencedMessageStore"), t.default = new v(u.default, {
  CACHE_LOADED: function(e) {
    let {
      messages: t
    } = e;
    return N(Object.values(t), e => N(Object.values(e), e => m(e)))
  },
  LOCAL_MESSAGES_LOADED: p,
  LOAD_MESSAGES_SUCCESS: p,
  LOAD_MESSAGES_AROUND_SUCCESS: p,
  SEARCH_FINISH: O,
  MOD_VIEW_SEARCH_FINISH: O,
  LOAD_THREADS_SUCCESS: L,
  LOAD_ARCHIVED_THREADS_SUCCESS: L,
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
      message: (0, d.handleExplicitMediaScanTimeoutForMessage)(i.message)
    })
  },
  LOAD_FORUM_POSTS: function(e) {
    let {
      threads: t
    } = e;
    return N(Object.values(t), e => {
      let {
        first_message: t
      } = e;
      return null != t && m(t)
    })
  },
  MESSAGE_CREATE: function(e) {
    let {
      message: t
    } = e;
    return !!E.default.getMessages(t.channel_id).ready && m(t)
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
      message: (0, _.updateMessageRecord)(r.message, t)
    })
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t,
      channelId: n
    } = e;
    return R(n, t)
  },
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t,
      channelId: n
    } = e;
    return N(t, e => R(n, e))
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
  CHANNEL_DELETE: C,
  THREAD_DELETE: C,
  GUILD_DELETE: function() {
    if (0 === A.retainWhere(e => null != c.default.getChannel(e))) return !1
  },
  CONNECTION_OPEN: g,
  LOGOUT: g
})