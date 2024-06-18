"use strict";
t.d(s, {
  Z: function() {
    return o
  }
});
var n, i, l = t(735250);
t(470079);
var a = t(481060),
  r = t(229546);
(n = i || (i = {})).ARROW_DOWN = "arrow_down", n.CROSS = "cross";

function o(e) {
  let {
    type: s
  } = e;
  return (0, l.jsx)("div", {
    className: r.dividerContainer,
    children: (0, l.jsx)("div", {
      className: r.dividerIconContainer,
      children: function(e) {
        switch (e) {
          case "arrow_down":
            return (0, l.jsx)(a.ArrowSmallDownIcon, {
              size: "md",
              color: "currentColor",
              className: r.dividierIcon
            });
          case "cross":
            return (0, l.jsx)(a.CloseSmallIcon, {
              size: "md",
              color: "currentColor",
              className: r.dividierIcon
            });
          default:
            return null
        }
      }(s)
    })
  })
}
o.Type = i