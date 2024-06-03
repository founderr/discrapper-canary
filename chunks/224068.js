"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
}), l("627341");
var s = l("735250");
l("470079");
var a = l("120356"),
  i = l.n(a),
  n = l("278074"),
  r = l("979554"),
  o = l("481060"),
  d = l("689938"),
  u = l("413293");

function c(e) {
  var t;
  let {
    product: l,
    isDarkText: a = !1
  } = e;
  let c = (t = l.type, (0, n.match)(t).with(r.CollectiblesItemType.AVATAR_DECORATION, () => d.default.Messages.USER_SETTINGS_AVATAR_DECORATION).with(r.CollectiblesItemType.PROFILE_EFFECT, () => d.default.Messages.USER_SETTINGS_PROFILE_EFFECT).otherwise(() => null));
  return null === c ? null : (0, s.jsx)(o.Text, {
    variant: "text-xxs/normal",
    className: i()([u.container, a ? u.darkText : u.lightText]),
    children: c
  })
}