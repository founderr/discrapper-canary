"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var n = a("735250");
a("470079");
var s = a("990547"),
  l = a("481060"),
  i = a("153124"),
  r = a("758119"),
  o = a("689938"),
  u = a("935779");

function d(e) {
  let {
    transitionState: t
  } = e, d = (0, i.useUID)();
  return (0, n.jsxs)(l.ModalRoot, {
    transitionState: t,
    size: l.ModalSize.SMALL,
    "aria-labelledby": d,
    impression: {
      impressionName: s.ImpressionNames.USER_AGE_GATE,
      impressionProperties: {
        existing_user: !0
      }
    },
    children: [(0, n.jsx)(l.ModalContent, {
      children: (0, n.jsxs)("div", {
        className: u.container,
        children: [(0, n.jsx)("img", {
          alt: "",
          src: a("863181"),
          className: u.img
        }), (0, n.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          className: u.title,
          id: d,
          children: o.default.Messages.AGE_GATE_AGE_VERIFIED
        }), (0, n.jsx)(l.Text, {
          color: "header-secondary",
          className: u.subtitle,
          variant: "text-sm/normal",
          children: o.default.Messages.AGE_GATE_AGE_VERIFIED_BODY
        })]
      })
    }), (0, n.jsx)(l.ModalFooter, {
      children: (0, n.jsx)(l.Button, {
        size: l.ButtonSizes.SMALL,
        fullWidth: !0,
        onClick: function() {
          (0, r.closeAgeGateModal)()
        },
        autoFocus: !0,
        children: o.default.Messages.CLOSE
      })
    })]
  })
}