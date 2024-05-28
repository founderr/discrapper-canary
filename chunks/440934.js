"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  },
  openInteractionModal: function() {
    return h
  }
});
var i = n("735250");
n("470079");
var l = n("481060"),
  r = n("474333"),
  a = n("154921"),
  o = n("970184"),
  s = n("471073"),
  u = n("293979"),
  d = n("954654"),
  c = n("689938"),
  p = n("223386");

function f(e) {
  let {
    title: t,
    onClose: n,
    transitionState: f
  } = e, {
    components: h,
    applicationIconURL: m,
    applicationName: S,
    submissionState: g,
    error: I,
    validators: v,
    onSubmit: C
  } = (0, u.useModalState)(e, n);
  return (0, i.jsx)("form", {
    onSubmit: e => {
      e.preventDefault(), C()
    },
    children: (0, i.jsxs)(l.ModalRoot, {
      transitionState: f,
      children: [(0, i.jsxs)(l.ModalHeader, {
        separator: !1,
        children: [(0, i.jsx)(l.Avatar, {
          src: m,
          size: l.AvatarSizes.SIZE_24,
          "aria-label": S,
          className: p.applicationIcon
        }), (0, i.jsx)(a.default, {
          color: a.default.Colors.HEADER_PRIMARY,
          size: a.default.Sizes.SIZE_24,
          children: t
        }), (0, i.jsx)(l.ModalCloseButton, {
          onClick: n,
          className: p.closeButton
        })]
      }), (0, i.jsxs)(l.ModalContent, {
        children: [null != I && "" !== I ? (0, i.jsx)(r.default, {
          messageType: r.HelpMessageTypes.ERROR,
          className: p.submissionWarning,
          children: I
        }) : null, (0, i.jsx)(r.default, {
          messageType: r.HelpMessageTypes.WARNING,
          className: p.submissionWarning,
          children: c.default.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({
            applicationName: S
          })
        }), (0, i.jsx)(l.FormSection, {
          children: (0, i.jsx)(o.ComponentStateContextProvider, {
            modal: e,
            validators: v,
            children: (0, d.renderComponents)(h)
          })
        })]
      }), (0, i.jsxs)(l.ModalFooter, {
        children: [(0, i.jsx)(l.Button, {
          type: "submit",
          color: l.Button.Colors.BRAND,
          size: l.Button.Sizes.MEDIUM,
          submitting: g === s.InteractionModalState.IN_FLIGHT,
          children: c.default.Messages.SUBMIT
        }), (0, i.jsx)(l.Button, {
          look: l.Button.Looks.LINK,
          color: l.Button.Colors.PRIMARY,
          onClick: n,
          children: c.default.Messages.CANCEL
        })]
      })]
    })
  })
}

function h(e) {
  (0, l.openModal)(t => (0, i.jsx)(f, {
    ...t,
    ...e
  }))
}