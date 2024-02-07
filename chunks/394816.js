"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  },
  openInteractionModal: function() {
    return I
  }
});
var l = n("37983");
n("884691");
var u = n("77078"),
  a = n("555158"),
  o = n("258078"),
  r = n("307311"),
  i = n("470055"),
  s = n("732523"),
  c = n("383247"),
  d = n("782340"),
  f = n("907926");

function E(e) {
  let {
    customId: t,
    title: n,
    onClose: E,
    transitionState: I
  } = e, {
    components: _,
    applicationIconURL: p,
    applicationName: M,
    submissionState: R,
    error: m,
    validators: C,
    onSubmit: T
  } = (0, s.useModalState)(e, E);
  return (0, l.jsx)("form", {
    onSubmit: e => {
      e.preventDefault(), T()
    },
    children: (0, l.jsxs)(u.ModalRoot, {
      transitionState: I,
      children: [(0, l.jsxs)(u.ModalHeader, {
        separator: !1,
        children: [(0, l.jsx)(u.Avatar, {
          src: p,
          size: u.AvatarSizes.SIZE_24,
          "aria-label": M,
          className: f.applicationIcon
        }), (0, l.jsx)(o.default, {
          color: o.default.Colors.HEADER_PRIMARY,
          size: o.default.Sizes.SIZE_24,
          children: n
        }), (0, l.jsx)(u.ModalCloseButton, {
          onClick: E,
          className: f.closeButton
        })]
      }), (0, l.jsxs)(u.ModalContent, {
        children: [null != m && "" !== m ? (0, l.jsx)(a.default, {
          messageType: a.HelpMessageTypes.ERROR,
          className: f.submissionWarning,
          children: m
        }) : null, (0, l.jsx)(a.default, {
          messageType: a.HelpMessageTypes.WARNING,
          className: f.submissionWarning,
          children: d.default.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({
            applicationName: M
          })
        }), (0, l.jsx)(u.FormSection, {
          children: (0, l.jsx)(r.ComponentStateContextProvider, {
            modal: {
              customId: t
            },
            validators: C,
            children: (0, c.renderComponents)(_)
          })
        })]
      }), (0, l.jsxs)(u.ModalFooter, {
        children: [(0, l.jsx)(u.Button, {
          type: "submit",
          color: u.Button.Colors.BRAND,
          size: u.Button.Sizes.MEDIUM,
          submitting: R === i.InteractionModalState.IN_FLIGHT,
          children: d.default.Messages.SUBMIT
        }), (0, l.jsx)(u.Button, {
          look: u.Button.Looks.LINK,
          color: u.Button.Colors.PRIMARY,
          onClick: E,
          children: d.default.Messages.CANCEL
        })]
      })]
    })
  })
}

function I(e) {
  (0, u.openModal)(t => (0, l.jsx)(E, {
    ...t,
    ...e
  }))
}