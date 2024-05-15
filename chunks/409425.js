"use strict";
i.r(t), i.d(t, {
  default: function() {
    return d
  }
});
var l = i("735250");
i("470079");
var a = i("120356"),
  n = i.n(a),
  s = i("377171"),
  r = i("26290"),
  o = i("689938"),
  c = i("308580");

function d(e) {
  let {
    className: t,
    ...i
  } = e;
  return (0, l.jsx)(r.TextBadge, {
    ...i,
    text: o.default.Messages.APP_DIRECTORY_PARTNER,
    color: s.default.BACKGROUND_TERTIARY,
    className: n()(t, c.partnerBadge)
  })
}