n(653041), n(47120), n(724458);
var s, i, l, a, r = n(392711),
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
  T = {};

function g(e) {
  let t = I[e];
  if (null == t) return;
  let n = E.default.fromTimestamp(Date.now() - 9e5),
    s = o().findIndex(t, e => E.default.compare(e.id, n) > 0);
  if (-1 === s) I[e] = [];
  else {
    let n = Math.max(s, t.length - 26);
    I[e] = o().slice(t, n)
  }
  m[e] = Date.now()
}

function p(e, t, n, s) {
  _[e].add(t);
  let i = m[t];
  (null == i || i + 3e5 > Date.now()) && g(t), null == I[t] && (I[t] = []), I[t].push({
    id: n,
    userId: s
  })
}

function N(e) {
  let {
    channel: t
  } = e;
  delete I[t.id], delete m[t.id]
}
class S extends(s = c.ZP.Store) {
  getActiveChannelsFetchStatus(e) {
    return T[e]
  }
  getActiveChannelIds(e) {
    return _[e]
  }
  getChannelMessageData(e) {
    return I[e]
  }
  shouldFetch(e) {
    var t;
    return null == _[e] && !(null === (t = T[e]) || void 0 === t ? void 0 : t.loading)
  }
}
a = "ActiveChannelsStore", (l = "displayName") in(i = S) ? Object.defineProperty(i, l, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[l] = a, new S(u.Z, {
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    if (!(0, h.ME)(t) || null == n) return !1;
    let s = _[n];
    if (null == s) return !1;
    s.forEach(e => {
      var t;
      g(e), (null === (t = I[e]) || void 0 === t ? void 0 : t.length) === 0 && delete I[e]
    });
    let i = o().chain(Array.from(s)).filter(e => e in I).sortBy(e => {
      var t, n;
      return -(null !== (n = null === (t = I[e]) || void 0 === t ? void 0 : t.length) && void 0 !== n ? n : 0)
    }).value();
    _[n] = new Set(i)
  },
  MESSAGE_CREATE: function(e) {
    var t;
    let {
      channelId: n,
      message: s,
      optimistic: i,
      isPushNotification: l
    } = e;
    if (i || l) return !1;
    let a = d.Z.getChannel(n);
    if (null == a) return !1;
    let r = a.guild_id;
    if (null == r || null == _[r]) return !1;
    p(r, n, s.id, null === (t = s.author) || void 0 === t ? void 0 : t.id)
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
    T[t] = {
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
    T[t] = {
      loading: !1,
      error: null,
      fetchedAt: Date.now()
    }, _[t] = new Set, n.forEach(e => {
      let {
        channel_id: n,
        messages: s
      } = e;
      s.forEach(e => {
        p(t, n, e.message_id, e.user_id)
      })
    })
  },
  ACTIVE_CHANNELS_FETCH_FAILURE: function(e) {
    let {
      guildId: t,
      error: n
    } = e;
    T[t] = {
      loading: !1,
      error: n,
      fetchedAt: null
    }
  },
  CONNECTION_OPEN: function() {}
})