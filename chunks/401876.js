"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
});
var a = l("735250"),
  n = l("470079"),
  s = l("481060"),
  r = l("377171"),
  i = l("26290"),
  d = l("854698"),
  u = l("689938"),
  o = l("147826");

function c(e) {
  let {
    startDate: t,
    recurrenceRule: l,
    onRecurrenceChange: c
  } = e, E = n.useMemo(() => (0, d.recurrenceRuleToOption)(t, l), [l, t]), _ = (0, d.getRecurrenceOptions)(t), f = e => e.toString(), T = (0, a.jsxs)("div", {
    className: o.title,
    children: [u.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, a.jsx)(i.TextBadge, {
      text: u.default.Messages.NEW,
      color: r.default.BG_BRAND
    })]
  });
  return (0, a.jsx)(s.FormItem, {
    title: T,
    required: !0,
    children: (0, a.jsx)(s.Select, {
      placeholder: "gaming",
      options: _,
      select: c,
      serialize: f,
      isSelected: e => null != E && f(e) === f(E)
    })
  })
}