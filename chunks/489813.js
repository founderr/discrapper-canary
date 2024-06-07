"use strict";
a.r(t), a.d(t, {
  QuestionRenderer: function() {
    return d
  },
  RequirementRenderer: function() {
    return c
  },
  RequirementWithActionRenderer: function() {
    return u
  }
});
var n = a("735250");
a("470079");
var r = a("692547"),
  i = a("481060"),
  s = a("441674"),
  l = a("696202"),
  o = a("73356");

function d(e) {
  let {
    title: t,
    children: a
  } = e;
  return (0, n.jsxs)("div", {
    className: o.questionContainer,
    children: [(0, n.jsx)(i.Text, {
      className: o.questionTitle,
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), a]
  })
}

function c(e) {
  let {
    icon: t,
    text: a,
    meetsRequirement: d
  } = e;
  return (0, n.jsxs)("div", {
    className: o.requirementContainer,
    children: [(0, n.jsx)(t, {
      className: o.requirementIcon,
      height: 20,
      width: 20
    }), (0, n.jsx)(i.Text, {
      className: o.requirementText,
      variant: "text-md/normal",
      children: a
    }), d ? (0, n.jsx)(s.default, {
      width: 24,
      height: 24,
      className: o.requirementSuccess,
      backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
    }) : (0, n.jsx)(l.default, {
      width: 24,
      height: 24,
      className: o.requirementFailure,
      backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
    })]
  })
}

function u(e) {
  let {
    icon: t,
    text: a,
    footnote: l,
    meetsRequirement: d,
    children: c
  } = e;
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: o.requirementContainer,
      children: [(0, n.jsx)(t, {
        className: o.requirementIcon,
        height: 20,
        width: 20
      }), (0, n.jsx)(i.Text, {
        className: o.requirementText,
        variant: "text-md/normal",
        children: a
      }), d ? (0, n.jsx)(s.default, {
        width: 24,
        height: 24,
        className: o.requirementSuccess,
        backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
      }) : c]
    }), null != l && (0, n.jsx)(i.Text, {
      color: "header-secondary",
      className: o.footnote,
      variant: "text-xs/normal",
      children: l
    })]
  })
}