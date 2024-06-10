"use strict";
n.r(t), n("47120");
var i, r, s, a, o = n("392711"),
  l = n.n(o),
  u = n("442837"),
  d = n("570140"),
  _ = n("786761"),
  c = n("131704"),
  E = n("23750"),
  I = n("598077"),
  T = n("592125"),
  f = n("375954"),
  S = n("709054"),
  h = n("124368"),
  A = n("981631");
let m = new Set,
  N = {},
  p = {};

function O(e, t) {
  c.ALL_CHANNEL_TYPES.has(e.type) && C(function(e) {
    if (!(e.id in N)) {
      var t;
      N[e.id] = {
        guildId: e.guild_id,
        parentId: e.parent_id,
        count: null !== (t = e.messageCount) && void 0 !== t ? t : 0,
        mostRecentRawMessage: null,
        mostRecentMessage: null
      }
    }
    return N[e.id]
  }(e), t)
}

function C(e, t) {
  var n;
  let i = (null !== (n = p[e.parentId]) && void 0 !== n ? n : 0) + 1;
  p[e.parentId] = i, t(e)
}

function R(e) {
  var t;
  null === (t = e.threads) || void 0 === t || t.forEach(g)
}

function g(e) {
  O(e, t => {
    var n;
    null != e.messageCount && (t.count = e.messageCount);
    let i = null !== (n = t.mostRecentRawMessage) && void 0 !== n ? n : t.mostRecentMessage;
    null != e.lastMessageId && (null == i ? void 0 : i.id) !== e.lastMessageId && (t.mostRecentRawMessage = null, t.mostRecentMessage = null)
  })
}

function L(e) {
  if (null != e && !(e.id in N)) {
    let t = T.default.getChannel(e.id);
    if (null != t) return g(t), !0
  }
  return !1
}

function v(e) {
  let {
    channel: t
  } = e;
  g(t)
}

function D(e) {
  let {
    threads: t
  } = e;
  t.forEach(L)
}

