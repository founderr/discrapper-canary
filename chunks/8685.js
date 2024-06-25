"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(923928),
  l = n(468026),
  u = n(503856),
  _ = n(209590),
  c = n(689938);
let d = () => {
    a.Z.clearSuppressWarning()
  },
  E = () => {
    a.Z.clearSuppressWarning(!0)
  };
t.Z = () => {
  let e = r.useRef(null);

  function t() {
    null !== e.current && ((0, o.closeModal)(e.current), e.current = null)
  }
  let [a, I] = (0, s.Wu)([_.Z], () => [_.Z.shouldShowWarning(), _.Z.isAFKChannel()], []), T = r.useCallback(() => {
    let t = "",
      n = "";
    I ? (t = c.Z.Messages.SUPPRESSED_AFK_TITLE, n = c.Z.Messages.SUPPRESSED_AFK_BODY) : (t = c.Z.Messages.SUPPRESSED, n = c.Z.Messages.SUPPRESSED_PERMISSION_BODY), e.current = (0, o.openModal)(e => (0, i.jsx)(l.default, {
      title: t,
      body: n,
      onConfirm: d,
      confirmText: c.Z.Messages.OKAY,
      secondaryConfirmText: c.Z.Messages.DONT_SHOW_AGAIN,
      onConfirmSecondary: E,
      ...e
    }))
  }, [I]), h = r.useCallback(() => {
    (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e("41281").then(n.bind(n, 669732));
      return t => (0, i.jsx)(e, {
        ...t,
        showHideSuppressWarning: !0
      })
    }).then(t => {
      null != t && (e.current = t)
    })
  }, []);
  return r.useEffect(() => (a && (0, u.p)() ? h() : a ? T() : t(), () => {
    t()
  }), [a, T, h]), null
}