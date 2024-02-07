"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var u = n("37983");
n("884691");
var a = n("77078"),
  d = n("272030"),
  l = n("158534"),
  i = n("812204"),
  r = n("861370"),
  s = n("47495"),
  o = n("715243"),
  f = n("261675"),
  c = n("963150"),
  E = n("308798"),
  S = n("47006"),
  _ = n("878526"),
  M = n("531674"),
  A = n("619436"),
  C = n("625399"),
  I = n("731390"),
  T = n("339876"),
  N = n("49111"),
  g = n("782340"),
  O = (0, l.default)(function(e) {
    let {
      channel: t,
      guild: n,
      includeTopic: l = !1,
      onSelect: i
    } = e, O = (0, T.default)(t), p = (0, M.default)(t), h = (0, A.default)(t), D = (0, f.default)(t), m = (0, S.default)(t), L = (0, _.default)(t, n), v = (0, o.default)(t, n), x = (0, c.default)(t, n, N.ChannelTypes.GUILD_TEXT), V = (0, c.default)(t, n, N.ChannelTypes.GUILD_VOICE), y = (0, E.default)(t), F = (0, r.default)({
      id: t.id,
      label: g.default.Messages.COPY_ID_CHANNEL
    }), R = (0, I.default)(t, "title_context_menu"), U = (0, s.useShouldUseNewNotificationSystem)("ChannelTitleContextMenu"), b = (0, C.default)(t);
    return (0, u.jsxs)(a.Menu, {
      navId: "channel-context",
      onClose: d.closeContextMenu,
      "aria-label": g.default.Messages.CHANNEL_ACTIONS_MENU_LABEL,
      onSelect: i,
      children: [(0, u.jsx)(a.MenuGroup, {
        children: O
      }), (0, u.jsx)(a.MenuGroup, {
        children: p
      }), (0, u.jsxs)(a.MenuGroup, {
        children: [l ? D : U ? b : h, m]
      }), (0, u.jsxs)(a.MenuGroup, {
        children: [L, v, x, V]
      }), (0, u.jsx)(a.MenuGroup, {
        children: R
      }), (0, u.jsx)(a.MenuGroup, {
        children: y
      }), (0, u.jsx)(a.MenuGroup, {
        children: F
      })]
    })
  }, [i.default.CONTEXT_MENU, i.default.CHANNEL_TITLE_MENU])