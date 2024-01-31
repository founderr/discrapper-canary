"use strict";
E.r(_), E.d(_, {
  default: function() {
    return c
  }
}), E("222007");
var t = E("823411"),
  o = E("689988"),
  n = E("716241"),
  r = E("651057"),
  a = E("299285"),
  i = E("271938"),
  I = E("42203"),
  s = E("546463"),
  T = E("824563"),
  S = E("18494"),
  N = E("162771"),
  O = E("101125"),
  A = E("800762"),
  R = E("774539"),
  l = E("49111");

function L(e) {
  return e.filter(e => e.type === l.ActivityTypes.PLAYING && null != e.application_id && null != s.default.getDetectableGame(e.application_id)).map(e => e.application_id)
}
async function u(e) {
  await r.default.fetchApplications(e, !1)
}
async function C(e) {
  if (null == e) return;
  let _ = I.default.getChannel(e);
  if (null == _ || !(0, R.isVoiceUserGameActivityEnabled)("running_games_change", !1)) return;
  let E = O.default.getActivities();
  if (0 === E.length) return;
  let t = L([...E]);
  await u([...t]);
  let o = a.default.getApplication(t[0]);
  null != o && n.default.trackWithMetadata(l.AnalyticEvents.VOICE_CHANNEL_GAME_ACTIVITY_INDICATOR_SET, {
    channel_id: e,
    guild_id: _.guild_id,
    game_name: o.name,
    user_id: i.default.getId()
  })
}
class D extends o.default {
  handleConnectionOpen() {
    let e = N.default.getGuildId();
    null != e && t.default.getDetectableGames()
  }
  handlePresenceUpdates(e) {
    let {
      updates: _
    } = e, E = new Set;
    _.forEach(e => {
      let {
        user: _,
        activities: t
      } = e, o = A.default.getVoiceStateForUser(_.id);
      if (null == o || !(0, R.isVoiceUserGameActivityEnabled)("presence_update", !1)) return;
      let n = L([...t]);
      E = new Set([...E, ...n])
    }), u([...E])
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
      if (!(0, R.isVoiceUserGameActivityEnabled)("voice_state_update", !1)) return;
      let o = T.default.getActivities(_, t),
        n = L([...o]);
      E = new Set([...E, ...n])
    }), u([...E])
  }
  handleRunningGamesChange() {
    let e = S.default.getVoiceChannelId();
    C(e)
  }
  handleVoiceChannelSelect(e) {
    let {
      channelId: _
    } = e;
    C(_)
  }
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: this.handleConnectionOpen,
      PRESENCE_UPDATES: this.handlePresenceUpdates,
      VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
      RUNNING_GAMES_CHANGE: this.handleRunningGamesChange,
      VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect
    }
  }
}
var c = new D