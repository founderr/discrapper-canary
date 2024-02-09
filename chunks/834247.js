"use strict";
n.r(e), n.d(e, {
  default: function() {
    return B
  }
});
var i = n("37983");
n("884691");
var u = n("77078"),
  r = n("272030"),
  a = n("838446"),
  l = n("158534"),
  o = n("798609"),
  d = n("846883"),
  s = n("812204"),
  E = n("243288"),
  _ = n("321135"),
  c = n("873254"),
  T = n("861370"),
  I = n("230947"),
  S = n("726750"),
  f = n("85166"),
  N = n("170990"),
  p = n("304582"),
  A = n("72057"),
  G = n("300925"),
  O = n("563816"),
  U = n("489836"),
  R = n("406703"),
  C = n("502533"),
  D = n("314838"),
  P = n("383161"),
  h = n("421602"),
  m = n("459870"),
  M = n("692986"),
  y = n("806179"),
  g = n("97508"),
  v = n("816106"),
  L = n("623879"),
  b = n("49111"),
  F = n("782340"),
  B = (0, l.default)((0, a.default)(function(t) {
    let {
      user: e,
      guildId: n,
      channel: a,
      showMediaItems: l = !1,
      showChatItems: s = !0,
      showChannelCallItems: B = !1,
      showModalItems: H = !0,
      showStageChannelItems: Y = !1,
      context: k,
      onSelect: V,
      onHeightUpdate: x
    } = t, w = (0, y.default)(e.id, n, a.id), j = (0, P.default)(e, n, k), W = (0, h.default)(e.id, k), K = (0, L.default)(e.id), z = (0, R.default)(e, k), X = (0, A.default)({
      user: e,
      guildId: n,
      context: k
    }), q = (0, p.default)(e), Z = (0, v.default)(e.id), Q = (0, M.default)(e.id), J = (0, I.default)({
      guildId: n,
      userId: e.id,
      analyticsLocation: {
        page: b.AnalyticsPages.GUILD_CHANNEL,
        section: b.AnalyticsSections.CHAT_USERNAME,
        object: b.AnalyticsObjects.CONTEXT_MENU_ITEM
      },
      context: k
    }), $ = (0, D.default)(e, n), tt = (0, d.default)(null, e), te = (0, N.default)(e), tn = (0, U.default)(e), ti = (0, G.default)(e, n, a.id), tu = (0, g.default)(e.id, n), tr = (0, m.default)(e, n), ta = (0, T.default)({
      id: e.id,
      label: F.default.Messages.COPY_ID_USER
    }), tl = (0, C.default)(e.id, a.id), to = (0, _.default)(e.id), td = (0, E.default)(a.id), ts = (0, S.default)(e), tE = (0, f.default)(e, n, a.id), t_ = (0, O.default)({
      commandType: o.ApplicationCommandType.USER,
      commandTargetId: e.id,
      channel: a,
      guildId: n,
      onHeightUpdate: x,
      context: k
    }), tc = (0, c.default)(e.id), tT = e.isNonUserBot();
    return (0, i.jsxs)(u.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": F.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: V,
      children: [!tT && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(u.MenuGroup, {
          children: [ts, Y && tE]
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [H && w, s && j, W, z, H && X, H && q, K]
        }), l && (0, i.jsx)(u.MenuGroup, {
          children: Z
        }), (0, i.jsx)(u.MenuGroup, {
          children: H && tt
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [l && Q, l && tl, H && J, t_, H && $, te, H && tn, B && tc]
        }), (0, i.jsx)(u.MenuGroup, {
          children: ti
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [tu, tr]
        }), B && (0, i.jsxs)(u.MenuGroup, {
          children: [td, to]
        })]
      }), (0, i.jsx)(u.MenuGroup, {
        children: ta
      })]
    })
  }, {
    object: b.AnalyticsObjects.CONTEXT_MENU
  }), [s.default.CONTEXT_MENU, s.default.GUILD_CHANNEL_USER_MENU])