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
  o = n("77078"),
  u = n("207273"),
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
    onClick: S,
    enableHangStatus: _
  } = e, N = (0, r.useStateFromStores)([u.default], () => u.default.getChannelStatus(t)), T = null != N && N.length > 0, A = (0, r.useStateFromStores)([c.default], () => !_ && c.default.can(p.Permissions.SET_VOICE_CHANNEL_STATUS, t)), L = null != I && I.length > 0;
  a.useEffect(() => {
    T && C.default.track(p.AnalyticEvents.VOICE_CHANNEL_TOPIC_VIEWED, {
      guild_id: t.guild_id,
      channel_id: t.id
    })
  }, [t.id, T, t.guild_id]);
  let v = (0, o.useRedesignIconContext)().enabled ? 12 : 14;
  if (null == t.guild_id) return null;
  let x = i(E.statusDiv, n && A ? E.hoverable : null);
  if (T) return (0, l.jsx)(o.Clickable, {
    className: x,
    onClick: A ? S : void 0,
    children: (0, l.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: i(E.statusText, g.markup),
      children: (0, l.jsx)(f.default, {
        children: d.default.parseVoiceChannelStatus(N, !0, {
          channelId: t.id
        })
      })
    })
  });
  if (n && A && (!L || s)) return (0, l.jsxs)(o.Clickable, {
    className: x,
    onClick: S,
    children: [(0, l.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: E.statusText,
      children: m.default.Messages.VOICE_CHANNEL_SET_STATUS
    }), (0, l.jsx)(h.default, {
      className: E.pencilIcon,
      width: v,
      height: v
    })]
  });
  if (L) return (0, l.jsx)(f.default, {
    children: I
  });
  return null
}