"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var l = n("735250"),
  a = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("442837"),
  o = n("481060"),
  u = n("12498"),
  d = n("454585"),
  c = n("496675"),
  f = n("514342"),
  h = n("586791"),
  p = n("626135"),
  m = n("981631"),
  C = n("689938"),
  g = n("644092"),
  E = n("931093");

function _(e) {
  let {
    channel: t,
    connected: n,
    hovered: s,
    subtitle: _,
    onClick: S,
    enableHangStatus: I,
    allowChannelTopic: N
  } = e, T = (0, r.useStateFromStores)([u.default], () => u.default.getChannelStatus(t)), A = null != T && T.length > 0, L = (0, r.useStateFromStores)([c.default], () => (!I || !!N) && c.default.can(m.Permissions.SET_VOICE_CHANNEL_STATUS, t)), v = null != _ && _.length > 0;
  a.useEffect(() => {
    A && p.default.track(m.AnalyticEvents.VOICE_CHANNEL_TOPIC_VIEWED, {
      guild_id: t.guild_id,
      channel_id: t.id
    })
  }, [t.id, A, t.guild_id]);
  let x = (0, o.useRedesignIconContext)().enabled ? 12 : 14;
  if (null == t.guild_id) return null;
  let R = i()(g.statusDiv, n && L ? g.hoverable : null);
  if (A) return (0, l.jsx)(o.Clickable, {
    className: R,
    onClick: L ? S : void 0,
    children: (0, l.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: i()(g.statusText, E.markup),
      children: (0, l.jsx)(f.default, {
        children: d.default.parseVoiceChannelStatus(T, !0, {
          channelId: t.id
        })
      })
    })
  });
  if (n && L && (!v || s)) return (0, l.jsxs)(o.Clickable, {
    className: R,
    onClick: S,
    children: [(0, l.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: g.statusText,
      children: C.default.Messages.VOICE_CHANNEL_SET_STATUS
    }), (0, l.jsx)(h.default, {
      className: g.pencilIcon,
      width: x,
      height: x
    })]
  });
  if (v) return (0, l.jsx)(f.default, {
    children: _
  });
  return null
}