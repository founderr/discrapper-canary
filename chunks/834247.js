"use strict";
n.r(e), n.d(e, {
  default: function() {
    return F
  }
});
var i = n("37983");
n("884691");
var u = n("77078"),
  r = n("272030"),
  a = n("838446"),
  d = n("158534"),
  l = n("798609"),
  o = n("846883"),
  s = n("812204"),
  I = n("243288"),
  E = n("321135"),
  c = n("873254"),
  T = n("861370"),
  _ = n("230947"),
  S = n("726750"),
  f = n("85166"),
  N = n("170990"),
  p = n("304582"),
  G = n("72057"),
  A = n("300925"),
  D = n("563816"),
  M = n("489836"),
  O = n("406703"),
  m = n("502533"),
  U = n("314838"),
  h = n("383161"),
  C = n("421602"),
  R = n("459870"),
  y = n("692986"),
  P = n("806179"),
  g = n("97508"),
  L = n("816106"),
  v = n("623879"),
  b = n("49111"),
  B = n("782340"),
  F = (0, d.default)((0, a.default)(function(t) {
    let {
      user: e,
      guildId: n,
      channel: a,
      showMediaItems: d = !1,
      showChatItems: s = !0,
      showChannelCallItems: F = !1,
      showModalItems: Y = !0,
      showStageChannelItems: H = !1,
      context: x,
      onSelect: k,
      onHeightUpdate: j
    } = t, W = (0, P.default)(e.id, n, a.id), w = (0, h.default)(e, n, x), K = (0, C.default)(e.id, x), V = (0, v.default)(e.id), z = (0, O.default)(e, x), X = (0, G.default)({
      user: e,
      guildId: n,
      context: x
    }), Z = (0, p.default)(e), Q = (0, L.default)(e.id), q = (0, y.default)(e.id), J = (0, _.default)({
      guildId: n,
      userId: e.id,
      analyticsLocation: {
        page: b.AnalyticsPages.GUILD_CHANNEL,
        section: b.AnalyticsSections.CHAT_USERNAME,
        object: b.AnalyticsObjects.CONTEXT_MENU_ITEM
      },
      context: x
    }), $ = (0, U.default)(e, n), tt = (0, o.default)(null, e), te = (0, N.default)(e), tn = (0, M.default)(e), ti = (0, A.default)(e, n, a.id), tu = (0, g.default)(e.id, n), tr = (0, R.default)(e, n), ta = (0, T.default)({
      id: e.id,
      label: B.default.Messages.COPY_ID_USER
    }), td = (0, m.default)(e.id, a.id), tl = (0, E.default)(e.id), to = (0, I.default)(a.id), ts = (0, S.default)(e), tI = (0, f.default)(e, n, a.id), tE = (0, D.default)({
      commandType: l.ApplicationCommandType.USER,
      commandTargetId: e.id,
      channel: a,
      guildId: n,
      onHeightUpdate: j,
      context: x
    }), tc = (0, c.default)(e.id), tT = e.isNonUserBot();
    return (0, i.jsxs)(u.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": B.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: k,
      children: [!tT && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(u.MenuGroup, {
          children: [ts, H && tI]
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [Y && W, s && w, K, z, Y && X, Y && Z, V]
        }), d && (0, i.jsx)(u.MenuGroup, {
          children: Q
        }), (0, i.jsx)(u.MenuGroup, {
          children: Y && tt
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [d && q, d && td, Y && J, tE, Y && $, te, Y && tn, F && tc]
        }), (0, i.jsx)(u.MenuGroup, {
          children: ti
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [tu, tr]
        }), F && (0, i.jsxs)(u.MenuGroup, {
          children: [to, tl]
        })]
      }), (0, i.jsx)(u.MenuGroup, {
        children: ta
      })]
    })
  }, {
    object: b.AnalyticsObjects.CONTEXT_MENU
  }), [s.default.CONTEXT_MENU, s.default.GUILD_CHANNEL_USER_MENU])