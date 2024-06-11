"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303"),
  o = n("13942"),
  s = n("464854");
t.default = function(e) {
  var t = e.color,
    n = e.onClick,
    r = e.onSwatchHover,
    u = e.active,
    c = (0, a.default)({
      default: {
        color: {
          background: t,
          width: "15px",
          height: "15px",
          float: "left",
          marginRight: "5px",
          marginBottom: "5px",
          position: "relative",
          cursor: "pointer"
        },
        dot: {
          absolute: "5px 5px 5px 5px",
          background: o.getContrastingColor(t),
          borderRadius: "50%",
          opacity: "0"
        }
      },
      active: {
        dot: {
          opacity: "1"
        }
      },
      "color-#FFFFFF": {
        color: {
          boxShadow: "inset 0 0 0 1px #ddd"
        },
        dot: {
          background: "#000"
        }
      },
      transparent: {
        dot: {
          background: "#000"
        }
      }
    }, {
      active: u,
      "color-#FFFFFF": "#FFFFFF" === t,
      transparent: "transparent" === t
    });
  return i().createElement(s.Swatch, {
    style: c.color,
    color: t,
    onClick: void 0 === n ? function() {} : n,
    onHover: r,
    focusStyle: {
      boxShadow: "0 0 4px " + t
    }
  }, i().createElement("div", {
    style: c.dot
  }))
}