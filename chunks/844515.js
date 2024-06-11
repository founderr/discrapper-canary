"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303"),
  o = n("464854");
t.default = (0, a.handleHover)(function(e) {
  var t = e.hover,
    n = e.color,
    r = e.onClick,
    s = e.onSwatchHover,
    u = {
      position: "relative",
      zIndex: "2",
      outline: "2px solid #fff",
      boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
    },
    c = (0, a.default)({
      default: {
        swatch: {
          width: "25px",
          height: "25px",
          fontSize: "0"
        }
      },
      hover: {
        swatch: u
      }
    }, {
      hover: t
    });
  return i().createElement("div", {
    style: c.swatch
  }, i().createElement(o.Swatch, {
    color: n,
    onClick: r,
    onHover: s,
    focusStyle: u
  }))
})