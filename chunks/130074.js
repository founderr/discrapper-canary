"use strict";
n.r(t), n.d(t, {
  default: function() {
    return k
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
  p = n("44141"),
  h = n("531674"),
  C = n("861370"),
  I = n("972701"),
  _ = n("390008"),
  S = n("936947"),
  T = n("918034"),
  N = n("976127"),
  v = n("856030"),
  g = n("726750"),
  A = n("170990"),
  m = n("304582"),
  R = n("72057"),
  y = n("563816"),
  M = n("489836"),
  O = n("406703"),
  U = n("126710"),
  L = n("502533"),
  P = n("314838"),
  G = n("151200"),
  b = n("692986"),
  x = n("806179"),
  F = n("816106"),
  w = n("623879"),
  D = n("49111"),
  j = n("782340"),
  k = (0, l.default)((0, s.default)(function(e) {
    let {
      user: t,
      channel: n,
      channelSelected: s = !1,
      showMute: l = !0,
      showMediaItems: d = !1,
      showChannelCallItems: D = !1,
      showModalItems: k = !0,
      targetIsUser: H = !1,
      context: V,
      onSelect: W,
      onHeightUpdate: B
    } = e, Y = (0, x.default)(t.id, null), Z = (0, O.default)(t, V), K = (0, R.default)({
      user: t,
      context: V
    }), z = (0, m.default)(t), Q = (0, w.default)(t.id), q = (0, U.default)(n.id, s), X = (0, P.default)(t), J = (0, o.default)(null, t), $ = (0, F.default)(t.id), ee = (0, G.default)(t.id, n.id), et = (0, A.default)(t), en = (0, b.default)(t.id), ei = (0, L.default)(t.id, n.id), ea = (0, M.default)(t), er = (0, h.default)(n), es = (0, C.default)({
      id: t.id,
      label: j.default.Messages.COPY_ID_USER
    }), el = (0, C.default)({
      id: n.id,
      label: j.default.Messages.COPY_ID_CHANNEL
    }), eu = (0, p.default)(n), eo = (0, f.default)(t.id), ed = (0, c.default)(n.id), ec = (0, g.default)(t), ef = (0, E.default)(t.id), eE = (0, y.default)({
      commandType: u.ApplicationCommandType.USER,
      commandTargetId: t.id,
      channel: n,
      guildId: void 0,
      onHeightUpdate: B
    }), ep = (0, I.useAddToFavoritesItem)(n), eh = (0, I.useRemoveFromFavoritesItem)(n), eC = (0, _.default)(n), eI = (0, S.default)(n), e_ = (0, N.useMessageRequestItem)(n), eS = (0, T.useInappropriateConversationItem)(n), eT = (0, v.useSafetyWarningsItem)(n), eN = n.isManaged(), ev = t.isNonUserBot();
    return (0, i.jsxs)(a.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": j.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: W,
      children: [(0, i.jsx)(a.MenuGroup, {
        children: !ev && eu
      }), (0, i.jsx)(a.MenuGroup, {
        children: e_
      }), (0, i.jsx)(a.MenuGroup, {
        children: eT
      }), (0, i.jsx)(a.MenuGroup, {
        children: eS
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [ep, eC, eI]
      }), (0, i.jsx)(a.MenuGroup, {
        children: !ev && ec
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [!ev && (0, i.jsxs)(i.Fragment, {
          children: [k && Y, Z, !eN && ee, k && K, k && z, Q]
        }), q]
      }), !ev && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.MenuGroup, {
          children: d && $
        }), (0, i.jsx)(a.MenuGroup, {
          children: k && J
        }), (0, i.jsxs)(a.MenuGroup, {
          children: [d && en, d && ei, eE, k && X, et, k && ea, d && ef]
        }), (0, i.jsx)(a.MenuGroup, {
          children: l && er
        }), D && (0, i.jsxs)(a.MenuGroup, {
          children: [ed, eo]
        })]
      }), (0, i.jsx)(a.MenuGroup, {
        children: eh
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [es, !H && el]
      })]
    })
  }, {
    object: D.AnalyticsObjects.CONTEXT_MENU
  }), [d.default.CONTEXT_MENU, d.default.DM_USER_MENU])