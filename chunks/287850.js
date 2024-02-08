"use strict";
let l, a, i;
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007"), n("424973");
var s, u, r = n("866227"),
  d = n.n(r),
  o = n("446674"),
  c = n("407846"),
  E = n("913144"),
  f = n("21121"),
  h = n("934306"),
  T = n("288518"),
  C = n("486503"),
  I = n("233069"),
  v = n("42203"),
  A = n("305961"),
  N = n("660478"),
  p = n("282109"),
  m = n("697218"),
  _ = n("299039"),
  g = n("724210");
(u = s || (s = {})).DEFAULT = "DEFAULT", u.FAVORITE = "FAVORITE";
let D = new c.default(e => {
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

function L(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var t, n;
    let l = null !== (n = null !== (t = N.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
      a = e.isMessageRequestTimestamp;
    if (null != a) {
      let e = d(a).valueOf(),
        t = _.default.fromTimestamp(e);
      return _.default.compare(l, t) > 0 ? l : t
    }
    return l
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: p.default.isMessagesFavorite(e.id) && (0, f.isInMainTabsExperiment)(),
    isRequest: T.default.isMessageRequest(e.id) || C.default.isSpam(e.id)
  }
}

function M() {
  D.clear(), Object.values(v.default.getMutablePrivateChannels()).forEach(e => {
    D.set(e.id, L(e))
  }), (0, f.isInMainTabsExperiment)() && (0, h.isSplitMessagesTab)() && p.default.getAddedToMessages().forEach(e => {
    let t = v.default.getChannel(e);
    null != t && (0, I.isGuildTextChannelType)(t.type) && D.set(t.id, L(t))
  })
}

function U() {
  let e = v.default.getMutablePrivateChannels();
  for (let t in e) D.set(t, L(e[t]))
}
let S = (l = [], a = [], i = [], () => {
  let e = D.values("FAVORITE"),
    t = D.values("DEFAULT");
  return (l !== e || a !== t) && (i = [], e.forEach(e => {
    let {
      channelId: t
    } = e;
    return i.push(t)
  }), l = e, t.forEach(e => {
    let {
      channelId: t
    } = e;
    return i.push(t)
  }), a = t), i
});
class O extends o.default.Store {
  initialize() {
    this.waitFor(v.default, A.default, m.default, T.default, p.default), this.syncWith([p.default, T.default], M)
  }
  getPrivateChannelIds() {
    return S()
  }
  getSortedChannels() {
    return [D.values("FAVORITE"), D.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return D.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: l
      } = t;
      e[n] = l
    }), e
  }
}
O.displayName = "PrivateChannelSortStore";
var R = new O(E.default, {
  CONNECTION_OPEN: M,
  CONNECTION_OPEN_SUPPLEMENTAL: M,
  OVERLAY_INITIALIZE: M,
  CACHE_LOADED: U,
  CACHE_LOADED_LAZY: U,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, I.isPrivate)(e.type) || D.has(e.id)) && D.set(e.id, L(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, I.isPrivate)(t.type) || t.id === g.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    D.set(t.id, L(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return D.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e;
    if (!D.has(t)) return !1;
    let l = v.default.getChannel(t);
    return null != l && D.set(t, L(l, n.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return D.delete(t)
  }
})