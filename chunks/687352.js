l.d(n, {
  Z: function() {
    return c
  }
});
var t = l(735250);
l(470079);
var i = l(120356),
  a = l.n(i),
  s = l(481060),
  r = l(366695),
  o = l(606561);

function c(e) {
  let {
    className: n,
    embeddedApps: l,
    muted: i
  } = e;
  if (l.length <= 0) return null;
  if (1 === l.length) return (0, t.jsx)("div", {
    className: a()(o.container, n, i && o.modeMuted),
    children: (0, t.jsx)(r.Z, {
      game: l[0].application,
      className: o.icon20px
    })
  });
  {
    let e = l.length - 1;
    return (0, t.jsxs)("div", {
      className: a()(o.container, n, i && o.modeMuted),
      children: [(0, t.jsx)(r.Z, {
        game: l[0].application,
        className: o.icon20px
      }), 2 === l.length ? (0, t.jsx)(r.Z, {
        game: l[1].application,
        className: o.icon20px
      }) : (0, t.jsx)(s.Text, {
        className: o.overflow,
        variant: "text-xs/bold",
        color: "interactive-active",
        children: "+".concat(e)
      })]
    })
  }
}