"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("592125"),
  o = n("430824"),
  u = n("584825"),
  d = n("406074"),
  c = n("660196"),
  f = n("36246"),
  h = n("305342"),
  m = n("981631"),
  p = n("689938"),
  E = n("416");

function g(e) {
  let {
    guildId: t,
    channelId: n
  } = e, g = (0, d.useSubscriptionListingsForChannel)({
    guildId: t,
    channelId: n
  }), C = (0, u.useGroupListingsForGuild)(t), S = (0, u.useSubscriptionsSettings)(t), _ = (0, s.useStateFromStores)([o.default], () => o.default.getGuild(t), [t]), T = null == _ ? void 0 : _.name, I = (0, s.useStateFromStores)([r.default], () => r.default.getChannel(n)), A = l.useMemo(() => {
    let e = {};
    for (let t of C)
      for (let n of t.subscription_listings_ids) e[n] = t.id;
    return e
  }, [C]);
  return ((0, c.default)({
    guildId: t,
    location: m.AnalyticsLocations.ROLE_SUBSCRIPTION_GATED_CHANNEL,
    relevantSubscriptionListingIds: g.map(e => e.id)
  }), null == _) ? (0, a.jsx)("div", {
    className: E.__invalid_spinnerContainer,
    children: (0, a.jsx)(i.Spinner, {
      className: E.__invalid_spinner
    })
  }) : (0, a.jsxs)(i.ScrollerAuto, {
    className: E.pageContainer,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-xl/semibold",
      className: E.joinCtaTitle,
      children: p.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_UPSELL_PAGE_CTA.format({
        serverName: T,
        channelName: null == I ? void 0 : I.name
      })
    }), (0, a.jsx)(i.Text, {
      className: E.joinCtaSubtitle,
      variant: "text-md/normal",
      color: "header-secondary",
      children: null == S ? void 0 : S.description
    }), (0, a.jsx)(f.default, {
      guildId: t,
      children: g.filter(e => null != A[e.id]).map(e => (0, a.jsx)(h.default, {
        guildId: t,
        listingId: e.id,
        groupListingId: A[e.id],
        analyticsLocation: m.AnalyticsLocations.ROLE_SUBSCRIPTION_GATED_CHANNEL
      }, e.id))
    })]
  })
}