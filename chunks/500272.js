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
  c = n(981631);

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class E extends i.Z {
  constructor(...e) {
    super(...e), d(this, "previousVoiceChannelId", void 0), d(this, "actions", {
      VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e),
      GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
      LOGOUT: () => this.handleLogout()
    }), d(this, "handleVoiceChannelSelect", e => {
      let {
        channelId: t,
        guildId: n
      } = e, {
        enableHangStatus: i,
        setDefaultStatus: s
      } = u.n.getCurrentConfig({
        guildId: null != n ? n : c.lds,
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
      if (null == a || a.type !== c.d4z.GUILD_VOICE || !(0, r.w)(a, !0) || null != _.Z.getCurrentHangStatus()) return;
      let d = _.Z.getCurrentDefaultStatus();
      if ((null == d ? void 0 : d.expiresAt) != null && (null == d ? void 0 : d.expiresAt) >= Date.now()) {
        if (d.status === c.tNA.CUSTOM && null != d.customHangStatus) {
          let {
            status: e,
            emoji: t
          } = d.customHangStatus;
          (0, l._s)(e, t);
          return
        }
        if (null == d.status) return;
        else {
          (0, l.Zx)(d.status);
          return
        }
      }
      s && (0, l.Zx)(c.tNA.CHILLING)
    }), d(this, "handleGuildMemberUpdate", e => {
      let {
        user: t,
        guildId: n
      } = e;
      if (t.id !== s.default.getId()) return;
      let i = a.Z.getCurrentClientVoiceChannelId(n);
      if (null == i || null == _.Z.getCurrentHangStatus()) return;
      let u = o.Z.getChannel(i);
      !(0, r.w)(u, !0) && (0, l.Sc)()
    }), d(this, "handleDisconnectFromVoiceChannel", () => {
      (0, l.Sc)()
    }), d(this, "handleLogout", () => {
      this.handleDisconnectFromVoiceChannel()
    })
  }
}
t.Z = new E