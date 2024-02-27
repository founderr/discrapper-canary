"use strict";
r.r(t), r.d(t, {
  default: function() {
    return C
  }
});
var a = r("37983");
r("884691");
var n = r("414456"),
  i = r.n(n),
  o = r("316693"),
  l = r("446674"),
  s = r("77078"),
  c = r("679653"),
  d = r("42203"),
  u = r("305961"),
  h = r("957255"),
  p = r("18494"),
  m = r("162771"),
  g = r("36694"),
  f = r("945330"),
  b = r("465305"),
  y = r("606762"),
  x = r("854231"),
  k = r("699412");

function v(e) {
  let {
    title: t,
    can: r
  } = e, n = r ? g.default : f.default, o = (0, a.jsx)("div", {
    className: i(x.iconOuter, r ? x.iconCheck : x.iconCross),
    children: (0, a.jsx)(n, {
      className: x.icon
    })
  });
  return (0, a.jsxs)("div", {
    className: x.scope,
    children: [o, (0, a.jsx)("div", {
      className: x.scopeInner,
      children: (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        children: t
      })
    })]
  })
}

function C() {
  let e = (0, l.useStateFromStores)([p.default], () => p.default.getChannelId()),
    t = (0, l.useStateFromStores)([m.default], () => m.default.getGuildId()),
    r = (0, l.useStateFromStores)([d.default], () => d.default.getChannel(e)),
    n = (0, l.useStateFromStores)([u.default], () => u.default.getGuild(t)),
    g = (0, l.useStateFromStores)([h.default], () => h.default.computePermissions(r)),
    f = (0, l.useStateFromStores)([h.default], () => h.default.computePermissions(n)),
    C = (0, c.default)(r, !0),
    S = null != r ? (0, y.getChannelPermissionSpecMap)(r, !1, !0) : null,
    j = null != n ? b.default.getGuildPermissionSpecMap(n) : null,
    T = Object.values(null != S ? S : {}).map(e => {
      let {
        title: t,
        flag: r
      } = e, n = o.default.has(g, r);
      return (0, a.jsx)(v, {
        title: t,
        can: n
      }, t)
    }),
    w = Object.values(null != j ? j : {}).map(e => {
      let {
        title: t,
        flag: r
      } = e, n = o.default.has(f, r);
      return (0, a.jsx)(v, {
        title: t,
        can: n
      }, t)
    });
  return (0, a.jsx)("div", {
    className: i(k.panel, x.panel),
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