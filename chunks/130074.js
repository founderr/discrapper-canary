"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var i = n("37983");
n("884691");
var a = n("77078"),
  r = n("272030"),
  l = n("838446"),
  s = n("158534"),
  u = n("798609"),
  o = n("846883"),
  d = n("812204"),
  c = n("243288"),
  f = n("321135"),
  E = n("873254"),
  p = n("44141"),
  _ = n("531674"),
  h = n("861370"),
  C = n("972701"),
  I = n("390008"),
  T = n("936947"),
  N = n("918034"),
  S = n("976127"),
  A = n("856030"),
  v = n("726750"),
  g = n("170990"),
  m = n("304582"),
  R = n("72057"),
  O = n("563816"),
  M = n("489836"),
  y = n("406703"),
  G = n("126710"),
  U = n("502533"),
  L = n("314838"),
  P = n("151200"),
  b = n("692986"),
  F = n("806179"),
  x = n("816106"),
  D = n("623879"),
  w = n("49111"),
  V = n("782340"),
  j = (0, s.default)((0, l.default)(function(e) {
    let {
      user: t,
      channel: n,
      channelSelected: l = !1,
      showMute: s = !0,
      showMediaItems: d = !1,
      showChannelCallItems: w = !1,
      showModalItems: j = !0,
      targetIsUser: H = !1,
      context: k,
      onSelect: W,
      onHeightUpdate: B
    } = e, Y = (0, F.default)(t.id, null), Z = (0, y.default)(t, k), K = (0, R.default)({
      user: t,
      context: k
    }), z = (0, m.default)(t), X = (0, D.default)(t.id), Q = (0, G.default)(n.id, l), q = (0, L.default)(t), J = (0, o.default)(null, t), $ = (0, x.default)(t.id), ee = (0, P.default)(t.id, n.id), et = (0, g.default)(t), en = (0, b.default)(t.id), ei = (0, U.default)(t.id, n.id), ea = (0, M.default)(t), er = (0, _.default)(n), el = (0, h.default)({
      id: t.id,
      label: V.default.Messages.COPY_ID_USER
    }), es = (0, h.default)({
      id: n.id,
      label: V.default.Messages.COPY_ID_CHANNEL
    }), eu = (0, p.default)(n), eo = (0, f.default)(t.id), ed = (0, c.default)(n.id), ec = (0, v.default)(t), ef = (0, E.default)(t.id), eE = (0, O.default)({
      commandType: u.ApplicationCommandType.USER,
      commandTargetId: t.id,
      channel: n,
      guildId: void 0,
      onHeightUpdate: B
    }), ep = (0, C.useAddToFavoritesItem)(n), e_ = (0, C.useRemoveFromFavoritesItem)(n), eh = (0, I.default)(n), eC = (0, T.default)(n), eI = (0, S.useMessageRequestItem)(n), eT = (0, N.useInappropriateConversationItem)(n), eN = (0, A.useSafetyWarningsItem)(n), eS = n.isManaged(), eA = t.isNonUserBot();
    return (0, i.jsxs)(a.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": V.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: W,
      children: [(0, i.jsx)(a.MenuGroup, {
        children: !eA && eu
      }), (0, i.jsx)(a.MenuGroup, {
        children: eI
      }), (0, i.jsx)(a.MenuGroup, {
        children: eN
      }), (0, i.jsx)(a.MenuGroup, {
        children: eT
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [ep, eh, eC]
      }), (0, i.jsx)(a.MenuGroup, {
        children: !eA && ec
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [!eA && (0, i.jsxs)(i.Fragment, {
          children: [j && Y, Z, !eS && ee, j && K, j && z, X]
        }), Q]
      }), !eA && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.MenuGroup, {
          children: d && $
        }), (0, i.jsx)(a.MenuGroup, {
          children: j && J
        }), (0, i.jsxs)(a.MenuGroup, {
          children: [d && en, d && ei, eE, j && q, et, j && ea, d && ef]
        }), (0, i.jsx)(a.MenuGroup, {
          children: s && er
        }), w && (0, i.jsxs)(a.MenuGroup, {
          children: [ed, eo]
        })]
      }), (0, i.jsx)(a.MenuGroup, {
        children: e_
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [el, !H && es]
      })]
    })
  }, {
    object: w.AnalyticsObjects.CONTEXT_MENU
  }), [d.default.CONTEXT_MENU, d.default.DM_USER_MENU])