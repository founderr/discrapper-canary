e.r(n), e.d(n, {
  default: function() {
    return l
  }
}), e(47120);
var i = e(735250),
  a = e(470079),
  r = e(481060),
  o = e(53365),
  c = e(377176),
  s = e(689938),
  u = e(613075);

function l(t) {
  let {
    guildId: n,
    transitionState: e,
    onClose: l
  } = t, [T, E] = a.useState(!1), [_, N] = a.useState(!1), R = async () => {
    E(!0);
    try {
      await (0, o.zo)(n), l()
    } finally {
      E(!1)
    }
  }, A = s.Z.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_TITLE;
  return (0, i.jsxs)(r.ModalRoot, {
    className: u.__invalid_container,
    size: r.ModalSize.DYNAMIC,
    transitionState: e,
    "aria-label": A,
    children: [(0, i.jsxs)(r.ModalContent, {
      className: u.content,
      children: [(0, i.jsxs)("div", {
        className: u.header,
        children: [(0, i.jsx)(r.CircleExclamationPointIcon, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20,
          className: u.warningIcon
        }), (0, i.jsx)(r.Spacer, {
          size: 8,
          horizontal: !0
        }), (0, i.jsx)(r.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: A
        })]
      }), (0, i.jsx)(r.Spacer, {
        size: 12
      }), (0, i.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: u.__invalid_body,
        children: s.Z.Messages.GUILD_PRODUCT_TERMS_NOT_ACCEPTED_ERROR_BODY
      }), (0, i.jsx)(r.Spacer, {
        size: 28
      }), (0, i.jsx)(r.Checkbox, {
        onChange: () => {
          N(t => !t)
        },
        size: 20,
        type: r.Checkbox.Types.INVERTED,
        value: _,
        children: (0, i.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: (0, c.f)()
        })
      })]
    }), (0, i.jsxs)(r.ModalFooter, {
      children: [(0, i.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        disabled: !_,
        onClick: R,
        submitting: T,
        children: s.Z.Messages.CONFIRM
      }), (0, i.jsx)(r.Spacer, {
        size: 12,
        horizontal: !0
      }), (0, i.jsx)(r.Button, {
        color: r.Button.Colors.PRIMARY,
        look: r.Button.Looks.OUTLINED,
        onClick: l,
        children: s.Z.Messages.CANCEL
      })]
    })]
  })
}