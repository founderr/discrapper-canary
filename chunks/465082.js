n.d(t, {
  Z: function() {
    return C
  }
});
var a = n(735250),
  i = n(470079),
  l = n(120356),
  r = n.n(l),
  c = n(91192),
  s = n(481060),
  o = n(270144),
  d = n(768581),
  u = n(4461),
  _ = n(924489),
  g = n(132871),
  m = n(491576),
  p = n(689938),
  f = n(644827);

function C(e) {
  var t, n, l;
  let {
    application: C,
    className: h,
    childrenClassName: x,
    showAdd: I,
    showMutualGuilds: R,
    showPrimaryCategory: b,
    children: T,
    onView: A,
    guildCountPosition: v = "top",
    subheaderTextVariant: E = "text-sm/normal",
    mutualGuildShownMax: P,
    guildIconSize: S,
    source: j
  } = e, N = (0, g.useApplicationDirectoryHistory)(e => e.guildId), y = (0, c.JA)(C.id), M = d.ZP.getApplicationIconURL({
    id: C.id,
    icon: C.icon,
    size: 48
  }), {
    canInstall: O,
    install: D
  } = (0, u.P)(C), Z = (0, m.Z)({
    application: C,
    showMutualGuilds: R
  }), L = i.useCallback(e => {
    e.stopPropagation(), D(j)
  }, [D, j]), k = null === (t = C.categories) || void 0 === t ? void 0 : t[0], Y = (null !== (l = null === (n = C.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== l ? l : 0) > 0 || Z.length > 0, H = (0, a.jsx)(_.Z, {
    application: C,
    textVariant: E,
    mutualGuilds: Z,
    mutualGuildShownMax: P,
    guildIconSize: S,
    compact: !0
  }), U = b && null != k, B = Y && "top" === v, G = Y && "bottom" === v, {
    applicationSubscriptionListingsShown: w
  } = (0, o.ZP)({
    applicationId: C.id,
    groupListingId: C.primary_sku_id,
    guildId: N
  }), F = (0, a.jsxs)("article", {
    children: [(0, a.jsxs)("div", {
      className: f.topWrapper,
      children: [(0, a.jsx)("img", {
        className: f.icon,
        alt: "",
        "aria-hidden": !0,
        src: M,
        width: 48,
        height: 48
      }), (0, a.jsxs)("div", {
        className: f.info,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/medium",
          children: C.name
        }), (U || B) && (0, a.jsxs)("div", {
          className: f.details,
          children: [U ? (0, a.jsx)(s.Text, {
            tag: "span",
            color: "header-secondary",
            variant: E,
            children: k.name
          }) : null, B ? (0, a.jsxs)(a.Fragment, {
            children: [U ? (0, a.jsx)("span", {
              className: f.bullet,
              children: "•"
            }) : null, H, w ? (0, a.jsxs)("div", {
              className: f.premiumContainer,
              children: [(0, a.jsx)("span", {
                className: f.bullet,
                children: "•"
              }), (0, a.jsx)(s.TicketIcon, {
                size: "xs",
                color: "currentColor"
              }), (0, a.jsx)(s.Text, {
                variant: "text-sm/medium",
                className: f.premiumText,
                children: p.Z.Messages.APPLICATION_DIRECTORY_LISTING_TOOLTIP_PREMIUM
              })]
            }) : null]
          }) : null]
        })]
      }), I ? (0, a.jsx)(s.Button, {
        size: s.Button.Sizes.SMALL,
        onClick: L,
        disabled: !O,
        children: p.Z.Messages.APP_DIRECTORY_LISTING_ADD_BUTTON
      }) : null]
    }), null != T || null != x ? (0, a.jsx)("div", {
      className: r()(x, f.__invalid_children),
      children: T
    }) : null, G ? (0, a.jsx)("div", {
      className: f.bottomGuildCountContainer,
      children: H
    }) : null]
  });
  return null != A ? (0, a.jsx)(s.Clickable, {
    tag: "li",
    onClick: () => A({
      mutualGuilds: Z
    }),
    className: r()(h, f.listing, f.clickable),
    ...y,
    children: F
  }) : (0, a.jsx)(s.FocusRing, {
    children: (0, a.jsx)("li", {
      className: r()(h, f.listing),
      ...y,
      children: F
    })
  })
}