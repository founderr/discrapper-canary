"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303"),
  o = n("958491"),
  s = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  u = function(e) {
    var t = e.white,
      n = e.grey,
      u = e.size,
      c = e.renderers,
      l = e.borderRadius,
      d = e.boxShadow,
      f = e.children,
      p = (0, a.default)({
        default: {
          grid: {
            borderRadius: l,
            boxShadow: d,
            absolute: "0px 0px 0px 0px",
            background: "url(" + o.get(t, n, u, c.canvas) + ") center left"
          }
        }
      });
    return (0, r.isValidElement)(f) ? i().cloneElement(f, s({}, f.props, {
      style: s({}, f.props.style, p.grid)
    })) : i().createElement("div", {
      style: p.grid
    })
  };
u.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {}
}, t.default = u