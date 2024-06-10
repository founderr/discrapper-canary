"use strict";
n.r(t), n("653041"), n("47120"), n("724458");
var a, s, l, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("570140"),
  c = n("592125");
n("914010");
var f = n("709054"),
  E = n("176505");
let h = {},
  C = {},
  _ = {},
  m = {};

function S(e) {
  let t = C[e];
  if (null == t) return;
  let n = f.default.fromTimestamp(Date.now() - 9e5),
    a = o().findIndex(t, e => f.default.compare(e.id, n) > 0);
  if (-1 === a) C[e] = [];
  else {
    let n = Math.max(a, t.length - 26);
    C[e] = o().slice(t, n)
  }
  _[e] = Date.now()
}

function p(e, t, n, a) {
  h[e].add(t);
  let s = _[t];
  (null == s || s + 3e5 > Date.now()) && S(t), null == C[t] && (C[t] = []), C[t].push({
    id: n,
    userId: a
  })
}

function I(e) {
  let {
    channel: t
  } = e;
  delete C[t.id], delete _[t.id]
}
class g extends(a = u.default.Store) {
  getActiveChannelsFetchStatus(e) {
    return m[e]
  }
  getActiveChannelIds(e) {
    return h[e]
  }
  getChannelMessageData(e) {
    return C[e]
  }
  shouldFetch(e) {
    var t;
    return null == h[e] && !(null === (t = m[e]) || void 0 === t ? void 0 : t.loading)
  }
}
i = "ActiveChannelsStore", (l = "displayName") in(s = g) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, new g(d.default, {
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (!(0, E.isGuildHomeChannel)(t) || null == n) return !1;
    let a = h[n];
    if (null == a) return !1;
    a.forEach(e => {
      var t;
      S(e), (null === (t = C[e]) || void 0 === t ? void 0 : t.length) === 0 && delete C[e]
    });
    let s = o().chain(Array.from(a)).filter(e => e in C).sortBy(e => {
      var t, n;
      return -(null !== (n = null === (t = C[e]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0)
    }).value();
    h[n] = new Set(s)
  },
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: a,
      optimistic: s,
      isPushNotification: l
    } = e;
    if (s || l) return !1;
    let i = c.default.getChannel(n);
    if (null == i) return !1;
    let r = i.guild_id;
    if (null == r || null == h[r]) return !1;
    p(r, n, a.id, null === (t = a.author) || void 0 === t ? void 0 : t.id)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete h[t.id]
  },
  CHANNEL_DELETE: I,
  THREAD_DELETE: I,
  ACTIVE_CHANNELS_FETCH_START: function(e) {
    let {
      guildId: t
    } = e;
    m[t] = {
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
    m[t] = {
      loading: !1,
      error: null,
      fetchedAt: Date.now()
    }, h[t] = new Set, n.forEach(e => {
      let {
        channel_id: n,
        messages: a
      } = e;
      a.forEach(e => {
        p(t, n, e.message_id, e.user_id)
      })
    })
  },
  ACTIVE_CHANNELS_FETCH_FAILURE: function(e) {
    let {
      guildId: t,
      error: n
    } = e;
    m[t] = {
      loading: !1,
      error: n,
      fetchedAt: null
    }
  },
  CONNECTION_OPEN: function() {}
})