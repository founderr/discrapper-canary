"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("37983");
n("884691");
var l = n("414456"),
  s = n.n(l),
  i = n("77078"),
  r = n("782340"),
  o = n("741162"),
  u = function(e) {
    let {
      className: t,
      color: n = "header-primary",
      textOpacity: l = .9,
      bgOpacity: u = .2
    } = e;
    return (0, a.jsxs)(i.Text, {
      variant: "text-xxs/medium",
      color: n,
      className: s(o.sponsoredTag, t),
      children: [(0, a.jsx)("span", {
        className: o.sponsoredTagBackground,
        style: {
          opacity: u
        }
      }), (0, a.jsx)("span", {
        style: {
          opacity: l
        },
        children: r.default.Messages.QUESTS_SPONSORED
      })]
    })
  }