"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303"),
  o = n("464854"),
  s = n("751392"),
  u = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  c = function(e) {
    var t = e.rgb,
      n = e.hsl,
      r = e.width,
      s = e.height,
      c = e.onChange,
      l = e.direction,
      d = e.style,
      f = e.renderers,
      p = e.pointer,
      h = e.className,
      m = (0, a.default)({
        default: {
          picker: {
            position: "relative",
            width: r,
            height: s
          },
          alpha: {
            radius: "2px",
            style: d
          }
        }
      });
    return i().createElement("div", {
      style: m.picker,
      className: "alpha-picker " + (void 0 === h ? "" : h)
    }, i().createElement(o.Alpha, u({}, m.alpha, {
      rgb: t,
      hsl: n,
      pointer: p,
      renderers: f,
      onChange: c,
      direction: l
    })))
  };
c.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: s.default
}, (0, o.ColorWrap)(c)