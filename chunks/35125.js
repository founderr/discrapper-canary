"use strict";
s.r(t), s.d(t, {
  getRoleSubscriptionPurchaseSystemMessageAstFormattedContent: function() {
    return i
  },
  getRoleSubscriptionPurchaseSystemMessageContentMobile: function() {
    return M
  },
  getRoleSubscriptionPurchaseSystemMessageEventProperties: function() {
    return T
  },
  getRoleSubscriptionPurchaseSystemMessageFormattedContent: function() {
    return E
  },
  isEligibleForRoleSubscriptionPurchaseSystemMessageSettings: function() {
    return d
  },
  trackRoleSubscriptionPurchaseMessageTierClick: function() {
    return I
  }
});
var a = s("367907"),
  n = s("200876"),
  r = s("430824"),
  _ = s("594174");
s("709054"), s("523361");
var l = s("981631"),
  u = s("689938");

function E(e) {
  let {
    username: t,
    usernameOnClickHandler: s,
    roleSubscriptionOnClickHandler: a,
    guildId: n,
    roleSubscriptionData: r
  } = e, {
    content: _,
    formatParams: l
  } = o({
    username: t,
    usernameOnClickHandler: s,
    roleSubscriptionOnClickHandler: a,
    guildId: n,
    roleSubscriptionData: r
  });
  return _.format(l)
}

function i(e) {
  let {
    username: t,
    usernameOnClickHandler: s,
    roleSubscriptionOnClickHandler: a,
    guildId: n,
    roleSubscriptionData: r
  } = e, {
    content: _,
    formatParams: l
  } = o({
    username: t,
    usernameOnClickHandler: s,
    roleSubscriptionOnClickHandler: a,
    guildId: n,
    roleSubscriptionData: r
  });
  return _.astFormat(l)
}

function S(e, t) {
  var s, a;
  let n = r.default.getGuild(e),
    _ = null !== (s = null == t ? void 0 : t.total_months_subscribed) && void 0 !== s ? s : 0;
  return {
    guild: n,
    totalMonthsSubscribed: _,
    showWithDuration: _ > 0,
    isRenewal: null !== (a = null == t ? void 0 : t.is_renewal) && void 0 !== a && a
  }
}

function o(e) {
  let t, {
      username: s,
      usernameOnClickHandler: a,
      roleSubscriptionOnClickHandler: n,
      guildId: r,
      roleSubscriptionData: _
    } = e,
    {
      guild: l,
      totalMonthsSubscribed: E,
      showWithDuration: i,
      isRenewal: o
    } = S(r, _);
  return t = i ? o ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION : o ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN, {
    content: t,
    formatParams: {
      username: s,
      usernameHook: a,
      guildName: null == l ? void 0 : l.name,
      handleGuildNameClick: n,
      tierName: null == _ ? void 0 : _.tier_name,
      months: E
    }
  }
}

function M(e) {
  let t, {
      username: s,
      usernameOnClickHandler: a = l.NOOP,
      roleSubscriptionOnClickHandler: n = l.NOOP,
      guildId: r,
      roleSubscriptionData: _
    } = e,
    {
      guild: E,
      totalMonthsSubscribed: i,
      showWithDuration: o,
      isRenewal: M
    } = S(r, _),
    d = {
      guildName: null == E ? void 0 : E.name,
      tierName: null == _ ? void 0 : _.tier_name,
      username: s,
      usernameOnClick: a,
      roleSubscriptionOnClick: n
    };
  return t = o ? M ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
    ...d,
    months: i
  }) : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
    ...d,
    months: i
  }) : M ? u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(d) : u.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(d)
}

function d(e) {
  return (0, n.isCreatorMonetizationEnabledGuild)(e)
}

function I(e, t, s, n) {
  var r;
  a.default.trackWithMetadata(l.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null === (r = _.default.getCurrentUser()) || void 0 === r ? void 0 : r.id,
    channel_id: t,
    message_id: s,
    role_subscription_listing_id: n
  })
}

function T(e, t) {
  var s;
  return {
    guild_id: e.guild_id,
    sender: null === (s = _.default.getCurrentUser()) || void 0 === s ? void 0 : s.id,
    target_user: t.author.id,
    channel_id: e.id,
    message_id: t.id
  }
}