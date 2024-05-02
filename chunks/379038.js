"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
  }
}), l("47120");
var n = l("735250"),
  a = l("470079"),
  s = l("481060"),
  r = l("981888"),
  d = l("157689"),
  u = l("894017"),
  i = l("854698"),
  c = l("440371"),
  o = l("689938"),
  E = l("314957");

function _(e) {
  let {
    guildEvent: t,
    recurrenceId: l,
    transitionState: _,
    onClose: h
  } = e, x = (0, u.default)(l, t.id), A = (0, i.getBaseScheduleForRecurrence)(l, t), f = (0, i.getScheduleForRecurrenceWithException)(A, x), [m, D] = a.useState(f), [g, {
    loading: N,
    error: T
  }] = (0, r.default)(() => {
    let e = (0, d.default)(t, l, m, x);
    return null == T && h(), e
  });
  return (0, n.jsxs)(s.ModalRoot, {
    transitionState: _,
    children: [(0, n.jsx)(s.ModalHeader, {
      children: (0, n.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        children: o.default.Messages.EDIT_THIS_EVENT
      })
    }), (0, n.jsxs)(s.ModalContent, {
      className: E.content,
      children: [(0, n.jsx)(c.default, {
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: l
          } = e;
          null != t && null != l && l.isBefore(t) && (l = t.clone().add(1, "hour")), D({
            startDate: t,
            endDate: l
          })
        },
        schedule: m,
        showEndDate: null != m.endDate,
        requireEndDate: null != m.endDate,
        guildId: t.guild_id,
        recurrenceRule: t.recurrence_rule
      }), null != T ? (0, n.jsx)(s.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: E.warning,
        children: T.getAnyErrorMessage()
      }) : null]
    }), (0, n.jsxs)(s.ModalFooter, {
      className: E.footer,
      children: [(0, n.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        onClick: g,
        className: E.button,
        submitting: N,
        disabled: (0, i.areSchedulesIdentical)(m, f),
        children: o.default.Messages.SAVE_EVENT
      }), (0, n.jsx)(s.Button, {
        color: s.Button.Colors.PRIMARY,
        onClick: h,
        children: o.default.Messages.CANCEL
      })]
    })]
  })
}