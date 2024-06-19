var l = n(735250);
n(470079);
var i = n(481060),
  s = n(153124),
  a = n(689938),
  r = n(793447);
let o = () => n.e("39248").then(n.t.bind(n, 48603, 19)).then(e => {
  let {
    default: t
  } = e;
  return t
});
t.Z = e => {
  let t = (0, s.Dt)();
  return (0, l.jsxs)(i.ModalRoot, {
    ...e,
    transitionState: e.transitionState,
    "aria-labelledby": t,
    children: [(0, l.jsx)("div", {
      className: r.animationContainer,
      children: (0, l.jsx)(i.LottieAnimation, {
        importData: o,
        className: r.animationMiddle
      })
    }), (0, l.jsx)(i.ModalContent, {
      children: (0, l.jsxs)("div", {
        className: r.container,
        children: [(0, l.jsx)(i.Heading, {
          variant: "heading-xl/semibold",
          className: r.header,
          id: t,
          children: a.Z.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_TITLE.format({
            guildName: e.guildName
          })
        }), (0, l.jsx)(i.Text, {
          variant: "text-sm/normal",
          color: "header-secondary",
          children: a.Z.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_DESC
        }), (0, l.jsx)(i.Button, {
          className: r.button,
          onClick: () => {
            e.onAccept(), e.onClose()
          },
          children: a.Z.Messages.MEMBER_VERIFICATION_APPROVED_APPLICATION_MODAL_CONFIRM
        })]
      })
    })]
  })
}