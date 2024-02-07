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
  l = n("158534"),
  o = n("798609"),
  d = n("846883"),
  s = n("812204"),
  E = n("243288"),
  c = n("321135"),
  _ = n("873254"),
  T = n("888355"),
  I = n("861370"),
  S = n("230947"),
  f = n("726750"),
  N = n("85166"),
  p = n("170990"),
  A = n("304582"),
  C = n("72057"),
  G = n("300925"),
  O = n("563816"),
  h = n("489836"),
  R = n("406703"),
  U = n("502533"),
  D = n("314838"),
  P = n("383161"),
  m = n("421602"),
  g = n("459870"),
  M = n("692986"),
  y = n("806179"),
  L = n("97508"),
  v = n("816106"),
  F = n("623879"),
  b = n("49111"),
  H = n("782340"),
  B = (0, l.default)((0, r.default)(function(t) {
    let {
      user: e,
      guildId: n,
      channel: r,
      showMediaItems: l = !1,
      showChatItems: s = !0,
      showChannelCallItems: B = !1,
      showModalItems: V = !0,
      showStageChannelItems: Y = !1,
      context: k,
      onSelect: x,
      onHeightUpdate: w
    } = t, j = (0, y.default)(e.id, n, r.id), W = (0, P.default)(e, n, k), K = (0, m.default)(e.id, k), z = (0, F.default)(e.id), X = (0, R.default)(e, k), q = (0, C.default)({
      user: e,
      guildId: n,
      context: k
    }), Z = (0, A.default)(e), Q = (0, v.default)(e.id), J = (0, M.default)(e.id), $ = (0, S.default)({
      guildId: n,
      userId: e.id,
      analyticsLocation: {
        page: b.AnalyticsPages.GUILD_CHANNEL,
        section: b.AnalyticsSections.CHAT_USERNAME,
        object: b.AnalyticsObjects.CONTEXT_MENU_ITEM
      },
      context: k
    }), tt = (0, D.default)(e, n), te = (0, d.default)(null, e), tn = (0, p.default)(e), ti = (0, h.default)(e), tu = (0, G.default)(e, n, r.id), ta = (0, L.default)(e.id, n), tr = (0, g.default)(e, n), tl = (0, I.default)({
      id: e.id,
      label: H.default.Messages.COPY_ID_USER
    }), to = (0, U.default)(e.id, r.id), td = (0, c.default)(e.id), ts = (0, E.default)(r.id), tE = (0, f.default)(e), tc = (0, N.default)(e, n, r.id), t_ = (0, O.default)({
      commandType: o.ApplicationCommandType.USER,
      commandTargetId: e.id,
      channel: r,
      guildId: n,
      onHeightUpdate: w,
      context: k
    }), tT = (0, _.default)(e.id), tI = e.isNonUserBot(), tS = e.isClyde(), tf = (0, T.useIsDMsToClydeEnabled)();
    return (0, i.jsxs)(u.Menu, {
      navId: "user-context",
      onClose: a.closeContextMenu,
      "aria-label": H.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: x,
      children: [!tI && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(u.MenuGroup, {
          children: [tE, Y && tc]
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [V && j, s && W, K, X, V && q, V && Z, z]
        }), l && (0, i.jsx)(u.MenuGroup, {
          children: Q
        }), (0, i.jsx)(u.MenuGroup, {
          children: V && te
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [l && J, l && to, V && $, t_, V && tt, tn, V && ti, B && tT]
        }), (0, i.jsx)(u.MenuGroup, {
          children: tu
        }), (0, i.jsxs)(u.MenuGroup, {
          children: [ta, tr]
        }), B && (0, i.jsxs)(u.MenuGroup, {
          children: [ts, td]
        })]
      }), tS && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(u.MenuGroup, {
          children: [V && j, tf && K]
        }), (0, i.jsx)(u.MenuGroup, {
          children: tu
        })]
      }), (0, i.jsx)(u.MenuGroup, {
        children: tl
      })]
    })
  }, {
    object: b.AnalyticsObjects.CONTEXT_MENU
  }), [s.default.CONTEXT_MENU, s.default.GUILD_CHANNEL_USER_MENU])