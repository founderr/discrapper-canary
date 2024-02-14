"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var a = n("37983");
n("884691");
var s = n("77078"),
  l = n("782340"),
  i = n("741162"),
  r = function(e) {
    let {
      color: t = "header-primary",
      opacity: n = .9
    } = e;
    return (0, a.jsx)(s.Text, {
      variant: "text-xxs/medium",
      color: t,
      className: i.sponsoredTag,
      children: (0, a.jsx)("span", {
        style: {
          opacity: n
        },
        children: l.default.Messages.QUESTS_SPONSORED
      })
    })
  }