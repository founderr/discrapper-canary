"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var i = n("37983");
n("884691");
var a = n("917351"),
  l = n("77078"),
  s = n("913144"),
  r = n("629109"),
  o = n("990766"),
  u = n("845579"),
  d = n("373469"),
  c = n("271938"),
  f = n("525065"),
  E = n("945956"),
  h = n("697218"),
  _ = n("451772"),
  C = n("374014"),
  S = n("16916"),
  g = n("706530"),
  T = n("49111");
let m = (0, a.debounce)(o.notifyStreamStart, 1e3);
var p = {
  init() {
    _.default.init(), s.default.subscribe("MEDIA_ENGINE_VIDEO_STATE_CHANGED", e => {
      let {
        videoState: t
      } = e, n = d.default.getCurrentUserActiveStream();
      if (null != n) {
        let e = t === T.MediaEngineVideoStates.PAUSED;
        (0, o.setStreamPaused)(n, e)
      }
    }), s.default.subscribe("STREAM_DELETE", e => {
      e.reason === T.ApplicationStreamDeleteReasons.STREAM_FULL && ((0, o.closeStream)(e.streamKey, !1), (0, l.openModalLazy)(async () => {
        let {
          default: e
        } = await n.el("748168").then(n.bind(n, "748168"));
        return t => (0, i.jsx)(e, {
          ...t
        })
      }))
    }), s.default.subscribe("STREAM_WATCH", e => {
      let {
        streamKey: t,
        allowMultiple: n
      } = e;
      if (n) return;
      let i = (0, C.decodeStreamKey)(t);
      d.default.getAllActiveStreams().forEach(e => {
        if (e.ownerId !== i.ownerId) e.ownerId !== c.default.getId() && (e.ownerId === c.default.getId() && r.default.setGoLiveSource(null), (0, o.closeStream)((0, C.encodeStreamKey)(e), !1))
      })
    }), s.default.subscribe("VOICE_STATE_UPDATES", e => {
      let {
        voiceStates: t
      } = e;
      t.forEach(e => {
        let {
          userId: t
        } = e;
        if (t !== c.default.getId()) return;
        let n = d.default.getAllActiveStreams(),
          i = E.default.getChannelId();
        n.forEach(e => {
          e.channelId !== i && (0, S.default)(e, !1)
        })
      })
    }), s.default.subscribe("STREAM_CREATE", e => {
      var t;
      let {
        streamKey: n
      } = e, {
        ownerId: i,
        guildId: a
      } = (0, C.decodeStreamKey)(n);
      if (null == a || null == i || i !== (null === (t = h.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return;
      let l = f.default.getMemberCount(a);
      null != l && !(l < 2) && !(l > g.STREAM_NOTIFY_GUILD_MAX_SIZE) && u.NotifyFriendsOnGoLive.getSetting() && m(n)
    })
  }
}