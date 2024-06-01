"use strict";
n.r(t), n.d(t, {
  getRoleSubscriptionPurchaseSystemMessageAstFormattedContent: function() {
    return o
  },
  getRoleSubscriptionPurchaseSystemMessageContentMobile: function() {
    return S
  },
  getRoleSubscriptionPurchaseSystemMessageEventProperties: function() {
    return N
  },
  getRoleSubscriptionPurchaseSystemMessageFormattedContent: function() {
    return E
  },
  isEligibleForRoleSubscriptionPurchaseSystemMessageSettings: function() {
    return T
  },
  trackRoleSubscriptionPurchaseMessageTierClick: function() {
    return I
  }
});
var a = n("367907"),
  s = n("200876"),
  r = n("430824"),
  i = n("594174");
n("709054"), n("523361");
var u = n("981631"),
  l = n("689938");

function E(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: a,
    guildId: s,
    roleSubscriptionData: r
  } = e, {
    content: i,
    formatParams: u
  } = d({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: a,
    guildId: s,
    roleSubscriptionData: r
  });
  return i.format(u)
}

function o(e) {
  let {
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: a,
    guildId: s,
    roleSubscriptionData: r
  } = e, {
    content: i,
    formatParams: u
  } = d({
    username: t,
    usernameOnClickHandler: n,
    roleSubscriptionOnClickHandler: a,
    guildId: s,
    roleSubscriptionData: r
  });
  return i.astFormat(u)
}

function _(e, t) {
  var n, a;
  let s = r.default.getGuild(e),
    i = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
  return {
    guild: s,
    totalMonthsSubscribed: i,
    showWithDuration: i > 0,
    isRenewal: null !== (a = null == t ? void 0 : t.is_renewal) && void 0 !== a && a
  }
}

function d(e) {
  let t, {
      username: n,
      usernameOnClickHandler: a,
      roleSubscriptionOnClickHandler: s,
      guildId: r,
      roleSubscriptionData: i
    } = e,
    {
      guild: u,
      totalMonthsSubscribed: E,
      showWithDuration: o,
      isRenewal: d
    } = _(r, i);
  return t = o ? d ? l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION : d ? l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN, {
    content: t,
    formatParams: {
      username: n,
      usernameHook: a,
      guildName: null == u ? void 0 : u.name,
      handleGuildNameClick: s,
      tierName: null == i ? void 0 : i.tier_name,
      months: E
    }
  }
}

function S(e) {
  let t, {
      username: n,
      usernameOnClickHandler: a = u.NOOP,
      roleSubscriptionOnClickHandler: s = u.NOOP,
      guildId: r,
      roleSubscriptionData: i
    } = e,
    {
      guild: E,
      totalMonthsSubscribed: o,
      showWithDuration: d,
      isRenewal: S
    } = _(r, i),
    T = {
      guildName: null == E ? void 0 : E.name,
      tierName: null == i ? void 0 : i.tier_name,
      username: n,
      usernameOnClick: a,
      roleSubscriptionOnClick: s
    };
  return t = d ? S ? l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
    ...T,
    months: o
  }) : l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
    ...T,
    months: o
  }) : S ? l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(T) : l.default.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(T)
}

function T(e) {
  return (0, s.isCreatorMonetizationEnabledGuild)(e)
}

function I(e, t, n, s) {
  var r;
  a.default.trackWithMetadata(u.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null === (r = i.default.getCurrentUser()) || void 0 === r ? void 0 : r.id,
    channel_id: t,
    message_id: n,
    role_subscription_listing_id: s
  })
}

function N(e, t) {
  var n;
  return {
    guild_id: e.guild_id,
    sender: null === (n = i.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
    target_user: t.author.id,
    channel_id: e.id,
    message_id: t.id
  }
}