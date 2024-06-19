var n = t(735250);
t(470079);
var i = t(481060),
  a = t(80718);
s.Z = e => {
  let {
    label: s,
    onClick: t,
    submitting: l
  } = e;
  return (0, n.jsx)(i.Clickable, {
    onClick: l ? void 0 : t,
    className: a.button,
    children: (0, n.jsxs)("div", {
      className: a.contentContainer,
      children: [l ? (0, n.jsx)(i.Spinner, {
        type: i.Spinner.Type.PULSING_ELLIPSIS,
        className: a.__invalid_spinner
      }) : (0, n.jsx)(i.Text, {
        variant: "text-md/medium",
        className: a.label,
        children: s
      }), (0, n.jsx)(i.ChevronSmallDownIcon, {
        size: "md",
        color: "currentColor",
        className: a.arrow
      })]
    })
  })
}