"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303"),
  o = n("13942"),
  s = n("464854"),
  u = n("191731");
t.default = function(e) {
  var t = e.color,
    n = e.onClick,
    r = e.onSwatchHover,
    c = e.first,
    l = e.last,
    d = e.active,
    f = (0, a.default)({
      default: {
        color: {
          width: "40px",
          height: "24px",
          cursor: "pointer",
          background: t,
          marginBottom: "1px"
        },
        check: {
          color: o.getContrastingColor(t),
          marginLeft: "8px",
          display: "none"
        }
      },
      first: {
        color: {
          overflow: "hidden",
          borderRadius: "2px 2px 0 0"
        }
      },
      last: {
        color: {
          overflow: "hidden",
          borderRadius: "0 0 2px 2px"
        }
      },
      active: {
        check: {
          display: "block"
        }
      },
      "color-#FFFFFF": {
        color: {
          boxShadow: "inset 0 0 0 1px #ddd"
        },
        check: {
          color: "#333"
        }
      },
      transparent: {
        check: {
          color: "#333"
        }
      }
    }, {
      first: c,
      last: l,
      active: d,
      "color-#FFFFFF": "#FFFFFF" === t,
      transparent: "transparent" === t
    });
  return i().createElement(s.Swatch, {
    color: t,
    style: f.color,
    onClick: void 0 === n ? function() {} : n,
    onHover: r,
    focusStyle: {
      boxShadow: "0 0 4px " + t
    }
  }, i().createElement("div", {
    style: f.check
  }, i().createElement(u.default, null)))
}