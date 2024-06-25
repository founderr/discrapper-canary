n.d(t, {
  Z: function() {
    return A
  }
});
var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(100527),
  r = n(906732),
  o = n(739566),
  c = n(942951),
  u = n(703656),
  d = n(702346),
  E = n(35125),
  _ = n(626751),
  I = n(891614),
  T = n(981631),
  m = n(176505),
  N = n(689938),
  h = n(918624);

function C(e) {
  let {
    username: t
  } = e;
  return (0, s.jsx)("div", {
    className: h.welcomeCardText,
    children: (0, s.jsx)(l.Text, {
      tag: "p",
      className: h.welcomeCardText,
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: N.Z.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_TEXT.format({
        username: t,
        usernameHook: (e, t) => (0, s.jsx)(l.Text, {
          tag: "span",
          color: "status-positive-text",
          variant: "heading-xxl/extrabold",
          lineClamp: 3,
          children: e
        }, t)
      })
    })
  })
}

function S(e) {
  let {
    guildId: t,
    user: n,
    username: i
  } = e;
  return (0, s.jsxs)("div", {
    className: h.welcomeCard,
    role: "img",
    "aria-label": N.Z.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_ARIA_LABEL.format({
      username: i
    }),
    children: [(0, s.jsx)(I.Z, {
      guildId: t,
      user: n,
      className: h.welcomeCardBadge
    }), (0, s.jsx)(C, {
      username: i
    })]
  })
}

function A(e) {
  var t, l;
  let {
    channel: I,
    message: N,
    compact: h
  } = e, C = (0, o.ZP)(N), A = function(e) {
    let {
      author: t,
      channel: n,
      message: s
    } = e, l = n.guild_id, o = (0, c.l)({
      user: s.author,
      channelId: n.id,
      guildId: l,
      messageId: s.id
    })(t), {
      analyticsLocations: d
    } = (0, r.ZP)(a.Z.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), _ = s.roleSubscriptionData, I = i.useCallback(() => {
      (0, u.uL)(T.Z5c.CHANNEL(l, m.oC.ROLE_SUBSCRIPTIONS), null, null, d), (null == _ ? void 0 : _.role_subscription_listing_id) != null && (0, E.y8)(l, n.id, s.id, _.role_subscription_listing_id)
    }, [l, n, s, _, d]);
    return null == _ ? null : (0, E.Tn)({
      username: t.nick,
      usernameOnClickHandler: o,
      roleSubscriptionOnClickHandler: I,
      guildId: l,
      roleSubscriptionData: s.roleSubscriptionData
    })
  }({
    channel: I,
    message: N,
    author: C
  }), g = (null === (t = N.roleSubscriptionData) || void 0 === t ? void 0 : t.total_months_subscribed) != null && (null === (l = N.roleSubscriptionData) || void 0 === l ? void 0 : l.total_months_subscribed) <= 1;
  return null == A ? null : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(d.Z, {
      icon: n(570111),
      timestamp: N.timestamp,
      compact: h,
      children: A
    }), g && (0, s.jsx)(S, {
      guildId: I.guild_id,
      user: N.author,
      username: C.nick
    }), (0, s.jsx)(_.Z, {
      channel: I,
      message: N
    })]
  })
}