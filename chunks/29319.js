"use strict";
n.r(t), n.d(t, {
  isContentGroup: function() {
    return h
  },
  default: function() {
    return m
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("384737"),
  i = n("260792"),
  r = n("77078"),
  u = n("826684"),
  o = n("447313"),
  d = n("782340"),
  c = n("611800"),
  f = n("559571");

function h(e) {
  return (null == e ? void 0 : e.id) === o.MEMBER_LIST_CONTENT_GROUP_ID
}
var m = a.memo(function(e) {
  let {
    title: t,
    onToggleExpand: n,
    expanded: a,
    expandedCount: o
  } = e;
  return (0, l.jsxs)(u.default, {
    className: f.membersGroup,
    children: [(0, l.jsx)(r.HiddenVisually, {
      children: d.default.Messages.CHANNEL_MEMBERS_A11Y_LABEL.format({
        title: t,
        count: o
      })
    }), (0, l.jsxs)("span", {
      "aria-hidden": !0,
      children: [t, " — ", o, (0, l.jsx)(r.Clickable, {
        onClick: n,
        tag: "span",
        className: c.toggleExpandButton,
        children: a ? (0, l.jsx)(i.ChevronSmallUpIcon, {
          className: c.toggleExpandIcon
        }) : (0, l.jsx)(s.ChevronSmallDownIcon, {
          className: c.toggleExpandIcon
        })
      })]
    })]
  })
})