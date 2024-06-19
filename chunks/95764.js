n.d(t, {
  Z: function() {
    return f
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(40851),
  r = n(889161),
  o = n(390322),
  c = n(871499),
  u = n(592125),
  d = n(15274),
  h = n(482241),
  m = n(389303),
  p = n(554747),
  E = n(689938),
  g = n(791671);

function f(e) {
  let {
    channelId: t,
    onClick: n
  } = e, f = (0, a.bp)(), C = (0, p.qY)(t), _ = (0, i.e7)([u.Z], () => u.Z.getChannel(t), [t]), {
    canManageGuildEvent: I
  } = (0, r.XJ)(_), x = I(C);
  if (null == C) return null;
  let T = () => {
      if (null != _ && (0, m.Z)(_)) {
        (0, d.lC)(_, f);
        return
      }
      n()
    },
    N = () => {
      h.Z.endEvent(C.id, C.guild_id)
    };
  return x ? (0, l.jsx)(s.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, l.jsx)(o.Z, {
        children: (0, l.jsx)(s.Menu, {
          navId: "exit-options",
          onSelect: () => {},
          "aria-label": E.Z.Messages.DISCONNECT_MENU,
          onClose: t,
          children: (0, l.jsx)(s.MenuItem, {
            id: "end-voice-event",
            color: "danger",
            action: N,
            label: E.Z.Messages.END_EVENT,
            icon: s.CircleXIcon
          })
        })
      })
    },
    align: "center",
    position: "top",
    animation: s.Popout.Animation.FADE,
    children: e => {
      let {
        onClick: t
      } = e;
      return (0, l.jsx)(c.d, {
        label: E.Z.Messages.DISCONNECT_SELF,
        color: "red",
        iconComponent: s.PhoneHangUpIcon,
        onClick: T,
        onPopoutClick: t,
        className: g.buttonSpacing
      })
    }
  }) : (0, l.jsx)(c.d, {
    className: g.buttonSpacing,
    label: E.Z.Messages.DISCONNECT_SELF,
    color: "red",
    iconComponent: s.PhoneHangUpIcon,
    onClick: n
  })
}