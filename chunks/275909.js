var n = t(735250);
t(470079);
var i = t(120356),
  a = t.n(i),
  l = t(283029),
  r = t(964497);
s.Z = function(e) {
  let {
    className: s,
    hasCooldown: i,
    isCanceled: o,
    useReducedMotion: c
  } = e;
  return (0, n.jsxs)("div", {
    className: a()(r.boostIconContainer, s),
    children: [o ? (0, n.jsx)("img", {
      className: a()(r.boostIcon, r.boostIconCanceled),
      src: t(457026),
      alt: ""
    }) : (0, n.jsx)(l.Z, {
      className: r.boostIcon,
      boostInCooldown: i,
      useReducedMotion: c
    }), !o && i && (0, n.jsx)("img", {
      className: r.snowflake,
      src: t(765028),
      alt: ""
    })]
  })
}