"use strict";
l.r(t), l.d(t, {
  default: function() {
    return d
  }
}), l("794252");
var s = l("37983");
l("884691");
var a = l("506838"),
  i = l("265586"),
  o = l("77078"),
  n = l("782340"),
  r = l("483665");

function d(e) {
  var t;
  let {
    item: l
  } = e;
  let d = (t = null == l ? void 0 : l.type, (0, a.match)(t).with(i.CollectiblesItemType.AVATAR_DECORATION, () => n.default.Messages.USER_SETTINGS_AVATAR_DECORATION).with(i.CollectiblesItemType.PROFILE_EFFECT, () => n.default.Messages.USER_SETTINGS_PROFILE_EFFECT).otherwise(() => null));
  return null === d ? null : (0, s.jsx)(o.Text, {
    color: "always-white",
    variant: "text-xxs/normal",
    className: r.container,
    children: d
  })
}