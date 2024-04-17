"use strict";
n.r(t), n.d(t, {
  PremiumStreamingEffectOverlay: function() {
    return r
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("985187"),
  i = n("242493");

function r(e) {
  let {
    onPlayed: t,
    played: n
  } = e, [r, o] = l.useState(n), u = l.useRef(0);
  if (l.useEffect(() => (clearTimeout(u.current), u.current = setTimeout(() => {
      t()
    }, 3e3), () => {
      clearTimeout(u.current), t()
    }), [t]), l.useEffect(() => {
      o(e => !e)
    }, [n]), n) return null;
  let d = "".concat(i, "?query=").concat(r);
  return (0, a.jsx)("div", {
    className: s.demoEffectOverlay,
    children: (0, a.jsx)("img", {
      alt: "",
      className: s.demoEffectImg,
      src: d
    })
  })
}