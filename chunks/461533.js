n.r(s), n.d(s, {
  default: function() {
    return c
  }
}), n(47120);
var S = n(735250),
  r = n(470079),
  o = n(481060),
  t = n(369994),
  a = n(781208),
  _ = n(689938),
  M = n(106677);

function c(e) {
  let {
    guildId: s,
    transitionState: n,
    onClose: c
  } = e, [l, i] = r.useState([]), I = r.useCallback(() => {
    (0, t.KK)(s, l), (0, t.C4)(s), c()
  }, [s, c, l]), A = r.useCallback(e => () => {
    i(s => s.includes(e) ? s.filter(s => s !== e) : [...s, e])
  }, []), E = r.useCallback(() => {
    open(a.RI)
  }, []);
  return (0, S.jsxs)(o.ModalRoot, {
    transitionState: n,
    size: o.ModalSize.SMALL,
    children: [(0, S.jsx)(o.ModalHeader, {
      separator: !1,
      children: (0, S.jsx)(o.Heading, {
        color: "header-primary",
        variant: "heading-md/semibold",
        children: _.Z.Messages.GUILD_REPORT_RAID_MODAL_TITLE
      })
    }), (0, S.jsxs)(o.ModalContent, {
      children: [(0, S.jsx)(o.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: _.Z.Messages.GUILD_REPORT_RAID_MODAL_DESCRIPTION_CLICKABLE.format({
          onClick: E
        })
      }), (0, S.jsx)("div", {
        className: M.mainCheckboxContainer,
        children: a.Ud.map(e => (0, S.jsxs)(o.Clickable, {
          className: M.checkboxContainer,
          onClick: A(e),
          children: [(0, S.jsx)(o.Checkbox, {
            type: o.Checkbox.Types.INVERTED,
            className: M.checkbox,
            value: l.includes(e),
            displayOnly: !0
          }), (0, S.jsx)(o.Text, {
            variant: "text-sm/normal",
            children: (0, a.$l)(e)
          })]
        }, e))
      })]
    }), (0, S.jsxs)(o.ModalFooter, {
      children: [(0, S.jsx)(o.Button, {
        onClick: I,
        color: o.Button.Colors.BRAND,
        look: o.Button.Looks.FILLED,
        children: _.Z.Messages.SUBMIT
      }), (0, S.jsx)(o.Button, {
        onClick: c,
        color: o.Button.Colors.PRIMARY,
        look: o.Button.Looks.LINK,
        children: _.Z.Messages.CANCEL
      })]
    })]
  })
}