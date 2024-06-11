"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("481060"),
  s = n("153124"),
  i = n("689938"),
  r = n("351270");
let o = () => n.e("39248").then(n.t.bind(n, "48603", 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});
t.default = e => {
  let t = (0, s.useUID)();
  return (0, a.jsxs)(l.ModalRoot, {
    ...e,
    transitionState: e.transitionState,
    "aria-labelledby": t,
    children: [(0, a.jsx)("div", {
      className: r.animationContainer,
      children: (0, a.jsx)(l.LottieAnimation, {
        importData: o,
        className: r.animationMiddle
      })
    }), (0, a.jsx)(l.ModalContent, {
      children: (0, a.jsxs)("div", {
        className: r.container,
        children: [(0, a.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          className: r.header,
          id: t,
          children: i.default.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_TITLE.format({
            guildName: e.guildName
          })
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: i.default.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_DESC
        }), (0, a.jsx)(l.Button, {
          className: r.button,
          onClick: () => {
            e.onAccept(), e.onClose()
          },
          children: i.default.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_CONFIRM
        })]
      })
    })]
  })
}