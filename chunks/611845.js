n.d(t, {
  $: function() {
    return m
  }
});
var l = n(735250);
n(470079);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  r = n(170671),
  o = n(738672),
  c = n(689938),
  u = n(788323),
  d = n(946790);

function h(e) {
  let {
    hidden: t,
    onDismiss: n
  } = e;
  return (0, l.jsxs)("div", {
    className: s()(u.demoCta, {
      [u.hidden]: t
    }),
    children: [(0, l.jsxs)("div", {
      children: [(0, l.jsx)("div", {
        className: u.wumpusContainer,
        children: (0, l.jsx)(a.Image, {
          src: d,
          width: 72,
          height: 52,
          zoomable: !1
        })
      }), (0, l.jsx)(a.Button, {
        "aria-label": c.Z.Messages.CLOSE,
        look: a.Button.Looks.BLANK,
        size: a.Button.Sizes.NONE,
        onClick: () => n(),
        className: u.closeButton,
        children: (0, l.jsx)(a.CloseSmallIcon, {
          size: "md",
          className: u.closeIcon,
          color: "white"
        })
      })]
    }), (0, l.jsx)("div", {
      className: u.textContainer,
      children: (0, l.jsx)(a.Text, {
        variant: "text-md/semibold",
        color: "always-white",
        children: c.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_UPSELL_TOOLTIP
      })
    }), (0, l.jsxs)("div", {
      className: u.nitroTextAndBadge,
      children: [(0, l.jsx)(r.Z, {
        isSelected: !0
      }), (0, l.jsx)(a.Text, {
        variant: "text-xs/medium",
        color: "always-white",
        children: c.Z.Messages.POWERED_BY_NITRO
      })]
    })]
  })
}

function m(e) {
  return (0, l.jsx)(o.h, {
    ...e,
    renderComponent: e => (0, l.jsx)(h, {
      ...e
    })
  })
}