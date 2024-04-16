"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  },
  openInteractionModal: function() {
    return p
  }
});
var n = s("735250");
s("470079");
var o = s("481060"),
  l = s("474333"),
  r = s("154921"),
  a = s("970184"),
  i = s("471073"),
  u = s("293979"),
  c = s("954654"),
  d = s("689938"),
  f = s("526884");

function h(e) {
  let {
    title: t,
    onClose: s,
    transitionState: h
  } = e, {
    components: p,
    applicationIconURL: M,
    applicationName: C,
    submissionState: I,
    error: m,
    validators: x,
    onSubmit: v
  } = (0, u.useModalState)(e, s);
  return (0, n.jsx)("form", {
    onSubmit: e => {
      e.preventDefault(), v()
    },
    children: (0, n.jsxs)(o.ModalRoot, {
      transitionState: h,
      children: [(0, n.jsxs)(o.ModalHeader, {
        separator: !1,
        children: [(0, n.jsx)(o.Avatar, {
          src: M,
          size: o.AvatarSizes.SIZE_24,
          "aria-label": C,
          className: f.applicationIcon
        }), (0, n.jsx)(r.default, {
          color: r.default.Colors.HEADER_PRIMARY,
          size: r.default.Sizes.SIZE_24,
          children: t
        }), (0, n.jsx)(o.ModalCloseButton, {
          onClick: s,
          className: f.closeButton
        })]
      }), (0, n.jsxs)(o.ModalContent, {
        children: [null != m && "" !== m ? (0, n.jsx)(l.default, {
          messageType: l.HelpMessageTypes.ERROR,
          className: f.submissionWarning,
          children: m
        }) : null, (0, n.jsx)(l.default, {
          messageType: l.HelpMessageTypes.WARNING,
          className: f.submissionWarning,
          children: d.default.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({
            applicationName: C
          })
        }), (0, n.jsx)(o.FormSection, {
          children: (0, n.jsx)(a.ComponentStateContextProvider, {
            modal: e,
            validators: x,
            children: (0, c.renderComponents)(p)
          })
        })]
      }), (0, n.jsxs)(o.ModalFooter, {
        children: [(0, n.jsx)(o.Button, {
          type: "submit",
          color: o.Button.Colors.BRAND,
          size: o.Button.Sizes.MEDIUM,
          submitting: I === i.InteractionModalState.IN_FLIGHT,
          children: d.default.Messages.SUBMIT
        }), (0, n.jsx)(o.Button, {
          look: o.Button.Looks.LINK,
          color: o.Button.Colors.PRIMARY,
          onClick: s,
          children: d.default.Messages.CANCEL
        })]
      })]
    })
  })
}

function p(e) {
  (0, o.openModal)(t => (0, n.jsx)(h, {
    ...t,
    ...e
  }))
}