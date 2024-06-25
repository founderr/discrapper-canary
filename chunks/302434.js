t.d(n, {
  Z: function() {
    return d
  }
});
var i = t(735250),
  l = t(470079),
  s = t(481060),
  a = t(153124),
  r = t(63063),
  o = t(981631),
  c = t(689938);

function d(e) {
  let {
    transitionState: n,
    onConfirm: t,
    onClose: d
  } = e, u = (0, a.Dt)(), I = l.useCallback(() => {
    t(), d()
  }, [t, d]);
  return (0, i.jsxs)(s.ModalRoot, {
    transitionState: n,
    "aria-labelledby": u,
    size: s.ModalSize.SMALL,
    children: [(0, i.jsx)(s.ModalHeader, {
      separator: !1,
      children: (0, i.jsx)(s.Heading, {
        id: u,
        color: "header-primary",
        variant: "heading-md/semibold",
        children: c.Z.Messages.DISABLE_INVITES
      })
    }), (0, i.jsx)(s.ModalContent, {
      children: (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: c.Z.Messages.INVITES_DISABLED_DESCRIPTION.format({
          helpArticleUrl: r.Z.getArticleURL(o.BhN.INVITE_DISABLED)
        })
      })
    }), (0, i.jsxs)(s.ModalFooter, {
      children: [(0, i.jsx)(s.Button, {
        onClick: I,
        color: s.Button.Colors.RED,
        look: s.Button.Looks.FILLED,
        children: c.Z.Messages.YES_TEXT
      }), (0, i.jsx)(s.Button, {
        onClick: d,
        color: s.Button.Colors.PRIMARY,
        look: s.Button.Looks.LINK,
        children: c.Z.Messages.CANCEL
      })]
    })]
  })
}