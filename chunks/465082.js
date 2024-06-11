"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var l = a("735250"),
  i = a("470079"),
  n = a("120356"),
  s = a.n(n),
  r = a("91192"),
  c = a("481060"),
  u = a("270144"),
  d = a("191741"),
  o = a("768581"),
  g = a("4461"),
  m = a("924489"),
  _ = a("132871"),
  p = a("491576"),
  C = a("689938"),
  h = a("371165");

function f(e) {
  var t, a, n;
  let {
    application: f,
    className: A,
    childrenClassName: I,
    showAdd: R,
    showMutualGuilds: T,
    showPrimaryCategory: x,
    children: E,
    onView: v,
    guildCountPosition: S = "top",
    subheaderTextVariant: P = "text-sm/normal",
    mutualGuildShownMax: y,
    guildIconSize: N,
    source: j
  } = e, O = (0, _.useApplicationDirectoryHistory)(e => e.guildId), D = (0, r.useListItem)(f.id), L = o.default.getApplicationIconURL({
    id: f.id,
    icon: f.icon,
    size: 48
  }), {
    canInstall: M,
    install: Y
  } = (0, g.useInstallApplication)(f), b = (0, p.default)({
    application: f,
    showMutualGuilds: T
  }), H = i.useCallback(e => {
    e.stopPropagation(), Y(j)
  }, [Y, j]), k = null === (t = f.categories) || void 0 === t ? void 0 : t[0], U = (null !== (n = null === (a = f.directory_entry) || void 0 === a ? void 0 : a.guild_count) && void 0 !== n ? n : 0) > 0 || b.length > 0, G = (0, l.jsx)(m.default, {
    application: f,
    textVariant: P,
    mutualGuilds: b,
    mutualGuildShownMax: y,
    guildIconSize: N,
    compact: !0
  }), F = x && null != k, w = U && "top" === S, B = U && "bottom" === S, {
    applicationSubscriptionListingsShown: V
  } = (0, u.default)({
    applicationId: f.id,
    groupListingId: f.primary_sku_id,
    guildId: O
  }), z = (0, l.jsxs)("article", {
    children: [(0, l.jsxs)("div", {
      className: h.topWrapper,
      children: [(0, l.jsx)("img", {
        className: h.icon,
        alt: "",
        "aria-hidden": !0,
        src: L,
        width: 48,
        height: 48
      }), (0, l.jsxs)("div", {
        className: h.info,
        children: [(0, l.jsx)(c.Heading, {
          variant: "heading-md/medium",
          children: f.name
        }), (F || w) && (0, l.jsxs)("div", {
          className: h.details,
          children: [F ? (0, l.jsx)(c.Text, {
            tag: "span",
            color: "header-secondary",
            variant: P,
            children: k.name
          }) : null, w ? (0, l.jsxs)(l.Fragment, {
            children: [F ? (0, l.jsx)("span", {
              className: h.bullet,
              children: "•"
            }) : null, G, V ? (0, l.jsxs)("div", {
              className: h.premiumContainer,
              children: [(0, l.jsx)("span", {
                className: h.bullet,
                children: "•"
              }), (0, l.jsx)(d.default, {
                width: 16,
                height: 16
              }), (0, l.jsx)(c.Text, {
                variant: "text-sm/medium",
                className: h.premiumText,
                children: C.default.Messages.APPLICATION_DIRECTORY_LISTING_TOOLTIP_PREMIUM
              })]
            }) : null]
          }) : null]
        })]
      }), R ? (0, l.jsx)(c.Button, {
        size: c.Button.Sizes.SMALL,
        onClick: H,
        disabled: !M,
        children: C.default.Messages.APP_DIRECTORY_LISTING_ADD_BUTTON
      }) : null]
    }), null != E || null != I ? (0, l.jsx)("div", {
      className: s()(I, h.__invalid_children),
      children: E
    }) : null, B ? (0, l.jsx)("div", {
      className: h.bottomGuildCountContainer,
      children: G
    }) : null]
  });
  return null != v ? (0, l.jsx)(c.Clickable, {
    tag: "li",
    onClick: () => v({
      mutualGuilds: b
    }),
    className: s()(A, h.listing, h.clickable),
    ...D,
    children: z
  }) : (0, l.jsx)(c.FocusRing, {
    children: (0, l.jsx)("li", {
      className: s()(A, h.listing),
      ...D,
      children: z
    })
  })
}