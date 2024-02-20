"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var i = n("862337"),
  a = n("913144"),
  l = n("990766"),
  s = n("373469"),
  r = n("271938"),
  o = n("42203"),
  u = n("590401"),
  d = n("18494"),
  c = n("205817"),
  f = n("718517"),
  E = n("374014"),
  h = n("49111");
let _ = new i.Timeout,
  C = new i.Timeout,
  S = 5 * f.default.Millis.SECOND,
  g = 12 * f.default.Millis.SECOND,
  T = null;

function m(e, t) {
  if (d.default.getVoiceChannelId() !== e) return !1;
  let n = o.default.getChannel(e);
  if (null == n || !n.isDM() && !n.isGuildStageVoice()) return !1;
  let i = s.default.getActiveStreamForUser(t, n.getGuildId());
  if (null != i) return !1;
  let a = s.default.getStreamForUser(t, n.getGuildId());
  if (null == a) return !1;
  let r = (0, E.encodeStreamKey)(a);
  return r !== T && (T = r, (0, l.watchStream)(a, {
    noFocus: !0
  }), !0)
}

function p(e, t) {
  let n = null != t ? t : u.default.getPreferredRegion();
  null != n && n !== u.default.getRegion(c.default.getHostname(c.default.getActiveStreamKey())) && (0, l.changeStreamRegion)(e, n)
}
var I = {
  init() {
    let e = (e, t) => {
      !c.default.getAllActiveStreamKeys().includes(e) && C.start(t ? g : S, () => {
        a.default.dispatch({
          type: "STREAM_TIMED_OUT",
          streamKey: e
        })
      })
    };
    a.default.subscribe("STREAM_WATCH", t => {
      let {
        streamKey: n
      } = t, {
        channelId: i
      } = (0, E.decodeStreamKey)(n), a = o.default.getChannel(i);
      e(n, null == a ? void 0 : a.isGuildStageVoice())
    }), a.default.subscribe("STREAM_START", t => {
      let {
        streamType: n,
        guildId: i,
        channelId: a
      } = t, l = o.default.getChannel(a);
      e((0, E.encodeStreamKey)({
        streamType: n,
        guildId: i,
        channelId: a,
        ownerId: r.default.getId()
      }), null == l ? void 0 : l.isGuildStageVoice())
    }), a.default.subscribe("STREAM_CREATE", () => {
      C.stop()
    }), a.default.subscribe("STREAM_UPDATE", () => {
      C.stop()
    }), a.default.subscribe("STREAM_DELETE", () => {
      C.stop()
    }), a.default.subscribe("STREAM_CLOSE", () => {
      _.stop(), C.stop()
    }), a.default.subscribe("VOICE_CHANNEL_SELECT", e => {
      let {
        channelId: t
      } = e;
      if (null == t) return;
      T = null;
      let n = s.default.getAllApplicationStreamsForChannel(t).filter(e => {
        let {
          ownerId: t
        } = e;
        return t !== r.default.getId()
      })[0];
      null != n && m(t, n.ownerId)
    }), a.default.subscribe("VOICE_STATE_UPDATES", e => {
      let {
        voiceStates: t
      } = e;
      t.forEach(e => {
        let {
          userId: t,
          channelId: n,
          guildId: i,
          selfStream: a
        } = e;
        if (t !== r.default.getId() && null != n) {
          if (a && m(n, t)) return;
          let e = s.default.getActiveStreamForUser(t, i);
          if (null != e && e.channelId === n && (!a && e.state !== h.ApplicationStreamStates.ENDED && _.start(18e4, () => (0, l.closeStream)((0, E.encodeStreamKey)(e), !1)), a && e.state === h.ApplicationStreamStates.ENDED)) {
            _.stop();
            let e = s.default.getStreamForUser(t, i);
            if (null == e) return;
            (0, l.watchStream)(e)
          }
        }
      })
    }), a.default.subscribe("CALL_UPDATE", e => {
      let {
        channelId: t,
        region: n
      } = e, i = s.default.getCurrentUserActiveStream();
      (null == i ? void 0 : i.channelId) === t && p((0, E.encodeStreamKey)(i), n)
    }), a.default.subscribe("CHANNEL_UPDATES", e => {
      let {
        channels: t
      } = e, n = s.default.getCurrentUserActiveStream();
      if (null != n)
        for (let e of t) n.channelId === e.id && p((0, E.encodeStreamKey)(n), e.rtcRegion)
    })
  }
}