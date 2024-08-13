t.d(n, {
  PA: function() {
return d;
  },
  Tn: function() {
return s;
  },
  _i: function() {
return N;
  },
  eI: function() {
return I;
  },
  vp: function() {
return _;
  },
  y8: function() {
return T;
  }
});
var i = t(367907),
  r = t(200876),
  u = t(430824),
  o = t(594174);
t(709054), t(523361);
var a = t(981631),
  l = t(689938);

function s(e) {
  let {
username: n,
usernameOnClickHandler: t,
roleSubscriptionOnClickHandler: i,
guildId: r,
roleSubscriptionData: u
  } = e, {
content: o,
formatParams: a
  } = c({
username: n,
usernameOnClickHandler: t,
roleSubscriptionOnClickHandler: i,
guildId: r,
roleSubscriptionData: u
  });
  return o.format(a);
}

function d(e) {
  let {
username: n,
usernameOnClickHandler: t,
roleSubscriptionOnClickHandler: i,
guildId: r,
roleSubscriptionData: u
  } = e, {
content: o,
formatParams: a
  } = c({
username: n,
usernameOnClickHandler: t,
roleSubscriptionOnClickHandler: i,
guildId: r,
roleSubscriptionData: u
  });
  return o.astFormat(a);
}

function E(e, n) {
  var t, i;
  let r = u.Z.getGuild(e),
o = null !== (t = null == n ? void 0 : n.total_months_subscribed) && void 0 !== t ? t : 0;
  return {
guild: r,
totalMonthsSubscribed: o,
showWithDuration: o > 0,
isRenewal: null !== (i = null == n ? void 0 : n.is_renewal) && void 0 !== i && i
  };
}

function c(e) {
  let n, {
  username: t,
  usernameOnClickHandler: i,
  roleSubscriptionOnClickHandler: r,
  guildId: u,
  roleSubscriptionData: o
} = e,
{
  guild: a,
  totalMonthsSubscribed: s,
  showWithDuration: d,
  isRenewal: c
} = E(u, o);
  return n = d ? c ? l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION : c ? l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN, {
content: n,
formatParams: {
  username: t,
  usernameHook: i,
  guildName: null == a ? void 0 : a.name,
  handleGuildNameClick: r,
  tierName: null == o ? void 0 : o.tier_name,
  months: s
}
  };
}

function _(e) {
  let n, {
  username: t,
  usernameOnClickHandler: i = a.dG4,
  roleSubscriptionOnClickHandler: r = a.dG4,
  guildId: u,
  roleSubscriptionData: o
} = e,
{
  guild: s,
  totalMonthsSubscribed: d,
  showWithDuration: c,
  isRenewal: _
} = E(u, o),
I = {
  guildName: null == s ? void 0 : s.name,
  tierName: null == o ? void 0 : o.tier_name,
  username: t,
  usernameOnClick: i,
  roleSubscriptionOnClick: r
};
  return n = c ? _ ? l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
...I,
months: d
  }) : l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
...I,
months: d
  }) : _ ? l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(I) : l.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(I);
}

function I(e) {
  return (0, r.l)(e);
}

function T(e, n, t, r) {
  var u;
  i.ZP.trackWithMetadata(a.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
guild_id: e,
user_id: null === (u = o.default.getCurrentUser()) || void 0 === u ? void 0 : u.id,
channel_id: n,
message_id: t,
role_subscription_listing_id: r
  });
}

function N(e, n) {
  var t;
  return {
guild_id: e.guild_id,
sender: null === (t = o.default.getCurrentUser()) || void 0 === t ? void 0 : t.id,
target_user: n.author.id,
channel_id: e.id,
message_id: n.id
  };
}