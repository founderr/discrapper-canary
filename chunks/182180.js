"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
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
  E = n("35125"),
  f = n("626751"),
  _ = n("891614"),
  T = n("981631"),
  I = n("176505"),
  m = n("689938"),
  N = n("658540");

function p(e) {
  let {
    username: t
  } = e;
  return (0, s.jsx)("div", {
    className: N.welcomeCardText,
    children: (0, s.jsx)(a.Text, {
      tag: "p",
      className: N.welcomeCardText,
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: m.default.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_TEXT.format({
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

function S(e) {
  let {
    guildId: t,
    user: n,
    username: l
  } = e;
  return (0, s.jsxs)("div", {
    className: N.welcomeCard,
    role: "img",
    "aria-label": m.default.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_ARIA_LABEL.format({
      username: l
    }),
    children: [(0, s.jsx)(_.default, {
      guildId: t,
      user: n,
      className: N.welcomeCardBadge
    }), (0, s.jsx)(p, {
      username: l
    })]
  })
}

function C(e) {
  var t, a;
  let {
    channel: _,
    message: m,
    compact: N
  } = e, p = (0, o.default)(m), C = function(e) {
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
    } = (0, r.default)(i.default.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE), f = s.roleSubscriptionData, _ = l.useCallback(() => {
      (0, d.transitionTo)(T.Routes.CHANNEL(a, I.StaticChannelRoute.ROLE_SUBSCRIPTIONS), null, null, c), (null == f ? void 0 : f.role_subscription_listing_id) != null && (0, E.trackRoleSubscriptionPurchaseMessageTierClick)(a, n.id, s.id, f.role_subscription_listing_id)
    }, [a, n, s, f, c]);
    return null == f ? null : (0, E.getRoleSubscriptionPurchaseSystemMessageFormattedContent)({
      username: t.nick,
      usernameOnClickHandler: o,
      roleSubscriptionOnClickHandler: _,
      guildId: a,
      roleSubscriptionData: s.roleSubscriptionData
    })
  }({
    channel: _,
    message: m,
    author: p
  }), A = (null === (t = m.roleSubscriptionData) || void 0 === t ? void 0 : t.total_months_subscribed) != null && (null === (a = m.roleSubscriptionData) || void 0 === a ? void 0 : a.total_months_subscribed) <= 1;
  return null == C ? null : (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(c.default, {
      icon: n("570111"),
      timestamp: m.timestamp,
      compact: N,
      children: C
    }), A && (0, s.jsx)(S, {
      guildId: _.guild_id,
      user: m.author,
      username: p.nick
    }), (0, s.jsx)(f.default, {
      channel: _,
      message: m
    })]
  })
}