t.d(n, {
  Z: function() {
    return d
  }
});
var i = t(735250),
  s = t(470079),
  l = t(481060),
  a = t(153124),
  r = t(63063),
  o = t(981631),
  c = t(689938);

function d(e) {
  let {
    transitionState: n,
    onConfirm: t,
    onClose: d
  } = e, u = (0, a.Dt)(), I = s.useCallback(() => {
    t(), d()
  }, [t, d]);
  return (0, i.jsxs)(l.ModalRoot, {
    transitionState: n,
    "aria-labelledby": u,
    size: l.ModalSize.SMALL,
    children: [(0, i.jsx)(l.ModalHeader, {
      separator: !1,
      children: (0, i.jsx)(l.Heading, {
        id: u,
        color: "header-primary",
        variant: "heading-md/semibold",
        children: c.Z.Messages.DISABLE_INVITES
      })
    }), (0, i.jsx)(l.ModalContent, {
      children: (0, i.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "header-secondary",
        children: c.Z.Messages.INVITES_DISABLED_DESCRIPTION.format({
          helpArticleUrl: r.Z.getArticleURL(o.BhN.INVITE_DISABLED)
        })
      })
    }), (0, i.jsxs)(l.ModalFooter, {
      children: [(0, i.jsx)(l.Button, {
        onClick: I,
        color: l.Button.Colors.RED,
        look: l.Button.Looks.FILLED,
        children: c.Z.Messages.YES_TEXT
      }), (0, i.jsx)(l.Button, {
        onClick: d,
        color: l.Button.Colors.PRIMARY,
        look: l.Button.Looks.LINK,
        children: c.Z.Messages.CANCEL
      })]
    })]
  })
}