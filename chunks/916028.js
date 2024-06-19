t(47120);
var n = t(735250);
t(470079);
var i = t(481060),
  a = t(113434);
s.Z = function(e) {
  let {
    onSelect: s,
    quest: t
  } = e, {
    quests: l
  } = (0, a.J2)({
    fetchPolicy: "cache-and-network"
  }), r = [{
    label: "NONE",
    value: null
  }, ...l.map(e => ({
    label: e.config.messages.questName,
    value: e
  }))];
  return (0, n.jsxs)(i.FormItem, {
    children: [(0, n.jsx)(i.FormTitle, {
      tag: i.FormTitleTags.H5,
      children: "Prefill with Quest"
    }), (0, n.jsx)(i.FormText, {
      children: (0, n.jsx)(i.Select, {
        "aria-label": "Prefill Quest",
        options: r,
        isSelected: e => (null == e ? void 0 : e.id) === (null == t ? void 0 : t.id),
        select: s,
        serialize: String
      })
    })]
  })
}