"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("481060"),
  u = n("493683"),
  i = n("239091"),
  o = n("883385"),
  s = n("108843"),
  r = n("947440"),
  d = n("100527"),
  c = n("299206"),
  f = n("895563"),
  M = n("212205"),
  C = n("62420"),
  m = n("122074"),
  h = n("314897"),
  v = n("858687"),
  _ = n("461535"),
  E = n("776568"),
  I = n("981631"),
  S = n("689938");
t.default = (0, s.default)((0, o.default)(function(e) {
  let {
    channel: t,
    selected: o,
    onSelect: s
  } = e, d = t.isOwner(h.default.getId()), N = (0, _.default)(t), g = (0, E.default)(t), p = (0, m.default)(I.ZERO_STRING_GUILD_ID, t.id), A = (0, v.default)(t, o), T = (0, c.default)({
    id: t.id,
    label: S.default.Messages.COPY_ID_CHANNEL
  }), x = (0, r.default)(t), O = (0, f.useAddToFavoritesItem)(t), G = (0, f.useRemoveFromFavoritesItem)(t), R = (0, M.default)(t), j = (0, C.default)(t);
  return null == t || t.isManaged() ? null : (0, a.jsxs)(l.Menu, {
    navId: "gdm-context",
    "aria-label": S.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onClose: i.closeContextMenu,
    onSelect: s,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: N
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [O, R, j]
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [d ? (0, a.jsx)(l.MenuItem, {
        id: "instant-invites",
        label: S.default.Messages.INSTANT_INVITES,
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
          "aria-label": S.default.Messages.CHANGE_ICON,
          ...e,
          ref: n
        }),
        label: S.default.Messages.CHANGE_ICON
      }), null != t.icon ? (0, a.jsx)(l.MenuItem, {
        id: "remove-icon",
        label: S.default.Messages.REMOVE_ICON,
        action: () => u.default.setIcon(t.id, null)
      }) : null]
    }), (0, a.jsx)(l.MenuGroup, {
      children: x
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [g, p]
    }), (0, a.jsx)(l.MenuGroup, {
      children: A
    }), (0, a.jsx)(l.MenuGroup, {
      children: G
    }), (0, a.jsx)(l.MenuGroup, {
      children: T
    })]
  })
}, {
  object: I.AnalyticsObjects.CONTEXT_MENU
}), [d.default.CONTEXT_MENU, d.default.GROUP_DM_MENU])