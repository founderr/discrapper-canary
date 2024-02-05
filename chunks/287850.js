"use strict";
let E, n, l;
t.r(e), t.d(e, {
  default: function() {
    return y
  }
}), t("222007"), t("424973");
var C, F, i = t("866227"),
  u = t.n(i),
  a = t("446674"),
  r = t("407846"),
  o = t("913144"),
  D = t("21121"),
  d = t("934306"),
  s = t("288518"),
  A = t("486503"),
  c = t("233069"),
  f = t("42203"),
  _ = t("305961"),
  N = t("660478"),
  T = t("282109"),
  h = t("697218"),
  m = t("299039"),
  v = t("724210");
(F = C || (C = {})).DEFAULT = "DEFAULT", F.FAVORITE = "FAVORITE";
let I = new r.default(B => {
  let {
    isRequest: e,
    isFavorite: t
  } = B;
  return e ? [] : [t ? "FAVORITE" : "DEFAULT"]
}, B => {
  let {
    lastMessageId: e
  } = B;
  return -e
});

function S(B) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(B) {
    var e, t;
    let E = null !== (t = null !== (e = N.default.lastMessageId(B.id)) && void 0 !== e ? e : B.lastMessageId) && void 0 !== t ? t : B.id,
      n = B.isMessageRequestTimestamp;
    if (null != n) {
      let B = u(n).valueOf(),
        e = m.default.fromTimestamp(B);
      return m.default.compare(E, e) > 0 ? E : e
    }
    return E
  }(B);
  return {
    channelId: B.id,
    lastMessageId: e,
    isFavorite: T.default.isMessagesFavorite(B.id) && (0, D.isInMainTabsExperiment)(),
    isRequest: s.default.isMessageRequest(B.id) || A.default.isSpam(B.id)
  }
}

function p() {
  I.clear(), Object.values(f.default.getMutablePrivateChannels()).forEach(B => {
    I.set(B.id, S(B))
  }), (0, D.isInMainTabsExperiment)() && (0, d.isSplitMessagesTab)() && T.default.getAddedToMessages().forEach(B => {
    let e = f.default.getChannel(B);
    null != e && (0, c.isGuildTextChannelType)(e.type) && I.set(e.id, S(e))
  })
}

function L() {
  let B = f.default.getMutablePrivateChannels();
  for (let e in B) I.set(e, S(B[e]))
}
let g = (E = [], n = [], l = [], () => {
  let B = I.values("FAVORITE"),
    e = I.values("DEFAULT");
  return (E !== B || n !== e) && (l = [], B.forEach(B => {
    let {
      channelId: e
    } = B;
    return l.push(e)
  }), E = B, e.forEach(B => {
    let {
      channelId: e
    } = B;
    return l.push(e)
  }), n = e), l
});
class O extends a.default.Store {
  initialize() {
    this.waitFor(f.default, _.default, h.default, s.default, T.default), this.syncWith([T.default, s.default], p)
  }
  getPrivateChannelIds() {
    return g()
  }
  getSortedChannels() {
    return [I.values("FAVORITE"), I.values("DEFAULT")]
  }
  serializeForOverlay() {
    let B = {};
    return I.values().forEach(e => {
      let {
        channelId: t,
        lastMessageId: E
      } = e;
      B[t] = E
    }), B
  }
}
O.displayName = "PrivateChannelSortStore";
var y = new O(o.default, {
  CONNECTION_OPEN: p,
  CONNECTION_OPEN_SUPPLEMENTAL: p,
  OVERLAY_INITIALIZE: p,
  CACHE_LOADED: L,
  CACHE_LOADED_LAZY: L,
  CHANNEL_UPDATES: function(B) {
    let {
      channels: e
    } = B;
    e.forEach(B => {
      ((0, c.isPrivate)(B.type) || I.has(B.id)) && I.set(B.id, S(B))
    })
  },
  CHANNEL_CREATE: function(B) {
    let {
      channel: e
    } = B;
    if (!(0, c.isPrivate)(e.type) || e.id === v.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    I.set(e.id, S(e))
  },
  CHANNEL_DELETE: function(B) {
    let {
      channel: e
    } = B;
    return I.delete(e.id)
  },
  MESSAGE_CREATE: function(B) {
    let {
      channelId: e,
      message: t
    } = B;
    if (!I.has(e)) return !1;
    let E = f.default.getChannel(e);
    return null != E && I.set(e, S(E, t.id))
  },
  GUILD_CREATE: function(B) {
    let e = B.guild.id;
    return I.delete(e)
  }
})