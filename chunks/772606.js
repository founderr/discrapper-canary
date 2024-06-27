t.d(n, {
  Z: function() {
    return d
  }
});
var i = t(735250),
  l = t(470079),
  a = t(120356),
  r = t.n(a),
  s = t(330711),
  o = t(481060),
  c = t(695676),
  u = t(864247);

function d(e) {
  let {
    className: n
  } = e, {
    goBack: t
  } = (0, c.hH)(), a = l.useCallback(() => {
    t()
  }, [t]);
  return (0, i.jsx)(o.Clickable, {
    "aria-label": s.Z.Messages.BACK,
    onClick: a,
    className: r()(u.clickable, n),
    children: (0, i.jsx)(o.ArrowLargeLeftIcon, {
      size: "sm",
      color: o.tokens.colors.INTERACTIVE_ACTIVE
    })
  })
}