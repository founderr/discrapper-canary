"use strict";
n.r(t), n.d(t, {
  getRemoveModeratorTooltipHint: function() {
    return _
  },
  getStageChannelMetadata: function() {
    return f
  },
  summarizeUsernamesParticipating: function() {
    return c
  }
}), n("724458"), n("47120"), n("392711");
var r = n("19780"),
  i = n("5192"),
  s = n("700785"),
  l = n("427679"),
  a = n("157925"),
  u = n("981631"),
  o = n("71080"),
  d = n("689938");

function c(e, t, n, r) {
  let s = t[0],
    l = i.default.getName(e, n, s),
    a = null != r ? r : t.length;
  return 1 === a && null != s ? l : null == s ? d.default.Messages.SPEAKING_COUNT.format({
    count: a
  }) : d.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
    name: l,
    count: a - 1
  })
}

function _(e, t) {
  switch (e) {
    case o.RowType.OWNER:
      return d.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
    case o.RowType.ADMINISTRATOR:
      return d.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
    case o.RowType.MEMBER:
    case o.RowType.ROLE:
      return t ? d.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : d.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
    case o.RowType.EMPTY_STATE:
  }
  return null
}

function f(e) {
  let t = l.default.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == t ? void 0 : t.topic,
    media_session_id: r.default.getMediaSessionId(),
    request_to_speak_state: s.canEveryoneRole(u.Permissions.REQUEST_TO_SPEAK, e) ? a.RequestToSpeakPermissionStates.EVERYONE : a.RequestToSpeakPermissionStates.NO_ONE,
    stage_instance_id: null == t ? void 0 : t.id
  }
}