"use strict";
n(47120), n(411104), n(653041), n(998459);
var i, r = n(348327),
  s = n.n(r),
  o = n(442837),
  a = n(544891),
  l = n(570140),
  u = n(457330),
  _ = n(726542),
  c = n(81063),
  d = n(70956),
  E = n(553795),
  I = n(246946),
  T = n(981631);

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = 1 * d.Z.Millis.MINUTE,
  S = e => "https://youtube.com/watch?v=".concat(e),
  A = 5 * d.Z.Millis.MINUTE,
  N = /live_user_(.*)-\{width\}/,
  m = null,
  O = 0,
  p = null,
  R = new Set,
  g = {};

function C(e, t, n) {
  return a.tn.get({
    url: "".concat("https://api.twitch.tv/helix").concat(e),
    query: t,
    headers: {
      "Client-ID": "33kozedd0zs6fbauka98psnc7zwom2s",
      Authorization: "Bearer ".concat(n)
    }
  })
}
async function v(e, t) {
  let n = g[e];
  if (null != n) return n;
  let {
    body: {
      data: i
    }
  } = await C("/games", {
    id: e
  }, t), r = i[0].name;
  return g[e] = r, r
}
let L = new class e {
  start() {
    !this._started && (this._started = !0, E.Z.isFetching() ? u.Z.fetch() : this._check())
  }
  stop() {
    this._started = !1, p = null, O = 0, null != this._nextCheck && clearTimeout(this._nextCheck), l.Z.dispatch({
      type: "STREAMING_UPDATE",
      stream: null
    })
  }
  async _checkTwitch(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (e.revoked || null == (t = null != t ? t : e.accessToken)) return null;
    try {
      var n, i, r, s, o;
      let {
        body: {
          data: a
        }
      } = await C("/streams", {
        user_id: e.id,
        first: 1
      }, t), l = a[0];
      if (null == l || "live" !== l.type) throw Error("no stream");
      let {
        thumbnail_url: u,
        game_id: d,
        title: E
      } = l, I = {
        large_image: null != u && null !== (i = (0, c.getAssetFromImageURL)(T.ABu.TWITCH, u)) && void 0 !== i ? i : void 0
      }, h = await v(d, t), f = _.Z.get(T.ABu.TWITCH);
      let S = null !== (s = u, r = null === (o = N.exec(s)) || void 0 === o ? void 0 : o[1]) && void 0 !== r ? r : e.name;
      return {
        url: null === (n = f.getPlatformUserUrl) || void 0 === n ? void 0 : n.call(f, {
          id: e.id,
          name: S
        }),
        name: f.name,
        assets: I,
        details: E,
        state: h
      }
    } catch (n) {
      if (401 === n.status && null == t) return u.Z.refreshAccessToken(e.type, e.id).then(t => this._checkTwitch(e, t)).catch(() => null);
      return null
    }
  }
  async _checkYouTube(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    if (p = null, e.revoked || R.has(e.id)) return null;
    try {
      var n;
      let {
        body: {
          items: i
        }
      } = await a.tn.get({
        url: "https://www.googleapis.com/youtube/v3/liveBroadcasts",
        query: {
          part: "id,snippet",
          broadcastStatus: "active",
          broadcastType: "all"
        },
        headers: {
          Authorization: "Bearer ".concat(null != t ? t : e.accessToken)
        },
        oldFormErrors: !0
      });
      if (i.length < 1) throw Error("no stream");
      let {
        id: r,
        snippet: {
          title: s,
          thumbnails: o
        }
      } = i[0], l = {
        large_image: null !== (n = (0, c.getAssetFromImageURL)(T.ABu.YOUTUBE, o.high.url)) && void 0 !== n ? n : void 0
      };
      return p = {
        url: S(r),
        name: _.Z.get(T.ABu.YOUTUBE).name,
        details: s,
        assets: l
      }
    } catch (n) {
      if (401 === n.status && null == t) return u.Z.refreshAccessToken(e.type, e.id).then(t => this._checkYouTube(e, t)).catch(() => null);
      return 403 === n.status && R.add(e.id), null
    }
  }
  _check() {
    if (!this._started) return;
    let e = E.Z.getAccounts();
    if (null == e) return;
    null != this._nextCheck && clearTimeout(this._nextCheck);
    let t = [T.ABu.TWITCH],
      n = Date.now();
    O <= n && (t.push(T.ABu.YOUTUBE), O = n + A), Promise.allSettled(e.filter(e => t.includes(e.type)).map(e => e.type === T.ABu.TWITCH ? this._checkTwitch(e) : this._checkYouTube(e))).then(e => {
      if (this._started) {
        var t;
        let n = null === (t = e.find(e => "fulfilled" === e.status && null != e.value)) || void 0 === t ? void 0 : t.value;
        null == n && null != p && (n = p), l.Z.dispatch({
          type: "STREAMING_UPDATE",
          stream: n
        })
      }
      this._scheduleCheck()
    })
  }
  _scheduleCheck() {
    this._started && (this._nextCheck = setTimeout(() => this._check(), f))
  }
  constructor() {
    h(this, "_nextCheck", void 0), h(this, "_started", void 0), this._started = !1
  }
};

function D() {
  I.Z.enabled ? L.start() : L.stop()
}
class M extends(i = o.ZP.Store) {
  initialize() {
    D(), this.waitFor(E.Z), this.syncWith([I.Z], D)
  }
  getStream() {
    return m
  }
}
h(M, "displayName", "ExternalStreamingStore"), t.Z = new M(l.Z, {
  STREAMING_UPDATE: function(e) {
    var t;
    if (s()(e.stream, m)) return !1;
    m = null !== (t = e.stream) && void 0 !== t ? t : null
  },
  USER_CONNECTIONS_UPDATE: () => L._check()
})