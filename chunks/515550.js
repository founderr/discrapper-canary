n.d(t, {
  Z: function() {
    return h
  }
});
var i = n(735250);
n(470079);
var s = n(481060),
  l = n(230711),
  a = n(100527),
  r = n(906732),
  o = n(170671),
  c = n(981631),
  u = n(921944),
  d = n(689938),
  E = n(512475);

function h(e) {
  let {
    markAsDismissed: t
  } = e, {
    analyticsLocations: n
  } = (0, r.ZP)(a.Z.APP_ICON_NEW_STYLES_COACHMARK);
  return (0, i.jsxs)("div", {
    className: E.container,
    children: [(0, i.jsx)("div", {
      className: E.banner
    }), (0, i.jsx)(s.Button, {
      "aria-label": d.Z.Messages.CLOSE,
      look: s.Button.Looks.BLANK,
      size: s.Button.Sizes.NONE,
      onClick: () => {
        t(u.L.USER_DISMISS)
      },
      className: E.closeButton,
      children: (0, i.jsx)(s.CloseSmallIcon, {
        size: "xs",
        className: E.closeIcon,
        color: "white"
      })
    }), (0, i.jsxs)("div", {
      className: E.body,
      children: [(0, i.jsx)(s.Heading, {
        variant: "heading-md/extrabold",
        className: E.text,
        children: d.Z.Messages.APP_ICON_NEW_STYLES_HEADER
      }), (0, i.jsxs)("div", {
        className: E.poweredByNitroContainer,
        children: [(0, i.jsx)(o.Z, {
          className: E.icon,
          isSelected: !0
        }), (0, i.jsx)(s.Text, {
          variant: "text-xxs/medium",
          className: E.text,
          children: d.Z.Messages.POWERED_BY_NITRO
        })]
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/medium",
        className: E.text,
        children: d.Z.Messages.APP_ICON_NEW_STYLES_BODY
      })]
    }), (0, i.jsx)(s.Button, {
      className: E.cta,
      look: s.Button.Looks.FILLED,
      color: s.Button.Colors.CUSTOM,
      onClick: () => {
        t(u.L.TAKE_ACTION), l.Z.open(c.oAB.APPEARANCE, null, {
          openWithoutBackstack: !0,
          analyticsLocations: n
        })
      },
      children: d.Z.Messages.APP_ICON_NEW_STYLES_CTA
    }), (0, i.jsx)("div", {
      className: E.pointer
    })]
  })
}