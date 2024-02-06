"use strict";
n.r(t), n.d(t, {
  QuestionRenderer: function() {
    return a
  },
  RequirementRenderer: function() {
    return c
  },
  RequirementWithActionRenderer: function() {
    return d
  }
});
var i = n("37983");
n("884691");
var r = n("669491"),
  l = n("77078"),
  s = n("578706"),
  o = n("381546"),
  u = n("880050");

function a(e) {
  let {
    title: t,
    children: n
  } = e;
  return (0, i.jsxs)("div", {
    className: u.questionContainer,
    children: [(0, i.jsx)(l.Text, {
      className: u.questionTitle,
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), n]
  })
}

function c(e) {
  let {
    icon: t,
    text: n,
    meetsRequirement: a
  } = e;
  return (0, i.jsxs)("div", {
    className: u.requirementContainer,
    children: [(0, i.jsx)(t, {
      className: u.requirementIcon,
      height: 20,
      width: 20
    }), (0, i.jsx)(l.Text, {
      className: u.requirementText,
      variant: "text-md/normal",
      children: n
    }), a ? (0, i.jsx)(s.default, {
      width: 24,
      height: 24,
      className: u.requirementSuccess,
      backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
    }) : (0, i.jsx)(o.default, {
      width: 24,
      height: 24,
      className: u.requirementFailure,
      backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
    })]
  })
}

function d(e) {
  let {
    icon: t,
    text: n,
    footnote: o,
    meetsRequirement: a,
    children: c
  } = e;
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: u.requirementContainer,
      children: [(0, i.jsx)(t, {
        className: u.requirementIcon,
        height: 20,
        width: 20
      }), (0, i.jsx)(l.Text, {
        className: u.requirementText,
        variant: "text-md/normal",
        children: n
      }), a ? (0, i.jsx)(s.default, {
        width: 24,
        height: 24,
        className: u.requirementSuccess,
        backgroundColor: r.default.unsafe_rawColors.WHITE_500.css
      }) : c]
    }), null != o && (0, i.jsx)(l.Text, {
      color: "header-secondary",
      className: u.footnote,
      variant: "text-xs/normal",
      children: o
    })]
  })
}