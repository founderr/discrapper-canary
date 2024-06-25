n.d(t, {
  Z: function() {
    return u
  }
});
var s = n(735250);
n(470079);
var i = n(990547),
  l = n(481060),
  a = n(153124),
  r = n(758119),
  o = n(689938),
  c = n(683946);

function u(e) {
  let {
    transitionState: t
  } = e, u = (0, a.Dt)();
  return (0, s.jsxs)(l.ModalRoot, {
    transitionState: t,
    size: l.ModalSize.SMALL,
    "aria-labelledby": u,
    impression: {
      impressionName: i.ImpressionNames.USER_AGE_GATE,
      impressionProperties: {
        existing_user: !0
      }
    },
    children: [(0, s.jsx)(l.ModalContent, {
      children: (0, s.jsxs)("div", {
        className: c.container,
        children: [(0, s.jsx)("img", {
          alt: "",
          src: n(863181),
          className: c.img
        }), (0, s.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          className: c.title,
          id: u,
          children: o.Z.Messages.AGE_GATE_AGE_VERIFIED
        }), (0, s.jsx)(l.Text, {
          color: "header-secondary",
          className: c.subtitle,
          variant: "text-sm/normal",
          children: o.Z.Messages.AGE_GATE_AGE_VERIFIED_BODY
        })]
      })
    }), (0, s.jsx)(l.ModalFooter, {
      children: (0, s.jsx)(l.Button, {
        size: l.ButtonSizes.SMALL,
        fullWidth: !0,
        onClick: function() {
          (0, r.qV)()
        },
        autoFocus: !0,
        children: o.Z.Messages.CLOSE
      })
    })]
  })
}