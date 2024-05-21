"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
}), l("47120");
var s = l("735250"),
  a = l("470079"),
  n = l("748780"),
  i = l("442837"),
  r = l("481060"),
  o = l("741361"),
  d = l("856606"),
  u = l("277053"),
  c = l("259580"),
  h = l("689938"),
  m = l("62403");

function f() {
  let e = (0, i.useStateFromStores)([u.default], () => u.default.advancedMode),
    [t] = a.useState(new n.default.Value(e ? 1 : 0));
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(r.FormDivider, {
      className: m.advancedModeDivider
    }), (0, s.jsx)(r.HeadingLevel, {
      component: (0, s.jsx)(r.Button, {
        look: r.Button.Looks.BLANK,
        color: r.Button.Colors.TRANSPARENT,
        onClick: function() {
          e ? n.default.timing(t, {
            toValue: 0,
            duration: 250
          }).start(() => {
            (0, o.setAdvancedMode)(!1)
          }) : ((0, o.setAdvancedMode)(!0), n.default.timing(t, {
            toValue: 1,
            duration: 250
          }).start())
        },
        children: (0, s.jsxs)(r.FormTitle, {
          tag: "h1",
          className: m.advancedTitle,
          children: [h.default.Messages.CHANNEL_PERMISSIONS_ADVANCED_PERMISSIONS, (0, s.jsx)(c.default, {
            expanded: e,
            className: m.titleCaret,
            width: 20,
            height: 20
          })]
        })
      }),
      children: e && (0, s.jsx)(n.default.div, {
        style: {
          opacity: t
        },
        children: (0, s.jsx)(d.default, {})
      })
    })]
  })
}