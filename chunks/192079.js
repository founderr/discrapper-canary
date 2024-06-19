E.d(n, {
  ER: function() {
    return l
  },
  kk: function() {
    return S
  },
  s$: function() {
    return N
  }
}), E(724458), E(47120), E(392711);
var t = E(19780),
  _ = E(5192),
  s = E(700785),
  a = E(427679),
  r = E(157925),
  u = E(981631),
  M = E(71080),
  i = E(689938);

function l(e, n, E, t) {
  let s = n[0],
    a = _.ZP.getName(e, E, s),
    r = null != t ? t : n.length;
  return 1 === r && null != s ? a : null == s ? i.Z.Messages.SPEAKING_COUNT.format({
    count: r
  }) : i.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
    name: a,
    count: r - 1
  })
}

function S(e, n) {
  switch (e) {
    case M.aC.OWNER:
      return i.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
    case M.aC.ADMINISTRATOR:
      return i.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
    case M.aC.MEMBER:
    case M.aC.ROLE:
      return n ? i.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : i.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
    case M.aC.EMPTY_STATE:
  }
  return null
}

function N(e) {
  let n = a.Z.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == n ? void 0 : n.topic,
    media_session_id: t.Z.getMediaSessionId(),
    request_to_speak_state: s.Uu(u.Plq.REQUEST_TO_SPEAK, e) ? r.BM.EVERYONE : r.BM.NO_ONE,
    stage_instance_id: null == n ? void 0 : n.id
  }
}