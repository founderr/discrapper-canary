"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
});
var l = a("37983"),
  n = a("884691"),
  s = a("414456"),
  r = a.n(s),
  i = a("418009"),
  o = a("77078"),
  u = a("95689"),
  c = a("100300"),
  d = a("782340"),
  E = a("563778");

function A(e) {
  let {
    label: t,
    isSelected: a,
    onClick: n,
    children: s
  } = e, i = (0, o.useRadioItem)({
    isSelected: a,
    label: t
  });
  return (0, l.jsx)(o.Clickable, {
    ...i,
    onClick: n,
    className: r(E.option, a && E.optionSelected),
    children: s
  })
}
var _ = function(e) {
  let {
    selectedLayoutType: t,
    onSelectedLayoutType: a
  } = e, s = (0, o.useRadioGroup)({
    orientation: "horizontal"
  }), r = n.useMemo(() => [{
    name: i.PollLayoutTypes.DEFAULT,
    label: d.default.Messages.CREATE_POLL_LAYOUT_DEFAULT,
    icon: c.default
  }, {
    name: i.PollLayoutTypes.IMAGE_ONLY_ANSWERS,
    label: d.default.Messages.CREATE_POLL_LAYOUT_IMAGE,
    icon: u.default
  }], []), _ = e => {
    a(e)
  };
  return (0, l.jsx)("div", {
    className: E.container,
    "aria-label": d.default.Messages.CREATE_POLL_LAYOUTS_RADIOGROUP_ARIA_LABEL,
    ...s,
    children: r.map(e => {
      let a = e.icon;
      return (0, l.jsx)(A, {
        label: e.label,
        isSelected: e.name === t,
        onClick: () => _(e.name),
        children: (0, l.jsx)(a, {
          className: E.icon
        })
      }, e.name)
    })
  })
}