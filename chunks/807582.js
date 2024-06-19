var a = i(735250);
i(470079);
var s = i(120356),
  l = i.n(s),
  t = i(481060),
  o = i(709586),
  c = i(267642),
  r = i(689938),
  d = i(95168);
n.Z = e => {
  let n, i, s, {
      guildFeature: u,
      guild: p,
      className: x,
      hideTooltip: f = !1,
      tooltipPosition: m = "left",
      onClick: g
    } = e,
    h = p.hasFeature(u),
    N = (0, c._p)(u);
  return (h ? (null != N && (s = r.Z.Messages.PREMIUM_GUILD_INCLUDED), n = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Z, {
      className: d.unlockedIcon
    }), (0, a.jsx)(t.Heading, {
      variant: "eyebrow",
      className: d.description,
      children: r.Z.Messages.PREMIUM_GUILD_TIER_UNLOCKED
    })]
  })) : (null != N && (s = r.Z.Messages.CLICK_TO_LEARN_MORE), n = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Z, {
      className: d.icon
    }), (0, a.jsx)(t.Heading, {
      variant: "eyebrow",
      className: d.description,
      children: null != N && (0, c.e9)(N)
    })]
  })), i = f || null == s ? (0, a.jsx)("div", {
    className: l()(d.availabilityIndicator, x),
    children: n
  }) : (0, a.jsx)(t.Tooltip, {
    position: m,
    text: s,
    children: e => (0, a.jsx)("div", {
      ...e,
      className: l()(d.availabilityIndicator, x),
      children: n
    })
  }), null == g || h) ? i : (0, a.jsx)(t.Clickable, {
    onClick: g,
    className: d.clickable,
    children: i
  })
}