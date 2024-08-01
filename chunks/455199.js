n(733860), n(653041);
var i, s, a, r, l = n(392711),
  o = n.n(l),
  c = n(442837),
  u = n(433517),
  d = n(379649),
  _ = n(570140),
  E = n(786761),
  I = n(572804),
  m = n(901461),
  T = n(814082),
  h = n(23750),
  N = n(314897),
  f = n(592125),
  C = n(375954),
  p = n(306680),
  g = n(699516),
  S = n(914010),
  A = n(9156),
  M = n(594174),
  R = n(981631);
let O = 'recentMentionFilterSettings',
  x = [],
  v = {},
  Z = !1,
  L = !0,
  P = u.K.get(O, {
guildFilter: R.NgX.ALL_SERVERS,
everyoneFilter: !0,
roleFilter: !0
  }),
  D = !1,
  b = 0,
  j = !1,
  U = !1;

function y(e) {
  if (e instanceof h.ZP)
return e;
  let t = C.Z.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, E.e5)(e);
}

function B(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if ((0, m.Z)(e) && !R.V$x.SELF_MENTIONABLE_SYSTEM.has(e.type))
return null;
  null == t && (t = e.channel_id);
  let n = f.Z.getChannel(t);
  if (null == n || n.type === R.d4z.DM || P.guildFilter === R.NgX.THIS_SERVER && n.getGuildId() !== S.Z.getGuildId())
return null;
  let i = N.default.getId();
  if (g.Z.isBlockedForMessage(e) || (0, T.Z)(e, i))
return null;
  e = y(e);
  let s = !P.everyoneFilter,
a = !P.roleFilter;
  return (0, I.ZP)({
message: e,
userId: i,
suppressEveryone: s,
suppressRoles: a
  }) ? (U && p.ZP.ackMessageId(n.id) !== e.id && (0, I.ZP)({
message: e,
userId: i,
suppressEveryone: A.ZP.isSuppressEveryoneEnabled(n.getGuildId()),
suppressRoles: A.ZP.isSuppressRolesEnabled(n.getGuildId())
  }) && (U = !1), e) : null;
}

function k(e) {
  if (null == v[e])
return !1;
  delete v[e], x = o().filter(x, t => {
let {
  id: n
} = t;
return n !== e;
  });
}

function G(e) {
  let {
id: t
  } = e;
  return k(t);
}

function F(e) {
  let t = {
...P
  };
  P = o().defaults(o().pick(e, [
'guildFilter',
'roleFilter',
'everyoneFilter'
  ]), P), u.K.set(O, P);
  let n = (e, n) => t[e] !== P[e] && P[e] === n,
i = n('guildFilter', R.NgX.THIS_SERVER) || n('everyoneFilter', !1) || n('roleFilter', !1);
  v = {};
  let s = [];
  i && x.forEach(e => {
let t = B(e);
null != t && (s.push(t), v[t.id] = !0);
  }), 0 === (x = s).length && (D = !1);
}

function w() {
  x = [], v = {}, D = !1, U = !1;
}

function V() {
  x = x.filter(e => !g.Z.isBlockedForMessage(e));
}

function H(e) {
  let {
channel: t
  } = e;
  x = o().filter(x, e => e.channel_id !== t.id || (delete v[e.id], !1));
}
class Y extends(i = c.ZP.Store) {
  initialize() {
this.waitFor(M.default, f.Z, C.Z, p.ZP);
  }
  isOpen() {
return j;
  }
  get hasLoadedEver() {
return D;
  }
  get lastLoaded() {
return b;
  }
  getMentions() {
return D || x.length > 0 ? x : null;
  }
  hasMention(e) {
return v[e];
  }
  get loading() {
return Z;
  }
  get hasMore() {
return L;
  }
  get guildFilter() {
return P.guildFilter;
  }
  get everyoneFilter() {
return P.everyoneFilter;
  }
  get roleFilter() {
return P.roleFilter;
  }
  get mentionsAreStale() {
return U;
  }
}
r = 'RecentMentionsStore', (a = 'displayName') in(s = Y) ? Object.defineProperty(s, a, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[a] = r, t.Z = new Y(_.Z, {
  LOAD_RECENT_MENTIONS: function(e) {
let {
  guildId: t
} = e;
Z = !0, null == t && P.guildFilter === R.NgX.THIS_SERVER && F({
  guildFilter: R.NgX.ALL_SERVERS
});
  },
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
let {
  hasMoreAfter: t,
  messages: n,
  isAfter: i
} = e, s = o().map(n, y);
i ? x = x.concat(s) : (x = s, v = {}), o().forEach(s, e => {
  v[e.id] = !0;
}), Z = !1, L = t, b = (0, d.zO)(), D = !0;
  },
  LOAD_RECENT_MENTIONS_FAILURE: function() {
Z = !1;
  },
  SET_RECENT_MENTIONS_FILTER: F,
  CLEAR_MENTIONS: function(e) {
w();
  },
  TRUNCATE_MENTIONS: function(e) {
let {
  size: t
} = e;
for (let e = t; e < x.length; ++e)
  delete v[x[e].id];
let n = x.length;
n > (x = x.slice(0, t)).length && (L = !0);
  },
  CHANNEL_SELECT: function() {
if (P.guildFilter !== R.NgX.THIS_SERVER)
  return !1;
D = !1;
  },
  CONNECTION_OPEN: w,
  GUILD_DELETE: function(e) {
let {
  guild: t
} = e;
x = o().filter(x, e => {
  let n = f.Z.getChannel(e.channel_id);
  return null != n && n.getGuildId() !== t.id || (delete v[e.id], !1);
});
  },
  MESSAGE_CREATE: function(e) {
let {
  channelId: t,
  message: n
} = e, i = M.default.getCurrentUser();
if (null == i || !(0, I.Hl)({
    rawMessage: n,
    userId: i.id,
    suppressRoles: !1,
    suppressEveryone: !1
  }))
  return !1;
let s = B(n, t);
if (null == s)
  return !1;
(x = x.slice()).unshift(s), v[s.id] = !0;
  },
  MESSAGE_UPDATE: function(e) {
let t = e.message.id;
if (null == v[String(t)])
  return !1;
let n = o().findIndex(x, e => {
    let {
      id: n
    } = e;
    return n === t;
  }),
  i = (x = x.slice())[n];
null != i && (x[n] = (0, E.wi)(i, e.message));
  },
  MESSAGE_DELETE: G,
  RECENT_MENTION_DELETE: G,
  MESSAGE_DELETE_BULK: function(e) {
let {
  ids: t
} = e;
o().forEach(t, k);
  },
  CHANNEL_DELETE: H,
  THREAD_DELETE: H,
  RELATIONSHIP_ADD: V,
  RELATIONSHIP_REMOVE: V,
  MENTION_MODAL_OPEN: function() {
j = !0;
  },
  MENTION_MODAL_CLOSE: function() {
j = !1;
  },
  SET_RECENT_MENTIONS_STALE: function(e) {
U = !0;
  }
});