"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var i = n("37983"),
  r = n("884691"),
  s = n("446674"),
  l = n("266491"),
  o = n("77078"),
  a = n("45299"),
  u = n("965397"),
  c = n("476765"),
  d = n("526253"),
  f = n("347977"),
  h = n("267235"),
  p = n("394294"),
  C = n("782340"),
  v = n("120825");
let E = () => (0, i.jsx)(a.default, {
  submitting: !1,
  message: C.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
  onReset: () => {
    (0, f.setShowWarning)(!1)
  },
  onResetText: C.default.Messages.CANCEL,
  onSave: () => {
    (0, f.setShowWarning)(!1), (0, o.closeModal)(p.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
  },
  onSaveText: C.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
  onSaveButtonColor: o.ButtonColors.RED
});
var _ = e => {
  let {
    guildId: t,
    transitionState: n,
    onClose: a,
    onComplete: p,
    isPreview: C = !1
  } = e, _ = (0, f.useMemberVerificationFormNoticeStore)(e => e.shouldShowWarning), m = (0, s.useStateFromStores)([d.default], () => d.default.get(t)), I = (0, c.useUID)();
  return (r.useEffect(() => {
    m === d.NO_MEMBER_VERIFICATION_FORM && a()
  }, [a, m]), m === d.NO_MEMBER_VERIFICATION_FORM) ? null : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(o.ModalRoot, {
      size: o.ModalSize.MEDIUM,
      className: v.container,
      transitionState: n,
      "aria-labelledby": I,
      children: [(0, i.jsx)(o.ModalCloseButton, {
        onClick: () => a(!1),
        className: v.closeButton
      }), (0, i.jsx)(h.default, {
        headerId: I,
        guildId: t,
        onClose: a,
        onComplete: p,
        isPreview: C
      })]
    }), (0, i.jsx)(l.default, {
      children: !0 === _ && (0, i.jsx)(u.default, {
        className: v.notice,
        children: (0, i.jsx)(E, {})
      })
    })]
  })
}