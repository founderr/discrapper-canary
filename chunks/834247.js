"use strict";
n.r(e), n.d(e, {
  default: function() {
    return B
  }
});
var i = n("37983");
n("884691");
var u = n("77078"),
  a = n("272030"),
  r = n("838446"),
  d = n("158534"),
  l = n("798609"),
  o = n("846883"),
  s = n("812204"),
  c = n("243288"),
  E = n("321135"),
  I = n("873254"),
  T = n("861370"),
  _ = n("230947"),
  f = n("726750"),
  S = n("85166"),
  N = n("170990"),
  p = n("304582"),
  A = n("72057"),
  G = n("300925"),
  M = n("563816"),
  D = n("489836"),
  O = n("406703"),
  m = n("502533"),
  C = n("314838"),
  U = n("383161"),
  h = n("421602"),
  R = n("459870"),
  g = n("692986"),
  y = n("806179"),
  L = n("97508"),
  P = n("816106"),
  v = n("623879"),
  b = n("49111"),
  F = n("782340"),
  B = (0, d.default)((0, r.default)(function(t) {
    let {
      user: e,
      guildId: n,
      channel: r,
      showMediaItems: d = !1,
      showChatItems: s = !0,
      showChannelCallItems: B = !1,
      showModalItems: x = !0,
      showStageChannelItems: H = !1,
      context: Y,
      onSelect: V,
      onHeightUpdate: k
    } = t, j = (0, y.default)(e.id, n, r.id), W = (0, U.default)(e, n, Y), w = (0, h.default)(e.id, Y), K = (0, v.default)(e.id), z = (0, O.default)(e, Y), X = (0, A.default)({
      user: e,
      guildId: n,
      context: Y
    }), Z = (0, p.default)(e), Q = (0, P.default)(e.id), q = (0, g.default)(e.id), J = (0, _.default)({
      guildId: n,
      userId: e.id,
      analyticsLocation: {
        page: b.AnalyticsPages.GUILD_CHANNEL,
        section: b.AnalyticsSections.CHAT_USERNAME,
        object: b.AnalyticsObjects.CONTEXT_MENU_ITEM
      },
      context: Y
    }), $ = (0, C.default)(e, n), tt = (0, o.default)(null, e), te = (0, N.default)(e), tn = (0, D.default)(e), ti = (0, G.default)(e, n, r.id), tu = (0, L.default)(e.id, n), ta = (0, R.default)(e, n), tr = (0, T.default)({
      id: e.id,
      label: F.default.Messages.COPY_ID_USER
    }), td = (0, m.default)(e.id, r.id), tl = (0, E.default)(e.id), to = (0, c.default)(r.id), ts = (0, f.default)(e), tc = (0, S.default)(e, n, r.id), tE = (0, M.default)({
      commandType: l.ApplicationCommandType.USER,
      commandTargetId: e.id,
      channel: r,
      guildId: n,
      onHeightUpdate: k,
      context: Y
    }), tI = (0, I.default)(e.id), tT = e.isNonUserBot();
    return (0, i.jsxs)(u.Menu, {
      navId: "user-context",
      onClose: a.closeContextMenu,
      "aria-label": F.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: V,
      children: [!tT && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(u.MenuGroup, {
          children: [ts, H && tc]
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [x && j, s && W, w, z, x && X, x && Z, K]
        }), d && (0, i.jsx)(u.MenuGroup, {
          children: Q
        }), (0, i.jsx)(u.MenuGroup, {
          children: x && tt
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [d && q, d && td, x && J, tE, x && $, te, x && tn, B && tI]
        }), (0, i.jsx)(u.MenuGroup, {
          children: ti
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [tu, ta]
        }), B && (0, i.jsxs)(u.MenuGroup, {
          children: [to, tl]
        })]
      }), (0, i.jsx)(u.MenuGroup, {
        children: tr
      })]
    })
  }, {
    object: b.AnalyticsObjects.CONTEXT_MENU
  }), [s.default.CONTEXT_MENU, s.default.GUILD_CHANNEL_USER_MENU])