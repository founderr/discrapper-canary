"use strict";
n.r(t), n.d(t, {
  InstantInviteSettingsPage: function() {
    return h
  }
});
var l = n("37983");
n("884691");
var s = n("414456"),
  a = n.n(s),
  i = n("77078"),
  r = n("841098"),
  u = n("825691"),
  o = n("339485"),
  d = n("782340"),
  c = n("435808"),
  f = n("926622");
let h = e => {
  let {
    handleDone: t,
    headerId: n,
    modalState: s,
    shouldHideTemporaryInviteToggle: h,
    onGenerateNewLink: g,
    onToggleTemporary: I,
    onSelectMaxAge: E,
    onSelectMaxUses: v
  } = e, m = (0, r.default)(), {
    maxAge: p,
    maxUses: _,
    temporary: T
  } = s;
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)(i.ModalHeader, {
      children: [(0, l.jsx)(i.ModalCloseButton, {
        className: c.closeButton,
        onClick: t
      }), (0, l.jsx)("div", {
        className: c.headerContainer,
        children: (0, l.jsx)(i.FormTitle, {
          id: n,
          tag: "h2",
          className: a(f.marginReset, c.headerCloseButtonSpacing, c.headerText),
          children: d.default.Messages.INVITE_SETTINGS_TITLE
        })
      })]
    }), (0, l.jsx)(u.default, {
      shouldHideTemporaryInviteToggle: h,
      maxAge: p,
      maxUses: _,
      temporary: T,
      onToggleTemporary: I,
      onSelectMaxAge: E,
      onSelectMaxUses: v,
      onGenerateNewLink: g
    }), (0, l.jsx)(i.ModalFooter, {
      className: c.settingsFooter,
      children: (0, l.jsx)(o.default, {
        theme: m,
        onConfirm: () => {
          g(), t()
        },
        onDismiss: t
      })
    })]
  })
}