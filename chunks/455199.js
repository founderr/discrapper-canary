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
  _ = n("592125"),
  N = n("375954"),
  T = n("306680"),
  I = n("699516"),
  C = n("914010"),
  A = n("9156"),
  v = n("594174"),
  M = n("981631");
let R = "recentMentionFilterSettings",
  x = [],
  L = {},
  O = !1,
  b = !0,
  y = d.Storage.get(R, {
    guildFilter: M.RecentMentionsFilters.ALL_SERVERS,
    everyoneFilter: !0,
    roleFilter: !0
  }),
  F = !1,
  D = 0,
  j = !1,
  U = !1;

function P(e) {
  if (e instanceof S.default) return e;
  let t = N.default.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, h.createMessageRecord)(e)
}

function k(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if ((0, m.default)(e) && !M.MessageTypesSets.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
  null == n && (n = e.channel_id);
  let a = _.default.getChannel(n);
  if (null == a || a.type === M.ChannelTypes.DM || y.guildFilter === M.RecentMentionsFilters.THIS_SERVER && a.getGuildId() !== C.default.getGuildId()) return null;
  let l = null === (t = e.author) || void 0 === t ? void 0 : t.id,
    s = g.default.getId();
  if (null != l && I.default.isBlocked(l) || (0, p.default)(e, s)) return null;
  e = P(e);
  let i = !y.everyoneFilter,
    r = !y.roleFilter;
  return (0, E.default)({
    message: e,
    userId: s,
    suppressEveryone: i,
    suppressRoles: r
  }) ? (U && T.default.ackMessageId(a.id) !== e.id && (0, E.default)({
    message: e,
    userId: s,
    suppressEveryone: A.default.isSuppressEveryoneEnabled(a.getGuildId()),
    suppressRoles: A.default.isSuppressRolesEnabled(a.getGuildId())
  }) && (U = !1), e) : null
}

function w(e) {
  if (null == L[e]) return !1;
  delete L[e], x = o().filter(x, t => {
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
    ...y
  };
  y = o().defaults(o().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), y), d.Storage.set(R, y);
  let n = (e, n) => t[e] !== y[e] && y[e] === n,
    a = n("guildFilter", M.RecentMentionsFilters.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
  L = {};
  let l = [];
  a && x.forEach(e => {
    let t = k(e);
    null != t && (l.push(t), L[t.id] = !0)
  }), 0 === (x = l).length && (F = !1)
}

function H() {
  x = [], L = {}, F = !1, U = !1
}

function V() {
  x = x.filter(e => !I.default.isBlocked(e.author.id))
}

function Y(e) {
  let {
    channel: t
  } = e;
  x = o().filter(x, e => e.channel_id !== t.id || (delete L[e.id], !1))
}
class K extends(a = u.default.Store) {
  initialize() {
    this.waitFor(v.default, _.default, N.default, T.default)
  }
  isOpen() {
    return j
  }
  get hasLoadedEver() {
    return F
  }
  get lastLoaded() {
    return D
  }
  getMentions() {
    return F || x.length > 0 ? x : null
  }
  hasMention(e) {
    return L[e]
  }
  get loading() {
    return O
  }
  get hasMore() {
    return b
  }
  get guildFilter() {
    return y.guildFilter
  }
  get everyoneFilter() {
    return y.everyoneFilter
  }
  get roleFilter() {
    return y.roleFilter
  }
  get mentionsAreStale() {
    return U
  }
}
i = "RecentMentionsStore", (s = "displayName") in(l = K) ? Object.defineProperty(l, s, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : l[s] = i, t.default = new K(f.default, {
  LOAD_RECENT_MENTIONS: function(e) {
    let {
      guildId: t
    } = e;
    O = !0, null == t && y.guildFilter === M.RecentMentionsFilters.THIS_SERVER && B({
      guildFilter: M.RecentMentionsFilters.ALL_SERVERS
    })
  },
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
    let {
      hasMoreAfter: t,
      messages: n,
      isAfter: a
    } = e, l = o().map(n, P);
    a ? x = x.concat(l) : (x = l, L = {}), o().forEach(l, e => {
      L[e.id] = !0
    }), O = !1, b = t, D = (0, c.now)(), F = !0
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
    for (let e = t; e < x.length; ++e) delete L[x[e].id];
    let n = x.length;
    n > (x = x.slice(0, t)).length && (b = !0)
  },
  CHANNEL_SELECT: function() {
    if (y.guildFilter !== M.RecentMentionsFilters.THIS_SERVER) return !1;
    F = !1
  },
  CONNECTION_OPEN: H,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    x = o().filter(x, e => {
      let n = _.default.getChannel(e.channel_id);
      return null != n && n.getGuildId() !== t.id || (delete L[e.id], !1)
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
    let l = k(n, t);
    if (null == l) return !1;
    (x = x.slice()).unshift(l), L[l.id] = !0
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id;
    if (null == L[String(t)]) return !1;
    let n = o().findIndex(x, e => {
        let {
          id: n
        } = e;
        return n === t
      }),
      a = (x = x.slice())[n];
    null != a && (x[n] = (0, h.updateMessageRecord)(a, e.message))
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
    j = !0
  },
  MENTION_MODAL_CLOSE: function() {
    j = !1
  },
  SET_RECENT_MENTIONS_STALE: function(e) {
    U = !0
  }
})