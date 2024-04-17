"use strict";
s.r(t), s.d(t, {
  getRoleSubscriptionPurchaseSystemMessageAstFormattedContent: function() {
    return _
  },
  getRoleSubscriptionPurchaseSystemMessageContentMobile: function() {
    return M
  },
  getRoleSubscriptionPurchaseSystemMessageEventProperties: function() {
    return I
  },
  getRoleSubscriptionPurchaseSystemMessageFormattedContent: function() {
    return E
  },
  isEligibleForRoleSubscriptionPurchaseSystemMessageSettings: function() {
    return d
  },
  trackRoleSubscriptionPurchaseMessageTierClick: function() {
    return c
  }
});
var a = s("367907"),
  n = s("200876"),
  r = s("430824"),
  u = s("594174");
s("709054"), s("523361");
var i = s("981631"),
  l = s("689938");

function E(e) {
  let {
    username: t,
    usernameOnClickHandler: s,
    roleSubscriptionOnClickHandler: a,
    guildId: n,
    roleSubscriptionData: r
  } = e, {
    content: u,
    formatParams: i
  } = S({
    username: t,
    usernameOnClickHandler: s,
    roleSubscriptionOnClickHandler: a,
    guildId: n,
    roleSubscriptionData: r
  });
  return u.format(i)
}

function _(e) {
  let {
    username: t,
    usernameOnClickHandler: s,
    roleSubscriptionOnClickHandler: a,
    guildId: n,
    roleSubscriptionData: r
  } = e, {
    content: u,
    formatParams: i
  } = S({
    username: t,
    usernameOnClickHandler: s,
    roleSubscriptionOnClickHandler: a,
    guildId: n,
    roleSubscriptionData: r
  });
  return u.astFormat(i)
}

function o(e, t) {
  var s, a;
  let n = r.default.getGuild(e),
    u = null !== (s = null == t ? void 0 : t.total_months_subscribed) && void 0 !== s ? s : 0;
  return {
    guild: n,
    totalMonthsSubscribed: u,
    showWithDuration: u > 0,
    isRenewal: null !== (a = null == t ? void 0 : t.is_renewal) && void 0 !== a && a
  }
}

function S(e) {
  let t, {
      username: s,
      usernameOnClickHandler: a,
      roleSubscriptionOnClickHandler: n,
      guildId: r,
      roleSubscriptionData: u
    } = e,
    {
      guild: i,
      totalMonthsSubscribed: E,
      showWithDuration: _,
      isRenewal: S
    } = o(r, u);
  return t = _ ? S ? l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION : S ? l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN, {
    content: t,
    formatParams: {
      username: s,
      usernameHook: a,
      guildName: null == i ? void 0 : i.name,
      handleGuildNameClick: n,
      tierName: null == u ? void 0 : u.tier_name,
      months: E
    }
  }
}

function M(e) {
  let t, {
      username: s,
      usernameOnClickHandler: a = i.NOOP,
      roleSubscriptionOnClickHandler: n = i.NOOP,
      guildId: r,
      roleSubscriptionData: u
    } = e,
    {
      guild: E,
      totalMonthsSubscribed: _,
      showWithDuration: S,
      isRenewal: M
    } = o(r, u),
    d = {
      guildName: null == E ? void 0 : E.name,
      tierName: null == u ? void 0 : u.tier_name,
      username: s,
      usernameOnClick: a,
      roleSubscriptionOnClick: n
    };
  return t = S ? M ? l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
    ...d,
    months: _
  }) : l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
    ...d,
    months: _
  }) : M ? l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(d) : l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(d)
}

function d(e) {
  return (0, n.isCreatorMonetizationEnabledGuild)(e)
}

function c(e, t, s, n) {
  var r;
  a.default.trackWithMetadata(i.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null === (r = u.default.getCurrentUser()) || void 0 === r ? void 0 : r.id,
    channel_id: t,
    message_id: s,
    role_subscription_listing_id: n
  })
}

function I(e, t) {
  var s;
  return {
    guild_id: e.guild_id,
    sender: null === (s = u.default.getCurrentUser()) || void 0 === s ? void 0 : s.id,
    target_user: t.author.id,
    channel_id: e.id,
    message_id: t.id
  }
}