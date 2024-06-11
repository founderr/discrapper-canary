"use strict";
s.r(t), s.d(t, {
  UserState: function() {
    return n
  }
});
var a, n, i = s("735250");
s("470079");
var l = s("481060");
(a = n || (n = {}))[a.UNENROLLED = 0] = "UNENROLLED", a[a.ENROLLED = 1] = "ENROLLED", a[a.COMPLETED_25 = 2] = "COMPLETED_25", a[a.COMPLETED_50 = 3] = "COMPLETED_50", a[a.COMPLETED_75 = 4] = "COMPLETED_75", a[a.COMPLETED_100 = 5] = "COMPLETED_100", a[a.CLAIMED = 6] = "CLAIMED";
t.default = function(e) {
  let {
    onChange: t,
    value: s
  } = e;
  return (0, i.jsxs)(l.FormItem, {
    children: [(0, i.jsx)(l.FormTitle, {
      tag: l.FormTitleTags.H5,
      children: "User State"
    }), (0, i.jsx)(l.FormText, {
      children: (0, i.jsx)(l.Select, {
        "aria-label": "User State",
        options: [{
          label: "Unenrolled",
          value: 0
        }, {
          label: "Enrolled",
          value: 1
        }, {
          label: "25% Complete",
          value: 2
        }, {
          label: "50% Complete",
          value: 3
        }, {
          label: "75% Complete",
          value: 4
        }, {
          label: "100% Complete",
          value: 5
        }, {
          label: "Claimed",
          value: 6
        }],
        isSelected: e => e === s,
        select: t,
        serialize: String
      })
    })]
  })
}