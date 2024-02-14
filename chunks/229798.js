"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("249654"),
  r = l("77078"),
  i = l("686904"),
  d = l("322224"),
  u = l("397680"),
  o = l("822516"),
  c = l("953143"),
  E = l("782340"),
  _ = l("558421");

function h(e) {
  let {
    guildEvent: t,
    recurrenceId: l,
    transitionState: h,
    onClose: g
  } = e, x = (0, u.default)(l, t.id), D = (0, o.getBaseScheduleForRecurrence)(l, t), f = (0, o.getScheduleForRecurrenceWithException)(D, x), [A, T] = a.useState(f), [m, {
    loading: N,
    error: I
  }] = (0, i.default)(async () => {
    let e = (0, o.areDatesIdentical)(D.startDate, A.startDate) ? null : A.startDate,
      n = (0, o.areDatesIdentical)(D.endDate, A.endDate) ? null : A.endDate;
    if (null != x)(0, o.areSchedulesIdentical)(A, D) ? await d.default.deleteGuildEventException(t.guild_id, t.id, x.event_exception_id) : await d.default.updateGuildEventException({
      scheduled_start_time: null == e ? void 0 : e.toISOString(),
      scheduled_end_time: null == n ? void 0 : n.toISOString(),
      is_canceled: x.is_canceled
    }, t.guild_id, t.id, l);
    else {
      let a = s.default.extractTimestamp(l);
      await d.default.createGuildEventException({
        original_scheduled_start_time: new Date(a).toISOString(),
        scheduled_start_time: null == e ? void 0 : e.toISOString(),
        scheduled_end_time: null == n ? void 0 : n.toISOString(),
        is_canceled: !1
      }, t.guild_id, t.id)
    }
    null == I && g()
  });
  return (0, n.jsxs)(r.ModalRoot, {
    transitionState: h,
    children: [(0, n.jsx)(r.ModalHeader, {
      children: (0, n.jsx)(r.Heading, {
        variant: "heading-lg/semibold",
        children: E.default.Messages.EDIT_THIS_EVENT
      })
    }), (0, n.jsxs)(r.ModalContent, {
      className: _.content,
      children: [(0, n.jsx)(c.default, {
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: l
          } = e;
          null != t && null != l && l.isBefore(t) && (l = t.clone().add(1, "hour")), T({
            startDate: t,
            endDate: l
          })
        },
        schedule: A,
        showEndDate: null != A.endDate,
        requireEndDate: null != A.endDate,
        guildId: t.guild_id,
        recurrenceRule: t.recurrence_rule
      }), null != I ? (0, n.jsx)(r.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: _.warning,
        children: I.getAnyErrorMessage()
      }) : null]
    }), (0, n.jsxs)(r.ModalFooter, {
      className: _.footer,
      children: [(0, n.jsx)(r.Button, {
        color: r.Button.Colors.BRAND,
        onClick: m,
        className: _.button,
        submitting: N,
        disabled: (0, o.areSchedulesIdentical)(A, f),
        children: E.default.Messages.SAVE_EVENT
      }), (0, n.jsx)(r.Button, {
        color: r.Button.Colors.PRIMARY,
        onClick: g,
        children: E.default.Messages.CANCEL
      })]
    })]
  })
}