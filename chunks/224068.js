"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("627341");
var l = s("735250");
s("470079");
var a = s("120356"),
  i = s.n(a),
  n = s("278074"),
  r = s("979554"),
  o = s("481060"),
  d = s("689938"),
  c = s("413293");

function u(e) {
  var t;
  let {
    product: s,
    isDarkText: a = !1
  } = e;
  let u = (t = s.type, (0, n.match)(t).with(r.CollectiblesItemType.AVATAR_DECORATION, () => d.default.Messages.USER_SETTINGS_AVATAR_DECORATION).with(r.CollectiblesItemType.PROFILE_EFFECT, () => d.default.Messages.USER_SETTINGS_PROFILE_EFFECT).otherwise(() => null));
  return null === u ? null : (0, l.jsx)(o.Text, {
    variant: "text-xxs/normal",
    className: i()([c.container, a ? c.darkText : c.lightText]),
    children: u
  })
}