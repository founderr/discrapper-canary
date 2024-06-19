t(47120);
var n = t(735250);
t(470079);
var i = t(481060),
  a = t(46140);
s.Z = function(e) {
  let {
    onChange: s,
    values: t
  } = e, l = [{
    label: "Playtime Task",
    value: a.S7.PLAYTIME_TASK
  }, {
    label: "Post Enrollment CTA",
    value: a.S7.POST_ENROLLMENT_CTA
  }, {
    label: "Quest Bar V2",
    value: a.S7.QUEST_BAR_V2
  }];
  return (0, n.jsxs)(i.FormItem, {
    children: [(0, n.jsx)(i.FormTitle, {
      tag: i.FormTitleTags.H5,
      children: (0, n.jsxs)("div", {
        style: {
          display: "flex",
          gap: "4px",
          placeItems: "center"
        },
        children: ["Variants", (0, n.jsx)(i.Tooltip, {
          text: "Heads up: Some variants are still in the works. Test with care!",
          children: e => (0, n.jsx)(i.CircleInformationIcon, {
            size: "xs",
            ...e
          })
        })]
      })
    }), (0, n.jsx)(i.FormText, {
      children: (0, n.jsx)(i.SearchableSelect, {
        "aria-label": "Variants",
        options: l,
        onChange: s,
        value: t,
        multi: !0
      })
    })]
  })
}