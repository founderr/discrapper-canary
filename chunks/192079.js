t.d(n, {
  ER: function() {
    return l
  },
  kk: function() {
    return S
  },
  s$: function() {
    return N
  }
}), t(724458), t(47120), t(392711);
var E = t(19780),
  _ = t(5192),
  s = t(700785),
  a = t(427679),
  u = t(157925),
  r = t(981631),
  i = t(71080),
  M = t(689938);

function l(e, n, t, E) {
  let s = n[0],
    a = _.ZP.getName(e, t, s),
    u = null != E ? E : n.length;
  return 1 === u && null != s ? a : null == s ? M.Z.Messages.SPEAKING_COUNT.format({
    count: u
  }) : M.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
    name: a,
    count: u - 1
  })
}

function S(e, n) {
  switch (e) {
    case i.aC.OWNER:
      return M.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
    case i.aC.ADMINISTRATOR:
      return M.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
    case i.aC.MEMBER:
    case i.aC.ROLE:
      return n ? M.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : M.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
    case i.aC.EMPTY_STATE:
  }
  return null
}

function N(e) {
  let n = a.Z.getStageInstanceByChannel(e.id);
  return {
    channel_id: e.id,
    guild_id: e.guild_id,
    topic: null == n ? void 0 : n.topic,
    media_session_id: E.Z.getMediaSessionId(),
    request_to_speak_state: s.Uu(r.Plq.REQUEST_TO_SPEAK, e) ? u.BM.EVERYONE : u.BM.NO_ONE,
    stage_instance_id: null == n ? void 0 : n.id
  }
}