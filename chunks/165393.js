n.d(t, {
  Z: function() {
    return p
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(866442),
  o = n(481060),
  u = n(806519),
  c = n(617253);
let d = [1752220, 3066993, 3447003, 10181046, 15277667, 15844367];

function h(e) {
  return (0, a.Rf)(d[function(e) {
    let t = 5381,
      n = 0;
    for (; n < e.length;) t = 33 * t ^ e.charCodeAt(n++);
    return t >>> 0
  }(e) % d.length])
}

function p(e) {
  var t;
  let {
    title: n,
    className: s
  } = e, [a, d] = i.useState(h(n));
  return i.useEffect(() => {
    d(h(n))
  }, [n]), (0, l.jsxs)("div", {
    className: r()(c.wrapper, s),
    children: [(0, l.jsx)(u.ZP, {
      mask: u.ZP.Masks.STATUS_SCREENSHARE,
      width: 32,
      height: 32,
      children: (0, l.jsx)("div", {
        className: c.icon,
        style: {
          backgroundColor: a
        },
        children: null !== (t = n[0]) && void 0 !== t ? t : "?"
      })
    }), (0, l.jsx)(o.VideoIcon, {
      size: "md",
      color: "currentColor",
      className: c.badge
    })]
  })
}