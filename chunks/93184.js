"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var r = n("37983"),
  i = n("884691"),
  s = n("446674"),
  a = n("266491"),
  l = n("77078"),
  o = n("45299"),
  u = n("965397"),
  c = n("476765"),
  d = n("526253"),
  f = n("347977"),
  E = n("267235"),
  _ = n("394294"),
  T = n("782340"),
  h = n("874426");
let I = () => (0, r.jsx)(o.default, {
  submitting: !1,
  message: T.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
  onReset: () => {
    (0, f.setShowWarning)(!1)
  },
  onResetText: T.default.Messages.CANCEL,
  onSave: () => {
    (0, f.setShowWarning)(!1), (0, l.closeModal)(_.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
  },
  onSaveText: T.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
  onSaveButtonColor: l.ButtonColors.RED
});
var S = e => {
  let {
    guildId: t,
    transitionState: n,
    onClose: o,
    onComplete: _,
    isPreview: T = !1
  } = e, S = (0, f.useMemberVerificationFormNoticeStore)(e => e.shouldShowWarning), p = (0, s.useStateFromStores)([d.default], () => d.default.get(t)), N = (0, c.useUID)();
  return (i.useEffect(() => {
    p === d.NO_MEMBER_VERIFICATION_FORM && o()
  }, [o, p]), p === d.NO_MEMBER_VERIFICATION_FORM) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(l.ModalRoot, {
      size: l.ModalSize.MEDIUM,
      className: h.container,
      transitionState: n,
      "aria-labelledby": N,
      children: [(0, r.jsx)(l.ModalCloseButton, {
        onClick: () => o(!1),
        className: h.closeButton
      }), (0, r.jsx)(E.default, {
        headerId: N,
        guildId: t,
        onClose: o,
        onComplete: _,
        isPreview: T
      })]
    }), (0, r.jsx)(a.default, {
      children: !0 === S && (0, r.jsx)(u.default, {
        className: h.notice,
        children: (0, r.jsx)(I, {})
      })
    })]
  })
}