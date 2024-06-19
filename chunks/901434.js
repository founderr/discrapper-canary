var l = n(735250),
  i = n(470079),
  s = n(442837),
  a = n(481060),
  r = n(287734),
  o = n(358221),
  c = n(305325),
  u = n(281956),
  d = n(27457),
  h = n(823379),
  m = n(5192),
  p = n(501655),
  E = n(689938),
  g = n(679386);
let f = (e, t) => m.ZP.getName(e.getGuildId(), e.id, t.user);
t.Z = function(e) {
  var t, n;
  let {
    participants: m,
    channel: C,
    hasConnectPermission: _
  } = e, I = (0, u.J)(C.guild_id), x = i.useCallback(() => {
    I ? (0, c.hk)(C.guild_id, () => r.default.selectVoiceChannel(C.id)) : r.default.selectVoiceChannel(C.id)
  }, [C.id, C.guild_id, I]), T = m.filter(e => e.type === p.Ui.VOICE), N = 4 === T.length ? 2 : 3, Z = (0, s.Wu)([o.Z], () => T.map(e => o.Z.getParticipant(C.id, e.id)).filter(h.lm), [C.id, T]);
  return (0, l.jsxs)("div", {
    className: g.container,
    children: [(0, l.jsx)("div", {
      className: g.tiles,
      style: {
        maxWidth: 168 * N
      },
      children: Z.slice(0, 5).map(e => (0, l.jsx)(d.ZP, {
        participant: e,
        channel: C,
        className: g.tile,
        paused: !0,
        inCall: !0,
        noVideoRender: !0,
        inPopout: !1,
        width: 48
      }, e.id))
    }), (0, l.jsx)(a.Heading, {
      className: g.channelName,
      variant: "heading-xxl/semibold",
      children: C.name
    }), (0, l.jsx)("div", {
      className: g.participantsRow,
      children: (0, l.jsx)(a.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: (t = C, 0 === (n = T).length ? E.Z.Messages.CURRENTLY_IN_STAGE_EMPTY : 1 === n.length ? E.Z.Messages.CURRENTLY_IN_STAGE_1.format({
          a: f(t, n[0])
        }) : 2 === n.length ? E.Z.Messages.CURRENTLY_IN_STAGE_2.format({
          a: f(t, n[0]),
          b: f(t, n[1])
        }) : n.length > 2 ? E.Z.Messages.CURRENTLY_IN_STAGE_2_N.format({
          a: f(t, n[0]),
          b: f(t, n[1]),
          n: n.length - 2
        }) : void 0)
      })
    }), (0, l.jsx)(a.Button, {
      disabled: !_,
      className: g.joinButton,
      color: _ ? a.Button.Colors.GREEN : a.Button.Colors.PRIMARY,
      onClick: x,
      size: a.Button.Sizes.MEDIUM,
      children: _ ? E.Z.Messages.STAGE_CHANNEL_JOIN : E.Z.Messages.CHANNEL_LOCKED_SHORT
    })]
  })
}