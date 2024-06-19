a.r(t), a.d(t, {
  default: function() {
    return l
  }
});
var s = a(735250);
a(470079);
var r = a(481060),
  n = a(153124),
  i = a(689938),
  o = a(424485),
  d = a(365627);

function l(e) {
  let {
    transitionState: t,
    onClose: a,
    listing: l,
    subscription: c
  } = e, I = (0, n.Dt)();
  return (0, s.jsxs)(r.ModalRoot, {
    transitionState: t,
    "aria-labelledby": I,
    children: [(0, s.jsxs)(r.ModalContent, {
      className: o.contentContainer,
      children: [(0, s.jsx)("img", {
        src: d,
        alt: ""
      }), (0, s.jsx)(r.Heading, {
        className: o.title,
        variant: "heading-xl/bold",
        color: "header-primary",
        id: I,
        children: i.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_TITLE.format({
          tier: l.name
        })
      }), (0, s.jsx)(r.Text, {
        className: o.subtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: i.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_CONFIRMATION_SUBTITLE.format({
          timestamp: null == c ? void 0 : c.currentPeriodEnd
        })
      })]
    }), (0, s.jsx)(r.ModalFooter, {
      children: (0, s.jsx)(r.Button, {
        size: r.Button.Sizes.MEDIUM,
        grow: !1,
        onClick: a,
        children: i.Z.Messages.APPLICATION_SUBSCRIPTION_PURCHASE_MODAL_CONFIRMATION_DONE_BUTTON
      })
    })]
  })
}