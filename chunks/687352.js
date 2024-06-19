n.d(t, {
  Z: function() {
    return u
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  r = n(481060),
  a = n(366695),
  o = n(606561);

function u(e) {
  let {
    className: t,
    embeddedApps: n,
    muted: i
  } = e;
  if (n.length <= 0) return null;
  if (1 === n.length) return (0, l.jsx)("div", {
    className: s()(o.container, t, i && o.modeMuted),
    children: (0, l.jsx)(a.Z, {
      game: n[0].application,
      className: o.icon20px
    })
  });
  {
    let e = n.length - 1;
    return (0, l.jsxs)("div", {
      className: s()(o.container, t, i && o.modeMuted),
      children: [(0, l.jsx)(a.Z, {
        game: n[0].application,
        className: o.icon20px
      }), 2 === n.length ? (0, l.jsx)(a.Z, {
        game: n[1].application,
        className: o.icon20px
      }) : (0, l.jsx)(r.Text, {
        className: o.overflow,
        variant: "text-xs/bold",
        color: "interactive-active",
        children: "+".concat(e)
      })]
    })
  }
}