n.d(t, {
  $: function() {
return p;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(481060),
  r = n(170671),
  o = n(738672),
  c = n(689938),
  d = n(383382),
  u = n(946790);

function h(e) {
  let {
hidden: t,
onDismiss: n
  } = e;
  return (0, i.jsxs)('div', {
className: s()(d.demoCta, {
  [d.hidden]: t
}),
children: [
  (0, i.jsxs)('div', {
    children: [
      (0, i.jsx)('div', {
        className: d.wumpusContainer,
        children: (0, i.jsx)(l.Image, {
          src: u,
          width: 72,
          height: 52,
          zoomable: !1
        })
      }),
      (0, i.jsx)(l.Button, {
        'aria-label': c.Z.Messages.CLOSE,
        look: l.Button.Looks.BLANK,
        size: l.Button.Sizes.NONE,
        onClick: () => n(),
        className: d.closeButton,
        children: (0, i.jsx)(l.CloseSmallIcon, {
          size: 'md',
          className: d.closeIcon,
          color: 'white'
        })
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: d.textContainer,
    children: (0, i.jsx)(l.Text, {
      variant: 'text-md/semibold',
      color: 'always-white',
      children: c.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_UPSELL_TOOLTIP
    })
  }),
  (0, i.jsxs)('div', {
    className: d.nitroTextAndBadge,
    children: [
      (0, i.jsx)(r.Z, {
        isSelected: !0
      }),
      (0, i.jsx)(l.Text, {
        variant: 'text-xs/medium',
        color: 'always-white',
        children: c.Z.Messages.POWERED_BY_NITRO
      })
    ]
  })
]
  });
}

function p(e) {
  return (0, i.jsx)(o.h, {
...e,
renderComponent: e => (0, i.jsx)(h, {
  ...e
})
  });
}