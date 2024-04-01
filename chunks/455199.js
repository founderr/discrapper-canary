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
  S = n("314897"),
  g = n("592125"),
  _ = n("375954"),
  N = n("306680"),
  I = n("699516"),
  T = n("914010"),
  C = n("9156"),
  A = n("594174"),
  v = n("981631");
let R = "recentMentionFilterSettings",
  x = [],
  M = {},
  L = !1,
  b = !0,
  O = d.Storage.get(R, {
    guildFilter: v.RecentMentionsFilters.ALL_SERVERS,
    everyoneFilter: !0,
    roleFilter: !0
  }),
  y = !1,
  j = 0,
  D = !1,
  F = !1;

function P(e) {
  if (e instanceof p.default) return e;
  let t = _.default.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, h.createMessageRecord)(e)
}

function U(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if ((0, m.default)(e)) return null;
  null == n && (n = e.channel_id);
  let a = g.default.getChannel(n);
  if (null == a || a.type === v.ChannelTypes.DM || O.guildFilter === v.RecentMentionsFilters.THIS_SERVER && a.getGuildId() !== T.default.getGuildId()) return null;
  let l = null === (t = e.author) || void 0 === t ? void 0 : t.id,
    s = S.default.getId();
  if (null != l && I.default.isBlocked(l) || l === s) return null;
  e = P(e);
  let i = !O.everyoneFilter,
    r = !O.roleFilter;
  return (0, E.default)({
    message: e,
    userId: s,
    suppressEveryone: i,
    suppressRoles: r
  }) ? (F && N.default.ackMessageId(a.id) !== e.id && (0, E.default)({
    message: e,
    userId: s,
    suppressEveryone: C.default.isSuppressEveryoneEnabled(a.getGuildId()),
    suppressRoles: C.default.isSuppressRolesEnabled(a.getGuildId())
  }) && (F = !1), e) : null
}

function k(e) {
  if (null == M[e]) return !1;
  delete M[e], x = o().filter(x, t => {
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
    ...O
  };
  O = o().defaults(o().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), O), d.Storage.set(R, O);
  let n = (e, n) => t[e] !== O[e] && O[e] === n,
    a = n("guildFilter", v.RecentMentionsFilters.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
  M = {};
  let l = [];
  a && x.forEach(e => {
    let t = U(e);
    null != t && (l.push(t), M[t.id] = !0)
  }), 0 === (x = l).length && (y = !1)
}

function B() {
  x = [], M = {}, y = !1, F = !1
}

function H() {
  x = x.filter(e => !I.default.isBlocked(e.author.id))
}

function V(e) {
  let {
    channel: t
  } = e;
  x = o().filter(x, e => e.channel_id !== t.id || (delete M[e.id], !1))
}
class Y extends(a = u.default.Store) {
  initialize() {
    this.waitFor(A.default, g.default, _.default, N.default)
  }
  isOpen() {
    return D
  }
  get hasLoadedEver() {
    return y
  }
  get lastLoaded() {
    return j
  }
  getMentions() {
    return y || x.length > 0 ? x : null
  }
  hasMention(e) {
    return M[e]
  }
  get loading() {
    return L
  }
  get hasMore() {
    return b
  }
  get guildFilter() {
    return O.guildFilter
  }
  get everyoneFilter() {
    return O.everyoneFilter
  }
  get roleFilter() {
    return O.roleFilter
  }
  get mentionsAreStale() {
    return F
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
    L = !0, null == t && O.guildFilter === v.RecentMentionsFilters.THIS_SERVER && G({
      guildFilter: v.RecentMentionsFilters.ALL_SERVERS
    })
  },
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
    let {
      hasMoreAfter: t,
      messages: n,
      isAfter: a
    } = e, l = o().map(n, P);
    a ? x = x.concat(l) : (x = l, M = {}), o().forEach(l, e => {
      M[e.id] = !0
    }), L = !1, b = t, j = (0, c.now)(), y = !0
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
    for (let e = t; e < x.length; ++e) delete M[x[e].id];
    let n = x.length;
    n > (x = x.slice(0, t)).length && (b = !0)
  },
  CHANNEL_SELECT: function() {
    if (O.guildFilter !== v.RecentMentionsFilters.THIS_SERVER) return !1;
    y = !1
  },
  CONNECTION_OPEN: B,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    x = o().filter(x, e => {
      let n = g.default.getChannel(e.channel_id);
      return null != n && n.getGuildId() !== t.id || (delete M[e.id], !1)
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
    let l = U(n, t);
    if (null == l) return !1;
    (x = x.slice()).unshift(l), M[l.id] = !0
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id;
    if (null == M[String(t)]) return !1;
    let n = o().findIndex(x, e => {
        let {
          id: n
        } = e;
        return n === t
      }),
      a = (x = x.slice())[n];
    null != a && (x[n] = (0, h.updateMessageRecord)(a, e.message))
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
    D = !0
  },
  MENTION_MODAL_CLOSE: function() {
    D = !1
  },
  SET_RECENT_MENTIONS_STALE: function(e) {
    F = !0
  }
})