"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
}), n("47120");
var i = n("735250");
n("470079");
var a = n("442837"),
  l = n("481060"),
  s = n("740492"),
  u = n("27584"),
  d = n("295510"),
  r = n("394059"),
  o = n("65154"),
  T = n("689938");

function c(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
    [n, c, E] = (0, u.default)(e, t),
    S = (0, a.useStateFromStores)([s.default], () => s.default.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, i.jsx)(l.MenuCheckboxItem, {
    id: "self-video-hide",
    label: T.default.Messages.SHOW_SELF_VIDEO,
    checked: !c,
    action: () => {
      if (S || c) return E(!c);
      (0, l.openModal)(e => (0, i.jsx)(d.default, {
        ...e,
        type: r.SelfStreamAndVideoAlertType.VIDEO,
        onConfirm: () => E(!c)
      }))
    }
  }) : null
}