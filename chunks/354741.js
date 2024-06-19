t.r(n);
var a = t(735250);
t(470079);
var l = t(481060),
  i = t(493683),
  r = t(239091),
  s = t(883385),
  u = t(108843),
  o = t(947440),
  d = t(100527),
  c = t(299206),
  M = t(895563),
  _ = t(212205),
  I = t(62420),
  f = t(122074),
  E = t(314897),
  N = t(858687),
  C = t(461535),
  T = t(776568),
  h = t(981631),
  m = t(689938);
n.default = (0, u.Z)((0, s.Z)(function(e) {
  let {
    channel: n,
    selected: s,
    onSelect: u
  } = e, d = n.isOwner(E.default.getId()), O = (0, C.Z)(n), x = (0, T.ZP)(n), A = (0, f.Uf)(h.aIL, n.id, "top"), Z = (0, N.Z)(n, s), g = (0, c.Z)({
    id: n.id,
    label: m.Z.Messages.COPY_ID_CHANNEL
  }), v = (0, o.Z)(n), U = (0, M.l)(n), S = (0, M.P)(n), j = (0, _.Z)(n), p = (0, I.Z)(n);
  return null == n || n.isManaged() ? null : (0, a.jsxs)(l.Menu, {
    navId: "gdm-context",
    "aria-label": m.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onClose: r.Zy,
    onSelect: u,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: O
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [U, j, p]
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [d ? (0, a.jsx)(l.MenuItem, {
        id: "instant-invites",
        label: m.Z.Messages.INSTANT_INVITES,
        action: () => (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("49237"), t.e("99387"), t.e("6901")]).then(t.bind(t, 892382));
          return t => (0, a.jsx)(e, {
            channelId: n.id,
            ...t
          })
        })
      }) : null, (0, a.jsx)(l.MenuControlItem, {
        id: "change-icon",
        showDefaultFocus: !0,
        control: (e, t) => (0, a.jsx)(l.MenuImageUploadControl, {
          onChange: t => {
            var a;
            i.Z.setIcon(n.id, t), null === (a = e.onClose) || void 0 === a || a.call(e)
          },
          multiple: !1,
          "aria-label": m.Z.Messages.CHANGE_ICON,
          ...e,
          ref: t
        }),
        label: m.Z.Messages.CHANGE_ICON
      }), null != n.icon ? (0, a.jsx)(l.MenuItem, {
        id: "remove-icon",
        label: m.Z.Messages.REMOVE_ICON,
        action: () => i.Z.setIcon(n.id, null)
      }) : null]
    }), (0, a.jsx)(l.MenuGroup, {
      children: v
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [x, A]
    }), (0, a.jsx)(l.MenuGroup, {
      children: Z
    }), (0, a.jsx)(l.MenuGroup, {
      children: S
    }), (0, a.jsx)(l.MenuGroup, {
      children: g
    })]
  })
}, {
  object: h.qAy.CONTEXT_MENU
}), [d.Z.CONTEXT_MENU, d.Z.GROUP_DM_MENU])