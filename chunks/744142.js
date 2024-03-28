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
  c = l("950854"),
  o = l("491576"),
  d = l("141992");

function u(e) {
  var t, l, u, _, m;
  let {
    application: p,
    className: f,
    childrenClassName: h,
    animatesOnHover: C,
    onClick: g,
    ...I
  } = e, A = s.default.getApplicationIconURL({
    id: p.id,
    icon: p.icon,
    size: 48
  }), E = (0, o.default)({
    application: p
  }), v = null === (t = p.categories) || void 0 === t ? void 0 : t[0], x = (null !== (_ = null === (l = p.directory_entry) || void 0 === l ? void 0 : l.guild_count) && void 0 !== _ ? _ : 0) > 0 || E.length > 0, R = a.useCallback(() => {
    g({
      mutualGuilds: E
    })
  }, [g, E]), T = (0, i.jsx)(r.default, {
    application: p,
    textVariant: "text-xs/normal",
    mutualGuilds: E,
    mutualGuildShownMax: 3,
    guildIconSize: r.GuildIconSize.SMALL,
    compact: !0
  });
  return (0, i.jsxs)(c.default, {
    className: f,
    onClick: R,
    iconSrc: A,
    header: p.name,
    subheader: null != v && (0, i.jsx)(n.Text, {
      tag: "span",
      color: "header-secondary",
      variant: "text-xs/normal",
      children: v.name
    }),
    animatesOnHover: C,
    ...I,
    children: [(null != p.description || null != h) && (0, i.jsx)("div", {
      className: h,
      children: (0, i.jsx)(n.Text, {
        className: d.listingDescription,
        variant: "text-sm/normal",
        lineClamp: 2,
        children: null !== (m = null === (u = p.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== m ? m : p.description
      })
    }), x && (0, i.jsx)("div", {
      className: d.bottomGuildCountContainer,
      children: T
    })]
  })
}