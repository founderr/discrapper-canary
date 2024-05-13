"use strict";
n.r(t), n("733860"), n("653041");
var a, l, s, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("433517"),
  c = n("379649"),
  f = n("570140"),
  h = n("786761"),
  E = n("572804"),
  m = n("901461"),
  p = n("23750"),
  g = n("314897"),
  S = n("592125"),
  N = n("375954"),
  _ = n("306680"),
  T = n("699516"),
  I = n("914010"),
  C = n("9156"),
  A = n("594174"),
  v = n("981631");
let M = "recentMentionFilterSettings",
  R = [],
  x = {},
  L = !1,
  O = !0,
  b = d.Storage.get(M, {
    guildFilter: v.RecentMentionsFilters.ALL_SERVERS,
    everyoneFilter: !0,
    roleFilter: !0
  }),
  y = !1,
  j = 0,
  F = !1,
  D = !1;

function U(e) {
  if (e instanceof p.default) return e;
  let t = N.default.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, h.createMessageRecord)(e)
}

function P(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if ((0, m.default)(e)) return null;
  null == n && (n = e.channel_id);
  let a = S.default.getChannel(n);
  if (null == a || a.type === v.ChannelTypes.DM || b.guildFilter === v.RecentMentionsFilters.THIS_SERVER && a.getGuildId() !== I.default.getGuildId()) return null;
  let l = null === (t = e.author) || void 0 === t ? void 0 : t.id,
    s = g.default.getId();
  if (null != l && T.default.isBlocked(l) || l === s) return null;
  e = U(e);
  let i = !b.everyoneFilter,
    r = !b.roleFilter;
  return (0, E.default)({
    message: e,
    userId: s,
    suppressEveryone: i,
    suppressRoles: r
  }) ? (D && _.default.ackMessageId(a.id) !== e.id && (0, E.default)({
    message: e,
    userId: s,
    suppressEveryone: C.default.isSuppressEveryoneEnabled(a.getGuildId()),
    suppressRoles: C.default.isSuppressRolesEnabled(a.getGuildId())
  }) && (D = !1), e) : null
}

function k(e) {
  if (null == x[e]) return !1;
  delete x[e], R = o().filter(R, t => {
    let {
      id: n
    } = t;
    return n !== e
  })
}

function w(e) {
  let {
    id: t
  } = e;
  return k(t)
}

function G(e) {
  let t = {
    ...b
  };
  b = o().defaults(o().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), b), d.Storage.set(M, b);
  let n = (e, n) => t[e] !== b[e] && b[e] === n,
    a = n("guildFilter", v.RecentMentionsFilters.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
  x = {};
  let l = [];
  a && R.forEach(e => {
    let t = P(e);
    null != t && (l.push(t), x[t.id] = !0)
  }), 0 === (R = l).length && (y = !1)
}

function B() {
  R = [], x = {}, y = !1, D = !1
}

function H() {
  R = R.filter(e => !T.default.isBlocked(e.author.id))
}

function V(e) {
  let {
    channel: t
  } = e;
  R = o().filter(R, e => e.channel_id !== t.id || (delete x[e.id], !1))
}
class Y extends(a = u.default.Store) {
  initialize() {
    this.waitFor(A.default, S.default, N.default, _.default)
  }
  isOpen() {
    return F
  }
  get hasLoadedEver() {
    return y
  }
  get lastLoaded() {
    return j
  }
  getMentions() {
    return y || R.length > 0 ? R : null
  }
  hasMention(e) {
    return x[e]
  }
  get loading() {
    return L
  }
  get hasMore() {
    return O
  }
  get guildFilter() {
    return b.guildFilter
  }
  get everyoneFilter() {
    return b.everyoneFilter
  }
  get roleFilter() {
    return b.roleFilter
  }
  get mentionsAreStale() {
    return D
  }
}
i = "RecentMentionsStore", (s = "displayName") in(l = Y) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = new Y(f.default, {
  LOAD_RECENT_MENTIONS: function(e) {
    let {
      guildId: t
    } = e;
    L = !0, null == t && b.guildFilter === v.RecentMentionsFilters.THIS_SERVER && G({
      guildFilter: v.RecentMentionsFilters.ALL_SERVERS
    })
  },
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
    let {
      hasMoreAfter: t,
      messages: n,
      isAfter: a
    } = e, l = o().map(n, U);
    a ? R = R.concat(l) : (R = l, x = {}), o().forEach(l, e => {
      x[e.id] = !0
    }), L = !1, O = t, j = (0, c.now)(), y = !0
  },
  LOAD_RECENT_MENTIONS_FAILURE: function() {
    L = !1
  },
  SET_RECENT_MENTIONS_FILTER: G,
  CLEAR_MENTIONS: function(e) {
    B()
  },
  TRUNCATE_MENTIONS: function(e) {
    let {
      size: t
    } = e;
    for (let e = t; e < R.length; ++e) delete x[R[e].id];
    let n = R.length;
    n > (R = R.slice(0, t)).length && (O = !0)
  },
  CHANNEL_SELECT: function() {
    if (b.guildFilter !== v.RecentMentionsFilters.THIS_SERVER) return !1;
    y = !1
  },
  CONNECTION_OPEN: B,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    R = o().filter(R, e => {
      let n = S.default.getChannel(e.channel_id);
      return null != n && n.getGuildId() !== t.id || (delete x[e.id], !1)
    })
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e, a = A.default.getCurrentUser();
    if (null == a || !(0, E.isRawMessageMentioned)({
        rawMessage: n,
        userId: a.id,
        suppressRoles: !1,
        suppressEveryone: !1
      })) return !1;
    let l = P(n, t);
    if (null == l) return !1;
    (R = R.slice()).unshift(l), x[l.id] = !0
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id;
    if (null == x[String(t)]) return !1;
    let n = o().findIndex(R, e => {
        let {
          id: n
        } = e;
        return n === t
      }),
      a = (R = R.slice())[n];
    null != a && (R[n] = (0, h.updateMessageRecord)(a, e.message))
  },
  MESSAGE_DELETE: w,
  RECENT_MENTION_DELETE: w,
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t
    } = e;
    o().forEach(t, k)
  },
  CHANNEL_DELETE: V,
  THREAD_DELETE: V,
  RELATIONSHIP_ADD: H,
  RELATIONSHIP_REMOVE: H,
  MENTION_MODAL_OPEN: function() {
    F = !0
  },
  MENTION_MODAL_CLOSE: function() {
    F = !1
  },
  SET_RECENT_MENTIONS_STALE: function(e) {
    D = !0
  }
})