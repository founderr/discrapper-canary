"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303"),
  o = n("476400"),
  s = n.n(o),
  u = function(e) {
    var t = (0, a.default)({
      default: {
        picker: {
          width: "20px",
          height: "20px",
          borderRadius: "22px",
          border: "2px #fff solid",
          transform: "translate(-12px, -13px)",
          background: "hsl(" + Math.round(e.hsl.h) + ", " + Math.round(100 * e.hsl.s) + "%, " + Math.round(100 * e.hsl.l) + "%)"
        }
      }
    });
    return i().createElement("div", {
      style: t.picker
    })
  };
u.propTypes = {
  hsl: s().shape({
    h: s().number,
    s: s().number,
    l: s().number,
    a: s().number
  })
}, u.defaultProps = {
  hsl: {
    a: 1,
    h: 249.94,
    l: .2,
    s: .5
  }
}, t.default = u