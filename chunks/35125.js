n.d(t, {
  PA: function() {
return l;
  },
  Tn: function() {
return d;
  },
  _i: function() {
return N;
  },
  eI: function() {
return I;
  },
  vp: function() {
return c;
  },
  y8: function() {
return T;
  }
});
var i = n(367907),
  r = n(200876),
  a = n(430824),
  o = n(594174);
n(709054), n(523361);
var s = n(981631),
  u = n(689938);

function d(e) {
  let {
username: t,
usernameOnClickHandler: n,
roleSubscriptionOnClickHandler: i,
guildId: r,
roleSubscriptionData: a
  } = e, {
content: o,
formatParams: s
  } = _({
username: t,
usernameOnClickHandler: n,
roleSubscriptionOnClickHandler: i,
guildId: r,
roleSubscriptionData: a
  });
  return o.format(s);
}

function l(e) {
  let {
username: t,
usernameOnClickHandler: n,
roleSubscriptionOnClickHandler: i,
guildId: r,
roleSubscriptionData: a
  } = e, {
content: o,
formatParams: s
  } = _({
username: t,
usernameOnClickHandler: n,
roleSubscriptionOnClickHandler: i,
guildId: r,
roleSubscriptionData: a
  });
  return o.astFormat(s);
}

function E(e, t) {
  var n, i;
  let r = a.Z.getGuild(e),
o = null !== (n = null == t ? void 0 : t.total_months_subscribed) && void 0 !== n ? n : 0;
  return {
guild: r,
totalMonthsSubscribed: o,
showWithDuration: o > 0,
isRenewal: null !== (i = null == t ? void 0 : t.is_renewal) && void 0 !== i && i
  };
}

function _(e) {
  let t, {
  username: n,
  usernameOnClickHandler: i,
  roleSubscriptionOnClickHandler: r,
  guildId: a,
  roleSubscriptionData: o
} = e,
{
  guild: s,
  totalMonthsSubscribed: d,
  showWithDuration: l,
  isRenewal: _
} = E(a, o);
  return t = l ? _ ? u.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION : u.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION : _ ? u.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW : u.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN, {
content: t,
formatParams: {
  username: n,
  usernameHook: i,
  guildName: null == s ? void 0 : s.name,
  handleGuildNameClick: r,
  tierName: null == o ? void 0 : o.tier_name,
  months: d
}
  };
}

function c(e) {
  let t, {
  username: n,
  usernameOnClickHandler: i = s.dG4,
  roleSubscriptionOnClickHandler: r = s.dG4,
  guildId: a,
  roleSubscriptionData: o
} = e,
{
  guild: d,
  totalMonthsSubscribed: l,
  showWithDuration: _,
  isRenewal: c
} = E(a, o),
I = {
  guildName: null == d ? void 0 : d.name,
  tierName: null == o ? void 0 : o.tier_name,
  username: n,
  usernameOnClick: i,
  roleSubscriptionOnClick: r
};
  return t = _ ? c ? u.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_WITH_DURATION_MOBILE.astFormat({
...I,
months: l
  }) : u.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_WITH_DURATION_MOBILE.astFormat({
...I,
months: l
  }) : c ? u.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_RENEW_MOBILE.astFormat(I) : u.Z.Messages.SYSTEM_MESSAGE_ROLE_SUBSCRIPTION_JOIN_MOBILE.astFormat(I);
}

function I(e) {
  return (0, r.l)(e);
}

function T(e, t, n, r) {
  var a;
  i.ZP.trackWithMetadata(s.rMx.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CLICKED, {
guild_id: e,
user_id: null === (a = o.default.getCurrentUser()) || void 0 === a ? void 0 : a.id,
channel_id: t,
message_id: n,
role_subscription_listing_id: r
  });
}

function N(e, t) {
  var n;
  return {
guild_id: e.guild_id,
sender: null === (n = o.default.getCurrentUser()) || void 0 === n ? void 0 : n.id,
target_user: t.author.id,
channel_id: e.id,
message_id: t.id
  };
}