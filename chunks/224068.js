"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
}), l("627341");
var s = l("735250");
l("470079");
var a = l("120356"),
  i = l.n(a),
  n = l("278074"),
  r = l("979554"),
  o = l("481060"),
  c = l("689938"),
  d = l("457188");

function u(e) {
  var t;
  let {
    item: l,
    isDarkText: a = !1
  } = e;
  let u = (t = null == l ? void 0 : l.type, (0, n.match)(t).with(r.CollectiblesItemType.AVATAR_DECORATION, () => c.default.Messages.USER_SETTINGS_AVATAR_DECORATION).with(r.CollectiblesItemType.PROFILE_EFFECT, () => c.default.Messages.USER_SETTINGS_PROFILE_EFFECT).otherwise(() => null));
  return null === u ? null : (0, s.jsx)(o.Text, {
    variant: "text-xxs/normal",
    className: i()([d.container, a ? d.darkText : d.lightText]),
    children: u
  })
}