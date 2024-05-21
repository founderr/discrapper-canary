"use strict";
n.r(t), n("47120"), n("724458");
var i, r, a, s, o = n("392711"),
  l = n.n(o),
  u = n("442837"),
  d = n("570140"),
  _ = n("872810"),
  c = n("569545"),
  E = n("70722");
let I = {},
  T = {},
  f = new Set;

function S() {
  I = {}, T = {}
}
class h extends(i = u.default.Store) {
  getPreviewURL(e, t, n) {
    let i = (0, c.encodeStreamKey)({
        streamType: null != e ? E.StreamTypes.GUILD : E.StreamTypes.CALL,
        guildId: e,
        channelId: t,
        ownerId: n
      }),
      r = I[i];
    return null == r || Date.now() > r.expires ? (!f.has(i) && (f.add(i), Promise.resolve().then(() => {
      (0, _.fetchStreamPreview)(e, t, n)
    })), null) : r.url
  }
  getPreviewURLForStreamKey(e) {
    let {
      guildId: t,
      channelId: n,
      ownerId: i
    } = (0, c.decodeStreamKey)(e);
    return this.getPreviewURL(t, n, i)
  }
  getIsPreviewLoading(e, t, n) {
    let i = (0, c.encodeStreamKey)({
      streamType: null != e ? E.StreamTypes.GUILD : E.StreamTypes.CALL,
      guildId: e,
      channelId: t,
      ownerId: n
    });
    return f.has(i)
  }
}
s = "ApplicationStreamPreviewStore", (a = "displayName") in(r = h) ? Object.defineProperty(r, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[a] = s, t.default = new h(d.default, {
  CONNECTION_OPEN: S,
  LOGOUT: S,
  STREAM_PREVIEW_FETCH_START: function(e) {
    var t;
    let {
      streamKey: n
    } = e;
    T[n] = (null !== (t = T[n]) && void 0 !== t ? t : 0) + 1, f.add(n)
  },
  STREAM_PREVIEW_FETCH_SUCCESS: function(e) {
    let {
      streamKey: t,
      previewURL: n
    } = e;
    I[t] = {
      url: n,
      expires: Date.now() + 12e4
    }, T[t] = 0, f.delete(t)
  },
  STREAM_PREVIEW_FETCH_FAIL: function(e) {
    let {
      streamKey: t,
      retryAfter: n
    } = e;
    I[t] = {
      url: null,
      expires: Date.now() + (null != n ? n : 1e4 * T[t])
    }, f.delete(t)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return !(l().isEmpty(I) && l().isEmpty(T)) && t.reduce((e, t) => {
      let {
        userId: n,
        guildId: i,
        channelId: r,
        selfStream: a
      } = t;
      if (a) return e;
      let s = (0, c.encodeStreamKey)({
        streamType: null != i ? E.StreamTypes.GUILD : E.StreamTypes.CALL,
        guildId: i,
        channelId: r,
        ownerId: n
      });
      return delete I[s], delete T[s], !0
    }, !1)
  }
})