t.r(e);
var i = t(735250);
t(470079);
var l = t(481060),
  a = t(239091),
  u = t(883385),
  r = t(108843),
  o = t(947440),
  d = t(100527),
  c = t(299206),
  s = t(916069),
  h = t(895563),
  p = t(212205),
  f = t(478035),
  _ = t(62420),
  m = t(423589),
  Z = t(398048),
  C = t(109764),
  E = t(3689),
  x = t(323597),
  g = t(852245),
  I = t(367722),
  O = t(461535),
  L = t(776568),
  M = t(218035),
  S = t(775666),
  N = t(593589),
  P = t(442754),
  A = t(981631),
  T = t(689938);

function v(n) {
  let {
    channel: e,
    onSelect: t
  } = n, u = (0, O.Z)(e), r = (0, C.Z)(e), d = (0, h.l)(e), s = (0, h.P)(e), Z = (0, p.Z)(e), E = (0, f.Z)(e), x = (0, _.Z)(e), I = (0, L.ZP)(e), N = (0, M.Z)(e), P = (0, g.Z)(e), A = (0, c.Z)({
    id: e.id,
    label: T.Z.Messages.COPY_ID_CHANNEL
  }), v = (0, o.Z)(e), G = (0, S.ZP)(e), U = (0, m.Mn)("ChannelContextFavoritesMenu");
  return (0, i.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: a.Zy,
    "aria-label": T.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: t,
    children: [(0, i.jsx)(l.MenuGroup, {
      children: u
    }), (0, i.jsxs)(l.MenuGroup, {
      children: [E, x, Z, d]
    }), (0, i.jsxs)(l.MenuGroup, {
      children: [I, U ? G : N]
    }), (0, i.jsx)(l.MenuGroup, {
      children: P
    }), (0, i.jsx)(l.MenuGroup, {
      children: v
    }), (0, i.jsx)(l.MenuGroup, {
      children: s
    }), (0, i.jsx)(l.MenuGroup, {
      children: r
    }), (0, i.jsx)(l.MenuGroup, {
      children: A
    })]
  })
}

function G(n) {
  let {
    channel: e,
    guild: t,
    onSelect: u
  } = n, r = (0, O.Z)(e), o = (0, C.Z)(e), d = (0, h.l)(e), s = (0, h.P)(e), p = (0, P.Z)(e), f = (0, L.ZP)(e), _ = (0, g.Z)(e), A = (0, I.Z)(e, t), v = (0, Z.Z)(e, t), G = (0, E.Z)(e, t), U = (0, x.Z)(e), b = (0, c.Z)({
    id: e.id,
    label: T.Z.Messages.COPY_ID_CHANNEL
  }), y = (0, N.Z)(e, "list_text_channel_context_menu"), j = (0, M.Z)(e), w = (0, S.ZP)(e), D = (0, m.Mn)("ChannelContextMenuNormal");
  return (0, i.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: a.Zy,
    "aria-label": T.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: u,
    children: [(0, i.jsxs)(l.MenuGroup, {
      children: [r, d]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(l.MenuGroup, {
      children: [A, p, o, y]
    }, "channel-actions"), (0, i.jsxs)(l.MenuGroup, {
      children: [f, D ? w : j]
    }, "notifications"), (0, i.jsxs)(l.MenuGroup, {
      children: [_, v, G, U]
    }, "admin-actions"), (0, i.jsx)(l.MenuGroup, {
      children: s
    }), (0, i.jsx)(l.MenuGroup, {
      children: b
    }, "developer-actions")]
  })
}
e.default = (0, r.Z)((0, u.Z)(function(n) {
  return (0, s.Z)() ? (0, i.jsx)(v, {
    ...n
  }) : (0, i.jsx)(G, {
    ...n
  })
}, {
  object: A.qAy.CONTEXT_MENU
}), [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU])