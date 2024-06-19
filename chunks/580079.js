n(653041), n(47120), n(724458);
var i, s, l, a, r = n(392711),
  o = n.n(r),
  c = n(442837),
  u = n(570140),
  d = n(592125);
n(914010);
var E = n(709054),
  h = n(176505);
let _ = {},
  I = {},
  m = {},
  g = {};

function p(e) {
  let t = I[e];
  if (null == t) return;
  let n = E.default.fromTimestamp(Date.now() - 9e5),
    i = o().findIndex(t, e => E.default.compare(e.id, n) > 0);
  if (-1 === i) I[e] = [];
  else {
    let n = Math.max(i, t.length - 26);
    I[e] = o().slice(t, n)
  }
  m[e] = Date.now()
}

function T(e, t, n, i) {
  _[e].add(t);
  let s = m[t];
  (null == s || s + 3e5 > Date.now()) && p(t), null == I[t] && (I[t] = []), I[t].push({
    id: n,
    userId: i
  })
}

function N(e) {
  let {
    channel: t
  } = e;
  delete I[t.id], delete m[t.id]
}
class S extends(i = c.ZP.Store) {
  getActiveChannelsFetchStatus(e) {
    return g[e]
  }
  getActiveChannelIds(e) {
    return _[e]
  }
  getChannelMessageData(e) {
    return I[e]
  }
  shouldFetch(e) {
    var t;
    return null == _[e] && !(null === (t = g[e]) || void 0 === t ? void 0 : t.loading)
  }
}
a = "ActiveChannelsStore", (l = "displayName") in(s = S) ? Object.defineProperty(s, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = a, new S(u.Z, {
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (!(0, h.ME)(t) || null == n) return !1;
    let i = _[n];
    if (null == i) return !1;
    i.forEach(e => {
      var t;
      p(e), (null === (t = I[e]) || void 0 === t ? void 0 : t.length) === 0 && delete I[e]
    });
    let s = o().chain(Array.from(i)).filter(e => e in I).sortBy(e => {
      var t, n;
      return -(null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0)
    }).value();
    _[n] = new Set(s)
  },
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: i,
      optimistic: s,
      isPushNotification: l
    } = e;
    if (s || l) return !1;
    let a = d.Z.getChannel(n);
    if (null == a) return !1;
    let r = a.guild_id;
    if (null == r || null == _[r]) return !1;
    T(r, n, i.id, null === (t = i.author) || void 0 === t ? void 0 : t.id)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete _[t.id]
  },
  CHANNEL_DELETE: N,
  THREAD_DELETE: N,
  ACTIVE_CHANNELS_FETCH_START: function(e) {
    let {
      guildId: t
    } = e;
    g[t] = {
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
    g[t] = {
      loading: !1,
      error: null,
      fetchedAt: Date.now()
    }, _[t] = new Set, n.forEach(e => {
      let {
        channel_id: n,
        messages: i
      } = e;
      i.forEach(e => {
        T(t, n, e.message_id, e.user_id)
      })
    })
  },
  ACTIVE_CHANNELS_FETCH_FAILURE: function(e) {
    let {
      guildId: t,
      error: n
    } = e;
    g[t] = {
      loading: !1,
      error: n,
      fetchedAt: null
    }
  },
  CONNECTION_OPEN: function() {}
})