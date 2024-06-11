"use strict";
e.r(n), e.d(n, {
  VibingWumpus: function() {
    return m
  }
}), e("47120");
var i = e("735250"),
  s = e("470079"),
  a = e("120356"),
  u = e.n(a),
  r = e("399606"),
  o = e("481060"),
  c = e("607070"),
  l = e("786048"),
  d = e("897353"),
  p = e("626135"),
  A = e("832239"),
  I = e("407383"),
  _ = e("981631"),
  N = e("689938"),
  f = e("959306"),
  P = e("418586"),
  S = e("617921");

function m(t) {
  let {
    onClose: n,
    source: a = I.VibingWumpusSource.INAPPROPRIATE_CONVERSATION
  } = t, m = (0, r.useStateFromStores)([c.default], () => c.default.useReducedMotion), [E, M] = s.useState(!1);
  s.useEffect(() => {
    let t = new Date;
    return p.default.track(_.AnalyticEvents.VIBING_WUMPUS_VIEWED, {
      source: a
    }), (0, A.playVibingWumpusMusic)(), () => {
      p.default.track(_.AnalyticEvents.VIBING_WUMPUS_CLOSED, {
        duration_open_ms: new Date().getTime() - t.getTime(),
        source: a
      }), (0, A.stopVibingWumpusMusic)()
    }
  }, [a]);
  let V = () => {
    E ? ((0, A.playVibingWumpusMusic)(), p.default.track(_.AnalyticEvents.VIBING_WUMPUS_ACTION, {
      action: I.VibingWumpusAction.PLAY
    })) : ((0, A.pauseVibingWumpusMusic)(), p.default.track(_.AnalyticEvents.VIBING_WUMPUS_ACTION, {
      action: I.VibingWumpusAction.PAUSE
    })), M(!E)
  };
  async function g() {
    let {
      default: t
    } = await e.e("29641").then(e.t.bind(e, "937359", 19));
    return t
  }
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: f.ringContainer,
      children: (0, i.jsx)("img", {
        src: S,
        alt: "",
        className: f.__invalid_ringArt
      })
    }), (0, i.jsx)(o.LottieAnimation, {
      importData: g,
      shouldAnimate: !E && !m,
      className: f.wumpus,
      pauseAtFrame: m ? 200 : void 0
    }), (0, i.jsx)(o.Tooltip, {
      text: E ? N.default.Messages.PLAY : N.default.Messages.PAUSE,
      position: "top",
      "aria-label": E ? N.default.Messages.PLAY : N.default.Messages.PAUSE,
      children: t => (0, i.jsx)(o.Clickable, {
        ...t,
        onClick: V,
        className: f.iconButton,
        children: E ? (0, i.jsx)(d.default, {
          className: f.icon
        }) : (0, i.jsx)(l.default, {
          className: f.icon
        })
      })
    }), (0, i.jsxs)(o.ModalContent, {
      className: u()(P.body, f.body),
      children: [(0, i.jsxs)("div", {
        className: u()(P.textContainer, f.textContainer),
        children: [(0, i.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: N.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_HEADER
        }), (0, i.jsx)(o.Text, {
          variant: "text-md/normal",
          color: "header-secondary",
          children: N.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_DESCRIPTION
        })]
      }), (0, i.jsx)("div", {
        className: f.buttonContainer,
        children: (0, i.jsx)(o.Button, {
          fullWidth: !0,
          color: o.Button.Colors.BRAND,
          size: o.Button.Sizes.MEDIUM,
          onClick: () => {
            n(), p.default.track(_.AnalyticEvents.VIBING_WUMPUS_ACTION, {
              action: I.VibingWumpusAction.BACK_TO_CONVERSATION
            })
          },
          children: N.default.Messages.INAPPROPRIATE_CONVERSATION_VIBING_WUMPUS_RETURN
        })
      })]
    })]
  })
}
n.default = t => {
  let {
    onClose: n,
    transitionState: e
  } = t;
  return (0, i.jsx)(o.ModalRoot, {
    transitionState: e,
    children: (0, i.jsx)(m, {
      onClose: n
    })
  })
}