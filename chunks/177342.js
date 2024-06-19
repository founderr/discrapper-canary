n.d(t, {
  Q: function() {
    return h
  }
});
var l = n(735250),
  i = n(470079),
  s = n(286379),
  a = n(481060),
  r = n(797614),
  o = n(473092),
  c = n(689938),
  u = n(370826),
  d = n(560580);

function h(e) {
  let {
    channelId: t,
    warningId: n,
    senderId: h,
    warningType: m,
    header: p,
    description: E,
    onDismiss: g,
    buttons: f
  } = e;
  i.useEffect(() => {
    r.Z.increment({
      name: s.V.SAFETY_WARNING_VIEW
    })
  }, []);
  let C = i.useCallback(() => {
    null == g || g(), (0, o.qc)({
      channelId: t,
      warningId: n,
      senderId: h,
      warningType: m,
      cta: o.NM.USER_BANNER_DISMISS
    })
  }, [g, t, n, h, m]);
  return (0, l.jsxs)("div", {
    className: u.strangerDangerBanner,
    children: [(0, l.jsxs)("div", {
      className: u.shieldAndHeading,
      children: [(0, l.jsx)("img", {
        className: u.safetyShieldIcon,
        src: d,
        alt: ""
      }), (0, l.jsxs)("div", {
        children: [(0, l.jsx)(a.Heading, {
          variant: "heading-md/semibold",
          color: "text-primary",
          children: p
        }), (0, l.jsx)(a.Text, {
          variant: "text-sm/normal",
          color: "text-primary",
          children: E
        })]
      })]
    }), (0, l.jsx)("div", {
      className: u.buttons,
      children: null == f ? void 0 : f.map((e, t) => (0, l.jsx)(a.Button, {
        size: a.Button.Sizes.SMALL,
        color: e.color,
        "aria-label": e.text,
        onClick: e.onclick,
        className: u.ctaButton,
        children: e.text
      }, t))
    }), (0, l.jsx)(a.Clickable, {
      className: u.closeButton,
      onClick: C,
      role: "button",
      "aria-label": c.Z.Messages.DISMISS,
      children: (0, l.jsx)(a.CloseSmallIcon, {
        size: "md",
        color: "currentColor",
        className: u.closeButton
      })
    })]
  })
}