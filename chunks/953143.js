"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var n = s("37983");
s("884691");
var a = s("866227"),
  r = s.n(a),
  l = s("77078"),
  i = s("812204"),
  u = s("685665"),
  o = s("381546"),
  d = s("351825"),
  c = s("651072"),
  E = s("822516"),
  _ = s("844808"),
  f = s("782340"),
  R = s("234865");

function h(e) {
  let {
    className: t,
    guildId: s,
    onScheduleChange: a,
    onRecurrenceChange: h,
    onTimeChange: T,
    timeSelected: N = !0,
    schedule: A,
    recurrenceRule: v,
    showEndDate: p = !1,
    requireEndDate: g = !1,
    disableStartDateTime: I = !1
  } = e, {
    analyticsLocations: m
  } = (0, u.default)(i.default.EVENT_SETTINGS), {
    showRecurringEventsDesktop: x
  } = c.default.useExperiment({
    guildId: null != s ? s : "",
    location: m[0]
  }, {
    autoTrackExposure: !1
  });
  if (null == A) return null;
  let D = null,
    O = A.startDate,
    S = r(),
    C = r().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
    M = r().add(E.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  null != v && (C.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"), M.add(E.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
  let L = e => {
    a({
      ...A,
      endDate: e
    })
  };
  return null != O && c.default.trackExposure({
    guildId: null != s ? s : "",
    location: m[0]
  }), p && (D = null != A.endDate || g ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: R.doubleInput,
      children: [(0, n.jsx)(l.FormItem, {
        title: f.default.Messages.CREATE_EVENT_END_DATE_LABEL,
        required: g,
        children: (0, n.jsx)(l.DateInput, {
          value: A.endDate,
          onSelect: L,
          minDate: A.startDate,
          maxDate: M
        })
      }), (0, n.jsx)(l.FormItem, {
        title: f.default.Messages.CREATE_EVENT_END_TIME_LABEL,
        required: g,
        children: (0, n.jsx)(l.TimeInput, {
          value: A.endDate,
          onChange: L
        })
      })]
    }), g ? null : (0, n.jsx)(l.Button, {
      onClick: () => {
        L(void 0)
      },
      look: l.Button.Looks.BLANK,
      size: l.Button.Sizes.MIN,
      children: (0, n.jsxs)("div", {
        className: R.link,
        children: [(0, n.jsx)(o.default, {
          width: 17,
          height: 17,
          className: R.removeIcon
        }), (0, n.jsx)(l.Text, {
          variant: "text-sm/normal",
          children: f.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
        })]
      })
    })]
  }) : (0, n.jsx)(l.Button, {
    look: l.Button.Looks.BLANK,
    size: l.Button.Sizes.MIN,
    onClick: () => {
      L(r(A.startDate).add(1, "hour"))
    },
    children: (0, n.jsxs)("div", {
      className: R.link,
      children: [(0, n.jsx)(d.default, {
        width: 20,
        height: 20,
        className: R.addIcon
      }), (0, n.jsx)(l.Text, {
        variant: "text-sm/normal",
        children: f.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
      })]
    })
  })), (0, n.jsxs)("div", {
    className: t,
    children: [(0, n.jsxs)("div", {
      className: R.doubleInput,
      children: [(0, n.jsx)(l.FormItem, {
        title: f.default.Messages.CREATE_EVENT_START_DATE_LABEL,
        required: !0,
        children: (0, n.jsx)(l.DateInput, {
          value: A.startDate,
          onSelect: e => {
            a({
              ...A,
              startDate: e
            })
          },
          minDate: S,
          maxDate: C,
          disabled: I
        })
      }), (0, n.jsx)(l.FormItem, {
        title: f.default.Messages.CREATE_EVENT_START_TIME_LABEL,
        required: !0,
        children: (0, n.jsx)(l.TimeInput, {
          value: A.startDate,
          onChange: e => {
            e.isValid() && (null == T || T(!0), a({
              ...A,
              startDate: e
            }))
          },
          hideValue: !N,
          disabled: I
        })
      })]
    }), D, x && null != O && null != h && (0, n.jsx)(_.default, {
      onRecurrenceChange: h,
      startDate: O,
      recurrenceRule: v
    })]
  })
}