"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("481060"),
  u = n("493683"),
  i = n("239091"),
  s = n("883385"),
  r = n("108843"),
  o = n("947440"),
  d = n("100527"),
  c = n("299206"),
  f = n("895563"),
  M = n("212205"),
  h = n("62420"),
  _ = n("122074"),
  m = n("314897"),
  E = n("858687"),
  C = n("461535"),
  I = n("776568"),
  g = n("981631"),
  p = n("689938");
t.default = (0, r.default)((0, s.default)(function(e) {
  let {
    channel: t,
    selected: s,
    onSelect: r
  } = e, d = t.isOwner(m.default.getId()), g = (0, C.default)(t), x = (0, I.default)(t), v = (0, _.default)(), A = (0, E.default)(t, s), T = (0, c.default)({
    id: t.id,
    label: p.default.Messages.COPY_ID_CHANNEL
  }), N = (0, o.default)(t), O = (0, f.useAddToFavoritesItem)(t), G = (0, f.useRemoveFromFavoritesItem)(t), j = (0, M.default)(t), b = (0, h.default)(t);
  return null == t || t.isManaged() ? null : (0, a.jsxs)(l.Menu, {
    navId: "gdm-context",
    "aria-label": p.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onClose: i.closeContextMenu,
    onSelect: r,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: g
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [O, j, b]
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [d ? (0, a.jsx)(l.MenuItem, {
        id: "instant-invites",
        label: p.default.Messages.INSTANT_INVITES,
        action: () => (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("49237"), n.e("99387"), n.e("6901")]).then(n.bind(n, "892382"));
          return n => (0, a.jsx)(e, {
            channelId: t.id,
            ...n
          })
        })
      }) : null, (0, a.jsx)(l.MenuControlItem, {
        id: "change-icon",
        showDefaultFocus: !0,
        control: (e, n) => (0, a.jsx)(l.MenuImageUploadControl, {
          onChange: n => {
            var a;
            u.default.setIcon(t.id, n), null === (a = e.onClose) || void 0 === a || a.call(e)
          },
          multiple: !1,
          "aria-label": p.default.Messages.CHANGE_ICON,
          ...e,
          ref: n
        }),
        label: p.default.Messages.CHANGE_ICON
      }), null != t.icon ? (0, a.jsx)(l.MenuItem, {
        id: "remove-icon",
        label: p.default.Messages.REMOVE_ICON,
        action: () => u.default.setIcon(t.id, null)
      }) : null]
    }), (0, a.jsx)(l.MenuGroup, {
      children: N
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [x, v]
    }), (0, a.jsx)(l.MenuGroup, {
      children: A
    }), (0, a.jsx)(l.MenuGroup, {
      children: G
    }), (0, a.jsx)(l.MenuGroup, {
      children: T
    })]
  })
}, {
  object: g.AnalyticsObjects.CONTEXT_MENU
}), [d.default.CONTEXT_MENU, d.default.GROUP_DM_MENU])