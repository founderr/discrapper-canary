"use strict";
E.r(_), E.d(_, {
  default: function() {
    return N
  }
}), E("222007");
var t = E("689988"),
  o = E("271938"),
  n = E("42203"),
  a = E("957255"),
  i = E("800762"),
  r = E("233965"),
  I = E("699209"),
  T = E("32346"),
  s = E("49111");
class S extends t.default {
  constructor(...e) {
    super(...e), this.actions = {
      VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e),
      GUILD_MEMBER_UPDATE: e => this.handleGuildMemberUpdate(e),
      LOGOUT: () => this.handleLogout()
    }, this.handleVoiceChannelSelect = e => {
      let {
        channelId: _,
        guildId: E
      } = e, {
        enableHangStatus: t,
        setDefaultStatus: o
      } = I.HangStatusExperiment.getCurrentConfig({
        guildId: null != E ? E : s.EMPTY_STRING_GUILD_ID,
        location: "HangStatusManager"
      }, {
        autoTrackExposure: !0
      });
      if (null == E && null == _) {
        this.handleDisconnectFromVoiceChannel(), this.previousVoiceChannelId = _;
        return
      }
      if (!t || _ === this.previousVoiceChannelId) return;
      if (this.previousVoiceChannelId = _, null == E || null == _) return;
      let i = n.default.getChannel(_);
      if (null == i || i.type !== s.ChannelTypes.GUILD_VOICE || !a.default.can(s.Permissions.SET_VOICE_CHANNEL_STATUS, i)) return;
      let S = T.default.getCurrentHangStatus();
      if (null != S) return;
      let N = T.default.getCurrentDefaultStatus();
      if ((null == N ? void 0 : N.expiresAt) != null && (null == N ? void 0 : N.expiresAt) >= Date.now()) {
        if (N.status === s.HangStatusTypes.CUSTOM && null != N.customHangStatus) {
          let {
            status: e,
            emoji: _
          } = N.customHangStatus;
          (0, r.updateCustomHangStatus)(e, _);
          return
        }
        if (null == N.status) return;
        else {
          (0, r.updateHangStatus)(N.status);
          return
        }
      }
      o && (0, r.updateHangStatus)(s.HangStatusTypes.CHILLING)
    }, this.handleGuildMemberUpdate = e => {
      let {
        user: _,
        guildId: E
      } = e;
      if (_.id !== o.default.getId()) return;
      let t = i.default.getCurrentClientVoiceChannelId(E);
      if (null == t) return;
      let I = T.default.getCurrentHangStatus();
      if (null == I) return;
      let S = n.default.getChannel(t);
      !a.default.can(s.Permissions.SET_VOICE_CHANNEL_STATUS, S) && (0, r.clearHangStatus)()
    }, this.handleDisconnectFromVoiceChannel = () => {
      (0, r.clearHangStatus)()
    }, this.handleLogout = () => {
      this.handleDisconnectFromVoiceChannel()
    }
  }
}
var N = new S