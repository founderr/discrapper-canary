n.d(t, {
  Z: function() {
    return g
  }
});
var l = n(735250);
n(470079);
var i = n(442837),
  s = n(481060),
  a = n(787014),
  r = n(933557),
  o = n(454585),
  c = n(131704),
  u = n(496675),
  d = n(396769),
  h = n(967128),
  m = n(981631),
  p = n(689938),
  E = n(193308);

function g(e) {
  let {
    channel: t
  } = e, n = (0, r.ZP)(t, !0), g = (0, i.e7)([u.Z], () => u.Z.can(m.Plq.MANAGE_CHANNELS, t) && c.dF.has(t.type));
  return (0, l.jsxs)(h.ZP, {
    channelId: t.id,
    children: [(0, l.jsx)(h.Kq, {
      channelType: t.type
    }), (0, l.jsx)(h.Ot, {
      children: p.Z.Messages.BEGINNING_CHANNEL_WELCOME.format({
        channelName: n
      })
    }), (0, l.jsx)(h.jz, {
      children: p.Z.Messages.BEGINNING_CHANNEL_DESCRIPTION.format({
        channelName: n,
        topicHook: () => o.Z.parseTopic(t.topic, !0, {
          channelId: t.id
        })
      })
    }), g ? (0, l.jsx)("div", {
      className: E.buttonContainer,
      children: (0, l.jsx)(d.Z, {
        label: p.Z.Messages.EDIT_CHANNEL,
        onClick: () => {
          a.ZP.open(t.id)
        },
        icon: (0, l.jsx)(s.PencilIcon, {
          size: "xs",
          color: "currentColor"
        })
      })
    }) : null]
  })
}