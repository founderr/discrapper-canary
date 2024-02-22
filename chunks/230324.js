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
var a = n("945956"),
  s = n("387111"),
  l = n("991170"),
  i = n("834052"),
  u = n("837979"),
  r = n("49111"),
  d = n("606762"),
  o = n("782340");

function c(e, t, n, a) {
  let l = t[0],
    i = s.default.getName(e, n, l),
    u = null != a ? a : t.length;
  return 1 === u && null != l ? i : null == l ? o.default.Messages.SPEAKING_COUNT.format({
    count: u
  }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
    name: i,
    count: u - 1
  })
}

function f(e, t) {
  switch (e) {
    case d.RowType.OWNER:
      return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
    case d.RowType.ADMINISTRATOR:
      return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
    case d.RowType.MEMBER:
    case d.RowType.ROLE:
      return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
    case d.RowType.EMPTY_STATE:
  }
  return null
}

function E(e) {
  let t = i.default.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == t ? void 0 : t.topic,
    media_session_id: a.default.getMediaSessionId(),
    request_to_speak_state: l.default.canEveryoneRole(r.Permissions.REQUEST_TO_SPEAK, e) ? u.RequestToSpeakPermissionStates.EVERYONE : u.RequestToSpeakPermissionStates.NO_ONE,
    stage_instance_id: null == t ? void 0 : t.id
  }
}