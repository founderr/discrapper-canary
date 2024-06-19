n(733860), n(653041);
var s, i, l, a, r = n(392711),
  o = n.n(r),
  c = n(442837),
  u = n(433517),
  d = n(379649),
  E = n(570140),
  _ = n(786761),
  I = n(572804),
  T = n(901461),
  N = n(814082),
  m = n(23750),
  h = n(314897),
  C = n(592125),
  S = n(375954),
  A = n(306680),
  p = n(699516),
  g = n(914010),
  f = n(9156),
  O = n(594174),
  R = n(981631);
let M = "recentMentionFilterSettings",
  x = [],
  v = {},
  L = !1,
  Z = !0,
  P = u.K.get(M, {
    guildFilter: R.NgX.ALL_SERVERS,
    everyoneFilter: !0,
    roleFilter: !0
  }),
  D = !1,
  j = 0,
  U = !1,
  b = !1;

function y(e) {
  if (e instanceof m.ZP) return e;
  let t = S.Z.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, _.e5)(e)
}

function B(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if ((0, T.Z)(e) && !R.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
  null == t && (t = e.channel_id);
  let n = C.Z.getChannel(t);
  if (null == n || n.type === R.d4z.DM || P.guildFilter === R.NgX.THIS_SERVER && n.getGuildId() !== g.Z.getGuildId()) return null;
  let s = h.default.getId();
  if (p.Z.isBlockedForMessage(e) || (0, N.Z)(e, s)) return null;
  e = y(e);
  let i = !P.everyoneFilter,
    l = !P.roleFilter;
  return (0, I.ZP)({
    message: e,
    userId: s,
    suppressEveryone: i,
    suppressRoles: l
  }) ? (b && A.ZP.ackMessageId(n.id) !== e.id && (0, I.ZP)({
    message: e,
    userId: s,
    suppressEveryone: f.ZP.isSuppressEveryoneEnabled(n.getGuildId()),
    suppressRoles: f.ZP.isSuppressRolesEnabled(n.getGuildId())
  }) && (b = !1), e) : null
}

function k(e) {
  if (null == v[e]) return !1;
  delete v[e], x = o().filter(x, t => {
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
  return k(t)
}

function F(e) {
  let t = {
    ...P
  };
  P = o().defaults(o().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), P), u.K.set(M, P);
  let n = (e, n) => t[e] !== P[e] && P[e] === n,
    s = n("guildFilter", R.NgX.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
  v = {};
  let i = [];
  s && x.forEach(e => {
    let t = B(e);
    null != t && (i.push(t), v[t.id] = !0)
  }), 0 === (x = i).length && (D = !1)
}

function w() {
  x = [], v = {}, D = !1, b = !1
}

function V() {
  x = x.filter(e => !p.Z.isBlockedForMessage(e))
}

function H(e) {
  let {
    channel: t
  } = e;
  x = o().filter(x, e => e.channel_id !== t.id || (delete v[e.id], !1))
}
class Y extends(s = c.ZP.Store) {
  initialize() {
    this.waitFor(O.default, C.Z, S.Z, A.ZP)
  }
  isOpen() {
    return U
  }
  get hasLoadedEver() {
    return D
  }
  get lastLoaded() {
    return j
  }
  getMentions() {
    return D || x.length > 0 ? x : null
  }
  hasMention(e) {
    return v[e]
  }
  get loading() {
    return L
  }
  get hasMore() {
    return Z
  }
  get guildFilter() {
    return P.guildFilter
  }
  get everyoneFilter() {
    return P.everyoneFilter
  }
  get roleFilter() {
    return P.roleFilter
  }
  get mentionsAreStale() {
    return b
  }
}
a = "RecentMentionsStore", (l = "displayName") in(i = Y) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, t.Z = new Y(E.Z, {
  LOAD_RECENT_MENTIONS: function(e) {
    let {
      guildId: t
    } = e;
    L = !0, null == t && P.guildFilter === R.NgX.THIS_SERVER && F({
      guildFilter: R.NgX.ALL_SERVERS
    })
  },
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
    let {
      hasMoreAfter: t,
      messages: n,
      isAfter: s
    } = e, i = o().map(n, y);
    s ? x = x.concat(i) : (x = i, v = {}), o().forEach(i, e => {
      v[e.id] = !0
    }), L = !1, Z = t, j = (0, d.zO)(), D = !0
  },
  LOAD_RECENT_MENTIONS_FAILURE: function() {
    L = !1
  },
  SET_RECENT_MENTIONS_FILTER: F,
  CLEAR_MENTIONS: function(e) {
    w()
  },
  TRUNCATE_MENTIONS: function(e) {
    let {
      size: t
    } = e;
    for (let e = t; e < x.length; ++e) delete v[x[e].id];
    let n = x.length;
    n > (x = x.slice(0, t)).length && (Z = !0)
  },
  CHANNEL_SELECT: function() {
    if (P.guildFilter !== R.NgX.THIS_SERVER) return !1;
    D = !1
  },
  CONNECTION_OPEN: w,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    x = o().filter(x, e => {
      let n = C.Z.getChannel(e.channel_id);
      return null != n && n.getGuildId() !== t.id || (delete v[e.id], !1)
    })
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e, s = O.default.getCurrentUser();
    if (null == s || !(0, I.Hl)({
        rawMessage: n,
        userId: s.id,
        suppressRoles: !1,
        suppressEveryone: !1
      })) return !1;
    let i = B(n, t);
    if (null == i) return !1;
    (x = x.slice()).unshift(i), v[i.id] = !0
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id;
    if (null == v[String(t)]) return !1;
    let n = o().findIndex(x, e => {
        let {
          id: n
        } = e;
        return n === t
      }),
      s = (x = x.slice())[n];
    null != s && (x[n] = (0, _.wi)(s, e.message))
  },
  MESSAGE_DELETE: G,
  RECENT_MENTION_DELETE: G,
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t
    } = e;
    o().forEach(t, k)
  },
  CHANNEL_DELETE: H,
  THREAD_DELETE: H,
  RELATIONSHIP_ADD: V,
  RELATIONSHIP_REMOVE: V,
  MENTION_MODAL_OPEN: function() {
    U = !0
  },
  MENTION_MODAL_CLOSE: function() {
    U = !1
  },
  SET_RECENT_MENTIONS_STALE: function(e) {
    b = !0
  }
})