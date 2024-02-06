"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var u = n("37983");
n("884691");
var a = n("446674"),
  i = n("77078"),
  l = n("168973"),
  r = n("301603"),
  d = n("632616"),
  o = n("535348"),
  s = n("353927"),
  c = n("782340");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.MediaEngineContextTypes.DEFAULT,
    [n, f, E] = (0, r.default)(e, t),
    _ = (0, a.useStateFromStores)([l.default], () => l.default.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, u.jsx)(i.MenuCheckboxItem, {
    id: "self-video-hide",
    label: c.default.Messages.SHOW_SELF_VIDEO,
    checked: !f,
    action: () => {
      if (_ || f) return E(!f);
      (0, i.openModal)(e => (0, u.jsx)(d.default, {
        ...e,
        type: o.SelfStreamAndVideoAlertType.VIDEO,
        onConfirm: () => E(!f)
      }))
    }
  }) : null
}