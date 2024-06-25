t.d(r, {
  Z: function() {
    return k
  }
});
var a = t(735250);
t(470079);
var n = t(120356),
  i = t.n(n),
  l = t(149765),
  o = t(442837),
  c = t(481060),
  s = t(933557),
  d = t(592125),
  u = t(430824),
  h = t(496675),
  m = t(944486),
  g = t(914010),
  p = t(233608),
  b = t(71080),
  y = t(286770),
  x = t(719556);

function f(e) {
  let {
    title: r,
    can: t
  } = e, n = t ? c.CheckmarkLargeIcon : c.CloseSmallIcon, l = (0, a.jsx)("div", {
    className: i()(y.iconOuter, t ? y.iconCheck : y.iconCross),
    children: (0, a.jsx)(n, {
      className: y.icon
    })
  });
  return (0, a.jsxs)("div", {
    className: y.scope,
    children: [l, (0, a.jsx)("div", {
      className: y.scopeInner,
      children: (0, a.jsx)(c.Text, {
        variant: "text-md/normal",
        children: r
      })
    })]
  })
}

function k() {
  let e = (0, o.e7)([m.Z], () => m.Z.getChannelId()),
    r = (0, o.e7)([g.Z], () => g.Z.getGuildId()),
    t = (0, o.e7)([d.Z], () => d.Z.getChannel(e)),
    n = (0, o.e7)([u.Z], () => u.Z.getGuild(r)),
    k = (0, o.e7)([h.Z], () => h.Z.computePermissions(t)),
    v = (0, o.e7)([h.Z], () => h.Z.computePermissions(n)),
    j = (0, s.ZP)(t, !0),
    w = null != t ? (0, b.IG)(t, !1, !0) : null,
    N = null != n ? p.Z.getGuildPermissionSpecMap(n) : null,
    C = Object.values(null != w ? w : {}).map(e => {
      let {
        title: r,
        flag: t
      } = e, n = l.e$(k, t);
      return (0, a.jsx)(f, {
        title: r,
        can: n
      }, r)
    }),
    S = Object.values(null != N ? N : {}).map(e => {
      let {
        title: r,
        flag: t
      } = e, n = l.e$(v, t);
      return (0, a.jsx)(f, {
        title: r,
        can: n
      }, r)
    });
  return (0, a.jsx)("div", {
    className: i()(x.panel, y.panel),
    children: (0, a.jsxs)("div", {
      className: y.panelInner,
      children: [(0, a.jsxs)("section", {
        className: y.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: null != j ? "Permissions in ".concat(j) : "No channel selected"
        }), C]
      }), (0, a.jsxs)("section", {
        className: y.section,
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: null != n ? "Permissions in ".concat(n.name) : "No guild selected"
        }), S]
      })]
    })
  })
}