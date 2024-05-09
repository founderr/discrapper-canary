"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var i = l("735250"),
  a = l("470079"),
  n = l("481060"),
  s = l("768581"),
  r = l("924489"),
  o = l("950854"),
  c = l("491576"),
  d = l("719491");

function u(e) {
  var t, l, u, p, _;
  let {
    application: m,
    className: f,
    childrenClassName: h,
    animatesOnHover: I,
    onClick: g,
    ...v
  } = e, A = s.default.getApplicationIconURL({
    id: m.id,
    icon: m.icon,
    size: 48
  }), E = (0, c.default)({
    application: m
  }), C = null === (t = m.categories) || void 0 === t ? void 0 : t[0], R = (null !== (p = null === (l = m.directory_entry) || void 0 === l ? void 0 : l.guild_count) && void 0 !== p ? p : 0) > 0 || E.length > 0, x = a.useCallback(() => {
    g({
      mutualGuilds: E
    })
  }, [g, E]), N = (0, i.jsx)(r.default, {
    application: m,
    textVariant: "text-xs/normal",
    mutualGuilds: E,
    mutualGuildShownMax: 3,
    guildIconSize: r.GuildIconSize.SMALL,
    compact: !0
  });
  return (0, i.jsxs)(o.default, {
    className: f,
    onClick: x,
    iconSrc: A,
    header: m.name,
    subheader: null != C && (0, i.jsx)(n.Text, {
      tag: "span",
      color: "header-secondary",
      variant: "text-xs/normal",
      children: C.name
    }),
    animatesOnHover: I,
    ...v,
    children: [(null != m.description || null != h) && (0, i.jsx)("div", {
      className: h,
      children: (0, i.jsx)(n.Text, {
        className: d.listingDescription,
        variant: "text-sm/normal",
        lineClamp: 2,
        children: null !== (_ = null === (u = m.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== _ ? _ : m.description
      })
    }), R && (0, i.jsx)("div", {
      className: d.bottomGuildCountContainer,
      children: N
    })]
  })
}