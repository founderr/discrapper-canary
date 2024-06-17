"use strict";
let l, a, s;
n.r(t), n("47120"), n("653041");
var i, u, r, d, o, I, c = n("913527"),
  E = n.n(c),
  f = n("442837"),
  _ = n("759174"),
  N = n("570140"),
  T = n("57132"),
  S = n("781157"),
  O = n("355298"),
  h = n("333984"),
  m = n("131704"),
  v = n("592125"),
  g = n("430824"),
  M = n("306680"),
  C = n("9156"),
  R = n("594174"),
  A = n("709054"),
  P = n("176505");
(r = i || (i = {})).DEFAULT = "DEFAULT", r.FAVORITE = "FAVORITE";
let p = new _.SecondaryIndexMap(e => {
  let {
    isRequest: t,
    isFavorite: n
  } = e;
  return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: t
  } = e;
  return -t
});

function U(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var t, n;
    let l = null !== (n = null !== (t = M.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
      a = e.isMessageRequestTimestamp;
    if (null != a) {
      let e = E()(a).valueOf(),
        t = A.default.fromTimestamp(e);
      return A.default.compare(l, t) > 0 ? l : t
    }
    return l
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: C.default.isMessagesFavorite(e.id) && (0, T.isInMainTabsExperiment)(),
    isRequest: O.default.isMessageRequest(e.id) || h.default.isSpam(e.id)
  }
}

function V() {
  p.clear(), Object.values(v.default.getMutablePrivateChannels()).forEach(e => {
    p.set(e.id, U(e))
  }), (0, T.isInMainTabsExperiment)() && (0, S.isSplitMessagesTab)() && C.default.getAddedToMessages().forEach(e => {
    let t = v.default.getChannel(e);
    null != t && (0, m.isGuildTextChannelType)(t.type) && p.set(t.id, U(t))
  })
}

function D() {
  let e = v.default.getMutablePrivateChannels();
  for (let t in e) p.set(t, U(e[t]))
}
let x = (l = [], a = [], s = [], () => {
  let e = p.values("FAVORITE"),
    t = p.values("DEFAULT");
  return (l !== e || a !== t) && (s = [], e.forEach(e => {
    let {
      channelId: t
    } = e;
    return s.push(t)
  }), l = e, t.forEach(e => {
    let {
      channelId: t
    } = e;
    return s.push(t)
  }), a = t), s
});
class L extends(u = f.default.Store) {
  initialize() {
    this.waitFor(v.default, g.default, R.default, O.default, C.default), this.syncWith([C.default, O.default], V)
  }
  getPrivateChannelIds() {
    return x()
  }
  getSortedChannels() {
    return [p.values("FAVORITE"), p.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return p.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: l
      } = t;
      e[n] = l
    }), e
  }
}
I = "PrivateChannelSortStore", (o = "displayName") in(d = L) ? Object.defineProperty(d, o, {
  value: I,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[o] = I, t.default = new L(N.default, {
  CONNECTION_OPEN: V,
  CONNECTION_OPEN_SUPPLEMENTAL: V,
  OVERLAY_INITIALIZE: V,
  CACHE_LOADED: D,
  CACHE_LOADED_LAZY: D,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, m.isPrivate)(e.type) || p.has(e.id)) && p.set(e.id, U(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, m.isPrivate)(t.type) || t.id === P.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    p.set(t.id, U(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return p.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e;
    if (!p.has(t)) return !1;
    let l = v.default.getChannel(t);
    return null != l && p.set(t, U(l, n.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return p.delete(t)
  },
  LOGOUT: function() {
    p.clear()
  }
})