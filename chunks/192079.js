"use strict";
n.r(t), n.d(t, {
  getRemoveModeratorTooltipHint: function() {
    return f
  },
  getStageChannelMetadata: function() {
    return L
  },
  summarizeUsernamesParticipating: function() {
    return d
  }
}), n("724458"), n("47120"), n("392711");
var i = n("19780"),
  s = n("5192"),
  a = n("700785"),
  r = n("427679"),
  l = n("157925"),
  u = n("981631"),
  o = n("71080"),
  c = n("689938");

function d(e, t, n, i) {
  let a = t[0],
    r = s.default.getName(e, n, a),
    l = null != i ? i : t.length;
  return 1 === l && null != a ? r : null == a ? c.default.Messages.SPEAKING_COUNT.format({
    count: l
  }) : c.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
    name: r,
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

function L(e) {
  let t = r.default.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == t ? void 0 : t.topic,
    media_session_id: i.default.getMediaSessionId(),
    request_to_speak_state: a.canEveryoneRole(u.Permissions.REQUEST_TO_SPEAK, e) ? l.RequestToSpeakPermissionStates.EVERYONE : l.RequestToSpeakPermissionStates.NO_ONE,
    stage_instance_id: null == t ? void 0 : t.id
  }
}