var l = n(735250),
  i = n(470079),
  s = n(120356),
  r = n.n(s),
  a = n(442837),
  o = n(592125),
  u = n(938475),
  c = n(823379),
  d = n(734190),
  h = n(689938),
  g = n(205546);
t.Z = i.memo(function(e) {
  let {
    channel: t,
    selectedChannel: n,
    selectedVoiceChannelId: i,
    sortedThreadIds: s,
    withGuildIcon: p
  } = e, m = (0, a.Wu)([o.Z], () => s.map(e => o.Z.getChannel(e)).filter(c.lm), [s]), C = (0, a.e7)([u.ZP], () => {
    let e = m[m.length - 1];
    if (null == e) return 0;
    let t = u.ZP.getVoiceStates(e.guild_id)[e.id];
    return null == t || 0 === t.length ? 0 : i !== e.id ? 40 : 32 * t.length + 8
  });
  return (0, l.jsx)("li", {
    className: g.container,
    children: (0, l.jsxs)("ul", {
      role: "group",
      "aria-label": h.Z.Messages.THREAD_GROUP_A11Y_LABEL.format({
        channelName: t.name
      }),
      children: [(0, l.jsx)("div", {
        className: r()(g.spineBorder, {
          [g.spineBorderWithGuildIcon]: p
        }),
        style: {
          bottom: 24 + C
        }
      }), m.map((e, t) => (0, l.jsx)(d.Z, {
        thread: e,
        isSelectedChannel: (null == n ? void 0 : n.id) === e.id,
        isSelectedVoice: i === e.id,
        isLast: t === m.length - 1,
        withGuildIcon: p
      }, e.id))]
    })
  })
})