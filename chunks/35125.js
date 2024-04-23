"use strict";
n.r(t), n.d(t, {
  getRoleSubscriptionPurchaseSystemMessageAstFormattedContent: function() {
    return d
  },
  getRoleSubscriptionPurchaseSystemMessageContentMobile: function() {
    return T
  },
  getRoleSubscriptionPurchaseSystemMessageEventProperties: function() {
    return S
  },
  getRoleSubscriptionPurchaseSystemMessageFormattedContent: function() {
    return l
  },
  isEligibleForRoleSubscriptionPurchaseSystemMessageSettings: function() {
    return f
  },
  trackRoleSubscriptionPurchaseMessageTierClick: function() {
    return _
  }
});
var a = n("367907"),
  r = n("200876"),
  i = n("430824"),
  s = n("594174");
n("709054"), n("523361");
var u = n("981631"),
  o = n("689938");

function l(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: a,
    guildId: r,
    roleSubscriptionData: i
  } = e, {
    content: s,
    formatParams: u
  } = c({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: a,
    guildId: r,
    roleSubscriptionData: i
  });
  return s.format(u)
}

function d(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: a,
    guildId: r,
    roleSubscriptionData: i
  } = e, {
    content: s,
    formatParams: u
  } = c({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: a,
    guildId: r,
    roleSubscriptionData: i
  });
  return s.astFormat(u)
}

function E(e, t) {
  var n, a;
  let r = i.default.getGuild(e),
    s = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
  return {
    guild: r,
    totalMonthsSubscribed: s,
    showWithDuration: s > 0,
    isRenewal: null !== (a = null == t ? void 0 : t.is_renewal) && void 0 !== a && a
  }
}

function c(e) {
  let t, {
      username: n,
      usernameOnClickHandler: a,
      roleSubscriptionOnClickHandler: r,
      guildId: i,
      roleSubscriptionData: s
    } = e,
    {
      guild: u,
      totalMonthsSubscribed: l,
      showWithDuration: d,
      isRenewal: c
    } = E(i, s);
  return t = d ? c ? o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION : c ? o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN, {
    content: t,
    formatParams: {
      username: n,
      usernameHook: a,
      guildName: null == u ? void 0 : u.name,
      handleGuildNameClick: r,
      tierName: null == s ? void 0 : s.tier_name,
      months: l
    }
  }
}

function T(e) {
  let t, {
      username: n,
      usernameOnClickHandler: a = u.NOOP,
      roleSubscriptionOnClickHandler: r = u.NOOP,
      guildId: i,
      roleSubscriptionData: s
    } = e,
    {
      guild: l,
      totalMonthsSubscribed: d,
      showWithDuration: c,
      isRenewal: T
    } = E(i, s),
    f = {
      guildName: null == l ? void 0 : l.name,
      tierName: null == s ? void 0 : s.tier_name,
      username: n,
      usernameOnClick: a,
      roleSubscriptionOnClick: r
    };
  return t = c ? T ? o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
    ...f,
    months: d
  }) : o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
    ...f,
    months: d
  }) : T ? o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(f) : o.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(f)
}

function f(e) {
  return (0, r.isCreatorMonetizationEnabledGuild)(e)
}

function _(e, t, n, r) {
  var i;
  a.default.trackWithMetadata(u.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null === (i = s.default.getCurrentUser()) || void 0 === i ? void 0 : i.id,
    channel_id: t,
    message_id: n,
    role_subscription_listing_id: r
  })
}

function S(e, t) {
  var n;
  return {
    guild_id: e.guild_id,
    sender: null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
    target_user: t.author.id,
    channel_id: e.id,
    message_id: t.id
  }
}