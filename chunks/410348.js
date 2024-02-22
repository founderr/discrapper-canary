"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("222007"), n("808653");
var l = n("917351"),
  a = n.n(l),
  s = n("446674"),
  i = n("913144"),
  r = n("990766"),
  u = n("374014"),
  o = n("706530");
let d = {},
  c = {},
  f = new Set;

function h() {
  d = {}, c = {}
}
class m extends s.default.Store {
  getPreviewURL(e, t, n) {
    let l = (0, u.encodeStreamKey)({
        streamType: null != e ? o.StreamTypes.GUILD : o.StreamTypes.CALL,
        guildId: e,
        channelId: t,
        ownerId: n
      }),
      a = d[l];
    return null == a || Date.now() > a.expires ? (!f.has(l) && (f.add(l), Promise.resolve().then(() => {
      (0, r.fetchStreamPreview)(e, t, n)
    })), null) : a.url
  }
  getPreviewURLForStreamKey(e) {
    let {
      guildId: t,
      channelId: n,
      ownerId: l
    } = (0, u.decodeStreamKey)(e);
    return this.getPreviewURL(t, n, l)
  }
  getIsPreviewLoading(e, t, n) {
    let l = (0, u.encodeStreamKey)({
      streamType: null != e ? o.StreamTypes.GUILD : o.StreamTypes.CALL,
      guildId: e,
      channelId: t,
      ownerId: n
    });
    return f.has(l)
  }
}
m.displayName = "ApplicationStreamPreviewStore";
var p = new m(i.default, {
  CONNECTION_OPEN: h,
  LOGOUT: h,
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
    return !(a.isEmpty(d) && a.isEmpty(c)) && t.reduce((e, t) => {
      let {
        userId: n,
        guildId: l,
        channelId: a,
        selfStream: s
      } = t;
      if (s) return e;
      let i = (0, u.encodeStreamKey)({
        streamType: null != l ? o.StreamTypes.GUILD : o.StreamTypes.CALL,
        guildId: l,
        channelId: a,
        ownerId: n
      });
      return delete d[i], delete c[i], !0
    }, !1)
  }
})