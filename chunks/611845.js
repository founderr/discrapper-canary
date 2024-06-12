"use strict";
n.r(t), n.d(t, {
  StreamButtonDemoPopout: function() {
    return g
  }
}), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("120356"),
  i = n.n(s),
  r = n("481060"),
  o = n("570140"),
  u = n("170671"),
  d = n("937995"),
  c = n("465670"),
  f = n("153850"),
  h = n("689938"),
  m = n("656743"),
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
        children: (0, a.jsx)(r.Image, {
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
          className: m.closeIcon,
          color: "white"
        })
      })]
    }), (0, a.jsx)("div", {
      className: m.textContainer,
      children: (0, a.jsx)(r.Text, {
        variant: "text-md/semibold",
        color: "always-white",
        children: h.default.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_UPSELL_TOOLTIP
      })
    }), (0, a.jsxs)("div", {
      className: m.nitroTextAndBadge,
      children: [(0, a.jsx)(u.default, {
        isSelected: !0
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/medium",
        color: "always-white",
        children: h.default.Messages.POWERED_BY_NITRO
      })]
    })]
  })
}

function g(e) {
  let {
    buttonRef: t,
    dismissed: n,
    onDismiss: s
  } = e, i = l.useContext(d.IdleStateContext), [u, c] = l.useState(""), [h, m] = l.useState(!1);

  function p(e) {
    var t;
    let {
      settings: n
    } = e, a = n.callHeaderHeight;
    c(null !== (t = null == a ? void 0 : a.toString()) && void 0 !== t ? t : ""), m(void 0 !== a && a < 300)
  }
  return (l.useEffect(() => (o.default.subscribe("UNSYNCED_USER_SETTINGS_UPDATE", p), () => {
    o.default.unsubscribe("UNSYNCED_USER_SETTINGS_UPDATE", p)
  }), []), (null == t ? void 0 : t.current) == null) ? null : (0, a.jsx)(r.Layer, {
    layerContext: f.appLayerContext,
    children: (0, a.jsx)(r.ReferencePositionLayer, {
      targetRef: t,
      position: "top",
      align: "center",
      spacing: 0,
      nudgeAlignIntoViewport: !1,
      positionKey: u,
      children: () => (0, a.jsx)(E, {
        hidden: h || i || n,
        onDismiss: s
      })
    })
  })
}