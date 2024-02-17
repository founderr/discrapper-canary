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
  _ = n("44141"),
  I = n("531674"),
  T = n("861370"),
  S = n("972701"),
  N = n("390008"),
  p = n("936947"),
  h = n("918034"),
  C = n("976127"),
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
  D = n("151200"),
  P = n("692986"),
  b = n("806179"),
  F = n("816106"),
  x = n("623879"),
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
      onSelect: B,
      onHeightUpdate: Y
    } = e, W = (0, b.default)(t.id, null), Z = (0, M.default)(t, k), K = (0, R.default)({
      user: t,
      context: k
    }), z = (0, m.default)(t), X = (0, x.default)(t.id), Q = (0, y.default)(n.id, l), q = (0, L.default)(t), J = (0, o.default)(null, t), $ = (0, F.default)(t.id), ee = (0, D.default)(t.id, n.id), et = (0, v.default)(t), en = (0, P.default)(t.id), ei = (0, U.default)(t.id, n.id), ea = (0, G.default)(t), er = (0, I.default)(n), el = (0, T.default)({
      id: t.id,
      label: V.default.Messages.COPY_ID_USER
    }), es = (0, T.default)({
      id: n.id,
      label: V.default.Messages.COPY_ID_CHANNEL
    }), eu = (0, _.default)(n), eo = (0, f.default)(t.id), ed = (0, c.default)(n.id), ec = (0, g.default)(t), ef = (0, E.default)(t.id), eE = (0, O.default)({
      commandType: u.ApplicationCommandType.USER,
      commandTargetId: t.id,
      channel: n,
      guildId: void 0,
      onHeightUpdate: Y
    }), e_ = (0, S.useAddToFavoritesItem)(n), eI = (0, S.useRemoveFromFavoritesItem)(n), eT = (0, N.default)(n), eS = (0, p.default)(n), eN = (0, C.useMessageRequestItem)(n), ep = (0, h.useInappropriateConversationItem)(n), eh = (0, A.useSafetyWarningsItem)(n), eC = n.isManaged(), eA = t.isNonUserBot();
    return (0, i.jsxs)(a.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": V.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: B,
      children: [(0, i.jsx)(a.MenuGroup, {
        children: !eA && eu
      }), (0, i.jsx)(a.MenuGroup, {
        children: eN
      }), (0, i.jsx)(a.MenuGroup, {
        children: eh
      }), (0, i.jsx)(a.MenuGroup, {
        children: ep
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [e_, eT, eS]
      }), (0, i.jsx)(a.MenuGroup, {
        children: !eA && ec
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [!eA && (0, i.jsxs)(i.Fragment, {
          children: [j && W, Z, !eC && ee, j && K, j && z, X]
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
        children: eI
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [el, !H && es]
      })]
    })
  }, {
    object: w.AnalyticsObjects.CONTEXT_MENU
  }), [d.default.CONTEXT_MENU, d.default.DM_USER_MENU])