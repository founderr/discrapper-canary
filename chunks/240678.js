"use strict";
n.r(e), n.d(e, {
  default: function() {
    return _
  }
});
var a = n("735250");
n("470079");
var i = n("374470"),
  T = n("481060"),
  d = n("239091"),
  s = n("911969"),
  I = n("299206"),
  E = n("26737"),
  o = n("905041"),
  r = n("89013"),
  l = n("570870"),
  u = n("449751"),
  p = n("601184"),
  S = n("168405"),
  N = n("689938");

function _(t) {
  var e;
  let n, _, c, {
      channel: O,
      message: f,
      target: A,
      mediaItem: G,
      onSelect: h,
      onHeightUpdate: m
    } = t,
    y = A;
  if (null != G) _ = n = G.url;
  else
    for (;
      (0, i.isElement)(y);)(0, i.isElement)(y, HTMLImageElement) && null != y.src && (_ = y.src), (0, i.isElement)(y, HTMLAnchorElement) && null != y.href && (n = y.href, c = y.textContent), y = y.parentNode;
  let R = null === (e = document.getSelection()) || void 0 === e ? void 0 : e.toString(),
    C = (0, E.default)(R),
    P = (0, r.default)(R),
    M = (0, l.default)({
      commandType: s.ApplicationCommandType.MESSAGE,
      commandTargetId: f.id,
      channel: O,
      guildId: void 0,
      onHeightUpdate: m
    }),
    H = (0, S.default)(f, O),
    g = (0, u.default)(f, O),
    D = (0, p.default)(f, O),
    U = (0, o.default)(null != n ? n : _, c),
    b = (0, I.default)({
      id: f.id,
      label: N.default.Messages.COPY_ID_MESSAGE,
      shiftId: "".concat(f.channel_id, "-").concat(f.id)
    });
  return (0, a.jsxs)(T.Menu, {
    navId: "message",
    onClose: d.closeContextMenu,
    "aria-label": N.default.Messages.MESSAGE_ACTIONS_MENU_LABEL,
    onSelect: h,
    children: [(0, a.jsx)(T.MenuGroup, {
      children: C
    }), (0, a.jsx)(T.MenuGroup, {
      children: P
    }), (0, a.jsxs)(T.MenuGroup, {
      children: [M, H, g, D]
    }), (0, a.jsx)(T.MenuGroup, {
      children: U
    }), (0, a.jsx)(T.MenuGroup, {
      children: b
    })]
  })
}