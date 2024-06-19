t.r(e);
var i = t(735250);
t(470079);
var s = t(481060),
  l = t(287734),
  a = t(153124),
  r = t(471253),
  u = t(939863),
  c = t(689938),
  o = t(58150);
e.default = n => {
  let {
    channel: e,
    ...t
  } = n, d = (0, a.Dt)();
  return (0, i.jsxs)(s.ConfirmModal, {
    confirmText: c.Z.Messages.END_STAGE,
    cancelText: c.Z.Messages.CANCEL,
    onConfirm: () => {
      (0, r.NZ)(e), l.default.disconnect()
    },
    confirmButtonColor: s.Button.Colors.RED,
    bodyClassName: o.body,
    ...t,
    children: [(0, i.jsx)(u.Z, {
      className: o.headerIconContainer,
      children: (0, i.jsx)("div", {
        className: o.iconBackground,
        children: (0, i.jsx)(s.StageXIcon, {
          size: "custom",
          color: "currentColor",
          width: 40,
          height: 40,
          className: o.headerIcon
        })
      })
    }), (0, i.jsx)(s.Heading, {
      id: d,
      variant: "heading-xl/semibold",
      color: "header-primary",
      className: o.title,
      children: c.Z.Messages.END_EVENT_STAGE_CONFIRMATION_TITLE
    }), (0, i.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: o.subtitle,
      children: c.Z.Messages.END_EVENT_STAGE_CONFIRMATION_SUBTITLE
    })]
  })
}