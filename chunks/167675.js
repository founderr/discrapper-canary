"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120");
var i = n("735250");
n("470079");
var l = n("442837"),
  a = n("481060"),
  u = n("740492"),
  s = n("27584"),
  d = n("295510"),
  r = n("394059"),
  o = n("65154"),
  c = n("689938");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
    [n, f, S] = (0, s.default)(e, t),
    E = (0, l.useStateFromStores)([u.default], () => u.default.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, i.jsx)(a.MenuCheckboxItem, {
    id: "self-video-hide",
    label: c.default.Messages.SHOW_SELF_VIDEO,
    checked: !f,
    action: () => {
      if (E || f) return S(!f);
      (0, a.openModal)(e => (0, i.jsx)(d.default, {
        ...e,
        type: r.SelfStreamAndVideoAlertType.VIDEO,
        onConfirm: () => S(!f)
      }))
    }
  }) : null
}