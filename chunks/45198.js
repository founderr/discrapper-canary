"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("37983");
n("884691");
var a = n("414456"),
  s = n.n(a),
  i = n("77078"),
  r = n("782340"),
  o = n("741162"),
  u = function(e) {
    let {
      className: t,
      color: n = "header-primary",
      textOpacity: a = .9,
      bgOpacity: u = .2
    } = e;
    return (0, l.jsxs)(i.Text, {
      variant: "text-xxs/medium",
      color: n,
      className: s(o.sponsoredTag, t),
      children: [(0, l.jsx)("span", {
        className: o.sponsoredTagBackground,
        style: {
          opacity: u
        }
      }), (0, l.jsx)("span", {
        style: {
          opacity: a
        },
        children: r.default.Messages.QUESTS_SPONSORED
      })]
    })
  }