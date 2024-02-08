"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("394846"),
  o = n("77078"),
  u = n("450911"),
  d = n("36341"),
  c = n("109264"),
  f = n("158998"),
  p = n("777003"),
  m = n("782340"),
  h = n("242379"),
  E = n("107680"),
  S = n("379539"),
  g = n("714073"),
  C = n("980923"),
  T = n("779585"),
  v = n("900143"),
  I = n("923337");
let _ = [I, E, C, g, T, S, v];

function y(e) {
  let {
    userId: t
  } = e, [n, a] = i.useState(!1);
  return i.useLayoutEffect(() => {
    !n && a(!0)
  }, [n]), (0, l.jsx)("div", {
    className: h.wumpusWrapper,
    children: (0, l.jsxs)("div", {
      className: s(h.wumpus, {
        [h.wumpusShown]: n
      }),
      children: [(0, l.jsx)("img", {
        className: h.wumpusImage,
        alt: m.default.Messages.IMG_ALT_ICON.format({
          name: m.default.Messages.WUMPUS
        }),
        src: function() {
          let e = parseInt(t.slice(-6), 10);
          return _[e % _.length]
        }()
      }), (0, l.jsx)("span", {
        className: h.wumpusTooltip,
        children: m.default.Messages.USER_POPOUT_WUMPUS_TOOLTIP
      })]
    })
  })
}

function A(e) {
  let {
    user: t,
    setNote: n,
    canDM: i,
    onClose: a,
    inClydeProfilesExperiment: s = !1
  } = e;
  if (t.isNonUserBot() && !t.isClyde() || t.isClyde() && s || !i) return null;
  let E = i && (0, f.isNewUser)(t) && !t.bot;
  return (0, l.jsxs)(p.default, {
    className: h.section,
    lastSection: !0,
    children: [E && i ? (0, l.jsx)(y, {
      userId: t.id
    }) : null, i && t.isClyde() ? (0, l.jsxs)(o.Button, {
      className: h.messageClydeButton,
      innerClassName: h.messageClydeButtonInner,
      onClick: () => {
        u.default.openPrivateChannel(t.id)
      },
      fullWidth: !0,
      look: o.ButtonLooks.INVERTED,
      children: [(0, l.jsx)(c.default, {
        width: 16,
        height: 16,
        className: h.messageClydeButtonIcon
      }), m.default.Messages.CLYDE_SEND_MESSAGE]
    }) : null, i && !t.isClyde() ? (0, l.jsx)(d.default, {
      className: h.messageInputContainer,
      inputClassName: h.messageInput,
      user: t,
      onClose: () => null == a ? void 0 : a(),
      autoFocus: !r.isMobile && !n
    }) : null]
  })
}