"use strict";
E.r(_), E.d(_, {
  default: function() {
    return N
  }
});
var t = E("37983"),
  o = E("884691"),
  n = E("446674"),
  a = E("77078"),
  i = E("629109"),
  r = E("363658"),
  I = E("135230"),
  T = E("622785"),
  s = E("49111"),
  S = E("782340");

function N() {
  let e = (0, n.useStateFromStores)([T.default], () => T.default.shouldShowWarning(), []),
    _ = o.useRef(null);

  function E() {
    null !== _.current && ((0, a.closeModal)(_.current), _.current = null)
  }

  function N() {
    r.default.clearVADWarning()
  }
  return o.useEffect(() => (e ? _.current = (0, a.openModal)(e => (0, t.jsx)(I.default, {
    title: S.default.Messages.VAD_PERMISSION_TITLE,
    body: S.default.Messages.VAD_PERMISSION_BODY,
    onCancel: N,
    cancelText: S.default.Messages.VAD_PERMISSION_OKAY,
    confirmText: S.default.Messages.VAD_PERMISSION_ENABLE_PTT,
    onConfirm: () => {
      i.default.setMode(s.InputModes.PUSH_TO_TALK), N()
    },
    ...e
  })) : E(), () => {
    E()
  }), [e]), null
}