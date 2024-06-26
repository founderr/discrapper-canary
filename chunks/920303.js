"use strict";
let i;
n.d(t, {
  I: function() {
    return m
  }
}), n(47120);
var r, s, o, a, l = n(392711),
  u = n.n(l),
  _ = n(683860),
  c = n(442837),
  d = n(570140),
  E = n(882252),
  I = n(228392),
  T = n(131704),
  h = n(592125),
  f = n(306680),
  S = n(823379),
  N = n(709054),
  A = n(569471);
let m = 25,
  O = !1,
  p = !0,
  R = !1,
  g = !1,
  C = null,
  v = _.z.LATEST_ACTIVITY,
  L = [],
  D = 0;

function M() {
  O = !1, p = !0, R = !1, g = !1, C = null, v = _.z.LATEST_ACTIVITY, i = new Set, D = 0, L = []
}

function P(e, t) {
  return t === _.z.LATEST_ACTIVITY ? f.ZP.lastMessageId(e.id) : e.id
}

function y() {
  if (null == C) return !1;
  let e = !R,
    t = h.Z.getChannel(L[L.length - 1]),
    n = null == t ? null : P(t, v);
  L = u()(h.Z.getAllThreadsForParent(C)).filter(e => e.isArchivedThread()).filter(t => {
    var r;
    if (0 !== i.size && (null === (r = t.appliedTags) || void 0 === r ? void 0 : r.some(e => i.has(e))) !== !0) return !1;
    if (e || null == n) return !0;
    {
      let e = null == t ? null : P(t, v);
      return null != e && N.default.compare(e, n) >= 0
    }
  }).sort((e, t) => N.default.compare(P(e, v), P(t, v))).map(e => e.id).reverse().value()
}

function U(e) {
  if (!(L.indexOf(e) >= 0)) return !1;
  L = L.filter(t => t !== e)
}
let b = [];
class G extends(r = c.ZP.Store) {
  initialize() {
    this.waitFor(h.Z, A.Z, f.ZP)
  }
  get canLoadMore() {
    return R && !O && !g
  }
  get nextOffset() {
    return D
  }
  get isInitialLoad() {
    return p
  }
  isLoading(e, t, n) {
    return C === e && v === t && (0, S.OL)(i, n) ? O : (M(), !1)
  }
  getThreads(e, t, n) {
    return C === e && v === t && (0, S.OL)(i, n) ? L : b
  }
}
a = "ArchivedThreadsStore", (o = "displayName") in(s = G) ? Object.defineProperty(s, o, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = a, t.Z = new G(d.Z, {
  CONNECTION_OPEN: M,
  THREAD_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return U(t.id)
  },
  THREAD_UPDATE: function(e) {
    let {
      channel: t
    } = e;
    return C === t.parent_id && !!(0, E.yv)(t.id) && void U(t.id)
  },
  CHANNEL_DELETE: function(e) {
    if (e.channel.id !== C) return !1;
    M()
  },
  LOAD_ARCHIVED_THREADS: function(e) {
    (e.channelId !== C || e.sortOrder !== v || !(0, S.OL)(e.tagFilter, i)) && M(), C = e.channelId, v = e.sortOrder, i = e.tagFilter instanceof Set ? e.tagFilter : new Set(e.tagFilter), O = !0, p = !1
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: function(e) {
    if (e.channelId !== C || e.sortOrder !== v || !(0, S.OL)(e.tagFilter, i)) return !1;
    let t = e.threads.filter(e => T.AW.has(e.type)).map(e => e.id);
    L = L.concat(t);
    let n = h.Z.getChannel(C);
    null != n && n.isForumLikeChannel() && (0, I.Hr)({
      guildId: n.guild_id,
      channelId: n.id,
      numArchivedThreads: L.length,
      hasMoreThreads: e.hasMore,
      filterTagIds: Array.from(e.tagFilter),
      sortOrder: e.sortOrder
    }), y(), R = e.hasMore, D = e.offset + m, O = !1, p = !1
  },
  LOAD_ARCHIVED_THREADS_FAIL: function(e) {
    if (e.channelId !== C || e.sortOrder !== v || !(0, S.OL)(e.tagFilter, i)) return !1;
    O = !1, g = !0, p = !1
  },
  RESORT_THREADS: function(e) {
    return (null == C || null == e.channelId || C === e.channelId) && y()
  }
})