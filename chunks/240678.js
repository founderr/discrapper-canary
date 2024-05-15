"use strict";
n.r(t), n.d(t, {
  default: function() {
    return N
  }
});
var i = n("735250");
n("470079");
var a = n("374470"),
  l = n("481060"),
  d = n("239091"),
  s = n("911969"),
  u = n("299206"),
  o = n("26737"),
  r = n("905041"),
  T = n("89013"),
  I = n("570870"),
  E = n("449751"),
  c = n("601184"),
  p = n("168405"),
  S = n("689938");

function N(e) {
  var t;
  let n, N, _, {
      channel: f,
      message: A,
      target: O,
      mediaItem: m,
      onSelect: h,
      onHeightUpdate: G
    } = e,
    M = O;
  if (null != m) N = n = m.url;
  else
    for (;
      (0, a.isElement)(M);)(0, a.isElement)(M, HTMLImageElement) && null != M.src && (N = M.src), (0, a.isElement)(M, HTMLAnchorElement) && null != M.href && (n = M.href, _ = M.textContent), M = M.parentNode;
  let y = null === (t = document.getSelection()) || void 0 === t ? void 0 : t.toString(),
    R = (0, o.default)(y),
    C = (0, T.default)(y),
    P = (0, I.default)({
      commandType: s.ApplicationCommandType.MESSAGE,
      commandTargetId: A.id,
      channel: f,
      guildId: void 0,
      onHeightUpdate: G
    }),
    g = (0, p.default)(A, f),
    v = (0, E.default)(A, f),
    b = (0, c.default)(A, f),
    D = (0, r.default)(null != n ? n : N, _),
    H = (0, u.default)({
      id: A.id,
      label: S.default.Messages.COPY_ID_MESSAGE,
      shiftId: "".concat(A.channel_id, "-").concat(A.id)
    });
  return (0, i.jsxs)(l.Menu, {
    navId: "message",
    onClose: d.closeContextMenu,
    "aria-label": S.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: h,
    children: [(0, i.jsx)(l.MenuGroup, {
      children: R
    }), (0, i.jsx)(l.MenuGroup, {
      children: C
    }), (0, i.jsxs)(l.MenuGroup, {
      children: [P, g, v, b]
    }), (0, i.jsx)(l.MenuGroup, {
      children: D
    }), (0, i.jsx)(l.MenuGroup, {
      children: H
    })]
  })
}