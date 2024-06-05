"use strict";
n.r(t), n.d(t, {
  QuestionRenderer: function() {
    return c
  },
  RequirementRenderer: function() {
    return d
  },
  RequirementWithActionRenderer: function() {
    return u
  }
});
var a = n("735250");
n("470079");
var r = n("692547"),
  s = n("481060"),
  i = n("441674"),
  l = n("696202"),
  o = n("73356");

function c(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, a.jsxs)("div", {
    className: o.questionContainer,
    children: [(0, a.jsx)(s.Text, {
      className: o.questionTitle,
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), n]
  })
}

function d(e) {
  let {
    icon: t,
    text: n,
    meetsRequirement: c
  } = e;
  return (0, a.jsxs)("div", {
    className: o.requirementContainer,
    children: [(0, a.jsx)(t, {
      className: o.requirementIcon,
      height: 20,
      width: 20
    }), (0, a.jsx)(s.Text, {
      className: o.requirementText,
      variant: "text-md/normal",
      children: n
    }), c ? (0, a.jsx)(i.default, {
      width: 24,
      height: 24,
      className: o.requirementSuccess,
      backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
    }) : (0, a.jsx)(l.default, {
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
    text: n,
    footnote: l,
    meetsRequirement: c,
    children: d
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: o.requirementContainer,
      children: [(0, a.jsx)(t, {
        className: o.requirementIcon,
        height: 20,
        width: 20
      }), (0, a.jsx)(s.Text, {
        className: o.requirementText,
        variant: "text-md/normal",
        children: n
      }), c ? (0, a.jsx)(i.default, {
        width: 24,
        height: 24,
        className: o.requirementSuccess,
        backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
      }) : d]
    }), null != l && (0, a.jsx)(s.Text, {
      color: "header-secondary",
      className: o.footnote,
      variant: "text-xs/normal",
      children: l
    })]
  })
}