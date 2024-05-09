"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var a = n("735250");
n("470079");
var s = n("990547"),
  i = n("481060"),
  l = n("153124"),
  r = n("758119"),
  o = n("689938"),
  u = n("760816");

function d(e) {
  let {
    transitionState: t
  } = e, d = (0, l.useUID)();
  return (0, a.jsxs)(i.ModalRoot, {
    transitionState: t,
    size: i.ModalSize.SMALL,
    "aria-labelledby": d,
    impression: {
      impressionName: s.ImpressionNames.USER_AGE_GATE,
      impressionProperties: {
        existing_user: !0
      }
    },
    children: [(0, a.jsx)(i.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: u.container,
        children: [(0, a.jsx)("img", {
          alt: "",
          src: n("863181"),
          className: u.img
        }), (0, a.jsx)(i.Heading, {
          variant: "heading-xl/semibold",
          className: u.title,
          id: d,
          children: o.default.Messages.AGE_GATE_AGE_VERIFIED
        }), (0, a.jsx)(i.Text, {
          color: "header-secondary",
          className: u.subtitle,
          variant: "text-sm/normal",
          children: o.default.Messages.AGE_GATE_AGE_VERIFIED_BODY
        })]
      })
    }), (0, a.jsx)(i.ModalFooter, {
      children: (0, a.jsx)(i.Button, {
        size: i.ButtonSizes.SMALL,
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