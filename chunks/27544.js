t.d(s, {
  Z: function() {
    return g
  }
}), t(47120);
var l = t(735250),
  n = t(470079),
  i = t(748780),
  a = t(442837),
  r = t(481060),
  o = t(741361),
  d = t(856606),
  c = t(277053),
  u = t(259580),
  h = t(689938),
  m = t(50204);

function g() {
  let e = (0, a.e7)([c.Z], () => c.Z.advancedMode),
    [s] = n.useState(new i.Z.Value(e ? 1 : 0));
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(r.FormDivider, {
      className: m.advancedModeDivider
    }), (0, l.jsx)(r.HeadingLevel, {
      component: (0, l.jsx)(r.Button, {
        look: r.Button.Looks.BLANK,
        color: r.Button.Colors.TRANSPARENT,
        onClick: function() {
          e ? i.Z.timing(s, {
            toValue: 0,
            duration: 250
          }).start(() => {
            (0, o.d$)(!1)
          }) : ((0, o.d$)(!0), i.Z.timing(s, {
            toValue: 1,
            duration: 250
          }).start())
        },
        children: (0, l.jsxs)(r.FormTitle, {
          tag: "h1",
          className: m.advancedTitle,
          children: [h.Z.Messages.CHANNEL_PERMISSIONS_ADVANCED_PERMISSIONS, (0, l.jsx)(u.Z, {
            expanded: e,
            className: m.titleCaret,
            width: 20,
            height: 20
          })]
        })
      }),
      children: e && (0, l.jsx)(i.Z.div, {
        style: {
          opacity: s
        },
        children: (0, l.jsx)(d.Z, {})
      })
    })]
  })
}