t.d(r, {
  Z: function() {
    return k
  }
});
var a = t(735250);
t(470079);
var i = t(120356),
  n = t.n(i),
  o = t(149765),
  l = t(442837),
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
  } = e, i = t ? c.CheckmarkLargeIcon : c.CloseSmallIcon, o = (0, a.jsx)("div", {
    className: n()(y.iconOuter, t ? y.iconCheck : y.iconCross),
    children: (0, a.jsx)(i, {
      className: y.icon
    })
  });
  return (0, a.jsxs)("div", {
    className: y.scope,
    children: [o, (0, a.jsx)("div", {
      className: y.scopeInner,
      children: (0, a.jsx)(c.Text, {
        variant: "text-md/normal",
        children: r
      })
    })]
  })
}

function k() {
  let e = (0, l.e7)([m.Z], () => m.Z.getChannelId()),
    r = (0, l.e7)([g.Z], () => g.Z.getGuildId()),
    t = (0, l.e7)([d.Z], () => d.Z.getChannel(e)),
    i = (0, l.e7)([u.Z], () => u.Z.getGuild(r)),
    k = (0, l.e7)([h.Z], () => h.Z.computePermissions(t)),
    v = (0, l.e7)([h.Z], () => h.Z.computePermissions(i)),
    j = (0, s.ZP)(t, !0),
    w = null != t ? (0, b.IG)(t, !1, !0) : null,
    N = null != i ? p.Z.getGuildPermissionSpecMap(i) : null,
    C = Object.values(null != w ? w : {}).map(e => {
      let {
        title: r,
        flag: t
      } = e, i = o.e$(k, t);
      return (0, a.jsx)(f, {
        title: r,
        can: i
      }, r)
    }),
    S = Object.values(null != N ? N : {}).map(e => {
      let {
        title: r,
        flag: t
      } = e, i = o.e$(v, t);
      return (0, a.jsx)(f, {
        title: r,
        can: i
      }, r)
    });
  return (0, a.jsx)("div", {
    className: n()(x.panel, y.panel),
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
          children: null != i ? "Permissions in ".concat(i.name) : "No guild selected"
        }), S]
      })]
    })
  })
}