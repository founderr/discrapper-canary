"use strict";
let i;
n.d(t, {
  U: function() {
    return k
  }
}), n(47120);
var r, s, o, a, l = n(392711),
  u = n.n(l),
  _ = n(683860),
  c = n(442837),
  d = n(570140),
  E = n(344185),
  I = n(144140),
  T = n(314897),
  h = n(592125),
  f = n(306680),
  S = n(944486),
  A = n(823379),
  N = n(709054),
  m = n(882252);
let O = [],
  R = null,
  p = null,
  g = new Set,
  C = _.z.LATEST_ACTIVITY,
  v = 0,
  L = [],
  D = !1,
  M = [],
  P = u().chain(O),
  y = u().chain(O),
  U = new Set,
  b = new Set;

function G(e) {
  var t;
  return null !== (t = f.ZP.lastMessageId(e)) && void 0 !== t ? t : e
}

function w(e) {
  return function(t, n) {
    if ((0, m.yv)(t)) return -1;
    if ((0, m.yv)(n)) return 1;
    if (e === _.z.LATEST_ACTIVITY) return N.default.compare(G(n), G(t));
    else return N.default.compare(n, t)
  }
}

function B() {
  L = [], i = null, p = null, g = new Set, C = _.z.LATEST_ACTIVITY, v = 0, M = [], P = u().chain(O), y = u().chain(O), b.clear(), U.clear()
}

function x() {
  var e;
  let t = S.Z.getChannelId();
  if (null == t || !(null === (e = h.Z.getChannel(t)) || void 0 === e ? void 0 : e.isForumLikeChannel())) return B(), !1;
  V({
    refreshThreadIds: !0
  })
}

function k(e) {
  let t = h.Z.getChannel(e);
  return null == t ? [] : Object.values(E.Z.getThreadsForParent(t.guild_id, t.id)).map(e => {
    let {
      id: t
    } = e;
    return t
  }).sort(w(C))
}

function V(e) {
  var t;
  let n = h.Z.getChannel(p);
  if (null == n) return;
  (null == e ? void 0 : e.refreshThreadIds) && (M = Object.values(E.Z.getThreadsForParent(n.guild_id, n.id)).map(e => {
    let {
      id: t
    } = e;
    return t
  }), v = 0, D = !0), 0 !== U.size && (M = M.filter(e => !U.has(e)), U.clear()), 0 !== b.size && (M = Array.from(new Set([...M, ...b])), b.clear()), ((null == e ? void 0 : e.refreshThreadIds) || (null == e ? void 0 : e.sortThreadIds)) && (y = u().chain(M).sort(w(_.z.LATEST_ACTIVITY)), P = u().chain(M).sort(w(_.z.CREATION_DATE)));
  let r = (C === _.z.LATEST_ACTIVITY ? y : P).value();
  let s = (L = 0 === g.size ? r : r.filter((t = g, function(e) {
    var n;
    let i = null === (n = h.Z.getChannel(e)) || void 0 === n ? void 0 : n.appliedTags;
    return null != i && 0 !== i.length && i.some(e => t.has(e))
  }))).find(e => (function(e) {
    let t = I.Z.getCount(e);
    return null === t || 0 === t
  })(e));
  i = null == s ? null : s
}
class Z extends(r = c.ZP.Store) {
  initialize() {
    this.waitFor(h.Z, E.Z, S.Z, f.ZP)
  }
  getNewThreadCount() {
    return v
  }
  getCanAckThreads() {
    return D
  }
  getThreadIds(e, t, n) {
    let i = e !== p,
      r = !(0, A.OL)(n, g),
      s = t !== C;
    return p = e, g = n, C = t, i ? V({
      refreshThreadIds: !0
    }) : s ? V({
      sortThreadIds: !0
    }) : r && V(), L
  }
  getCurrentThreadIds() {
    return L
  }
  getAndDeleteMostRecentUserCreatedThreadId() {
    let e = R;
    return R = null, e
  }
  getFirstNoReplyThreadId() {
    return i
  }
}
a = "ForumActivePostStore", (o = "displayName") in(s = Z) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new Z(d.Z, {
  CONNECTION_OPEN: x,
  OVERLAY_INITIALIZE: x,
  GUILD_CREATE: x,
  CHANNEL_SELECT: x,
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    if (null == t.parent_id || t.parent_id !== p) return !1;
    B()
  },
  THREAD_LIST_SYNC: function(e) {
    var t;
    let {
      guildId: n
    } = e;
    if (null == p || n !== (null === (t = h.Z.getChannel(p)) || void 0 === t ? void 0 : t.guild_id)) return !1;
    V({
      refreshThreadIds: !0
    })
  },
  THREAD_CREATE: function(e) {
    let {
      channel: t,
      isNewlyCreated: n
    } = e;
    if (null == t.parent_id || t.parent_id !== p || !n) return !1;
    t.ownerId !== T.default.getId() ? v++ : R = t.id
  },
  THREAD_UPDATE: function(e) {
    let {
      channel: t
    } = e;
    if (null == t.parent_id || t.parent_id !== p) return !1;
    let n = (0, m.yv)(t.id),
      i = b.has(t.id);
    if (n && !i) b.add(t.id), V({
      sortThreadIds: !0
    });
    else {
      if (n || !i) return !1;
      b.delete(t.id), V({
        sortThreadIds: !0
      })
    }
  },
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    if (null == t.parent_id || t.parent_id !== p) return !1;
    U.add(t.id), V({
      sortThreadIds: !0
    })
  },
  RESORT_THREADS: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t || t !== p) return !1;
    V({
      refreshThreadIds: !0
    })
  },
  CHANNEL_ACK: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t || t !== p) return !1;
    D = !1
  }
})