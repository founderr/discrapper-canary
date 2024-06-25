n.d(t, {
  Z: function() {
    return E
  }
}), n(47120);
var l = n(735250),
  i = n(470079),
  s = n(481060),
  a = n(502568),
  r = n(585483),
  o = n(723170),
  c = n(64247),
  u = n(124368),
  d = n(981631),
  h = n(689938),
  m = n(502890);

function E(e) {
  let {
    channel: t
  } = e, n = (0, o.B)(t), [E, p] = i.useState(!1), g = (0, s.useRedesignIconContext)().enabled;
  i.useEffect(() => {
    let e = () => p(!0);
    return r.S.subscribe(d.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
      r.S.unsubscribe(d.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
    }
  }, []);
  let f = h.Z.Messages.NOTIFICATION_SETTINGS;
  return (0, l.jsx)(s.Popout, {
    shouldShow: E,
    animation: s.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    onRequestClose: () => p(!1),
    renderPopout: e => (0, l.jsx)(c.Z, {
      ...e,
      channel: t,
      navId: "thread-context",
      label: h.Z.Messages.THREAD_ACTIONS_MENU_LABEL
    }),
    children: (e, t) => {
      let {
        isShown: i
      } = t;
      return (0, l.jsx)(a.ZP.Icon, {
        ...e,
        onClick: () => p(e => !e),
        tooltip: i ? null : f,
        icon: n === u.iN.NO_MESSAGES ? s.BellSlashIcon : s.BellIcon,
        foreground: n !== u.iN.NO_MESSAGES || g ? null : m.strikethrough,
        "aria-label": f,
        selected: i
      })
    }
  })
}