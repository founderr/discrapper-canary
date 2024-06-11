"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303"),
  o = n("329022"),
  s = n("464854");
t.default = function(e) {
  var t = e.colors,
    n = e.onClick,
    r = e.onSwatchHover,
    u = (0, a.default)({
      default: {
        swatches: {
          marginRight: "-10px"
        },
        swatch: {
          width: "22px",
          height: "22px",
          float: "left",
          marginRight: "10px",
          marginBottom: "10px",
          borderRadius: "4px"
        },
        clear: {
          clear: "both"
        }
      }
    });
  return i().createElement("div", {
    style: u.swatches
  }, (0, o.default)(t, function(e) {
    return i().createElement(s.Swatch, {
      key: e,
      color: e,
      style: u.swatch,
      onClick: n,
      onHover: r,
      focusStyle: {
        boxShadow: "0 0 4px " + e
      }
    })
  }), i().createElement("div", {
    style: u.clear
  }))
}