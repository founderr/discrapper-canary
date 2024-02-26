"use strict";
s.r(e), s.d(e, {
  VibingWumpus: function() {
    return h
  },
  default: function() {
    return _
  }
}), s("222007");
var n = s("37983"),
  a = s("884691"),
  i = s("414456"),
  u = s.n(i),
  r = s("65597"),
  o = s("77078"),
  l = s("206230"),
  c = s("491605"),
  d = s("830837"),
  p = s("132755"),
  f = s("559922"),
  N = s("782340"),
  m = s("509728"),
  I = s("932379"),
  M = s("340419");

function h(t) {
  let {
    onClose: e
  } = t, i = (0, r.default)([l.default], () => l.default.useReducedMotion), [h, _] = a.useState(!1);
  a.useEffect(() => ((0, f.playVibingWumpusMusic)(), () => {
    (0, f.stopVibingWumpusMusic)()
  }), []);
  let x = () => {
    h ? (0, f.playVibingWumpusMusic)() : (0, f.stopVibingWumpusMusic)(), _(!h)
  };
  async function A() {
    let {
      default: t
    } = await s.el("926299").then(s.t.bind(s, "926299", 19));
    return t
  }
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)("div", {
      className: m.ringContainer,
      children: (0, n.jsx)("img", {
        src: M,
        alt: "",
        className: m.ringArt
      })
    }), (0, n.jsx)(c.default, {
      importData: A,
      shouldAnimate: !h && !i,
      className: m.wumpus,
      pauseAtFrame: i ? 200 : void 0
    }), (0, n.jsx)(o.Tooltip, {
      text: h ? N.default.Messages.PLAY : N.default.Messages.PAUSE,
      position: "top",
      "aria-label": h ? N.default.Messages.PLAY : N.default.Messages.PAUSE,
      children: t => (0, n.jsx)(o.Clickable, {
        ...t,
        onClick: x,
        className: m.iconButton,
        children: h ? (0, n.jsx)(p.default, {
          className: m.icon
        }) : (0, n.jsx)(d.default, {
          className: m.icon
        })
      })
    }), (0, n.jsxs)(o.ModalContent, {
      className: u(I.body, m.body),
      children: [(0, n.jsxs)("div", {
        className: u(I.textContainer, m.textContainer),
        children: [(0, n.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: N.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_HEADER
        }), (0, n.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: N.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_DESCRIPTION
        })]
      }), (0, n.jsx)("div", {
        className: m.buttonContainer,
        children: (0, n.jsx)(o.Button, {
          fullWidth: !0,
          color: o.Button.Colors.BRAND,
          size: o.Button.Sizes.MEDIUM,
          onClick: e,
          children: N.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_RETURN
        })
      })]
    })]
  })
}
var _ = t => {
  let {
    onClose: e,
    transitionState: s
  } = t;
  return (0, n.jsx)(o.ModalRoot, {
    transitionState: s,
    children: (0, n.jsx)(h, {
      onClose: e
    })
  })
}