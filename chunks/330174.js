"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303");
t.default = function(e) {
  var t = e.rgb,
    n = e.currentColor,
    r = (0, a.default)({
      default: {
        swatches: {
          border: "1px solid #B3B3B3",
          borderBottom: "1px solid #F0F0F0",
          marginBottom: "2px",
          marginTop: "1px"
        },
        new: {
          height: "34px",
          background: "rgb(" + t.r + "," + t.g + ", " + t.b + ")",
          boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
        },
        current: {
          height: "34px",
          background: n,
          boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
        },
        label: {
          fontSize: "14px",
          color: "#000",
          textAlign: "center"
        }
      }
    });
  return i().createElement("div", null, i().createElement("div", {
    style: r.label
  }, "new"), i().createElement("div", {
    style: r.swatches
  }, i().createElement("div", {
    style: r.new
  }), i().createElement("div", {
    style: r.current
  })), i().createElement("div", {
    style: r.label
  }, "current"))
}