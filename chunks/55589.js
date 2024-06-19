let l, i, s;
t(47120), t(653041);
var r, u, a, I, o, E, c = t(913527),
  _ = t.n(c),
  N = t(442837),
  d = t(759174),
  T = t(570140),
  S = t(57132),
  O = t(781157),
  f = t(355298),
  h = t(333984),
  m = t(131704),
  g = t(592125),
  P = t(430824),
  M = t(306680),
  v = t(9156),
  A = t(594174),
  Z = t(709054),
  C = t(176505);
(a = r || (r = {})).DEFAULT = "DEFAULT", a.FAVORITE = "FAVORITE";
let R = new d.h(e => {
  let {
    isRequest: n,
    isFavorite: t
  } = e;
  return n ? [] : [t ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: n
  } = e;
  return -n
});

function U(e) {
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var n, t;
    let l = null !== (t = null !== (n = M.ZP.lastMessageId(e.id)) && void 0 !== n ? n : e.lastMessageId) && void 0 !== t ? t : e.id,
      i = e.isMessageRequestTimestamp;
    if (null != i) {
      let e = _()(i).valueOf(),
        n = Z.default.fromTimestamp(e);
      return Z.default.compare(l, n) > 0 ? l : n
    }
    return l
  }(e);
  return {
    channelId: e.id,
    lastMessageId: n,
    isFavorite: v.ZP.isMessagesFavorite(e.id) && (0, S.cn)(),
    isRequest: f.Z.isMessageRequest(e.id) || h.Z.isSpam(e.id)
  }
}

function D() {
  R.clear(), Object.values(g.Z.getMutablePrivateChannels()).forEach(e => {
    R.set(e.id, U(e))
  }), (0, S.cn)() && (0, O.x7)() && v.ZP.getAddedToMessages().forEach(e => {
    let n = g.Z.getChannel(e);
    null != n && (0, m.zi)(n.type) && R.set(n.id, U(n))
  })
}

function V() {
  let e = g.Z.getMutablePrivateChannels();
  for (let n in e) R.set(n, U(e[n]))
}
let p = (l = [], i = [], s = [], () => {
  let e = R.values("FAVORITE"),
    n = R.values("DEFAULT");
  return (l !== e || i !== n) && (s = [], e.forEach(e => {
    let {
      channelId: n
    } = e;
    return s.push(n)
  }), l = e, n.forEach(e => {
    let {
      channelId: n
    } = e;
    return s.push(n)
  }), i = n), s
});
class x extends(u = N.ZP.Store) {
  initialize() {
    this.waitFor(g.Z, P.Z, A.default, f.Z, v.ZP), this.syncWith([v.ZP, f.Z], D)
  }
  getPrivateChannelIds() {
    return p()
  }
  getSortedChannels() {
    return [R.values("FAVORITE"), R.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return R.values().forEach(n => {
      let {
        channelId: t,
        lastMessageId: l
      } = n;
      e[t] = l
    }), e
  }
}
E = "PrivateChannelSortStore", (o = "displayName") in(I = x) ? Object.defineProperty(I, o, {
  value: E,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : I[o] = E, n.Z = new x(T.Z, {
  CONNECTION_OPEN: D,
  CONNECTION_OPEN_SUPPLEMENTAL: D,
  OVERLAY_INITIALIZE: D,
  CACHE_LOADED: V,
  CACHE_LOADED_LAZY: V,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: n
    } = e;
    n.forEach(e => {
      ((0, m.hv)(e.type) || R.has(e.id)) && R.set(e.id, U(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: n
    } = e;
    if (!(0, m.hv)(n.type) || n.id === C.V) return !1;
    R.set(n.id, U(n))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: n
    } = e;
    return R.delete(n.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: n,
      message: t
    } = e;
    if (!R.has(n)) return !1;
    let l = g.Z.getChannel(n);
    return null != l && R.set(n, U(l, t.id))
  },
  GUILD_CREATE: function(e) {
    let n = e.guild.id;
    return R.delete(n)
  },
  LOGOUT: function() {
    R.clear()
  }
})