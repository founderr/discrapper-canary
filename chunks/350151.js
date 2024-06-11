"use strict";
n.r(t);
var r = n("470079"),
  i = n.n(r),
  a = n("844303"),
  o = n("329022"),
  s = n("336146");
t.default = function(e) {
  var t = e.onClick,
    n = e.onSwatchHover,
    r = e.group,
    u = e.active,
    c = (0, a.default)({
      default: {
        group: {
          paddingBottom: "10px",
          width: "40px",
          float: "left",
          marginRight: "10px"
        }
      }
    });
  return i().createElement("div", {
    style: c.group
  }, (0, o.default)(r, function(e, a) {
    return i().createElement(s.default, {
      key: e,
      color: e,
      active: e.toLowerCase() === u,
      first: 0 === a,
      last: a === r.length - 1,
      onClick: t,
      onSwatchHover: n
    })
  }))
}