"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("476400"),
  o = n.n(a),
  s = n("844303"),
  u = n("829307"),
  c = n("464854"),
  l = n("353144"),
  d = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
    }
    return e
  },
  f = function(e) {
    var t = e.width,
      n = e.height,
      r = e.onChange,
      a = e.hsl,
      o = e.direction,
      l = e.pointer,
      f = e.styles,
      p = e.className,
      h = (0, s.default)((0, u.default)({
        default: {
          picker: {
            position: "relative",
            width: t,
            height: n
          },
          hue: {
            radius: "2px"
          }
        }
      }, void 0 === f ? {} : f));
    return i().createElement("div", {
      style: h.picker,
      className: "hue-picker " + (void 0 === p ? "" : p)
    }, i().createElement(c.Hue, d({}, h.hue, {
      hsl: a,
      pointer: l,
      onChange: function(e) {
        return r({
          a: 1,
          h: e.h,
          l: .5,
          s: 1
        })
      },
      direction: o
    })))
  };
f.propTypes = {
  styles: o().object
}, f.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: l.default,
  styles: {}
}, (0, c.ColorWrap)(f)