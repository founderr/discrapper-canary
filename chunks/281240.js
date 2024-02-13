"use strict";
e.r(t), e.d(t, {
  default: function() {
    return h
  }
}), e("222007");
var n = e("37983"),
  i = e("884691"),
  a = e("414456"),
  u = e.n(a),
  l = e("283322"),
  c = e("473109"),
  r = e("77078"),
  o = e("559922"),
  d = e("782340"),
  I = e("725803"),
  N = e("813916");

function h(s) {
  let {
    onClose: t
  } = s, [e, a] = i.useState(!1);
  return i.useEffect(() => ((0, o.playVibingWumpusMusic)(), () => {
    (0, o.stopVibingWumpusMusic)()
  }), []), (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("img", {
      src: "https://cdn.discordapp.com/assets/vibing-wumpus.png",
      alt: d.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_ALT,
      className: N.wumpus
    }), (0, n.jsx)(r.ModalCloseButton, {
      onClick: t,
      className: N.closeButton
    }), (0, n.jsxs)(r.ModalContent, {
      className: u(I.body, N.body),
      children: [(0, n.jsxs)("div", {
        className: I.textContainer,
        children: [(0, n.jsx)(r.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: d.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_HEADER
        }), (0, n.jsx)(r.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: d.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_DESCRIPTION
        })]
      }), (0, n.jsxs)("div", {
        className: N.buttonContainer,
        children: [(0, n.jsx)(r.Button, {
          fullWidth: !0,
          color: r.Button.Colors.BRAND,
          size: r.Button.Sizes.MEDIUM,
          onClick: t,
          children: d.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_RETURN
        }), (0, n.jsxs)(r.Button, {
          color: r.Button.Colors.TRANSPARENT,
          size: r.Button.Sizes.MEDIUM,
          onClick: () => {
            e ? (0, o.playVibingWumpusMusic)() : (0, o.stopVibingWumpusMusic)(), a(!e)
          },
          fullWidth: !0,
          innerClassName: N.mute,
          children: [e ? (0, n.jsx)(c.MusicSlashIcon, {
            width: 20,
            height: 20
          }) : (0, n.jsx)(l.MusicIcon, {
            width: 20,
            height: 20
          }), e ? d.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_UNMUTE : d.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_MUTE]
        })]
      })]
    })]
  })
}