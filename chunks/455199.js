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
  p = n("814082"),
  S = n("23750"),
  g = n("314897"),
  N = n("592125"),
  _ = n("375954"),
  I = n("306680"),
  T = n("699516"),
  C = n("914010"),
  A = n("9156"),
  v = n("594174"),
  x = n("981631");
let R = "recentMentionFilterSettings",
  M = [],
  b = {},
  O = !1,
  y = !0,
  L = d.Storage.get(R, {
    guildFilter: x.RecentMentionsFilters.ALL_SERVERS,
    everyoneFilter: !0,
    roleFilter: !0
  }),
  j = !1,
  D = 0,
  F = !1,
  P = !1;

function k(e) {
  if (e instanceof S.default) return e;
  let t = _.default.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, h.createMessageRecord)(e)
}

function U(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if ((0, m.default)(e) && !x.MessageTypesSets.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
  null == n && (n = e.channel_id);
  let a = N.default.getChannel(n);
  if (null == a || a.type === x.ChannelTypes.DM || L.guildFilter === x.RecentMentionsFilters.THIS_SERVER && a.getGuildId() !== C.default.getGuildId()) return null;
  let l = null === (t = e.author) || void 0 === t ? void 0 : t.id,
    s = g.default.getId();
  if (null != l && T.default.isBlocked(l) || (0, p.default)(e, s)) return null;
  e = k(e);
  let i = !L.everyoneFilter,
    r = !L.roleFilter;
  return (0, E.default)({
    message: e,
    userId: s,
    suppressEveryone: i,
    suppressRoles: r
  }) ? (P && I.default.ackMessageId(a.id) !== e.id && (0, E.default)({
    message: e,
    userId: s,
    suppressEveryone: A.default.isSuppressEveryoneEnabled(a.getGuildId()),
    suppressRoles: A.default.isSuppressRolesEnabled(a.getGuildId())
  }) && (P = !1), e) : null
}

function w(e) {
  if (null == b[e]) return !1;
  delete b[e], M = o().filter(M, t => {
    let {
      id: n
    } = t;
    return n !== e
  })
}

function G(e) {
  let {
    id: t
  } = e;
  return w(t)
}

function B(e) {
  let t = {
    ...L
  };
  L = o().defaults(o().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), L), d.Storage.set(R, L);
  let n = (e, n) => t[e] !== L[e] && L[e] === n,
    a = n("guildFilter", x.RecentMentionsFilters.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
  b = {};
  let l = [];
  a && M.forEach(e => {
    let t = U(e);
    null != t && (l.push(t), b[t.id] = !0)
  }), 0 === (M = l).length && (j = !1)
}

function H() {
  M = [], b = {}, j = !1, P = !1
}

function V() {
  M = M.filter(e => !T.default.isBlocked(e.author.id))
}

function Y(e) {
  let {
    channel: t
  } = e;
  M = o().filter(M, e => e.channel_id !== t.id || (delete b[e.id], !1))
}
class z extends(a = u.default.Store) {
  initialize() {
    this.waitFor(v.default, N.default, _.default, I.default)
  }
  isOpen() {
    return F
  }
  get hasLoadedEver() {
    return j
  }
  get lastLoaded() {
    return D
  }
  getMentions() {
    return j || M.length > 0 ? M : null
  }
  hasMention(e) {
    return b[e]
  }
  get loading() {
    return O
  }
  get hasMore() {
    return y
  }
  get guildFilter() {
    return L.guildFilter
  }
  get everyoneFilter() {
    return L.everyoneFilter
  }
  get roleFilter() {
    return L.roleFilter
  }
  get mentionsAreStale() {
    return P
  }
}
i = "RecentMentionsStore", (s = "displayName") in(l = z) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = new z(f.default, {
  LOAD_RECENT_MENTIONS: function(e) {
    let {
      guildId: t
    } = e;
    O = !0, null == t && L.guildFilter === x.RecentMentionsFilters.THIS_SERVER && B({
      guildFilter: x.RecentMentionsFilters.ALL_SERVERS
    })
  },
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
    let {
      hasMoreAfter: t,
      messages: n,
      isAfter: a
    } = e, l = o().map(n, k);
    a ? M = M.concat(l) : (M = l, b = {}), o().forEach(l, e => {
      b[e.id] = !0
    }), O = !1, y = t, D = (0, c.now)(), j = !0
  },
  LOAD_RECENT_MENTIONS_FAILURE: function() {
    O = !1
  },
  SET_RECENT_MENTIONS_FILTER: B,
  CLEAR_MENTIONS: function(e) {
    H()
  },
  TRUNCATE_MENTIONS: function(e) {
    let {
      size: t
    } = e;
    for (let e = t; e < M.length; ++e) delete b[M[e].id];
    let n = M.length;
    n > (M = M.slice(0, t)).length && (y = !0)
  },
  CHANNEL_SELECT: function() {
    if (L.guildFilter !== x.RecentMentionsFilters.THIS_SERVER) return !1;
    j = !1
  },
  CONNECTION_OPEN: H,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    M = o().filter(M, e => {
      let n = N.default.getChannel(e.channel_id);
      return null != n && n.getGuildId() !== t.id || (delete b[e.id], !1)
    })
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e, a = v.default.getCurrentUser();
    if (null == a || !(0, E.isRawMessageMentioned)({
        rawMessage: n,
        userId: a.id,
        suppressRoles: !1,
        suppressEveryone: !1
      })) return !1;
    let l = U(n, t);
    if (null == l) return !1;
    (M = M.slice()).unshift(l), b[l.id] = !0
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id;
    if (null == b[String(t)]) return !1;
    let n = o().findIndex(M, e => {
        let {
          id: n
        } = e;
        return n === t
      }),
      a = (M = M.slice())[n];
    null != a && (M[n] = (0, h.updateMessageRecord)(a, e.message))
  },
  MESSAGE_DELETE: G,
  RECENT_MENTION_DELETE: G,
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t
    } = e;
    o().forEach(t, w)
  },
  CHANNEL_DELETE: Y,
  THREAD_DELETE: Y,
  RELATIONSHIP_ADD: V,
  RELATIONSHIP_REMOVE: V,
  MENTION_MODAL_OPEN: function() {
    F = !0
  },
  MENTION_MODAL_CLOSE: function() {
    F = !1
  },
  SET_RECENT_MENTIONS_STALE: function(e) {
    P = !0
  }
})