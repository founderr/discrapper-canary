"use strict";
let i;
n.r(t), n.d(t, {
  computeThreadIdsSnapshot: function() {
    return H
  },
  default: function() {
    return G
  }
}), n("222007");
var l = n("917351"),
  a = n.n(l),
  s = n("335710"),
  r = n("249654"),
  o = n("446674"),
  u = n("913144"),
  d = n("689275"),
  c = n("610730"),
  p = n("271938"),
  f = n("42203"),
  m = n("660478"),
  I = n("18494"),
  _ = n("449008"),
  T = n("786742");
let C = [],
  A = null,
  E = null,
  N = new Set,
  S = s.ThreadSortOrder.LATEST_ACTIVITY,
  g = 0,
  O = [],
  M = !1,
  h = [],
  v = a.chain(C),
  y = a.chain(C),
  D = new Set,
  R = new Set;

function P(e) {
  var t;
  return null !== (t = m.default.lastMessageId(e)) && void 0 !== t ? t : e
}

function L(e) {
  return function(t, n) {
    if ((0, T.isForumPostPinned)(t)) return -1;
    if ((0, T.isForumPostPinned)(n)) return 1;
    if (e === s.ThreadSortOrder.LATEST_ACTIVITY) return r.default.compare(P(n), P(t));
    else return r.default.compare(n, t)
  }
}

function U() {
  O = [], i = null, E = null, N = new Set, S = s.ThreadSortOrder.LATEST_ACTIVITY, g = 0, h = [], v = a.chain(C), y = a.chain(C), R.clear(), D.clear()
}

function F() {
  var e;
  let t = I.default.getChannelId();
  if (null == t || !(null === (e = f.default.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return U(), !1;
  b({
    refreshThreadIds: !0
  })
}

function H(e) {
  let t = f.default.getChannel(e);
  return null == t ? [] : Object.values(d.default.getThreadsForParent(t.guild_id, t.id)).map(e => {
    let {
      id: t
    } = e;
    return t
  }).sort(L(S))
}

function b(e) {
  var t;
  let n = f.default.getChannel(E);
  if (null == n) return;
  (null == e ? void 0 : e.refreshThreadIds) && (h = Object.values(d.default.getThreadsForParent(n.guild_id, n.id)).map(e => {
    let {
      id: t
    } = e;
    return t
  }), g = 0, M = !0), 0 !== D.size && (h = h.filter(e => !D.has(e)), D.clear()), 0 !== R.size && (h = Array.from(new Set([...h, ...R])), R.clear()), ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && (y = a.chain(h).sort(L(s.ThreadSortOrder.LATEST_ACTIVITY)), v = a.chain(h).sort(L(s.ThreadSortOrder.CREATION_DATE)));
  let l = S === s.ThreadSortOrder.LATEST_ACTIVITY ? y : v,
    r = l.value();
  O = 0 === N.size ? r : r.filter((t = N, function(e) {
    var n;
    let i = null === (n = f.default.getChannel(e)) || void 0 === n ? void 0 : n.appliedTags;
    return null != i && 0 !== i.length && i.some(e => t.has(e))
  }));
  let o = O.find(e => (function(e) {
    let t = c.default.getCount(e);
    return null === t || 0 === t
  })(e));
  i = null == o ? null : o
}
class B extends o.default.Store {
  initialize() {
    this.waitFor(f.default, d.default, I.default, m.default)
  }
  getNewThreadCount() {
    return g
  }
  getCanAckThreads() {
    return M
  }
  getThreadIds(e, t, n) {
    let i = e !== E,
      l = !(0, _.areSetsEqual)(n, N),
      a = t !== S;
    return E = e, N = n, S = t, i ? b({
      refreshThreadIds: !0
    }) : a ? b({
      sortThreadIds: !0
    }) : l && b(), O
  }
  getCurrentThreadIds() {
    return O
  }
  getAndDeleteMostRecentUserCreatedThreadId() {
    let e = A;
    return A = null, e
  }
  getFirstNoReplyThreadId() {
    return i
  }
}
B.displayName = "ForumActivePostStore";
var G = new B(u.default, {
  CONNECTION_OPEN: F,
  OVERLAY_INITIALIZE: F,
  GUILD_CREATE: F,
  CHANNEL_SELECT: F,
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    if (null == t.parent_id || t.parent_id !== E) return !1;
    U()
  },
  THREAD_LIST_SYNC: function(e) {
    var t;
    let {
      guildId: n
    } = e;
    if (null == E || n !== (null === (t = f.default.getChannel(E)) || void 0 === t ? void 0 : t.guild_id)) return !1;
    b({
      refreshThreadIds: !0
    })
  },
  THREAD_CREATE: function(e) {
    let {
      channel: t,
      isNewlyCreated: n
    } = e;
    if (null == t.parent_id || t.parent_id !== E || !n) return !1;
    t.ownerId !== p.default.getId() ? g++ : A = t.id
  },
  THREAD_UPDATE: function(e) {
    let {
      channel: t
    } = e;
    if (null == t.parent_id || t.parent_id !== E) return !1;
    let n = (0, T.isForumPostPinned)(t.id),
      i = R.has(t.id);
    if (n && !i) R.add(t.id), b({
      sortThreadIds: !0
    });
    else {
      if (n || !i) return !1;
      R.delete(t.id), b({
        sortThreadIds: !0
      })
    }
  },
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    if (null == t.parent_id || t.parent_id !== E) return !1;
    D.add(t.id), b({
      sortThreadIds: !0
    })
  },
  RESORT_THREADS: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t || t !== E) return !1;
    b({
      refreshThreadIds: !0
    })
  },
  CHANNEL_ACK: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t || t !== E) return !1;
    M = !1
  }
})