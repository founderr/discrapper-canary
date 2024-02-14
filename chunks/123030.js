"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
});
var l = n("37983");
n("884691");
var s = n("414456"),
  u = n.n(s),
  i = n("446674"),
  a = n("77078"),
  o = n("272030"),
  r = n("42203"),
  d = n("305961"),
  c = n("433487"),
  E = n("398604"),
  f = n("397680"),
  h = n("822516"),
  C = n("393745"),
  N = n("745049"),
  v = n("782340"),
  g = n("964385");

function S(e) {
  let {
    recurrenceId: t,
    originalScheduledStartTime: s,
    guildEventId: S,
    onClick: I,
    isActive: L
  } = e, _ = (0, i.useStateFromStores)([E.default], () => E.default.getGuildScheduledEvent(S)), m = (0, f.default)(t, null == _ ? void 0 : _.id), T = (0, i.useStateFromStores)([d.default], () => d.default.getGuild(null == _ ? void 0 : _.guild_id)), x = (0, i.useStateFromStores)([r.default], () => r.default.getChannel(null == _ ? void 0 : _.channel_id));
  if (null == _) return null;
  let {
    is_canceled: R = !1
  } = null != m ? m : {}, p = (null == m ? void 0 : m.scheduled_start_time) != null ? new Date(null == m ? void 0 : m.scheduled_start_time) : s, M = (0, h.getNextRecurrenceIdInEvent)(_), B = R ? N.GuildScheduledEventStatus.CANCELED : N.GuildScheduledEventStatus.SCHEDULED;
  M === t && (B = _.status);
  let G = e => {
    e.stopPropagation(), null != T && (0, o.openContextMenuLazy)(e, async () => {
      let {
        default: e
      } = await n.el("110374").then(n.bind(n, "110374"));
      return n => (0, l.jsx)(e, {
        guildEventId: _.id,
        recurrenceId: t,
        channel: x,
        guild: T,
        isRecurrenceItem: !0,
        ...n
      })
    })
  };
  return (0, l.jsxs)(a.ClickableContainer, {
    className: u(g.container, {
      [g.canceled]: R,
      [g.clickable]: null != I,
      [g.active]: L
    }),
    onClick: e => {
      e.stopPropagation(), !R && (null == I || I(t))
    },
    onContextMenu: G,
    "aria-label": "",
    children: [(0, l.jsx)(C.GuildEventTimeStatus, {
      startTime: p.toISOString(),
      status: B,
      eventType: _.entity_type,
      guildEventId: _.id,
      recurrenceId: t,
      className: g.timeStatus
    }), R && (0, l.jsx)(a.Text, {
      variant: "text-sm/semibold",
      color: "text-danger",
      className: g.canceledStatus,
      children: v.default.Messages.EVENT_CANCELED
    }), (0, l.jsx)(a.Tooltip, {
      text: v.default.Messages.MORE,
      position: "top",
      "aria-label": v.default.Messages.EDIT,
      children: e => (0, l.jsx)(a.Clickable, {
        ...e,
        onClick: G,
        className: g.iconButton,
        children: (0, l.jsx)(c.default, {
          width: 20,
          height: 20,
          className: g.icon
        })
      })
    })]
  })
}