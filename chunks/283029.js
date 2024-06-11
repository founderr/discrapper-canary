"use strict";
s.r(t);
var a = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  l = s("455399");
t.default = function(e) {
  let {
    className: t,
    imageClassName: n,
    boostInCooldown: r,
    useReducedMotion: o
  } = e;
  return (0, a.jsx)("div", {
    className: i()(l.imageWrapper, t, {
      [l.cooldown]: r
    }),
    children: (0, a.jsx)("img", {
      className: i()(l.image, n, {
        [l.cooldownImage]: r
      }),
      src: r ? s("971149") : o ? s("908635") : s("83957"),
      alt: ""
    })
  })
}