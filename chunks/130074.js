"use strict";
n.r(t), n.d(t, {
  default: function() {
    return V
  }
});
var i = n("37983");
n("884691");
var a = n("77078"),
  r = n("272030"),
  s = n("838446"),
  l = n("158534"),
  u = n("798609"),
  o = n("846883"),
  d = n("812204"),
  c = n("243288"),
  f = n("321135"),
  E = n("873254"),
  _ = n("44141"),
  I = n("531674"),
  T = n("861370"),
  N = n("972701"),
  S = n("390008"),
  p = n("936947"),
  C = n("918034"),
  h = n("976127"),
  A = n("856030"),
  g = n("726750"),
  v = n("170990"),
  m = n("304582"),
  R = n("72057"),
  O = n("563816"),
  G = n("489836"),
  M = n("406703"),
  y = n("126710"),
  U = n("502533"),
  L = n("314838"),
  P = n("151200"),
  D = n("692986"),
  F = n("806179"),
  b = n("816106"),
  x = n("623879"),
  w = n("49111"),
  j = n("782340"),
  V = (0, l.default)((0, s.default)(function(e) {
    let {
      user: t,
      channel: n,
      channelSelected: s = !1,
      showMute: l = !0,
      showMediaItems: d = !1,
      showChannelCallItems: w = !1,
      showModalItems: V = !0,
      targetIsUser: H = !1,
      context: W,
      onSelect: k,
      onHeightUpdate: Y
    } = e, B = (0, F.default)(t.id, null), Z = (0, M.default)(t, W), K = (0, R.default)({
      user: t,
      context: W
    }), z = (0, m.default)(t), q = (0, x.default)(t.id), X = (0, y.default)(n.id, s), Q = (0, L.default)(t), J = (0, o.default)(null, t), $ = (0, b.default)(t.id), ee = (0, P.default)(t.id, n.id), et = (0, v.default)(t), en = (0, D.default)(t.id), ei = (0, U.default)(t.id, n.id), ea = (0, G.default)(t), er = (0, I.default)(n), es = (0, T.default)({
      id: t.id,
      label: j.default.Messages.COPY_ID_USER
    }), el = (0, T.default)({
      id: n.id,
      label: j.default.Messages.COPY_ID_CHANNEL
    }), eu = (0, _.default)(n), eo = (0, f.default)(t.id), ed = (0, c.default)(n.id), ec = (0, g.default)(t), ef = (0, E.default)(t.id), eE = (0, O.default)({
      commandType: u.ApplicationCommandType.USER,
      commandTargetId: t.id,
      channel: n,
      guildId: void 0,
      onHeightUpdate: Y
    }), e_ = (0, N.useAddToFavoritesItem)(n), eI = (0, N.useRemoveFromFavoritesItem)(n), eT = (0, S.default)(n), eN = (0, p.default)(n), eS = (0, h.useMessageRequestItem)(n), ep = (0, C.useInappropriateConversationItem)(n), eC = (0, A.useSafetyWarningsItem)(n), eh = n.isManaged(), eA = t.isNonUserBot();
    return (0, i.jsxs)(a.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": j.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: k,
      children: [(0, i.jsx)(a.MenuGroup, {
        children: !eA && eu
      }), (0, i.jsx)(a.MenuGroup, {
        children: eS
      }), (0, i.jsx)(a.MenuGroup, {
        children: eC
      }), (0, i.jsx)(a.MenuGroup, {
        children: ep
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [e_, eT, eN]
      }), (0, i.jsx)(a.MenuGroup, {
        children: !eA && ec
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [!eA && (0, i.jsxs)(i.Fragment, {
          children: [V && B, Z, !eh && ee, V && K, V && z, q]
        }), X]
      }), !eA && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.MenuGroup, {
          children: d && $
        }), (0, i.jsx)(a.MenuGroup, {
          children: V && J
        }), (0, i.jsxs)(a.MenuGroup, {
          children: [d && en, d && ei, eE, V && Q, et, V && ea, d && ef]
        }), (0, i.jsx)(a.MenuGroup, {
          children: l && er
        }), w && (0, i.jsxs)(a.MenuGroup, {
          children: [ed, eo]
        })]
      }), (0, i.jsx)(a.MenuGroup, {
        children: eI
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [es, !H && el]
      })]
    })
  }, {
    object: w.AnalyticsObjects.CONTEXT_MENU
  }), [d.default.CONTEXT_MENU, d.default.DM_USER_MENU])