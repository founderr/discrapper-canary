"use strict";
i.r(t), i.d(t, {
  default: function() {
    return u
  }
});
var n = i("735250"),
  a = i("470079"),
  l = i("481060"),
  s = i("768581"),
  r = i("924489"),
  o = i("950854"),
  c = i("491576"),
  d = i("719491");

function u(e) {
  var t, i, u, h, p;
  let {
    application: m,
    className: f,
    childrenClassName: g,
    animatesOnHover: C,
    onClick: _,
    ...I
  } = e, x = s.default.getApplicationIconURL({
    id: m.id,
    icon: m.icon,
    size: 48
  }), v = (0, c.default)({
    application: m
  }), A = null === (t = m.categories) || void 0 === t ? void 0 : t[0], E = (null !== (h = null === (i = m.directory_entry) || void 0 === i ? void 0 : i.guild_count) && void 0 !== h ? h : 0) > 0 || v.length > 0, N = a.useCallback(() => {
    _({
      mutualGuilds: v
    })
  }, [_, v]), T = (0, n.jsx)(r.default, {
    application: m,
    textVariant: "text-xs/normal",
    mutualGuilds: v,
    mutualGuildShownMax: 3,
    guildIconSize: r.GuildIconSize.SMALL,
    compact: !0
  });
  return (0, n.jsxs)(o.default, {
    className: f,
    onClick: N,
    iconSrc: x,
    header: m.name,
    subheader: null != A && (0, n.jsx)(l.Text, {
      tag: "span",
      color: "header-secondary",
      variant: "text-xs/normal",
      children: A.name
    }),
    animatesOnHover: C,
    ...I,
    children: [(null != m.description || null != g) && (0, n.jsx)("div", {
      className: g,
      children: (0, n.jsx)(l.Text, {
        className: d.listingDescription,
        variant: "text-sm/normal",
        lineClamp: 2,
        children: null !== (p = null === (u = m.directory_entry) || void 0 === u ? void 0 : u.short_description) && void 0 !== p ? p : m.description
      })
    }), E && (0, n.jsx)("div", {
      className: d.bottomGuildCountContainer,
      children: T
    })]
  })
}