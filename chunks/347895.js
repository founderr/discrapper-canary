"use strict";
n.r(t), n.d(t, {
  fetchGuildHomeSettings: function() {
    return T
  },
  fetchNewMemberActions: function() {
    return S
  },
  selectHomeResourceChannel: function() {
    return m
  },
  selectNewMemberActionChannel: function() {
    return C
  },
  completeNewMemberAction: function() {
    return v
  },
  getBlockForChannelDeletion: function() {
    return R
  }
}), n("222007"), n("808653");
var l = n("872717"),
  u = n("913144"),
  r = n("819689"),
  i = n("115718"),
  a = n("38654"),
  d = n("144491"),
  s = n("42203"),
  o = n("599110"),
  c = n("299039"),
  E = n("698882"),
  f = n("129092"),
  _ = n("675305"),
  N = n("290886"),
  h = n("49111");
let T = async e => {
  u.default.dispatch({
    type: "GUILD_HOME_SETTINGS_FETCH_START",
    guildId: e
  });
  try {
    let t = await l.default.get({
        url: h.Endpoints.GUILD_HOME_SETTINGS(e),
        oldFormErrors: !0
      }),
      n = (0, f.settingsFromServer)(t.body);
    return u.default.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_SUCCESS",
      guildId: e,
      homeSettings: n
    }), n
  } catch (t) {
    u.default.dispatch({
      type: "GUILD_HOME_SETTINGS_FETCH_FAIL",
      guildId: e
    })
  }
}, S = async e => {
  if (!a.default.isFullServerPreview(e)) {
    u.default.dispatch({
      type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_START",
      guildId: e
    });
    try {
      let t = await l.default.get({
          url: h.Endpoints.GUILD_MEMBER_ACTIONS(e),
          oldFormErrors: !0
        }),
        n = (0, f.actionsFromServer)(t.body);
      return u.default.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS",
        guildId: e,
        memberActions: n
      }), n
    } catch (t) {
      u.default.dispatch({
        type: "GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL",
        guildId: e
      })
    }
  }
}, m = function(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
  if (u.default.dispatch({
      type: "SELECT_HOME_RESOURCE_CHANNEL",
      guildId: e,
      channelId: t
    }), null == t) return;
  let l = s.default.getChannel(t),
    f = E.default.getResourceForChannel(e, t);
  null != e && !a.default.isFullServerPreview(e) && null != l && null != f && o.default.track(h.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: l.id,
    server_guide_channel_type: "resource",
    channel_action_type: -1
  }), n && (0, d.transitionToChannel)(t), r.default.jumpToMessage({
    channelId: t,
    messageId: c.default.castChannelIdAsMessageId(t),
    flash: !1,
    jumpType: i.JumpTypes.INSTANT
  })
}, C = (e, t) => {
  u.default.dispatch({
    type: "SELECT_NEW_MEMBER_ACTION_CHANNEL",
    guildId: e,
    channelId: t
  });
  let n = s.default.getChannel(t),
    l = E.default.getActionForChannel(e, t);
  null != e && !a.default.isFullServerPreview(e) && null != n && null != l && o.default.track(h.AnalyticEvents.SERVER_GUIDE_CHANNEL_SELECTED, {
    guild_id: e,
    channel_id: n.id,
    server_guide_channel_type: "member action",
    channel_action_type: l.actionType
  }), (0, d.transitionToChannel)(t)
}, v = (e, t) => {
  if (u.default.dispatch({
      type: "COMPLETE_NEW_MEMBER_ACTION",
      guildId: e,
      channelId: t
    }), a.default.isFullServerPreview(e)) return;
  let n = s.default.getChannel(t),
    r = E.default.getActionForChannel(e, t);
  if (null != n && null != r) {
    var i, d;
    let t = c.default.keys(null !== (i = _.default.getCompletedActions(e)) && void 0 !== i ? i : {}),
      l = null !== (d = E.default.getNewMemberActions(e)) && void 0 !== d ? d : [];
    o.default.track(h.AnalyticEvents.SERVER_GUIDE_ACTION_COMPLETED, {
      guild_id: n.guild_id,
      channel_id: n.id,
      channel_action_type: r.actionType,
      has_completed_all: l.reduce((e, n) => e && t.includes(n.channelId), !0)
    })
  }
  l.default.post({
    url: h.Endpoints.GUILD_MEMBER_ACTION_UPDATE(e, t)
  })
};
async function R(e, t) {
  if (null == e) return !1;
  let n = (0, N.canSeeOnboardingHome)(e);
  if (!n) return !1;
  let l = E.default.getSettings(e);
  return l === E.NO_SETTINGS && (await T(e), l = E.default.getSettings(e)), l !== E.NO_SETTINGS && null != l && (null != l.newMemberActions && null != l.newMemberActions.find(e => e.channelId === t) ? "todo" : null != l.resourceChannels && null != l.resourceChannels.find(e => e.channelId === t) && "resource")
}