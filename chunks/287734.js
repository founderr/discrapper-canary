"use strict";
n.r(t);
var i = n(570140),
  r = n(254238),
  s = n(258609);
n(473241);
var o = n(788983),
  a = n(703656),
  l = n(700615),
  u = n(592125),
  _ = n(731290),
  c = n(131951),
  d = n(944486),
  E = n(914010),
  I = n(594174),
  T = n(934415),
  h = n(604151),
  f = n(981631);
t.default = {
  selectChannel(e) {
    let {
      guildId: t,
      channelId: n,
      messageId: r,
      jumpType: s,
      preserveDrawerState: o,
      source: a
    } = e;
    i.Z.dispatch({
      type: "CHANNEL_SELECT",
      guildId: t === f.ME ? null : t,
      channelId: n,
      messageId: r,
      jumpType: s,
      preserveDrawerState: o,
      source: a
    })
  },
  selectPrivateChannel(e) {
    (0, a.uL)(f.Z5c.CHANNEL(f.ME, e))
  },
  selectVoiceChannel(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      r = u.Z.getChannel(e),
      s = null == r ? void 0 : r.getGuildId();
    if ((null == r ? void 0 : r.isGuildVocal()) && (null == r ? void 0 : r.isNSFW()) && (!(null === (t = I.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed) || !_.Z.didAgree(s))) {
      (0, a.uL)(f.Z5c.CHANNEL(s, e));
      return
    }
    c.Z.isSupported() && (null != e && c.Z.getMediaEngine().interact(), (0, h.h)(e, s, n, i))
  },
  disconnect() {
    let e = s.Z.getRemoteSessionId();
    if (null != e && r._(e), (0, l.ur)()) this.selectVoiceChannel(null);
    else {
      let e = u.Z.getChannel(d.Z.getChannelId()),
        t = d.Z.getChannelId() === d.Z.getVoiceChannelId() && (null == e ? void 0 : e.isThread()) === !0;
      if (this.selectVoiceChannel(null), o.xv(f.KJ3.CHANNEL_CALL_POPOUT), t) {
        let e = E.Z.getGuildId();
        null != e && (0, a.uL)((0, T.LY)(e))
      }
    }
  }
}