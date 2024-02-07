"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007"), n("808653");
var l = n("917351"),
  i = n.n(l),
  a = n("446674"),
  s = n("913144"),
  r = n("990766"),
  o = n("374014"),
  u = n("706530");
let d = {},
  c = {},
  f = new Set;

function p() {
  d = {}, c = {}
}
class m extends a.default.Store {
  getPreviewURL(e, t, n) {
    let l = (0, o.encodeStreamKey)({
        streamType: null != e ? u.StreamTypes.GUILD : u.StreamTypes.CALL,
        guildId: e,
        channelId: t,
        ownerId: n
      }),
      i = d[l];
    return null == i || Date.now() > i.expires ? (!f.has(l) && (f.add(l), Promise.resolve().then(() => {
      (0, r.fetchStreamPreview)(e, t, n)
    })), null) : i.url
  }
  getPreviewURLForStreamKey(e) {
    let {
      guildId: t,
      channelId: n,
      ownerId: l
    } = (0, o.decodeStreamKey)(e);
    return this.getPreviewURL(t, n, l)
  }
  getIsPreviewLoading(e, t, n) {
    let l = (0, o.encodeStreamKey)({
      streamType: null != e ? u.StreamTypes.GUILD : u.StreamTypes.CALL,
      guildId: e,
      channelId: t,
      ownerId: n
    });
    return f.has(l)
  }
}
m.displayName = "ApplicationStreamPreviewStore";
var h = new m(s.default, {
  CONNECTION_OPEN: p,
  LOGOUT: p,
  STREAM_PREVIEW_FETCH_START: function(e) {
    var t;
    let {
      streamKey: n
    } = e;
    c[n] = (null !== (t = c[n]) && void 0 !== t ? t : 0) + 1, f.add(n)
  },
  STREAM_PREVIEW_FETCH_SUCCESS: function(e) {
    let {
      streamKey: t,
      previewURL: n
    } = e;
    d[t] = {
      url: n,
      expires: Date.now() + 12e4
    }, c[t] = 0, f.delete(t)
  },
  STREAM_PREVIEW_FETCH_FAIL: function(e) {
    let {
      streamKey: t,
      retryAfter: n
    } = e;
    d[t] = {
      url: null,
      expires: Date.now() + (null != n ? n : 1e4 * c[t])
    }, f.delete(t)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return !(i.isEmpty(d) && i.isEmpty(c)) && t.reduce((e, t) => {
      let {
        userId: n,
        guildId: l,
        channelId: i,
        selfStream: a
      } = t;
      if (a) return e;
      let s = (0, o.encodeStreamKey)({
        streamType: null != l ? u.StreamTypes.GUILD : u.StreamTypes.CALL,
        guildId: l,
        channelId: i,
        ownerId: n
      });
      return delete d[s], delete c[s], !0
    }, !1)
  }
})