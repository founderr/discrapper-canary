"use strict";
n.r(t), n.d(t, {
  InstantInviteSettingsPage: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  r = n.n(i),
  s = n("77078"),
  a = n("841098"),
  u = n("825691"),
  o = n("339485"),
  d = n("782340"),
  c = n("435808"),
  f = n("926622");
let h = e => {
  let {
    handleDone: t,
    headerId: n,
    modalState: i,
    shouldHideTemporaryInviteToggle: h,
    onGenerateNewLink: g,
    onToggleTemporary: I,
    onSelectMaxAge: v,
    onSelectMaxUses: E
  } = e, _ = (0, a.default)(), {
    maxAge: m,
    maxUses: p,
    temporary: T
  } = i;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(s.ModalHeader, {
      children: [(0, l.jsx)(s.ModalCloseButton, {
        className: c.closeButton,
        onClick: t
      }), (0, l.jsx)("div", {
        className: c.headerContainer,
        children: (0, l.jsx)(s.FormTitle, {
          id: n,
          tag: "h2",
          className: r(f.marginReset, c.headerCloseButtonSpacing, c.headerText),
          children: d.default.Messages.INVITE_SETTINGS_TITLE
        })
      })]
    }), (0, l.jsx)(u.default, {
      shouldHideTemporaryInviteToggle: h,
      maxAge: m,
      maxUses: p,
      temporary: T,
      onToggleTemporary: I,
      onSelectMaxAge: v,
      onSelectMaxUses: E,
      onGenerateNewLink: g
    }), (0, l.jsx)(s.ModalFooter, {
      className: c.settingsFooter,
      children: (0, l.jsx)(o.default, {
        theme: _,
        onConfirm: () => {
          g(), t()
        },
        onDismiss: t
      })
    })]
  })
}