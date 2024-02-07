"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
}), l("222007");
var n = l("37983"),
  a = l("884691"),
  s = l("414456"),
  i = l.n(s),
  r = l("394846"),
  o = l("77078"),
  u = l("450911"),
  d = l("36341"),
  c = l("109264"),
  f = l("158998"),
  m = l("777003"),
  p = l("782340"),
  h = l("242379"),
  T = l("107680"),
  E = l("379539"),
  S = l("714073"),
  _ = l("980923"),
  g = l("779585"),
  A = l("900143"),
  I = l("923337");
let v = [I, T, _, S, g, E, A];

function N(e) {
  let {
    userId: t
  } = e, [l, s] = a.useState(!1);
  return a.useLayoutEffect(() => {
    !l && s(!0)
  }, [l]), (0, n.jsx)("div", {
    className: h.wumpusWrapper,
    children: (0, n.jsxs)("div", {
      className: i(h.wumpus, {
        [h.wumpusShown]: l
      }),
      children: [(0, n.jsx)("img", {
        className: h.wumpusImage,
        alt: p.default.Messages.IMG_ALT_ICON.format({
          name: p.default.Messages.WUMPUS
        }),
        src: function() {
          let e = parseInt(t.slice(-6), 10);
          return v[e % v.length]
        }()
      }), (0, n.jsx)("span", {
        className: h.wumpusTooltip,
        children: p.default.Messages.USER_POPOUT_WUMPUS_TOOLTIP
      })]
    })
  })
}

function C(e) {
  let {
    user: t,
    setNote: l,
    canDM: a,
    onClose: s,
    inClydeProfilesExperiment: i = !1
  } = e;
  if (t.isNonUserBot() && !t.isClyde() || t.isClyde() && i || !a) return null;
  let T = a && (0, f.isNewUser)(t) && !t.bot;
  return (0, n.jsxs)(m.default, {
    className: h.section,
    lastSection: !0,
    children: [T && a ? (0, n.jsx)(N, {
      userId: t.id
    }) : null, a && t.isClyde() ? (0, n.jsxs)(o.Button, {
      className: h.messageClydeButton,
      innerClassName: h.messageClydeButtonInner,
      onClick: () => {
        u.default.openPrivateChannel(t.id)
      },
      fullWidth: !0,
      look: o.ButtonLooks.INVERTED,
      children: [(0, n.jsx)(c.default, {
        width: 16,
        height: 16,
        className: h.messageClydeButtonIcon
      }), p.default.Messages.CLYDE_SEND_MESSAGE]
    }) : null, a && !t.isClyde() ? (0, n.jsx)(d.default, {
      className: h.messageInputContainer,
      inputClassName: h.messageInput,
      user: t,
      onClose: () => null == s ? void 0 : s(),
      autoFocus: !r.isMobile && !l
    }) : null]
  })
}