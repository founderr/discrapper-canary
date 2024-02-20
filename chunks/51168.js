"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("37983"),
  a = n("884691"),
  l = n("446674"),
  s = n("77078"),
  r = n("629109"),
  o = n("363658"),
  u = n("135230"),
  d = n("622785"),
  c = n("49111"),
  f = n("782340");

function E() {
  let e = (0, l.useStateFromStores)([d.default], () => d.default.shouldShowWarning(), []),
    t = a.useRef(null);

  function n() {
    null !== t.current && ((0, s.closeModal)(t.current), t.current = null)
  }

  function E() {
    o.default.clearVADWarning()
  }
  return a.useEffect(() => (e ? t.current = (0, s.openModal)(e => (0, i.jsx)(u.default, {
    title: f.default.Messages.VAD_PERMISSION_TITLE,
    body: f.default.Messages.VAD_PERMISSION_BODY,
    onCancel: E,
    cancelText: f.default.Messages.VAD_PERMISSION_OKAY,
    confirmText: f.default.Messages.VAD_PERMISSION_ENABLE_PTT,
    onConfirm: () => {
      r.default.setMode(c.InputModes.PUSH_TO_TALK), E()
    },
    ...e
  })) : n(), () => {
    n()
  }), [e]), null
}