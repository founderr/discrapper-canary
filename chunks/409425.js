"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
});
var n = i("735250");
i("470079");
var a = i("120356"),
  l = i.n(a),
  s = i("481060"),
  r = i("377171"),
  o = i("689938"),
  c = i("308580");

function d(e) {
  let {
    className: t,
    ...i
  } = e;
  return (0, n.jsx)(s.TextBadge, {
    ...i,
    text: o.default.Messages.APP_DIRECTORY_PARTNER,
    color: r.default.BACKGROUND_TERTIARY,
    className: l()(t, c.partnerBadge)
  })
}