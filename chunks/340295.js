var l = n(735250),
  i = n(470079),
  s = n(481060),
  a = n(287734),
  r = n(305325),
  o = n(281956),
  c = n(584729),
  u = n(27457),
  d = n(354459),
  h = n(689938),
  m = n(679386);
t.Z = function(e) {
  var t, n;
  let {
    participants: p,
    channel: E,
    hasConnectPermission: g
  } = e, f = p.filter(d.Io), C = (0, o.J)(E.guild_id), _ = i.useCallback(() => {
    C ? (0, r.hk)(E.guild_id, () => a.default.selectVoiceChannel(E.id)) : a.default.selectVoiceChannel(E.id)
  }, [E.id, E.guild_id, C]), I = 4 === f.length ? 2 : 3;
  return (0, l.jsxs)("div", {
    className: m.container,
    children: [(0, l.jsx)("div", {
      className: m.tiles,
      style: {
        maxWidth: 168 * I
      },
      children: f.slice(0, 5).map(e => (0, l.jsx)(u.ZP, {
        participant: e,
        channel: E,
        className: m.tile,
        paused: !0,
        inCall: !0,
        noVideoRender: !0,
        inPopout: !1,
        width: 48
      }, e.id))
    }), (0, l.jsx)(s.Heading, {
      className: m.channelName,
      variant: "heading-xxl/semibold",
      children: E.name
    }), (0, l.jsx)("div", {
      className: m.participantsRow,
      children: (0, l.jsx)(s.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: (t = E, 0 === (n = f).length ? h.Z.Messages.CURRENTLY_IN_VOICE_EMPTY : 1 === n.length ? h.Z.Messages.CURRENTLY_IN_VOICE_1.format({
          a: (0, c.Z)(t, n[0])
        }) : 2 === n.length ? h.Z.Messages.CURRENTLY_IN_VOICE_2.format({
          a: (0, c.Z)(t, n[0]),
          b: (0, c.Z)(t, n[1])
        }) : n.length > 2 ? h.Z.Messages.CURRENTLY_IN_VOICE_2_N.format({
          a: (0, c.Z)(t, n[0]),
          b: (0, c.Z)(t, n[1]),
          n: n.length - 2
        }) : void 0)
      })
    }), (0, l.jsx)(s.Button, {
      disabled: !g,
      className: m.joinButton,
      color: g ? s.Button.Colors.GREEN : s.Button.Colors.PRIMARY,
      onClick: _,
      size: s.Button.Sizes.MEDIUM,
      children: g ? h.Z.Messages.JOIN_VOICE : h.Z.Messages.CHANNEL_LOCKED_SHORT
    })]
  })
}