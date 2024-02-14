"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("394846"),
  o = n("36341"),
  u = n("158998"),
  d = n("777003"),
  c = n("782340"),
  f = n("888485"),
  m = n("107680"),
  p = n("379539"),
  h = n("714073"),
  E = n("980923"),
  g = n("779585"),
  S = n("900143"),
  C = n("923337");
let T = [C, m, E, h, g, p, S];

function v(e) {
  let {
    userId: t
  } = e, [n, a] = i.useState(!1);
  return i.useLayoutEffect(() => {
    !n && a(!0)
  }, [n]), (0, l.jsx)("div", {
    className: f.wumpusWrapper,
    children: (0, l.jsxs)("div", {
      className: s(f.wumpus, {
        [f.wumpusShown]: n
      }),
      children: [(0, l.jsx)("img", {
        className: f.wumpusImage,
        alt: c.default.Messages.IMG_ALT_ICON.format({
          name: c.default.Messages.WUMPUS
        }),
        src: function() {
          let e = parseInt(t.slice(-6), 10);
          return T[e % T.length]
        }()
      }), (0, l.jsx)("span", {
        className: f.wumpusTooltip,
        children: c.default.Messages.USER_POPOUT_WUMPUS_TOOLTIP
      })]
    })
  })
}

function I(e) {
  let {
    user: t,
    setNote: n,
    canDM: i,
    onClose: a
  } = e;
  if (t.isNonUserBot() || !i) return null;
  let s = i && (0, u.isNewUser)(t) && !t.bot;
  return (0, l.jsxs)(d.default, {
    className: f.section,
    lastSection: !0,
    children: [s && i ? (0, l.jsx)(v, {
      userId: t.id
    }) : null, i ? (0, l.jsx)(o.default, {
      className: f.messageInputContainer,
      inputClassName: f.messageInput,
      user: t,
      onClose: () => null == a ? void 0 : a(),
      autoFocus: !r.isMobile && !n
    }) : null]
  })
}