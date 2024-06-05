"use strict";
n.r(t), n.d(t, {
  getRoleSubscriptionPurchaseSystemMessageAstFormattedContent: function() {
    return d
  },
  getRoleSubscriptionPurchaseSystemMessageContentMobile: function() {
    return S
  },
  getRoleSubscriptionPurchaseSystemMessageEventProperties: function() {
    return E
  },
  getRoleSubscriptionPurchaseSystemMessageFormattedContent: function() {
    return a
  },
  isEligibleForRoleSubscriptionPurchaseSystemMessageSettings: function() {
    return _
  },
  trackRoleSubscriptionPurchaseMessageTierClick: function() {
    return p
  }
});
var i = n("367907"),
  r = n("200876"),
  s = n("430824"),
  l = n("594174");
n("709054"), n("523361");
var o = n("981631"),
  u = n("689938");

function a(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: i,
    guildId: r,
    roleSubscriptionData: s
  } = e, {
    content: l,
    formatParams: o
  } = f({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: i,
    guildId: r,
    roleSubscriptionData: s
  });
  return l.format(o)
}

function d(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: i,
    guildId: r,
    roleSubscriptionData: s
  } = e, {
    content: l,
    formatParams: o
  } = f({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: i,
    guildId: r,
    roleSubscriptionData: s
  });
  return l.astFormat(o)
}

function c(e, t) {
  var n, i;
  let r = s.default.getGuild(e),
    l = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
  return {
    guild: r,
    totalMonthsSubscribed: l,
    showWithDuration: l > 0,
    isRenewal: null !== (i = null == t ? void 0 : t.is_renewal) && void 0 !== i && i
  }
}

function f(e) {
  let t, {
      username: n,
      usernameOnClickHandler: i,
      roleSubscriptionOnClickHandler: r,
      guildId: s,
      roleSubscriptionData: l
    } = e,
    {
      guild: o,
      totalMonthsSubscribed: a,
      showWithDuration: d,
      isRenewal: f
    } = c(s, l);
  return t = d ? f ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION : f ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN, {
    content: t,
    formatParams: {
      username: n,
      usernameHook: i,
      guildName: null == o ? void 0 : o.name,
      handleGuildNameClick: r,
      tierName: null == l ? void 0 : l.tier_name,
      months: a
    }
  }
}

function S(e) {
  let t, {
      username: n,
      usernameOnClickHandler: i = o.NOOP,
      roleSubscriptionOnClickHandler: r = o.NOOP,
      guildId: s,
      roleSubscriptionData: l
    } = e,
    {
      guild: a,
      totalMonthsSubscribed: d,
      showWithDuration: f,
      isRenewal: S
    } = c(s, l),
    _ = {
      guildName: null == a ? void 0 : a.name,
      tierName: null == l ? void 0 : l.tier_name,
      username: n,
      usernameOnClick: i,
      roleSubscriptionOnClick: r
    };
  return t = f ? S ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
    ..._,
    months: d
  }) : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
    ..._,
    months: d
  }) : S ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(_) : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(_)
}

function _(e) {
  return (0, r.isCreatorMonetizationEnabledGuild)(e)
}

function p(e, t, n, r) {
  var s;
  i.default.trackWithMetadata(o.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null === (s = l.default.getCurrentUser()) || void 0 === s ? void 0 : s.id,
    channel_id: t,
    message_id: n,
    role_subscription_listing_id: r
  })
}

function E(e, t) {
  var n;
  return {
    guild_id: e.guild_id,
    sender: null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
    target_user: t.author.id,
    channel_id: e.id,
    message_id: t.id
  }
}