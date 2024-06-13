"use strict";
n.r(t), n("733860"), n("653041");
var s, a, l, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("433517"),
  c = n("379649"),
  f = n("570140"),
  E = n("786761"),
  _ = n("572804"),
  T = n("901461"),
  m = n("814082"),
  I = n("23750"),
  N = n("314897"),
  p = n("592125"),
  h = n("375954"),
  S = n("306680"),
  C = n("699516"),
  A = n("914010"),
  g = n("9156"),
  M = n("594174"),
  R = n("981631");
let O = "recentMentionFilterSettings",
  v = [],
  x = {},
  L = !1,
  P = !0,
  D = d.Storage.get(O, {
    guildFilter: R.RecentMentionsFilters.ALL_SERVERS,
    everyoneFilter: !0,
    roleFilter: !0
  }),
  y = !1,
  U = 0,
  j = !1,
  b = !1;

function G(e) {
  if (e instanceof I.default) return e;
  let t = h.default.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, E.createMessageRecord)(e)
}

function F(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if ((0, T.default)(e) && !R.MessageTypesSets.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
  null == n && (n = e.channel_id);
  let s = p.default.getChannel(n);
  if (null == s || s.type === R.ChannelTypes.DM || D.guildFilter === R.RecentMentionsFilters.THIS_SERVER && s.getGuildId() !== A.default.getGuildId()) return null;
  let a = null === (t = e.author) || void 0 === t ? void 0 : t.id,
    l = N.default.getId();
  if (null != a && C.default.isBlocked(a) || (0, m.default)(e, l)) return null;
  e = G(e);
  let i = !D.everyoneFilter,
    r = !D.roleFilter;
  return (0, _.default)({
    message: e,
    userId: l,
    suppressEveryone: i,
    suppressRoles: r
  }) ? (b && S.default.ackMessageId(s.id) !== e.id && (0, _.default)({
    message: e,
    userId: l,
    suppressEveryone: g.default.isSuppressEveryoneEnabled(s.getGuildId()),
    suppressRoles: g.default.isSuppressRolesEnabled(s.getGuildId())
  }) && (b = !1), e) : null
}

function B(e) {
  if (null == x[e]) return !1;
  delete x[e], v = o().filter(v, t => {
    let {
      id: n
    } = t;
    return n !== e
  })
}

function k(e) {
  let {
    id: t
  } = e;
  return B(t)
}

function w(e) {
  let t = {
    ...D
  };
  D = o().defaults(o().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), D), d.Storage.set(O, D);
  let n = (e, n) => t[e] !== D[e] && D[e] === n,
    s = n("guildFilter", R.RecentMentionsFilters.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
  x = {};
  let a = [];
  s && v.forEach(e => {
    let t = F(e);
    null != t && (a.push(t), x[t.id] = !0)
  }), 0 === (v = a).length && (y = !1)
}

function H() {
  v = [], x = {}, y = !1, b = !1
}

function V() {
  v = v.filter(e => !C.default.isBlocked(e.author.id))
}

function Y(e) {
  let {
    channel: t
  } = e;
  v = o().filter(v, e => e.channel_id !== t.id || (delete x[e.id], !1))
}
class K extends(s = u.default.Store) {
  initialize() {
    this.waitFor(M.default, p.default, h.default, S.default)
  }
  isOpen() {
    return j
  }
  get hasLoadedEver() {
    return y
  }
  get lastLoaded() {
    return U
  }
  getMentions() {
    return y || v.length > 0 ? v : null
  }
  hasMention(e) {
    return x[e]
  }
  get loading() {
    return L
  }
  get hasMore() {
    return P
  }
  get guildFilter() {
    return D.guildFilter
  }
  get everyoneFilter() {
    return D.everyoneFilter
  }
  get roleFilter() {
    return D.roleFilter
  }
  get mentionsAreStale() {
    return b
  }
}
i = "RecentMentionsStore", (l = "displayName") in(a = K) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new K(f.default, {
  LOAD_RECENT_MENTIONS: function(e) {
    let {
      guildId: t
    } = e;
    L = !0, null == t && D.guildFilter === R.RecentMentionsFilters.THIS_SERVER && w({
      guildFilter: R.RecentMentionsFilters.ALL_SERVERS
    })
  },
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
    let {
      hasMoreAfter: t,
      messages: n,
      isAfter: s
    } = e, a = o().map(n, G);
    s ? v = v.concat(a) : (v = a, x = {}), o().forEach(a, e => {
      x[e.id] = !0
    }), L = !1, P = t, U = (0, c.now)(), y = !0
  },
  LOAD_RECENT_MENTIONS_FAILURE: function() {
    L = !1
  },
  SET_RECENT_MENTIONS_FILTER: w,
  CLEAR_MENTIONS: function(e) {
    H()
  },
  TRUNCATE_MENTIONS: function(e) {
    let {
      size: t
    } = e;
    for (let e = t; e < v.length; ++e) delete x[v[e].id];
    let n = v.length;
    n > (v = v.slice(0, t)).length && (P = !0)
  },
  CHANNEL_SELECT: function() {
    if (D.guildFilter !== R.RecentMentionsFilters.THIS_SERVER) return !1;
    y = !1
  },
  CONNECTION_OPEN: H,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    v = o().filter(v, e => {
      let n = p.default.getChannel(e.channel_id);
      return null != n && n.getGuildId() !== t.id || (delete x[e.id], !1)
    })
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e, s = M.default.getCurrentUser();
    if (null == s || !(0, _.isRawMessageMentioned)({
        rawMessage: n,
        userId: s.id,
        suppressRoles: !1,
        suppressEveryone: !1
      })) return !1;
    let a = F(n, t);
    if (null == a) return !1;
    (v = v.slice()).unshift(a), x[a.id] = !0
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id;
    if (null == x[String(t)]) return !1;
    let n = o().findIndex(v, e => {
        let {
          id: n
        } = e;
        return n === t
      }),
      s = (v = v.slice())[n];
    null != s && (v[n] = (0, E.updateMessageRecord)(s, e.message))
  },
  MESSAGE_DELETE: k,
  RECENT_MENTION_DELETE: k,
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t
    } = e;
    o().forEach(t, B)
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
    b = !0
  }
})