t.d(s, {
  Z: function() {
    return E
  }
}), t(47120);
var a = t(735250),
  n = t(470079),
  l = t(120356),
  i = t.n(l),
  r = t(481060),
  c = t(44315),
  o = t(937615),
  d = t(981631),
  _ = t(689938),
  m = t(332021);

function T(e) {
  let {
    price: s,
    selected: t,
    onClick: n
  } = e;
  return (0, a.jsxs)(r.Clickable, {
    className: i()(m.priceRow, {
      [m.selected]: t
    }),
    onClick: n,
    children: [t ? (0, a.jsx)(r.CircleCheckIcon, {
      size: "custom",
      width: 20,
      height: 20,
      secondaryColor: (0, c.Lq)(d.Ilk.WHITE_500),
      color: (0, c.Lq)(d.Ilk.BRAND_500)
    }) : (0, a.jsx)("svg", {
      width: "20",
      height: "20",
      children: (0, a.jsx)("circle", {
        cx: 10,
        cy: 10,
        r: 10,
        className: m.circle
      })
    }), (0, a.jsxs)("div", {
      className: m.priceRowText,
      children: [(0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        tag: "span",
        children: (0, o.T4)(s, d.pKx.USD)
      }), (0, a.jsx)(r.Text, {
        variant: "text-xxs/medium",
        tag: "span",
        children: "/mo."
      })]
    })]
  })
}

function E(e) {
  let {
    selectedTemplate: s,
    handleSelectTemplate: t,
    newPricesToPick: l
  } = e, [i, c] = n.useState(0);
  return (0, a.jsxs)("div", {
    className: m.container,
    children: [(0, a.jsxs)("div", {
      className: m.content,
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-md/semibold",
        children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_PRICE_RESELECTION_HEADER.format({
          tierName: s.listings[0].name
        })
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        className: m.bodyText,
        children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_PRICE_RESELECTION_BODY.format({
          price: (0, o.T4)(s.listings[0].price_tier, d.pKx.USD)
        })
      }), l.map((e, s) => (0, a.jsx)(T, {
        price: e,
        selected: s === i,
        onClick: () => c(s)
      }, e))]
    }), (0, a.jsx)(r.Button, {
      size: r.Button.Sizes.MEDIUM,
      onClick: () => {
        t({
          ...s,
          listings: [{
            ...s.listings[0],
            price_tier: l[i]
          }]
        })
      },
      children: _.Z.Messages.GUILD_ROLE_SUBSCRIPTION_TIER_TEMPLATE_MODAL_SELECT_TEMPLATE_BUTTON
    })]
  })
}