"use strict";
n.r(e), n.d(e, {
  default: function() {
    return u
  }
}), n("47120");
var i = n("735250"),
  a = n("470079"),
  o = n("481060"),
  r = n("53365"),
  s = n("377176"),
  c = n("759231"),
  T = n("689938"),
  l = n("194604");

function u(t) {
  let {
    guildId: e,
    transitionState: n,
    onClose: u
  } = t, [E, d] = a.useState(!1), [_, C] = a.useState(!1), R = async () => {
    d(!0);
    try {
      await (0, r.acceptCreatorMonetizationTermsV2)(e), u()
    } finally {
      d(!1)
    }
  }, O = T.default.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_TITLE;
  return (0, i.jsxs)(o.ModalRoot, {
    className: l.__invalid_container,
    size: o.ModalSize.DYNAMIC,
    transitionState: n,
    "aria-label": O,
    children: [(0, i.jsxs)(o.ModalContent, {
      className: l.content,
      children: [(0, i.jsxs)("div", {
        className: l.header,
        children: [(0, i.jsx)(c.default, {
          width: 20,
          height: 20,
          className: l.warningIcon
        }), (0, i.jsx)(o.Spacer, {
          size: 8,
          horizontal: !0
        }), (0, i.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: O
        })]
      }), (0, i.jsx)(o.Spacer, {
        size: 12
      }), (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: l.__invalid_body,
        children: T.default.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_BODY
      }), (0, i.jsx)(o.Spacer, {
        size: 28
      }), (0, i.jsx)(o.Checkbox, {
        onChange: () => {
          C(t => !t)
        },
        size: 20,
        type: o.Checkbox.Types.INVERTED,
        value: _,
        children: (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: (0, s.getCreatorMonetizationAcceptTermsCheckboxText)()
        })
      })]
    }), (0, i.jsxs)(o.ModalFooter, {
      children: [(0, i.jsx)(o.Button, {
        color: o.Button.Colors.BRAND,
        disabled: !_,
        onClick: R,
        submitting: E,
        children: T.default.Messages.CONFIRM
      }), (0, i.jsx)(o.Spacer, {
        size: 12,
        horizontal: !0
      }), (0, i.jsx)(o.Button, {
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.OUTLINED,
        onClick: u,
        children: T.default.Messages.CANCEL
      })]
    })]
  })
}