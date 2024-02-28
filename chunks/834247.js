"use strict";
n.r(t), n.d(t, {
  default: function() {
    return H
  }
});
var i = n("37983");
n("884691");
var l = n("77078"),
  u = n("272030"),
  a = n("838446"),
  r = n("158534"),
  d = n("798609"),
  o = n("846883"),
  s = n("812204"),
  c = n("243288"),
  E = n("321135"),
  f = n("873254"),
  _ = n("861370"),
  T = n("230947"),
  I = n("726750"),
  S = n("85166"),
  N = n("170990"),
  p = n("304582"),
  m = n("72057"),
  A = n("300925"),
  M = n("563816"),
  C = n("489836"),
  h = n("406703"),
  O = n("502533"),
  v = n("314838"),
  g = n("383161"),
  G = n("421602"),
  y = n("459870"),
  R = n("692986"),
  D = n("806179"),
  U = n("97508"),
  L = n("816106"),
  b = n("623879"),
  F = n("49111"),
  P = n("782340"),
  H = (0, r.default)((0, a.default)(function(e) {
    let {
      user: t,
      guildId: n,
      channel: a,
      showMediaItems: r = !1,
      showChatItems: s = !0,
      showChannelCallItems: H = !1,
      showModalItems: x = !0,
      showStageChannelItems: V = !1,
      context: j,
      onSelect: w,
      onHeightUpdate: B
    } = e, W = {
      page: F.AnalyticsPages.GUILD_CHANNEL,
      section: F.AnalyticsSections.CHAT_USERNAME,
      object: F.AnalyticsObjects.CONTEXT_MENU_ITEM
    }, k = (0, D.default)(t.id, n, a.id), K = (0, g.default)(t, n, j), X = (0, G.default)(t.id, j), Y = (0, b.default)(t.id), z = (0, h.default)(t, j), Z = (0, m.default)({
      user: t,
      guildId: n,
      context: j
    }), Q = (0, p.default)(t), q = (0, L.default)(t.id), J = (0, R.default)(t.id), $ = (0, T.default)({
      guildId: n,
      userId: t.id,
      analyticsLocation: W,
      context: j
    }), ee = (0, v.default)(t, n), et = (0, o.default)(null, t), en = (0, N.default)(t), ei = (0, C.default)(t), el = (0, A.default)(t, n, a.id), eu = (0, U.default)(t.id, n), ea = (0, y.default)(t, n), er = (0, _.default)({
      id: t.id,
      label: P.default.Messages.COPY_ID_USER
    }), ed = (0, O.default)(t.id, a.id), eo = (0, E.default)(t.id), es = (0, c.default)(a.id), ec = (0, I.default)(t), eE = (0, S.default)(t, n, a.id), ef = (0, M.default)({
      commandType: d.ApplicationCommandType.USER,
      commandTargetId: t.id,
      channel: a,
      guildId: n,
      onHeightUpdate: B,
      context: j
    }), e_ = (0, f.default)(t.id), eT = t.isNonUserBot();
    return (0, i.jsxs)(l.Menu, {
      navId: "user-context",
      onClose: u.closeContextMenu,
      "aria-label": P.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: w,
      children: [!eT && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(l.MenuGroup, {
          children: [ec, V && eE]
        }), (0, i.jsxs)(l.MenuGroup, {
          children: [x && k, s && K, X, z, x && Z, x && Q, Y]
        }), r && (0, i.jsx)(l.MenuGroup, {
          children: q
        }), (0, i.jsx)(l.MenuGroup, {
          children: x && et
        }), (0, i.jsxs)(l.MenuGroup, {
          children: [r && J, r && ed, x && $, ef, x && ee, en, x && ei, H && e_]
        }), (0, i.jsx)(l.MenuGroup, {
          children: el
        }), (0, i.jsxs)(l.MenuGroup, {
          children: [eu, ea]
        }), H && (0, i.jsxs)(l.MenuGroup, {
          children: [es, eo]
        })]
      }), (0, i.jsx)(l.MenuGroup, {
        children: er
      })]
    })
  }, {
    object: F.AnalyticsObjects.CONTEXT_MENU
  }), [s.default.CONTEXT_MENU, s.default.GUILD_CHANNEL_USER_MENU])