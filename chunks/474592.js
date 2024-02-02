"use strict";
n.r(t), n.d(t, {
  InstantInviteSettingsPage: function() {
    return g
  }
});
var l = n("37983");
n("884691");
var i = n("414456"),
  s = n.n(i),
  a = n("77078"),
  r = n("841098"),
  o = n("825691"),
  u = n("339485"),
  d = n("782340"),
  c = n("435808"),
  f = n("926622");
let g = e => {
  let {
    handleDone: t,
    headerId: n,
    modalState: i,
    shouldHideTemporaryInviteToggle: g,
    onGenerateNewLink: h,
    onToggleTemporary: I,
    onSelectMaxAge: E,
    onSelectMaxUses: m
  } = e, v = (0, r.default)(), {
    maxAge: p,
    maxUses: T,
    temporary: _
  } = i;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(a.ModalHeader, {
      children: [(0, l.jsx)(a.ModalCloseButton, {
        className: c.closeButton,
        onClick: t
      }), (0, l.jsx)("div", {
        className: c.headerContainer,
        children: (0, l.jsx)(a.FormTitle, {
          id: n,
          tag: "h2",
          className: s(f.marginReset, c.headerCloseButtonSpacing, c.headerText),
          children: d.default.Messages.INVITE_SETTINGS_TITLE
        })
      })]
    }), (0, l.jsx)(o.default, {
      shouldHideTemporaryInviteToggle: g,
      maxAge: p,
      maxUses: T,
      temporary: _,
      onToggleTemporary: I,
      onSelectMaxAge: E,
      onSelectMaxUses: m,
      onGenerateNewLink: h
    }), (0, l.jsx)(a.ModalFooter, {
      className: c.settingsFooter,
      children: (0, l.jsx)(u.default, {
        theme: v,
        onConfirm: () => {
          h(), t()
        },
        onDismiss: t
      })
    })]
  })
}