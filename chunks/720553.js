n.r(e), n.d(e, {
  default: function() {
    return c
  }
}), n(757143);
var o = n(735250);
n(470079);
var s = n(481060),
  a = n(153124),
  r = n(988158),
  l = n(689938),
  i = n(578590);

function c(t) {
  let {
    url: e,
    trustUrl: n,
    isProtocol: c,
    onConfirm: d,
    onClose: u,
    transitionState: _
  } = t, x = (0, a.Dt)(), {
    protocol: m,
    hostname: M,
    theRestOfTheUrl: h,
    shouldTrustUrl: E,
    setShouldTrustUrl: T,
    handleConfirm: R
  } = (0, r.X)({
    url: e,
    trustUrl: n,
    onConfirm: d,
    onClose: u
  });
  return (0, o.jsxs)(s.ModalRoot, {
    size: s.ModalSize.DYNAMIC,
    transitionState: _,
    "aria-labelledby": x,
    children: [(0, o.jsxs)(s.ModalContent, {
      children: [(0, o.jsx)(s.Heading, {
        id: x,
        variant: "heading-xl/bold",
        className: i.title,
        children: l.Z.Messages.MASKED_LINK_ALERT_V2_HEADER
      }), (0, o.jsx)(s.Text, {
        className: i.warningText,
        variant: "text-md/normal",
        children: c ? l.Z.Messages.MASKED_LINK_ALERT_V2_WARNING_PROTOCOL.format({}) : l.Z.Messages.MASKED_LINK_ALERT_V2_WARNING_WEBSITE
      }), (0, o.jsxs)(s.Scroller, {
        className: i.linkCalloutContainer,
        children: [(0, o.jsxs)(s.Text, {
          tag: "span",
          variant: c ? "text-md/semibold" : "text-md/normal",
          color: c ? "text-normal" : "text-muted",
          children: [m, "//"]
        }), (0, o.jsx)(s.Text, {
          tag: "span",
          variant: c ? "text-md/normal" : "text-md/semibold",
          color: c ? "text-muted" : "text-normal",
          children: M
        }), (0, o.jsx)(s.Text, {
          tag: "span",
          variant: "text-md/normal",
          color: "text-muted",
          children: h
        })]
      }), (0, o.jsx)(s.Checkbox, {
        className: i.checkbox,
        type: s.Checkbox.Types.INVERTED,
        value: E,
        onChange: (t, e) => T(e),
        children: (0, o.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: c ? l.Z.Messages.MASKED_LINK_ALERT_V2_TRUST_PROTOCOL.format({
            protocol: m.replace(":", "")
          }) : l.Z.Messages.MASKED_LINK_ALERT_V2_TRUST_WEBSITE.format({
            domain: M
          })
        })
      })]
    }), (0, o.jsxs)(s.ModalFooter, {
      children: [(0, o.jsx)(s.Button, {
        type: "button",
        size: s.Button.Sizes.MEDIUM,
        color: s.Button.Colors.BRAND,
        onClick: R,
        children: c ? l.Z.Messages.MASKED_LINK_ALERT_V2_CONFIRM_PROTOCOL : l.Z.Messages.MASKED_LINK_ALERT_V2_CONFIRM_WEBSITE
      }), (0, o.jsx)(s.Button, {
        type: "button",
        size: s.Button.Sizes.MEDIUM,
        color: s.Button.Colors.PRIMARY,
        onClick: u,
        look: s.ButtonLooks.LINK,
        children: l.Z.Messages.GO_BACK
      })]
    })]
  })
}