"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303");
t.default = function(e) {
  var t = e.hsl,
    n = e.offset,
    r = e.onClick,
    o = void 0 === r ? function() {} : r,
    s = e.active,
    u = e.first,
    c = e.last,
    l = (0, a.default)({
      default: {
        swatch: {
          height: "12px",
          background: "hsl(" + t.h + ", 50%, " + 100 * n + "%)",
          cursor: "pointer"
        }
      },
      first: {
        swatch: {
          borderRadius: "2px 0 0 2px"
        }
      },
      last: {
        swatch: {
          borderRadius: "0 2px 2px 0"
        }
      },
      active: {
        swatch: {
          transform: "scaleY(1.8)",
          borderRadius: "3.6px/2px"
        }
      }
    }, {
      active: s,
      first: u,
      last: c
    });
  return i().createElement("div", {
    style: l.swatch,
    onClick: function(e) {
      return o({
        h: t.h,
        s: .5,
        l: n,
        source: "hsl"
      }, e)
    }
  })
}