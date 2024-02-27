"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
});
var l = a("37983"),
  s = a("884691"),
  n = a("414456"),
  r = a.n(n),
  i = a("418009"),
  o = a("77078"),
  u = a("95689"),
  d = a("100300"),
  c = a("782340"),
  A = a("563778");

function E(e) {
  let {
    label: t,
    isSelected: a,
    onClick: s,
    children: n
  } = e, i = (0, o.useRadioItem)({
    isSelected: a,
    label: t
  });
  return (0, l.jsx)(o.Clickable, {
    ...i,
    onClick: s,
    className: r(A.option, a && A.optionSelected),
    children: n
  })
}
var _ = function(e) {
  let {
    selectedLayoutType: t,
    onSelectedLayoutType: a
  } = e, n = (0, o.useRadioGroup)({
    orientation: "horizontal"
  }), r = s.useMemo(() => [{
    name: i.PollLayoutTypes.DEFAULT,
    label: c.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
    icon: d.default
  }, {
    name: i.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
    label: c.default.Messages.CREATE_POLL_LAYOUT_IMAGE,
    icon: u.default
  }], []), _ = e => {
    a(e)
  };
  return (0, l.jsx)("div", {
    className: A.container,
    "aria-label": c.default.Messages.CREATE_POLL_LAYOUTS_RADIOGROUP_ARIA_LABEL,
    ...n,
    children: r.map(e => {
      let a = e.icon;
      return (0, l.jsx)(E, {
        label: e.label,
        isSelected: e.name === t,
        onClick: () => _(e.name),
        children: (0, l.jsx)(a, {
          className: A.icon
        })
      }, e.name)
    })
  })
}