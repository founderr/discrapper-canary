t.d(n, {
  PA: function() {
    return c
  },
  Tn: function() {
    return a
  },
  _i: function() {
    return S
  },
  eI: function() {
    return _
  },
  vp: function() {
    return E
  },
  y8: function() {
    return I
  }
});
var r = t(367907),
  i = t(200876),
  l = t(430824),
  o = t(594174);
t(709054), t(523361);
var u = t(981631),
  s = t(689938);

function a(e) {
  let {
    username: n,
    usernameOnClickHandler: t,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  } = e, {
    content: o,
    formatParams: u
  } = f({
    username: n,
    usernameOnClickHandler: t,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  });
  return o.format(u)
}

function c(e) {
  let {
    username: n,
    usernameOnClickHandler: t,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  } = e, {
    content: o,
    formatParams: u
  } = f({
    username: n,
    usernameOnClickHandler: t,
    roleSubscriptionOnClickHandler: r,
    guildId: i,
    roleSubscriptionData: l
  });
  return o.astFormat(u)
}

function d(e, n) {
  var t, r;
  let i = l.Z.getGuild(e),
    o = null !== (t = null == n ? void 0 : n.total_months_subscribed) && void 0 !== t ? t : 0;
  return {
    guild: i,
    totalMonthsSubscribed: o,
    showWithDuration: o > 0,
    isRenewal: null !== (r = null == n ? void 0 : n.is_renewal) && void 0 !== r && r
  }
}

function f(e) {
  let n, {
      username: t,
      usernameOnClickHandler: r,
      roleSubscriptionOnClickHandler: i,
      guildId: l,
      roleSubscriptionData: o
    } = e,
    {
      guild: u,
      totalMonthsSubscribed: a,
      showWithDuration: c,
      isRenewal: f
    } = d(l, o);
  return n = c ? f ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION : f ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN, {
    content: n,
    formatParams: {
      username: t,
      usernameHook: r,
      guildName: null == u ? void 0 : u.name,
      handleGuildNameClick: i,
      tierName: null == o ? void 0 : o.tier_name,
      months: a
    }
  }
}

function E(e) {
  let n, {
      username: t,
      usernameOnClickHandler: r = u.dG4,
      roleSubscriptionOnClickHandler: i = u.dG4,
      guildId: l,
      roleSubscriptionData: o
    } = e,
    {
      guild: a,
      totalMonthsSubscribed: c,
      showWithDuration: f,
      isRenewal: E
    } = d(l, o),
    _ = {
      guildName: null == a ? void 0 : a.name,
      tierName: null == o ? void 0 : o.tier_name,
      username: t,
      usernameOnClick: r,
      roleSubscriptionOnClick: i
    };
  return n = f ? E ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
    ..._,
    months: c
  }) : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
    ..._,
    months: c
  }) : E ? s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(_) : s.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(_)
}

function _(e) {
  return (0, i.l)(e)
}

function I(e, n, t, i) {
  var l;
  r.ZP.trackWithMetadata(u.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
    guild_id: e,
    user_id: null === (l = o.default.getCurrentUser()) || void 0 === l ? void 0 : l.id,
    channel_id: n,
    message_id: t,
    role_subscription_listing_id: i
  })
}

function S(e, n) {
  var t;
  return {
    guild_id: e.guild_id,
    sender: null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
    target_user: n.author.id,
    channel_id: e.id,
    message_id: n.id
  }
}