"use strict";
t.r(n);
var a = t("735250");
t("470079");
var u = t("481060"),
  l = t("493683"),
  i = t("239091"),
  o = t("883385"),
  s = t("108843"),
  d = t("947440"),
  r = t("100527"),
  c = t("299206"),
  f = t("895563"),
  M = t("212205"),
  h = t("62420"),
  C = t("122074"),
  m = t("314897"),
  _ = t("858687"),
  v = t("461535"),
  E = t("776568"),
  I = t("981631"),
  S = t("689938");
n.default = (0, s.default)((0, o.default)(function(e) {
  let {
    channel: n,
    selected: o,
    onSelect: s
  } = e, r = n.isOwner(m.default.getId()), g = (0, v.default)(n), N = (0, E.default)(n), p = (0, C.default)(I.ZERO_STRING_GUILD_ID, n.id), A = (0, _.default)(n, o), T = (0, c.default)({
    id: n.id,
    label: S.default.Messages.COPY_ID_CHANNEL
  }), x = (0, d.default)(n), O = (0, f.useAddToFavoritesItem)(n), G = (0, f.useRemoveFromFavoritesItem)(n), F = (0, M.default)(n), R = (0, h.default)(n);
  return null == n || n.isManaged() ? null : (0, a.jsxs)(u.Menu, {
    navId: "gdm-context",
    "aria-label": S.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
    onClose: i.closeContextMenu,
    onSelect: s,
    children: [(0, a.jsx)(u.MenuGroup, {
      children: g
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [O, F, R]
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [r ? (0, a.jsx)(u.MenuItem, {
        id: "instant-invites",
        label: S.default.Messages.INSTANT_INVITES,
        action: () => (0, u.openModalLazy)(async () => {
          let {
            default: e
          } = await Promise.all([t.e("49237"), t.e("99387"), t.e("6901")]).then(t.bind(t, "892382"));
          return t => (0, a.jsx)(e, {
            channelId: n.id,
            ...t
          })
        })
      }) : null, (0, a.jsx)(u.MenuControlItem, {
        id: "change-icon",
        showDefaultFocus: !0,
        control: (e, t) => (0, a.jsx)(u.MenuImageUploadControl, {
          onChange: t => {
            var a;
            l.default.setIcon(n.id, t), null === (a = e.onClose) || void 0 === a || a.call(e)
          },
          multiple: !1,
          "aria-label": S.default.Messages.CHANGE_ICON,
          ...e,
          ref: t
        }),
        label: S.default.Messages.CHANGE_ICON
      }), null != n.icon ? (0, a.jsx)(u.MenuItem, {
        id: "remove-icon",
        label: S.default.Messages.REMOVE_ICON,
        action: () => l.default.setIcon(n.id, null)
      }) : null]
    }), (0, a.jsx)(u.MenuGroup, {
      children: x
    }), (0, a.jsxs)(u.MenuGroup, {
      children: [N, p]
    }), (0, a.jsx)(u.MenuGroup, {
      children: A
    }), (0, a.jsx)(u.MenuGroup, {
      children: G
    }), (0, a.jsx)(u.MenuGroup, {
      children: T
    })]
  })
}, {
  object: I.AnalyticsObjects.CONTEXT_MENU
}), [r.default.CONTEXT_MENU, r.default.GROUP_DM_MENU])