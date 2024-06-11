"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("476400"),
  o = n.n(a),
  s = n("844303"),
  u = n("829307"),
  c = n("464854"),
  l = n("781466"),
  d = n("522082"),
  f = function(e) {
    var t = e.hsl,
      n = e.onChange,
      r = e.pointer,
      a = e.styles,
      o = e.className,
      d = (0, s.default)((0, u.default)({
        default: {
          hue: {
            height: "12px",
            position: "relative"
          },
          Hue: {
            radius: "2px"
          }
        }
      }, void 0 === a ? {} : a));
    return i().createElement("div", {
      style: d.wrap || {},
      className: "slider-picker " + (void 0 === o ? "" : o)
    }, i().createElement("div", {
      style: d.hue
    }, i().createElement(c.Hue, {
      style: d.Hue,
      hsl: t,
      pointer: r,
      onChange: n
    })), i().createElement("div", {
      style: d.swatches
    }, i().createElement(l.default, {
      hsl: t,
      onClick: n
    })))
  };
f.propTypes = {
  styles: o().object
}, f.defaultProps = {
  pointer: d.default,
  styles: {}
}, (0, c.ColorWrap)(f)