"use strict";
n(47120);
var i = n(147913),
  r = n(362721),
  s = n(314897),
  o = n(592125),
  a = n(979651),
  l = n(906605),
  u = n(574176),
  _ = n(106301),
  c = n(866071),
  d = n(981631);

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class I extends i.Z {
  constructor(...e) {
    super(...e), E(this, "previousVoiceChannelId", void 0), E(this, "actions", {
      POST_CONNECTION_OPEN: () => this.handlePostConnectionOpen(),
      VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e),
      GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
      LOGOUT: () => this.handleLogout()
    }), E(this, "handlePostConnectionOpen", () => {
      (0, l.UP)()
    }), E(this, "handleVoiceChannelSelect", e => {
      let {
        channelId: t,
        guildId: n
      } = e, {
        enableHangStatus: i,
        setDefaultStatus: s
      } = u.n.getCurrentConfig({
        guildId: null != n ? n : d.lds,
        location: "HangStatusManager"
      }, {
        autoTrackExposure: !0
      });
      if (null == n && null == t) {
        this.handleDisconnectFromVoiceChannel(), this.previousVoiceChannelId = t;
        return
      }
      if (!i || t === this.previousVoiceChannelId) return;
      if (this.previousVoiceChannelId = t, null == n || null == t) return;
      let a = o.Z.getChannel(t);
      if (null == a || a.type !== d.d4z.GUILD_VOICE || !(0, r.w)(a, !0) || null != _.Z.getCurrentHangStatus()) return;
      let E = _.Z.getCurrentDefaultStatus();
      if ((null == E ? void 0 : E.expiresAt) != null && (null == E ? void 0 : E.expiresAt) >= Date.now()) {
        if (E.status === d.tNA.CUSTOM && null != E.customHangStatus) {
          let {
            status: e,
            emoji: t
          } = E.customHangStatus;
          if (null != t && !(0, c.K)(t, a)) return;
          (0, l._s)(e, t);
          return
        }
        if (null == E.status) return;
        else {
          (0, l.Zx)(E.status);
          return
        }
      }
      s && (0, l.Zx)(d.tNA.CHILLING)
    }), E(this, "handleGuildMemberUpdate", e => {
      let {
        user: t,
        guildId: n
      } = e;
      if (t.id !== s.default.getId()) return;
      let i = a.Z.getCurrentClientVoiceChannelId(n);
      if (null == i || null == _.Z.getCurrentHangStatus()) return;
      let u = o.Z.getChannel(i);
      !(0, r.w)(u, !0) && (0, l.Sc)()
    }), E(this, "handleDisconnectFromVoiceChannel", () => {
      (0, l.Sc)()
    }), E(this, "handleLogout", () => {
      this.handleDisconnectFromVoiceChannel()
    })
  }
}
t.Z = new I