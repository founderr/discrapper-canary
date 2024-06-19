t.r(n);
var a = t(735250);
t(470079);
var i = t(481060),
  l = t(239091),
  u = t(108843),
  r = t(100527),
  s = t(299206),
  o = t(423589),
  c = t(398048),
  d = t(315732),
  _ = t(3689),
  E = t(323597),
  N = t(852245),
  Z = t(367722),
  M = t(776568),
  p = t(218035),
  C = t(775666),
  I = t(593589),
  T = t(442754),
  h = t(981631),
  f = t(689938);
n.default = (0, u.Z)(function(e) {
  let {
    channel: n,
    guild: t,
    includeTopic: u = !1,
    onSelect: r
  } = e, A = (0, T.Z)(n), P = (0, M.ZP)(n), g = (0, p.Z)(n), O = (0, d.Z)(n), x = (0, N.Z)(n), L = (0, Z.Z)(n, t), j = (0, c.Z)(n, t), b = (0, _.Z)(n, t, h.d4z.GUILD_TEXT), v = (0, _.Z)(n, t, h.d4z.GUILD_VOICE), G = (0, E.Z)(n), m = (0, s.Z)({
    id: n.id,
    label: f.Z.Messages.COPY_ID_CHANNEL
  }), H = (0, I.Z)(n, "title_context_menu"), y = (0, o.Mn)("ChannelTitleContextMenu"), U = (0, C.ZP)(n);
  return (0, a.jsxs)(i.Menu, {
    navId: "channel-context",
    onClose: l.Zy,
    "aria-label": f.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: r,
    children: [(0, a.jsx)(i.MenuGroup, {
      children: A
    }), (0, a.jsx)(i.MenuGroup, {
      children: P
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [u ? O : y ? U : g, x]
    }), (0, a.jsxs)(i.MenuGroup, {
      children: [L, j, b, v]
    }), (0, a.jsx)(i.MenuGroup, {
      children: H
    }), (0, a.jsx)(i.MenuGroup, {
      children: G
    }), (0, a.jsx)(i.MenuGroup, {
      children: m
    })]
  })
}, [r.Z.CONTEXT_MENU, r.Z.CHANNEL_TITLE_MENU])