a.r(e), a.d(e, {
  ConfirmNoSharedServerSubscribeWarningModal: function() {
    return c
  }
});
var n = a(735250);
a(470079);
var o = a(481060),
  t = a(689938),
  i = a(793591),
  r = a(607273);

function c(s) {
  let {
    applicationName: e,
    onConfirm: a,
    onClose: c,
    onCancel: d,
    ...l
  } = s;
  return (0, n.jsxs)(o.ModalRoot, {
    ...l,
    children: [(0, n.jsxs)(o.ModalContent, {
      className: i.body,
      children: [(0, n.jsx)("img", {
        alt: "",
        src: r,
        className: i.img,
        "aria-hidden": !0
      }), (0, n.jsx)(o.Heading, {
        variant: "heading-xl/extrabold",
        className: i.title,
        children: t.Z.Messages.APPLICATION_USER_SUBSCRIPTION_NO_SHARED_SERVER_WARNING_TITLE.format({
          applicationName: e
        })
      }), (0, n.jsx)(o.Text, {
        variant: "text-md/medium",
        children: t.Z.Messages.APPLICATION_USER_SUBSCRIPTION_NO_SHARED_SERVER_WARNING_BODY
      })]
    }), (0, n.jsxs)(o.ModalFooter, {
      children: [(0, n.jsx)(o.Button, {
        onClick: () => {
          a(), c()
        },
        children: t.Z.Messages.CONTINUE
      }), (0, n.jsx)(o.Button, {
        className: i.__invalid_cancel,
        onClick: () => {
          d(), c()
        },
        look: o.Button.Looks.LINK,
        color: o.Button.Colors.PRIMARY,
        children: t.Z.Messages.CANCEL
      })]
    })]
  })
}