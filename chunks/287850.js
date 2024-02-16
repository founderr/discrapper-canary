"use strict";
let s, i, r;
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("222007"), n("424973");
var l, a, u = n("866227"),
  o = n.n(u),
  c = n("446674"),
  d = n("407846"),
  f = n("913144"),
  h = n("21121"),
  p = n("934306"),
  v = n("288518"),
  I = n("486503"),
  C = n("233069"),
  m = n("42203"),
  A = n("305961"),
  E = n("660478"),
  g = n("282109"),
  T = n("697218"),
  N = n("299039"),
  R = n("724210");
(a = l || (l = {})).DEFAULT = "DEFAULT", a.FAVORITE = "FAVORITE";
let _ = new d.default(e => {
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
        t = N.default.fromTimestamp(e);
      return N.default.compare(s, t) > 0 ? s : t
    }
    return s
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: g.default.isMessagesFavorite(e.id) && (0, h.isInMainTabsExperiment)(),
    isRequest: v.default.isMessageRequest(e.id) || I.default.isSpam(e.id)
  }
}

function L() {
  _.clear(), Object.values(m.default.getMutablePrivateChannels()).forEach(e => {
    _.set(e.id, x(e))
  }), (0, h.isInMainTabsExperiment)() && (0, p.isSplitMessagesTab)() && g.default.getAddedToMessages().forEach(e => {
    let t = m.default.getChannel(e);
    null != t && (0, C.isGuildTextChannelType)(t.type) && _.set(t.id, x(t))
  })
}

function S() {
  let e = m.default.getMutablePrivateChannels();
  for (let t in e) _.set(t, x(e[t]))
}
let P = (s = [], i = [], r = [], () => {
  let e = _.values("FAVORITE"),
    t = _.values("DEFAULT");
  return (s !== e || i !== t) && (r = [], e.forEach(e => {
    let {
      channelId: t
    } = e;
    return r.push(t)
  }), s = e, t.forEach(e => {
    let {
      channelId: t
    } = e;
    return r.push(t)
  }), i = t), r
});
class O extends c.default.Store {
  initialize() {
    this.waitFor(m.default, A.default, T.default, v.default, g.default), this.syncWith([g.default, v.default], L)
  }
  getPrivateChannelIds() {
    return P()
  }
  getSortedChannels() {
    return [_.values("FAVORITE"), _.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return _.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: s
      } = t;
      e[n] = s
    }), e
  }
}
O.displayName = "PrivateChannelSortStore";
var j = new O(f.default, {
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
      ((0, C.isPrivate)(e.type) || _.has(e.id)) && _.set(e.id, x(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, C.isPrivate)(t.type) || t.id === R.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    _.set(t.id, x(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return _.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e;
    if (!_.has(t)) return !1;
    let s = m.default.getChannel(t);
    return null != s && _.set(t, x(s, n.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return _.delete(t)
  },
  LOGOUT: function() {
    _.clear()
  }
})