"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
});
var i = n("37983");
n("884691");
var a = n("77078"),
  l = n("272030"),
  r = n("838446"),
  s = n("158534"),
  u = n("798609"),
  o = n("846883"),
  d = n("812204"),
  c = n("243288"),
  f = n("321135"),
  E = n("873254"),
  h = n("44141"),
  C = n("531674"),
  p = n("861370"),
  _ = n("972701"),
  I = n("390008"),
  S = n("936947"),
  T = n("976127"),
  N = n("856030"),
  v = n("726750"),
  A = n("170990"),
  g = n("304582"),
  m = n("72057"),
  R = n("563816"),
  y = n("489836"),
  M = n("406703"),
  O = n("126710"),
  U = n("502533"),
  L = n("314838"),
  G = n("151200"),
  P = n("692986"),
  x = n("806179"),
  F = n("816106"),
  b = n("623879"),
  D = n("49111"),
  w = n("782340"),
  j = (0, s.default)((0, r.default)(function(e) {
    let {
      user: t,
      channel: n,
      channelSelected: r = !1,
      showMute: s = !0,
      showMediaItems: d = !1,
      showChannelCallItems: D = !1,
      showModalItems: j = !0,
      targetIsUser: H = !1,
      context: k,
      onSelect: V,
      onHeightUpdate: W
    } = e, B = (0, x.default)(t.id, null), Z = (0, M.default)(t, k), K = (0, m.default)({
      user: t,
      context: k
    }), Y = (0, g.default)(t), z = (0, b.default)(t.id), q = (0, O.default)(n.id, r), X = (0, L.default)(t), Q = (0, o.default)(null, t), J = (0, F.default)(t.id), $ = (0, G.default)(t.id, n.id), ee = (0, A.default)(t), et = (0, P.default)(t.id), en = (0, U.default)(t.id, n.id), ei = (0, y.default)(t), ea = (0, C.default)(n), el = (0, p.default)({
      id: t.id,
      label: w.default.Messages.COPY_ID_USER
    }), er = (0, p.default)({
      id: n.id,
      label: w.default.Messages.COPY_ID_CHANNEL
    }), es = (0, h.default)(n), eu = (0, f.default)(t.id), eo = (0, c.default)(n.id), ed = (0, v.default)(t), ec = (0, E.default)(t.id), ef = (0, R.default)({
      commandType: u.ApplicationCommandType.USER,
      commandTargetId: t.id,
      channel: n,
      guildId: void 0,
      onHeightUpdate: W
    }), eE = (0, _.useAddToFavoritesItem)(n), eh = (0, _.useRemoveFromFavoritesItem)(n), eC = (0, I.default)(n), ep = (0, S.default)(n), e_ = (0, T.useMessageRequestItem)(n), eI = (0, N.useSafetyWarningsItem)(n), eS = n.isManaged(), eT = t.isNonUserBot();
    return (0, i.jsxs)(a.Menu, {
      navId: "user-context",
      onClose: l.closeContextMenu,
      "aria-label": w.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: V,
      children: [(0, i.jsx)(a.MenuGroup, {
        children: !eT && es
      }), (0, i.jsx)(a.MenuGroup, {
        children: e_
      }), (0, i.jsx)(a.MenuGroup, {
        children: eI
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [eE, eC, ep]
      }), (0, i.jsx)(a.MenuGroup, {
        children: !eT && ed
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [!eT && (0, i.jsxs)(i.Fragment, {
          children: [j && B, Z, !eS && $, j && K, j && Y, z]
        }), q]
      }), !eT && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.MenuGroup, {
          children: d && J
        }), (0, i.jsx)(a.MenuGroup, {
          children: j && Q
        }), (0, i.jsxs)(a.MenuGroup, {
          children: [d && et, d && en, ef, j && X, ee, j && ei, d && ec]
        }), (0, i.jsx)(a.MenuGroup, {
          children: s && ea
        }), D && (0, i.jsxs)(a.MenuGroup, {
          children: [eo, eu]
        })]
      }), (0, i.jsx)(a.MenuGroup, {
        children: eh
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [el, !H && er]
      })]
    })
  }, {
    object: D.AnalyticsObjects.CONTEXT_MENU
  }), [d.default.CONTEXT_MENU, d.default.DM_USER_MENU])