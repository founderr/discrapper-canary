"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
}), n("222007");
var i = n("689988"),
  a = n("716241"),
  l = n("651057"),
  s = n("299285"),
  r = n("271938"),
  o = n("42203"),
  u = n("18494"),
  d = n("101125"),
  c = n("774539"),
  f = n("49111");
async function E(e) {
  await l.default.fetchApplications(e, !1)
}
async function h(e) {
  if (null == e) return;
  let t = o.default.getChannel(e);
  if (null == t || !(0, c.isVoiceUserGameActivityEnabled)("running_games_change", !1)) return;
  let n = d.default.getActivities();
  if (0 === n.length) return;
  let i = [...n].filter(e => e.type === f.ActivityTypes.PLAYING && e.application_id).map(e => e.application_id);
  await E([...i]);
  let l = s.default.getApplication(i[0]);
  null != l && a.default.trackWithMetadata(f.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
    channel_id: e,
    guild_id: t.guild_id,
    game_name: l.name,
    user_id: r.default.getId()
  })
}
class _ extends i.default {
  handleRunningGamesChange() {
    let e = u.default.getVoiceChannelId();
    h(e)
  }
  handleVoiceChannelSelect(e) {
    let {
      channelId: t
    } = e;
    h(t)
  }
  constructor(...e) {
    super(...e), this.actions = {
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
    }
  }
}
var C = new _