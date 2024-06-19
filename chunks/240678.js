T.r(e), T.d(e, {
  default: function() {
    return O
  }
});
var I = T(735250);
T(470079);
var n = T(374470),
  E = T(481060),
  i = T(239091),
  N = T(911969),
  r = T(299206),
  S = T(26737),
  o = T(905041),
  _ = T(89013),
  s = T(570870),
  a = T(449751),
  p = T(601184),
  d = T(168405),
  c = T(689938);

function O(t) {
  var e;
  let T, O, A, {
      channel: G,
      message: u,
      target: h,
      mediaItem: l,
      onSelect: y,
      onHeightUpdate: R
    } = t,
    Z = h;
  if (null != l) O = T = l.url;
  else
    for (;
      (0, n.k)(Z);)(0, n.k)(Z, HTMLImageElement) && null != Z.src && (O = Z.src), (0, n.k)(Z, HTMLAnchorElement) && null != Z.href && (T = Z.href, A = Z.textContent), Z = Z.parentNode;
  let M = null === (e = document.getSelection()) || void 0 === e ? void 0 : e.toString(),
    C = (0, S.Z)(M),
    m = (0, _.Z)(M),
    f = (0, s.Z)({
      commandType: N.yU.MESSAGE,
      commandTargetId: u.id,
      channel: G,
      guildId: void 0,
      onHeightUpdate: R
    }),
    P = (0, d.Z)(u, G),
    D = (0, a.Z)(u, G),
    g = (0, p.Z)(u, G),
    U = (0, o.Z)(null != T ? T : O, A),
    H = (0, r.Z)({
      id: u.id,
      label: c.Z.Messages.COPY_ID_MESSAGE,
      shiftId: "".concat(u.channel_id, "-").concat(u.id)
    });
  return (0, I.jsxs)(E.Menu, {
    navId: "message",
    onClose: i.Zy,
    "aria-label": c.Z.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: y,
    children: [(0, I.jsx)(E.MenuGroup, {
      children: C
    }), (0, I.jsx)(E.MenuGroup, {
      children: m
    }), (0, I.jsxs)(E.MenuGroup, {
      children: [f, P, D, g]
    }), (0, I.jsx)(E.MenuGroup, {
      children: U
    }), (0, I.jsx)(E.MenuGroup, {
      children: H
    })]
  })
}