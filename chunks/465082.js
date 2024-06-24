n.d(a, {
  Z: function() {
    return p
  }
});
var t = n(735250),
  i = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(91192),
  c = n(481060),
  o = n(270144),
  d = n(768581),
  u = n(4461),
  g = n(924489),
  m = n(132871),
  _ = n(491576),
  C = n(689938),
  h = n(644827);

function p(e) {
  var a, n, l;
  let {
    application: p,
    className: x,
    childrenClassName: R,
    showAdd: I,
    showMutualGuilds: T,
    showPrimaryCategory: E,
    children: v,
    onView: A,
    guildCountPosition: P = "top",
    subheaderTextVariant: f = "text-sm/normal",
    mutualGuildShownMax: j,
    guildIconSize: N,
    source: S
  } = e, y = (0, m.useApplicationDirectoryHistory)(e => e.guildId), O = (0, r.JA)(p.id), M = d.ZP.getApplicationIconURL({
    id: p.id,
    icon: p.icon,
    size: 48
  }), {
    canInstall: Z,
    install: D
  } = (0, u.P)(p), L = (0, _.Z)({
    application: p,
    showMutualGuilds: T
  }), b = i.useCallback(e => {
    e.stopPropagation(), D(S)
  }, [D, S]), Y = null === (a = p.categories) || void 0 === a ? void 0 : a[0], H = (null !== (l = null === (n = p.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== l ? l : 0) > 0 || L.length > 0, U = (0, t.jsx)(g.Z, {
    application: p,
    textVariant: f,
    mutualGuilds: L,
    mutualGuildShownMax: j,
    guildIconSize: N,
    compact: !0
  }), k = E && null != Y, w = H && "top" === P, B = H && "bottom" === P, {
    applicationSubscriptionListingsShown: G
  } = (0, o.ZP)({
    applicationId: p.id,
    groupListingId: p.primary_sku_id,
    guildId: y
  }), F = (0, t.jsxs)("article", {
    children: [(0, t.jsxs)("div", {
      className: h.topWrapper,
      children: [(0, t.jsx)("img", {
        className: h.icon,
        alt: "",
        "aria-hidden": !0,
        src: M,
        width: 48,
        height: 48
      }), (0, t.jsxs)("div", {
        className: h.info,
        children: [(0, t.jsx)(c.Heading, {
          variant: "heading-md/medium",
          children: p.name
        }), (k || w) && (0, t.jsxs)("div", {
          className: h.details,
          children: [k ? (0, t.jsx)(c.Text, {
            tag: "span",
            color: "header-secondary",
            variant: f,
            children: Y.name
          }) : null, w ? (0, t.jsxs)(t.Fragment, {
            children: [k ? (0, t.jsx)("span", {
              className: h.bullet,
              children: "•"
            }) : null, U, G ? (0, t.jsxs)("div", {
              className: h.premiumContainer,
              children: [(0, t.jsx)("span", {
                className: h.bullet,
                children: "•"
              }), (0, t.jsx)(c.TicketIcon, {
                size: "xs",
                color: "currentColor"
              }), (0, t.jsx)(c.Text, {
                variant: "text-sm/medium",
                className: h.premiumText,
                children: C.Z.Messages.APPLICATION_DIRECTORY_LISTING_TOOLTIP_PREMIUM
              })]
            }) : null]
          }) : null]
        })]
      }), I ? (0, t.jsx)(c.Button, {
        size: c.Button.Sizes.SMALL,
        onClick: b,
        disabled: !Z,
        children: C.Z.Messages.APP_DIRECTORY_LISTING_ADD_BUTTON
      }) : null]
    }), null != v || null != R ? (0, t.jsx)("div", {
      className: s()(R, h.__invalid_children),
      children: v
    }) : null, B ? (0, t.jsx)("div", {
      className: h.bottomGuildCountContainer,
      children: U
    }) : null]
  });
  return null != A ? (0, t.jsx)(c.Clickable, {
    tag: "li",
    onClick: () => A({
      mutualGuilds: L
    }),
    className: s()(x, h.listing, h.clickable),
    ...O,
    children: F
  }) : (0, t.jsx)(c.FocusRing, {
    children: (0, t.jsx)("li", {
      className: s()(x, h.listing),
      ...O,
      children: F
    })
  })
}