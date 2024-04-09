"use strict";
let n, u, i;
l.r(t), l("47120"), l("653041");
var r, a, s, d, o, f, E = l("913527"),
  c = l.n(E),
  T = l("442837"),
  I = l("759174"),
  _ = l("570140"),
  p = l("278147"),
  A = l("869735"),
  h = l("355298"),
  S = l("333984"),
  O = l("131704"),
  N = l("592125"),
  C = l("430824"),
  v = l("306680"),
  m = l("9156"),
  L = l("594174"),
  g = l("709054"),
  D = l("176505");
(s = r || (r = {})).DEFAULT = "DEFAULT", s.FAVORITE = "FAVORITE";
let y = new I.SecondaryIndexMap(e => {
  let {
    isRequest: t,
    isFavorite: l
  } = e;
  return t ? [] : [l ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: t
  } = e;
  return -t
});

function P(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var t, l;
    let n = null !== (l = null !== (t = v.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== l ? l : e.id,
      u = e.isMessageRequestTimestamp;
    if (null != u) {
      let e = c()(u).valueOf(),
        t = g.default.fromTimestamp(e);
      return g.default.compare(n, t) > 0 ? n : t
    }
    return n
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: m.default.isMessagesFavorite(e.id) && (0, p.isInMainTabsExperiment)(),
    isRequest: h.default.isMessageRequest(e.id) || S.default.isSpam(e.id)
  }
}

function R() {
  y.clear(), Object.values(N.default.getMutablePrivateChannels()).forEach(e => {
    y.set(e.id, P(e))
  }), (0, p.isInMainTabsExperiment)() && (0, A.isSplitMessagesTab)() && m.default.getAddedToMessages().forEach(e => {
    let t = N.default.getChannel(e);
    null != t && (0, O.isGuildTextChannelType)(t.type) && y.set(t.id, P(t))
  })
}

function F() {
  let e = N.default.getMutablePrivateChannels();
  for (let t in e) y.set(t, P(e[t]))
}
let M = (n = [], u = [], i = [], () => {
  let e = y.values("FAVORITE"),
    t = y.values("DEFAULT");
  return (n !== e || u !== t) && (i = [], e.forEach(e => {
    let {
      channelId: t
    } = e;
    return i.push(t)
  }), n = e, t.forEach(e => {
    let {
      channelId: t
    } = e;
    return i.push(t)
  }), u = t), i
});
class U extends(a = T.default.Store) {
  initialize() {
    this.waitFor(N.default, C.default, L.default, h.default, m.default), this.syncWith([m.default, h.default], R)
  }
  getPrivateChannelIds() {
    return M()
  }
  getSortedChannels() {
    return [y.values("FAVORITE"), y.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return y.values().forEach(t => {
      let {
        channelId: l,
        lastMessageId: n
      } = t;
      e[l] = n
    }), e
  }
}
f = "PrivateChannelSortStore", (o = "displayName") in(d = U) ? Object.defineProperty(d, o, {
  value: f,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[o] = f, t.default = new U(_.default, {
  CONNECTION_OPEN: R,
  CONNECTION_OPEN_SUPPLEMENTAL: R,
  OVERLAY_INITIALIZE: R,
  CACHE_LOADED: F,
  CACHE_LOADED_LAZY: F,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, O.isPrivate)(e.type) || y.has(e.id)) && y.set(e.id, P(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, O.isPrivate)(t.type) || t.id === D.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    y.set(t.id, P(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return y.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: l
    } = e;
    if (!y.has(t)) return !1;
    let n = N.default.getChannel(t);
    return null != n && y.set(t, P(n, l.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return y.delete(t)
  },
  LOGOUT: function() {
    y.clear()
  }
})