"use strict";
a.r(t), a.d(t, {
  default: function() {
    return _
  }
}), a("47120");
var o = a("735250"),
  s = a("470079"),
  n = a("442837"),
  l = a("481060"),
  r = a("607070"),
  i = a("906732"),
  c = a("1585"),
  d = a("530618"),
  u = a("745510"),
  C = a("153124"),
  f = a("232700"),
  x = a("675654"),
  A = a("689938"),
  M = a("291095");
let h = ["#B951FA", "#C749EE", "#4E52FD", "#00DB00", "#FFC900", "#FF7200", "#FF0000"],
  E = [...x.COMMON_CONFETTI_SPRITES, ...Object.values((0, f.getLootboxes)()).map(e => ({
    src: e.image,
    colorize: !1
  }))];

function _(e) {
  let {
    transitionState: t,
    onClose: x
  } = e, _ = (0, C.useUID)(), {
    analyticsLocations: b
  } = (0, i.default)(), {
    confettiCanvas: p
  } = s.useContext(u.ConfettiCannonContext), I = (0, n.useStateFromStores)([r.default], () => r.default.useReducedMotion), g = s.useRef(null);
  return (0, o.jsxs)(l.ModalRoot, {
    transitionState: t,
    "aria-labelledby": _,
    children: [I ? null : (0, o.jsx)(d.default, {
      confettiTarget: g.current,
      confettiCanvas: p,
      sprites: E,
      colors: h
    }), (0, o.jsxs)(l.ModalContent, {
      className: M.content,
      children: [(0, o.jsx)("img", {
        ref: g,
        src: a("207446"),
        className: M.image,
        alt: ""
      }), (0, o.jsx)(l.Heading, {
        className: M.title,
        variant: "heading-xl/extrabold",
        children: A.default.Messages.PACKAGES_CLAIM_HEADER
      }), (0, o.jsx)(l.Text, {
        variant: "text-md/medium",
        color: "header-secondary",
        children: A.default.Messages.PACKAGES_CLAIM_BODY
      })]
    }), (0, o.jsxs)(l.ModalFooter, {
      children: [(0, o.jsx)(l.Button, {
        onClick: () => {
          x(), (0, c.openAvatarDecorationModal)({
            analyticsLocations: b,
            initialSelectedDecorationId: f.LOOTBOX_PRIZE_ID
          })
        },
        children: A.default.Messages.PACKAGES_CLAIM_CONTINUE
      }), (0, o.jsx)(l.Button, {
        look: l.Button.Looks.LINK,
        color: l.Button.Colors.PRIMARY,
        onClick: x,
        children: A.default.Messages.PACKAGES_CLAIM_CANCEL
      })]
    })]
  })
}