n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n(47120);
var l = n(735250),
  s = n(470079),
  i = n(481060),
  r = n(981888),
  a = n(157689),
  d = n(894017),
  u = n(854698),
  o = n(440371),
  c = n(689938),
  E = n(719611);

function _(e) {
  let {
    guildEvent: t,
    recurrenceId: n,
    transitionState: _,
    onClose: h
  } = e, x = (0, d.Z)(n, t.id), m = (0, u.iA)(n, t), g = (0, u.x6)(m, x), [D, T] = s.useState(g), [j, {
    loading: N,
    error: I
  }] = (0, r.Z)(() => {
    let e = (0, a.Z)(t, n, D, x);
    return null == I && h(), e
  });
  return (0, l.jsxs)(i.ModalRoot, {
    transitionState: _,
    children: [(0, l.jsx)(i.ModalHeader, {
      children: (0, l.jsx)(i.Heading, {
        variant: "heading-lg/semibold",
        children: c.Z.Messages.EDIT_THIS_EVENT
      })
    }), (0, l.jsxs)(i.ModalContent, {
      className: E.content,
      children: [(0, l.jsx)(o.Z, {
        onScheduleChange: e => {
          let {
            startDate: t,
            endDate: n
          } = e;
          null != t && null != n && n.isBefore(t) && (n = t.clone().add(1, "hour")), T({
            startDate: t,
            endDate: n
          })
        },
        schedule: D,
        showEndDate: null != D.endDate,
        requireEndDate: null != D.endDate,
        guildId: t.guild_id,
        recurrenceRule: t.recurrence_rule
      }), null != I ? (0, l.jsx)(i.Text, {
        color: "text-danger",
        variant: "text-xs/normal",
        className: E.warning,
        children: I.getAnyErrorMessage()
      }) : null]
    }), (0, l.jsxs)(i.ModalFooter, {
      className: E.footer,
      children: [(0, l.jsx)(i.Button, {
        color: i.Button.Colors.BRAND,
        onClick: j,
        className: E.button,
        submitting: N,
        disabled: (0, u.Y4)(D, g),
        children: c.Z.Messages.SAVE_EVENT
      }), (0, l.jsx)(i.Button, {
        color: i.Button.Colors.PRIMARY,
        onClick: h,
        children: c.Z.Messages.CANCEL
      })]
    })]
  })
}