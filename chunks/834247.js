"use strict";
n.r(e), n.d(e, {
  default: function() {
    return x
  }
});
var i = n("37983");
n("884691");
var u = n("77078"),
  a = n("272030"),
  l = n("838446"),
  d = n("158534"),
  r = n("798609"),
  s = n("846883"),
  o = n("812204"),
  c = n("243288"),
  E = n("321135"),
  T = n("873254"),
  f = n("861370"),
  I = n("230947"),
  _ = n("726750"),
  S = n("85166"),
  p = n("170990"),
  N = n("304582"),
  A = n("72057"),
  O = n("300925"),
  m = n("563816"),
  M = n("489836"),
  G = n("406703"),
  h = n("502533"),
  C = n("314838"),
  y = n("383161"),
  R = n("421602"),
  g = n("459870"),
  v = n("692986"),
  U = n("806179"),
  P = n("97508"),
  D = n("816106"),
  b = n("623879"),
  L = n("49111"),
  F = n("782340"),
  x = (0, d.default)((0, l.default)(function(t) {
    let {
      user: e,
      guildId: n,
      channel: l,
      showMediaItems: d = !1,
      showChatItems: o = !0,
      showChannelCallItems: x = !1,
      showModalItems: H = !0,
      showStageChannelItems: k = !1,
      context: B,
      onSelect: j,
      onHeightUpdate: W
    } = t, K = (0, U.default)(e.id, n, l.id), w = (0, y.default)(e, n, B), V = (0, R.default)(e.id, B), Y = (0, b.default)(e.id), z = (0, G.default)(e, B), X = (0, A.default)({
      user: e,
      guildId: n,
      context: B
    }), Z = (0, N.default)(e), Q = (0, D.default)(e.id), q = (0, v.default)(e.id), J = (0, I.default)({
      guildId: n,
      userId: e.id,
      analyticsLocation: {
        page: L.AnalyticsPages.GUILD_CHANNEL,
        section: L.AnalyticsSections.CHAT_USERNAME,
        object: L.AnalyticsObjects.CONTEXT_MENU_ITEM
      },
      context: B
    }), $ = (0, C.default)(e, n), tt = (0, s.default)(null, e), te = (0, p.default)(e), tn = (0, M.default)(e), ti = (0, O.default)(e, n, l.id), tu = (0, P.default)(e.id, n), ta = (0, g.default)(e, n), tl = (0, f.default)({
      id: e.id,
      label: F.default.Messages.COPY_ID_USER
    }), td = (0, h.default)(e.id, l.id), tr = (0, E.default)(e.id), ts = (0, c.default)(l.id), to = (0, _.default)(e), tc = (0, S.default)(e, n, l.id), tE = (0, m.default)({
      commandType: r.ApplicationCommandType.USER,
      commandTargetId: e.id,
      channel: l,
      guildId: n,
      onHeightUpdate: W,
      context: B
    }), tT = (0, T.default)(e.id), tf = e.isNonUserBot();
    return (0, i.jsxs)(u.Menu, {
      navId: "user-context",
      onClose: a.closeContextMenu,
      "aria-label": F.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: j,
      children: [!tf && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(u.MenuGroup, {
          children: [to, k && tc]
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [H && K, o && w, V, z, H && X, H && Z, Y]
        }), d && (0, i.jsx)(u.MenuGroup, {
          children: Q
        }), (0, i.jsx)(u.MenuGroup, {
          children: H && tt
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [d && q, d && td, H && J, tE, H && $, te, H && tn, x && tT]
        }), (0, i.jsx)(u.MenuGroup, {
          children: ti
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [tu, ta]
        }), x && (0, i.jsxs)(u.MenuGroup, {
          children: [ts, tr]
        })]
      }), (0, i.jsx)(u.MenuGroup, {
        children: tl
      })]
    })
  }, {
    object: L.AnalyticsObjects.CONTEXT_MENU
  }), [o.default.CONTEXT_MENU, o.default.GUILD_CHANNEL_USER_MENU])