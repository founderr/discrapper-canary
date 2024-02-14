"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("77078"),
  i = n("660279"),
  r = n("998650"),
  o = n("664336"),
  u = n("659500"),
  d = n("414833"),
  c = n("547772"),
  f = n("648564"),
  h = n("49111"),
  m = n("782340"),
  p = n("447370");

function E(e) {
  let {
    channel: t
  } = e, n = (0, d.useThreadNotificationSetting)(t), [E, S] = a.useState(!1), g = (0, s.useRedesignIconContext)().enabled;
  a.useEffect(() => {
    let e = () => S(!0);
    return u.ComponentDispatch.subscribe(h.ComponentActions.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
      u.ComponentDispatch.unsubscribe(h.ComponentActions.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
    }
  }, []);
  let C = m.default.Messages.NOTIFICATION_SETTINGS;
  return (0, l.jsx)(s.Popout, {
    shouldShow: E,
    animation: s.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    onRequestClose: () => S(!1),
    renderPopout: e => (0, l.jsx)(c.default, {
      ...e,
      channel: t,
      navId: "thread-context",
      label: m.default.Messages.THREAD_ACTIONS_MENU_LABEL
    }),
    children: (e, t) => {
      let {
        isShown: a
      } = t;
      return (0, l.jsx)(o.default.Icon, {
        ...e,
        onClick: () => S(e => !e),
        tooltip: a ? null : C,
        icon: n === f.ThreadMemberFlags.NO_MESSAGES ? r.default : i.default,
        foreground: n !== f.ThreadMemberFlags.NO_MESSAGES || g ? null : p.strikethrough,
        "aria-label": C,
        selected: a
      })
    }
  })
}