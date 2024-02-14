"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
});
var l = n("37983");
n("884691");
var a = n("866227"),
  r = n.n(a),
  s = n("77078"),
  i = n("812204"),
  u = n("685665"),
  o = n("381546"),
  c = n("351825"),
  d = n("651072"),
  f = n("822516"),
  E = n("844808"),
  h = n("49111"),
  g = n("782340"),
  _ = n("785548");

function v(e) {
  let {
    className: t,
    guildId: n,
    onScheduleChange: a,
    onRecurrenceChange: v,
    onTimeChange: S,
    timeSelected: R = !0,
    schedule: m,
    recurrenceRule: N,
    showEndDate: T = !1,
    requireEndDate: C = !1,
    disableStartDateTime: p = !1
  } = e, {
    analyticsLocations: I
  } = (0, u.default)(i.default.EVENT_SETTINGS), {
    showRecurringEventsDesktop: x
  } = d.default.useExperiment({
    guildId: null != n ? n : h.EMPTY_STRING_GUILD_ID,
    location: I[0]
  }, {
    autoTrackExposure: !1
  });
  if (null == m) return null;
  let L = null,
    A = m.startDate,
    y = r(),
    D = r().add(f.MAX_DAYS_AHEAD_AN_EVENT_CAN_START, "days"),
    M = r().add(f.MAX_DAYS_AHEAD_AN_EVENT_CAN_END, "days");
  null != N && (D.add(f.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"), M.add(f.MAX_YEARS_AHEAD_RECURRING_EVENT, "years"));
  let j = e => {
    a({
      ...m,
      endDate: e
    })
  };
  return null != A && d.default.trackExposure({
    guildId: null != n ? n : h.EMPTY_STRING_GUILD_ID,
    location: I[0]
  }), T && (L = null != m.endDate || C ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: _.doubleInput,
      children: [(0, l.jsx)(s.FormItem, {
        title: g.default.Messages.CREATE_EVENT_END_DATE_LABEL,
        required: C,
        children: (0, l.jsx)(s.DateInput, {
          value: m.endDate,
          onSelect: j,
          minDate: m.startDate,
          maxDate: M
        })
      }), (0, l.jsx)(s.FormItem, {
        title: g.default.Messages.CREATE_EVENT_END_TIME_LABEL,
        required: C,
        children: (0, l.jsx)(s.TimeInput, {
          value: m.endDate,
          onChange: j
        })
      })]
    }), C ? null : (0, l.jsx)(s.Button, {
      onClick: () => {
        j(void 0)
      },
      look: s.Button.Looks.BLANK,
      size: s.Button.Sizes.MIN,
      children: (0, l.jsxs)("div", {
        className: _.link,
        children: [(0, l.jsx)(o.default, {
          width: 17,
          height: 17,
          className: _.removeIcon
        }), (0, l.jsx)(s.Text, {
          variant: "text-sm/normal",
          children: g.default.Messages.CREATE_EVENT_REMOVE_END_TIME_LABEL
        })]
      })
    })]
  }) : (0, l.jsx)(s.Button, {
    look: s.Button.Looks.BLANK,
    size: s.Button.Sizes.MIN,
    onClick: () => {
      j(r(m.startDate).add(1, "hour"))
    },
    children: (0, l.jsxs)("div", {
      className: _.link,
      children: [(0, l.jsx)(c.default, {
        width: 20,
        height: 20,
        className: _.addIcon
      }), (0, l.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: g.default.Messages.CREATE_EVENT_ADD_END_TIME_LABEL
      })]
    })
  })), (0, l.jsxs)("div", {
    className: t,
    children: [(0, l.jsxs)("div", {
      className: _.doubleInput,
      children: [(0, l.jsx)(s.FormItem, {
        title: g.default.Messages.CREATE_EVENT_START_DATE_LABEL,
        required: !0,
        children: (0, l.jsx)(s.DateInput, {
          value: m.startDate,
          onSelect: e => {
            a({
              ...m,
              startDate: e
            })
          },
          minDate: y,
          maxDate: D,
          disabled: p
        })
      }), (0, l.jsx)(s.FormItem, {
        title: g.default.Messages.CREATE_EVENT_START_TIME_LABEL,
        required: !0,
        children: (0, l.jsx)(s.TimeInput, {
          value: m.startDate,
          onChange: e => {
            e.isValid() && (null == S || S(!0), a({
              ...m,
              startDate: e
            }))
          },
          hideValue: !R,
          disabled: p
        })
      })]
    }), L, x && null != A && null != v && (0, l.jsx)(E.default, {
      onRecurrenceChange: v,
      startDate: A,
      recurrenceRule: N
    })]
  })
}