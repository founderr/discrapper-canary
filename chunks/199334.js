"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("446674"),
  u = n("77078"),
  o = n("207273"),
  d = n("367376"),
  c = n("957255"),
  f = n("98292"),
  h = n("832132"),
  C = n("599110"),
  p = n("49111"),
  m = n("782340"),
  E = n("781691"),
  g = n("632215");

function I(e) {
  let {
    channel: t,
    connected: n,
    hovered: s,
    subtitle: I,
    onClick: _,
    enableHangStatus: S,
    allowChannelTopic: N
  } = e, T = (0, r.useStateFromStores)([o.default], () => o.default.getChannelStatus(t)), A = null != T && T.length > 0, L = (0, r.useStateFromStores)([c.default], () => (!S || !!N) && c.default.can(p.Permissions.SET_VOICE_CHANNEL_STATUS, t)), v = null != I && I.length > 0;
  a.useEffect(() => {
    A && C.default.track(p.AnalyticEvents.VOICE_CHANNEL_TOPIC_VIEWED, {
      guild_id: t.guild_id,
      channel_id: t.id
    })
  }, [t.id, A, t.guild_id]);
  let x = (0, u.useRedesignIconContext)().enabled ? 12 : 14;
  if (null == t.guild_id) return null;
  let R = i(E.statusDiv, n && L ? E.hoverable : null);
  if (A) return (0, l.jsx)(u.Clickable, {
    className: R,
    onClick: L ? _ : void 0,
    children: (0, l.jsx)(u.Text, {
      variant: "text-xs/medium",
      className: i(E.statusText, g.markup),
      children: (0, l.jsx)(f.default, {
        children: d.default.parseVoiceChannelStatus(T, !0, {
          channelId: t.id
        })
      })
    })
  });
  if (n && L && (!v || s)) return (0, l.jsxs)(u.Clickable, {
    className: R,
    onClick: _,
    children: [(0, l.jsx)(u.Text, {
      variant: "text-xs/medium",
      className: E.statusText,
      children: m.default.Messages.VOICE_CHANNEL_SET_STATUS
    }), (0, l.jsx)(h.default, {
      className: E.pencilIcon,
      width: x,
      height: x
    })]
  });
  if (v) return (0, l.jsx)(f.default, {
    children: I
  });
  return null
}