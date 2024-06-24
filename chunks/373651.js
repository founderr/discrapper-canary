t.r(e);
var i = t(735250);
t(470079);
var l = t(481060),
  u = t(239091),
  o = t(883385),
  r = t(108843),
  a = t(947440),
  s = t(100527),
  c = t(299206),
  d = t(916069),
  Z = t(895563),
  h = t(212205),
  p = t(478035),
  x = t(62420),
  M = t(423589),
  C = t(398048),
  N = t(109764),
  _ = t(3689),
  j = t(323597),
  E = t(852245),
  f = t(367722),
  b = t(461535),
  P = t(776568),
  G = t(218035),
  A = t(775666),
  L = t(593589),
  T = t(442754),
  v = t(981631),
  O = t(689938);

function m(n) {
  let {
    channel: e,
    onSelect: t
  } = n, o = (0, b.Z)(e), r = (0, N.Z)(e), s = (0, Z.l)(e), d = (0, Z.P)(e), C = (0, h.Z)(e), _ = (0, p.Z)(e), j = (0, x.Z)(e), f = (0, P.ZP)(e), L = (0, G.Z)(e), T = (0, E.Z)(e), v = (0, c.Z)({
    id: e.id,
    label: O.Z.Messages.COPY_ID_CHANNEL
  }), m = (0, a.Z)(e), I = (0, A.ZP)(e), g = (0, M.Mn)("ChannelContextFavoritesMenu");
  return (0, i.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: u.Zy,
    "aria-label": O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: t,
    children: [(0, i.jsx)(l.MenuGroup, {
      children: o
    }), (0, i.jsxs)(l.MenuGroup, {
      children: [_, j, C, s]
    }), (0, i.jsxs)(l.MenuGroup, {
      children: [f, g ? I : L]
    }), (0, i.jsx)(l.MenuGroup, {
      children: T
    }), (0, i.jsx)(l.MenuGroup, {
      children: m
    }), (0, i.jsx)(l.MenuGroup, {
      children: d
    }), (0, i.jsx)(l.MenuGroup, {
      children: r
    }), (0, i.jsx)(l.MenuGroup, {
      children: v
    })]
  })
}

function I(n) {
  let {
    channel: e,
    guild: t,
    onSelect: o
  } = n, r = (0, b.Z)(e), a = (0, N.Z)(e), s = (0, Z.l)(e), d = (0, Z.P)(e), h = (0, T.Z)(e), p = (0, P.ZP)(e), x = (0, E.Z)(e), v = (0, f.Z)(e, t), m = (0, C.Z)(e, t), I = (0, _.Z)(e, t), g = (0, j.Z)(e), k = (0, c.Z)({
    id: e.id,
    label: O.Z.Messages.COPY_ID_CHANNEL
  }), H = (0, L.Z)(e, "list_text_channel_context_menu"), w = (0, G.Z)(e), U = (0, A.ZP)(e), y = (0, M.Mn)("ChannelContextMenuNormal");
  return (0, i.jsxs)(l.Menu, {
    navId: "channel-context",
    onClose: u.Zy,
    "aria-label": O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onSelect: o,
    children: [(0, i.jsxs)(l.MenuGroup, {
      children: [r, s]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(l.MenuGroup, {
      children: [v, h, a, H]
    }, "channel-actions"), (0, i.jsxs)(l.MenuGroup, {
      children: [p, y ? U : w]
    }, "notifications"), (0, i.jsxs)(l.MenuGroup, {
      children: [x, m, I, g]
    }, "admin-actions"), (0, i.jsx)(l.MenuGroup, {
      children: d
    }), (0, i.jsx)(l.MenuGroup, {
      children: k
    }, "developer-actions")]
  })
}
e.default = (0, r.Z)((0, o.Z)(function(n) {
  return (0, d.Z)() ? (0, i.jsx)(m, {
    ...n
  }) : (0, i.jsx)(I, {
    ...n
  })
}, {
  object: v.qAy.CONTEXT_MENU
}), [s.Z.CONTEXT_MENU, s.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU])