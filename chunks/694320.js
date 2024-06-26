"use strict";
n.d(t, {
  Z: function() {
    return p
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(100527),
  _ = n(906732),
  c = n(104494),
  d = n(639119),
  E = n(165583),
  I = n(592125),
  T = n(944486),
  h = n(672752),
  f = n(626135),
  S = n(981631),
  N = n(474936),
  A = n(689938),
  m = n(415088);

function O() {
  (0, l.openModalLazy)(async () => {
    let {
      default: e
    } = await n.e("3289").then(n.bind(n, 682609));
    return t => (0, i.jsx)(e, {
      channel: null,
      ...t
    })
  })
}

function p(e) {
  var t;
  let {
    className: n,
    iconOnly: s,
    remaining: p
  } = e, R = (0, a.e7)([T.Z, I.Z], () => {
    let e = I.Z.getChannel(T.Z.getChannelId());
    return (null == e ? void 0 : e.isPrivate()) ? S.ZY5.DM_CHANNEL : S.ZY5.GUILD_CHANNEL
  }), {
    analyticsLocations: g
  } = (0, _.ZP)(u.Z.PREMIUM_UPSELL), C = (0, c.Ng)(), v = (0, d.N)(), L = (0, c.Wp)(C, N.Si.TIER_2), D = (null == v ? void 0 : null === (t = v.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === N.Si.TIER_2;
  return (r.useEffect(() => {
    f.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
      type: "longer messages inline",
      location: {
        location_page: R,
        location_section: S.jXE.CHANNEL_TEXT_AREA
      },
      location_stack: g
    })
  }, [R, g]), (D || L) && p < 0) ? (0, i.jsx)(E.ZP, {
    type: N.cd.MESSAGE_LENGTH_IN_EDITOR_UPSELL,
    subscriptionTier: N.Si.TIER_2,
    context: p,
    discountOffer: C,
    trialOffer: v,
    children: A.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
      onLearnMore: O
    })
  }) : s ? (0, i.jsx)(l.Clickable, {
    className: m.iconOnly,
    onClick: () => O(),
    children: (0, i.jsx)(l.Tooltip, {
      text: A.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP_WITHOUT_LINK,
      position: "top",
      children: e => (0, i.jsx)(l.NitroWheelIcon, {
        size: "md",
        color: "currentColor",
        className: m.premium,
        ...e
      })
    })
  }) : (0, i.jsxs)("div", {
    className: o()(m.root, n),
    children: [(0, i.jsx)(l.NitroWheelIcon, {
      size: "md",
      className: m.premium,
      color: h.JX.PREMIUM_TIER_2
    }), (0, i.jsx)(l.Text, {
      className: m.text,
      variant: "text-sm/normal",
      children: A.Z.Messages.PREMIUM_MESSAGE_LENGTH_UPSELL_TOOLTIP.format({
        onLearnMore: O
      })
    })]
  })
}