"use strict";
n.r(t), n.d(t, {
  getRemoveModeratorTooltipHint: function() {
    return _
  },
  getStageChannelMetadata: function() {
    return E
  },
  summarizeUsernamesParticipating: function() {
    return c
  }
}), n("724458"), n("47120"), n("392711");
var i = n("19780"),
  a = n("5192"),
  l = n("700785"),
  r = n("427679"),
  o = n("157925"),
  s = n("981631"),
  u = n("71080"),
  d = n("689938");

function c(e, t, n, i) {
  let l = t[0],
    r = a.default.getName(e, n, l),
    o = null != i ? i : t.length;
  return 1 === o && null != l ? r : null == l ? d.default.Messages.SPEAKING_COUNT.format({
    count: o
  }) : d.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
    name: r,
    count: o - 1
  })
}

function _(e, t) {
  switch (e) {
    case u.RowType.OWNER:
      return d.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
    case u.RowType.ADMINISTRATOR:
      return d.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
    case u.RowType.MEMBER:
    case u.RowType.ROLE:
      return t ? d.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : d.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
    case u.RowType.EMPTY_STATE:
  }
  return null
}

function E(e) {
  let t = r.default.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == t ? void 0 : t.topic,
    media_session_id: i.default.getMediaSessionId(),
    request_to_speak_state: l.canEveryoneRole(s.Permissions.REQUEST_TO_SPEAK, e) ? o.RequestToSpeakPermissionStates.EVERYONE : o.RequestToSpeakPermissionStates.NO_ONE,
    stage_instance_id: null == t ? void 0 : t.id
  }
}