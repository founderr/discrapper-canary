"use strict";
let n, s, a;
u.r(t), u.d(t, {
  default: function() {
    return v
  }
}), u("222007"), u("424973");
var l, I, r = u("866227"),
  i = u.n(r),
  E = u("446674"),
  _ = u("407846"),
  T = u("913144"),
  f = u("21121"),
  N = u("934306"),
  O = u("288518"),
  d = u("486503"),
  S = u("233069"),
  o = u("42203"),
  M = u("305961"),
  g = u("660478"),
  P = u("282109"),
  A = u("697218"),
  U = u("299039"),
  c = u("724210");
(I = l || (l = {})).DEFAULT = "DEFAULT", I.FAVORITE = "FAVORITE";
let m = new _.default(e => {
  let {
    isRequest: t,
    isFavorite: u
  } = e;
  return t ? [] : [u ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: t
  } = e;
  return -t
});

function R(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var t, u;
    let n = null !== (u = null !== (t = g.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== u ? u : e.id,
      s = e.isMessageRequestTimestamp;
    if (null != s) {
      let e = i(s).valueOf(),
        t = U.default.fromTimestamp(e);
      return U.default.compare(n, t) > 0 ? n : t
    }
    return n
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: P.default.isMessagesFavorite(e.id) && (0, f.isInMainTabsExperiment)(),
    isRequest: O.default.isMessageRequest(e.id) || d.default.isSpam(e.id)
  }
}

function D() {
  m.clear(), Object.values(o.default.getMutablePrivateChannels()).forEach(e => {
    m.set(e.id, R(e))
  }), (0, f.isInMainTabsExperiment)() && (0, N.isSplitMessagesTab)() && P.default.getAddedToMessages().forEach(e => {
    let t = o.default.getChannel(e);
    null != t && (0, S.isGuildTextChannelType)(t.type) && m.set(t.id, R(t))
  })
}

function V() {
  let e = o.default.getMutablePrivateChannels();
  for (let t in e) m.set(t, R(e[t]))
}
let h = (n = [], s = [], a = [], () => {
  let e = m.values("FAVORITE"),
    t = m.values("DEFAULT");
  return (n !== e || s !== t) && (a = [], e.forEach(e => {
    let {
      channelId: t
    } = e;
    return a.push(t)
  }), n = e, t.forEach(e => {
    let {
      channelId: t
    } = e;
    return a.push(t)
  }), s = t), a
});
class p extends E.default.Store {
  initialize() {
    this.waitFor(o.default, M.default, A.default, O.default, P.default), this.syncWith([P.default, O.default], D)
  }
  getPrivateChannelIds() {
    return h()
  }
  getSortedChannels() {
    return [m.values("FAVORITE"), m.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return m.values().forEach(t => {
      let {
        channelId: u,
        lastMessageId: n
      } = t;
      e[u] = n
    }), e
  }
}
p.displayName = "PrivateChannelSortStore";
var v = new p(T.default, {
  CONNECTION_OPEN: D,
  CONNECTION_OPEN_SUPPLEMENTAL: D,
  OVERLAY_INITIALIZE: D,
  CACHE_LOADED: V,
  CACHE_LOADED_LAZY: V,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, S.isPrivate)(e.type) || m.has(e.id)) && m.set(e.id, R(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, S.isPrivate)(t.type) || t.id === c.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    m.set(t.id, R(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return m.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: u
    } = e;
    if (!m.has(t)) return !1;
    let n = o.default.getChannel(t);
    return null != n && m.set(t, R(n, u.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return m.delete(t)
  }
})