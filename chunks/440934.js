t.r(n), t.d(n, {
  default: function() {
    return h
  },
  openInteractionModal: function() {
    return f
  }
});
var l = t(735250);
t(470079);
var i = t(481060),
  o = t(474333),
  r = t(154921),
  a = t(970184),
  s = t(471073),
  u = t(293979),
  d = t(954654),
  c = t(689938),
  p = t(975701);

function h(e) {
  let {
    title: n,
    onClose: t,
    transitionState: h
  } = e, {
    components: f,
    applicationIconURL: I,
    applicationName: m,
    submissionState: g,
    error: v,
    validators: C,
    onSubmit: S
  } = (0, u.X9)(e, t);
  return (0, l.jsx)("form", {
    onSubmit: e => {
      e.preventDefault(), S()
    },
    children: (0, l.jsxs)(i.ModalRoot, {
      transitionState: h,
      children: [(0, l.jsxs)(i.ModalHeader, {
        separator: !1,
        children: [(0, l.jsx)(i.Avatar, {
          src: I,
          size: i.AvatarSizes.SIZE_24,
          "aria-label": m,
          className: p.applicationIcon
        }), (0, l.jsx)(r.Z, {
          color: r.Z.Colors.HEADER_PRIMARY,
          size: r.Z.Sizes.SIZE_24,
          children: n
        }), (0, l.jsx)(i.ModalCloseButton, {
          onClick: t,
          className: p.closeButton
        })]
      }), (0, l.jsxs)(i.ModalContent, {
        children: [null != v && "" !== v ? (0, l.jsx)(o.Z, {
          messageType: o.Q.ERROR,
          className: p.submissionWarning,
          children: v
        }) : null, (0, l.jsx)(o.Z, {
          messageType: o.Q.WARNING,
          className: p.submissionWarning,
          children: c.Z.Messages.INTERACTION_FORM_SUBMISSION_APPLICATION.format({
            applicationName: m
          })
        }), (0, l.jsx)(i.FormSection, {
          children: (0, l.jsx)(a.Il, {
            modal: e,
            validators: C,
            children: (0, d.xX)(f)
          })
        })]
      }), (0, l.jsxs)(i.ModalFooter, {
        children: [(0, l.jsx)(i.Button, {
          type: "submit",
          color: i.Button.Colors.BRAND,
          size: i.Button.Sizes.MEDIUM,
          submitting: g === s.i.IN_FLIGHT,
          children: c.Z.Messages.SUBMIT
        }), (0, l.jsx)(i.Button, {
          look: i.Button.Looks.LINK,
          color: i.Button.Colors.PRIMARY,
          onClick: t,
          children: c.Z.Messages.CANCEL
        })]
      })]
    })
  })
}

function f(e) {
  (0, i.openModal)(n => (0, l.jsx)(h, {
    ...n,
    ...e
  }))
}