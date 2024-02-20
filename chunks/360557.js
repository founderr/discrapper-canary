"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var i = n("689988"),
  a = n("271938"),
  l = n("42203"),
  s = n("957255"),
  r = n("800762"),
  o = n("233965"),
  u = n("699209"),
  d = n("32346"),
  c = n("49111");
class f extends i.default {
  constructor(...e) {
    super(...e), this.actions = {
      VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e),
      GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
      LOGOUT: () => this.handleLogout()
    }, this.handleVoiceChannelSelect = e => {
      let {
        channelId: t,
        guildId: n
      } = e, {
        enableHangStatus: i,
        setDefaultStatus: a
      } = u.HangStatusExperiment.getCurrentConfig({
        guildId: null != n ? n : c.EMPTY_STRING_GUILD_ID,
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
      let r = l.default.getChannel(t);
      if (null == r || r.type !== c.ChannelTypes.GUILD_VOICE || !s.default.can(c.Permissions.SET_VOICE_CHANNEL_STATUS, r)) return;
      let f = d.default.getCurrentHangStatus();
      if (null != f) return;
      let E = d.default.getCurrentDefaultStatus();
      if ((null == E ? void 0 : E.expiresAt) != null && (null == E ? void 0 : E.expiresAt) >= Date.now()) {
        if (E.status === c.HangStatusTypes.CUSTOM && null != E.customHangStatus) {
          let {
            status: e,
            emoji: t
          } = E.customHangStatus;
          (0, o.updateCustomHangStatus)(e, t);
          return
        }
        if (null == E.status) return;
        else {
          (0, o.updateHangStatus)(E.status);
          return
        }
      }
      a && (0, o.updateHangStatus)(c.HangStatusTypes.CHILLING)
    }, this.handleGuildMemberUpdate = e => {
      let {
        user: t,
        guildId: n
      } = e;
      if (t.id !== a.default.getId()) return;
      let i = r.default.getCurrentClientVoiceChannelId(n);
      if (null == i) return;
      let u = d.default.getCurrentHangStatus();
      if (null == u) return;
      let f = l.default.getChannel(i);
      !s.default.can(c.Permissions.SET_VOICE_CHANNEL_STATUS, f) && (0, o.clearHangStatus)()
    }, this.handleDisconnectFromVoiceChannel = () => {
      (0, o.clearHangStatus)()
    }, this.handleLogout = () => {
      this.handleDisconnectFromVoiceChannel()
    }
  }
}
var E = new f