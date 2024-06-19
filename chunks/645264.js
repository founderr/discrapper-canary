t.r(n);
var r = t(735250),
  o = t(470079),
  s = t(442837),
  l = t(215569),
  a = t(481060),
  i = t(852860),
  u = t(153124),
  c = t(944163),
  d = t(266395),
  h = t(200305),
  E = t(592286),
  m = t(689938),
  x = t(640380);
let f = () => (0, r.jsx)(i.Z, {
  submitting: !1,
  message: m.Z.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
  onReset: () => {
    (0, d.PE)(!1)
  },
  onResetText: m.Z.Messages.CANCEL,
  onSave: () => {
    (0, d.PE)(!1), (0, a.closeModal)(E.Pn)
  },
  onSaveText: m.Z.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
  onSaveButtonColor: a.ButtonColors.RED
});
n.default = e => {
  let {
    guildId: n,
    transitionState: t,
    onClose: i,
    onComplete: E,
    isPreview: m = !1
  } = e, N = (0, d.rb)(e => e.shouldShowWarning), _ = (0, s.e7)([c.Z], () => c.Z.get(n)), p = (0, u.Dt)();
  return (o.useEffect(() => {
    _ === c.t && i()
  }, [i, _]), _ === c.t) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.ModalRoot, {
      size: a.ModalSize.MEDIUM,
      className: x.container,
      transitionState: t,
      "aria-labelledby": p,
      children: [(0, r.jsx)(a.ModalCloseButton, {
        onClick: () => i(!1),
        className: x.closeButton
      }), (0, r.jsx)(h.Z, {
        headerId: p,
        guildId: n,
        onClose: i,
        onComplete: E,
        isPreview: m
      })]
    }), (0, r.jsx)(l.W, {
      children: !0 === N && (0, r.jsx)(a.SlideIn, {
        className: x.notice,
        children: (0, r.jsx)(f, {})
      })
    })]
  })
}