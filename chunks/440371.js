"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
  }
});
var a = l("735250");
l("470079");
var n = l("913527"),
  s = l.n(n),
  r = l("481060"),
  i = l("696202"),
  d = l("151785"),
  u = l("854698"),
  o = l("401876"),
  c = l("689938"),
  E = l("165780");

function _(e) {
  let {
    className: t,
    onScheduleChange: l,
    onRecurrenceChange: n,
    onTimeChange: _,
    timeSelected: f = !0,
    schedule: T,
    recurrenceRule: h,
    showEndDate: I = !1,
    requireEndDate: N = !1,
    disableStartDateTime: m = !1
  } = e;
  if (null == T) return null;
  let x = null,
    v = T.startDate,
    g = s()(),
    S = s()().add(u.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
    C = s()().add(u.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  null != h && (S.add(u.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"), C.add(u.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
  let A = e => {
    l({
      ...T,
      endDate: e
    })
  };
  return I && (x = null != T.endDate || N ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: E.doubleInput,
      children: [(0, a.jsx)(r.FormItem, {
        title: c.default.Messages.CREATE_EVENT_END_DATE_LABEL,
        required: N,
        children: (0, a.jsx)(r.DateInput, {
          value: T.endDate,
          onSelect: A,
          minDate: T.startDate,
          maxDate: C
        })
      }), (0, a.jsx)(r.FormItem, {
        title: c.default.Messages.CREATE_EVENT_END_TIME_LABEL,
        required: N,
        children: (0, a.jsx)(r.TimeInput, {
          value: T.endDate,
          onChange: A
        })
      })]
    }), N ? null : (0, a.jsx)(r.Button, {
      onClick: () => {
        A(void 0)
      },
      look: r.Button.Looks.BLANK,
      size: r.Button.Sizes.MIN,
      children: (0, a.jsxs)("div", {
        className: E.link,
        children: [(0, a.jsx)(i.default, {
          width: 17,
          height: 17,
          className: E.removeIcon
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          children: c.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
        })]
      })
    })]
  }) : (0, a.jsx)(r.Button, {
    look: r.Button.Looks.BLANK,
    size: r.Button.Sizes.MIN,
    onClick: () => {
      A(s()(T.startDate).add(1, "hour"))
    },
    children: (0, a.jsxs)("div", {
      className: E.link,
      children: [(0, a.jsx)(d.default, {
        width: 20,
        height: 20,
        className: E.addIcon
      }), (0, a.jsx)(r.Text, {
        variant: "text-sm/normal",
        children: c.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
      })]
    })
  })), (0, a.jsxs)("div", {
    className: t,
    children: [(0, a.jsxs)("div", {
      className: E.doubleInput,
      children: [(0, a.jsx)(r.FormItem, {
        title: c.default.Messages.CREATE_EVENT_START_DATE_LABEL,
        required: !0,
        children: (0, a.jsx)(r.DateInput, {
          value: T.startDate,
          onSelect: e => {
            l({
              ...T,
              startDate: e
            })
          },
          minDate: g,
          maxDate: S,
          disabled: m
        })
      }), (0, a.jsx)(r.FormItem, {
        title: c.default.Messages.CREATE_EVENT_START_TIME_LABEL,
        required: !0,
        children: (0, a.jsx)(r.TimeInput, {
          value: T.startDate,
          onChange: e => {
            e.isValid() && (null == _ || _(!0), l({
              ...T,
              startDate: e
            }))
          },
          hideValue: !f,
          disabled: m
        })
      })]
    }), x, null != v && null != n && (0, a.jsx)(o.default, {
      onRecurrenceChange: n,
      startDate: v,
      recurrenceRule: h
    })]
  })
}