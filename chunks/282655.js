"use strict";
E.r(_), E.d(_, {
  default: function() {
    return u
  }
}), E("222007");
var t = E("689988"),
  o = E("716241"),
  n = E("651057"),
  r = E("299285"),
  a = E("271938"),
  i = E("42203"),
  I = E("824563"),
  s = E("18494"),
  T = E("101125"),
  S = E("800762"),
  N = E("774539"),
  O = E("49111");

function A(e) {
  return e.filter(e => e.type === O.ActivityTypes.PLAYING && e.application_id).map(e => e.application_id)
}
async function R(e) {
  await n.default.fetchApplications(e, !1)
}
async function l(e) {
  if (null == e) return;
  let _ = i.default.getChannel(e);
  if (null == _ || !(0, N.isVoiceUserGameActivityEnabled)("running_games_change", !1)) return;
  let E = T.default.getActivities();
  if (0 === E.length) return;
  let t = A([...E]);
  await R([...t]);
  let n = r.default.getApplication(t[0]);
  null != n && o.default.trackWithMetadata(O.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
    channel_id: e,
    guild_id: _.guild_id,
    game_name: n.name,
    user_id: a.default.getId()
  })
}
class L extends t.default {
  handlePresenceUpdates(e) {
    let {
      updates: _
    } = e, E = new Set;
    _.forEach(e => {
      let {
        user: _,
        activities: t
      } = e, o = S.default.getVoiceStateForUser(_.id);
      if (null == o || !(0, N.isVoiceUserGameActivityEnabled)("presence_update", !1)) return;
      let n = A([...t]);
      E = new Set([...E, ...n])
    }), R([...E])
  }
  handleVoiceStateUpdates(e) {
    let {
      voiceStates: _
    } = e, E = new Set;
    _.forEach(e => {
      let {
        userId: _,
        guildId: t
      } = e;
      if (!(0, N.isVoiceUserGameActivityEnabled)("voice_state_update", !1)) return;
      let o = I.default.getActivities(_, t),
        n = A([...o]);
      E = new Set([...E, ...n])
    }), R([...E])
  }
  handleRunningGamesChange() {
    let e = s.default.getVoiceChannelId();
    l(e)
  }
  handleVoiceChannelSelect(e) {
    let {
      channelId: _
    } = e;
    l(_)
  }
  constructor(...e) {
    super(...e), this.actions = {
      PRESENCE_UPDATES: this.handlePresenceUpdates,
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
    }
  }
}
var u = new L