"use strict";
r.r(t), r.d(t, {
  default: function() {
    return T
  }
});
var a = r("735250");
r("470079");
var i = r("120356"),
  n = r.n(i),
  l = r("149765"),
  o = r("442837"),
  c = r("481060"),
  s = r("933557"),
  d = r("592125"),
  u = r("430824"),
  h = r("496675"),
  p = r("944486"),
  g = r("914010"),
  m = r("263704"),
  f = r("465670"),
  y = r("233608"),
  b = r("71080"),
  x = r("677189"),
  k = r("277513");

function v(e) {
  let {
    title: t,
    can: r
  } = e, i = r ? m.default : f.default, l = (0, a.jsx)("div", {
    className: n()(x.iconOuter, r ? x.iconCheck : x.iconCross),
    children: (0, a.jsx)(i, {
      className: x.icon
    })
  });
  return (0, a.jsxs)("div", {
    className: x.scope,
    children: [l, (0, a.jsx)("div", {
      className: x.scopeInner,
      children: (0, a.jsx)(c.Text, {
        variant: "text-md/normal",
        children: t
      })
    })]
  })
}

function T() {
  let e = (0, o.useStateFromStores)([p.default], () => p.default.getChannelId()),
    t = (0, o.useStateFromStores)([g.default], () => g.default.getGuildId()),
    r = (0, o.useStateFromStores)([d.default], () => d.default.getChannel(e)),
    i = (0, o.useStateFromStores)([u.default], () => u.default.getGuild(t)),
    m = (0, o.useStateFromStores)([h.default], () => h.default.computePermissions(r)),
    f = (0, o.useStateFromStores)([h.default], () => h.default.computePermissions(i)),
    T = (0, s.default)(r, !0),
    S = null != r ? (0, b.getChannelPermissionSpecMap)(r, !1, !0) : null,
    j = null != i ? y.default.getGuildPermissionSpecMap(i) : null,
    w = Object.values(null != S ? S : {}).map(e => {
      let {
        title: t,
        flag: r
      } = e, i = l.has(m, r);
      return (0, a.jsx)(v, {
        title: t,
        can: i
      }, t)
    }),
    E = Object.values(null != j ? j : {}).map(e => {
      let {
        title: t,
        flag: r
      } = e, i = l.has(f, r);
      return (0, a.jsx)(v, {
        title: t,
        can: i
      }, t)
    });
  return (0, a.jsx)("div", {
    className: n()(k.panel, x.panel),
    children: (0, a.jsxs)("div", {
      className: x.panelInner,
      children: [(0, a.jsxs)("section", {
        className: x.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: null != T ? "Permissions in ".concat(T) : "No channel selected"
        }), w]
      }), (0, a.jsxs)("section", {
        className: x.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: null != i ? "Permissions in ".concat(i.name) : "No guild selected"
        }), E]
      })]
    })
  })
}