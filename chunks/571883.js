"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var i = n("37983");
n("884691");
var r = n("980763"),
  a = n("224701"),
  s = n("502026"),
  l = n("792788"),
  o = n("627327");
let c = {
  width: 12,
  height: 12
};

function u(e) {
  let {
    tagType: t
  } = e;
  return (0, i.jsxs)("div", {
    className: o.container,
    children: ["user" === t ? (0, i.jsx)(a.UserIcon, {
      ...c,
      color: "#949CF7"
    }) : (0, i.jsx)(r.ServerIcon, {
      ...c,
      color: "#00AAFC"
    }), (0, i.jsx)(s.Text, {
      color: "interactive-normal",
      variant: "text-sm/medium",
      children: "user" === t ? l.default.Messages.Storefront.USER_SUBSCRIPTION : l.default.Messages.Storefront.SERVER_SUBSCRIPTION
    })]
  })
}