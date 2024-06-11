"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303");
t.default = function(e) {
  var t = e.hsl,
    n = (0, a.default)({
      default: {
        picker: {
          width: "12px",
          height: "12px",
          borderRadius: "6px",
          boxShadow: "inset 0 0 0 1px #fff",
          transform: "translate(-6px, -6px)"
        }
      },
      "black-outline": {
        picker: {
          boxShadow: "inset 0 0 0 1px #000"
        }
      }
    }, {
      "black-outline": t.l > .5
    });
  return i().createElement("div", {
    style: n.picker
  })
}