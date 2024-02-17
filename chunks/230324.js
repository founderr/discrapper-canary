"use strict";
n.r(t), n.d(t, {
  summarizeUsernamesParticipating: function() {
    return c
  },
  getRemoveModeratorTooltipHint: function() {
    return f
  },
  getStageChannelMetadata: function() {
    return E
  }
}), n("808653"), n("222007"), n("917351");
var u = n("945956"),
  a = n("387111"),
  i = n("991170"),
  l = n("834052"),
  r = n("837979"),
  d = n("49111"),
  o = n("606762"),
  s = n("782340");

function c(e, t, n, u) {
  let i = t[0],
    l = a.default.getName(e, n, i),
    r = null != u ? u : t.length;
  return 1 === r && null != i ? l : null == i ? s.default.Messages.SPEAKING_COUNT.format({
    count: r
  }) : s.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
    name: l,
    count: r - 1
  })
}

function f(e, t) {
  switch (e) {
    case o.RowType.OWNER:
      return s.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
    case o.RowType.ADMINISTRATOR:
      return s.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
    case o.RowType.MEMBER:
    case o.RowType.ROLE:
      return t ? s.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : s.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
    case o.RowType.EMPTY_STATE:
  }
  return null
}

function E(e) {
  let t = l.default.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == t ? void 0 : t.topic,
    media_session_id: u.default.getMediaSessionId(),
    request_to_speak_state: i.default.canEveryoneRole(d.Permissions.REQUEST_TO_SPEAK, e) ? r.RequestToSpeakPermissionStates.EVERYONE : r.RequestToSpeakPermissionStates.NO_ONE,
    stage_instance_id: null == t ? void 0 : t.id
  }
}