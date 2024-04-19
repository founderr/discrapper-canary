"use strict";
a.r(t), a.d(t, {
  CHANNEL_NOTICES: function() {
    return E
  },
  CHANNEL_NOTICE_STORES: function() {
    return h
  },
  LAST_HIDDEN_CHANNEL_NOTICE: function() {
    return f
  }
});
var n = a("524437"),
  s = a("823385"),
  l = a("327689"),
  i = a("421176"),
  r = a("989695"),
  o = a("456065"),
  u = a("683743"),
  d = a("823379"),
  c = a("981631");
let f = "lastHiddenChannelNotice",
  E = [{
    type: c.ChannelNoticeTypes.GUILD_BOOSTING,
    store: i.default,
    dismissibleContentType: n.DismissibleContent.CHANNEL_NOTICE_PREMIUM_GUILD_SUBSCRIPTION
  }, {
    type: c.ChannelNoticeTypes.GUILD_BANNER,
    store: l.default,
    dismissibleContentType: n.DismissibleContent.CHANNEL_NOTICE_GUILD_BANNER
  }, {
    type: c.ChannelNoticeTypes.INVITE,
    store: u.default,
    dismissibleContentType: n.DismissibleContent.CHANNEL_NOTICE_INVITE
  }, {
    type: c.ChannelNoticeTypes.HUB_LINK,
    store: o.default,
    dismissibleContentType: n.DismissibleContent.CHANNEL_NOTICE_HUBLINK
  }, {
    type: c.ChannelNoticeTypes.QUICKSWITCHER,
    store: s.default,
    dismissibleContentType: n.DismissibleContent.CHANNEL_NOTICE_QUICKSWITCHER
  }, {
    type: c.ChannelNoticeTypes.GUILD_ONBOARDING_UPSELL,
    store: r.default,
    dismissibleContentType: n.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE
  }, {
    type: c.ChannelNoticeTypes.LINKED_ROLES_ADMIN,
    dismissibleContentType: n.DismissibleContent.LINKED_ROLE_ADMIN_GUILD
  }],
  h = E.map(e => e.store).filter(d.isNotNullish)