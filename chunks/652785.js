n.d(t, {
  HG: function() {
    return _
  },
  Iv: function() {
    return E
  },
  XN: function() {
    return h
  }
});
var s = n(704215),
  i = n(823385),
  l = n(327689),
  a = n(421176),
  r = n(989695),
  o = n(456065),
  c = n(683743),
  u = n(823379),
  d = n(981631);
let E = "lastHiddenChannelNotice",
  h = [{
    type: d.vID.CLAN_ADMIN_UPSELL,
    dismissibleContentType: s.z.CHANNEL_LIST_CLAN_ADMIN_UPSELL
  }, {
    type: d.vID.GUILD_BOOSTING,
    store: a.Z,
    dismissibleContentType: s.z.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION
  }, {
    type: d.vID.GUILD_BANNER,
    store: l.Z,
    dismissibleContentType: s.z.CHANNEL_NOTICE_GUILD_BANNER
  }, {
    type: d.vID.INVITE,
    store: c.Z,
    dismissibleContentType: s.z.CHANNEL_NOTICE_INVITE
  }, {
    type: d.vID.HUB_LINK,
    store: o.Z,
    dismissibleContentType: s.z.CHANNEL_NOTICE_HUBLINK
  }, {
    type: d.vID.QUICKSWITCHER,
    store: i.Z,
    dismissibleContentType: s.z.CHANNEL_NOTICE_QUICKSWITCHER
  }, {
    type: d.vID.GUILD_ONBOARDING_UPSELL,
    store: r.Z,
    dismissibleContentType: s.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE
  }, {
    type: d.vID.LINKED_ROLES_ADMIN,
    dismissibleContentType: s.z.LINKED_ROLE_ADMIN_GUILD
  }],
  _ = h.map(e => e.store).filter(u.lm)