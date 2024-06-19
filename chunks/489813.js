n.d(t, {
  Ih: function() {
    return l
  },
  PU: function() {
    return c
  },
  hK: function() {
    return i
  }
});
var r = n(735250);
n(470079);
var o = n(692547),
  a = n(481060),
  s = n(851639);

function i(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, r.jsxs)("div", {
    className: s.questionContainer,
    children: [(0, r.jsx)(a.Text, {
      className: s.questionTitle,
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), n]
  })
}

function l(e) {
  let {
    icon: t,
    text: n,
    meetsRequirement: i
  } = e;
  return (0, r.jsxs)("div", {
    className: s.requirementContainer,
    children: [(0, r.jsx)(t, {
      className: s.requirementIcon,
      height: 20,
      width: 20,
      size: "custom",
      color: "currentColor"
    }), (0, r.jsx)(a.Text, {
      className: s.requirementText,
      variant: "text-md/normal",
      children: n
    }), i ? (0, r.jsx)(a.CircleCheckIcon, {
      size: "md",
      color: "currentColor",
      className: s.requirementSuccess,
      secondaryColor: o.Z.colors.WHITE.css
    }) : (0, r.jsx)(a.CircleXIcon, {
      size: "md",
      color: "currentColor",
      className: s.requirementFailure,
      secondaryColor: o.Z.colors.WHITE.css
    })]
  })
}

function c(e) {
  let {
    icon: t,
    text: n,
    footnote: i,
    meetsRequirement: l,
    children: c
  } = e;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: s.requirementContainer,
      children: [(0, r.jsx)(t, {
        className: s.requirementIcon,
        height: 20,
        width: 20,
        size: "custom",
        color: "currentColor"
      }), (0, r.jsx)(a.Text, {
        className: s.requirementText,
        variant: "text-md/normal",
        children: n
      }), l ? (0, r.jsx)(a.CircleCheckIcon, {
        size: "md",
        color: "currentColor",
        className: s.requirementSuccess,
        secondaryColor: o.Z.colors.WHITE.css
      }) : c]
    }), null != i && (0, r.jsx)(a.Text, {
      color: "header-secondary",
      className: s.footnote,
      variant: "text-xs/normal",
      children: i
    })]
  })
}