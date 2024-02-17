"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var l = n("37983"),
  r = n("884691"),
  a = n("77078"),
  s = n("686904"),
  u = n("27679"),
  i = n("397680"),
  d = n("822516"),
  o = n("953143"),
  c = n("782340"),
  E = n("558421");

function _(e) {
  let {
    guildEvent: t,
    recurrenceId: n,
    transitionState: _,
    onClose: h
  } = e, g = (0, i.default)(n, t.id), f = (0, d.getBaseScheduleForRecurrence)(n, t), x = (0, d.getScheduleForRecurrenceWithException)(f, g), [D, A] = r.useState(x), [T, {
    loading: m,
    error: N
  }] = (0, s.default)(() => {
    let e = (0, u.default)(t, n, D, g);
    return null == N && h(), e
  });
  return (0, l.jsxs)(a.ModalRoot, {
    transitionState: _,
    children: [(0, l.jsx)(a.ModalHeader, {
      children: (0, l.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        children: c.default.Messages.EDIT_THIS_EVENT
      })
    }), (0, l.jsxs)(a.ModalContent, {
      className: E.content,
      children: [(0, l.jsx)(o.default, {
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: n
          } = e;
          null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, "hour")), A({
            startDate: t,
            endDate: n
          })
        },
        schedule: D,
        showEndDate: null != D.endDate,
        requireEndDate: null != D.endDate,
        guildId: t.guild_id,
        recurrenceRule: t.recurrence_rule
      }), null != N ? (0, l.jsx)(a.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: E.warning,
        children: N.getAnyErrorMessage()
      }) : null]
    }), (0, l.jsxs)(a.ModalFooter, {
      className: E.footer,
      children: [(0, l.jsx)(a.Button, {
        color: a.Button.Colors.BRAND,
        onClick: T,
        className: E.button,
        submitting: m,
        disabled: (0, d.areSchedulesIdentical)(D, x),
        children: c.default.Messages.SAVE_EVENT
      }), (0, l.jsx)(a.Button, {
        color: a.Button.Colors.PRIMARY,
        onClick: h,
        children: c.default.Messages.CANCEL
      })]
    })]
  })
}