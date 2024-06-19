n.r(e), n.d(e, {
  VibingWumpus: function() {
    return f
  }
}), n(47120);
var a = n(735250),
  r = n(470079),
  s = n(120356),
  i = n.n(s),
  o = n(399606),
  c = n(481060),
  u = n(607070),
  l = n(626135),
  I = n(832239),
  d = n(407383),
  _ = n(981631),
  N = n(689938),
  A = n(129189),
  P = n(897583),
  S = n(617921);

function f(t) {
  let {
    onClose: e,
    source: s = d.I.INAPPROPRIATE_CONVERSATION
  } = t, f = (0, o.e7)([u.Z], () => u.Z.useReducedMotion), [M, p] = r.useState(!1);
  r.useEffect(() => {
    let t = new Date;
    return l.default.track(_.rMx.VIBING_WUMPUS_VIEWED, {
      source: s
    }), (0, I.JO)(), () => {
      l.default.track(_.rMx.VIBING_WUMPUS_CLOSED, {
        duration_open_ms: new Date().getTime() - t.getTime(),
        source: s
      }), (0, I.zu)()
    }
  }, [s]);
  let E = () => {
    M ? ((0, I.JO)(), l.default.track(_.rMx.VIBING_WUMPUS_ACTION, {
      action: d.G.PLAY
    })) : ((0, I.hW)(), l.default.track(_.rMx.VIBING_WUMPUS_ACTION, {
      action: d.G.PAUSE
    })), p(!M)
  };
  async function U() {
    let {
      default: t
    } = await n.e("29641").then(n.t.bind(n, 937359, 19));
    return t
  }
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)("div", {
      className: A.ringContainer,
      children: (0, a.jsx)("img", {
        src: S,
        alt: "",
        className: A.__invalid_ringArt
      })
    }), (0, a.jsx)(c.LottieAnimation, {
      importData: U,
      shouldAnimate: !M && !f,
      className: A.wumpus,
      pauseAtFrame: f ? 200 : void 0
    }), (0, a.jsx)(c.Tooltip, {
      text: M ? N.Z.Messages.PLAY : N.Z.Messages.PAUSE,
      position: "top",
      "aria-label": M ? N.Z.Messages.PLAY : N.Z.Messages.PAUSE,
      children: t => (0, a.jsx)(c.Clickable, {
        ...t,
        onClick: E,
        className: A.iconButton,
        children: M ? (0, a.jsx)(c.PlayIcon, {
          size: "xs",
          color: "currentColor",
          className: A.icon
        }) : (0, a.jsx)(c.PauseIcon, {
          size: "xs",
          color: "currentColor",
          className: A.icon
        })
      })
    }), (0, a.jsxs)(c.ModalContent, {
      className: i()(P.body, A.body),
      children: [(0, a.jsxs)("div", {
        className: i()(P.textContainer, A.textContainer),
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: N.Z.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_HEADER
        }), (0, a.jsx)(c.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: N.Z.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_DESCRIPTION
        })]
      }), (0, a.jsx)("div", {
        className: A.buttonContainer,
        children: (0, a.jsx)(c.Button, {
          fullWidth: !0,
          color: c.Button.Colors.BRAND,
          size: c.Button.Sizes.MEDIUM,
          onClick: () => {
            e(), l.default.track(_.rMx.VIBING_WUMPUS_ACTION, {
              action: d.G.BACK_TO_CONVERSATION
            })
          },
          children: N.Z.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_RETURN
        })
      })]
    })]
  })
}
e.default = t => {
  let {
    onClose: e,
    transitionState: n
  } = t;
  return (0, a.jsx)(c.ModalRoot, {
    transitionState: n,
    children: (0, a.jsx)(f, {
      onClose: e
    })
  })
}