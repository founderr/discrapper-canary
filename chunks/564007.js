"use strict";
E.r(_), E.d(_, {
  default: function() {
    return O
  }
}), E("222007");
var t = E("37983"),
  o = E("884691"),
  n = E("446674"),
  a = E("77078"),
  i = E("363658"),
  r = E("135230"),
  I = E("723872"),
  T = E("130473"),
  s = E("782340");
let S = () => {
    i.default.clearSuppressWarning()
  },
  N = () => {
    i.default.clearSuppressWarning(!0)
  };
var O = () => {
  let e = o.useRef(null);

  function _() {
    null !== e.current && ((0, a.closeModal)(e.current), e.current = null)
  }
  let [i, O] = (0, n.useStateFromStoresArray)([T.default], () => [T.default.shouldShowWarning(), T.default.isAFKChannel()], []), A = o.useCallback(() => {
    let _ = "",
      E = "";
    O ? (_ = s.default.Messages.SUPPRESSED_AFK_TITLE, E = s.default.Messages.SUPPRESSED_AFK_BODY) : (_ = s.default.Messages.SUPPRESSED, E = s.default.Messages.SUPPRESSED_PERMISSION_BODY), e.current = (0, a.openModal)(e => (0, t.jsx)(r.default, {
      title: _,
      body: E,
      onConfirm: S,
      confirmText: s.default.Messages.OKAY,
      secondaryConfirmText: s.default.Messages.DONT_SHOW_AGAIN,
      onConfirmSecondary: N,
      ...e
    }))
  }, [O]), R = o.useCallback(() => {
    (0, a.openModalLazy)(async () => {
      let {
        default: e
      } = await E.el("109253").then(E.bind(E, "109253"));
      return _ => (0, t.jsx)(e, {
        ..._,
        showHideSuppressWarning: !0
      })
    }).then(_ => {
      null != _ && (e.current = _)
    })
  }, []);
  return o.useEffect(() => (i && (0, I.isRTCConnectedInHub)() ? R() : i ? A() : _(), () => {
    _()
  }), [i, A, R]), null
}