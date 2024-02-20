"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var i = n("913144"),
  a = n("987317"),
  l = n("689988"),
  s = n("393414"),
  r = n("239380"),
  o = n("42887"),
  u = n("18494"),
  d = n("162771"),
  c = n("49111");
class f extends l.default {
  handleGuildCreate(e) {
    let {
      guild: t
    } = e, n = u.default.getChannelId(c.ME), i = u.default.getVoiceChannelId();
    t.id === n && (0, r.transitionToGuild)(t.id);
    let l = t.id === i;
    l && !1 !== t.unavailable && null == i && a.default.selectVoiceChannel((0, u.findFirstVoiceChannelId)(t.id))
  }
  handleChannelCreate(e) {
    let {
      channel: t
    } = e;
    if (t.type !== c.ChannelTypes.GROUP_DM) return;
    let n = t.originChannelId,
      i = u.default.getChannelId(c.NULL_STRING_GUILD_ID);
    null == d.default.getGuildId() && null != n && n === i && (0, s.transitionTo)(c.Routes.CHANNEL(c.ME, t.id)), null != n && n === u.default.getVoiceChannelId() && a.default.selectVoiceChannel(t.id, o.default.isVideoEnabled())
  }
  handleLogout() {
    i.default.dispatch({
      type: "VOICE_CHANNEL_SELECT",
      channelId: null,
      guildId: null,
      video: !1,
      currentVoiceChannelId: null
    })
  }
  constructor(...e) {
    super(...e), this.actions = {
      GUILD_CREATE: this.handleGuildCreate,
      CHANNEL_CREATE: this.handleChannelCreate,
      LOGOUT: this.handleLogout
    }
  }
}
var E = new f