"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  l = n("446674"),
  s = n("77078"),
  r = n("363658"),
  o = n("135230"),
  u = n("723872"),
  d = n("130473"),
  c = n("782340");
let f = () => {
    r.default.clearSuppressWarning()
  },
  E = () => {
    r.default.clearSuppressWarning(!0)
  };
var h = () => {
  let e = a.useRef(null);

  function t() {
    null !== e.current && ((0, s.closeModal)(e.current), e.current = null)
  }
  let [r, h] = (0, l.useStateFromStoresArray)([d.default], () => [d.default.shouldShowWarning(), d.default.isAFKChannel()], []), _ = a.useCallback(() => {
    let t = "",
      n = "";
    h ? (t = c.default.Messages.SUPPRESSED_AFK_TITLE, n = c.default.Messages.SUPPRESSED_AFK_BODY) : (t = c.default.Messages.SUPPRESSED, n = c.default.Messages.SUPPRESSED_PERMISSION_BODY), e.current = (0, s.openModal)(e => (0, i.jsx)(o.default, {
      title: t,
      body: n,
      onConfirm: f,
      confirmText: c.default.Messages.OKAY,
      secondaryConfirmText: c.default.Messages.DONT_SHOW_AGAIN,
      onConfirmSecondary: E,
      ...e
    }))
  }, [h]), C = a.useCallback(() => {
    (0, s.openModalLazy)(async () => {
      let {
        default: e
      } = await n.el("109253").then(n.bind(n, "109253"));
      return t => (0, i.jsx)(e, {
        ...t,
        showHideSuppressWarning: !0
      })
    }).then(t => {
      null != t && (e.current = t)
    })
  }, []);
  return a.useEffect(() => (r && (0, u.isRTCConnectedInHub)() ? C() : r ? _() : t(), () => {
    t()
  }), [r, _, C]), null
}