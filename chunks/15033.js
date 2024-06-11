"use strict";
s.r(t), s("47120");
var a = s("735250");
s("470079");
var n = s("128034"),
  i = s("481060"),
  l = s("46140");
t.default = function(e) {
  let {
    onChange: t,
    values: s
  } = e, r = [{
    label: "Playtime Task",
    value: l.QuestVariants.PLAYTIME_TASK
  }, {
    label: "Post Enrollment CTA",
    value: l.QuestVariants.POST_ENROLLMENT_CTA
  }, {
    label: "Quest Bar V2",
    value: l.QuestVariants.QUEST_BAR_V2
  }];
  return (0, a.jsxs)(i.FormItem, {
    children: [(0, a.jsx)(i.FormTitle, {
      tag: i.FormTitleTags.H5,
      children: (0, a.jsxs)("div", {
        style: {
          display: "flex",
          gap: "4px",
          placeItems: "center"
        },
        children: ["Variants", (0, a.jsx)(i.Tooltip, {
          text: "Heads up: Some variants are still in the works. Test with care!",
          children: e => (0, a.jsx)(n.CircleInformationIcon, {
            ...e,
            height: 16,
            width: 16
          })
        })]
      })
    }), (0, a.jsx)(i.FormText, {
      children: (0, a.jsx)(i.SearchableSelect, {
        "aria-label": "Variants",
        options: r,
        onChange: t,
        value: s,
        multi: !0
      })
    })]
  })
}