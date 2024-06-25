n.d(t, {
  Z: function() {
    return g
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(481060),
  r = n(92114),
  o = n(9156),
  c = n(502568),
  u = n(585483),
  d = n(621600),
  h = n(110255),
  m = n(981631),
  E = n(689938),
  p = n(777794);

function g(e) {
  let {
    channel: t
  } = e, n = (0, a.useRedesignIconContext)().enabled, [g, f] = (0, s.Wu)([o.ZP], () => [o.ZP.isChannelMuted(t.getGuildId(), t.id), o.ZP.resolvedMessageNotifications(t)], [t]), [C, _] = i.useState(!1);
  i.useEffect(() => {
    let e = () => _(!0);
    return u.S.subscribe(m.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
      u.S.unsubscribe(m.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
    }
  }, []);
  let I = e => {
      e.shiftKey ? r.Z.updateChannelOverrideSettings(t.guild_id, t.id, {
        muted: !g
      }, d.UE.muted(!g)) : _(e => !e)
    },
    x = E.Z.Messages.NOTIFICATION_SETTINGS;
  return (0, l.jsx)(a.Popout, {
    shouldShow: C,
    animation: a.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    onRequestClose: () => _(!1),
    renderPopout: e => (0, l.jsx)(h.Z, {
      ...e,
      channel: t,
      navId: "channel-context",
      label: E.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL
    }),
    children: (e, t) => {
      let {
        isShown: i
      } = t;
      return (0, l.jsx)(c.ZP.Icon, {
        ...e,
        onClick: I,
        tooltip: i ? null : x,
        icon: g || f !== m.bL.ALL_MESSAGES ? a.BellSlashIcon : a.BellIcon,
        foreground: g && !n ? p.strikethrough : null,
        "aria-label": x,
        selected: i
      })
    }
  })
}