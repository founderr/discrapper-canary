"use strict";
l.r(t), l.d(t, {
  default: function() {
    return o
  }
});
var a = l("735250"),
  n = l("470079"),
  s = l("481060"),
  r = l("377171"),
  i = l("854698"),
  d = l("689938"),
  u = l("147826");

function o(e) {
  let {
    startDate: t,
    recurrenceRule: l,
    onRecurrenceChange: o
  } = e, c = n.useMemo(() => (0, i.recurrenceRuleToOption)(t, l), [l, t]), E = (0, i.getRecurrenceOptions)(t), _ = e => e.toString(), f = (0, a.jsxs)("div", {
    className: u.title,
    children: [d.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, a.jsx)(s.TextBadge, {
      text: d.default.Messages.NEW,
      color: r.default.BG_BRAND
    })]
  });
  return (0, a.jsx)(s.FormItem, {
    title: f,
    required: !0,
    children: (0, a.jsx)(s.Select, {
      placeholder: "gaming",
      options: E,
      select: o,
      serialize: _,
      isSelected: e => null != c && _(e) === _(c)
    })
  })
}