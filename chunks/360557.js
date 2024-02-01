"use strict";
E.r(_), E.d(_, {
  default: function() {
    return s
  }
}), E("222007");
var t = E("689988"),
  o = E("42203"),
  n = E("233965"),
  r = E("699209"),
  a = E("32346"),
  i = E("49111");
class I extends t.default {
  constructor(...e) {
    super(...e), this.actions = {
      VOICE_CHANNEL_SELECT: e => this.handleVoiceChannelSelect(e),
      LOGOUT: () => this.handleLogout()
    }, this.handleVoiceChannelSelect = e => {
      let {
        channelId: _,
        guildId: E
      } = e, {
        enableHangStatus: t,
        setDefaultStatus: I
      } = r.HangStatusExperiment.getCurrentConfig({
        guildId: null != E ? E : "",
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
      let s = o.default.getChannel(_);
      if (null == s || s.type !== i.ChannelTypes.GUILD_VOICE) return;
      let T = a.default.getCurrentHangStatus();
      if (null != T) return;
      let S = a.default.getCurrentDefaultStatus();
      if ((null == S ? void 0 : S.expiresAt) != null && (null == S ? void 0 : S.expiresAt) >= Date.now()) {
        if (S.status === i.HangStatusTypes.CUSTOM && null != S.customHangStatus) {
          let {
            status: e,
            emoji: _
          } = S.customHangStatus;
          (0, n.updateCustomHangStatus)(e, _);
          return
        }
        if (null == S.status) return;
        else {
          (0, n.updateHangStatus)(S.status);
          return
        }
      }
      I && (0, n.updateHangStatus)(i.HangStatusTypes.CHILLING)
    }, this.handleDisconnectFromVoiceChannel = () => {
      (0, n.clearHangStatus)()
    }, this.handleLogout = () => {
      this.handleDisconnectFromVoiceChannel()
    }
  }
}
var s = new I