"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var s = n("735250"),
  l = n("470079"),
  a = n("481060"),
  i = n("100527"),
  r = n("906732"),
  o = n("739566"),
  u = n("942951"),
  d = n("703656"),
  c = n("702346"),
  f = n("35125"),
  E = n("626751"),
  _ = n("891614"),
  m = n("981631"),
  T = n("176505"),
  I = n("689938"),
  p = n("658540");

function h(e) {
  let {
    username: t
  } = e;
  return (0, s.jsx)("div", {
    className: p.welcomeCardText,
    children: (0, s.jsx)(a.Text, {
      tag: "p",
      className: p.welcomeCardText,
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: I.default.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_TEXT.format({
        username: t,
        usernameHook: (e, t) => (0, s.jsx)(a.Text, {
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

function N(e) {
  let {
    guildId: t,
    user: n,
    username: l
  } = e;
  return (0, s.jsxs)("div", {
    className: p.welcomeCard,
    role: "img",
    "aria-label": I.default.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_ARIA_LABEL.format({
      username: l
    }),
    children: [(0, s.jsx)(_.default, {
      guildId: t,
      user: n,
      className: p.welcomeCardBadge
    }), (0, s.jsx)(h, {
      username: l
    })]
  })
}

function S(e) {
  var t, a;
  let {
    channel: _,
    message: I,
    compact: p
  } = e, h = (0, o.default)(I), S = function(e) {
    let {
      author: t,
      channel: n,
      message: s
    } = e, a = n.guild_id, o = (0, u.useUsernameHook)({
      user: s.author,
      channelId: n.id,
      guildId: a,
      messageId: s.id
    })(t), {
      analyticsLocations: c
    } = (0, r.default)(i.default.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), E = s.roleSubscriptionData, _ = l.useCallback(() => {
      (0, d.transitionTo)(m.Routes.CHANNEL(a, T.StaticChannelRoute.ROLE_SUBSCRIPTIONS), null, null, c), (null == E ? void 0 : E.role_subscription_listing_id) != null && (0, f.trackRoleSubscriptionPurchaseMessageTierClick)(a, n.id, s.id, E.role_subscription_listing_id)
    }, [a, n, s, E, c]);
    return null == E ? null : (0, f.getRoleSubscriptionPurchaseSystemMessageFormattedContent)({
      username: t.nick,
      usernameOnClickHandler: o,
      roleSubscriptionOnClickHandler: _,
      guildId: a,
      roleSubscriptionData: s.roleSubscriptionData
    })
  }({
    channel: _,
    message: I,
    author: h
  }), C = (null === (t = I.roleSubscriptionData) || void 0 === t ? void 0 : t.total_months_subscribed) != null && (null === (a = I.roleSubscriptionData) || void 0 === a ? void 0 : a.total_months_subscribed) <= 1;
  return null == S ? null : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(c.default, {
      icon: n("570111"),
      timestamp: I.timestamp,
      compact: p,
      children: S
    }), C && (0, s.jsx)(N, {
      guildId: _.guild_id,
      user: I.author,
      username: h.nick
    }), (0, s.jsx)(E.default, {
      channel: _,
      message: I
    })]
  })
}