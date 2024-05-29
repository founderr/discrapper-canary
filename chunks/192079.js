"use strict";
n.r(t), n.d(t, {
  getRemoveModeratorTooltipHint: function() {
    return T
  },
  getStageChannelMetadata: function() {
    return E
  },
  summarizeUsernamesParticipating: function() {
    return d
  }
}), n("724458"), n("47120"), n("392711");
var a = n("19780"),
  s = n("5192"),
  i = n("700785"),
  l = n("427679"),
  r = n("157925"),
  o = n("981631"),
  u = n("71080"),
  c = n("689938");

function d(e, t, n, a) {
  let i = t[0],
    l = s.default.getName(e, n, i),
    r = null != a ? a : t.length;
  return 1 === r && null != i ? l : null == i ? c.default.Messages.SPEAKING_COUNT.format({
    count: r
  }) : c.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
    name: l,
    count: r - 1
  })
}

function T(e, t) {
  switch (e) {
    case u.RowType.OWNER:
      return c.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
    case u.RowType.ADMINISTRATOR:
      return c.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
    case u.RowType.MEMBER:
    case u.RowType.ROLE:
      return t ? c.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : c.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
    case u.RowType.EMPTY_STATE:
  }
  return null
}

function E(e) {
  let t = l.default.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == t ? void 0 : t.topic,
    media_session_id: a.default.getMediaSessionId(),
    request_to_speak_state: i.canEveryoneRole(o.Permissions.REQUEST_TO_SPEAK, e) ? r.RequestToSpeakPermissionStates.EVERYONE : r.RequestToSpeakPermissionStates.NO_ONE,
    stage_instance_id: null == t ? void 0 : t.id
  }
}