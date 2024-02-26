"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var l = n("37983");
n("884691");
var a = n("446674"),
  s = n("77078"),
  i = n("244201"),
  r = n("817963"),
  u = n("124824"),
  o = n("981913"),
  d = n("42203"),
  c = n("293137"),
  f = n("381546"),
  h = n("374021"),
  m = n("322224"),
  p = n("649275"),
  E = n("534222"),
  S = n("782340"),
  g = n("864820");

function C(e) {
  let {
    channelId: t,
    onClick: n
  } = e, C = (0, i.useAppContext)(), _ = (0, E.useActiveEvent)(t), I = (0, a.useStateFromStores)([d.default], () => d.default.getChannel(t), [t]), {
    canManageGuildEvent: T
  } = (0, r.useManageResourcePermissions)(I), v = T(_);
  if (null == _) return null;
  let x = () => {
      if (null != I && (0, p.default)(I)) {
        (0, h.openEndEventModal)(I, C);
        return
      }
      n()
    },
    N = () => {
      m.default.endEvent(_.id, _.guild_id)
    };
  return v ? (0, l.jsx)(s.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, l.jsx)(u.default, {
        children: (0, l.jsx)(s.Menu, {
          navId: "exit-options",
          onSelect: () => {},
          "aria-label": S.default.Messages.DISCONNECT_MENU,
          onClose: t,
          children: (0, l.jsx)(s.MenuItem, {
            id: "end-voice-event",
            color: "danger",
            action: N,
            label: S.default.Messages.END_EVENT,
            icon: f.default
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
      return (0, l.jsx)(o.CenterControlButton, {
        label: S.default.Messages.DISCONNECT_SELF,
        color: "red",
        iconComponent: c.default,
        onClick: x,
        onPopoutClick: t,
        className: g.buttonSpacing
      })
    }
  }) : (0, l.jsx)(o.CenterControlButton, {
    className: g.buttonSpacing,
    label: S.default.Messages.DISCONNECT_SELF,
    color: "red",
    iconComponent: c.default,
    onClick: n
  })
}