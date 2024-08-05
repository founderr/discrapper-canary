t.d(n, {
  Z: function() {
return m;
  }
});
var l = t(442837),
  r = t(2052),
  i = t(99981),
  a = t(906732),
  o = t(835473),
  s = t(914010),
  c = t(561308),
  u = t(701488),
  d = t(689938);

function m(e) {
  let {
entry: n
  } = e, t = (0, o.q)(n.extra.application_id), m = null == t ? void 0 : t.getIconURL(u.Si.LARGE), f = (0, l.e7)([s.Z], () => s.Z.getGuildId()), _ = (0, r.O)(), {
analyticsLocations: p
  } = (0, a.ZP)(), C = (0, c.kr)(n) && !(0, c.n2)(n) ? d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYING : d.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_PLAYED, v = () => {
null != f && (0, i.q)({
  guildId: f,
  channelId: void 0,
  locationObject: _.location,
  initialSelectedApplicationId: n.extra.application_id,
  initialSlide: u.ag.SELECT_CHANNEL,
  analyticsLocations: p
});
  };
  return {
thumbnailUrl: m,
title: n.extra.activity_name,
onClickTitle: v,
onClickThumbnail: v,
userDescription: C
  };
}