"use strict";
l.r(t), l.d(t, {
  default: function() {
    return u
  }
});
var n = l("735250"),
  a = l("470079"),
  s = l("481060"),
  i = l("153124"),
  r = l("63063"),
  o = l("981631"),
  d = l("689938");

function u(e) {
  let {
    transitionState: t,
    onConfirm: l,
    onClose: u
  } = e, c = (0, i.useUID)(), f = a.useCallback(() => {
    l(), u()
  }, [l, u]);
  return (0, n.jsxs)(s.ModalRoot, {
    transitionState: t,
    "aria-labelledby": c,
    size: s.ModalSize.SMALL,
    children: [(0, n.jsx)(s.ModalHeader, {
      separator: !1,
      children: (0, n.jsx)(s.Heading, {
        id: c,
        color: "header-primary",
        variant: "heading-md/semibold",
        children: d.default.Messages.DISABLE_INVITES
      })
    }), (0, n.jsx)(s.ModalContent, {
      children: (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: d.default.Messages.INVITES_DISABLED_DESCRIPTION.format({
          helpArticleUrl: r.default.getArticleURL(o.HelpdeskArticles.INVITE_DISABLED)
        })
      })
    }), (0, n.jsxs)(s.ModalFooter, {
      children: [(0, n.jsx)(s.Button, {
        onClick: f,
        color: s.Button.Colors.RED,
        look: s.Button.Looks.FILLED,
        children: d.default.Messages.YES_TEXT
      }), (0, n.jsx)(s.Button, {
        onClick: u,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        children: d.default.Messages.CANCEL
      })]
    })]
  })
}