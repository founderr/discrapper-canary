"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var r = n("37983"),
  i = n("884691"),
  s = n("446674"),
  l = n("266491"),
  a = n("77078"),
  o = n("45299"),
  u = n("965397"),
  c = n("476765"),
  d = n("526253"),
  f = n("347977"),
  h = n("267235"),
  E = n("394294"),
  p = n("782340"),
  C = n("874426");
let m = () => (0, r.jsx)(o.default, {
  submitting: !1,
  message: p.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
  onReset: () => {
    (0, f.setShowWarning)(!1)
  },
  onResetText: p.default.Messages.CANCEL,
  onSave: () => {
    (0, f.setShowWarning)(!1), (0, a.closeModal)(E.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
  },
  onSaveText: p.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
  onSaveButtonColor: a.ButtonColors.RED
});
var _ = e => {
  let {
    guildId: t,
    transitionState: n,
    onClose: o,
    onComplete: E,
    isPreview: p = !1
  } = e, _ = (0, f.useMemberVerificationFormNoticeStore)(e => e.shouldShowWarning), v = (0, s.useStateFromStores)([d.default], () => d.default.get(t)), S = (0, c.useUID)();
  return (i.useEffect(() => {
    v === d.NO_MEMBER_VERIFICATION_FORM && o()
  }, [o, v]), v === d.NO_MEMBER_VERIFICATION_FORM) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.ModalRoot, {
      size: a.ModalSize.MEDIUM,
      className: C.container,
      transitionState: n,
      "aria-labelledby": S,
      children: [(0, r.jsx)(a.ModalCloseButton, {
        onClick: () => o(!1),
        className: C.closeButton
      }), (0, r.jsx)(h.default, {
        headerId: S,
        guildId: t,
        onClose: o,
        onComplete: E,
        isPreview: p
      })]
    }), (0, r.jsx)(l.default, {
      children: !0 === _ && (0, r.jsx)(u.default, {
        className: C.notice,
        children: (0, r.jsx)(m, {})
      })
    })]
  })
}