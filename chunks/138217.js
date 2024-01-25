"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
}), n("843762"), n("424973");
var a = n("917351"),
  l = n.n(a),
  s = n("446674"),
  i = n("95410"),
  r = n("398183"),
  o = n("913144"),
  u = n("692038"),
  d = n("406297"),
  c = n("913491"),
  f = n("915639"),
  h = n("719926"),
  E = n("271938"),
  m = n("42203"),
  p = n("377253"),
  S = n("660478"),
  g = n("27618"),
  _ = n("162771"),
  N = n("282109"),
  T = n("697218"),
  I = n("49111");
let C = "recentMentionFilterSettings",
  A = [],
  M = {},
  v = !1,
  R = !0,
  x = i.default.get(C, {
    guildFilter: I.RecentMentionsFilters.ALL_SERVERS,
    everyoneFilter: !0,
    roleFilter: !0
  }),
  L = !1,
  O = 0,
  b = !1,
  y = !1;

function j(e) {
  if (e instanceof h.default) return e;
  let t = p.default.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, u.createMessageRecord)(e)
}

function D(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if ((0, c.default)(e)) return null;
  null == n && (n = e.channel_id);
  let a = m.default.getChannel(n);
  if (null == a || a.type === I.ChannelTypes.DM || x.guildFilter === I.RecentMentionsFilters.THIS_SERVER && a.getGuildId() !== _.default.getGuildId()) return null;
  let l = null === (t = e.author) || void 0 === t ? void 0 : t.id,
    s = E.default.getId();
  if (null != l && g.default.isBlocked(l) || l === s) return null;
  e = j(e);
  let i = !x.everyoneFilter,
    r = !x.roleFilter;
  return (0, d.default)({
    message: e,
    userId: s,
    suppressEveryone: i,
    suppressRoles: r
  }) ? (y && S.default.ackMessageId(a.id) !== e.id && (0, d.default)({
    message: e,
    userId: s,
    suppressEveryone: N.default.isSuppressEveryoneEnabled(a.getGuildId()),
    suppressRoles: N.default.isSuppressRolesEnabled(a.getGuildId())
  }) && (y = !1), e) : null
}

function F(e) {
  if (null == M[e]) return !1;
  delete M[e], A = l.filter(A, t => {
    let {
      id: n
    } = t;
    return n !== e
  })
}

function U(e) {
  let {
    id: t
  } = e;
  return F(t)
}

function k(e) {
  let t = {
    ...x
  };
  x = l.defaults(l.pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), x), i.default.set(C, x);
  let n = (e, n) => t[e] !== x[e] && x[e] === n,
    a = n("guildFilter", I.RecentMentionsFilters.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
  M = {};
  let s = [];
  a && A.forEach(e => {
    let t = D(e);
    null != t && (s.push(t), M[t.id] = !0)
  }), 0 === (A = s).length && (L = !1)
}

function P() {
  A = [], M = {}, L = !1, y = !1
}

function w() {
  l.forEach(A, e => {
    e.timestamp.locale(f.default.locale)
  })
}

function G() {
  A = A.filter(e => !g.default.isBlocked(e.author.id))
}

function B(e) {
  let {
    channel: t
  } = e;
  A = l.filter(A, e => e.channel_id !== t.id || (delete M[e.id], !1))
}
class H extends s.default.Store {
  initialize() {
    this.waitFor(T.default, m.default, p.default, S.default)
  }
  isOpen() {
    return b
  }
  get hasLoadedEver() {
    return L
  }
  get lastLoaded() {
    return O
  }
  getMentions() {
    return L || A.length > 0 ? A : null
  }
  hasMention(e) {
    return M[e]
  }
  get loading() {
    return v
  }
  get hasMore() {
    return R
  }
  get guildFilter() {
    return x.guildFilter
  }
  get everyoneFilter() {
    return x.everyoneFilter
  }
  get roleFilter() {
    return x.roleFilter
  }
  get mentionsAreStale() {
    return y
  }
}
H.displayName = "RecentMentionsStore";
var V = new H(o.default, {
  LOAD_RECENT_MENTIONS: function(e) {
    let {
      guildId: t
    } = e;
    v = !0, null == t && x.guildFilter === I.RecentMentionsFilters.THIS_SERVER && k({
      guildFilter: I.RecentMentionsFilters.ALL_SERVERS
    })
  },
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
    let {
      hasMoreAfter: t,
      messages: n,
      isAfter: a
    } = e, s = l.map(n, j);
    a ? A = A.concat(s) : (A = s, M = {}), l.forEach(s, e => {
      M[e.id] = !0
    }), v = !1, R = t, O = (0, r.now)(), L = !0
  },
  LOAD_RECENT_MENTIONS_FAILURE: function() {
    v = !1
  },
  SET_RECENT_MENTIONS_FILTER: k,
  CLEAR_MENTIONS: function(e) {
    P()
  },
  TRUNCATE_MENTIONS: function(e) {
    let {
      size: t
    } = e;
    for (let e = t; e < A.length; ++e) delete M[A[e].id];
    let n = A.length;
    n > (A = A.slice(0, t)).length && (R = !0)
  },
  CHANNEL_SELECT: function() {
    if (x.guildFilter !== I.RecentMentionsFilters.THIS_SERVER) return !1;
    L = !1
  },
  CONNECTION_OPEN: P,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    A = l.filter(A, e => {
      let n = m.default.getChannel(e.channel_id);
      return null != n && n.getGuildId() !== t.id || (delete M[e.id], !1)
    })
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e, a = T.default.getCurrentUser();
    if (null == a || !(0, d.isRawMessageMentioned)({
        rawMessage: n,
        userId: a.id,
        suppressRoles: !1,
        suppressEveryone: !1
      })) return !1;
    let l = D(n, t);
    if (null == l) return !1;
    (A = A.slice()).unshift(l), M[l.id] = !0
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id;
    if (null == M[String(t)]) return !1;
    let n = l.findIndex(A, e => {
      let {
        id: n
      } = e;
      return n === t
    });
    A = A.slice();
    let a = A[n];
    null != a && (A[n] = (0, u.updateMessageRecord)(a, e.message))
  },
  MESSAGE_DELETE: U,
  RECENT_MENTION_DELETE: U,
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t
    } = e;
    l.forEach(t, F)
  },
  USER_SETTINGS_PROTO_UPDATE: w,
  I18N_LOAD_SUCCESS: w,
  CHANNEL_DELETE: B,
  THREAD_DELETE: B,
  RELATIONSHIP_ADD: G,
  RELATIONSHIP_REMOVE: G,
  MENTION_MODAL_OPEN: function() {
    b = !0
  },
  MENTION_MODAL_CLOSE: function() {
    b = !1
  },
  SET_RECENT_MENTIONS_STALE: function(e) {
    y = !0
  }
})