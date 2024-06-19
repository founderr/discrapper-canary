var n = t(735250);
t(470079);
var i = t(120356),
  a = t.n(i),
  l = t(183976);
s.Z = function(e) {
  let {
    className: s,
    imageClassName: i,
    boostInCooldown: r,
    useReducedMotion: o
  } = e;
  return (0, n.jsx)("div", {
    className: a()(l.imageWrapper, s, {
      [l.cooldown]: r
    }),
    children: (0, n.jsx)("img", {
      className: a()(l.image, i, {
        [l.cooldownImage]: r
      }),
      src: r ? t(971149) : o ? t(908635) : t(83957),
      alt: ""
    })
  })
}