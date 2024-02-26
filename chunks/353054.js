"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("519705"),
  u = n("282109"),
  o = n("660279"),
  d = n("998650"),
  c = n("664336"),
  f = n("659500"),
  h = n("34676"),
  m = n("957825"),
  p = n("49111"),
  E = n("782340"),
  S = n("752024");

function g(e) {
  let {
    channel: t
  } = e, n = (0, i.useRedesignIconContext)().enabled, [g, C] = (0, s.useStateFromStoresArray)([u.default], () => [u.default.isChannelMuted(t.getGuildId(), t.id), u.default.resolvedMessageNotifications(t)], [t]), [_, I] = a.useState(!1);
  a.useEffect(() => {
    let e = () => I(!0);
    return f.ComponentDispatch.subscribe(p.ComponentActions.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
      f.ComponentDispatch.unsubscribe(p.ComponentActions.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
    }
  }, []);
  let T = e => {
      e.shiftKey ? r.default.updateChannelOverrideSettings(t.guild_id, t.id, {
        muted: !g
      }, h.NotificationLabel.muted(!g)) : I(e => !e)
    },
    v = E.default.Messages.NOTIFICATION_SETTINGS;
  return (0, l.jsx)(i.Popout, {
    shouldShow: _,
    animation: i.Popout.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: !1,
    onRequestClose: () => I(!1),
    renderPopout: e => (0, l.jsx)(m.default, {
      ...e,
      channel: t,
      navId: "channel-context",
      label: E.default.Messages.CHANNEL_ACTIONS_MENU_LABEL
    }),
    children: (e, t) => {
      let {
        isShown: a
      } = t;
      return (0, l.jsx)(c.default.Icon, {
        ...e,
        onClick: T,
        tooltip: a ? null : v,
        icon: g || C !== p.UserNotificationSettings.ALL_MESSAGES ? d.default : o.default,
        foreground: g && !n ? S.strikethrough : null,
        "aria-label": v,
        selected: a
      })
    }
  })
}