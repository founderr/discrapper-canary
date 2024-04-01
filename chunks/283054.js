"use strict";
a.r(t), a.d(t, {
  default: function() {
    return b
  }
}), a("47120");
var o = a("735250"),
  s = a("470079"),
  n = a("442837"),
  l = a("481060"),
  r = a("607070"),
  i = a("906732"),
  d = a("1585"),
  c = a("223143"),
  u = a("530618"),
  C = a("745510"),
  f = a("153124"),
  x = a("232700"),
  A = a("675654"),
  M = a("689938"),
  h = a("291095");
let E = ["#B951FA", "#C749EE", "#4E52FD", "#00DB00", "#FFC900", "#FF7200", "#FF0000"],
  _ = [...A.COMMON_CONFETTI_SPRITES, ...Object.values((0, x.getLootboxes)()).map(e => ({
    src: e.image,
    colorize: !1
  }))];

function b(e) {
  let {
    transitionState: t,
    onClose: A
  } = e, b = (0, f.useUID)(), {
    analyticsLocations: p
  } = (0, i.default)(), {
    confettiCanvas: I
  } = s.useContext(C.ConfettiCannonContext), g = (0, n.useStateFromStores)([r.default], () => r.default.useReducedMotion), m = s.useRef(null);
  return (0, c.default)(), (0, o.jsxs)(l.ModalRoot, {
    transitionState: t,
    "aria-labelledby": b,
    children: [g ? null : (0, o.jsx)(u.default, {
      confettiTarget: m.current,
      confettiCanvas: I,
      sprites: _,
      colors: E
    }), (0, o.jsxs)(l.ModalContent, {
      className: h.content,
      children: [(0, o.jsx)("img", {
        ref: m,
        src: a("207446"),
        className: h.image,
        alt: ""
      }), (0, o.jsx)(l.Heading, {
        className: h.title,
        variant: "heading-xl/extrabold",
        children: M.default.Messages.PACKAGES_CLAIM_HEADER
      }), (0, o.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: M.default.Messages.PACKAGES_CLAIM_BODY
      })]
    }), (0, o.jsxs)(l.ModalFooter, {
      children: [(0, o.jsx)(l.Button, {
        onClick: () => {
          A(), (0, d.openAvatarDecorationModal)({
            analyticsLocations: p,
            initialSelectedDecorationId: x.LOOTBOX_PRIZE_ID
          })
        },
        children: M.default.Messages.PACKAGES_CLAIM_CONTINUE
      }), (0, o.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: A,
        children: M.default.Messages.PACKAGES_CLAIM_CANCEL
      })]
    })]
  })
}