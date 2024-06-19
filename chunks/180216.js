n.d(t, {
  Z: function() {
    return f
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(481060),
  r = n(592125),
  o = n(430824),
  c = n(584825),
  u = n(406074),
  d = n(660196),
  h = n(36246),
  m = n(305342),
  p = n(981631),
  E = n(689938),
  g = n(212017);

function f(e) {
  let {
    guildId: t,
    channelId: n
  } = e, f = (0, u.C)({
    guildId: t,
    channelId: n
  }), C = (0, c.GG)(t), _ = (0, c.YB)(t), I = (0, s.e7)([o.Z], () => o.Z.getGuild(t), [t]), x = null == I ? void 0 : I.name, T = (0, s.e7)([r.Z], () => r.Z.getChannel(n)), N = i.useMemo(() => {
    let e = {};
    for (let t of C)
      for (let n of t.subscription_listings_ids) e[n] = t.id;
    return e
  }, [C]);
  return ((0, d.Z)({
    guildId: t,
    location: p.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL,
    relevantSubscriptionListingIds: f.map(e => e.id)
  }), null == I) ? (0, l.jsx)("div", {
    className: g.__invalid_spinnerContainer,
    children: (0, l.jsx)(a.Spinner, {
      className: g.__invalid_spinner
    })
  }) : (0, l.jsxs)(a.ScrollerAuto, {
    className: g.pageContainer,
    children: [(0, l.jsx)(a.Heading, {
      variant: "heading-xl/semibold",
      className: g.joinCtaTitle,
      children: E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_UPSELL_PAGE_CTA.format({
        serverName: x,
        channelName: null == T ? void 0 : T.name
      })
    }), (0, l.jsx)(a.Text, {
      className: g.joinCtaSubtitle,
      variant: "text-md/normal",
      color: "header-secondary",
      children: null == _ ? void 0 : _.description
    }), (0, l.jsx)(h.Z, {
      guildId: t,
      children: f.filter(e => null != N[e.id]).map(e => (0, l.jsx)(m.Z, {
        guildId: t,
        listingId: e.id,
        groupListingId: N[e.id],
        analyticsLocation: p.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL
      }, e.id))
    })]
  })
}