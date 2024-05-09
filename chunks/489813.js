"use strict";
s.r(t), s.d(t, {
  QuestionRenderer: function() {
    return r
  },
  RequirementRenderer: function() {
    return u
  },
  RequirementWithActionRenderer: function() {
    return o
  }
});
var a = s("735250");
s("470079");
var n = s("692547"),
  i = s("481060"),
  E = s("441674"),
  l = s("696202"),
  _ = s("73356");

function r(e) {
  let {
    title: t,
    children: s
  } = e;
  return (0, a.jsxs)("div", {
    className: _.questionContainer,
    children: [(0, a.jsx)(i.Text, {
      className: _.questionTitle,
      variant: "text-md/semibold",
      color: "header-primary",
      children: t
    }), s]
  })
}

function u(e) {
  let {
    icon: t,
    text: s,
    meetsRequirement: r
  } = e;
  return (0, a.jsxs)("div", {
    className: _.requirementContainer,
    children: [(0, a.jsx)(t, {
      className: _.requirementIcon,
      height: 20,
      width: 20
    }), (0, a.jsx)(i.Text, {
      className: _.requirementText,
      variant: "text-md/normal",
      children: s
    }), r ? (0, a.jsx)(E.default, {
      width: 24,
      height: 24,
      className: _.requirementSuccess,
      backgroundColor: n.default.unsafe_rawColors.WHITE_500.css
    }) : (0, a.jsx)(l.default, {
      width: 24,
      height: 24,
      className: _.requirementFailure,
      backgroundColor: n.default.unsafe_rawColors.WHITE_500.css
    })]
  })
}

function o(e) {
  let {
    icon: t,
    text: s,
    footnote: l,
    meetsRequirement: r,
    children: u
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: _.requirementContainer,
      children: [(0, a.jsx)(t, {
        className: _.requirementIcon,
        height: 20,
        width: 20
      }), (0, a.jsx)(i.Text, {
        className: _.requirementText,
        variant: "text-md/normal",
        children: s
      }), r ? (0, a.jsx)(E.default, {
        width: 24,
        height: 24,
        className: _.requirementSuccess,
        backgroundColor: n.default.unsafe_rawColors.WHITE_500.css
      }) : u]
    }), null != l && (0, a.jsx)(i.Text, {
      color: "header-secondary",
      className: _.footnote,
      variant: "text-xs/normal",
      children: l
    })]
  })
}