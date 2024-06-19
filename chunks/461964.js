n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var l = n(735250),
  i = n(470079),
  a = n(481060),
  s = n(561716),
  c = n(721383),
  r = n(153124),
  o = n(63063),
  u = n(857595),
  _ = n(981631),
  d = n(689938),
  h = n(84050);

function E(e) {
  let {
    transitionState: t,
    onClose: n
  } = e, E = (0, r.Dt)();
  return i.useEffect(() => {
    u.r_()
  }, []), (0, l.jsxs)(a.ModalRoot, {
    transitionState: t,
    role: "alertdialog",
    "aria-labelledby": E,
    children: [(0, l.jsxs)(a.ModalContent, {
      className: h.content,
      children: [(0, l.jsx)(a.Heading, {
        variant: "heading-xl/semibold",
        id: E,
        className: h.header,
        children: d.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_TITLE.format({
          tab: (e, t) => (0, l.jsx)(a.KeyCombo, {
            shortcut: "tab",
            className: h.headerShortcut
          }, t)
        })
      }), (0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        children: d.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_BODY
      }), (0, l.jsxs)("ul", {
        className: h.tips,
        children: [(0, l.jsxs)("li", {
          children: [(0, l.jsx)(a.KeyCombo, {
            shortcut: c._.binds["0"]
          }), (0, l.jsx)(a.Text, {
            variant: "text-md/normal",
            children: d.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_LIST_SHORTCUT
          })]
        }), (0, l.jsxs)("li", {
          children: [(0, l.jsx)(a.KeyCombo, {
            shortcut: s.$.binds["0"]
          }), (0, l.jsx)(a.Text, {
            variant: "text-md/normal",
            children: d.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_QUICKSWITCHER_SHORTCUT
          })]
        })]
      }), (0, l.jsx)(a.Text, {
        variant: "text-md/normal",
        children: d.Z.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_HELP_CENTER_LINK.format({
          link: o.Z.getArticleURL(_.BhN.KEYBOARD_NAVIGATION)
        })
      })]
    }), (0, l.jsx)(a.ModalFooter, {
      children: (0, l.jsx)(a.Button, {
        onClick: n,
        color: a.Button.Colors.BRAND,
        size: a.Button.Sizes.SMALL,
        autoFocus: !0,
        children: d.Z.Messages.OKAY
      })
    })]
  })
}