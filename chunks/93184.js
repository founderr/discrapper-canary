"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
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
  p = n("394294"),
  C = n("782340"),
  v = n("120825");
let E = () => (0, r.jsx)(o.default, {
  submitting: !1,
  message: C.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
  onReset: () => {
    (0, f.setShowWarning)(!1)
  },
  onResetText: C.default.Messages.CANCEL,
  onSave: () => {
    (0, f.setShowWarning)(!1), (0, a.closeModal)(p.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
  },
  onSaveText: C.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
  onSaveButtonColor: a.ButtonColors.RED
});
var I = e => {
  let {
    guildId: t,
    transitionState: n,
    onClose: o,
    onComplete: p,
    isPreview: C = !1
  } = e, I = (0, f.useMemberVerificationFormNoticeStore)(e => e.shouldShowWarning), m = (0, s.useStateFromStores)([d.default], () => d.default.get(t)), _ = (0, c.useUID)();
  return (i.useEffect(() => {
    m === d.NO_MEMBER_VERIFICATION_FORM && o()
  }, [o, m]), m === d.NO_MEMBER_VERIFICATION_FORM) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.ModalRoot, {
      size: a.ModalSize.MEDIUM,
      className: v.container,
      transitionState: n,
      "aria-labelledby": _,
      children: [(0, r.jsx)(a.ModalCloseButton, {
        onClick: () => o(!1),
        className: v.closeButton
      }), (0, r.jsx)(h.default, {
        headerId: _,
        guildId: t,
        onClose: o,
        onComplete: p,
        isPreview: C
      })]
    }), (0, r.jsx)(l.default, {
      children: !0 === I && (0, r.jsx)(u.default, {
        className: v.notice,
        children: (0, r.jsx)(E, {})
      })
    })]
  })
}