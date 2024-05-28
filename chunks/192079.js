"use strict";
n.r(t), n.d(t, {
  getRemoveModeratorTooltipHint: function() {
    return f
  },
  getStageChannelMetadata: function() {
    return p
  },
  summarizeUsernamesParticipating: function() {
    return d
  }
}), n("724458"), n("47120"), n("392711");
var r = n("19780"),
  i = n("5192"),
  s = n("700785"),
  a = n("427679"),
  l = n("157925"),
  u = n("981631"),
  o = n("71080"),
  c = n("689938");

function d(e, t, n, r) {
  let s = t[0],
    a = i.default.getName(e, n, s),
    l = null != r ? r : t.length;
  return 1 === l && null != s ? a : null == s ? c.default.Messages.SPEAKING_COUNT.format({
    count: l
  }) : c.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
    name: a,
    count: l - 1
  })
}

function f(e, t) {
  switch (e) {
    case o.RowType.OWNER:
      return c.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
    case o.RowType.ADMINISTRATOR:
      return c.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
    case o.RowType.MEMBER:
    case o.RowType.ROLE:
      return t ? c.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : c.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
    case o.RowType.EMPTY_STATE:
  }
  return null
}

function p(e) {
  let t = a.default.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == t ? void 0 : t.topic,
    media_session_id: r.default.getMediaSessionId(),
    request_to_speak_state: s.canEveryoneRole(u.Permissions.REQUEST_TO_SPEAK, e) ? l.RequestToSpeakPermissionStates.EVERYONE : l.RequestToSpeakPermissionStates.NO_ONE,
    stage_instance_id: null == t ? void 0 : t.id
  }
}