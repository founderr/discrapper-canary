"use strict";
n.r(t), n.d(t, {
  getRoleSubscriptionPurchaseSystemMessageAstFormattedContent: function() {
    return l
  },
  getRoleSubscriptionPurchaseSystemMessageContentMobile: function() {
    return c
  },
  getRoleSubscriptionPurchaseSystemMessageEventProperties: function() {
    return I
  },
  getRoleSubscriptionPurchaseSystemMessageFormattedContent: function() {
    return d
  },
  isEligibleForRoleSubscriptionPurchaseSystemMessageSettings: function() {
    return S
  },
  trackRoleSubscriptionPurchaseMessageTierClick: function() {
    return f
  }
});
var r = n("367907"),
  a = n("200876"),
  i = n("430824"),
  s = n("594174");
n("709054"), n("523361");
var o = n("981631"),
  u = n("689938");

function d(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: a,
    roleSubscriptionData: i
  } = e, {
    content: s,
    formatParams: o
  } = T({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: a,
    roleSubscriptionData: i
  });
  return s.format(o)
}

function l(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: a,
    roleSubscriptionData: i
  } = e, {
    content: s,
    formatParams: o
  } = T({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: r,
    guildId: a,
    roleSubscriptionData: i
  });
  return s.astFormat(o)
}

function E(e, t) {
  var n, r;
  let a = i.default.getGuild(e),
    s = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
  return {
    guild: a,
    totalMonthsSubscribed: s,
    showWithDuration: s > 0,
    isRenewal: null !== (r = null == t ? void 0 : t.is_renewal) && void 0 !== r && r
  }
}

function T(e) {
  let t, {
      username: n,
      usernameOnClickHandler: r,
      roleSubscriptionOnClickHandler: a,
      guildId: i,
      roleSubscriptionData: s
    } = e,
    {
      guild: o,
      totalMonthsSubscribed: d,
      showWithDuration: l,
      isRenewal: T
    } = E(i, s);
  return t = l ? T ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION : T ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN, {
    content: t,
    formatParams: {
      username: n,
      usernameHook: r,
      guildName: null == o ? void 0 : o.name,
      handleGuildNameClick: a,
      tierName: null == s ? void 0 : s.tier_name,
      months: d
    }
  }
}

function c(e) {
  let t, {
      username: n,
      usernameOnClickHandler: r = o.NOOP,
      roleSubscriptionOnClickHandler: a = o.NOOP,
      guildId: i,
      roleSubscriptionData: s
    } = e,
    {
      guild: d,
      totalMonthsSubscribed: l,
      showWithDuration: T,
      isRenewal: c
    } = E(i, s),
    S = {
      guildName: null == d ? void 0 : d.name,
      tierName: null == s ? void 0 : s.tier_name,
      username: n,
      usernameOnClick: r,
      roleSubscriptionOnClick: a
    };
  return t = T ? c ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
    ...S,
    months: l
  }) : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
    ...S,
    months: l
  }) : c ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(S) : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(S)
}

function S(e) {
  return (0, a.isCreatorMonetizationEnabledGuild)(e)
}

function f(e, t, n, a) {
  var i;
  r.default.trackWithMetadata(o.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null === (i = s.default.getCurrentUser()) || void 0 === i ? void 0 : i.id,
    channel_id: t,
    message_id: n,
    role_subscription_listing_id: a
  })
}

function I(e, t) {
  var n;
  return {
    guild_id: e.guild_id,
    sender: null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
    target_user: t.author.id,
    channel_id: e.id,
    message_id: t.id
  }
}