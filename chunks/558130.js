"use strict";
n.r(t), n.d(t, {
  MAX_STORED_MESSAGES: function() {
    return d
  },
  default: function() {
    return T
  }
}), n("424973"), n("222007"), n("808653");
var i = n("917351"),
  a = n.n(i),
  l = n("446674"),
  s = n("913144"),
  r = n("42203");
n("162771");
var o = n("299039"),
  u = n("724210");
let d = 26,
  c = {},
  f = {},
  E = {},
  h = {};

function _(e) {
  let t = f[e];
  if (null == t) return;
  let n = o.default.fromTimestamp(Date.now() - 9e5),
    i = a.findIndex(t, e => o.default.compare(e.id, n) > 0);
  if (-1 === i) f[e] = [];
  else {
    let n = Math.max(i, t.length - d);
    f[e] = a.slice(t, n)
  }
  E[e] = Date.now()
}

function C(e, t, n, i) {
  c[e].add(t);
  let a = E[t];
  (null == a || a + 3e5 > Date.now()) && _(t), null == f[t] && (f[t] = []), f[t].push({
    id: n,
    userId: i
  })
}

function S(e) {
  let {
    channel: t
  } = e;
  delete f[t.id], delete E[t.id]
}
class g extends l.default.Store {
  getActiveChannelsFetchStatus(e) {
    return h[e]
  }
  getActiveChannelIds(e) {
    return c[e]
  }
  getChannelMessageData(e) {
    return f[e]
  }
  shouldFetch(e) {
    var t;
    return null == c[e] && !(null === (t = h[e]) || void 0 === t ? void 0 : t.loading)
  }
}
g.displayName = "ActiveChannelsStore";
var T = new g(s.default, {
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (!(0, u.isGuildHomeChannel)(t) || null == n) return !1;
    let i = c[n];
    if (null == i) return !1;
    i.forEach(e => {
      var t;
      _(e), (null === (t = f[e]) || void 0 === t ? void 0 : t.length) === 0 && delete f[e]
    });
    let l = a.chain(Array.from(i)).filter(e => e in f).sortBy(e => {
      var t, n;
      return -(null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0)
    }).value();
    c[n] = new Set(l)
  },
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: i,
      optimistic: a,
      isPushNotification: l
    } = e;
    if (a || l) return !1;
    let s = r.default.getChannel(n);
    if (null == s) return !1;
    let o = s.guild_id;
    if (null == o || null == c[o]) return !1;
    C(o, n, i.id, null === (t = i.author) || void 0 === t ? void 0 : t.id)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete c[t.id]
  },
  CHANNEL_DELETE: S,
  THREAD_DELETE: S,
  ACTIVE_CHANNELS_FETCH_START: function(e) {
    let {
      guildId: t
    } = e;
    h[t] = {
      loading: !0,
      error: null,
      fetchedAt: Date.now()
    }
  },
  ACTIVE_CHANNELS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      channels: n
    } = e;
    h[t] = {
      loading: !1,
      error: null,
      fetchedAt: Date.now()
    }, c[t] = new Set, n.forEach(e => {
      let {
        channel_id: n,
        messages: i
      } = e;
      i.forEach(e => {
        C(t, n, e.message_id, e.user_id)
      })
    })
  },
  ACTIVE_CHANNELS_FETCH_FAILURE: function(e) {
    let {
      guildId: t,
      error: n
    } = e;
    h[t] = {
      loading: !1,
      error: n,
      fetchedAt: null
    }
  },
  CONNECTION_OPEN: function() {}
})