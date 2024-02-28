"use strict";
let s, i, l;
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007"), n("424973");
var r, a, u = n("866227"),
  o = n.n(u),
  c = n("446674"),
  d = n("407846"),
  f = n("913144"),
  h = n("21121"),
  p = n("934306"),
  v = n("288518"),
  I = n("486503"),
  _ = n("233069"),
  m = n("42203"),
  C = n("305961"),
  E = n("660478"),
  T = n("282109"),
  A = n("697218"),
  g = n("299039"),
  N = n("724210");
(a = r || (r = {})).DEFAULT = "DEFAULT", a.FAVORITE = "FAVORITE";
let R = new d.default(e => {
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

function x(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var t, n;
    let s = null !== (n = null !== (t = E.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
      i = e.isMessageRequestTimestamp;
    if (null != i) {
      let e = o(i).valueOf(),
        t = g.default.fromTimestamp(e);
      return g.default.compare(s, t) > 0 ? s : t
    }
    return s
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: T.default.isMessagesFavorite(e.id) && (0, h.isInMainTabsExperiment)(),
    isRequest: v.default.isMessageRequest(e.id) || I.default.isSpam(e.id)
  }
}

function L() {
  R.clear(), Object.values(m.default.getMutablePrivateChannels()).forEach(e => {
    R.set(e.id, x(e))
  }), (0, h.isInMainTabsExperiment)() && (0, p.isSplitMessagesTab)() && T.default.getAddedToMessages().forEach(e => {
    let t = m.default.getChannel(e);
    null != t && (0, _.isGuildTextChannelType)(t.type) && R.set(t.id, x(t))
  })
}

function S() {
  let e = m.default.getMutablePrivateChannels();
  for (let t in e) R.set(t, x(e[t]))
}
let P = (s = [], i = [], l = [], () => {
  let e = R.values("FAVORITE"),
    t = R.values("DEFAULT");
  return (s !== e || i !== t) && (l = [], e.forEach(e => {
    let {
      channelId: t
    } = e;
    return l.push(t)
  }), s = e, t.forEach(e => {
    let {
      channelId: t
    } = e;
    return l.push(t)
  }), i = t), l
});
class O extends c.default.Store {
  initialize() {
    this.waitFor(m.default, C.default, A.default, v.default, T.default), this.syncWith([T.default, v.default], L)
  }
  getPrivateChannelIds() {
    return P()
  }
  getSortedChannels() {
    return [R.values("FAVORITE"), R.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return R.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: s
      } = t;
      e[n] = s
    }), e
  }
}
O.displayName = "PrivateChannelSortStore";
var M = new O(f.default, {
  CONNECTION_OPEN: L,
  CONNECTION_OPEN_SUPPLEMENTAL: L,
  OVERLAY_INITIALIZE: L,
  CACHE_LOADED: S,
  CACHE_LOADED_LAZY: S,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, _.isPrivate)(e.type) || R.has(e.id)) && R.set(e.id, x(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, _.isPrivate)(t.type) || t.id === N.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    R.set(t.id, x(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return R.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e;
    if (!R.has(t)) return !1;
    let s = m.default.getChannel(t);
    return null != s && R.set(t, x(s, n.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return R.delete(t)
  },
  LOGOUT: function() {
    R.clear()
  }
})