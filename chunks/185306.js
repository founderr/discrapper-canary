var n = t(735250),
  l = t(470079),
  s = t(120356),
  r = t.n(s),
  o = t(263568),
  i = t(481060),
  c = t(689938),
  u = t(991833);

function d(e) {
  let {
    label: a,
    isSelected: t,
    onClick: l,
    children: s
  } = e, o = (0, i.useRadioItem)({
    isSelected: t,
    label: a
  });
  return (0, n.jsx)(i.Clickable, {
    ...o,
    onClick: l,
    className: r()(u.option, t && u.optionSelected),
    children: s
  })
}
a.Z = function(e) {
  let {
    selectedLayoutType: a,
    onSelectedLayoutType: t
  } = e, s = (0, i.useRadioGroup)({
    orientation: "horizontal"
  }), r = l.useMemo(() => [{
    name: o.C.DEFAULT,
    label: c.Z.Messages.CREATE_POLL_LAYOUT_DEFAULT,
    icon: i.ListBulletsIcon
  }, {
    name: o.C.IMAGE_ONLY_ANSWERS,
    label: c.Z.Messages.CREATE_POLL_LAYOUT_IMAGE,
    icon: i.ImageIcon
  }], []), E = e => {
    t(e)
  };
  return (0, n.jsx)("div", {
    className: u.container,
    "aria-label": c.Z.Messages.CREATE_POLL_LAYOUTS_RADIOGROUP_ARIA_LABEL,
    ...s,
    children: r.map(e => {
      let t = e.icon;
      return (0, n.jsx)(d, {
        label: e.label,
        isSelected: e.name === a,
        onClick: () => E(e.name),
        children: (0, n.jsx)(t, {
          className: u.icon
        })
      }, e.name)
    })
  })
}