"use strict";
s.r(t), s("47120");
var a = s("735250");
s("470079");
var n = s("481060"),
  l = s("113434");
t.default = function(e) {
  let {
    onSelect: t,
    quest: s
  } = e, {
    quests: i
  } = (0, l.useQuests)({
    fetchPolicy: "cache-and-network"
  }), r = [{
    label: "NONE",
    value: null
  }, ...i.map(e => ({
    label: e.config.messages.questName,
    value: e
  }))];
  return (0, a.jsxs)(n.FormItem, {
    children: [(0, a.jsx)(n.FormTitle, {
      tag: n.FormTitleTags.H5,
      children: "Prefill with Quest"
    }), (0, a.jsx)(n.FormText, {
      children: (0, a.jsx)(n.Select, {
        "aria-label": "Prefill Quest",
        options: r,
        isSelected: e => (null == e ? void 0 : e.id) === (null == s ? void 0 : s.id),
        select: t,
        serialize: String
      })
    })]
  })
}