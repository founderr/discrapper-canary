n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250),
  s = n(470079),
  l = n(481060),
  a = n(946314),
  r = n(921944),
  o = n(689938),
  c = n(738934);

function u(e) {
  let {
    onClick: t,
    onSecondaryClick: n,
    onComponentMount: u,
    markAsDismissed: d
  } = e;
  s.useEffect(() => {
    null == u || u()
  }, [u]);
  let E = s.useCallback(e => {
      t(e), null == d || d(r.L.PRIMARY)
    }, [t, d]),
    h = s.useCallback(() => {
      null == n || n(), null == d || d(r.L.SECONDARY)
    }, [n, d]);
  return (0, i.jsxs)("div", {
    className: c.tooltipWrapper,
    children: [(0, i.jsx)(l.Heading, {
      className: c.tooltipHeader,
      variant: "heading-md/semibold",
      children: o.Z.Messages.SERVER_DISCOVERY_TOOLTIP_TITLE
    }), (0, i.jsx)(l.Text, {
      className: c.tooltipText,
      variant: "text-sm/normal",
      children: o.Z.Messages.SERVER_DISCOVERY_TOOLTIP_DESCRIPTION.format({
        count: a.WZ
      })
    }), (0, i.jsxs)("div", {
      className: c.buttonsContainer,
      children: [(0, i.jsx)(l.Button, {
        fullWidth: !0,
        size: l.Button.Sizes.SMALL,
        color: l.Button.Colors.BRAND,
        onClick: E,
        children: o.Z.Messages.LEARN_MORE
      }), (0, i.jsx)(l.Button, {
        fullWidth: !0,
        size: l.Button.Sizes.SMALL,
        look: l.Button.Looks.BLANK,
        onClick: h,
        children: o.Z.Messages.NO_THANKS
      })]
    })]
  })
}