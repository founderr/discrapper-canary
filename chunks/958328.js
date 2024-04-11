"use strict";
r.r(t), r.d(t, {
  default: function() {
    return C
  }
});
var a = r("735250");
r("470079");
var n = r("803997"),
  i = r.n(n),
  l = r("149765"),
  o = r("442837"),
  s = r("481060"),
  c = r("933557"),
  d = r("592125"),
  u = r("430824"),
  h = r("496675"),
  p = r("944486"),
  m = r("914010"),
  g = r("263704"),
  f = r("465670"),
  b = r("233608"),
  y = r("71080"),
  x = r("275369"),
  k = r("779869");

function v(e) {
  let {
    title: t,
    can: r
  } = e, n = r ? g.default : f.default, l = (0, a.jsx)("div", {
    className: i()(x.iconOuter, r ? x.iconCheck : x.iconCross),
    children: (0, a.jsx)(n, {
      className: x.icon
    })
  });
  return (0, a.jsxs)("div", {
    className: x.scope,
    children: [l, (0, a.jsx)("div", {
      className: x.scopeInner,
      children: (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        children: t
      })
    })]
  })
}

function C() {
  let e = (0, o.useStateFromStores)([p.default], () => p.default.getChannelId()),
    t = (0, o.useStateFromStores)([m.default], () => m.default.getGuildId()),
    r = (0, o.useStateFromStores)([d.default], () => d.default.getChannel(e)),
    n = (0, o.useStateFromStores)([u.default], () => u.default.getGuild(t)),
    g = (0, o.useStateFromStores)([h.default], () => h.default.computePermissions(r)),
    f = (0, o.useStateFromStores)([h.default], () => h.default.computePermissions(n)),
    C = (0, c.default)(r, !0),
    S = null != r ? (0, y.getChannelPermissionSpecMap)(r, !1, !0) : null,
    j = null != n ? b.default.getGuildPermissionSpecMap(n) : null,
    T = Object.values(null != S ? S : {}).map(e => {
      let {
        title: t,
        flag: r
      } = e, n = l.has(g, r);
      return (0, a.jsx)(v, {
        title: t,
        can: n
      }, t)
    }),
    w = Object.values(null != j ? j : {}).map(e => {
      let {
        title: t,
        flag: r
      } = e, n = l.has(f, r);
      return (0, a.jsx)(v, {
        title: t,
        can: n
      }, t)
    });
  return (0, a.jsx)("div", {
    className: i()(k.panel, x.panel),
    children: (0, a.jsxs)("div", {
      className: x.panelInner,
      children: [(0, a.jsxs)("section", {
        className: x.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: null != C ? "Permissions in ".concat(C) : "No channel selected"
        }), T]
      }), (0, a.jsxs)("section", {
        className: x.section,
        children: [(0, a.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: null != n ? "Permissions in ".concat(n.name) : "No guild selected"
        }), w]
      })]
    })
  })
}