"use strict";
e.r(t), e.d(t, {
  VibingWumpus: function() {
    return p
  },
  default: function() {
    return f
  }
}), e("222007");
var n = e("37983"),
  i = e("884691"),
  a = e("414456"),
  u = e.n(a),
  r = e("283322"),
  o = e("473109"),
  l = e("77078"),
  c = e("559922"),
  d = e("782340"),
  I = e("509728"),
  N = e("932379");

function p(s) {
  let {
    onClose: t
  } = s, [e, a] = i.useState(!1);
  return i.useEffect(() => ((0, c.playVibingWumpusMusic)(), () => {
    (0, c.stopVibingWumpusMusic)()
  }), []), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("img", {
      src: "https://cdn.discordapp.com/assets/vibing-wumpus.png",
      alt: d.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_ALT,
      className: I.wumpus
    }), (0, n.jsx)(l.ModalCloseButton, {
      onClick: t,
      className: I.closeButton
    }), (0, n.jsxs)(l.ModalContent, {
      className: u(N.body, I.body),
      children: [(0, n.jsxs)("div", {
        className: N.textContainer,
        children: [(0, n.jsx)(l.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: d.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_HEADER
        }), (0, n.jsx)(l.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: d.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_DESCRIPTION
        })]
      }), (0, n.jsxs)("div", {
        className: I.buttonContainer,
        children: [(0, n.jsx)(l.Button, {
          fullWidth: !0,
          color: l.Button.Colors.BRAND,
          size: l.Button.Sizes.MEDIUM,
          onClick: t,
          children: d.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_RETURN
        }), (0, n.jsxs)(l.Button, {
          color: l.Button.Colors.TRANSPARENT,
          size: l.Button.Sizes.MEDIUM,
          onClick: () => {
            e ? (0, c.playVibingWumpusMusic)() : (0, c.stopVibingWumpusMusic)(), a(!e)
          },
          fullWidth: !0,
          innerClassName: I.mute,
          children: [e ? (0, n.jsx)(o.MusicSlashIcon, {
            width: 20,
            height: 20
          }) : (0, n.jsx)(r.MusicIcon, {
            width: 20,
            height: 20
          }), e ? d.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_UNMUTE : d.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_MUTE]
        })]
      })]
    })]
  })
}
var f = s => {
  let {
    onClose: t,
    transitionState: e
  } = s;
  return (0, n.jsx)(l.ModalRoot, {
    transitionState: e,
    children: (0, n.jsx)(p, {
      onClose: t
    })
  })
}