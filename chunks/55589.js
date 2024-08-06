let r, i, s;
n(47120), n(653041);
var I, u, a, _, l, o, E = n(913527),
  S = n.n(E),
  N = n(442837),
  O = n(759174),
  f = n(570140),
  T = n(355298),
  c = n(333984),
  d = n(131704),
  m = n(592125),
  A = n(430824),
  P = n(306680),
  U = n(9156),
  h = n(594174),
  g = n(709054),
  M = n(176505);
(a = I || (I = {})).DEFAULT = 'DEFAULT', a.FAVORITE = 'FAVORITE';
let R = new O.h(e => {
  let {
isRequest: t,
isFavorite: n
  } = e;
  return t ? [] : [n ? 'FAVORITE' : 'DEFAULT'];
}, e => {
  let {
lastMessageId: t
  } = e;
  return -t;
});

function D(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
var t, n;
let r = null !== (n = null !== (t = P.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
  i = e.isMessageRequestTimestamp;
if (null != i) {
  let e = S()(i).valueOf(),
    t = g.default.fromTimestamp(e);
  return g.default.compare(r, t) > 0 ? r : t;
}
return r;
  }(e);
  return {
channelId: e.id,
lastMessageId: t,
isFavorite: !1,
isRequest: T.Z.isMessageRequest(e.id) || c.Z.isSpam(e.id)
  };
}

function p() {
  R.clear(), Object.values(m.Z.getMutablePrivateChannels()).forEach(e => {
R.set(e.id, D(e));
  });
}

function V() {
  let e = m.Z.getMutablePrivateChannels();
  for (let t in e)
R.set(t, D(e[t]));
}
let v = (r = [], i = [], s = [], () => {
  let e = R.values('FAVORITE'),
t = R.values('DEFAULT');
  return (r !== e || i !== t) && (s = [], e.forEach(e => {
let {
  channelId: t
} = e;
return s.push(t);
  }), r = e, t.forEach(e => {
let {
  channelId: t
} = e;
return s.push(t);
  }), i = t), s;
});
class y extends(u = N.ZP.Store) {
  initialize() {
this.waitFor(m.Z, A.Z, h.default, T.Z, U.ZP), this.syncWith([
  U.ZP,
  T.Z
], p);
  }
  getPrivateChannelIds() {
return v();
  }
  getSortedChannels() {
return [
  R.values('FAVORITE'),
  R.values('DEFAULT')
];
  }
  serializeForOverlay() {
let e = {};
return R.values().forEach(t => {
  let {
    channelId: n,
    lastMessageId: r
  } = t;
  e[n] = r;
}), e;
  }
}
o = 'PrivateChannelSortStore', (l = 'displayName') in(_ = y) ? Object.defineProperty(_, l, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : _[l] = o, t.Z = new y(f.Z, {
  CONNECTION_OPEN: p,
  CONNECTION_OPEN_SUPPLEMENTAL: p,
  OVERLAY_INITIALIZE: p,
  CACHE_LOADED: V,
  CACHE_LOADED_LAZY: V,
  CHANNEL_UPDATES: function(e) {
let {
  channels: t
} = e;
t.forEach(e => {
  ((0, d.hv)(e.type) || R.has(e.id)) && R.set(e.id, D(e));
});
  },
  CHANNEL_CREATE: function(e) {
let {
  channel: t
} = e;
if (!(0, d.hv)(t.type) || t.id === M.V)
  return !1;
R.set(t.id, D(t));
  },
  CHANNEL_DELETE: function(e) {
let {
  channel: t
} = e;
return R.delete(t.id);
  },
  MESSAGE_CREATE: function(e) {
let {
  channelId: t,
  message: n
} = e;
if (!R.has(t))
  return !1;
let r = m.Z.getChannel(t);
return null != r && R.set(t, D(r, n.id));
  },
  GUILD_CREATE: function(e) {
let t = e.guild.id;
return R.delete(t);
  },
  LOGOUT: function() {
R.clear();
  }
});