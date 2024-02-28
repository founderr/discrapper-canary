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
  _ = n("873254"),
  f = n("861370"),
  T = n("230947"),
  I = n("726750"),
  S = n("85166"),
  N = n("170990"),
  p = n("304582"),
  m = n("72057"),
  A = n("300925"),
  M = n("563816"),
  h = n("489836"),
  C = n("406703"),
  O = n("502533"),
  v = n("314838"),
  g = n("383161"),
  G = n("421602"),
  y = n("459870"),
  R = n("692986"),
  U = n("806179"),
  L = n("97508"),
  D = n("816106"),
  b = n("623879"),
  P = n("49111"),
  F = n("782340"),
  H = (0, r.default)((0, a.default)(function(e) {
    let {
      user: t,
      guildId: n,
      channel: a,
      showMediaItems: r = !1,
      showChatItems: s = !0,
      showChannelCallItems: H = !1,
      showModalItems: w = !0,
      showStageChannelItems: j = !1,
      context: B,
      onSelect: x,
      onHeightUpdate: W
    } = e, k = {
      page: P.AnalyticsPages.GUILD_CHANNEL,
      section: P.AnalyticsSections.CHAT_USERNAME,
      object: P.AnalyticsObjects.CONTEXT_MENU_ITEM
    }, V = (0, U.default)(t.id, n, a.id), K = (0, g.default)(t, n, B), X = (0, G.default)(t.id, B), Y = (0, b.default)(t.id), z = (0, C.default)(t, B), Z = (0, m.default)({
      user: t,
      guildId: n,
      context: B
    }), Q = (0, p.default)(t), q = (0, D.default)(t.id), J = (0, R.default)(t.id), $ = (0, T.default)({
      guildId: n,
      userId: t.id,
      analyticsLocation: k,
      context: B
    }), ee = (0, v.default)(t, n), et = (0, o.default)(null, t), en = (0, N.default)(t), ei = (0, h.default)(t), el = (0, A.default)(t, n, a.id), eu = (0, L.default)(t.id, n), ea = (0, y.default)(t, n), er = (0, f.default)({
      id: t.id,
      label: F.default.Messages.COPY_ID_USER
    }), ed = (0, O.default)(t.id, a.id), eo = (0, E.default)(t.id), es = (0, c.default)(a.id), ec = (0, I.default)(t), eE = (0, S.default)(t, n, a.id), e_ = (0, M.default)({
      commandType: d.ApplicationCommandType.USER,
      commandTargetId: t.id,
      channel: a,
      guildId: n,
      onHeightUpdate: W,
      context: B
    }), ef = (0, _.default)(t.id), eT = t.isNonUserBot();
    return (0, i.jsxs)(l.Menu, {
      navId: "user-context",
      onClose: u.closeContextMenu,
      "aria-label": F.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: x,
      children: [!eT && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsxs)(l.MenuGroup, {
          children: [ec, j && eE]
        }), (0, i.jsxs)(l.MenuGroup, {
          children: [w && V, s && K, X, z, w && Z, w && Q, Y]
        }), r && (0, i.jsx)(l.MenuGroup, {
          children: q
        }), (0, i.jsx)(l.MenuGroup, {
          children: w && et
        }), (0, i.jsxs)(l.MenuGroup, {
          children: [r && J, r && ed, w && $, e_, w && ee, en, w && ei, H && ef]
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
    object: P.AnalyticsObjects.CONTEXT_MENU
  }), [s.default.CONTEXT_MENU, s.default.GUILD_CHANNEL_USER_MENU])