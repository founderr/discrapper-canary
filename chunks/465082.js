a.d(n, {
  Z: function() {
    return p
  }
});
var t = a(735250),
  i = a(470079),
  l = a(120356),
  s = a.n(l),
  r = a(91192),
  c = a(481060),
  o = a(270144),
  d = a(768581),
  u = a(4461),
  g = a(924489),
  m = a(132871),
  _ = a(491576),
  C = a(689938),
  h = a(644827);

function p(e) {
  var n, a, l;
  let {
    application: p,
    className: x,
    childrenClassName: I,
    showAdd: R,
    showMutualGuilds: T,
    showPrimaryCategory: A,
    children: E,
    onView: v,
    guildCountPosition: P = "top",
    subheaderTextVariant: N = "text-sm/normal",
    mutualGuildShownMax: f,
    guildIconSize: j,
    source: S
  } = e, O = (0, m.useApplicationDirectoryHistory)(e => e.guildId), y = (0, r.JA)(p.id), M = d.ZP.getApplicationIconURL({
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
  }, [D, S]), Y = null === (n = p.categories) || void 0 === n ? void 0 : n[0], H = (null !== (l = null === (a = p.directory_entry) || void 0 === a ? void 0 : a.guild_count) && void 0 !== l ? l : 0) > 0 || L.length > 0, U = (0, t.jsx)(g.Z, {
    application: p,
    textVariant: N,
    mutualGuilds: L,
    mutualGuildShownMax: f,
    guildIconSize: j,
    compact: !0
  }), k = A && null != Y, w = H && "top" === P, B = H && "bottom" === P, {
    applicationSubscriptionListingsShown: G
  } = (0, o.ZP)({
    applicationId: p.id,
    groupListingId: p.primary_sku_id,
    guildId: O
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
            variant: N,
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
      }), R ? (0, t.jsx)(c.Button, {
        size: c.Button.Sizes.SMALL,
        onClick: b,
        disabled: !Z,
        children: C.Z.Messages.APP_DIRECTORY_LISTING_ADD_BUTTON
      }) : null]
    }), null != E || null != I ? (0, t.jsx)("div", {
      className: s()(I, h.__invalid_children),
      children: E
    }) : null, B ? (0, t.jsx)("div", {
      className: h.bottomGuildCountContainer,
      children: U
    }) : null]
  });
  return null != v ? (0, t.jsx)(c.Clickable, {
    tag: "li",
    onClick: () => v({
      mutualGuilds: L
    }),
    className: s()(x, h.listing, h.clickable),
    ...y,
    children: F
  }) : (0, t.jsx)(c.FocusRing, {
    children: (0, t.jsx)("li", {
      className: s()(x, h.listing),
      ...y,
      children: F
    })
  })
}