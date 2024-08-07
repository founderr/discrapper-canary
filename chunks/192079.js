t.d(e, {
  ER: function() {
return o;
  },
  kk: function() {
return _;
  },
  s$: function() {
return E;
  }
}), t(724458), t(47120), t(392711);
var i = t(19780),
  u = t(5192),
  l = t(700785),
  r = t(427679),
  a = t(157925),
  s = t(981631),
  d = t(71080),
  c = t(689938);

function o(n, e, t, i) {
  let l = e[0],
r = u.ZP.getName(n, t, l),
a = null != i ? i : e.length;
  return 1 === a && null != l ? r : null == l ? c.Z.Messages.SPEAKING_COUNT.format({
count: a
  }) : c.Z.Messages.USER_SUMMARY_WITH_OTHERS.format({
name: r,
count: a - 1
  });
}

function _(n, e) {
  switch (n) {
case d.aC.OWNER:
  return c.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
case d.aC.ADMINISTRATOR:
  return c.Z.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
case d.aC.MEMBER:
case d.aC.ROLE:
  return e ? c.Z.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : c.Z.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
case d.aC.EMPTY_STATE:
  }
  return null;
}

function E(n) {
  let e = r.Z.getStageInstanceByChannel(n.id);
  return {
channel_id: n.id,
guild_id: n.guild_id,
topic: null == e ? void 0 : e.topic,
media_session_id: i.Z.getMediaSessionId(),
request_to_speak_state: l.Uu(s.Plq.REQUEST_TO_SPEAK, n) ? a.BM.EVERYONE : a.BM.NO_ONE,
stage_instance_id: null == e ? void 0 : e.id
  };
}