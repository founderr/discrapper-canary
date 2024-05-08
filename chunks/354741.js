"use strict";
n.r(t);
var a = n("735250");
n("470079");
var l = n("481060"),
  u = n("493683"),
  i = n("239091"),
  s = n("883385"),
  o = n("108843"),
  r = n("947440"),
  d = n("100527"),
  c = n("299206"),
  f = n("895563"),
  M = n("212205"),
  _ = n("62420"),
  C = n("122074"),
  I = n("314897"),
  m = n("858687"),
  E = n("461535"),
  N = n("776568"),
  S = n("981631"),
  h = n("689938");
t.default = (0, o.default)((0, s.default)(function(e) {
  let {
    channel: t,
    selected: s,
    onSelect: o
  } = e, d = t.isOwner(I.default.getId()), T = (0, E.default)(t), A = (0, N.default)(t), v = (0, C.useCustomNotificationSoundDMContextMenuItem)(S.ZERO_STRING_GUILD_ID, t.id, "top"), x = (0, m.default)(t, s), O = (0, c.default)({
    id: t.id,
    label: h.default.Messages.COPY_ID_CHANNEL
  }), p = (0, r.default)(t), g = (0, f.useAddToFavoritesItem)(t), U = (0, f.useRemoveFromFavoritesItem)(t), G = (0, M.default)(t), D = (0, _.default)(t);
  return null == t || t.isManaged() ? null : (0, a.jsxs)(l.Menu, {
    navId: "gdm-context",
    "aria-label": h.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onClose: i.closeContextMenu,
    onSelect: o,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: T
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [g, G, D]
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [d ? (0, a.jsx)(l.MenuItem, {
        id: "instant-invites",
        label: h.default.Messages.INSTANT_INVITES,
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
          "aria-label": h.default.Messages.CHANGE_ICON,
          ...e,
          ref: n
        }),
        label: h.default.Messages.CHANGE_ICON
      }), null != t.icon ? (0, a.jsx)(l.MenuItem, {
        id: "remove-icon",
        label: h.default.Messages.REMOVE_ICON,
        action: () => u.default.setIcon(t.id, null)
      }) : null]
    }), (0, a.jsx)(l.MenuGroup, {
      children: p
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [A, v]
    }), (0, a.jsx)(l.MenuGroup, {
      children: x
    }), (0, a.jsx)(l.MenuGroup, {
      children: U
    }), (0, a.jsx)(l.MenuGroup, {
      children: O
    })]
  })
}, {
  object: S.AnalyticsObjects.CONTEXT_MENU
}), [d.default.CONTEXT_MENU, d.default.GROUP_DM_MENU])