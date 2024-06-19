t.d(s, {
  Z: function() {
    return u
  }
}), t(47120);
var a = t(735250),
  l = t(470079),
  n = t(481060),
  i = t(479531),
  o = t(285952),
  r = t(486527),
  c = t(689938),
  d = t(807299);

function u(e) {
  let {
    directoryChannelId: s,
    description: t,
    onDescriptionChange: u,
    categoryId: C,
    onCategoryIdChange: m,
    onSubmit: E,
    onClose: _,
    onBack: x
  } = e, [L, I] = l.useState(!1), [T, h] = l.useState(null), g = async () => {
    I(!0);
    try {
      await E()
    } catch (e) {
      h(new i.Z(e))
    }
    I(!1)
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(n.ModalHeader, {
      direction: o.Z.Direction.VERTICAL,
      className: d.header,
      separator: !1,
      children: [(0, a.jsx)(n.Heading, {
        className: d.title,
        variant: "heading-xl/semibold",
        children: c.Z.Messages.HUB_CUSTOMIZE_GUILD_TITLE
      }), (0, a.jsx)(n.Text, {
        className: d.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: c.Z.Messages.HUB_CUSTOMIZE_GUILD_SUBTITLE
      }), null != _ && (0, a.jsx)(n.ModalCloseButton, {
        className: d.closeButton,
        onClick: _
      })]
    }), (0, a.jsxs)(n.ModalContent, {
      className: d.createGuild,
      paddingFix: !1,
      children: [(0, a.jsx)(n.FormItem, {
        title: c.Z.Messages.HUB_ADD_GUILD_DESCRIPTION_TITLE,
        children: (0, a.jsx)(n.TextArea, {
          value: t,
          maxLength: 200,
          placeholder: c.Z.Messages.HUB_ADD_GUILD_DESCRIPTION_PLACEHOLDER,
          onChange: u,
          error: null == T ? void 0 : T.getAnyErrorMessage()
        })
      }), (0, a.jsx)(n.FormItem, {
        className: d.formItemSpaced,
        title: c.Z.Messages.HUB_ADD_GUILD_CATEGORY_TITLE,
        children: (0, a.jsx)(n.SingleSelect, {
          placeholder: c.Z.Messages.SELECT,
          options: (0, r.b7)(s),
          clearable: !1,
          value: C,
          onChange: m,
          maxVisibleItems: 4,
          popoutClassName: "theme-light"
        })
      })]
    }), (0, a.jsxs)(n.ModalFooter, {
      justify: o.Z.Justify.BETWEEN,
      children: [(0, a.jsx)(n.Button, {
        color: n.Button.Colors.BRAND,
        onClick: g,
        submitting: L,
        disabled: "" === t || C === r.AR.UNCATEGORIZED,
        children: c.Z.Messages.HUB_ADD_SERVER_CTA
      }), (0, a.jsx)(n.Button, {
        look: n.Button.Looks.BLANK,
        size: n.Button.Sizes.MIN,
        onClick: x,
        children: c.Z.Messages.BACK
      })]
    })]
  })
}