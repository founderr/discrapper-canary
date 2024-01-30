"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
}), s("222007"), s("424973");
var n = s("37983"),
  a = s("884691"),
  r = s("77078"),
  l = s("20606"),
  i = s("956089"),
  u = s("822516"),
  o = s("757767"),
  d = s("782340"),
  c = s("572721");
let E = new Set([0, 6]);

function _(e) {
  let {
    startDate: t,
    recurrenceRule: s,
    onRecurrenceChange: _
  } = e, f = a.useMemo(() => (0, u.recurrenceRuleToOption)(t, s), [s, t]), R = function(e) {
    let t = e.toDate(),
      s = Math.ceil(t.getDate() / 7),
      n = t.toLocaleString(d.default.getLocale(), {
        weekday: "long"
      }),
      a = [{
        value: o.RecurrenceOptions.NONE,
        label: d.default.Messages.CREATE_EVENT_RECUR_NONE
      }, {
        value: o.RecurrenceOptions.WEEKLY,
        label: d.default.Messages.CREATE_EVENT_RECUR_WEEKLY.format({
          weekday: n
        })
      }, {
        value: o.RecurrenceOptions.BIWEEKLY,
        label: d.default.Messages.CREATE_EVENT_RECUR_BIWEEKLY.format({
          weekday: n
        })
      }, {
        value: o.RecurrenceOptions.MONTHLY,
        label: d.default.Messages.CREATE_EVENT_RECUR_MONTHLY.format({
          nth: s,
          weekday: n
        })
      }, {
        value: o.RecurrenceOptions.YEARLY,
        label: d.default.Messages.CREATE_EVENT_RECUR_YEARLY.format({
          date: t.toLocaleString(d.default.getLocale(), {
            month: "short",
            day: "2-digit"
          })
        })
      }];
    return !E.has(t.getDay()) && a.push({
      value: o.RecurrenceOptions.WEEKDAY_ONLY,
      label: d.default.Messages.CREATE_EVENT_RECUR_WEEKDAYS
    }), a
  }(t), h = e => e.toString(), T = (0, n.jsxs)("div", {
    className: c.title,
    children: [d.default.Messages.CREATE_EVENT_RECUR_LABEL, (0, n.jsx)(i.TextBadge, {
      text: d.default.Messages.NEW,
      color: l.default.REDESIGN_BUTTON_PRIMARY_BACKGROUND
    })]
  });
  return (0, n.jsx)(r.FormItem, {
    title: T,
    required: !0,
    children: (0, n.jsx)(r.Select, {
      placeholder: "gaming",
      options: R,
      select: _,
      serialize: h,
      isSelected: e => null != f && h(e) === h(f)
    })
  })
}