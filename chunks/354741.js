"use strict";
t.r(n);
var a = t("735250");
t("470079");
var l = t("481060"),
  u = t("493683"),
  i = t("239091"),
  o = t("883385"),
  s = t("108843"),
  r = t("947440"),
  d = t("100527"),
  c = t("299206"),
  f = t("895563"),
  M = t("212205"),
  C = t("62420"),
  h = t("122074"),
  m = t("314897"),
  _ = t("858687"),
  v = t("461535"),
  E = t("776568"),
  I = t("981631"),
  N = t("689938");
n.default = (0, s.default)((0, o.default)(function(e) {
  let {
    channel: n,
    selected: o,
    onSelect: s
  } = e, d = n.isOwner(m.default.getId()), S = (0, v.default)(n), g = (0, E.default)(n), T = (0, h.default)(I.ZERO_STRING_GUILD_ID, n.id), p = (0, _.default)(n, o), A = (0, c.default)({
    id: n.id,
    label: N.default.Messages.COPY_ID_CHANNEL
  }), x = (0, r.default)(n), O = (0, f.useAddToFavoritesItem)(n), G = (0, f.useRemoveFromFavoritesItem)(n), R = (0, M.default)(n), j = (0, C.default)(n);
  return null == n || n.isManaged() ? null : (0, a.jsxs)(l.Menu, {
    navId: "gdm-context",
    "aria-label": N.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onClose: i.closeContextMenu,
    onSelect: s,
    children: [(0, a.jsx)(l.MenuGroup, {
      children: S
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [O, R, j]
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [d ? (0, a.jsx)(l.MenuItem, {
        id: "instant-invites",
        label: N.default.Messages.INSTANT_INVITES,
        action: () => (0, l.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("49237"), t.e("99387"), t.e("6901")]).then(t.bind(t, "892382"));
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
            u.default.setIcon(n.id, t), null === (a = e.onClose) || void 0 === a || a.call(e)
          },
          multiple: !1,
          "aria-label": N.default.Messages.CHANGE_ICON,
          ...e,
          ref: t
        }),
        label: N.default.Messages.CHANGE_ICON
      }), null != n.icon ? (0, a.jsx)(l.MenuItem, {
        id: "remove-icon",
        label: N.default.Messages.REMOVE_ICON,
        action: () => u.default.setIcon(n.id, null)
      }) : null]
    }), (0, a.jsx)(l.MenuGroup, {
      children: x
    }), (0, a.jsxs)(l.MenuGroup, {
      children: [g, T]
    }), (0, a.jsx)(l.MenuGroup, {
      children: p
    }), (0, a.jsx)(l.MenuGroup, {
      children: G
    }), (0, a.jsx)(l.MenuGroup, {
      children: A
    })]
  })
}, {
  object: I.AnalyticsObjects.CONTEXT_MENU
}), [d.default.CONTEXT_MENU, d.default.GROUP_DM_MENU])