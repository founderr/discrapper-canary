"use strict";
n.r(t), n.d(t, {
  StreamButtonDemoPopout: function() {
    return C
  }
});
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("481060"),
  o = n("170671"),
  u = n("937995"),
  d = n("332475"),
  c = n("465670"),
  f = n("153850"),
  h = n("689938"),
  m = n("324464"),
  p = n("946790");

function E(e) {
  let {
    hidden: t,
    onDismiss: n
  } = e;
  return (0, a.jsxs)("div", {
    className: i()(m.demoCta, {
      [m.hidden]: t
    }),
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)("div", {
        className: m.wumpusContainer,
        children: (0, a.jsx)(d.default, {
          src: p,
          width: 72,
          height: 52,
          zoomable: !1
        })
      }), (0, a.jsx)(r.Button, {
        "aria-label": h.default.Messages.CLOSE,
        look: r.Button.Looks.BLANK,
        size: r.Button.Sizes.NONE,
        onClick: () => n(),
        className: m.closeButton,
        children: (0, a.jsx)(c.default, {
          width: 24,
          height: 24,
          className: m.closeIcon
        })
      })]
    }), (0, a.jsx)("div", {
      className: m.textContainer,
      children: (0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        children: h.default.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_UPSELL_TOOLTIP
      })
    }), (0, a.jsxs)("div", {
      className: m.nitroTextAndBadge,
      children: [(0, a.jsx)(o.default, {
        isSelected: !0
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/medium",
        children: h.default.Messages.POWERED_BY_NITRO
      })]
    })]
  })
}

function C(e) {
  let {
    buttonRef: t,
    dismissed: n,
    onDismiss: s
  } = e, i = l.useContext(u.IdleStateContext);
  return (null == t ? void 0 : t.current) == null ? null : (0, a.jsx)(r.Layer, {
    layerContext: f.appLayerContext,
    children: (0, a.jsx)(r.ReferencePositionLayer, {
      reference: t,
      position: "top",
      align: "center",
      children: () => (0, a.jsx)(E, {
        hidden: i || n,
        onDismiss: s
      })
    })
  })
}