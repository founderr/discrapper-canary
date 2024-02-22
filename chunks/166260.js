"use strict";
e.r(s), e.d(s, {
  VibingWumpus: function() {
    return A
  },
  default: function() {
    return _
  }
}), e("222007");
var n = e("37983"),
  i = e("884691"),
  a = e("414456"),
  u = e.n(a),
  r = e("65597"),
  o = e("283322"),
  l = e("473109"),
  c = e("77078"),
  d = e("206230"),
  f = e("491605"),
  I = e("559922"),
  N = e("782340"),
  h = e("509728"),
  p = e("932379"),
  M = e("340419");

function A(t) {
  let {
    onClose: s
  } = t, [a, A] = i.useState(!1), _ = (0, r.default)([d.default], () => d.default.useReducedMotion);
  i.useEffect(() => ((0, I.playVibingWumpusMusic)(), () => {
    (0, I.stopVibingWumpusMusic)()
  }), []);
  async function g() {
    let {
      default: t
    } = await e.el("926299").then(e.t.bind(e, "926299", 19));
    return t
  }
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: h.ringContainer,
      children: (0, n.jsx)("img", {
        src: M,
        alt: "",
        className: h.ringArt
      })
    }), (0, n.jsx)(f.default, {
      importData: g,
      shouldAnimate: !_,
      className: h.wumpus,
      pauseAtFrame: 200
    }), (0, n.jsx)(c.ModalCloseButton, {
      onClick: s,
      className: h.closeButton
    }), (0, n.jsxs)(c.ModalContent, {
      className: u(p.body, h.body),
      children: [(0, n.jsxs)("div", {
        className: u(p.textContainer, h.textContainer),
        children: [(0, n.jsx)(c.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: N.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_HEADER
        }), (0, n.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: N.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_DESCRIPTION
        })]
      }), (0, n.jsxs)("div", {
        className: h.buttonContainer,
        children: [(0, n.jsx)(c.Button, {
          fullWidth: !0,
          color: c.Button.Colors.BRAND,
          size: c.Button.Sizes.MEDIUM,
          onClick: s,
          children: N.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_RETURN
        }), (0, n.jsxs)(c.Button, {
          color: c.Button.Colors.TRANSPARENT,
          look: c.Button.Looks.OUTLINED,
          size: c.Button.Sizes.MEDIUM,
          onClick: () => {
            a ? (0, I.playVibingWumpusMusic)() : (0, I.stopVibingWumpusMusic)(), A(!a)
          },
          fullWidth: !0,
          innerClassName: h.mute,
          children: [a ? (0, n.jsx)(l.MusicSlashIcon, {
            width: 20,
            height: 20
          }) : (0, n.jsx)(o.MusicIcon, {
            width: 20,
            height: 20
          }), a ? N.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_UNMUTE : N.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_MUTE]
        })]
      })]
    })]
  })
}
var _ = t => {
  let {
    onClose: s,
    transitionState: e
  } = t;
  return (0, n.jsx)(c.ModalRoot, {
    transitionState: e,
    children: (0, n.jsx)(A, {
      onClose: s
    })
  })
}