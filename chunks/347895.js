"use strict";
n.r(t), n.d(t, {
  fetchGuildHomeSettings: function() {
    return S
  },
  fetchNewMemberActions: function() {
    return N
  },
  selectHomeResourceChannel: function() {
    return p
  },
  selectNewMemberActionChannel: function() {
    return m
  },
  completeNewMemberAction: function() {
    return A
  },
  getBlockForChannelDeletion: function() {
    return M
  }
}), n("222007"), n("808653");
var i = n("872717"),
  l = n("913144"),
  u = n("819689"),
  a = n("115718"),
  r = n("38654"),
  d = n("144491"),
  o = n("42203"),
  s = n("599110"),
  c = n("299039"),
  E = n("698882"),
  _ = n("129092"),
  f = n("675305"),
  T = n("290886"),
  I = n("49111");
let S = async e => {
  l.default.dispatch({
    type: "GUILD_HOME_SETTINGS_FETCH_START",
    guildId: e
  });
  try {
    let t = await i.default.get({
        url: I.Endpoints.GUILD_HOME_SETTINGS(e),
        oldFormErrors: !0
      }),
      n = (0, _.settingsFromServer)(t.body);
    return l.default.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
      guildId: e,
      homeSettings: n
    }), n
  } catch (t) {
    l.default.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
      guildId: e
    })
  }
}, N = async e => {
  if (!r.default.isFullServerPreview(e)) {
    l.default.dispatch({
      type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
      guildId: e
    });
    try {
      let t = await i.default.get({
          url: I.Endpoints.GUILD_MEMBER_ACTIONS(e),
          oldFormErrors: !0
        }),
        n = (0, _.actionsFromServer)(t.body);
      return l.default.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
        guildId: e,
        memberActions: n
      }), n
    } catch (t) {
      l.default.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
        guildId: e
      })
    }
  }
}, p = function(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  if (l.default.dispatch({
      type: "SELECT_HOME_RESOURCE_CHANNEL",
      guildId: e,
      channelId: t
    }), null == t) return;
  let i = o.default.getChannel(t),
    _ = E.default.getResourceForChannel(e, t);
  null != e && !r.default.isFullServerPreview(e) && null != i && null != _ && s.default.track(I.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: i.id,
    server_guide_channel_type: "resource",
    channel_action_type: -1
  }), n && (0, d.transitionToChannel)(t), u.default.jumpToMessage({
    channelId: t,
    messageId: c.default.castChannelIdAsMessageId(t),
    flash: !1,
    jumpType: a.JumpTypes.INSTANT
  })
}, m = (e, t) => {
  l.default.dispatch({
    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
    guildId: e,
    channelId: t
  });
  let n = o.default.getChannel(t),
    i = E.default.getActionForChannel(e, t);
  null != e && !r.default.isFullServerPreview(e) && null != n && null != i && s.default.track(I.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: n.id,
    server_guide_channel_type: "member action",
    channel_action_type: i.actionType
  }), (0, d.transitionToChannel)(t)
}, A = (e, t) => {
  if (l.default.dispatch({
      type: "COMPLETE_NEW_MEMBER_ACTION",
      guildId: e,
      channelId: t
    }), r.default.isFullServerPreview(e)) return;
  let n = o.default.getChannel(t),
    u = E.default.getActionForChannel(e, t);
  if (null != n && null != u) {
    var a, d;
    let t = c.default.keys(null !== (a = f.default.getCompletedActions(e)) && void 0 !== a ? a : {}),
      i = null !== (d = E.default.getNewMemberActions(e)) && void 0 !== d ? d : [];
    s.default.track(I.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
      guild_id: n.guild_id,
      channel_id: n.id,
      channel_action_type: u.actionType,
      has_completed_all: i.reduce((e, n) => e && t.includes(n.channelId), !0)
    })
  }
  i.default.post({
    url: I.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t)
  })
};
async function M(e, t) {
  if (null == e) return !1;
  let n = (0, T.canSeeOnboardingHome)(e);
  if (!n) return !1;
  let i = E.default.getSettings(e);
  return i === E.NO_SETTINGS && (await S(e), i = E.default.getSettings(e)), i !== E.NO_SETTINGS && null != i && (null != i.newMemberActions && null != i.newMemberActions.find(e => e.channelId === t) ? "todo" : null != i.resourceChannels && null != i.resourceChannels.find(e => e.channelId === t) && "resource")
}