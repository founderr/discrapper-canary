"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var a = n("37983");
n("884691");
var l = n("446674"),
  u = n("77078"),
  i = n("168973"),
  d = n("301603"),
  r = n("632616"),
  s = n("535348"),
  o = n("353927"),
  c = n("782340");

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o.MediaEngineContextTypes.DEFAULT,
    [n, f, E] = (0, d.default)(e, t),
    S = (0, l.useStateFromStores)([i.default], () => i.default.disableHideSelfStreamAndVideoConfirmationAlert);
  return n ? (0, a.jsx)(u.MenuCheckboxItem, {
    id: "self-video-hide",
    label: c.default.Messages.SHOW_SELF_VIDEO,
    checked: !f,
    action: () => {
      if (S || f) return E(!f);
      (0, u.openModal)(e => (0, a.jsx)(r.default, {
        ...e,
        type: s.SelfStreamAndVideoAlertType.VIDEO,
        onConfirm: () => E(!f)
      }))
    }
  }) : null
}