n.d(t, {
  Z: function() {
    return f
  }
});
var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(442837),
  o = n(481060),
  u = n(362721),
  c = n(12498),
  d = n(454585),
  h = n(514342),
  g = n(626135),
  p = n(981631),
  m = n(689938),
  C = n(387592),
  E = n(25450);

function f(e) {
  let {
    channel: t,
    connected: n,
    hovered: s,
    subtitle: f,
    onClick: _,
    enableHangStatus: I,
    allowChannelTopic: N
  } = e, Z = (0, a.e7)([c.Z], () => c.Z.getChannelStatus(t)), S = null != Z && Z.length > 0, x = (0, u.Z)(t, !0), T = (!I || !!N) && x, L = null != f && f.length > 0;
  i.useEffect(() => {
    S && g.default.track(p.rMx.VOICE_CHANNEL_TOPIC_VIEWED, {
      guild_id: t.guild_id,
      channel_id: t.id
    })
  }, [t.id, S, t.guild_id]);
  let v = (0, o.useRedesignIconContext)().enabled ? 12 : 14;
  if (null == t.guild_id) return null;
  let A = r()(C.statusDiv, n && T ? C.hoverable : null);
  if (S) return (0, l.jsx)(o.Clickable, {
    className: A,
    onClick: T ? _ : void 0,
    children: (0, l.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: r()(C.statusText, E.markup),
      children: (0, l.jsx)(h.Z, {
        children: d.Z.parseVoiceChannelStatus(Z, !0, {
          channelId: t.id
        })
      })
    })
  });
  if (n && T && (!L || s)) return (0, l.jsxs)(o.Clickable, {
    className: A,
    onClick: _,
    children: [(0, l.jsx)(o.Text, {
      variant: "text-xs/medium",
      className: C.statusText,
      children: m.Z.Messages.VOICE_CHANNEL_SET_STATUS
    }), (0, l.jsx)(o.PencilIcon, {
      size: "custom",
      color: "currentColor",
      className: C.pencilIcon,
      width: v,
      height: v
    })]
  });
  if (L) return (0, l.jsx)(h.Z, {
    children: f
  });
  return null
}