s.r(a), s.d(a, {
  default: function() {
    return I
  }
}), s(47120);
var t = s(735250),
  l = s(470079),
  n = s(481060),
  r = s(479531),
  i = s(285952),
  o = s(99325),
  d = s(486527),
  c = s(689938),
  u = s(807299);

function I(e) {
  var a, s;
  let {
    transitionState: I,
    onClose: h,
    entry: E
  } = e, [m, D] = l.useState(null !== (a = E.description) && void 0 !== a ? a : ""), [_, g] = l.useState(null !== (s = E.primaryCategoryId) && void 0 !== s ? s : d.AR.UNCATEGORIZED), [C, T] = l.useState(!1), [x, p] = l.useState(null), A = async () => {
    if (p(null), m !== E.description || _ !== E.primaryCategoryId) {
      T(!0);
      try {
        await (0, o.Dr)(E.channelId, E.guildId, m, _), T(!1), h()
      } catch (e) {
        T(!1), p(new r.Z(e))
      }
    }
  };
  return (0, t.jsxs)(n.ModalRoot, {
    transitionState: I,
    "aria-label": c.Z.Messages.PAYMENT_SOURCES_ADD,
    children: [(0, t.jsxs)(n.ModalHeader, {
      direction: i.Z.Direction.VERTICAL,
      className: u.header,
      separator: !1,
      children: [(0, t.jsx)(n.Heading, {
        className: u.title,
        variant: "heading-xl/semibold",
        children: c.Z.Messages.HUB_ENTRY_UPDATE_DESCRIPTION_TITLE.format({
          guildName: E.name
        })
      }), (0, t.jsx)(n.Text, {
        className: u.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: c.Z.Messages.HUB_ADD_GUILD_DESCRIPTION_HELP
      }), null != h && (0, t.jsx)(n.ModalCloseButton, {
        className: u.closeButton,
        onClick: h
      })]
    }), (0, t.jsxs)(n.ModalContent, {
      className: u.createGuild,
      paddingFix: !1,
      children: [(0, t.jsx)(n.FormItem, {
        title: c.Z.Messages.HUB_ADD_GUILD_DESCRIPTION_TITLE,
        children: (0, t.jsx)(n.TextArea, {
          value: m,
          maxLength: 200,
          placeholder: c.Z.Messages.HUB_ADD_GUILD_DESCRIPTION_PLACEHOLDER,
          onChange: D,
          error: null == x ? void 0 : x.getAnyErrorMessage()
        })
      }), (0, t.jsx)(n.FormItem, {
        className: u.formItemSpaced,
        title: c.Z.Messages.HUB_ADD_GUILD_CATEGORY_TITLE,
        children: (0, t.jsx)(n.SingleSelect, {
          placeholder: c.Z.Messages.SELECT,
          options: (0, d.b7)(E.channelId),
          clearable: !1,
          value: _,
          onChange: g,
          maxVisibleItems: 4
        })
      })]
    }), (0, t.jsx)(n.ModalFooter, {
      justify: i.Z.Justify.BETWEEN,
      children: (0, t.jsx)(n.Button, {
        color: n.Button.Colors.BRAND,
        onClick: A,
        submitting: C,
        children: c.Z.Messages.SAVE
      })
    })]
  })
}