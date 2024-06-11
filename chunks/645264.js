"use strict";
t.r(n);
var r = t("735250"),
  s = t("470079"),
  o = t("442837"),
  l = t("215569"),
  i = t("481060"),
  a = t("852860"),
  u = t("153124"),
  d = t("944163"),
  c = t("266395"),
  h = t("200305"),
  f = t("592286"),
  E = t("689938"),
  m = t("72226");
let p = () => (0, r.jsx)(a.default, {
  submitting: !1,
  message: E.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_TITLE,
  onReset: () => {
    (0, c.setShowWarning)(!1)
  },
  onResetText: E.default.Messages.CANCEL,
  onSave: () => {
    (0, c.setShowWarning)(!1), (0, i.closeModal)(f.IN_APP_MEMBER_VERIFICATION_MODAL_KEY)
  },
  onSaveText: E.default.Messages.MEMBER_VERIFICATION_PROGRESS_LOST_CONTINUE,
  onSaveButtonColor: i.ButtonColors.RED
});
n.default = e => {
  let {
    guildId: n,
    transitionState: t,
    onClose: a,
    onComplete: f,
    isPreview: E = !1
  } = e, _ = (0, c.useMemberVerificationFormNoticeStore)(e => e.shouldShowWarning), T = (0, o.useStateFromStores)([d.default], () => d.default.get(n)), x = (0, u.useUID)();
  return (s.useEffect(() => {
    T === d.NO_MEMBER_VERIFICATION_FORM && a()
  }, [a, T]), T === d.NO_MEMBER_VERIFICATION_FORM) ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(i.ModalRoot, {
      size: i.ModalSize.MEDIUM,
      className: m.container,
      transitionState: t,
      "aria-labelledby": x,
      children: [(0, r.jsx)(i.ModalCloseButton, {
        onClick: () => a(!1),
        className: m.closeButton
      }), (0, r.jsx)(h.default, {
        headerId: x,
        guildId: n,
        onClose: a,
        onComplete: f,
        isPreview: E
      })]
    }), (0, r.jsx)(l.TransitionGroup, {
      children: !0 === _ && (0, r.jsx)(i.SlideIn, {
        className: m.notice,
        children: (0, r.jsx)(p, {})
      })
    })]
  })
}