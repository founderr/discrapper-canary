"use strict";
t.r(r), t.d(r, {
  default: function() {
    return j
  }
});
var a = t("735250");
t("470079");
var i = t("120356"),
  l = t.n(i),
  n = t("149765"),
  o = t("442837"),
  c = t("481060"),
  s = t("933557"),
  d = t("592125"),
  u = t("430824"),
  h = t("496675"),
  m = t("944486"),
  p = t("914010"),
  g = t("263704"),
  f = t("465670"),
  b = t("233608"),
  y = t("71080"),
  x = t("48077"),
  k = t("893048");

function v(e) {
  let {
    title: r,
    can: t
  } = e, i = t ? g.default : f.default, n = (0, a.jsx)("div", {
    className: l()(x.iconOuter, t ? x.iconCheck : x.iconCross),
    children: (0, a.jsx)(i, {
      className: x.icon
    })
  });
  return (0, a.jsxs)("div", {
    className: x.scope,
    children: [n, (0, a.jsx)("div", {
      className: x.scopeInner,
      children: (0, a.jsx)(c.Text, {
        variant: "text-md/normal",
        children: r
      })
    })]
  })
}

function j() {
  let e = (0, o.useStateFromStores)([m.default], () => m.default.getChannelId()),
    r = (0, o.useStateFromStores)([p.default], () => p.default.getGuildId()),
    t = (0, o.useStateFromStores)([d.default], () => d.default.getChannel(e)),
    i = (0, o.useStateFromStores)([u.default], () => u.default.getGuild(r)),
    g = (0, o.useStateFromStores)([h.default], () => h.default.computePermissions(t)),
    f = (0, o.useStateFromStores)([h.default], () => h.default.computePermissions(i)),
    j = (0, s.default)(t, !0),
    C = null != t ? (0, y.getChannelPermissionSpecMap)(t, !1, !0) : null,
    w = null != i ? b.default.getGuildPermissionSpecMap(i) : null,
    S = Object.values(null != C ? C : {}).map(e => {
      let {
        title: r,
        flag: t
      } = e, i = n.has(g, t);
      return (0, a.jsx)(v, {
        title: r,
        can: i
      }, r)
    }),
    N = Object.values(null != w ? w : {}).map(e => {
      let {
        title: r,
        flag: t
      } = e, i = n.has(f, t);
      return (0, a.jsx)(v, {
        title: r,
        can: i
      }, r)
    });
  return (0, a.jsx)("div", {
    className: l()(k.panel, x.panel),
    children: (0, a.jsxs)("div", {
      className: x.panelInner,
      children: [(0, a.jsxs)("section", {
        className: x.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: null != j ? "Permissions in ".concat(j) : "No channel selected"
        }), S]
      }), (0, a.jsxs)("section", {
        className: x.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: null != i ? "Permissions in ".concat(i.name) : "No guild selected"
        }), N]
      })]
    })
  })
}