function M(e) {
  let {
    messages: t,
    threads: n
  } = e;
  for (let e of t)
    for (let t of e) L(t.thread);
  n.forEach(L)
}
class y extends(i = u.default.Store) {
  initialize() {
    this.waitFor(T.default, f.default)
  }
  getCount(e) {
    var t, n;
    return null !== (n = null === (t = N[e]) || void 0 === t ? void 0 : t.count) && void 0 !== n ? n : null
  }
  getMostRecentMessage(e) {
    var t, n;
    let i = N[e];
    return null == i ? null : (null == i.mostRecentMessage && null != i.mostRecentRawMessage && (i.mostRecentMessage = null !== (t = f.default.getMessage(e, i.mostRecentRawMessage.id)) && void 0 !== t ? t : (0, _.createMessageRecord)(i.mostRecentRawMessage), i.mostRecentRawMessage = null), null !== (n = i.mostRecentMessage) && void 0 !== n ? n : null)
  }
  getChannelThreadsVersion(e) {
    return p[e]
  }
  getInitialOverlayState() {
    return N
  }
}
a = "ThreadMessageStore", (s = "displayName") in(r = y) ? Object.defineProperty(r, s, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = a, t.default = new y(d.default, {
  CONNECTION_OPEN: function(e) {
    p = {}, m.clear(), e.guilds.forEach(R)
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      threadMessages: t
    } = e;
    for (let e in N = {
        ...t
      }) {
      let n = t[e].mostRecentMessage;
      null != n && (t[e].mostRecentMessage = new E.default({
        ...n,
        author: new I.default(n.author)
      }))
    }
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    R(t)
  },
  GUILD_DELETE: function(e) {
    var t;
    let {
      guild: n
    } = e;
    t = n.id, N = l().omitBy(N, e => {
      let n = e.guildId === t;
      return n && delete p[e.parentId], n
    })
  },
  THREAD_CREATE: v,
  THREAD_UPDATE: v,
  THREAD_LIST_SYNC: function(e) {
    let {
      threads: t,
      mostRecentMessages: n
    } = e;
    t.forEach(g), null == n || n.forEach(e => {
      let t = T.default.getChannel(e.channel_id);
      null != t && e.type !== A.MessageTypes.THREAD_STARTER_MESSAGE && O(t, t => {
        t.mostRecentRawMessage = e, t.mostRecentMessage = null
      })
    })
  },
  LOAD_THREADS_SUCCESS: D,
  LOAD_ARCHIVED_THREADS_SUCCESS: D,
  SEARCH_FINISH: M,
  MOD_VIEW_SEARCH_FINISH: M,
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    delete N[t.id]
  },
  CHANNEL_DELETE: function(e) {
    var t;
    let {
      channel: n
    } = e;
    t = n.id, N = l().omitBy(N, e => e.parentId === t), delete p[t]
  },
  MESSAGE_CREATE: function(e) {
    let {
      message: t,
      optimistic: n,
      isPushNotification: i,
      sendMessageOptions: r
    } = e;
    if (n || i || null != r) return !1;
    let s = T.default.getChannel(t.channel_id);
    if (null == s || !c.THREAD_CHANNEL_TYPES.has(s.type) || ! function(e, t) {
        return !(t.type === A.MessageTypes.THREAD_STARTER_MESSAGE || e.isForumPost() && t.id === S.default.castChannelIdAsMessageId(e.id)) && !0
      }(s, t)) return !1;
    O(s, e => {
      e.count = Math.min(e.count + 1, h.MAX_THREAD_MESSAGE_COUNT), e.mostRecentRawMessage = t, e.mostRecentMessage = null
    })
  },
  MESSAGE_UPDATE: function(e) {
    var t;
    let {
      message: n
    } = e, i = N[n.channel_id], r = null !== (t = null == i ? void 0 : i.mostRecentRawMessage) && void 0 !== t ? t : null == i ? void 0 : i.mostRecentMessage;
    if (null == i || null == r || r.id !== n.id) return !1;
    C(i, e => {
      null != e.mostRecentMessage && (e.mostRecentMessage = (0, _.updateMessageRecord)(e.mostRecentMessage, n)), null != e.mostRecentRawMessage && (e.mostRecentRawMessage = (0, _.updateServerMessage)(e.mostRecentRawMessage, n))
    })
  },
  MESSAGE_DELETE: function(e) {
    let {
      id: t,
      channelId: n
    } = e, i = N[n];
    if (null == i) return !1;
    let r = S.default.castChannelIdAsMessageId(n) !== t,
      s = !m.has(t);
    C(i, e => {
      var n;
      let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
      null != i && i.id === t && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count = r && s ? Math.max(e.count - 1, 0) : e.count, m.add(t)
    })
  },
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t,
      channelId: n
    } = e, i = N[n];
    if (null == i) return !1;
    let r = t.filter(e => {
      let t = S.default.castChannelIdAsMessageId(n) !== e,
        i = !m.has(e);
      return t && i
    }).length;
    r > 0 && C(i, e => {
      var n;
      let i = null !== (n = e.mostRecentRawMessage) && void 0 !== n ? n : e.mostRecentMessage;
      null != i && t.includes(i.id) && (e.mostRecentMessage = null, e.mostRecentRawMessage = null), e.count -= r, t.forEach(e => m.add(e))
    })
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let t = !1;
    for (let n of e.messages) t = L(n.thread) || t;
    if (e.isAfter || e.isBefore || e.hasMoreAfter) return t;
    let n = T.default.getChannel(e.channelId);
    if (null == n || !c.THREAD_CHANNEL_TYPES.has(n.type)) return t;
    O(n, t => {
      if (0 === e.messages.length) t.mostRecentRawMessage = null, t.mostRecentMessage = null, t.count = 0;
      else {
        var n;
        let i = null !== (n = e.messages[0]) && void 0 !== n ? n : null;
        t.count = e.messages.length >= h.MAX_THREAD_MESSAGE_COUNT ? h.MAX_THREAD_MESSAGE_COUNT : t.count, (null == i ? void 0 : i.type) !== A.MessageTypes.THREAD_STARTER_MESSAGE && (t.mostRecentRawMessage = i, t.mostRecentMessage = null)
      }
    })
  }
})