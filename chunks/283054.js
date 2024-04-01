"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
}), a("47120");
var n = a("735250"),
  o = a("470079"),
  s = a("442837"),
  l = a("481060"),
  r = a("809206"),
  c = a("607070"),
  d = a("906732"),
  i = a("1585"),
  u = a("223143"),
  C = a("530618"),
  f = a("745510"),
  A = a("164946"),
  g = a("25990"),
  x = a("153124"),
  h = a("232700"),
  M = a("675654"),
  p = a("689938"),
  E = a("291095");
let _ = ["#B951FA", "#C749EE", "#4E52FD", "#00DB00", "#FFC900", "#FF7200", "#FF0000"],
  b = [...M.COMMON_CONFETTI_SPRITES, ...Object.values((0, h.getLootboxes)()).map(e => ({
    src: e.image,
    colorize: !1
  }))];

function I(e) {
  let {
    transitionState: t,
    onClose: M
  } = e, I = (0, x.useUID)(), {
    analyticsLocations: F
  } = (0, d.default)(), {
    confettiCanvas: m
  } = o.useContext(f.ConfettiCannonContext), j = (0, s.useStateFromStores)([c.default], () => c.default.useReducedMotion), S = o.useRef(null);
  return (0, u.default)(), (0, n.jsxs)(l.ModalRoot, {
    transitionState: t,
    "aria-labelledby": I,
    children: [j ? null : (0, n.jsx)(C.default, {
      confettiTarget: S.current,
      confettiCanvas: m,
      sprites: b,
      colors: _
    }), (0, n.jsxs)(l.ModalContent, {
      className: E.content,
      children: [(0, n.jsx)("img", {
        ref: S,
        src: a("207446"),
        className: E.image,
        alt: ""
      }), (0, n.jsx)(l.Heading, {
        className: E.title,
        variant: "heading-xl/extrabold",
        children: p.default.Messages.PACKAGES_CLAIM_HEADER
      }), (0, n.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: p.default.Messages.PACKAGES_CLAIM_BODY
      })]
    }), (0, n.jsxs)(l.ModalFooter, {
      children: [(0, n.jsx)(l.Button, {
        onClick: () => {
          M(), (0, i.openAvatarDecorationModal)({
            analyticsLocations: F,
            initialSelectedDecorationId: h.LOOTBOX_PRIZE_ID,
            onClose: () => {
              let e = g.default.getAllPending(),
                t = (0, A.getAccountUpdateForUpdateRequest)(e);
              (0, r.saveAccountChanges)(t), (0, r.resetPendingAccountChanges)()
            }
          })
        },
        children: p.default.Messages.PACKAGES_CLAIM_CONTINUE
      }), (0, n.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: M,
        children: p.default.Messages.PACKAGES_CLAIM_CANCEL
      })]
    })]
  })
}