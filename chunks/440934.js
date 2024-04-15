"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  },
  openInteractionModal: function() {
    return I
  }
});
var l = n("735250");
n("470079");
var a = n("481060"),
  o = n("474333"),
  u = n("154921"),
  i = n("970184"),
  s = n("471073"),
  r = n("293979"),
  d = n("954654"),
  c = n("689938"),
  f = n("526884");

function p(e) {
  let {
    customId: t,
    title: n,
    onClose: p,
    transitionState: I
  } = e, {
    components: m,
    applicationIconURL: C,
    applicationName: M,
    submissionState: T,
    error: h,
    validators: E,
    onSubmit: S
  } = (0, r.useModalState)(e, p);
  return (0, l.jsx)("form", {
    onSubmit: e => {
      e.preventDefault(), S()
    },
    children: (0, l.jsxs)(a.ModalRoot, {
      transitionState: I,
      children: [(0, l.jsxs)(a.ModalHeader, {
        separator: !1,
        children: [(0, l.jsx)(a.Avatar, {
          src: C,
          size: a.AvatarSizes.SIZE_24,
          "aria-label": M,
          className: f.applicationIcon
        }), (0, l.jsx)(u.default, {
          color: u.default.Colors.HEADER_PRIMARY,
          size: u.default.Sizes.SIZE_24,
          children: n
        }), (0, l.jsx)(a.ModalCloseButton, {
          onClick: p,
          className: f.closeButton
        })]
      }), (0, l.jsxs)(a.ModalContent, {
        children: [null != h && "" !== h ? (0, l.jsx)(o.default, {
          messageType: o.HelpMessageTypes.ERROR,
          className: f.submissionWarning,
          children: h
        }) : null, (0, l.jsx)(o.default, {
          messageType: o.HelpMessageTypes.WARNING,
          className: f.submissionWarning,
          children: c.default.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({
            applicationName: M
          })
        }), (0, l.jsx)(a.FormSection, {
          children: (0, l.jsx)(i.ComponentStateContextProvider, {
            modal: {
              customId: t
            },
            validators: E,
            children: (0, d.renderComponents)(m)
          })
        })]
      }), (0, l.jsxs)(a.ModalFooter, {
        children: [(0, l.jsx)(a.Button, {
          type: "submit",
          color: a.Button.Colors.BRAND,
          size: a.Button.Sizes.MEDIUM,
          submitting: T === s.InteractionModalState.IN_FLIGHT,
          children: c.default.Messages.SUBMIT
        }), (0, l.jsx)(a.Button, {
          look: a.Button.Looks.LINK,
          color: a.Button.Colors.PRIMARY,
          onClick: p,
          children: c.default.Messages.CANCEL
        })]
      })]
    })
  })
}

function I(e) {
  (0, a.openModal)(t => (0, l.jsx)(p, {
    ...t,
    ...e
  }))
}