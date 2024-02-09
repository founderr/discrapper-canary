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
  h = n("44141"),
  p = n("531674"),
  C = n("861370"),
  _ = n("972701"),
  I = n("390008"),
  S = n("936947"),
  T = n("976127"),
  N = n("856030"),
  v = n("726750"),
  A = n("170990"),
  g = n("304582"),
  m = n("72057"),
  M = n("563816"),
  R = n("489836"),
  O = n("406703"),
  y = n("126710"),
  U = n("502533"),
  L = n("314838"),
  G = n("151200"),
  P = n("692986"),
  x = n("806179"),
  b = n("816106"),
  F = n("623879"),
  w = n("49111"),
  D = n("782340"),
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
      onSelect: V,
      onHeightUpdate: B
    } = e, W = (0, x.default)(t.id, null), Z = (0, O.default)(t, k), Y = (0, m.default)({
      user: t,
      context: k
    }), K = (0, g.default)(t), z = (0, F.default)(t.id), Q = (0, y.default)(n.id, l), q = (0, L.default)(t), X = (0, o.default)(null, t), J = (0, b.default)(t.id), $ = (0, G.default)(t.id, n.id), ee = (0, A.default)(t), et = (0, P.default)(t.id), en = (0, U.default)(t.id, n.id), ei = (0, R.default)(t), ea = (0, p.default)(n), er = (0, C.default)({
      id: t.id,
      label: D.default.Messages.COPY_ID_USER
    }), el = (0, C.default)({
      id: n.id,
      label: D.default.Messages.COPY_ID_CHANNEL
    }), es = (0, h.default)(n), eu = (0, f.default)(t.id), eo = (0, c.default)(n.id), ed = (0, v.default)(t), ec = (0, E.default)(t.id), ef = (0, M.default)({
      commandType: u.ApplicationCommandType.USER,
      commandTargetId: t.id,
      channel: n,
      guildId: void 0,
      onHeightUpdate: B
    }), eE = (0, _.useAddToFavoritesItem)(n), eh = (0, _.useRemoveFromFavoritesItem)(n), ep = (0, I.default)(n), eC = (0, S.default)(n), e_ = (0, T.useMessageRequestItem)(n), eI = (0, N.useSafetyWarningsItem)(n), eS = n.isManaged(), eT = t.isNonUserBot();
    return (0, i.jsxs)(a.Menu, {
      navId: "user-context",
      onClose: r.closeContextMenu,
      "aria-label": D.default.Messages.USER_ACTIONS_MENU_LABEL,
      onSelect: V,
      children: [(0, i.jsx)(a.MenuGroup, {
        children: !eT && es
      }), (0, i.jsx)(a.MenuGroup, {
        children: e_
      }), (0, i.jsx)(a.MenuGroup, {
        children: eI
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [eE, ep, eC]
      }), (0, i.jsx)(a.MenuGroup, {
        children: !eT && ed
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [!eT && (0, i.jsxs)(i.Fragment, {
          children: [j && W, Z, !eS && $, j && Y, j && K, z]
        }), Q]
      }), !eT && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.MenuGroup, {
          children: d && J
        }), (0, i.jsx)(a.MenuGroup, {
          children: j && X
        }), (0, i.jsxs)(a.MenuGroup, {
          children: [d && et, d && en, ef, j && q, ee, j && ei, d && ec]
        }), (0, i.jsx)(a.MenuGroup, {
          children: s && ea
        }), w && (0, i.jsxs)(a.MenuGroup, {
          children: [eo, eu]
        })]
      }), (0, i.jsx)(a.MenuGroup, {
        children: eh
      }), (0, i.jsxs)(a.MenuGroup, {
        children: [er, !H && el]
      })]
    })
  }, {
    object: w.AnalyticsObjects.CONTEXT_MENU
  }), [d.default.CONTEXT_MENU, d.default.DM_USER_MENU])