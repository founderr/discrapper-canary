"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303"),
  o = n("464854"),
  s = function(e) {
    var t = e.color,
      n = e.onClick,
      r = e.onSwatchHover,
      s = e.hover,
      u = e.active,
      c = e.circleSize,
      l = e.circleSpacing,
      d = (0, a.default)({
        default: {
          swatch: {
            width: c,
            height: c,
            marginRight: l,
            marginBottom: l,
            transform: "scale(1)",
            transition: "100ms transform ease"
          },
          Swatch: {
            borderRadius: "50%",
            background: "transparent",
            boxShadow: "inset 0 0 0 " + (c / 2 + 1) + "px " + t,
            transition: "100ms box-shadow ease"
          }
        },
        hover: {
          swatch: {
            transform: "scale(1.2)"
          }
        },
        active: {
          Swatch: {
            boxShadow: "inset 0 0 0 3px " + t
          }
        }
      }, {
        hover: s,
        active: u
      });
    return i().createElement("div", {
      style: d.swatch
    }, i().createElement(o.Swatch, {
      style: d.Swatch,
      color: t,
      onClick: n,
      onHover: r,
      focusStyle: {
        boxShadow: d.Swatch.boxShadow + ", 0 0 5px " + t
      }
    }))
  };
s.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
}, t.default = (0, a.handleHover)(s)